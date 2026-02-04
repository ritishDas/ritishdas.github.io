import currentwork from '../components/currentwork.js';
import { db } from '/database/db.js'
import { fetchElement, gardener, replaceElement, appendElement } from '/gardener.js'

replaceElement(fetchElement('#currentwork'), currentwork(db.current.title, db.current.date, db.current.description))
const projectDiv = fetchElement("#projects");

const projectContainer = gardener({
  t: 'div',
  cn: ['flex', 'justify-center', 'flex-wrap']
});

const database = db.projects;

database.forEach(entry => {
  const card = gardener({ t: 'div', cn: ['m-2', 'border', 'rounded-md', 'w-100'] });
  const top = gardener({
    t: 'div',
    children: [
      {
        t: 'img',
        cn: ["w-full", 'h-50', 'object-cover'],
        attr: { src: `../${entry.img}` }
      },
      {
        t: 'h3',
        cn: ["font-bold", 'text-2xl', 'm-5'],
        txt: entry.title
      },
      {
        t: 'p',
        cn: ['px-4'],
        txt: entry.description
      }
    ]
  })

  const middle = gardener(
    {
      t: 'div',
      cn: ['flex', 'flex-wrap', 'space-x-4', 'm-4'],
    });

  entry.tech.forEach(tech => {
    appendElement(middle, gardener({
      t: 'span',
      cn: ['p-2', 'bg-gray-200', 'text-black', 'm-1'],
      txt: tech
    }));
  });

  appendElement(card, top);
  appendElement(card, middle)
  appendElement(card, gardener({
    t: 'div',
    cn: ['flex', 'justify-around', 'm-2'],
    children: [
      {
        t: 'a',
        attr: { href: entry.github },
        cn: ['p-2', 'flex', 'space-x-2', 'hover:bg-primary-500', 'rounded-sm', 'justify-center', 'items-center', 'text-white', 'bg-secondary-500'],
        children: [
          {
            t: 'img',
            cn: ['w-10'],
            attr: {
              src: '../assets/github.svg'
            }
          },
          {
            t: 'span',
            txt: 'View Code'
          }
        ]
      },
      {
        t: 'a',
        attr: { href: entry.link },
        cn: ['p-2', 'flex', 'space-x-2', 'hover:bg-gray-500', 'rounded-sm', 'justify-center', 'items-center', 'text-white', 'bg-gray-800'],
        children: [
          {
            t: 'img',
            cn: ['w-10'],
            attr: {
              src: '../assets/arrow.svg'
            }
          },
          {
            t: 'span',
            txt: 'live Demo'
          }
        ]
      }
    ]
  }));
  appendElement(projectContainer, card);
});

replaceElement(projectDiv, projectContainer);
