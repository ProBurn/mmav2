"use client"
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
// import { Field, Label, Switch } from '@headlessui/react'
import SelectMenu from '@/components/ui/selectMenu'
import { Controller, useForm } from 'react-hook-form'
// import Link from 'next/link'
import { contactSchema, ContactSchema } from '@/utils/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { getRecaptchaToken } from '@/utils/reCaptcha'
import { ExclamationCircleIcon } from '@heroicons/react/16/solid'
// import { cn } from '@/lib/utils'
import MapComponent from '@/components/ui/map'
import { contact } from '@/data/data'
// import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
// import ContactSection from '@/components/ui/contact-small'
// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


// declare global {
//   interface Window {
//     grecaptcha: any; // eslint-disable-line @typescript-eslint/no-explicit-any
//   }
// }

export default function Example() {
    // const [agreed, setAgreed] = useState(false)
    // const [travel, setTravel] = useState(false)

    // const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);





    const {
        register,
        control,
        handleSubmit,
        formState: { errors, 
            // isSubmitting 
        },
        setError,
        reset,
        getValues,
        watch,
        // setValue
    } = useForm<ContactSchema>({ resolver: zodResolver(contactSchema), mode: 'onBlur' });
    const formValues = watch();
    useEffect(() => {
        console.log('Form values changed:', formValues)
        console.log('errors!', errors);
    }, [formValues])


    interface ServerError {
        path: (keyof ContactSchema)[];
        code: string;
        message: string;
    }


    const [serverErrors, setServerErrors] = useState<ServerError[]>([]);

    useEffect(() => {
        if (serverErrors.length > 0) {
            alert('changing the setting errors!');
            serverErrors.forEach((error) => {
                setError(error.path[0], { type: error.code, message: error.message });
            });
        }
    }, [serverErrors]);
    // const handleSelectChange = (selected) => {
    //   console.log('Selected value:', selected);
    //   setValue('service', selected.name);
    //   // You can update state or do other actions with the selected value
    // }

    const onSubmit = async (data: ContactSchema) => {
        const recaptchaToken = await getRecaptchaToken('submit');
        console.log('recaptchaToken:', recaptchaToken);

        const payload = { ...data, "recaptchaToken": recaptchaToken };
        console.log("form data", data);

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const responseData = await response.json();

        // if (!response.ok) {
        //   // console.error(responseData);
        //   alert('An error occurred. Please try again.');
        //   return;
        // }
        if (responseData.error) {
            console.log('server error', responseData.error);

            // zodError.issues.forEach(issue => {
            //   const field = issue.path[0];  // Get the field name (e.g., "firstName", "email", etc.)
            //   setError(field, {
            //     type: issue.code,
            //     message: issue.message,
            //   });
            setServerErrors(responseData.error.issues);
            // responseData.error.issues.forEach((error) => {
            // setError(error.path[0], { type: error.code, message: error.message });
            // console.log("error being set", error.path[0], "{ type:", error.code, "message:", error.message); 
            // });




            console.log('Unexpected error format:', responseData);

            console.log('zod errors:', errors);
        }
        reset();
        // send to server
    }

    interface FormErrors {
        [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    }

    const onError = (errors: FormErrors) => {
        console.log("validation errors:", errors);
        console.log("form values", getValues());
    }




    return (
        <div className="relative isolate bg-white">
          
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                            <svg
                                aria-hidden="true"
                                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                            >
                                <defs>
                                    <pattern
                                        x="100%"
                                        y={-1}
                                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                        width={200}
                                        height={200}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                </svg>
                                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                            </svg>
                        </div>
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Get in touch
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            Whether you&apos;re looking to book a lesson, have questions about our programs, or want to know more about what we offer,
                            we&apos;re here to help. Reach out to us, and our friendly team will get back to you as soon as possible.
                        </p>
                        <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    Suite 5b, South Bank<br />
                                    Cargo Fleet Business Centre<br />
                                    Cargo Fleet Offices, Middlesbrough Rd<br />
                                    Cargo Fleet, Middlesbrough TS6 6XH
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href={`tel:${contact.phone}`} className="hover:text-gray-900">
                                        {contact.phonePretty}
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href={`mailto:${contact.email}`} className="hover:text-gray-900">
                                        {contact.email}
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    {/* <MapComponent className='h-[50vh] rounded-sm'/> */}
                </div>
                <form action="#" method="POST" onSubmit={handleSubmit(onSubmit, onError)} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5 grid grid-cols-1">
                                    <input
                                        {...register('firstName')}
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        aria-invalid={errors.firstName ? 'true' : 'false'}
                                        aria-describedby={errors.firstName ? 'FirstName-error' : undefined}
                                        className={`col-start-1 row-start-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600
                                        ${errors.firstName ? 'text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600' : 'text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600'}`}
                                    />
                                    {errors.firstName &&

                                        <ExclamationCircleIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"
                                        />
                                    }
                                    {/* {errors.firstName && (<p className='text-sm/6 text-red-500'>oh dear something went wrong</p>)} */}
                                </div>
                                {errors.firstName && <p id="email-error" className="mt-2 text-sm text-red-600">
                                    {errors.firstName.message}
                                </p>}
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5 grid grid-cols-1">
                                    <input
                                        {...register('lastName')}
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        aria-invalid={errors.lastName ? 'true' : 'false'}
                                        aria-describedby={errors.lastName ? 'LastName-error' : undefined}
                                        className={`col-start-1 row-start-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600
                                            ${errors.lastName ? 'text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600' : 'text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600'}`}
                                    />
                                    {errors.lastName &&

                                        <ExclamationCircleIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"
                                        />
                                    }
                                    {/* {errors.firstName && (<p className='text-sm/6 text-red-500'>oh dear something went wrong</p>)} */}
                                </div>
                                {errors.lastName && <p id="email-error" className="mt-2 text-sm text-red-600">
                                    {errors.lastName.message}
                                </p>}
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5 grid grid-cols-1">
                                    <input
                                        {...register('email')}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        aria-invalid={errors.email ? 'true' : 'false'}
                                        aria-describedby={errors.email ? 'LastName-error' : undefined}
                                        className={`col-start-1 row-start-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600
                                            ${errors.email ? 'text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600' : 'text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600'}`}
                                    />
                                    {errors.email &&

                                        <ExclamationCircleIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"
                                        />
                                    }
                                    {/* {errors.firstName && (<p className='text-sm/6 text-red-500'>oh dear something went wrong</p>)} */}
                                </div>
                                {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600">
                                    {errors.email.message}
                                </p>}
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                                    Phone number
                                </label>
                                <div className="mt-2.5 grid grid-cols-1">
                                    <input
                                        {...register('phoneNumber')}
                                        id="phone-number"
                                        name="phone-number"
                                        type="tel"
                                        autoComplete="tel"
                                        aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                                        aria-describedby={errors.phoneNumber ? 'LastName-error' : undefined}
                                        className={`col-start-1 row-start-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600
                                            ${errors.phoneNumber ? 'text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600' : 'text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600'}`}
                                    />
                                    {errors.phoneNumber &&

                                        <ExclamationCircleIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"
                                        />
                                    }
                                    {/* {errors.firstName && (<p className='text-sm/6 text-red-500'>oh dear something went wrong</p>)} */}
                                </div>
                                {errors.phoneNumber && <p id="email-error" className="mt-2 text-sm text-red-600">
                                    {errors.phoneNumber.message}
                                </p>}
                            </div>



                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                                    Lesson
                                </label>
                                <div className="mt-2.5 grid grid-cols-1 grid-rows-1">


                                    <Controller
                                        name="lesson"
                                        control={control}
                                        defaultValue={undefined}
                                        aria-invalid={errors.lesson ? 'true' : 'false'}
                                        aria-describedby={errors.lesson ? 'LastName-error' : undefined}


                                        render={({ field }) => (
                                            <SelectMenu
                                                className={`col-start-1 row-start-1`}
                                                error={!!errors.lesson}



                                                onChange={(selectedOption) => {
                                                    field.onChange(selectedOption?.name);
                                                }}

                                            />
                                        )}
                                    />

                                    {errors.lesson &&

                                        <ExclamationCircleIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-8 size-5 self-center justify-self-end text-red-500 sm:size-4 z-10"
                                        />
                                    }
                                    {/* {errors.firstName && (<p className='text-sm/6 text-red-500'>oh dear something went wrong</p>)} */}
                                </div>
                                {errors.lesson && <p id="email-error" className="mt-2 text-sm text-red-600">
                                    {errors.lesson.message}
                                </p>}
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5 grid grid-cols-1">
                                    <textarea
                                        {...register('message')}
                                        id="message"
                                        name="message"
                                        aria-invalid={errors.message ? 'true' : 'false'}
                                        aria-describedby={errors.message ? 'LastName-error' : undefined}
                                        rows={4}
                                        className={`col-start-1 row-start-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600
                                            ${errors.message ? 'text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600' : 'text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600'}`}
                                        defaultValue={''}
                                    />
                                    {errors.message &&

                                        <ExclamationCircleIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"
                                        />
                                    }
                                    {/* {errors.firstName && (<p className='text-sm/6 text-red-500'>oh dear something went wrong</p>)} */}
                                </div>
                                {errors.message && <p id="email-error" className="mt-2 text-sm text-red-600">
                                    {errors.message.message}
                                </p>}
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </form>
                </div>


                <div className=' px-6 grid grid-cols-2 '>

                    <MapComponent className='h-[100vh]  rounded-3xl col-span-2 w-full' />
                
            </div>
        </div>
    )
}
