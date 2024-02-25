
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import mayank from '../../assets/Team_Imgs/mayank.jpg'
import naman from '../../assets/Team_Imgs/naman.jpg'
import haresh from '../../assets/Team_Imgs/Haresh.jpg'
import raushan from '../../assets/Team_Imgs/Rausan.jpg'
import  arsalan from '../../assets/Team_Imgs/Arsalan.jpg'
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import './Teamcard.css'
import { NavLink } from "react-router-dom";

const navigation = [
    { name: "Home", to: "/", current: false },
    { name: "Tasknest", to: "https://tasknet-trello.vercel.app/", current: false },
    { name: "Trilo", to: "/triloHome", current: false },
    { name: "Resources", to: "/Resources", current: false },
    { name: "Team", to: "/Team", current: false },
  ];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
const Teamcard = () => {
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
        <div className="main-container" >
            <p style={{fontSize:"44px", color:'black'}} className="team-heading">Our Team Members</p>

            <div className="team">
                <div className="team-member">
                    <div className="teamimage">
                        <img alt="Mayank" src={naman} />
                    </div>
                    <div className="member-details">
                        <h2 style={{fontSize:"24px"}}>Naman Bansal</h2>
                        <h1 style={{fontSize:"20px"}} className="text-muted">Full Stack Developer</h1>
                        <p>Proficient in debugging and troubleshooting front-end issues using browser developer tools and other debugging techniques.
                        </p>
                        <div className="social-icons" style={{display:"flex",justifyContent:"center",gap:"10%"}}>
                            <a href="https://www.linkedin.com/in/naman-bansal-b52a8390/"><FaLinkedin size={30} /></a>
                            <a href="https://github.com/nmnbansal"><FaGithub size={30} /></a>
                            <a href="#"><FaInstagram size={30} /></a>
                        </div>
                    </div>
                </div>
                {/* Repeat the above div for each team member */}

                

                <div className="team-member">
                    <div className="teamimage">
                        <img alt="Mayank" src={mayank} />
                    </div>
                    <div className="member-details">
                        <h2 style={{fontSize:"24px"}}>Mayank Belwal</h2>
                        <h1 style={{fontSize:"20px"}} className="text-muted">Full Stack Developer</h1>
                        <p> Familiar with version control systems such as Git, facilitating collaboration and code management within development teams
                        </p>
                        <div className="social-icons" style={{display:"flex",justifyContent:"center",gap:"10%"}}>
                            <a href="https://www.linkedin.com/in/mayank-belwal-6bb808161"><FaLinkedin size={30} /></a>
                            <a href="https://github.com/MayankBelwal05"><FaGithub size={30} /></a>
                            <a href="#"><FaInstagram size={30} /></a>
                        </div>
                    </div>
                </div>


                <div className="team-member">
                    <div className="teamimage">
                        <img alt="Mayank" src={raushan} />
                    </div>
                    <div className="member-details">
                        <h2 style={{fontSize:"24px"}}>Raushan Raj singh</h2>
                        <h1 style={{fontSize:"20px"}} className="text-muted">Full Stack Developer</h1>
                        <p> Proficient in front-end technologies including HTML5, CSS3, and JavaScript, with a keen eye for responsive design and cross-browser compatibility.
                        </p>
                        <div className="social-icons" style={{display:"flex",justifyContent:"center",gap:"10%"}}>
                            <a href="https://www.linkedin.com/in/raushan-raj-singh/"><FaLinkedin size={30} /></a>
                            <a href="https://github.com/Raushan8505"><FaGithub size={30} /></a>
                            <a href="#"><FaInstagram size={30} /></a>
                        </div>
                    </div>
                </div>

                <div className="team-member">
                    <div className="teamimage">
                        <img alt="Mayank" src={haresh} />
                    </div>
                    <div className="member-details">
                        <h2 style={{fontSize:"24px"}}>Haresh Naina</h2>
                        <h1 style={{fontSize:"20px"}} className="text-muted">Full Stack Developer</h1>
                        <p> Experienced in deploying applications to web servers and cloud platforms and detail oriented
                        </p>
                        <div className="social-icons" style={{display:"flex",justifyContent:"center",gap:"10%"}}>
                            <a href="https://www.linkedin.com/in/nhj31/"><FaLinkedin size={30} /></a>
                            <a href="https://github.com/Hari3199"><FaGithub size={30} /></a>
                            <a href="#"><FaInstagram size={30} /></a>
                        </div>
                    </div>
                </div>

                <div className="team-member">
                    <div className="teamimage">
                        <img alt="Mayank" src={arsalan} />
                    </div>
                    <div className="member-details">
                        <h2 style={{fontSize:"24px"}}>Arslaan Akhtar</h2>
                        <h1 style={{fontSize:"20px"}} className="text-muted">Full Stack Developer</h1>
                        <p> Excellent communication skills, a collaborative team player, and a quick learner adaptable to evolving technologies.
                        </p>
                        <div className="social-icons" style={{display:"flex",justifyContent:"center",gap:"10%"}}>
                            <a href="https://www.linkedin.com/in/arsalan-akhtar-20ab581ba/"><FaLinkedin size={30} /></a>
                            <a href="https://github.com/aakhtar10"><FaGithub size={30} /></a>
                            <a href="#"><FaInstagram size={30} /></a>
                        </div>
                    </div>
                </div>

            


            </div>
        </div>
        </>
        
    );
}

export default Teamcard;