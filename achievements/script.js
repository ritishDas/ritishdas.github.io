import { db } from '/database/db.js'
import { fetchElement, gardener, replaceElement, appendElement } from '/gardener.js'

const achievements = fetchElement('#achievements');

const database = db.achievements.awards;
const allimages = [];
database.forEach(entry => {
  entry.pics.forEach(pic => { allimages.push(pic) })
})
console.log(allimages)
const awardDiv = gardener({
  t: 'div',
  cn: ['flex', 'justify-center', 'flex-wrap']
});

database.forEach(award => {
  appendElement(awardDiv, gardener({
    t: 'div',
    cn: ['flex', 'flex-col', 'justify-between', 'm-4', 'p-4', 'border', 'rounded-md', 'w-100'],
    children: [
      {
        t: 'img',
        attr: {
          src: award.pics[0],
          alt: award.pics[0],
        },
        events: {
          click: () => { imageViewer(award.pics, 0) }
        }
      },
      {
        t: 'h3',
        cn: ["font-bold", 'text-2xl', 'my-5'],
        txt: award.title
      },
      {
        t: 'span',
        cn: ['italic', 'text-gray-600'],
        txt: award.issued
      },
      {
        t: 'p',
        cn: ['my-2'],
        txt: award.description
      },
    ]
  }));
})

replaceElement(achievements, awardDiv);

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
      "z-50"
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
    onclick: () => updateImage(imagesliderindex - 1)
  });

  const nextButton = gardener({
    t: "button",
    txt: "⟩",
    cn: [
      "cursor-pointer", "absolute", "right-4", "text-white", "text-4xl",
      "bg-black/40", "hover:bg-black/70", "rounded-full",
      "px-4", "py-2", "transition", "duration-200"
    ],
    onclick: () => updateImage(imagesliderindex + 1)
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
    onclick: () => closeSlider()
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

