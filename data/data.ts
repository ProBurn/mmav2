export type Teaches = 'drums' | 'guitar' | 'singing' | 'piano' | 'bass' | 'ukulele';

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
    img: '/content/bass (2).jpg',
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
  lessonType: Teaches;
}

export const testimonials: Testimonial[] = [
  {
    quote: "The drum lessons at Middlesbrough Music Academy transformed my playing! The teachers are so supportive and I’ve learned techniques I never thought were possible.",
    name: "Tommy J.",
    lessonType: "drums"
  },
  {
    quote: "As an adult learner, I was nervous to start guitar lessons, but the team here made me feel welcome and encouraged every step of the way. My playing has improved so much!",
    name: "Emma W.",
    lessonType: "guitar"
  },
  {
    quote: "The piano lessons are fantastic! I’ve been taking classes for a year now, and the progress I’ve made is incredible. I feel so confident now, thanks to the wonderful teachers.",
    name: "Jack L.",
    lessonType: "piano"
  },
  {
    quote: "I’ve been playing bass for years, but the lessons at Middlesbrough Music Academy have really taken my skills to the next level. The teachers are amazing and the community is so welcoming.",
    name: "Chris R.",
    lessonType: "bass"
  },
  {
    quote: "I always wanted to learn the ukulele, and I’m so glad I found Middlesbrough Music Academy. The lessons are fun and the teachers really make sure you understand everything.",
    name: "Sophie M.",
    lessonType: "ukulele"
  },
  {
    quote: "Singing lessons here have been life-changing. The teacher helped me find my voice and build the confidence I never knew I had. I’m so glad I took the plunge!",
    name: "Rachel D.",
    lessonType: "singing"
  },
  {
    quote: "The guitar lessons have been so enjoyable and challenging! I’ve gained so much technical knowledge and my performance skills have definitely improved.",
    name: "Ben K.",
    lessonType: "guitar"
  },
  {
    quote: "I’ve been a piano student here for two years and the improvement in my ability to read music and play fluently is unreal. The lessons are structured and easy to follow.",
    name: "Lily H.",
    lessonType: "piano"
  },
  {
    quote: "The ukulele lessons are perfect for beginners like me. I never thought I’d be able to play an instrument, but now I’m strumming away with confidence!",
    name: "Megan F.",
    lessonType: "ukulele"
  },
  {
    quote: "The singing lessons have not only improved my vocal ability but also helped me develop better breath control and stage presence. I now perform with so much more confidence.",
    name: "Oliver B.",
    lessonType: "singing"
  },
  {
    quote: "The bass lessons here are the best! I’ve always struggled with timing, but now I’ve got a solid groove. I really appreciate how patient and thorough the teachers are.",
    name: "David T.",
    lessonType: "bass"
  },
  {
    quote: "I came to the academy to learn drums and was amazed at how quickly I progressed. The teacher’s insights into rhythm and timing helped me become a much more confident drummer.",
    name: "Sarah W.",
    lessonType: "drums"
  },
  {
    quote: "Learning guitar at Middlesbrough Music Academy has been such a rewarding experience. The personalized approach to teaching made learning fun and I’ve made huge strides.",
    name: "Alex G.",
    lessonType: "guitar"
  },
  {
    quote: "I started piano lessons as a complete beginner, and now I’m able to play several pieces. The teachers here are knowledgeable and friendly, which makes learning a lot more enjoyable.",
    name: "Isla P.",
    lessonType: "piano"
  },
  {
    quote: "I have been playing bass for several years, but the lessons at this academy have really deepened my understanding of the instrument and musical theory. It’s been such an enriching experience.",
    name: "James A.",
    lessonType: "bass"
  },
  {
    quote: "I’ve learned so much from the singing lessons here. The teacher helped me identify and work on my weaknesses, and I can feel my voice becoming stronger every week.",
    name: "Katie L.",
    lessonType: "singing"
  },
  {
    quote: "The drum lessons are outstanding. The teacher’s attention to detail and focus on technique has helped me improve my coordination and overall musicality.",
    name: "Daniel P.",
    lessonType: "drums"
  },
  {
    quote: "The ukulele lessons were a lot of fun and taught me how to play songs I love. The teacher was very patient and supportive, and I felt really motivated to keep improving.",
    name: "Charlotte R.",
    lessonType: "ukulele"
  },
  {
    quote: "I’ve tried a few different music schools, but the atmosphere at Middlesbrough Music Academy is special. The teachers are talented and passionate, and they really care about your progress.",
    name: "Steve M.",
    lessonType: "guitar"
  },
  {
    quote: "The singing lessons helped me overcome my fear of performing in front of others. I feel much more confident on stage, and my vocal range has improved dramatically.",
    name: "Sophie D.",
    lessonType: "singing"
  },
  {
    quote: "I’ve been learning bass for six months, and the progress I’ve made is beyond what I imagined. The lessons are always engaging, and the teacher makes complex techniques easy to understand.",
    name: "Ethan J.",
    lessonType: "bass"
  },
  {
    quote: "The ukulele lessons are so much fun! I love how the lessons are structured and how we get to play new songs each week. I’m already playing along with my friends!",
    name: "Nina K.",
    lessonType: "ukulele"
  },
  {
    quote: "After taking guitar lessons for a few months, I can play many of my favorite songs! The teacher takes the time to really explain each step, which has helped me build a strong foundation.",
    name: "Oliver S.",
    lessonType: "guitar"
  },
  {
    quote: "The piano lessons at Middlesbrough Music Academy have really exceeded my expectations. I’ve gained so much musical knowledge, and I’m constantly amazed at my progress.",
    name: "Isabella N.",
    lessonType: "piano"
  }
]



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


