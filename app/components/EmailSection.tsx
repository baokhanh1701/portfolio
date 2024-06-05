"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import github_mark_white from "../../public/img/github-mark/github-mark-white.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (resData.success) {
      console.log("Message sent successfully");
      setEmailSubmitted(true)
    } else {
      setEmailSubmitted(false)
    }
  };
  return (
    <section id="contacts" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 xl:top-1/2 xl:-right-1 -left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new chances to work, my inbox is always
          available. Whether you have any question or just want to say hi,
          I&apos;ll make sure to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/baokhanh1701">
            <Image src={github_mark_white} alt="Github Icon" width={50} />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="form flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              typeof="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Nguyen Kieu Bao Khanh"
              className="form-input bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              typeof="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="knguyenkieubao@gmail.com"
              className="form-input bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              typeof="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Just saying hi!"
              className="form-input bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              typeof="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Thank you!"
              className="form-input bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></textarea>
          </div>
          <button
            className="btn mb-6 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            type="submit"
          >
            Send
          </button>
          {
            emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                {" "}
                Thank you for contacting me! I will get back to you as soon as
                possible.
              </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
