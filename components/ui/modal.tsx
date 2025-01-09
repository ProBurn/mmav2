'use client'

import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'





import ErrorIcon from '@mui/icons-material/Error';


// import { ChevronDownIcon } from '@heroicons/react/16/solid'
// import { Field, Label, Switch } from '@headlessui/react'

import { Controller, useForm } from 'react-hook-form'
// import Link from 'next/link'
import { contactSchema, ContactSchema } from '@/utils/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { getRecaptchaToken } from '@/utils/reCaptcha'


import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';




export default function Modal({ lesson = '', openModalState, setOpenModalState, duration }: {
    openModalState: boolean,
    setOpenModalState: Dispatch<SetStateAction<boolean>>,
    lesson: string,
    duration?: string

}) {
    // const [open, setOpen] = useState(true)

    // const [openModal, setOpenModal] = useNavbar();
    // const [openModalState, setOpenModalState] = useState(false);

    useEffect(() => {
        console.log('modal component:', openModalState);
    }, )

    // const [open, setOpen] = useNavbarContext(false)

    // const [navbarOpen, setNavbarOpen] = useNavbar();


    const {
        // register,
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
        setOpenModalState(false);
        console.log('modal closed in form');
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
          .Mui-disabled{
            cursor: not-allowed !important;
          }
      `}</style>
            {/* </Head> */}
            {/* <button onClick={() => setOpenModal(true)} className="mt-20 mx-auto p-2 bg-blue-500 text-white">
                Open Modal
            </button> */}
            {/* <button
                // type="submit"
                onClick={() => { setOpenModalState(true) }}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
                Contact to book
            </button> */}

            <Dialog open={openModalState} onClose={() => { setOpenModalState(false); console.log('closed inline') }} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 ws-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 my-auto text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div>
                                {/* <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                <CheckIcon aria-hidden="true" className="size-6 text-green-600" />
              </div> */}
                                <div className="mt-0 text-center sm:mt-0">
                                    <DialogTitle as="h3" className="mb-2 text-lg font-semibold text-gray-900">
                                        Enquire about {lesson}s
                                    </DialogTitle>

                                    <form action="#" method="POST" onSubmit={handleSubmit(onSubmit, onError)} className="px-6 pt-2 h-full w-full">
                                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                                            <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">

                                                <div className='relative col-span-2'>
                                                    <Controller
                                                        control={control}

                                                        name="firstName"
                                                        render={({ field: { onChange, onBlur, value } }) => (
                                                            <FormControl
                                                                // sx={{ m: 1, width: '25ch' }} 
                                                                fullWidth
                                                                size='small'
                                                                variant="outlined">
                                                                <InputLabel htmlFor="outlined-adornment-password">First Name</InputLabel>
                                                                <OutlinedInput
                                                                    error={!!errors.firstName}
                                                                    onChange={onChange}
                                                                    onBlur={onBlur}
                                                                    value={value}

                                                                    id="firstName"
                                                                    type='text'
                                                                    endAdornment={
                                                                        <InputAdornment position="end">
                                                                            <IconButton

                                                                                //   onClick={}
                                                                                //   onMouseDown={}
                                                                                //   onMouseUp={}
                                                                                edge="end"
                                                                            >
                                                                                {errors.firstName && <ErrorIcon className='text-red-500' />}
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    }
                                                                    label="First Name"
                                                                />
                                                                {errors.firstName ? <FormHelperText sx={{ minHeight: '19.92px', marginTop: '4px' }} error id="outlined-weight-helper-text">{errors.firstName.message}</FormHelperText> : <div className='min-h-[19.92px] mt-1'></div>}

                                                            </FormControl>
                                                        )}
                                                    />
                                                </div>

                                                <div className='relative col-span-2'>
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
                                                                                {errors.lastName && <ErrorIcon className='text-red-500' />}
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    }
                                                                    label="Last Name"
                                                                />
                                                                {errors.lastName ? <FormHelperText sx={{ minHeight: '19.92px', marginTop: '4px' }} error id="outlined-weight-helper-text">{errors.lastName.message}</FormHelperText> : <div className='min-h-[19.92px] mt-1'></div>}

                                                            </FormControl>
                                                        )}
                                                    />
                                                </div>
                                                <div className='relative col-span-2'>
                                                    <Controller
                                                        control={control}

                                                        name="email"
                                                        render={({ field: { onChange, onBlur, value } }) => (
                                                            <FormControl
                                                                // sx={{ m: 1, width: '25ch' }} 
                                                                fullWidth
                                                                size='small'
                                                                variant="outlined">
                                                                <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                                                                <OutlinedInput
                                                                    error={!!errors.email}
                                                                    onChange={onChange}
                                                                    onBlur={onBlur}
                                                                    value={value}

                                                                    id="email"
                                                                    type='text'
                                                                    endAdornment={
                                                                        <InputAdornment position="end">
                                                                            <IconButton

                                                                                //   onClick={}
                                                                                //   onMouseDown={}
                                                                                //   onMouseUp={}
                                                                                edge="end"
                                                                            >
                                                                                {errors.email && <ErrorIcon className='text-red-500' />}
                                                                            </IconButton>

                                                                        </InputAdornment>
                                                                    }
                                                                    // startAdornment={
                                                                    //     <InputAdornment position="start">
                                                                    //         <IconButton edge="start">
                                                                    //         <EmailIcon className='text-gray-400' />
                                                                    //         </IconButton>
                                                                    //     </InputAdornment>
                                                                    // }
                                                                    label="Email"
                                                                />
                                                                {errors.email ? <FormHelperText sx={{ minHeight: '19.92px', marginTop: '4px' }} error id="outlined-weight-helper-text">{errors.email.message}</FormHelperText> : <div className='min-h-[19.92px] mt-1'></div>}

                                                            </FormControl>
                                                        )}
                                                    />
                                                </div>
                                                <div className='relative col-span-2'>
                                                    <Controller
                                                        control={control}

                                                        name="phoneNumber"
                                                        render={({ field: { onChange, onBlur, value } }) => (
                                                            <FormControl
                                                                // sx={{ m: 1, width: '25ch' }} 
                                                                fullWidth
                                                                size='small'
                                                                variant="outlined">
                                                                <InputLabel htmlFor="outlined-adornment-password">Phone Number</InputLabel>
                                                                <OutlinedInput
                                                                    error={!!errors.phoneNumber}
                                                                    onChange={onChange}
                                                                    onBlur={onBlur}
                                                                    value={value}

                                                                    id="phoneNumber"
                                                                    type='text'
                                                                    endAdornment={
                                                                        <InputAdornment position="end">
                                                                            <IconButton

                                                                                //   onClick={}
                                                                                //   onMouseDown={}
                                                                                //   onMouseUp={}
                                                                                edge="end"
                                                                            >
                                                                                {errors.phoneNumber && <ErrorIcon className='text-red-500' />}
                                                                            </IconButton>

                                                                        </InputAdornment>
                                                                    }
                                                                    // startAdornment={
                                                                    //     <InputAdornment position="start">
                                                                    //         <IconButton edge="start">
                                                                    //         <EmailIcon className='text-gray-400' />
                                                                    //         </IconButton>
                                                                    //     </InputAdornment>
                                                                    // }
                                                                    label="Phone Number"
                                                                />
                                                                {errors.phoneNumber ? <FormHelperText sx={{ minHeight: '19.92px', marginTop: '4px' }} error id="outlined-weight-helper-text">{errors.phoneNumber.message}</FormHelperText> : <div className='min-h-[19.92px] mt-1'></div>}

                                                            </FormControl>
                                                        )}
                                                    />
                                                </div>
                                                <div className='relative col-span-2'>
                                                    <Controller
                                                        control={control}

                                                        name="lesson"
                                                        render={({ field: { onChange, onBlur } }) => (
                                                            <FormControl
                                                                // sx={{ m: 1, width: '25ch' }} 

                                                                fullWidth
                                                                size='small'
                                                                variant="outlined">
                                                                <InputLabel htmlFor="outlined-adornment-password">Lesson</InputLabel>
                                                                <OutlinedInput
                                                                    // sx={{cursor: 'not-allowed'}}
                                                                    disabled
                                                                    error={!!errors.lesson}
                                                                    className='cursor-not-allowed'
                                                                    onChange={onChange}
                                                                    onBlur={onBlur}
                                                                    value={`${lesson}${duration ? ` - ${duration}` : ''}`}

                                                                    id="Lesson"
                                                                    type='text'
                                                                    endAdornment={
                                                                        <InputAdornment position="end">
                                                                            <IconButton

                                                                                //   onClick={}
                                                                                //   onMouseDown={}
                                                                                //   onMouseUp={}
                                                                                edge="end"
                                                                            >
                                                                                {errors.lesson && <ErrorIcon className='text-red-500' />}
                                                                            </IconButton>

                                                                        </InputAdornment>
                                                                    }
                                                                    // startAdornment={
                                                                    //     <InputAdornment position="start">
                                                                    //         <IconButton edge="start">
                                                                    //         <EmailIcon className='text-gray-400' />
                                                                    //         </IconButton>
                                                                    //     </InputAdornment>
                                                                    // }
                                                                    label="Lesson"
                                                                />
                                                                {errors.lesson ? <FormHelperText sx={{ minHeight: '19.92px', marginTop: '4px' }} error id="outlined-weight-helper-text">{errors.lesson.message}</FormHelperText> : <div className='min-h-[19.92px] mt-1'></div>}

                                                            </FormControl>
                                                        )}
                                                    />
                                                </div>
                                                <div className='relative col-span-2'>
                                                    <Controller
                                                        control={control}

                                                        name="message"
                                                        render={({ field: { onChange, onBlur, value } }) => (
                                                            <FormControl
                                                                // sx={{ m: 1, width: '25ch' }} 
                                                                fullWidth
                                                                size='small'
                                                                variant="outlined">
                                                                <InputLabel htmlFor="outlined-adornment-password">Additional Information</InputLabel>
                                                                <OutlinedInput
                                                                    error={!!errors.message}
                                                                    onChange={onChange}
                                                                    onBlur={onBlur}
                                                                    value={value}
                                                                    multiline
                                                                    rows={4}

                                                                    id="message"
                                                                    type='text'
                                                                    endAdornment={
                                                                        <InputAdornment position="end">
                                                                            <IconButton

                                                                                //   onClick={}
                                                                                //   onMouseDown={}
                                                                                //   onMouseUp={}
                                                                                edge="end"
                                                                            >
                                                                                {errors.message && <ErrorIcon className='text-red-500' />}
                                                                            </IconButton>

                                                                        </InputAdornment>
                                                                    }
                                                                    // startAdornment={
                                                                    //     <InputAdornment position="start">
                                                                    //         <IconButton edge="start">
                                                                    //         <EmailIcon className='text-gray-400' />
                                                                    //         </IconButton>
                                                                    //     </InputAdornment>
                                                                    // }
                                                                    label="Additional Information"
                                                                />
                                                                {errors.message ? <FormHelperText sx={{ minHeight: '19.92px', marginTop: '4px' }} error id="outlined-weight-helper-text">{errors.message.message}</FormHelperText> : <div className='min-h-[19.92px] mt-1'></div>}

                                                            </FormControl>
                                                        )}
                                                    />
                                                </div>







                                            </div>
                                            <div className="mt-0 flex justify-center col-start-1 col-span-2">
                                                <button
                                                    type="submit"
                                                    // onClick={() => setOpenModal(false)}
                                                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Send us a message
                                                </button>
                                                {/* <button
                                                    type="submit"
                                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Send message
                                                </button> */}
                                            </div>
                                        </div>
                                    </form>




                                    {/* <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                            {/* <div className="mt-5 sm:mt-6">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Go back to dashboard
                                </button>
                            </div> */}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
