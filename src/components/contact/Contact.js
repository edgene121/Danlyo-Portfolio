import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import { WEB3FORMS_ACCESS_KEY } from "../../config/contactForm";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setSuccessMsg("");

    if (username.trim() === "") {
      setErrMsg("Your name is required.");
      return;
    }
    if (email.trim() === "") {
      setErrMsg("Your email is required.");
      return;
    }
    if (!emailValidation()) {
      setErrMsg("Please enter a valid email address.");
      return;
    }
    if (phoneNumber.trim() === "") {
      setErrMsg("Your phone number is required.");
      return;
    }
    if (subject.trim() === "") {
      setErrMsg("A subject is required.");
      return;
    }
    if (message.trim() === "") {
      setErrMsg("A message is required.");
      return;
    }

    setIsSubmitting(true);
    setErrMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: username,
          email: email,
          phone: phoneNumber,
          subject: `Portfolio contact: ${subject}`,
          message: message,
          from_name: "Portfolio Website",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }

      setSuccessMsg(
        `Thank you, ${username}! Your message was sent successfully.`
      );
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setErrMsg(
        "Could not send your message. Please try again or email [DANYLO_EMAIL] directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldErrorClass = (matches) =>
    matches ? "border-[#FBBF24] ring-1 ring-[#FBBF24]" : "";

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Let's Connect" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between items-stretch gap-8">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              onSubmit={handleSend}
              noValidate
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
              {errMsg && (
                <p
                  role="alert"
                  className="py-3 px-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-[#FBBF24] text-base tracking-wide"
                >
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p
                  role="status"
                  className="py-3 px-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-[#10B981] text-base tracking-wide"
                >
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <label htmlFor="contact-name" className="text-sm text-gray-400 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    disabled={isSubmitting}
                    className={`${fieldErrorClass(errMsg === "Your name is required.")} contactInput`}
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <label htmlFor="contact-phone" className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    disabled={isSubmitting}
                    className={`${fieldErrorClass(errMsg === "Your phone number is required.")} contactInput`}
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="contact-email" className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </label>
                <input
                  id="contact-email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  disabled={isSubmitting}
                  className={`${fieldErrorClass(
                    errMsg === "Your email is required." ||
                      errMsg === "Please enter a valid email address."
                  )} contactInput`}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="contact-subject" className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  disabled={isSubmitting}
                  className={`${fieldErrorClass(errMsg === "A subject is required.")} contactInput`}
                  type="text"
                  name="subject"
                  placeholder="How can I help?"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="contact-message" className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  disabled={isSubmitting}
                  className={`${fieldErrorClass(errMsg === "A message is required.")} contactTextArea`}
                  cols="30"
                  rows="8"
                  name="message"
                  placeholder="Tell me about your project or opportunity"
                  required
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-[#FBBF24] tracking-wide border border-[#FBBF24] hover:bg-[#FBBF24] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#141518] disabled:hover:text-[#FBBF24]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
