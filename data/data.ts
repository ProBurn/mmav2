export const lessons = [
  {
    img: '/content/drum.jpg',
    href:'/lessons/drum-lesson',
    name: 'Drum Lesson',
    title: 'learn more ->',
    quote:
      'Thanks to Radiant, we’re finding new leads that we never would have found with legal methods.',
  },
  {
    img: '/content/Bass (2).jpg',
    href:'/lessons/bass-lesson',
    name: 'Bass Lesson',
    title: 'Learn more ->',
    quote:
      'Radiant made undercutting all of our competitors an absolute breeze.',
  },
  {
    img: '/content/piano.jpg',
    href:'/lessons/piano-lesson',
    name: 'Piano Lesson',
    title: 'Head of GTM, Pocket',
    quote:
      'We closed a deal in literally a few minutes because we knew their exact budget.',
  },
  {
    img: '/content/singing.jpg',
    href:'/lessons/singing-lesson',
    name: 'Singing Lesson',
    title: 'CSO, Planeteria',
    quote:
      'We’ve managed to put two of our main competitors out of business in 6 months.',
  },
  {
    img: '/content/ukulele.jpg',
    href:'/lessons/ukulele-lesson',
    name: 'Ukulele Lesson',
    title: 'VP of Sales, Detax',
    quote: 'I was able to replace 80% of my team with RadiantAI bots.',
  },
  {
    img: '/content/guitar.jpg',
    href:'/lessons/guitar-lesson',
    name: 'Guitar Lesson',
    title: 'Account Manager, Commit',
    quote:
      'I’ve smashed all my targets without having to speak to a lead in months.',
  },
]

export interface Testimonial {
  quote: string;
  name: string;
  title?: string; // Optional property
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I can't recommend Zoe highly enough. Zoe has looked after our 3 dogs many times. Zoe is so trustworthy and caring, she goes beyond what is expected. We feel at ease when we go away that she loves and looks after our dogs nearly as much as we do and feel very supported. 5 *",
    name: "Annalice Argyle",
    // title: "A Tale of Two Cities",
  },
  {
    quote:
      "Highly recommend ❤️❤️",
    name: "Carolynne Ruddick",
    // title: "Hamlet",
  },
  {
    quote: "Only person I would trust with my pups, she really is the best ❤️",
    name: "Mia Louise Goodenough",
    // title: "A Dream Within a Dream",
  },
  {
    quote:
      "I can't recommend Zoe enough, she has been grooming our Darwin for quite a few years now, including during her apprenticeship. Such a conscientious and caring dog lover. Do give her skills ago, you won't be disappointed 🐕🐩🦮",
    name: "Eddie Humphries",
    // title: "Pride and Prejudice",
  },
  {
    quote:
      "You are doing a fantastic job at looking after all these beautiful dogs. You are a very caring person and the dogs are lucky to have you.",
    name: "Unknown",
    // title: "Moby-Dick",
  },
  {
    quote:
      "How beautiful does my Billy look!! I actually cried when I seen him 🥹💙 All thanks to Zoe Symes. Highly recommend she is absolutely brilliant with Billy he loves his visits and walks",
    name: "Olivia Davidson",
    // title: "Moby-Dick",
  },
];

interface MenuItem {
  id: number;
  label: string;
  href: string;
  dropdown?: MenuItem[];
}
const menuItems: MenuItem[] = [
  { id: 1, label: 'About', href: '/about' },
  {
    id: 2, label: 'Lessons', href: '/lessons',
    dropdown: [
      { id: 1, label: 'Drum', href: '/lessons/drum' },
      { id: 2, label: 'Guitar', href: '/lessons/guitar' },
      { id: 3, label: 'Bass', href: '/lessons/bass' },
      { id: 4, label: 'Piano', href: '/lessons/piano' },
      { id: 5, label: 'Ukulele', href: '/lessons/ukulele' },
      { id: 6, label: 'Singing', href: '/lessons/singing' },
    ]
  },
  { id: 3, label: 'Contact', href: '/contact' },
];


export type Teaches = 'drums' | 'guitar' | 'singing' | 'piano' | 'bass' | 'ukulele';

