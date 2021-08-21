import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import Contact from "./Contact";


const container= {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: -10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { default: { duration: 1 } } },
};

const Routes = ({ links }) => {
  const router = useRouter();
  const linkBaseStyle = "mr-4 cursor-pointer border-b-2 hover:border-black";
  const linkProps = {
    whileHover: { y: -3 },
    variants: item,
  };
  return (
    <motion.div
      className="flex flex-row text-lg"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {links.map((link) => {
          return (
            <Link href={link.route} key={link.title} passHref>
              <motion.a
                {...linkProps}
                className={`${linkBaseStyle} ${
                  router.pathname === link.route && "border-black"
                }`}
                title={link.title}
              >
                {link.title}
              </motion.a>
            </Link>
          );
      })}
      <Contact className="inline-flex" />
    </motion.div>
  );
};

export default Routes;