export const lessonSpecificFaqs: { [K in Teaches]: { question: string; answer: string }[] } = {
  drums: [
    {
      question: "What should I bring to my drum lesson?",
      answer: "For your drum lessons, you should bring comfortable clothing, a notebook for taking notes, and your own pair of drumsticks if you have them. Don't worry if you don't have a drum kit at home; we provide all necessary equipment for practice during the lessons."
    },
    {
      question: "Do I need to have a drum kit at home to take lessons?",
      answer: "It's not necessary to have your own drum kit at home. We provide drums for the lessons, and we can give you practice tips that you can apply without an entire kit. However, if you plan to practice more frequently, having a practice pad at home can be helpful."
    }
  ],
  guitar: [
    {
      question: "What guitar should I start with?",
      answer: "Starting with an acoustic guitar is ideal for beginners as it's versatile and easier on the hands. If you're more interested in electric guitar, that's perfectly fine, and we can help you get started with the right equipment for that style."
    },
    {
      question: "How long will it take to learn basic guitar chords?",
      answer: "It typically takes a few weeks to get comfortable with basic chords, depending on the practice time you dedicate. Our teachers will guide you through the process at your own pace to make sure you master each step."
    }
  ],
  piano: [
    {
      question: "Do I need to know how to read music before starting piano lessons?",
      answer: "No, you don't need to know how to read music before starting. Our lessons are designed to teach you both piano skills and how to read music as you progress, starting with the basics."
    },
    {
      question: "How often should I practice the piano at home?",
      answer: "It's recommended to practice at least 20-30 minutes every day, but the most important thing is consistency. Your teacher will give you a practice schedule that's tailored to your goals."
    }
  ],
  bass: [
    {
      question: "Can I learn bass if I have no prior musical experience?",
      answer: "Absolutely! Bass is a great instrument for beginners, and we'll start with the fundamentals to ensure you have a strong foundation. Whether you're new to music or just new to bass, we’ll help you along the way."
    },
    {
      question: "Is bass easier to learn than guitar?",
      answer: "Bass has its unique challenges, but many students find it easier to start with because it focuses more on rhythm and groove than melody. We tailor the lessons to your individual needs, regardless of whether you're learning bass or guitar."
    }
  ],
  ukulele: [
    {
      question: "Is the ukulele easier to learn than other string instruments?",
      answer: "Yes, the ukulele is often considered easier to learn than other string instruments like guitar due to its smaller size and fewer strings. Our lessons will guide you through the basics and help you develop your skills."
    },
    {
      question: "Do I need a special ukulele for lessons?",
      answer: "No, any standard ukulele will work for lessons. If you're just getting started, we recommend a soprano or concert ukulele, but feel free to use whatever you have."
    }
  ],
  singing: [
    {
      question: "Can anyone learn to sing, or is it a talent you’re born with?",
      answer: "Anyone can learn to sing! It’s a skill that can be developed with the right guidance and practice. Our singing lessons focus on building confidence, control, and technique to help you unlock your vocal potential."
    },
    {
      question: "How can I improve my vocal range?",
      answer: "Improving your vocal range requires regular practice, proper warm-ups, and working with a skilled teacher who can guide you through the exercises that will safely extend your range."
    }
  ]
}
