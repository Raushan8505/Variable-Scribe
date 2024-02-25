import React from 'react';
import '../Atlasian_Homepage/HomeNavbar.css'
import PropTypes from 'prop-types';
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import blog from "../../assets/Home_Imgs/Blog.jpg";
import atlassianteam from "../../assets/Home_Imgs/TeamPlaybook.png";
import agileCoach from "../../assets/Home_Imgs/AgileCoach.png";
import transparent from "../../assets/Home_Imgs/transparentA.png";
import team23 from "../../assets/Home_Imgs/Atlassianteam23.png";
import teamVelocity from "../../assets/Home_Imgs/teamAtlassian.png";
import { NavLink } from "react-router-dom";
import '../Atlasian_Homepage/Resources.css'; // Import the CSS file
import Footer from './Footer';

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Trello", to: "https://tasknet-trello.vercel.app/", current: false },
  { name: "POS", to: "/POS", current: false },
  { name: "Resources", to: "/Resources", current: false },
  { name: "Team", to: "/Team", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Resources = () => {

  return (
    <>
    <Disclosure as="nav" className="bg-slate-100 mb-5">
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
                    className="h-6 w-auto"
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

    <div className="container">
      <div className="section">
        <div className="card" style={{ backgroundColor: '#EAE6FF' }}>
          <img src={blog} className="image" alt="Avatar" />
          <div className="para">Work Life</div>
          <div className="p">Real-life advice, inspiration, and stories</div>
          <div className="p">from the working world today</div>
          <div className="span"><a href='https://www.atlassian.com/blog'>Read our blog</a></div>
        </div>
        <div className="card" style={{ backgroundColor: '#E6FCFF' }}>
          <img src={atlassianteam} className="image" alt="Avatar" />
          <div className="para">Atlassian Team Playbook</div>
          <div className="p">Solve common team challenges with</div>
          <div className="p">these group exercises.</div>
          <div className="span"><a href='https://www.atlassian.com/team-playbook'>Check team health</a></div>
        </div>
        <div className="card" style={{ backgroundColor: '#DEEBFF' }}>
          <img src={agileCoach} className="image" alt="Avatar" />
          <div className="para">The Agile Coach</div>
          <div className="p">Atlassian's no-nonsense guide to agile</div>
          <div className="p">development.</div>
          <div className="span"><a href='https://www.atlassian.com/resources'>Visit our resources</a></div>
        </div>
      </div>
      <div className="wrapper">
        <div className="card" style={{ backgroundColor: 'transparent' }}>
          <img src={transparent} className="image" alt="Avatar" />
          <div className="para"></div>
          <div className="p"></div>
          <div className="p"></div>
          <div className="span"><a href='https://www.atlassian.com/company/events'>Learn more</a></div>
        </div>
        <div className="card" style={{ backgroundColor: '#250F5E' }}>
          <img src={team23} className="image" alt="Avatar" />
          <div className="para"></div>
          <div className="p"></div>
          <div className="p"></div>
          <div className="span"></div>
        </div>
        <div className="card" style={{ backgroundColor: '#250F5E' }}>
          <img src={teamVelocity} className="image" alt="Avatar" />
          <div className="para"></div>
          <div className="p"></div>
          <div className="p"></div>
          <div className="span"></div>
        </div>
      </div>
    </div>

    <Footer/>
  </>
  );
};

export default Resources;
