'use client';
import {
  useEffect,
  useState,
  useRef,
  ElementType,
  ComponentPropsWithoutRef,
} from 'react';
import { useInView } from 'framer-motion';

type CountUpProps<T extends ElementType> = {
  target: number;
  duration?: number;
  as?: T;
  suffix?: string;
  className?: string;
  formatThousands?: boolean;
} & ComponentPropsWithoutRef<T>;

export default function CountUp<T extends ElementType = 'span'>({
  target,
  duration = 2,
  as,
  suffix,
  className = '',
  formatThousands = true,
  ...rest
}: CountUpProps<T>) {
  const Component = as || 'span';
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, duration, target]);

  const display = formatThousands ? count.toLocaleString() : count.toString();

  return (
    <Component ref={ref} className={className} {...rest}>
      {display}
      {suffix ?? ''}
    </Component>
  );
}
