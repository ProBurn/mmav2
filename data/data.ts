export const lessons = [
    {
      img: '/content/drum.jpg',
      name: 'Drum Lesson',
      title: 'learn more ->',
      quote:
        'Thanks to Radiant, we’re finding new leads that we never would have found with legal methods.',
    },
    {
      img: '/content/Bass (2).jpg',
      name: 'Bass Lesson',
      title: 'Learn more ->',
      quote:
        'Radiant made undercutting all of our competitors an absolute breeze.',
    },
    {
      img: '/content/piano.jpg',
      name: 'Piano Lesson',
      title: 'Head of GTM, Pocket',
      quote:
        'We closed a deal in literally a few minutes because we knew their exact budget.',
    },
    {
      img: '/content/singing.jpg',
      name: 'Singing Lesson',
      title: 'CSO, Planeteria',
      quote:
        'We’ve managed to put two of our main competitors out of business in 6 months.',
    },
    {
      img: '/content/ukulele.jpg',
      name: 'Ukulele Lesson',
      title: 'VP of Sales, Detax',
      quote: 'I was able to replace 80% of my team with RadiantAI bots.',
    },
    {
      img: '/content/guitar.jpg',
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
  