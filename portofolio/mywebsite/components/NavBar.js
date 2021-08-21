import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from '../components/Logo'
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Contact from "./Contact";
import Routes from "./Routes";
import MenuAnimation from "./MenuAnimation";
import Menu from './Menu';


const links = [
    { title: "About", route: "/" },
    { title: "projects", route: "/projects" },
    { title: "blog", route: "/blog"},
    {title:"hobbies",route:'/hobbies'}
  ];

const Navbar=()=>{ 
    const [isOpen, toggleOpen] = useCycle(false, true);
    return (
        <>
          <nav className="flex py-6 items-center justify-between bg-white">
            <div>
              <Logo />
            </div>
            <motion.div
              className="flex flex-row sm:hidden"
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
            <Contact className='inline-flex mr-3'/>
            <MenuAnimation toggle={() => toggleOpen()}/>
            </motion.div> 
            <div className="hidden sm:block">
                <Routes links={links}></Routes>
            </div>
           </nav>
           <AnimatePresence>
            {isOpen && (
            <Menu links={links} toggle={() => toggleOpen()} key={"menu"} />
            )}
         </AnimatePresence>

         </>
  );
};

export default Navbar;
