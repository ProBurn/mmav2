'use client'
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import ConditionalLink from '@/components/conditionalLink';
import { useNavbar } from '../UIContext';
// import { lessonPages } from '@/data/data';
// import { useRouter } from "next/navigation";
// import { Button } from '@/components/ui/moving-border';
// import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';












const Navbar = () => {
    // const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const [openModal] = useNavbar();
    useEffect(() => {
        console.log('navbar component:', openModal);
    },[openModal])

    // useEffect(() => {
    //     const htmlElement = document.documentElement;
    //     const targetElement = document.getElementById("navbar");

    //     if (!targetElement) return;

    //     const updatePadding = () => {
    //         const computedStyle = window.getComputedStyle(htmlElement);
    //         targetElement.style.paddingRight = computedStyle.paddingRight;
    //     };

    //     // Initial update
    //     updatePadding();

    //     const observer = new MutationObserver(() => {
    //         updatePadding();
    //     });

    //     observer.observe(htmlElement, {
    //         attributes: true,
    //         attributeFilter: ["style"], // Only observe changes to the style attribute
    //     });

    //     return () => {
    //         observer.disconnect(); // Clean up on unmount
    //     };
    // }, []);

    // useEffect(() => {
    //     let initialScrollbarWidth = 0;

    //     const beforeAdjustment = (doc: Document) => {
    //         const htmlElement = doc.documentElement;
    //         const viewport = doc.defaultView || window;

    //         // Calculate the initial scrollbar width
    //         initialScrollbarWidth = Math.max(0, viewport.innerWidth - htmlElement.clientWidth);
    //     };

    //     const afterAdjustment = (doc: Document) => {
    //         const htmlElement = doc.documentElement;

    //         // Calculate the scrollbar width difference
    //         const currentScrollbarWidth = Math.max(0, htmlElement.clientWidth - htmlElement.offsetWidth);
    //         const paddingAdjustment = Math.max(0, initialScrollbarWidth - currentScrollbarWidth);

    //         // Adjust the padding-right of .navbar
    //         const navbar = document.querySelector('.navbar') as HTMLElement;
    //         if (navbar) {
    //             navbar.style.paddingRight = `${paddingAdjustment}px`;
    //         }
    //     };

    //     // Initial adjustments before setting overflow: hidden
    //     beforeAdjustment(document);

    //     // Simulate applying overflow: hidden to the html element
    //     document.documentElement.style.overflow = 'hidden';

    //     // Apply the adjustment after overflow: hidden is set
    //     afterAdjustment(document);

    //     // Clean up if necessary (e.g., resetting overflow)
    //     return () => {
    //         document.documentElement.style.overflow = ''; // Reset overflow style
    //     };
    // }, []);

    interface MenuItem {
        id: number;
        label: string;
        href: string;
        dropdown?: MenuItem[];
    }
    const menuItems: MenuItem[] = [
        { id: 1, label: 'About', href: '/about' },
        {
            id: 2, label: 'Lessons', href: '/lessons',
            dropdown: [
                { id: 1, label: 'Drum', href: '/lessons/drum-lesson' },
                { id: 2, label: 'Guitar', href: '/lessons/guitar-lesson' },
                { id: 3, label: 'Bass', href: '/lessons/bass-lesson' },
                { id: 4, label: 'Piano', href: '/lessons/piano-lesson' },
                { id: 5, label: 'Ukulele', href: '/lessons/ukulele-lesson' },
                { id: 6, label: 'Singing', href: '/lessons/singing-lesson' },
                { id: 7, label: 'All Lessons ->', href: '/lessons' },

            ]
        },
        { id: 3, label: 'Contact', href: '/contact' },
    ];
    const [menuItem, setMenuItem] = useState<number | null>(null);
    const handleMenuItemClick = (item: MenuItem) => {
        setMenuItem(menuItem === item.id ? null : item.id);
        if (item.href && !item.dropdown) {
            closeNavbar();
        }
        console.log(item);
    };
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
        setMenuItem(null);
    }

    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            closeNavbar();
        }

    }


    const closeNavbar = () => {
        setIsOpen(false);
        setMenuItem(null);
    }
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // const router = useRouter();

    // useEffect(() => {
    //     // Listen for navigation events
    //     router.events.on("routeChangeStart", closeNavbar);

    //     return () => {
    //       router.events.off("routeChangeStart", closeNavbar);
    //     };
    //   }, [router]);

    const [showNavbar, setShowNavbar] = useState(true);


    const { scrollY } = useScroll()
    // const [scrollDirection, setScrollDirection] = useState("down")

    useMotionValueEvent(scrollY, "change", (current: number) => {
        const previous = scrollY.getPrevious() ?? 0;
        const diff = current - previous;
        // setScrollDirection(diff > 0 ? "down" : "up")
        setShowNavbar(diff < 0 || current < 100)
        // console.log(current, scrollDirection)
    })

    useEffect(() => {
        console.log(showNavbar)
    }, [showNavbar])

    // useEffect(() => {
    //     // document.documentElement.style.setProperty('--yourmam', `200px`);
    // }, []);


    return (
        <header className='navbar '
        >
            {/* <nav  className={`bg-purple-700 p-4 bg-opacity-50 backdrop-blur-lg w-full ${showNavbar ? "fixed" : "absolute"}`} id="navbar" style={{ zIndex: 450 }} ref={dropdownRef}> */}
            <motion.nav

                className="bg-slate-700 bg-opacity-50 p-4  backdrop-blur-lg w-full fixed pr-[var(--scrollbar-padding)]"
                id="navbar"
                style={{ zIndex: 450 }}
                ref={dropdownRef}
                // initial={{ y: -100, opacity: 0 }} // Hidden state
                animate={{ y: showNavbar && !openModal ? 0 : -100, opacity: showNavbar && !openModal ? 1 : 0 }} // Dynamic animation
                transition={{
                    // type: "spring",    // Spring transition
                    // Adjust damping
                    ease: "easeInOut", // Easing function
                }}
            >


                <div className="container mx-auto flex justify-between items-center">



                    <Link href="/" className="">
                        <div onClick={closeNavbar} className='flex items-center space-x-4'>

                            <img src="/content/logo-small.png" alt="Middlesbrough Music Academy Logo" className="h-8 w-8" />
                            <div className="text-white text-lg font-semibold">
                                Middlesbrough Music Academy
                            </div>
                        </div>
                    </Link>

                    <div className="hidden md:flex space-x-10 z-50"> {/* Increased space-x-4 to space-x-6 */}
                        {/* <a href="#" className="text-gray-300 hover:text-white">Home</a> */}
                        {/* <a href="#" className="text-gray-300 hover:text-white">About</a> */}
                        <div className="flex items-center space-x-10">
                            {menuItems.map((item) => (

                                <FlyoutLink
                                    href={item.href}
                                    key={`nav-item ${item.id}`}
                                    FlyoutContent={item.dropdown ? () => <PricingContent dropdown={item.dropdown} /> : undefined}
                                >
                                    {item.label}
                                </FlyoutLink>
                                // <FlyoutLink href="/services" FlyoutContent={PricingContent}>Services</FlyoutLink>
                                // <FlyoutLink href="#">Contact</FlyoutLink>
                            ))}
                            {/* <a
                                href="https://www.instagram.com/zs_complete_dog_care_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-5 h-5"

                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 0v.01M12 7.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM17.25 6.75a.75.75 0 110 1.5.75.75 0 010-1.5z"
                                    />
                                </svg>
                                <span>Follow me on Instagram</span>
                            </a> */}

                            {/* <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="bg-black text-white flex items-center space-x-2"
                                
                            >

                                <span>Book Now</span>
                            </HoverBorderGradient> */}
                        </div>
                        {/* <a href="#" className="text-gray-300 hover:text-white">Services</a> */}
                        {/* <a href="#" className="text-gray-300 hover:text-white">Contact</a> */}
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-gray-300 hover:text-white focus:outline-none mr-5"
                            onClick={() => toggleDropdown()}
                        >
                            {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg> */}
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Top Line */}
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16"
                                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3, type: 'spring', stiffness: 500, bounce: 0.2, damping: 18 }}
                                />
                                {/* Middle Line */}
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 12h16"
                                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.3, type: 'spring', stiffness: 500, bounce: 0.2, damping: 18 }}
                                />
                                {/* Bottom Line */}
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 18h16"
                                    animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3, type: 'spring', stiffness: 500, bounce: 0.2, damping: 18 }}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* mobile menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden "

                        >
                            {menuItems.map((item, index) => (
                                <ConditionalLink href={!item.dropdown ? item.href : null} key={`menu-item-${item.id}`}>
                                    <motion.div
                                        key={item.label}
                                        // href={!item.dropdown ? item.href : undefined}
                                        className="block px-4 py-2 text-white hover:text-white cursor-pointer"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ delay: index * 0.1, exit: { delay: (menuItems.length - 1 - index) * 0.1 } }}
                                        onClick={() => handleMenuItemClick(item)}
                                    >
                                        {item.label}
                                        {item.dropdown && (
                                            <motion.span
                                                initial={{ rotate: 0 }}
                                                animate={{ rotate: menuItem === item.id ? 90 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="inline-block ml-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </motion.span>
                                        )}
                                        <AnimatePresence>

                                            {item.dropdown && menuItem === item.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}>
                                                    {item.dropdown.map((subItem, subIndex) => (
                                                        <Link href={subItem.href} key={`subItem-${subIndex}`} onClick={closeNavbar}>
                                                            <motion.div
                                                                className="block px-4 py-2 text-white hover:text-white"
                                                                // href={subItem.href}
                                                                key={`subItem-${subIndex}`}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: -20 }}
                                                                transition={{ delay: index * 0.1, exit: { delay: (menuItems.length - 1 - index) * 0.1 } }}
                                                            >
                                                                {subItem.label}
                                                            </motion.div>
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </ConditionalLink>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.nav>
        </header>
    )
}

// const Example = () => {
//     return (
//         <div className="flex h-[500px] justify-center bg-neutral-900 px-3 py-12">
//             <FlyoutLink href="#" FlyoutContent={PricingContent}>
//                 Pricing
//             </FlyoutLink>
//         </div>
//     );
// };

interface FlyoutLinkProps {
    children: React.ReactNode;
    href: string;
    FlyoutContent?: React.ComponentType;
}

const FlyoutLink: React.FC<FlyoutLinkProps> = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit z-50"
        >
            <a href={href} className="relative text-white">
                {children}
                <span
                    style={{
                        transform: open ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                />
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-12 bg-white text-black z-50"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                        {FlyoutContent && <FlyoutContent />}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PricingContent: React.FC<{ dropdown?: { id: number; label: string; href: string; }[] }> = ({ dropdown }) => {
    return (
        <div style={{ zIndex: 2000 }} className="w-64 bg-white p-6 shadow-xl relative">
            <div className="mb-3 space-y-3">
                {/* <h3 className="font-semibold">Grooming</h3> */}
                {dropdown?.map((item) => (

                    <a href={item.href} key={`flyout ${item.id}`} className="block text-sm hover:underline">
                        {item.label}
                    </a>
                ))}
                {/* <a href="#" className="block text-sm hover:underline">
                    Nail Trimming
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Dog Sitting
                </a> */}
            </div>
            {/* <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Walking</h3>
          <a href="#" className="block text-sm hover:underline">
            Startups
          </a>
          <a href="#" className="block text-sm hover:underline">
            SMBs
          </a>
          <a href="#" className="block text-sm hover:underline">
            Enterprise
          </a>
        </div> */}
            {/* <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
                Contact for custom
            </button> */}
        </div>
    );
};

export default Navbar