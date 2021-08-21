import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";


const container = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  closed: {
    opacity: 0,
    x: -15,
  },
  open: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: -3,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const Menu= ({ links, toggle }) => {
  const router = useRouter();
  const linkBaseStyle = "p-2 cursor-pointer border-b-2 hover:border-black";
  const linkProps = {
    onClick: () => toggle(),
    variants: item,
    exit: "exit",
  };
  return (
    <motion.nav
      initial="closed"
      exit="exit"
      animate="open"
      variants={container}
      className="flex flex-col tracking-widest mb-5"
    >
      {links.map((link) => {
          return (
            <Link href={link.route} passHref key={link.title}>
              <motion.a
                {...linkProps}
                className={`${linkBaseStyle} ${
                  router.pathname === link.route && "border-black"
                }`}
              >
                {link.title}
              </motion.a>
            </Link>
          );
     
      })}
    </motion.nav>
  );
};

export default Menu;
