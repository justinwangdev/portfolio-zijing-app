"use client";
import React from "react";
import { Image, Link } from "@nextui-org/react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-default-100">
      <div className="px-unit-lg md:px-unit-3xl mt-10 grid grid-cols-1 md:grid-cols-12 h-screen max-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-background mb-4 text-4xl sm:text-6xl  font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-400">
              {`I'm Zijing Zhang`}
            </span>
            <br />
          </h1>
          <div className="text-default-500 text-base sm:text-xl mb-unit-md mt-unit-md">
            <p className="text-xl sm:text-2xl font-semibold mb-unit-sm">
              Materials Scientist & Researcher
            </p>
            <p>
              Exploring the Properties and Applications of Advanced Materials
            </p>
          </div>
          <div>
            <Link
              href="https://mse.engin.umich.edu/people/talsdad/group/zijing-zhang"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-secondary-500 to-secondary-400 hover:bg-default-200 text-white">
                Visit School Site
              </button>
            </Link>
            <Link href="#contact">
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-secondary-400 text-white mt-3">
                <span className="block bg-background text-foreground hover:bg-default-200 rounded-full px-5 py-2">
                  Contact Me
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative w-[375px] h-[375px]">
            <Image
              src="/imgs/avatar.png"
              alt="profile"
              className="absolute transform -translate-x-1/2 -translate-y-unit-xl md:translate-y-0 top-1/2 left-1/2 z-10"
              width={375}
              height={375}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
