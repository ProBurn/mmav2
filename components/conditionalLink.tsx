import Link, {LinkProps} from 'next/link';
import { ReactNode } from 'react';

interface ConditionalLinkProps extends Omit<LinkProps, 'href'> {
    href?: string | null; // href is optional
    children?: ReactNode; // children can be any valid React node

}

const ConditionalLink: React.FC<ConditionalLinkProps> = ({ href, children }) => {
  if (href) {
    return <Link href={href}>{children || null}</Link>;
  }
  return <>{children || null}</>; // No link, just render the children
};

export default ConditionalLink;
