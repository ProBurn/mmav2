'use client'

import { useState } from 'react'
import {  Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { UseFormRegister } from 'react-hook-form'
import { lessons } from '@/data/data'
import { cn } from '@/lib/utils'

// const people = [
//     {
//         id: 1,
//         name: 'Wade Cooper',
//         avatar:
//             'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 2,
//         name: 'Arlene Mccoy',
//         avatar:
//             'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 3,
//         name: 'Devon Webb',
//         avatar:
//             'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
//     },
//     {
//         id: 4,
//         name: 'Tom Cook',
//         avatar:
//             'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 5,
//         name: 'Tanya Fox',
//         avatar:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 6,
//         name: 'Hellen Schmidt',
//         avatar:
//             'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 7,
//         name: 'Caroline Schultz',
//         avatar:
//             'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 8,
//         name: 'Mason Heaney',
//         avatar:
//             'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 9,
//         name: 'Claudie Smitham',
//         avatar:
//             'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 10,
//         name: 'Emil Schaefer',
//         avatar:
//             'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
// ]
// const items = [
//     {
//         id: 1,
//         name: 'Drum Lesson',
//         avatar:
//             'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 2,
//         name: 'Nail Clipping',
//         avatar:
//             'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 3,
//         name: 'Dog Sitting',
//         avatar:
//             'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
//     },
//     {
//         id: 4,
//         name: 'Other / N/A',
//         avatar:
//             'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },

// ]
type SelectMenuProps = {
    register?: UseFormRegister<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
    name?: string;
    onChange?: (selected: { id: number; name: string; avatar: string } | null) => void;
    className?: string;
    error?: boolean | undefined;
}

export default function SelectMenu({ register, name = '', onChange, className, error=false }: SelectMenuProps) {
    const [selected, setSelected] = useState<{ id: number; name: string; avatar: string } | null>(null)
    // const dropdownItems = items

    const handleChange = (newSelected: { id: number; name: string; avatar: string } | null) => {
        setSelected(newSelected);
        if (onChange) {
            onChange(newSelected); // Pass the selected value up
        }
    }

    return (
        <Listbox value={selected} onChange={handleChange} as="div">
            {/* <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label> */}
            <div className={cn("relative", className)}>
                <ListboxButton
                    {...(register ? register(name) : {})}
                    className={cn("grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left outline outline-1 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2  sm:text-sm/6",
                        error ? 'text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600' : 'text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600')}
                    >
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                        {/* <img alt="" src={selected.avatar} className="size-5 shrink-0 rounded-full" /> */}
                        <span className={`block truncate ${!selected ? (error ? 'text-red-500' : 'text-gray-500') : ''}`}>
                            {selected ? selected?.name : 'Please Select'}
                        </span>
                    </span>
                    <ChevronUpDownIcon
                        aria-hidden="true"
                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                    {lessons.map((item, index) => (
                        <ListboxOption
                            key={index}
                            value={item}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                        >
                            <div className="flex items-center">
                                {/* <img alt="" src={item.avatar} className="size-5 shrink-0 rounded-full" /> */}
                                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                    {item.name}
                                </span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                                <CheckIcon aria-hidden="true" className="size-5" />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    )
}
