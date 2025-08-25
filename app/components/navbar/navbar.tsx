'use client';

import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { atom, useAtom } from "jotai";
import Link from "next/link";
import localFont from "next/font/local";
import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const font = localFont({
    src: "../../../fonts/Starjedi.ttf",
  });

export const selectedAtom = atom("HOME");

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



const Navbar = () => {
    const { scrollYProgress } = useScroll();
    const [selected, setSelected] = useAtom(selectedAtom);
    const [isScrolled, setIsScrolled] = useState(false);
    
    const anim = {
        hidden:{y:-50},
        visible:{y:0},
    }

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <>
        <div className={`w-full  ${isScrolled == true ? 'fixed' : 'fixed'} z-50`}>
          <Disclosure as="nav" className={`${isScrolled ? 'bg-[#00001f] border-b-[1px] border-[#47478d]' : 'bg-[#070722] border-b-[1px] border-[#47478d]'} `}>
              {({ open }) => (
                  <>
                      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 xl:py-2">
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
                              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start -mt-2">
                                  <div className="flex flex-shrink-0 items-center">
                                      <span className={`${font.className} text-xl text-white`}>AM</span>
                                  </div>
                                  <div className="hidden sm:ml-6 sm:block">
                                      <div className="flex space-x-4 absolute right-0">

                                          <motion.div
                                              variants={isScrolled !== true ? anim : {}}
                                              initial="hidden"
                                              animate="visible"
                                              transition={{ duration: 0.2 }}
                                          >
                                              <Link href='/'>

                                                  <button
                                                      className={classNames(
                                                          `text-gray-300 hover:bg-[#47478d] hover:text-white rounded-md px-3 py-2 text-[14px] 2xl:text-[20px] 2xl:-mt-1 font-normal font-techMono uppercase`
                                                      )}
                                                  >
                                                      Accueil
                                                  </button>
                                              </Link>
                                          </motion.div>

                                          <motion.div
                                              variants={isScrolled !== true ? anim : {}}
                                              initial="hidden"
                                              animate="visible"
                                              transition={{ duration: 0.4 }}
                                          >
                                              <Link href='#apropos'>
                                                  <button
                                                      className={classNames(
                                                          `text-gray-300 hover:bg-[#47478d] hover:text-white rounded-md px-3 py-2 text-[14px] 2xl:text-[20px] 2xl:-mt-1 font-normal font-techMono uppercase`
                                                      )}
                                                  >
                                                      A propos
                                                  </button>
                                              </Link>
                                          </motion.div>

                                          <motion.div
                                              variants={isScrolled !== true ? anim : {}}
                                              initial="hidden"
                                              animate="visible"
                                              transition={{ duration: 0.6 }}
                                          >
                                              <Link href='#apropos'>
                                                  <button
                                                      className={classNames(
                                                          `text-gray-300 hover:bg-[#47478d] hover:text-white rounded-md px-3 py-2 text-[14px] 2xl:text-[20px] 2xl:-mt-1 font-normal font-techMono uppercase`
                                                      )}
                                                  >
                                                      Compétences
                                                  </button>
                                              </Link>
                                          </motion.div>

                                          <motion.div
                                              variants={isScrolled !== true ? anim : {}}
                                              initial="hidden"
                                              animate="visible"
                                              transition={{ duration: 0.8 }}
                                          >
                                              <Link href='#experience'>
                                                  <button
                                                      className={classNames(
                                                          `text-gray-300 hover:bg-[#47478d] hover:text-white rounded-md px-3 py-2 text-[14px] 2xl:text-[20px] 2xl:-mt-1 font-normal font-techMono uppercase`
                                                      )}
                                                  >
                                                      Expérience
                                                  </button>
                                              </Link>
                                          </motion.div>

                                          <motion.div
                                              variants={isScrolled !== true ? anim : {}}
                                              initial="hidden"
                                              animate="visible"
                                              transition={{ duration: 1 }}
                                          >
                                              <Link href='#projets'>
                                                  <button
                                                      className={classNames(
                                                          `text-gray-300 hover:bg-[#47478d] hover:text-white rounded-md px-3 py-2 text-[14px] 2xl:text-[20px] 2xl:-mt-1 font-normal font-techMono uppercase`
                                                      )}
                                                  >
                                                      Projets
                                                  </button>
                                              </Link>
                                          </motion.div>

                                          <motion.div
                                              variants={isScrolled !== true ? anim : {}}
                                              initial="hidden"
                                              animate="visible"
                                              transition={{ duration: 1 }}
                                          >
                                              <Link href='#contact'>
                                                  <button
                                                      className={classNames(
                                                          `text-gray-300 hover:bg-[#47478d] hover:text-white rounded-md px-3 py-2 text-[14px] 2xl:text-[20px] 2xl:-mt-1 font-normal font-techMono uppercase`
                                                      )}
                                                  >
                                                      Contact
                                                  </button>
                                              </Link>
                                          </motion.div>

                                      </div>
                                  </div>
                              </div>
                              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                              </div>
                          </div>
                      </div>

                      <Disclosure.Panel className="sm:hidden">
                          <div className="space-y-1 px-2 pb-3 pt-2">

                              <Disclosure.Button
                                  as="a"
                                  href='/'
                                  className={classNames(
                                      'flex justify-center items-center content-center rounded-md px-3 py-2 text-base text-gray-300 hover:bg-gray-700 hover:text-white text-[14px] xl:text-[18px] font-normal font-techMono uppercase'
                                  )}
                              >
                                  Accueil
                              </Disclosure.Button>

                              <Disclosure.Button
                                  as="a"
                                  href='#apropos'
                                  className={classNames(
                                      'flex justify-center items-center content-center rounded-md px-3 py-2 text-base text-gray-300 hover:bg-gray-700 hover:text-white text-[14px] font-normal font-techMono uppercase'
                                  )}
                              >
                                  A propos
                              </Disclosure.Button>

                              <Disclosure.Button
                                  as="a"
                                  href='#apropos'
                                  className={classNames(
                                      'flex justify-center items-center content-center rounded-md px-3 py-2 text-base text-gray-300 hover:bg-gray-700 hover:text-white text-[14px] font-normal font-techMono uppercase'
                                  )}
                              >
                                  Compétences
                              </Disclosure.Button>

                              <Disclosure.Button
                                  as="a"
                                  href='#experience'
                                  className={classNames(
                                      'flex justify-center items-center content-center rounded-md px-3 py-2 text-base text-gray-300 hover:bg-gray-700 hover:text-white text-[14px] font-normal font-techMono uppercase'
                                  )}
                              >
                                  Expérience
                              </Disclosure.Button>

                              <Disclosure.Button
                                  as="a"
                                  href='#projets'
                                  className={classNames(
                                      'flex justify-center items-center content-center rounded-md px-3 py-2 text-base text-gray-300 hover:bg-gray-700 hover:text-white text-[14px] font-normal font-techMono uppercase'
                                  )}
                              >
                                  Projets
                              </Disclosure.Button>

                              <Disclosure.Button
                                  as="a"
                                  href='#contact'
                                  className={classNames(
                                      'flex justify-center items-center content-center rounded-md px-3 py-2 text-base text-gray-300 hover:bg-gray-700 hover:text-white text-[14px] font-normal font-techMono uppercase'
                                  )}
                              >
                                  Contact
                              </Disclosure.Button>

                          </div>
                      </Disclosure.Panel>
                  </>
              )}
          </Disclosure>

        <motion.div
            className={`h-1 bg-[#47478d] bottom-0  ${isScrolled == true ? 'flex' : 'hidden'}`}
            style={{ scaleX: scrollYProgress }}
        />
      </div>
    </>
  );
};

export default Navbar;
