"use client";

import { useState, useEffect, ChangeEvent, FormEvent, FocusEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
  robot: boolean;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    robot: false,
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showMessageError, setShowMessageError] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    const { name, email, message, robot } = formData;
    const hasInput =
      name.trim() !== "" &&
      email.trim() !== "" &&
      message.trim().length >= 30 &&
      robot;
    setIsButtonDisabled(!hasInput);
  }, [formData]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));

    if (name === "message") {
      setShowMessageError(value.trim().length > 0 && value.trim().length < 30);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    if (e.target.name === "message") {
      setShowMessageError(
        e.target.value.trim().length > 0 && e.target.value.trim().length < 30,
      );
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", robot: false });
      } else {
setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-form-bg-color p-8 rounded-lg shadow-md"
    >
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 border border-primary bg-input-bg-color text-text-color rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="youremail@domain.tld"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 border border-primary bg-input-bg-color text-text-color rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Your message (minimum 30 characters)"
          required
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-full p-2 border border-primary bg-input-bg-color text-text-color rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        {showMessageError && (
          <p className="text-error-color text-sm mt-1">
Please enter at least 30 characters.
          </p>
        )}
      </div>
      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            id="robot"
            name="robot"
            required
            checked={formData.robot}
            onChange={handleInputChange}
            className="mr-2"
          />
          <span className="text-sm">
            I accept that I will not be sending any spam messages.
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-primary text-button-text border-none rounded-md cursor-pointer transition-colors duration-300 text-base disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        disabled={isButtonDisabled || status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>
      {status === "success" && (
        <p className="text-green-500 mt-4 text-center font-semibold">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-500 mt-4 text-center font-semibold">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
}