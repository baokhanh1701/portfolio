"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link'
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const TypeAnimationSection = () => {
  return (
    <TypeAnimation
      sequence={[
        "Nguyen Kieu Bao Khanh",
        1000,
        "Uni. Student",
        1000,
        "Cloud Engineer",
        1000,
        "Open for Freelance",
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};
export default function IntroductionSection() {
  return (
    <section className="lg:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center lg:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimationSection />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            👋 Hi, I’m @baokhanh1701
            <br /> 🎓 CS graduate from Ho Chi Minh University of Technology
            <br /> ☁️ Currently clouding around as a Cloud Engineer @ NEC Vietnam
            <br /> 🐛 I break things until they work. Or until I find a bug. Whichever comes first.
            <br /> 🧪 Passionate about pushing buttons I shouldn’t and enabling features that were never meant to be enabled.
            <br /> 🧘‍♂️ Deadlines? Oh, you mean those gentle suggestions from the void?
          </p>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              <Link href="https://www.linkedin.com/in/knkb/">Hire Me</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {" "}
                Download CV{" "}
                <a href="/cv.pdf" download="cv"></a>
              </span>
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:[600px] lg:[600px] relative items-center">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="NKBK"
              src={"/img/vecteezy_boy-standing-holding-laptop-with-left-hand-giving-thumbs-up_11006184.png"}
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
