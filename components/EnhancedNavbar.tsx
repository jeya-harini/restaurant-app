'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropdownMenu from './DropdownMenu';

interface NavItem {
    name: string;
    path?: string;
    dropdown?: {
        name: string;
        path: string;
    }[];
}

const EnhancedNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems: NavItem[] = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        {
            name: 'Services',
            dropdown: [
                { name: 'Web Development', path: '/services/web-dev' },
                { name: 'Mobile Development', path: '/services/mobile-dev' },
                { name: 'Cloud Services', path: '/services/cloud' },
            ],
        },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
                            MyApp
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                item.dropdown ? (
                                    <DropdownMenu key={item.name} title={item.name} items={item.dropdown} />
                                ) : (
                                    <Link
                                        key={item.path}
                                        href={item.path!}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${pathname === item.path
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-700 hover:bg-gray-700 hover:text-white'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            item.dropdown ? (
                                <div key={item.name} className="space-y-1">
                                    <div className="px-3 py-2 text-sm font-medium text-gray-700">
                                        {item.name}
                                    </div>
                                    <div className="pl-4 space-y-1">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.path}
                                                href={subItem.path}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-700 hover:text-white"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.path}
                                    href={item.path!}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${pathname === item.path
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-700 hover:bg-gray-700 hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default EnhancedNavbar;