'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import ErrorIcon from '@mui/icons-material/Error';




import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

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
import Head from 'next/head';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import FormComponent from './formComponent';
// import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
// import ContactSection from '@/components/ui/contact-small'
// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


// declare global {
//   interface Window {
//     grecaptcha: any; // eslint-disable-line @typescript-eslint/no-explicit-any
//   }
// }


export default function Modal() {
    const [open, setOpen] = useState(true)



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
        <div>
            {/* <Head> */}
            <style>{`
        .Mui-error {
          margin-left: 0!important;
        }
      `}</style>
            {/* </Head> */}
            <button onClick={() => setOpen(true)} className="mt-20 mx-auto p-2 bg-blue-500 text-white">
                Open Modal
            </button>

            <Dialog open={open} onClose={() => { setOpen(false) }} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 ws-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div>
                                {/* <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                <CheckIcon aria-hidden="true" className="size-6 text-green-600" />
              </div> */}
                                <div className="mt-3 text-center sm:mt-5">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                        Contact us to book your lessonings
                                    </DialogTitle>

                                    <form action="#" method="POST" onSubmit={handleSubmit(onSubmit, onError)} className="px-6  h-full w-full">
                                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                                <div className='relative col-span-2'>
                                                    <label htmlFor="first-name" className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-gray-900 z-10">
                                                        First name
                                                    </label>
                                                    <div className="relative grid grid-cols-1">
                                                        <input
                                                            {...register('firstName')}
                                                            id="firstName"
                                                            name="firstName"
                                                            type="text"
                                                            autoComplete="given-name"
                                                            aria-invalid={errors.firstName ? 'true' : 'false'}
                                                            aria-describedby={errors.firstName ? 'FirstName-error' : undefined}
                                                            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6
                                                            ${errors.firstName ? 'text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600' : 'text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600'}`}
                                                        />
                                                        {errors.firstName &&

                                                            <ExclamationCircleIcon
                                                                aria-hidden="true"
                                                                className="absolute pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"
                                                            />
                                                        }
                                                        {/* {errors.firstName && (<p className='text-sm/6 text-red-500'>oh dear something went wrong</p>)} */}
                                                    </div>
                                                    {errors.firstName && <p id="email-error" className="mt-2 text-xs text-left text-red-600">
                                                        {errors.firstName.message}
                                                    </p>}
                                                </div>
                                                <div className='relative col-span-2'>
                                                    <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                                                        Last name
                                                    </label>
                                                    <div className="relative mt-2.5 grid grid-cols-1 items-center justify-center">
                                                        <Controller
                                                            control={control}
                                                            name="lastName"
                                                            render={({ field: { onChange, onBlur, value } }) => (

                                                                <TextField
                                                                    helperText={errors.lastName ? errors.lastName.message : ''}


                                                                    error={!!errors.lastName}
                                                                    onChange={onChange}
                                                                    onBlur={onBlur}
                                                                    fullWidth
                                                                    label="email"
                                                                    variant='outlined'
                                                                    size="small"
                                                                    value={value}
                                                                    slotProps={{
                                                                        input: {
                                                                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                                                                        },
                                                                    }}
                                                                />
                                                            )}

                                                        />

                                                        <Controller
                                                            control={control}
                                                            
                                                            name="lastName"
                                                            render={({ field: { onChange, onBlur, value } }) => (
                                                                <FormControl
                                                                    // sx={{ m: 1, width: '25ch' }} 
                                                                    fullWidth
                                                                    size='small'
                                                                    variant="outlined">
                                                                    <InputLabel htmlFor="outlined-adornment-password">Last Name</InputLabel>
                                                                    <OutlinedInput
                                                                        error={!!errors.lastName}
                                                                        onChange={onChange}
                                                                        onBlur={onBlur}
                                                                        value={value}

                                                                        id="lastName"
                                                                        type='text'
                                                                        endAdornment={
                                                                            <InputAdornment position="end">
                                                                                <IconButton

                                                                                    //   onClick={}
                                                                                    //   onMouseDown={}
                                                                                    //   onMouseUp={}
                                                                                    edge="end"
                                                                                >
                                                                                    {errors.lastName && <ErrorIcon className='text-red-500' /> }
                                                                                </IconButton>
                                                                            </InputAdornment>
                                                                        }
                                                                        label="Password"
                                                                    />
                                                                    {errors.lastName && <FormHelperText error id="outlined-weight-helper-text">{errors.lastName.message}</FormHelperText>}

                                                                </FormControl>
                                                            )}
                                                        />

                                                        <FormComponent name='lastName' label='Email your mam' control={control} />

                                                        {errors.lastName &&

                                                            <ExclamationCircleIcon
                                                                aria-hidden="true"
                                                                className="absolute my-auto pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4 z-20"
                                                            />
                                                        }
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

                                                        {/* {errors.firstName && (<p className='text-sm/6 text-red-500'>oh dear something went wrong</p>)} */}
                                                    </div>
                                                    {errors.lastName && <p id="email-error" className="mt-2 text-xs font-roboto text-red-600">
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




                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Go back to dashboard
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
