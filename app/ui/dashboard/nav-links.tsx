'use client';

import {
  // UserGroupIcon,
  ChartBarIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Registros',
    href: '/dashboard/registros',
    icon: PencilSquareIcon,
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: ChartBarIcon
  },
  // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center rounded text-gray-500 justify-center gap-2 p-3 text-sm font-medium hover:bg-emerald-50 hover:text-emerald-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-slate-50': pathname !== link.href,
              },
              {
                'bg-emerald-100 text-green-900': pathname === link.href,
              },
            )}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
