'use client';

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { atom, useAtom } from "jotai";
import Link from "next/link";
import localFont from "next/font/local";

const navigation = [
  { name: 'Accueil', href: '/', current: true, info :'HOME'},
  { name: 'Réalisations', href: '/real', current: false, info :'REAL'},
  { name: 'Autre', href: '/other', current: false, info :'OTHER' },
]

const font = localFont({
    src: "../../../fonts/Starjedi.ttf",
  });

export const selectedAtom = atom("HOME");

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



const Navbar = () => {
    
    const [selected, setSelected] = useAtom(selectedAtom);

  return (
    <div className="w-full">
        <Disclosure as="nav" className="bg-[#000814]">
        {({ open }) => (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <span className={`${font.className} text-xl text-white`}>AM</span>
                    </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <Link href={`${item.href}`}>
                            <button
                            key={item.name}
                            onClick={() => setSelected(item.info)}
                            className={classNames(
                                selected == item.info ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            >
                            {item.name}
                            </button>
                        </Link>
                    ))}
                    </div>
                </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                </div>
            </div>
        </div>

            <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                <Disclosure.Button
                    key={item.name}
                    as="a"
                    onClick={() => setSelected(item.info)}
                    href={item.href}
                    className={classNames(
                        'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    )}
                >
                    {item.name}
                </Disclosure.Button>
                ))}
            </div>
            </Disclosure.Panel>
        </>
        )}
    </Disclosure>
  </div>
  );
};

export default Navbar;
