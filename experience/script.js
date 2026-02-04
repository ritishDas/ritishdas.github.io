import { db } from '/database/db.js'
import { fetchElement, gardener, replaceElement, appendElement } from '/gardener.js'

const proexp = fetchElement('#proexp');
const clubexp = fetchElement('#clubexp');

const experienceData = db.experience;

const proexpContainer = gardener({
  t: 'div',
  cn: ['flex', 'items-start', 'justify-around', 'flex-wrap', 'space-x-4']
});
const clubexpContainer = gardener({
  t: 'div',
  cn: ['flex', 'items-start', 'justify-around', 'flex-wrap', 'space-x-4']
});

experienceData.professional.forEach(exp => {

  appendElement(proexpContainer, createCard(exp));

});

experienceData.club.forEach(exp => {

  appendElement(clubexpContainer, createCard(exp));

});

function createCard(exp) {
  let details = gardener({ t: 'ul', cn: ['list-disc', 'p-5'] });

  exp.details.forEach(input => {
    appendElement(details, gardener({
      t: 'li',
      txt: input
    }));
  });

  const card = gardener({
    t: 'div',
    cn: ["border", 'w-100', "border-gray-300", "rounded-lg", "p-4", "m-4", "w-80", "shadow-lg"],
    children: [
      {
        t: 'h3',
        cn: ['text-xl', 'font-semibold', 'mt-2'],
        txt: exp.role,
      },
      {
        t: 'p',
        cn: ['text-gray-600'],
        txt: exp.company,
      },
      {
        t: 'p',
        cn: ['text-primary-500', 'mt-2'],
        txt: exp.duration,
      },
      {
        t: 'p',
        cn: ['text-gray-500'],
        txt: exp.address,
      }
    ]
  });

  appendElement(card, details);
  return card;
}

replaceElement(proexp, proexpContainer);
replaceElement(clubexp, clubexpContainer);
