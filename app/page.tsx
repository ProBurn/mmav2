"use client"
import AnimateIn from "@/components/AnimateIn";
import Hero2 from "@/components/Hero2";
import { Testimonials } from "@/components/testimonials";
import Testimonials2 from "@/components/testimonials2";
import ContactSection from "@/components/ui/contact-small";
// import Image from "next/image";
// import { Typewriter } from 'react-simple-typewriter'

export default function Home() {

  // const words = [
  //     "Drums?",
  //     "Piano?",
  //     "Guitar?",
  //     "Ukulele?",
  //     "Singing?",
  //     "Bass?",
  // ]
  return (
    <div>
      <AnimateIn>

        <Hero2 />
      </AnimateIn>
      {/* <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Boost your productivity. Start using our app today.
        </h2>
        <p className=" mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div> */}

      {/* <div className="bg-gray-50">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Thinking of learning {' '}
            <Typewriter
              words={words}
              loop={Infinity}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1500} />
          </h1>
          <h2 className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
            Sign up for our lessons and start learning today at<br/>Middlesbrough Music Academy
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div> */}
      <AnimateIn>
        <Testimonials />
      </AnimateIn>

      <AnimateIn>
        <Testimonials2 />
      </AnimateIn>

      <AnimateIn>
        <ContactSection />
      </AnimateIn>
    </div>
  );
}
