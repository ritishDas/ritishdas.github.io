export const db = {
  skills: {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Zustand",
      "Vite",
      "Responsive Design",
    ],

    Backend: [
      "Node.js",
      "Express",
      "GraphQL",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Authentication (JWT, OAuth)",
      "WebSockets"
    ],

    Devops: [
      "Linux / Bash",
      "Git & GitHub",
      //  "Docker",
      //   "Kubernetes",
      //  "Nginx",

      //   "Azure",
      "Google Cloud Platform (GCP)",
    ],

    Testing: [
      // "Mocha / Chai",
      // "React Testing Library",
      //  "Cypress",
      // "Playwright",
      "Postman / Newman"
    ],

    Others: [
      // "Agile / Scrum",
      "System Design",
      "Design Patterns",
      "Problem Solving / DSA",
      // "API Documentation (Swagger, OpenAPI)",
      // "Security Best Practices (OWASP)"
    ]
  },
  featured: [
 {
      title: "Gardener",
      img: "assets/gardener.jpg",
      description: "A json based dom generator, uses recursion to generate a full dom tree of elements along with its styles and attributes, can be used in small projects where react is overkill.",
      link: "https://www.npmjs.com/package/create-gardener"
    }
  ,  {
      title: "Astm",
      img: "assets/astm.jpg",
      description: "An asset manager that saves assets like web components, code snippets, icons etc locally on your machine while also maintaining a backup on github.",
      link: "https://github.com/ritishDas/astm",
    },
    {
      title: "Ritish Das Portfolio",
      img: "assets/profile.jpg",
      description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
      link: "https://github.com/ritishDas/portfolio"
    },
   
  ],
  experience: {
    professional: [],
    club: [
      {
        company: "Picsel KDKCE",
        role: "Website Head",
        duration: "July 2025 – Present",
        address: "Nagpur, India",
        details: [
          "Leading our website team along with other leaders.",
          "Our team is responsible for the picsel website."
        ]
      },
      {
        company: "Picsel KDKCE",
        role: "Website Assistant",
        duration: "Aug 2024 - April 2025",
        address: "Nagpur",
        details: [
          "Was part of the main Website team",
          "Played active role in backend and deployment."
        ]
      },
      {
        company: "Coding Club KDKCE",
        role: "Joint Technical Head",
        duration: "Aug 2024 – April 2025",
        address: "Nagpur",
        details: [
          "Conducted many events with our team with 300+ participants",
          "Organized inter-college programming contests and hackathons.",
          "Helped peers improve problem-solving and competitive programming skills."
        ]
      },
      {
        company: "BIS Club KDKCE",
        role: "Joint Technical Head",
        duration: "Feb 2024 - April 2025",
        address: "Nagpur, India",
        details: [
          "Contributed to setting up BIS events.",
        ]
      }
    ]
  },
  projects: [
{
      title: "Gardener",
      img: "assets/gardener.jpg",
      description: "A json based dom generator, uses recursion to generate a full dom tree of elements along with its styles and attributes, can be used in small projects where react is overkill.",
      link: "https://www.npmjs.com/package/create-gardener",
      github: "https://github.com/ritishDas/gardener",
      tech: ["JS"]
    },
    {
      title: "Ritish Das Portfolio",
      img: "assets/profile.jpg",
      description:
        "A personal portfolio website to showcase my projects, skills, and experience. Built with responsive design.",
      link: "https://ritish.site",
      github: "https://github.com/ritishDas/portfolio",
      tech: ["HTML", "CSS", "JS", "gardener (my library)"]
    },
    
    {
      title: "Astm",
      img: "assets/astm.jpg",
      description: "An asset manager that saves assets like web components, code snippets, icons etc locally on your machine while also maintaining a backup on github.",
      link: "",
      github: "https://github.com/ritishDas/astm",
      tech: ["C++"]
    }
  ],
  moments: [
    [
      {
        title: "Start Of College🎓🎓",
        date: "Nov 2022",
        description: "First Time in Nagpur joined KDK College met many new friends.",
        photos: [
          "assets/1styr/pic6.jpg",
          "assets/1styr/pic7.jpg",
          { img: "assets/1styr/pic1.jpg", txt: "Our Gang 😂😅😅" },
          "assets/1styr/pic5.jpg",
        ]
      },
      {
        title: "Welcome To Nagpur🌇🌇",
        date: "Nov 2022",
        description: "Went out in the city with friends ",
        photos: [
          "assets/1styr/pic2.jpg",
          "assets/1styr/pic3.jpg",
          "assets/1styr/pic4.jpg",
        ]
      },
      {
        title: "Six kms of Walking for Science Exhibition 🥲",
        date: "Nov 2022",
        description: "We went to rtmnu campus to attend a science exhibition program.",
        photos: [
          "assets/1styr/pic8.jpg",
          { img: "assets/1styr/pic9.jpg", txt: "Finally 🥳🥳" },
          "assets/1styr/pic4.jpg",
        ]
      },
      {
        title: "Exhibition",
        date: "Nov 2022",
        description: "Saw a lot of Cool things 🔥🔥🔥 especially from DRDO",
        photos: [
          "assets/1styr/pic10.jpg",
          "assets/1styr/pic11.jpg",
          "assets/1styr/pic12.jpg",
          "assets/1styr/pic13.jpg",
          "assets/1styr/pic14.jpg", "assets/1styr/pic15.jpg", "assets/1styr/pic16.jpg", "assets/1styr/pic17.jpg",
        ]
      },

    ],
    [
      {
        title: "2nd in Code Fiesta🥳🥳 ",
        date: "June 2023",
        description: "Grabbed my first win came 2nd but still I would call it a win.",
        photos: [
          "assets/2ndyr/pic12.jpg",
          "assets/2ndyr/pic13.jpg"
        ]
      },
      {
        title: "AI is here guys mein to khud ko hi nhi pehchan pa raha 😂😂",
        date: "May 2023",
        description: "Trying AI image manipulation and editing ",
        photos: [
          "assets/2ndyr/pic2.jpg",
          "assets/2ndyr/pic3.jpg"
        ]
      },
      {
        title: "Hum bhi kam nhi",
        date: "May 2023",
        description: "Tried photo editing after long time. It was fun especially Amartya's reaction 😂 Model:Amartya Poster:RDR2",
        photos: [
          "assets/2ndyr/pic1.jpg",
        ]
      },
      {
        title: "Urges of photography📷📷",
        date: "May 2023",
        description: "Some good shots i took from my beloved phone📱",
        photos: [
          "assets/2ndyr/pic4.jpg",
          "assets/2ndyr/pic5.jpg",
          "assets/2ndyr/pic6.jpg",
          "assets/2ndyr/pic7.jpg",
          "assets/2ndyr/pic8.jpg",
        ]
      },

      {
        title: "Kya App Over Weight hai ya weight gain se pareshan h. MY ADVICE: Just join any hostel.",
        date: "May 2023",
        description: "Weight lost from 63kgs -> 55kgs",
        photos: [
          "assets/2ndyr/pic9.jpg",
          "assets/2ndyr/pic10.jpg",
          "assets/2ndyr/pic11.jpg",
        ]
      },
      {
        title: "Badminton Night 🏸🏸",
        date: "Nov 2023",
        description: "Badminton with Basit and friends",
        photos: [
          "assets/2ndyr/pic14.jpg",
        ]
      },
      {
        title: "Navonmesh 🕺💃",
        date: "Jan 2024",
        description: "Navonmesh The annual College function.",
        photos: [
          "assets/2ndyr/pic15.jpg",
          "assets/2ndyr/pic16.jpg",
          "assets/2ndyr/pic20.jpg",
          "assets/2ndyr/pic17.jpg", "assets/2ndyr/pic18.jpg", "assets/2ndyr/pic21.jpg", "assets/2ndyr/pic19.jpg",
        ]
      },
      {
        title: "A Trip to VNIT, nagpur",
        date: "April 2024",
        description: "Visited VNIT with my friends for a GDSC event.",
        photos: [
          "assets/2ndyr/pic22.jpg",
          "assets/2ndyr/pic23.jpg",
        ]
      },

    ],
    [
      {
        title: "Git/GitHub Tutorial",
        date: "January 2025",
        description: "This was a hands on session on git/GitHub with juniors",
        photos: [
          "assets/3rdyr/gitwork3.jpg",
          "assets/3rdyr/gitwork.jpg",
          "assets/3rdyr/gitwork2.jpg",
          "assets/3rdyr/gitwork4.jpg",
          "assets/3rdyr/gitwork5.jpg",
        ]
      },
      {
        title: "Nirvana 2025",
        date: "January 2025",
        description: "Our Annual College Event.",
        photos: [
          "assets/3rdyr/nirvana.jpg",
        ]
      },
      {
        title: "Hack On, Government CE, Nagpur",
        date: "January 2025",
        description: "Participated in Hack On 8 hour hackathon in Government CE, Nagpur",
        photos: [
          "assets/3rdyr/gce.jpg",
          "assets/3rdyr/gce2.jpg", "assets/3rdyr/gce3.jpg",
        ]
      },
      {
        title: "Central India Hackathon, Suryodaya CE, Nagpur",
        date: "January 2025",
        description: "Participated in the Central India 12 hr Hackathon in Suryodaya CE, though we didn't win but we learned a lot and enjoyed our first hackathon.",
        photos: [
          "assets/3rdyr/cih.jpg",
          "assets/3rdyr/cih2.jpg", "assets/3rdyr/cih3.jpg", "assets/3rdyr/cih4.jpg", "assets/3rdyr/cih5.jpg", "assets/3rdyr/cih6.jpg", "assets/3rdyr/cih7.jpg", "assets/3rdyr/cih8.jpg",
        ]
      },
      {
        title: "Hackathonix ",
        date: "April 2025",
        description: "Coding club kdkce presents hackenger, allergic to camera even cameraman hates me ",
        photos: [
          "assets/3rdyr/hackenger.jpg",
          "assets/3rdyr/hackenger2.jpg", "assets/3rdyr/hackenger3.jpg", "assets/3rdyr/hackenger4.jpg", "assets/3rdyr/hackenger5.jpg", "assets/3rdyr/hackenger6.jpg",
        ]
      },
      {
        title: "End Of Third Year ",
        date: "April 2025",
        description: "This year was a blast took part in a lot of activities and learned a lot",
        photos: [
          "assets/3rdyr/badges.jpg",
          "assets/3rdyr/eot.jpg", "assets/3rdyr/eot2.jpg", "assets/3rdyr/eot3.jpg", "assets/3rdyr/eot4.jpg", "assets/3rdyr/eot5.jpg", "assets/3rdyr/eot6.jpg",
        ]
      },

    ],
    [
      {
        title: "Final Year Welcome Back Lapy 🥹",
        date: "Aug 2025",
        description: "My laptop's SSD died and all my files are gone but atleast its alive.😁",
        photos: [
          "assets/4thyr/pic1.jpg",
          "assets/4thyr/pic2.jpg",
        ]
      },
      {
        title: "Rohan's Birthday",
        date: "Oct 2025",
        description: "Today is major project review and guess what it's also Rohan's Birthday 🎉",
        photos: [
          "assets/4thyr/rohan.jpg",
          "assets/4thyr/rohan2.jpg",
          "assets/4thyr/rohan3.jpg",
          "assets/4thyr/rohan4.jpg"
        ]
      },
      {
        title: "Navonmesh 2026",
        date: "Feb 2026",
        description: "Our Last Navonmesh in the College, will miss this time 🥲🥲, Tejas and me were given an award for creating the open elective system.",
        photos: [
          "assets/4thyr/navonmesh3.jpg",
          "assets/4thyr/navonmesh2.jpg",
          "assets/4thyr/navonmesh.jpg",
        ]
      }
    ]
  ],
  achievements: {
    certifications: [],
    awards: [
      {
        title: "Merit for software development",
        issued: "KDK College Of Engineering 2026",
        pics: ['/assets/4thyr/navonmesh2.jpg',
          '/assets/4thyr/navonmesh.jpg',
          '/assets/certs/sfd.jpg'
        ],
        description: "I was part of the team for development of the open elective platform 'eSelekt' in the college which streamlined the process of selectiing open elective subjects."
      },
      {
        title: "1st prize in Code Combat",
        issued: "GH Raisoni Institute Of Engineering, Nagpur - 2024",
        pics: ['/assets/3rdyr/codecombat.jpg',
          '/assets/2ndyr/codecombat.jpg'
        ],
        description: "This was a problem solving competition in which we were given some tasks and problems to solve. We were given an hour to code in our preferred language and results were declared on the basis of speed, accuracy and code quality."
      },
      {
        title: "1st prize in Techsphere",
        issued: "KDK College Of Engineering- 2024",
        pics: ['/assets/certs/Techsphere.jpg', '/assets/2ndyr/techsphere.jpg'],
        description: "This was a three round competition 1st was a technical quiz, second was code debugging, and the last round was a technical interview."
      },
      {
        title: "3rd prize in Spark 2025",
        issued: "KDK College Of Engineering - 2025",
        pics: [
          '/assets/certs/spark25.jpg',
          '/assets/certs/spark2.jpg',
          '/assets/certs/spark3.jpg', '/assets/certs/spark4.jpg',
        ],
        description: "This is a paper presentation competition in which our group presented a paper on title AI powered Collegiate Interactive Support System."
      },
      {
        title: "2nd prize in CodeFiesta",
        issued: "KDK College Of Engineering - 2023",
        pics: ['/assets/certs/CodeFiesta.jpg', '/assets/2ndyr/pic12.jpg', '/assets/2ndyr/pic13.jpg'],
        description: "This was a 3 round competition. 1st round was a quiz, 2nd was pseudocode round, 3rd was a problem solving round in which we were given a problem to solve. We were given limited time to code in our preferred language and results were declared on the basis of speed, accuracy and code quality. "
      },
      {
        title: "3rd prize in Spectra",
        issued: "KDK College Of Engineering - 2023",
        pics: ['/assets/certs/spectra.jpg'],
        description: "This was a debugging Competition in which we were given some code snippets and we need to debug it in limited time."
      },
    ],
    courses: []
  },
  current: {
    title: "eSelekt open elective",
    description: "Working on the frontend of eSelekt open elective selection platform.",
    date: '01-02-2026 - present'
  }
};
