/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from 'react';

import compound from '../images/compound.png'


import { Disclosure} from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  SearchIcon,
  TrashIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import ImageModal from '../modals/ImageModal';
import Home from '../pages/Home';
import PortalRoutes from '../../routes/PortalRoutes';

const navigation = [
  {id:1, name: "Shop", href: "/shop", current: false },
  {id:2, name: "About Us", href: "#", current: false },
  {id:3, name: "Inspiration", href: "#", current: false },
  //   { name: 'Calendar', href: '#', current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = () =>  {

  const [open, setOpen] = useState(false)

  return (
    <>
      <Disclosure as="nav" className="bg-pink-50 ">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-black-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}


                    </div>
                  </div>
                </div>
                <div className='compound'>
                <img
                  src={compound}
                  alt=""
                  className=""
                />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  </div>
                  <span className="stroke" />

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-2">
                    <a href="#" className="group -m-2 p-2 flex items-center">
                      <UserIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                  <span className="stroke" />

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-3">
                    <a href="#" className="group -m-2 p-2 flex items-center">
                      <TrashIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? <PortalRoutes/> : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

{/* <Home/>
       */}

    </>
  );
}

export default Navigation;