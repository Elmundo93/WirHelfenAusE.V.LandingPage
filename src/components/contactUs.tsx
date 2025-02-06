'use client'

import React, { useState, FormEvent } from "react";
import Image from 'next/image';
import Avatar from '../../public/images/avatar-thinking-svgrepo-com.png'
import { motion } from 'framer-motion';
import AnimatedElement from "./Animation/AnimatedElement";
import DankeSagen from '../../public/images/DankeSagen.png'
import { useHeaderHeight } from './headerHeight'
export default function ContactUs() {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Form validation
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  // Setting button text
  const [buttonText, setButtonText] = useState<string>("Senden");

  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showFailureMessage, setShowFailureMessage] = useState<boolean>(false);

  const handleValidation = (): boolean => {
    let tempErrors: { [key: string]: boolean } = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email,
          fullname,
          subject,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Senden");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Senden");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };
  const headerHeight = useHeaderHeight()
  return (
    <main id="contact-us">
         <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 z-[-1] h-full"
        style={{ marginTop: `${headerHeight}px` }}
      >
      <Image
        src={DankeSagen}
        alt="Helfende Menschen"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </motion.div>
      <AnimatedElement id="contact-us" className=" p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 dark:bg-blue-900 md:h-96 mt-10">
       
        <div className="mx-auto mb-10 md:mt-20">
          <div className="badge bg-amber-500 inline-block rounded-xl">
            <p className="font-light text-base px-4 py-1 text-gray-50">
              Kontaktíeren Sie uns
            </p>
          </div>
          <h1 className="text-4xl font-bold mt-4 dark:text-gray-50 text-gray-700">
            Sie haben ein Anliegen oder eine Frage?
          </h1>
          <Image src={Avatar} alt="Helfende Menschen"  className="w-3/4 h-3/4" />
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200"></p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
        >
          <h1 className="text-3xl font-bold dark:text-gray-50">
            Lassen sie es uns wissen!
          </h1>

          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.fullname && (
            <p className="text-red-500">Name darf nicht leer sein.</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.email && (
            <p className="text-red-500">Email darf nicht leer sein.</p>
          )}

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Thema<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.subject && (
            <p className="text-red-500">Thema darf nicht leer sein.</p>
          )}

          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Nachricht<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}

          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
      </AnimatedElement>
      <section className="">
        <h1
          className={`text-4xl font-bold text-center md:mt-60 my-10 gradient-text text-gray-700 ${
            errors ? "md:mt-80" : "md:mt-60"
          }`}
        ></h1>
      </section>
    </main>
  );
}
