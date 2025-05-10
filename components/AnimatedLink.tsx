// components/AnimatedLink.tsx
'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils'

type AnimatedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function AnimatedLink({ href, children, className = '' }: AnimatedLinkProps) {
  return (
    <Link href={href} className={cn('group relative inline-block font-semibold', className)}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100"
      />
    </Link>
  );
}
