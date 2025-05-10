'use client'

import { Fragment, use, useEffect, useState } from 'react'
import {
    // Dialog,
    // DialogBackdrop,
    // DialogPanel,
    // Popover,
    // PopoverButton,
    // PopoverGroup,
    // PopoverPanel,
    Radio,
    RadioGroup,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import {
    // Bars3Icon,
    // MagnifyingGlassIcon,
    ShieldCheckIcon,
    // ShoppingBagIcon,
    // XMarkIcon,
} from '@heroicons/react/24/outline'
import { CheckIcon, QuestionMarkCircleIcon, MusicalNoteIcon } from '@heroicons/react/20/solid'
import { team, lessonPages, testimonials, lessonSpecificFaqs } from '@/data/data'
import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'
import { cn } from '@/lib/utils'
import Modal from '@/components/ui/modal'
import { useNavbar } from '@/components/UIContext'
// import Link from 'next/link'
import AnimatedLink from '@/components/AnimatedLink'
// import { set } from 'zod'












// const reviews2 = {
//     average: 4,
//     featured: [
//         {
//             id: 1,
//             rating: 5,
//             content: `
//         <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
//       `,
//             date: 'July 16, 2021',
//             datetime: '2021-07-16',
//             author: 'Emily Selman',
//             avatarSrc:
//                 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
//         },
//         {
//             id: 2,
//             rating: 5,
//             content: `
//         <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
//       `,
//             date: 'July 12, 2021',
//             datetime: '2021-07-12',
//             author: 'Hector Gibbons',
//             avatarSrc:
//                 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
//         },
//         // More reviews...
//     ],
// }
// const faqs2 = [
//     {
//         question: 'What format are these icons?',
//         answer:
//             'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
//     },
//     {
//         question: 'Can I use the icons at different sizes?',
//         answer:
//             "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
//     },
//     // More FAQs...
// ]
// const license = {
//     href: '#',
//     summary:
//         'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
//     content: `
//     <h4>Overview</h4>

//     <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>

//     <ul role="list">
//     <li>You\'re allowed to use the icons in unlimited projects.</li>
//     <li>Attribution is not required to use the icons.</li>
//     </ul>

//     <h4>What you can do with it</h4>

//     <ul role="list">
//     <li>Use them freely in your personal and professional work.</li>
//     <li>Make them your own. Change the colors to suit your project or brand.</li>
//     </ul>

//     <h4>What you can\'t do with it</h4>

//     <ul role="list">
//     <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
//     <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
//     </ul>
//   `,
// }
// const relatedProducts = [
//     {
//         id: 1,
//         name: 'Fusion',
//         category: 'UI Kit',
//         href: '#',
//         price: '$49',
//         imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
//         imageAlt:
//             'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
//     },
//     // More products...
// ]


// const faqs = [
//     {
//         question: 'What format are these icons?',
//         answer:
//             'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
//     },
//     {
//         question: 'Can I use the icons at different sizes?',
//         answer:
//             "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
//     },
//     // More FAQs...
// ]













// const navigation = {
//     categories: [
//         {
//             id: 'women',
//             name: 'Women',
//             featured: [
//                 {
//                     name: 'New Arrivals',
//                     href: '#',
//                     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg',
//                     imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//                 },
//                 {
//                     name: 'Basic Tees',
//                     href: '#',
//                     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg',
//                     imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//                 },
//             ],
//             sections: [
//                 {
//                     id: 'clothing',
//                     name: 'Clothing',
//                     items: [
//                         { name: 'Tops', href: '#' },
//                         { name: 'Dresses', href: '#' },
//                         { name: 'Pants', href: '#' },
//                         { name: 'Denim', href: '#' },
//                         { name: 'Sweaters', href: '#' },
//                         { name: 'T-Shirts', href: '#' },
//                         { name: 'Jackets', href: '#' },
//                         { name: 'Activewear', href: '#' },
//                         { name: 'Browse All', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'accessories',
//                     name: 'Accessories',
//                     items: [
//                         { name: 'Watches', href: '#' },
//                         { name: 'Wallets', href: '#' },
//                         { name: 'Bags', href: '#' },
//                         { name: 'Sunglasses', href: '#' },
//                         { name: 'Hats', href: '#' },
//                         { name: 'Belts', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'brands',
//                     name: 'Brands',
//                     items: [
//                         { name: 'Full Nelson', href: '#' },
//                         { name: 'My Way', href: '#' },
//                         { name: 'Re-Arranged', href: '#' },
//                         { name: 'Counterfeit', href: '#' },
//                         { name: 'Significant Other', href: '#' },
//                     ],
//                 },
//             ],
//         },
//         {
//             id: 'men',
//             name: 'Men',
//             featured: [
//                 {
//                     name: 'New Arrivals',
//                     href: '#',
//                     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
//                     imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
//                 },
//                 {
//                     name: 'Artwork Tees',
//                     href: '#',
//                     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg',
//                     imageAlt:
//                         'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
//                 },
//             ],
//             sections: [
//                 {
//                     id: 'clothing',
//                     name: 'Clothing',
//                     items: [
//                         { name: 'Tops', href: '#' },
//                         { name: 'Pants', href: '#' },
//                         { name: 'Sweaters', href: '#' },
//                         { name: 'T-Shirts', href: '#' },
//                         { name: 'Jackets', href: '#' },
//                         { name: 'Activewear', href: '#' },
//                         { name: 'Browse All', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'accessories',
//                     name: 'Accessories',
//                     items: [
//                         { name: 'Watches', href: '#' },
//                         { name: 'Wallets', href: '#' },
//                         { name: 'Bags', href: '#' },
//                         { name: 'Sunglasses', href: '#' },
//                         { name: 'Hats', href: '#' },
//                         { name: 'Belts', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'brands',
//                     name: 'Brands',
//                     items: [
//                         { name: 'Re-Arranged', href: '#' },
//                         { name: 'Counterfeit', href: '#' },
//                         { name: 'Full Nelson', href: '#' },
//                         { name: 'My Way', href: '#' },
//                     ],
//                 },
//             ],
//         },
//     ],
//     pages: [
//         { name: 'Company', href: '#' },
//         { name: 'Stores', href: '#' },
//     ],
// }


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export default function Example({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {


    const params = use(paramsPromise);
    // const [openModal, setOpenModal] = useNavbar();
    const [openModal, setOpenModal] = useNavbar();

    // Access params.slug safely
    const slug = params.slug;
    // const product = products.find(product => product.slug === slug);

    // const slug = 'drum-lesson'

    const product = lessonPages.find(product => product.slug === slug);



    const teamMembers = product ? team.filter((member) => member.teaches?.includes(product.teaches)) : []
    const featuredTestimonial = testimonials.find(testimonial => testimonial.lessonType === product?.teaches) || testimonials[0];
    // const lessonFaq = lessonSpecificFaqs.find(faq => faq.lessonType === product?.teaches) || LessonSpecificFaqs[0];
    // const lessonFaq2 = lessonSpecificFaqs[product.teaches] 
    const lessonFaqs = lessonSpecificFaqs[product?.teaches ?? "drums"];


    const [selectedDuration, setSelectedDuration] = useState(product ? product.variants[0] : null)
    const [price, setPrice] = useState(product ? product.variants[0].price : null)
    const [selectedRadio, setSelectedRadio] = useState(0)
    console.log("variant", selectedDuration)
    useEffect(() => {
        if (selectedDuration) {
            setPrice(selectedDuration.price)
        }

    }, [selectedDuration])
    if (!product) {
        return (
            notFound())
    }

    return (
        <div className="bg-gray-50">
            {/* Mobile menu */}


            <main>
                {/* Product */}
                <Modal lesson={product.name} duration={selectedDuration?.name} openModalState={openModal} setOpenModalState={setOpenModal} />
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4  pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        {/* Product details */}
                        <div className="lg:max-w-lg lg:self-end">
                            <nav aria-label="Breadcrumb">
                                <ol role="list" className="flex items-center space-x-2">
                                    {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                                        <li key={breadcrumb.id}>
                                            <div className="flex items-center text-sm">
                                                <a href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900">
                                                    {breadcrumb.name}
                                                </a>
                                                {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                                                    <svg
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        className="ml-2 size-5 shrink-0 text-gray-300"
                                                    >
                                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                                    </svg>
                                                ) : null}
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </nav>

                            <div className="mt-4">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
                            </div>

                            <section aria-labelledby="information-heading" className="mt-4">
                                <h2 id="information-heading" className="sr-only">
                                    Product information
                                </h2>

                                <div className="flex items-center">
                                    {/* <AnimatePresence mode='wait'> */}
                                    <motion.p
                                        key={price}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0, transition: { type: 'spring', ease: 'easeInOut' } }}
                                        exit={{ opacity: 0, y: -20, transition: { type: 'spring', ease: 'easeInOut' } }}
                                        className="text-lg text-gray-900 sm:text-xl">

                                        {price}
                                    </motion.p>
                                    {/* </AnimatePresence> */}

                                    {/* <div className="ml-4 border-l border-gray-300 pl-4">
                                        <h2 className="sr-only">Reviews</h2>
                                        <div className="flex items-center">
                                            <div>
                                                <div className="flex items-center">
                                                    {[0, 1, 2, 3, 4].map((rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                'size-5 shrink-0',
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                            </div>
                                            <p className="ml-2 text-sm text-gray-500">{reviews.totalCount} reviews</p>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="mt-4 space-y-6">
                                    <p className="text-base text-gray-500" dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                </div>

                                <div className="mt-6 flex items-center">
                                    <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                                    <p className="ml-2 text-sm text-gray-500">Currently accepting new students</p>
                                </div>
                            </section>
                        </div>

                        {/* Product image */}
                        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="aspect-square w-full rounded-lg object-cover"
                            />
                        </div>

                        {/* Product form */}
                        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                            <section aria-labelledby="options-heading">
                                <h2 id="options-heading" className="sr-only">
                                    Product options
                                </h2>

                                <form>
                                    <div className="sm:flex sm:justify-between">
                                        {/* Size selector */}
                                        <fieldset>
                                            <legend className="block text-sm font-medium text-gray-700">Lesson Duration</legend>
                                            <RadioGroup
                                                value={selectedDuration}
                                                onChange={setSelectedDuration}
                                                className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2"
                                            >
                                                {product.variants.map((variant, index) => (
                                                    <Radio


                                                        key={`size-${index}`}
                                                        as="div"
                                                        value={variant}
                                                        aria-label={variant.name}
                                                        aria-description={variant.description}
                                                        onClick={() => setSelectedRadio(index)}
                                                        className={cn("group relative block cursor-pointer rounded-lg border border-gray-300 p-4 bg-white hover:bg-indigo-50",
                                                            selectedRadio === index ? "ring-2 ring-indigo-500 outline-none bg-indigo-50" : "ring-0")}


                                                    >
                                                        <p className="text-base font-medium text-gray-900">{variant.name} - {variant.price}</p>
                                                        {/* <p className="text-base font-medium text-gray-900">{variant.price}</p> */}
                                                        <p className="mt-1 text-sm text-gray-500">{variant.description}</p>
                                                        <div
                                                            aria-hidden="true"
                                                            className={classNames("absolute -inset-px rounded-lg border-2 border-transparent hover:border hover:border-indigo-500 ",
                                                                selectedRadio === index ? " " : "")}

                                                        />
                                                    </Radio>
                                                ))}
                                            </RadioGroup>
                                        </fieldset>
                                    </div>
                                    <div className="mt-4">
                                        <a href="#lessonLength" className="group inline-flex text-sm text-gray-500 hover:text-gray-700 scroll-smooth">
                                            <span>What lesson length do I need?</span>
                                            <QuestionMarkCircleIcon
                                                aria-hidden="true"
                                                className="ml-2 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                            />
                                        </a>
                                    </div>
                                    <div className="mt-10">
                                        <button
                                            // type="submit"
                                            type="button"
                                            onClick={() => { setOpenModal(true) }}
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                        >
                                            Contact to book
                                        </button>



                                    </div>
                                    <div className="mt-6 text-center">
                                        <a href="#" className="group inline-flex text-base font-medium">
                                            <ShieldCheckIcon
                                                aria-hidden="true"
                                                className="mr-2 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                                            />
                                            <span className="text-gray-500 hover:text-gray-700">All teachers are certified professionals</span>
                                        </a>
                                    </div>
                                </form>
                            </section>
                        </div>

                        <div className='col-span-2 flex flex-col lg:grid w-full lg:grid-cols-2'>
                        <div className="order-2 lg:order-none mt-16 w-full lg:col-span-1 lg:col-start-1 lg:mt-5 lg:max-w-none" id="lessonLength">
                        <div className="p-6 rounded-lg">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                                Not Sure Which Lesson Length You Need?
                            </h3>
                            <div className="mt-4">
                                <h4 className="font-semibold text-gray-900">20-minute lessons are perfect for:</h4>
                                <ul className="mt-2 list-disc list-outside pl-6 text-gray-700">
                                    <li>Young beginners (ages 5–8) with shorter attention spans</li>
                                    <li>Students looking for a short taster before committing</li>
                                    <li>A quick, focused weekly session to reinforce key skills</li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <h4 className="font-semibold text-gray-900">45-minute lessons are ideal for:</h4>
                                <ul className="mt-2 list-disc list-outside pl-6 text-gray-700">
                                    <li>Students aged 9+ or adults</li>
                                    <li>Intermediate or advanced players</li>
                                    <li>Those preparing for exams, performances, or wanting more in-depth tuition</li>
                                    <li>Anyone looking to progress faster with more personalised attention</li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Still unsure?</span> <AnimatedLink href="/contact"  >Contact us</AnimatedLink> — we&apos;re happy to help you choose the best fit.
                                </p>
                            </div>
                        </div>
                    </div>

                        {/* new part */}
                        
                        <div className="order-1 lg:order-none mx-auto w-full max-w-2xl lg:col-span-1 lg:col-start-2 lg:mt-0 lg:max-w-none p-6">
                            <TabGroup>
                                <div className="border-b border-gray-200">
                                    <TabList className="-mb-px flex space-x-8">
                                        <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-800  data-[selected]:text-indigo-600">
                                            Teachers
                                        </Tab>
                                        <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-800  data-[selected]:text-indigo-600">
                                            FAQ
                                        </Tab>
                                        {/* <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-800 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600">
                                            License
                                        </Tab> */}
                                    </TabList>
                                </div>
                                <TabPanels>
                                    <TabPanel className="-mb-10">
                                        <h3 className="sr-only">Teachers</h3>

                                        {teamMembers.map((review, reviewIdx) => (
                                            <div key={`teacher-${reviewIdx}`} className="flex space-x-4 text-sm text-gray-500">
                                                <div className="flex-none py-10">
                                                    <img alt="" src={review.imageUrl} className="size-10 rounded-full bg-gray-100" />
                                                </div>
                                                <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                                                    <h3 className="font-medium text-gray-900">{review.name}</h3>
                                                    <p>
                                                        {review.role}
                                                    </p>

                                                    {/* <div className="mt-4 flex items-center">
                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                            <StarIcon
                                                                key={rating}
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                    'size-5 shrink-0',
                                                                )}
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="sr-only">{review.rating} out of 5 stars</p> */}

                                                    {/* <div
                                                        dangerouslySetInnerHTML={{ __html: review.content }}
                                                        className="mt-4 text-sm/6 text-gray-500"
                                                    /> */}
                                                </div>
                                            </div>
                                        ))}
                                    </TabPanel>

                                    <TabPanel className="text-sm text-gray-500">
                                        <h3 className="sr-only">Frequently Asked Questions</h3>

                                        <dl>
                                            {lessonFaqs.map((faq) => (
                                                <Fragment key={faq.question}>
                                                    <dt className="mt-10 font-medium text-gray-900">{faq.question}</dt>
                                                    <dd className="mt-2 text-sm/6 text-gray-500">
                                                        <p>{faq.answer}</p>
                                                    </dd>
                                                </Fragment>
                                            ))}
                                        </dl>
                                    </TabPanel>

                                    {/* <TabPanel className="pt-10">
                                        <h3 className="sr-only">License</h3>

                                        <div
                                            dangerouslySetInnerHTML={{ __html: license.content }}
                                            className="text-sm text-gray-500 [&>:first-child]:mt-0 [&_h4]:mt-5 [&_h4]:font-medium [&_h4]:text-gray-900 [&_li::marker]:text-gray-300 [&_li]:pl-2 [&_p]:my-2 [&_p]:text-sm/6 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-sm/6"
                                        />
                                    </TabPanel> */}
                                </TabPanels>
                            </TabGroup>
                        </div>
                    </div>


                    





                </div>





                <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
                    <div
                        aria-hidden="true"
                        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
                            }}
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            {/* <p className="text-base/7 font-semibold text-indigo-600">{product.name}</p> */}
                            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                What we offer for your {' '} {product.name}
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-700">

                                Whether you&apos;re just starting your musical journey or looking to refine your skills, our lessons are personalized to help you achieve
                                your goals. Our experienced instructors ensure that every lesson is engaging and tailored specifically to your pace and aspirations,
                                helping you become the drummer you&apos;ve always wanted to be.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
                            <div className="relative lg:order-last lg:col-span-5">
                                <svg
                                    aria-hidden="true"
                                    className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
                                >
                                    <defs>
                                        <pattern
                                            id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                                            width={200}
                                            height={200}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path d="M0.5 0V200M200 0.5L0 0.499983" />
                                        </pattern>
                                    </defs>
                                    <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
                                </svg>
                                <figure className="border-l border-indigo-600 pl-8">
                                    <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                                        <p>
                                            {featuredTestimonial.quote}
                                        </p>
                                    </blockquote>
                                    <figcaption className="mt-8 flex gap-x-4">
                                        {/* <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                                        /> */}
                                        <div className="text-sm/6">
                                            <div className="font-semibold text-gray-900">{featuredTestimonial.name}</div>
                                            {/* <div className="text-gray-600">@brenna</div> */}
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
                                {product.sections.map((section, sectionIndex) => (
                                    <div key={`section${sectionIndex}`}>
                                        <h2 className={`${sectionIndex === 0 ? "" : "mt-16"} text-2xl font-bold tracking-tight text-gray-900`}>{section.heading}</h2>
                                        <p className='mt-6'>
                                            {section.description}
                                        </p>
                                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                                            {section && section.content.map((item, itemIndex) => (


                                                <li className="flex gap-x-3" key={`section${sectionIndex}-item${itemIndex}`}>
                                                    <MusicalNoteIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                                    <span>
                                                        <strong className="font-semibold text-gray-900">{item.label}</strong>
                                                        {' '}{item.text}
                                                    </span>
                                                </li>

                                            ))}
                                        </ul>
                                    </div>

                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                </div>








                {/* <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">

                    <section aria-labelledby="details-heading">
                        <div className="flex flex-col items-center text-center">
                            <h2 id="details-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                The Fine Details
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg text-gray-600">
                                Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
                                all-day adventures, long shifts at work, and tough travel schedules.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                            <div>
                                <img
                                    alt="Drawstring top with elastic loop closure and textured interior padding."
                                    src="https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                                    className="aspect-[3/2] w-full rounded-lg object-cover"
                                />
                                <p className="mt-8 text-base text-gray-500">
                                    The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1,220 standard gumballs, or
                                    any combination of on-the-go treats that your heart desires. Yes, we did the math.
                                </p>
                            </div>
                            <div>
                                <img
                                    alt="Front zipper pouch with included key ring."
                                    src="https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                                    className="aspect-[3/2] w-full rounded-lg object-cover"
                                />
                                <p className="mt-8 text-base text-gray-500">
                                    Up your snack organization game with multiple compartment options. The quick-access stash pouch is
                                    ready for even the most unexpected snack attacks and sharing needs.
                                </p>
                            </div>
                        </div>
                    </section>


                    <section aria-labelledby="policy-heading" className="mt-16 lg:mt-24">
                        <h2 id="policy-heading" className="sr-only">
                            Our policies
                        </h2>
                        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                            {policies.map((policy) => (
                                <div key={policy.name}>
                                    <img alt="" src={policy.imageSrc} className="h-24 w-auto" />
                                    <h3 className="mt-6 text-base font-medium text-gray-900">{policy.name}</h3>
                                    <p className="mt-3 text-base text-gray-500">{policy.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div> */}

                {/* <section aria-labelledby="reviews-heading" className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
                        <div className="lg:col-span-4">
                            <h2 id="reviews-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                                Customer Reviews
                            </h2>

                            <div className="mt-3 flex items-center">
                                <div>
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className={classNames(
                                                    reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                                                    'size-5 shrink-0',
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                </div>
                                <p className="ml-2 text-sm text-gray-900">Based on {reviews.totalCount} reviews</p>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Review data</h3>

                                <dl className="space-y-3">
                                    {reviews.counts.map((count) => (
                                        <div key={count.rating} className="flex items-center text-sm">
                                            <dt className="flex flex-1 items-center">
                                                <p className="w-3 font-medium text-gray-900">
                                                    {count.rating}
                                                    <span className="sr-only"> star reviews</span>
                                                </p>
                                                <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                                                    <StarIcon
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                                                            'size-5 shrink-0',
                                                        )}
                                                    />

                                                    <div className="relative ml-3 flex-1">
                                                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                                                        {count.count > 0 ? (
                                                            <div
                                                                style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                                                                className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                                            />
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </dt>
                                            <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                                                {Math.round((count.count / reviews.totalCount) * 100)}%
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    If you’ve used this product, share your thoughts with other customers
                                </p>

                                <a
                                    href="#"
                                    className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                                >
                                    Write a review
                                </a>
                            </div>
                        </div>

                        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
                            <h3 className="sr-only">Recent reviews</h3>

                            <div className="flow-root">
                                <div className="-my-12 divide-y divide-gray-200">
                                    {reviews.featured.map((review) => (
                                        <div key={review.id} className="py-12">
                                            <div className="flex items-center">
                                                <img alt={`${review.author}.`} src={review.avatarSrc} className="size-12 rounded-full" />
                                                <div className="ml-4">
                                                    <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                                                    <div className="mt-1 flex items-center">
                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                            <StarIcon
                                                                key={rating}
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                    'size-5 shrink-0',
                                                                )}
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="sr-only">{review.rating} out of 5 stars</p>
                                                </div>
                                            </div>

                                            <div
                                                dangerouslySetInnerHTML={{ __html: review.content }}
                                                className="mt-4 space-y-6 text-base italic text-gray-600"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>


        </div>
    )
}
