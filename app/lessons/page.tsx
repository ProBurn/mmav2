import React from 'react'

import FaqSection  from '@/components/ui/faq'

interface Faq {
    question: string;
    answer: string;
  }
  
  export interface FaqProps {
    faqs: Faq[];
  }

const faqs: Faq[] = [
    {
        question: 'Do I need to have my own instrument?',
        answer: 'No, we provide all the instruments you need for your lessons. If you prefer to use your own instrument, you are welcome to bring it along.'
    },
    {
        question: 'What is the minimum age for lessons?',
        answer: '27 months'
    },
    {
        question: 'How long are the lessons?',
        answer: 'Lessons are typically 20 minutes long, but we also offer 40-minute sessions for those who want more in-depth instruction.'
    },
    {
        question: 'Can I choose my tutor?',
        answer: 'Yes, you can choose your tutor based on their availability and your preference. All our tutors are highly qualified and experienced.'
    },
    {
        question: 'Do you offer online lessons?',
        answer: 'Yes, we offer both in-person and online lessons to accommodate your schedule and preferences.'
    }
]

const page = () => {
    const products = [
        {
            id: 1,
            name: 'Drum Lesson',
            href: '/lessons/drum-lesson',
            imageSrc: '/content/drum.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'From £12',
            color: '20 minutes / 40 minutes',
        },
        {
            id: 2,
            name: 'Piano Lesson',
            href: '/lessons/piano-lesson',
            imageSrc: '/content/piano.jpg',
            imageAlt: "Front of men's Basic Tee in white.",
            price: 'From £12',
            color: '20 minutes / 40 minutes',
        },
        {
            id: 3,
            name: 'Guitar Lesson',
            href: '/lessons/guitar-lesson',
            imageSrc: '/content/guitar.jpg',
            imageAlt: "Front of men's Basic Tee in gray.",
            price: 'From £12',
            color: '20 minutes / 40 minutes',
        },
        {
            id: 4,
            name: 'Bass Lesson',
            href: '/lessons/bass-lesson',
            imageSrc: '/content/bass (2).jpg',
            imageAlt: "Front of men's Basic Tee in blue.",
            price: 'From £12',
            color: '20 minutes / 40 minutes',
        },
        {
            id: 5,
            name: 'Ukulele Lesson',
            href: '/lessons/ukulele-lesson',
            imageSrc: '/content/ukulele.jpg',
            imageAlt: "Front of men's Basic Tee in green.",
            price: 'From £12',
            color: '20 minutes / 40 minutes',
        },
        {
            id: 6,
            name: 'Singing Lesson',
            href: '/lessons/singing-lesson',
            imageSrc: '/content/singing.jpg',
            imageAlt: "Front of men's Basic Tee in red.",
            price: 'From £12',
            color: '20 minutes / 40 minutes',
        }
    ]

    const stats = [
        { label: 'Founded', value: '2015' },
        { label: 'Tutors', value: '8' },
        { label: 'Lessons Available', value: '8' },
        { label: 'Satisfaction', value: '100%' },
    ]
    return (
        <div>


            {/* <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base/7 font-semibold text-indigo-600">Get the help you need</p>
        <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Lessons</h2>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
        Explore a wide range of lessons taught by professional musicians.
        </p>
      </div>
    </div> */}










            <div className="bg-white">


                <div className="relative">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                            <svg
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                            >
                                <polygon points="0,0 90,0 50,100 0,100" />
                            </svg>

                            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                    <div className="hidden sm:mb-10 sm:flex">
                                        {/* <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                    <a href="#" className="whitespace-nowrap font-semibold text-indigo-600">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div> */}
                                    </div>
                                    <h1 data-scroll data-scroll-speed="0.4" className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                        Browse our music lessons
                                    </h1>
                                    <p data-scroll data-scroll-speed="0.3" className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                                        Take a look at our range of lessons and find the perfect one for you.
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        {/* <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                            
                            alt=""
                            // src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                            src="/content/elliottsmusicschool.jpg"
                            className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full "
                        />
                    </div>
                </div>
            </div>





            <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Music Lessons</p>
                        <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
                            Why choose us
                        </h1>
                        <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 dark:text-gray-300 lg:max-w-none lg:grid-cols-2">
                            <div>
                                <p>
                                    At Middlesbrough Music Academy, we believe in more than just teaching music &#45; we&apos;re here to inspire and nurture your passion for sound.
                                    Whether you&apos;re picking up an instrument for the first time or striving to reach the next level, our lessons are designed to meet you where
                                    you are and take you further than you ever imagined.
                                </p>
                                <p className="mt-8">
                                    {/* At Middlesbrough Music Academy, we understand that every student is unique, and so is their musical journey. That’s why our lessons are designed with flexibility and personalization in mind. Whether you’re an absolute beginner picking up an instrument for the first time or an experienced player looking to refine your technique, our expert tutors are here to guide you every step of the way. With lessons tailored to your individual goals and learning style, we make sure every session is as enjoyable as it is productive. */}

                                    Our academy is built on the foundation of professional musicianship. Every tutor on our team brings a wealth of real-world experience, from live performances to studio recordings. This means you&apos;re not just learning from books or theory &#45; you&apos;re gaining insights directly from musicians who live and breathe their craft. Our tutors combine technical expertise with a passion for teaching, creating an inspiring environment where students feel motivated to practice and grow.


                                </p>
                            </div>
                            <div>
                                <p>
                                    We believe music is for everyone, no matter your age or background. That&apos;s why we offer lessons for all levels, from young children taking their first steps in music to adults reigniting a long-held passion. Learning music isn&apos;t just about mastering an instrument; it&apos;s about building confidence, developing discipline, and finding joy in creativity. Our students often tell us how their lessons have positively impacted other areas of their lives, from academics to social connections.

                                </p>
                                <p className="mt-8">
                                    At Middlesbrough Music Academy, you&apos;ll have access to modern, purpose-built facilities that enhance your learning experience. Our 8 state-of-the-art tuition rooms are equipped with the latest technology and instruments, ensuring a comfortable and professional environment for every lesson. Whether your goal is to play for fun, join a band, or ace your music exams, we&apos;re committed to helping you unlock your full potential and make your musical aspirations a reality.

                                </p>
                            </div>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                            {stats.map((stat, statIdx) => (
                                <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-black/20 dark:border-white/20 pl-6">
                                    <dt className="text-base/7 text-gray-700 dark:text-gray-300">{stat.label}</dt>
                                    <dd className="text-3xl font-semibold tracking-tight text-black dark:text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>






            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lessons that we offer!</h2>
                    <p className="mt-4 text-base text-gray-500">
                            Explore our range of music lessons, each tailored to help you achieve your goals. Whether you&apos;re a beginner or an advanced musician, we have something for everyone.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product, index) => (
                            <div key={`productid${index}`} className="group relative">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FaqSection faqs={faqs}/>



        </div>
    )
}

export default page