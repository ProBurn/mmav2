import React from 'react'
import {cn} from '@/lib/utils'

import { testimonials } from '@/data/data'

const testimonials2 = () => {
    return (
        <div className="relative isolate bg-white py-10 sm:pt-32">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base/7 font-semibold text-indigo-600">Testimonials</h2>
                    <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        What our students are saying about us
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                        <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
                            <p>{`“${testimonials[0].quote}”`}</p>
                        </blockquote>
                        <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                            {/* <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="size-10 flex-none rounded-full bg-gray-50"
              /> */}
                            <div className="flex-auto">
                                <div className="font-semibold">{testimonials[0].name}</div>
                                {/* <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div> */}
                            </div>
                            {/* <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none" /> */}
                        </figcaption>
                    </figure>
                    {[...Array(2)].map((columnGroup, columnGroupIdx) => (
                        <div id={`column: ${columnGroupIdx}`} key={`column: ${columnGroupIdx}`} className="space-y-8 xl:contents xl:space-y-0">
                            {[...Array(2)].map((column, columnIdx) => (
                                <div
                                    key={columnIdx}
                                    className={cn(
                                        (columnGroupIdx === 0 && columnIdx === 0) ||
                                            (columnGroupIdx === 2 - 1 && columnIdx === 2 - 1)
                                            ? 'xl:row-span-2'
                                            : 'xl:row-start-1',
                                        'space-y-8',
                                    )}
                                >
                                    {testimonials
                                        .filter((_, index) => (index + columnGroupIdx * 2 + columnIdx) % 4 === 0 && index != 0) // Updated filter logic
                                        .map((testimonial, index) => (
                                            <figure
                                                key={`testimonial-${index}`}
                                                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                                            >
                                                <blockquote className="text-gray-900">
                                                    <p>{`“${testimonial.quote}”`}</p>
                                                </blockquote>
                                                <figcaption className="mt-6 flex items-center gap-x-4">
                                                    {/* <img alt="" src={testimonial.author.imageUrl} className="size-10 rounded-full bg-gray-50" /> */}
                                                    <div>
                                                        <div className="font-semibold">{testimonial.name}</div>
                                                        {/* <div className="text-gray-600">{`@${testimonial.author.handle}`}</div> */}
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default testimonials2