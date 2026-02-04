import { db } from './database/db.js'
import { fetchElement, gardener, parser, replaceElement, appendElement } from './gardener.js'
import currentwork from './components/currentwork.js';
{
  const skillsparent = fetchElement("#skills");

  let newElement = gardener({
    t: 'div',
    cn: [
      'flex', 'justify-center', 'gap-8',
      'm-10', 'p-5',
      'flex-wrap'
    ]
  });

  let skills = db.skills;
  for (let key in skills) {
    let tempElement = gardener({
      t: 'div',
      cn: [
        'w-full', 'sm:w-[45%]', 'lg:w-[30%]',
        'p-5',
        'bg-background-800',
        'rounded-xl',
        'shadow-md',
        'transition', 'hover:shadow-lg'
      ]
    });

    let skillList = gardener({
      t: 'div',
      cn: [
        'flex', 'flex-wrap',
        'gap-2', 'mt-3'
      ]
    });

    skills[key].forEach(skill => {
      appendElement(skillList, gardener({
        t: 'span',
        txt: skill,
        cn: [
          'px-2', 'py-1',
          'bg-primary-600/30',
          'text-primary-400',
          'rounded-md',
          'text-sm',
          'font-medium'
        ]
      }))
    });

    appendElement(tempElement, gardener({
      t: 'h3',
      cn: [
        'font-bold', 'text-center',
        'text-lg', 'text-primary-300'
      ],
      txt: key
    }));

    appendElement(tempElement, skillList);

    appendElement(newElement, tempElement);
  }

  replaceElement(skillsparent, newElement);
}

// === Featured Section ===
const featuredParent = fetchElement("#featured");
const container = gardener({
  t: 'div',
  cn: [
    'grid',
    'gap-8',
    'sm:grid-cols-2',
    'lg:grid-cols-3',
    'px-6'
  ]
});

db.featured.forEach(featured => {
  const card = gardener({
    t: 'div',
    cn: [
      'bg-background-800',
      'rounded-xl',
      'overflow-hidden',
      'shadow-md',
      'transition',
      'hover:shadow-lg'
    ],
    children: [
      {
        t: 'img',
        cn: ['w-full', 'h-52', 'object-cover'],
        attr: {
          src: featured.img,
          alt: featured.title
        }
      },
      {
        t: 'div',
        cn: ['p-5'],
        children: [
          {
            t: 'h3',
            cn: ['font-bold', 'text-xl', 'text-primary-300'],
            txt: featured.title
          },
          {
            t: 'p',
            cn: ['mt-2', 'text-sm', 'text-gray-700'],
            txt: featured.description
          },
          {
            t: 'a',
            cn: [
              'inline-block',
              'mt-4',
              'px-4', 'py-2',
              'rounded-md',
              'bg-primary-600',
              'text-text-100',
              'font-medium',
              'hover:bg-primary-700',
              'transition'
            ],
            attr: { href: featured.link },
            txt: "Learn More"
          }
        ]
      }
    ]
  });

  appendElement(container, card);
});

replaceElement(featuredParent, container);

//


replaceElement(fetchElement('#currentwork'), currentwork(db.current.title, db.current.date, db.current.description))
