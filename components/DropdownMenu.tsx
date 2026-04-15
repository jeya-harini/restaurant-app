'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DropdownItem {
    name: string;
    path: string;
}

interface DropdownMenuProps {
    title: string;
    items: DropdownItem[];
}

const DropdownMenu = ({ title, items }: DropdownMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-colors inline-flex items-center"
            >
                {title}
                <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {items.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;