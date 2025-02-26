'use client'

import React, { useState, FormEvent } from "react";
import AnimatedElement from "../Animation/AnimatedElement";


type FormData = {
  fullname: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = {
  fullname?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: "",
  });

  // Single change handler for all inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Simple validation function
  const validateForm = (): boolean => {
    const { fullname, email, subject, message } = formData;
    const newErrors: Errors = {};
    if (!fullname.trim()) newErrors.fullname = "Name darf nicht leer sein.";
    if (!email.trim()) newErrors.email = "Email darf nicht leer sein.";
    if (!subject.trim()) newErrors.subject = "Thema darf nicht leer sein.";
    if (!message.trim()) newErrors.message = "Nachricht darf nicht leer sein.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFeedback({ type: "", message: "" });
    try {
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const { error } = await res.json();
      if (error) {
        setFeedback({ type: "error", message: "Oops! Something went wrong, please try again." });
      } else {
        setFeedback({ type: "success", message: "Thank you! Your message has been delivered." });
        setFormData({
          fullname: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch  {
      setFeedback({ type: "error", message: "Oops! Etwas ist schief gelaufen, bitte versuchen Sie es erneut." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="z-20 relative">
      <AnimatedElement
        id="contact-us"
        className=" z-10 pt-10 mt-10 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-40 dark:bg-blue-900"
    >
      <div className="mx-auto flex flex-col justify-center mt-10">
        <div className="badge bg-amber-500 inline-block rounded-xl">
          <p className="font-light text-base px-4 py-1 text-gray-50">Kontaktieren Sie uns</p>
        </div>
        <h1 className="text-4xl font-bold mt-4 dark:text-gray-50 text-gray-700">
          Sie haben ein Anliegen oder eine Frage?
        </h1>
     
      </div>
      <form onSubmit={handleSubmit} className="rounded-lg shadow-xl flex flex-col p-8 bg-white dark:bg-blue-500">
        <h1 className="text-3xl font-bold dark:text-gray-50 mb-6">Lassen Sie es uns wissen!</h1>

        <label htmlFor="fullname" className="text-gray-500 font-light dark:text-gray-50">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Ihr Name"
          className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500 ${
            errors.fullname ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}

        <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ihre Email Adresse"
          className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

        <label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">
          Thema <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Betreff"
          className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500 ${
            errors.subject ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}

        <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">
          Nachricht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Ihre Nachricht..."
          rows={4}
          className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500 ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex items-center justify-center hover:bg-[#0f0b3e] transition-colors duration-200 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Senden"}
        </button>

        {feedback.message && (
          <p className={`mt-4 text-sm ${feedback.type === "success" ? "text-green-500" : "text-red-500"}`}>
            {feedback.message}
          </p>
        )}
      </form>
    </AnimatedElement>
    </section>
  );
}