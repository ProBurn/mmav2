'use client'

import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import SelectMenu from '@/components/ui/selectMenu'
import { Controller, FieldValues, useForm, useWatch } from 'react-hook-form'
import Link from 'next/link'
import { contactSchema, ContactSchema } from '@/utils/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { getRecaptchaToken } from '@/utils/reCaptcha'
// import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import ContactSection from '@/components/ui/contact-small'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


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
    formState: { errors, isSubmitting },
    reset,
    getValues,
    watch,
    setValue
  } = useForm<ContactSchema>({ resolver: zodResolver(contactSchema) });
  const formValues = watch();
  useEffect(() => {
    console.log('Form values changed:', formValues)
  }, [formValues])

  const travel = useWatch({
    control,
    name: 'travelRequired',
    defaultValue: false, // Default value
  });

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

    if (!response.ok) {
      // console.error(responseData);
      alert('An error occurred. Please try again.');
      return;
    }
    if (responseData.error) {


    }
    reset();
    // send to server
  }

  interface FormErrors {
    [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }

  const onError = (errors: FormErrors) => {
    console.error("validation errors:", errors);
    console.log("form values", getValues());
  }

  return (
    <>
      <style>{`
        .grecaptcha-badge {
          visibility: visible;
        }
      `}</style>
      <div className="isolate bg-white px-6 pt-24 sm:pt-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
        <Link href="/contact/mui
      ">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Us 👋</h2>
            <p className="mt-2 text-lg/8 text-gray-600">Reach out to us with any questions or to book your first lesson. We&apos;re here to help!</p>
          </div>
        </Link>

        

        <form action="#" method="POST" onSubmit={handleSubmit(onSubmit, onError)} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  {...register('firstName')}
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  {...register('lastName', { required: true })}
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            {/* <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div> */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  {...register('email', { required: true })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                Lesson
              </label>
              <div className="mt-2.5">
                {/* <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              /> */}

                <Controller
                  name="lesson"
                  control={control}
                  defaultValue={undefined}
                  render={({ field }) => (
                    <SelectMenu
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption?.name);
                      }}

                    />
                  )}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-gray-900">
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  {/* <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div> */}
                  <input
                    {...register('phoneNumber')}
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="123-456-7890"
                    className="block min-w-0 grow px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
           
            
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  defaultValue={''}
                />
              </div>
            </div>




            <Field className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Controller
                  name="privacyPolicy"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onChange={field.onChange}
                      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                      />
                    </Switch>
                  )}
                />
              </div>
              <Label className="text-sm/6 text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Label>
            </Field>
          </div>

          <div className="mt-10">
            <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let&apos;s talk
          </button>
          </div>
          <div className='h-[50px]'>
            {/* <HoverBorderGradient
              containerClassName=" w-full rounded-full h-full"
              as="button"
              colorScheme='light'
              className="text-sm bg-white text-black flex items-center space-x-2"


            >

              <span>Let&apos;s Talk</span>
            </HoverBorderGradient> */}
          </div>

          <div className="mt-3 text-xs text-gray-400">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" className="font-semibold text-indigo-600">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" className="font-semibold text-indigo-600">
              Terms of Service
            </a>{' '}
            apply.
          </div>
        </form>
        <hr className='mt-16'></hr>
        <div className="">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">


              {/* <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Me</h2> */}
              {/* <p className="mt-6 text-lg/8 text-gray-600">
            Feel free to reach out to me using any of the methods below. I&apos;m always happy to connect!
          </p> */}
            </div>
            
          </div>
        </div>
        
      </div>
    </>
  )
}
