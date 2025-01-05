'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading } from './text'
import { lessons } from '@/data/data'


// const testimonials = [
//   {
//     img: '/testimonials/tina-yards.jpg',
//     name: 'Tina Yards',
//     title: 'VP of Sales, Protocol',
//     quote:
//       'Thanks to Radiant, we’re finding new leads that we never would have found with legal methods.',
//   },
//   {
//     img: '/testimonials/conor-neville.jpg',
//     name: 'Conor Neville',
//     title: 'Head of Customer Success, TaxPal',
//     quote:
//       'Radiant made undercutting all of our competitors an absolute breeze.',
//   },
//   {
//     img: '/testimonials/amy-chase.jpg',
//     name: 'Amy Chase',
//     title: 'Head of GTM, Pocket',
//     quote:
//       'We closed a deal in literally a few minutes because we knew their exact budget.',
//   },
//   {
//     img: '/testimonials/veronica-winton.jpg',
//     name: 'Veronica Winton',
//     title: 'CSO, Planeteria',
//     quote:
//       'We’ve managed to put two of our main competitors out of business in 6 months.',
//   },
//   {
//     img: '/testimonials/dillon-lenora.jpg',
//     name: 'Dillon Lenora',
//     title: 'VP of Sales, Detax',
//     quote: 'I was able to replace 80% of my team with RadiantAI bots.',
//   },
//   {
//     img: '/testimonials/harriet-arron.jpg',
//     name: 'Harriet Arron',
//     title: 'Account Manager, Commit',
//     quote:
//       'I’ve smashed all my targets without having to speak to a lead in months.',
//   },
// ]

function TestimonialCard({
  name,
  // title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}: {
  img: string
  name: string
  // title: string
  children?: React.ReactNode
  bounds: RectReadOnly
  scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
  const ref = useRef<HTMLDivElement | null>(null)

  const computeOpacity = useCallback(() => {
    const element = ref.current
    if (!element || bounds.width === 0) return 1

    const rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      const diff = bounds.left - rect.left
      const percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      const diff = rect.right - bounds.right
      const percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  const opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-[9/16] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[3/4] sm:w-96"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              {/* “ */}
            </span>
            {children}
            <span aria-hidden="true" className="absolute">
              {/* ” */}
            </span>
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <Heading as='h4' className="font-medium text-white text-3xl sm:text-3xl">{name}</Heading>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
              {/* <RippleText2 text={title} /> */}
              {/* {title} */}
              Learn more <span aria-hidden="true">→</span>
            </span>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  )
}

function CallToAction() {
  return (
    <div>
      <p className="max-w-lg text-pretty text-md font-medium text-gray-500 ">
        Discover a wide range of music lessons tailored to suit all skill levels and interests. Whether you&apos;re a beginner or an advanced musician, we have something for everyone.
      </p>
      <div className="mt-2">
        <Link
          href="/lessons"
          className="inline-flex items-center gap-2  text-sm/6 font-semibold text-gray-900"
        >
          View all lessons
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const { scrollX } = useScroll({ container: scrollRef })
  const [setReferenceWindowRef, bounds] = useMeasure()
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

  function scrollTo(index: number) {
    const gap = 32
    const width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="overflow-hidden py-32 bg-white">
      <Container>
        <div ref={setReferenceWindowRef}>
          {/* <Subheading>We offer a wide variety of</Subheading> */}
          <p className='text-lg/8 text-gray-600'>We offer a wide variety of music lessons</p>
          <Heading as="h3" className="mt-2">
            What&apos;s on offer
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-[var(--scroll-padding)]',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.2xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]',
        ])}
      >
        {lessons.map(({ img, name, title, href }, testimonialIndex) => (
          <Link href={href} key={testimonialIndex}>
          <TestimonialCard
            
            name={name}
            title={title}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(testimonialIndex)}
            >
            {/* {quote} */}
          </TestimonialCard>
            </Link>
        ))}
        <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-between">
          <CallToAction />
          <div className="hidden sm:flex sm:gap-2">
            {lessons.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to testimonial from ${name}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'data-[active]:bg-gray-400 data-[hover]:bg-gray-400',
                  'forced-colors:data-[active]:bg-[Highlight] forced-colors:data-[focus]:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
