'use client';
import { motion } from 'framer-motion';
import { ReactNode, HTMLProps } from 'react';

type AnimateInProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
    defaultClassName?: boolean;
} & HTMLProps<HTMLDivElement>;

export default function AnimateIn({
    children,
    delay = 0.3,
    className = '',
    defaultClassName = false,
    // eslint-disable-next-line no-unused-vars
    ..._rest
}: AnimateInProps) {
    // console.log('noclassname:', defaultClassName)
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay,
                duration: 0.8,
                ease: 'easeInOut',
            }}
            viewport={{ once: true, amount: 0.2 }}
            className={`${defaultClassName ? 'relative flex flex-col gap-4 items-center justify-center px-4' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
}
