import React, { FC } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hi from "@/components/Hi";
import Doodles from "@/components/Airpods";
import Mac from "@/components/Imac";
import Drone from "@/components/Drone";



const IndexPage: FC = () => {
  return (
    <>
      <Header
       title="Salbi Mohamed -Software Engineer, Creator"
       />
       
      <div className="my-auto">

        <section className="flex justify-between flex-wrap">
          <motion.div
            className="flex flex-col mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            <Hi/>
            <div className="mt-16">
              <h4 className="mb-4 font-light tracking-widest">
                Want to Network?
              </h4>
              <a
                href="mailto:mohamedsali602@live.com"
                target="_blank"
                rel="noreferrer"
                className="px-7 mb-2 border-4 rounded py-2 border-black bg-white hover:bg-gray-200 uppercase font-bold focus:outline-none"
                >
                Stay in touch
              </a>
            </div>
          </motion.div>
          {/* <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 30 }}
            whileHover={{ rotateZ: 3 }}
            // src={require("@/assets/doodles/hero.png")}
            // alt="hero"
            className="w-4/6 sm:w-auto xl:w-5/12 mb-4 sm:mb-0 mx-auto lg:mx-0"
          /> */}
          <Doodles/>
          <Mac/>
          <Drone/>
        </section>
          {/* <Game/> */}
            </div>
          {/* <Airpods/> */}
    </>
  );
};

export default IndexPage;