export const team: {
  name: string,
  role: string,
  teaches?: Teaches[],
  imageUrl: string
}[] = [
    {
      name: 'Christopher James Meek',
      role: 'Co-Founder / CTO',
      teaches: ['drums'],
      imageUrl:
        '/avatars/chris.jpg',
    },
    {
      name: 'Mhristopher Cames Jeek',
      role: 'Co-Founder / CTO',
      teaches: ['drums', 'guitar'],
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
      name: 'Jimmy Carr',
      role: 'Funny guy',
      imageUrl:
        'https://i.guim.co.uk/img/media/e4ae055cd7e0b946e216e2a43a97fcf085c364e6/463_41_2032_1219/master/2032.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6a19aa0e164cc51f2a2770b8bff5776d',
    },
    {
      name: 'Dan',
      role: 'Drum Teacher',
      imageUrl:
        'https://s.abcnews.com/images/GMA/240530_gma_digital_samuelljackson_hpMain_4x5_608.jpg',
    },
    {
      name: 'Jono',
      role: 'Guitar Teacher',
      imageUrl:
        'https://d3i6fh83elv35t.cloudfront.net/static/2024/03/2017-05-02T120000Z_842525135_HP1ED52032BRW_RTRMADP_3_FASHION-METGALA-1024x677.jpg',
    },
    {
      name: 'Your mam',
      role: 'mall cop',
      teaches: ['drums', 'guitar', 'singing', 'piano', 'bass', 'ukulele'],
      imageUrl:
        'https://i0.wp.com/tremg.info/wp-content/uploads/2020/08/paul-blart.jpg?resize=1200%2C1200&ssl=1&w=640',
    },
    // More people...
  ]


  interface LessonVariant {
    name: string;
    length: number;
    price: string;
    description: string;
  }

  interface LessonSectionContent {
    label: string;
    text: string;
  }

  interface LessonSection {
    heading: string;
    description?: string;
    content: LessonSectionContent[];
  }

  interface LessonBreadcrumb {
    id: number;
    name: string;
    href: string;
  }

  interface LessonSize {
    name: string;
    description: string;
  }

  interface LessonPage {
    name: string;
    teaches: Teaches;
    slug: string;
    version: { name: string; date: string; datetime: string };
    variants: LessonVariant[];
    price: string;
    description: string;
    highlights: string[];
    imageSrc: string;
    imageAlt: string;
    breadcrumbs: LessonBreadcrumb[];
    sizes: LessonSize[];
    sections: LessonSection[];
  }

  export const lessonPages: LessonPage[] = [
  {
    name: 'Drum Lesson',
    teaches: 'drums',
    slug: 'drum-lesson',
    version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
    variants: [
      { name: '20 minutes', length: 20, price: '£12.50', description: 'Perfect for a reasonable amount of snacks.'}, { name: '40 minutes', length: 40, price: '£20', description: "Enough room for a serious amount of snacks." }
    ],
    price: '$220',

    description: "Our expert drum lessons cater to all skill levels, from beginners to advanced players. Whether you're learning the basics, perfecting your technique, or working towards a musical qualification, we provide personalized lessons to help you reach your drumming goals. Choose from flexible 1-2-1 sessions in 20 or 45-minute durations.",
    sections: [
      {
        heading: "What We Offer",
        description: "At Middlesbrough Music Academy, we offer a comprehensive range of drum lessons designed to cater to every drummer's needs. Whether you're just starting your musical journey or looking to refine your skills, our lessons are personalized to help you achieve your goals. Our experienced instructors ensure that every lesson is engaging and tailored specifically to your pace and aspirations, helping you become the drummer you've always wanted to be.",
        content: [
          { label: "Personalized Lessons:", text: "Tailored to your individual goals, whether it's learning to read music, mastering rudiments, or exploring new grooves." },
          { label: "Grade Tuition:", text: "Prepare for music exams from grades 1-8 or GCSE Music with structured lessons designed to help you succeed." }
        ]
      },
      {
        heading: "Lesson Duration & Flexibility",
        content: [
          { label: "Flexible Scheduling:", text: "Choose between 20-minute or 45-minute lessons to fit your lifestyle and progress." },
          { label: "1-2-1 Instruction:", text: "All lessons are taught on a one-to-one basis, ensuring dedicated attention to your development." }
        ]
      },
      {
        heading: "Why Choose Middlesbrough Music Academy?",
        content: [
          { label: "Expert Instructors:", text: "Our teachers are passionate, experienced musicians who are committed to your growth." },
          { label: "All Skill Levels Welcome:", text: "Whether you're a beginner or an experienced player, our lessons will help you improve and reach new heights." }
        ]
      }
    ],
    highlights: [
      '200+ SVG icons in 3 unique styles',
      'Compatible with Figma, Sketch, and Adobe XD',
      'Drawn on 24 x 24 pixel grid',
    ],
    imageSrc: '/content/drum.jpg',
    imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
    breadcrumbs: [
      { id: 1, name: 'Lessons', href: '#' },
      { id: 2, name: 'Drum Lesson', href: '#' },
    ],
    sizes: [
      { name: '20 minute', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '40 minute', description: 'Enough room for a serious amount of snacks.' },
    ],
  },

  {
    name: 'Guitar Lesson',
    slug: 'guitar-lesson',
    teaches: 'guitar',
    version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
    variants: [
      { name: '20 minutes', length: 20, price: '£12.50', description: 'Perfect for a reasonable amount of snacks.'}, { name: '40 minutes', length: 40, price: '£20', description: "Enough room for a serious amount of snacks." }
    ],
    price: '$220',
    description:
      'Learn to play the guitar with our comprehensive lessons. Suitable for all levels.',
    highlights: [
      'Experienced instructors',
      'Personalized lesson plans',
      'Flexible scheduling',
    ],
    imageSrc: '/content/guitar.jpg',
    imageAlt: 'Guitar lesson image',
    breadcrumbs: [
      { id: 1, name: 'Lessons', href: '#' },
      { id: 2, name: 'Guitar Lesson', href: '#' },
    ],
    sizes: [
      { name: '20 minute', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '40 minute', description: 'Enough room for a serious amount of snacks.' },
    ],
    sections: [
      {
        heading: "What We Offer",
        description: "At Middlesbrough Music Academy, we offer a comprehensive range of drum lessons designed to cater to every drummer's needs. Whether you're just starting your musical journey or looking to refine your skills, our lessons are personalized to help you achieve your goals. Our experienced instructors ensure that every lesson is engaging and tailored specifically to your pace and aspirations, helping you become the drummer you've always wanted to be.",
        content: [
          { label: "Personalized Lessons:", text: "Tailored to your individual goals, whether it's learning to read music, mastering rudiments, or exploring new grooves." },
          { label: "Grade Tuition:", text: "Prepare for music exams from grades 1-8 or GCSE Music with structured lessons designed to help you succeed." }
        ]
      },
      {
        heading: "Lesson Duration & Flexibility",
        content: [
          { label: "Flexible Scheduling:", text: "Choose between 20-minute or 45-minute lessons to fit your lifestyle and progress." },
          { label: "1-2-1 Instruction:", text: "All lessons are taught on a one-to-one basis, ensuring dedicated attention to your development." }
        ]
      },
      {
        heading: "Why Choose Middlesbrough Music Academy?",
        content: [
          { label: "Expert Instructors:", text: "Our teachers are passionate, experienced musicians who are committed to your growth." },
          { label: "All Skill Levels Welcome:", text: "Whether you're a beginner or an experienced player, our lessons will help you improve and reach new heights." }
        ]
      }
    ],
  },

  {
    name: 'Piano Lesson',
    teaches: 'piano',
    slug: 'piano-lesson',
    version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
    variants: [
{ name: '20 minutes', length: 20, price: '£12.50', description: 'Perfect for a reasonable amount of snacks.'}, { name: '40 minutes', length: 40, price: '£20', description: "Enough room for a serious amount of snacks." }
    ],
    price: '$220',
    description:
      'Master the piano with our step-by-step lessons. Perfect for beginners and advanced players.',
    highlights: [
      'Professional piano teachers',
      'Customizable lesson plans',
      'Convenient online sessions',
    ],
    imageSrc: '/content/piano.jpg',
    imageAlt: 'Piano lesson image',
    breadcrumbs: [
      { id: 1, name: 'Lessons', href: '#' },
      { id: 2, name: 'Piano Lesson', href: '#' },
    ],
    sizes: [
      { name: '20 minute', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '40 minute', description: 'Enough room for a serious amount of snacks.' },
    ],
    sections: [
      {
        heading: "What We Offer",
        description: "At Middlesbrough Music Academy, we offer a comprehensive range of drum lessons designed to cater to every drummer's needs. Whether you're just starting your musical journey or looking to refine your skills, our lessons are personalized to help you achieve your goals. Our experienced instructors ensure that every lesson is engaging and tailored specifically to your pace and aspirations, helping you become the drummer you've always wanted to be.",
        content: [
          { label: "Personalized Lessons:", text: "Tailored to your individual goals, whether it's learning to read music, mastering rudiments, or exploring new grooves." },
          { label: "Grade Tuition:", text: "Prepare for music exams from grades 1-8 or GCSE Music with structured lessons designed to help you succeed." }
        ]
      },
      {
        heading: "Lesson Duration & Flexibility",
        content: [
          { label: "Flexible Scheduling:", text: "Choose between 20-minute or 45-minute lessons to fit your lifestyle and progress." },
          { label: "1-2-1 Instruction:", text: "All lessons are taught on a one-to-one basis, ensuring dedicated attention to your development." }
        ]
      },
      {
        heading: "Why Choose Middlesbrough Music Academy?",
        content: [
          { label: "Expert Instructors:", text: "Our teachers are passionate, experienced musicians who are committed to your growth." },
          { label: "All Skill Levels Welcome:", text: "Whether you're a beginner or an experienced player, our lessons will help you improve and reach new heights." }
        ]
      }
    ],
  },

  {
    name: 'Singing Lesson',
    teaches: 'singing',
    slug: 'singing-lesson',
    version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
    variants: [
{ name: '20 minutes', length: 20, price: '£12.50', description: 'Perfect for a reasonable amount of snacks.'}, { name: '40 minutes', length: 40, price: '£20', description: "Enough room for a serious amount of snacks." }
    ],
    price: '$220',
    description:
      'Enhance your vocal skills with our expert singing lessons. Suitable for all ages.',
    highlights: [
      'Voice training exercises',
      'Breathing techniques',
      'Performance tips',
    ],
    imageSrc: '/content/singing.jpg',
    imageAlt: 'Singing lesson image',
    breadcrumbs: [
      { id: 1, name: 'Lessons', href: '#' },
      { id: 2, name: 'Singing Lesson', href: '#' },
    ],
    sizes: [
      { name: '20 minute', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '40 minute', description: 'Enough room for a serious amount of snacks.' },
    ],
    sections: [
      {
        heading: "What We Offer",
        description: "At Middlesbrough Music Academy, we offer a comprehensive range of drum lessons designed to cater to every drummer's needs. Whether you're just starting your musical journey or looking to refine your skills, our lessons are personalized to help you achieve your goals. Our experienced instructors ensure that every lesson is engaging and tailored specifically to your pace and aspirations, helping you become the drummer you've always wanted to be.",
        content: [
          { label: "Personalized Lessons:", text: "Tailored to your individual goals, whether it's learning to read music, mastering rudiments, or exploring new grooves." },
          { label: "Grade Tuition:", text: "Prepare for music exams from grades 1-8 or GCSE Music with structured lessons designed to help you succeed." }
        ]
      },
      {
        heading: "Lesson Duration & Flexibility",
        content: [
          { label: "Flexible Scheduling:", text: "Choose between 20-minute or 45-minute lessons to fit your lifestyle and progress." },
          { label: "1-2-1 Instruction:", text: "All lessons are taught on a one-to-one basis, ensuring dedicated attention to your development." }
        ]
      },
      {
        heading: "Why Choose Middlesbrough Music Academy?",
        content: [
          { label: "Expert Instructors:", text: "Our teachers are passionate, experienced musicians who are committed to your growth." },
          { label: "All Skill Levels Welcome:", text: "Whether you're a beginner or an experienced player, our lessons will help you improve and reach new heights." }
        ]
      }
    ],
  },

  {
    name: 'Bass Lesson',
    teaches: 'bass',
    slug: 'bass-lesson',
    version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
    variants: [
{ name: '20 minutes', length: 20, price: '£12.50', description: 'Perfect for a reasonable amount of snacks.'}, { name: '40 minutes', length: 40, price: '£20', description: "Enough room for a serious amount of snacks." }
    ],
    price: '$220',
    description:
      'Learn to play the bass guitar with our structured lessons. Ideal for all skill levels.',
    highlights: [
      'Experienced bass instructors',
      'Tailored lesson plans',
      'Flexible learning pace',
    ],
    imageSrc: '/content/bass.jpg',
    imageAlt: 'Bass lesson image',
    breadcrumbs: [
      { id: 1, name: 'Lessons', href: '#' },
      { id: 2, name: 'Bass Lesson', href: '#' },
    ],
    sizes: [
      { name: '20 minute', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '40 minute', description: 'Enough room for a serious amount of snacks.' },
    ],
    sections: [
      {
        heading: "What We Offer",
        description: "At Middlesbrough Music Academy, we offer a comprehensive range of drum lessons designed to cater to every drummer's needs. Whether you're just starting your musical journey or looking to refine your skills, our lessons are personalized to help you achieve your goals. Our experienced instructors ensure that every lesson is engaging and tailored specifically to your pace and aspirations, helping you become the drummer you've always wanted to be.",
        content: [
          { label: "Personalized Lessons:", text: "Tailored to your individual goals, whether it's learning to read music, mastering rudiments, or exploring new grooves." },
          { label: "Grade Tuition:", text: "Prepare for music exams from grades 1-8 or GCSE Music with structured lessons designed to help you succeed." }
        ]
      },
      {
        heading: "Lesson Duration & Flexibility",
        content: [
          { label: "Flexible Scheduling:", text: "Choose between 20-minute or 45-minute lessons to fit your lifestyle and progress." },
          { label: "1-2-1 Instruction:", text: "All lessons are taught on a one-to-one basis, ensuring dedicated attention to your development." }
        ]
      },
      {
        heading: "Why Choose Middlesbrough Music Academy?",
        content: [
          { label: "Expert Instructors:", text: "Our teachers are passionate, experienced musicians who are committed to your growth." },
          { label: "All Skill Levels Welcome:", text: "Whether you're a beginner or an experienced player, our lessons will help you improve and reach new heights." }
        ]
      }
    ],
  },

  {
    name: 'Ukulele Lesson',
    teaches: 'ukulele',
    slug: 'ukulele-lesson',
    version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
    variants: [
{ name: '20 minutes', length: 20, price: '£12.50', description: 'Perfect for a reasonable amount of snacks.'}, { name: '40 minutes', length: 40, price: '£20', description: "Enough room for a serious amount of snacks." }
    ],
    price: '$220',
    description:
      'Pick up the ukulele with our fun and engaging lessons. Great for beginners and enthusiasts.',
    highlights: [
      'Easy-to-follow instructions',
      'Interactive learning',
      'Supportive community',
    ],
    imageSrc: '/content/ukulele.jpg',
    imageAlt: 'Ukulele lesson image',
    breadcrumbs: [
      { id: 1, name: 'Lessons', href: '#' },
      { id: 2, name: 'Ukulele Lesson', href: '#' },
    ],
    sizes: [
      { name: '20 minute', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '40 minute', description: 'Enough room for a serious amount of snacks.' },
    ],
    sections: [
      {
        heading: "What We Offer",
        description: "At Middlesbrough Music Academy, we offer a comprehensive range of drum lessons designed to cater to every drummer's needs. Whether you're just starting your musical journey or looking to refine your skills, our lessons are personalized to help you achieve your goals. Our experienced instructors ensure that every lesson is engaging and tailored specifically to your pace and aspirations, helping you become the drummer you've always wanted to be.",
        content: [
          { label: "Personalized Lessons:", text: "Tailored to your individual goals, whether it's learning to read music, mastering rudiments, or exploring new grooves." },
          { label: "Grade Tuition:", text: "Prepare for music exams from grades 1-8 or GCSE Music with structured lessons designed to help you succeed." }
        ]
      },
      {
        heading: "Lesson Duration & Flexibility",
        content: [
          { label: "Flexible Scheduling:", text: "Choose between 20-minute or 45-minute lessons to fit your lifestyle and progress." },
          { label: "1-2-1 Instruction:", text: "All lessons are taught on a one-to-one basis, ensuring dedicated attention to your development." }
        ]
      },
      {
        heading: "Why Choose Middlesbrough Music Academy?",
        content: [
          { label: "Expert Instructors:", text: "Our teachers are passionate, experienced musicians who are committed to your growth." },
          { label: "All Skill Levels Welcome:", text: "Whether you're a beginner or an experienced player, our lessons will help you improve and reach new heights." }
        ]
      }
    ],
  }
]