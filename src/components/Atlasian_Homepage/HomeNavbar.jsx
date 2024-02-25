import React from 'react';
import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import '../Atlasian_Homepage/HomeNavbar.css'
import pic1 from '../../assets/Home_Imgs/Dektop_TL@2x.png';
import pic2 from '../../assets/Home_Imgs/Desktop_TR-2x.png';
import pic3 from '../../assets/Home_Imgs/Desktop_BL-2x.png';
import pic4 from '../../assets/Home_Imgs/Desktop_BR-2x.png';
import AtlassianSolution from './AtlassianSolution';
import Essential from './Essential';
import Career from './Career';
import Footer from './Footer';


const navigation = [
  { name: "Tasknest", to: "https://tasknet-trello.vercel.app/", current: false },
  { name: "Trilo", to: "/triloHome", current: false },
  { name: "Resources", to: "/Resources", current: false },
  { name: "Team", to: "/Team", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HomeNavbar = () => {
  return (
    <>
    {/* Navbar */}
    <Disclosure as="nav" className="bg-slate-100 mb-1  homenav_h" id="HomeNav_H">
      {({ open }) => (
        <>
          <div className="mx-5 max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-blue-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  <img
                     id ="Img_logo_h"
                    src="https://wac-cdn.atlassian.com/dam/jcr:616e6748-ad8c-48d9-ae93-e49019ed5259/Atlassian-horizontal-blue-rgb.svg?cdnVersion=1456"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-gray-700 font-bold"
                            : "text-gray-700  hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-3 text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {/* Your profile dropdown content here */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    {/* navbar ends  */}

    {/* hero page start */}
    <div className="hero-container">
      <h2 className="hero-title1">Impossible alone.</h2>
      <h2 className="hero-title2">Possible together</h2>
      <p className="hero-description">
        See how collaboration makes the impossible, possible.
      </p>
      <div className="background-images">
        <div
          className="background-image background-image1"
          style={{ backgroundImage: `url(${pic1})` }}
        />
        <div
          className="background-image background-image2"
          style={{ backgroundImage: `url(${pic2})` }}
        />
        <div
          className="background-image background-image3"
          style={{ backgroundImage: `url(${pic3})` }}
        />
        <div
          className="background-image background-image4"
          style={{ backgroundImage: `url(${pic4})` }}
        />
      </div>
    </div>
    {/* hero page ends */}

  {/* solution Part start */}
    <AtlassianSolution/>
  {/* solution Part ens*/}

  {/* Essetial start */}
     <Essential/>
  {/* Essetial end */}


 {/* career start */}
     <Career/>
  {/* career end */}

  {/* Footer start */}
      <Footer/>
  {/* Footer end */}
    </>
  );
};

export default HomeNavbar;
