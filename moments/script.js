import { db } from '/database/db.js'
import { fetchElement, gardener, replaceElement, appendElement } from '/gardener.js'


const timeline = fetchElement('#timeline');

document.addEventListener('scroll', () => {
  const scrollPos = window.scrollY; // current scroll offset from top

  timeline.style.height = `${scrollPos + 100}px`;
});

//const moments = db.moments;

function momentGen(moments, index) {
  const parent = fetchElement('#moments');
  const yearbtn = fetchElement('#yearbtn');
  const newYearbtn = gardener({
    t: 'ul',
    attr: { id: 'yearbtn' },
    cn: ['flex', 'w-full', 'gap-4', 'md:gap-6', 'p-4', 'fixed', 'z-2', 'overflow-x-auto', 'text-lg', 'font-medium', 'text-gray-700']
  });

  for (let i = 0; i < 4; i++) {
    appendElement(newYearbtn, gardener({
      t: 'li',
      txt: `Year ${i + 1}`,
      events: {
        click: () => { momentGen(db.moments[i], i) }
      }
      ,
      cn: ['cursor-pointer', 'px-4', 'py-2', 'bg-gray-100', 'rounded-lg', 'hover:bg-gray-200', 'transition'],
      attr: { style: (i === index ? 'background:red;' : '') }
    }));
  }

  replaceElement(yearbtn, newYearbtn);
  const newParent = gardener({
    t: 'div',
    attr: { id: 'moments' },
    cn: ['min-h-[70vh]', 'w-[80%]', 'mx-auto']
  });

  moments.forEach((moment, index) => {
    const isEven = index % 2 === 0;

    // Image + "See more" wrapper
    const imageWrapper = gardener({
      t: 'div',
      cn: ['w-full', 'md:w-1/2', 'flex', 'flex-col', 'items-center']
    });

    const image = gardener({
      t: 'img',
      attr: { src: `../${moment.photos[0]}` },
      cn: ['w-full', 'object-cover', 'rounded-lg', 'cursor-pointer', 'shadow-lg'],
      events: {
        click: () => { imageViewer(moment.photos, 0) }
      }
    });

    const seeMore = gardener({
      t: 'span',
      txt: 'See more',
      cn: [
        'mt-2', 'text-lg', 'bg-blue-500', 'cursor-pointer',
        'hover:underline', 'transition', 'p-2', 'rounded-sm'
      ],
      events: {
        click: () => { imageViewer(moment.photos, 0) }
      }

    });

    appendElement(imageWrapper, image);
    appendElement(imageWrapper, seeMore);

    const textContent = gardener({
      t: 'div',
      cn: ['w-full', 'md:w-1/2', 'p-8'],
      children: [
        {
          t: 'h3',
          cn: ['text-3xl', 'font-bold', 'mb-4'],
          txt: moment.title
        },
        {
          t: 'p',
          cn: ['text-gray-400', 'mb-4'],
          txt: moment.date
        },
        {
          t: 'p',
          cn: ['text-text-700', 'leading-relaxed'],
          txt: moment.description
        }
      ]
    });

    const momentCard = gardener({
      t: 'div',
      cn: ['flex', 'flex-col', 'md:flex-row', 'items-center', 'my-20', 'gap-8']
    });

    if (isEven) {
      appendElement(momentCard, imageWrapper);
      appendElement(momentCard, textContent);
    } else {
      appendElement(momentCard, textContent);
      appendElement(momentCard, imageWrapper);
    }

    appendElement(newParent, momentCard);
  });

  replaceElement(parent, newParent);
}


function imageViewer(images, imagesliderindex) {
  const parentView = fetchElement('#imageViewer');

  // wrapper
  const imageWrapper = gardener({
    t: "div",
    attr: { id: "imageViewer" },
    cn: [
      "fixed", "top-0", "left-0",
      "w-screen", "h-screen",
      "flex", "justify-center", "items-center",
      "bg-black/80",
      "z-10"
    ]
  });

  // image + optional caption
  let imageElement, captionElement;

  if (typeof images[imagesliderindex] === "string") {
    imageElement = gardener({
      t: "img",
      attr: {
        src: `../${images[imagesliderindex]}`,
        alt: images[imagesliderindex]
      },
      cn: ["max-h-[80vh]", "max-w-[90vw]", "rounded-2xl", "shadow-xl", "transition", "duration-300"]
    });
  } else {
    captionElement = gardener({
      t: "span",
      txt: images[imagesliderindex].txt,
      cn: ["text-white", "mb-4", "block", "text-center"]
    });
    imageElement = gardener({
      t: "img",
      attr: {
        src: `../${images[imagesliderindex].img}`,
        alt: images[imagesliderindex].img
      },
      cn: ["max-h-[80vh]", "max-w-[90vw]", "rounded-2xl", "shadow-xl", "transition", "duration-300"]
    });
  }

  // update function
  function updateImage(newIndex) {
    imagesliderindex = (newIndex + images.length) % images.length;
    if (typeof images[imagesliderindex] === "string") {
      imageElement.setAttribute("src", `../${images[imagesliderindex]}`);
      imageElement.setAttribute("alt", images[imagesliderindex]);
      if (captionElement) captionElement.textContent = "";
    } else {
      imageElement.setAttribute("src", `../${images[imagesliderindex].img}`);
      imageElement.setAttribute("alt", images[imagesliderindex].img);
      if (captionElement) captionElement.textContent = images[imagesliderindex].txt;
    }
  }

  // navigation buttons
  const prevButton = gardener({
    t: "button",
    txt: "⟨",
    cn: [
      "cursor-pointer", "absolute", "left-4", "text-white", "text-4xl",
      "bg-black/40", "hover:bg-black/70", "rounded-full",
      "px-4", "py-2", "transition", "duration-200"
    ],
    events: {
      click: () => updateImage(imagesliderindex - 1)
    }
  });

  const nextButton = gardener({
    t: "button",
    txt: "⟩",
    cn: [
      "cursor-pointer", "absolute", "right-4", "text-white", "text-4xl",
      "bg-black/40", "hover:bg-black/70", "rounded-full",
      "px-4", "py-2", "transition", "duration-200"
    ],
    events: {
      click: () => updateImage(imagesliderindex + 1)
    }
  });

  const closeButton = gardener({
    t: "button",
    txt: "×",
    cn: [
      "absolute", "top-4", "right-4",
      "text-white", "text-3xl", "font-bold",
      "bg-black/40", "hover:bg-black/70",
      "rounded-full",
      "w-10", "h-10",
      "flex", "items-center", "justify-center",
      "transition", "duration-200",
      "cursor-pointer", "select-none"
    ],
    events: {
      click: () => closeSlider()
    }
  });

  if (captionElement) appendElement(imageWrapper, captionElement);
  appendElement(imageWrapper, imageElement);
  appendElement(imageWrapper, prevButton);
  appendElement(imageWrapper, nextButton);
  appendElement(imageWrapper, closeButton);

  replaceElement(parentView, imageWrapper);

  // 🔑 keyboard controls
  function keyHandler(e) {
    if (e.key === "ArrowRight") updateImage(imagesliderindex + 1);
    if (e.key === "ArrowLeft") updateImage(imagesliderindex - 1);
    if (e.key === "Escape") closeSlider();
  }

  document.addEventListener("keydown", keyHandler);

  // cleanup on close
  function closeSlider() {
    document.removeEventListener("keydown", keyHandler);
    const parentView = fetchElement('#imageViewer');
    replaceElement(parentView, gardener({
      t: 'div',
      attr: { id: 'imageViewer' }
    }));
  }
}

momentGen(db.moments[0], 0);
