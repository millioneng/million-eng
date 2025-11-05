import React, { useState, useRef } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

export const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const faqs = [
    {
      question: "What industries do you serve?",
      answer:
        "We cater to diverse industries such as Oil & Gas, Power Generation, Chemical Processing, Sugar & Distilleries, Pharmaceuticals, Food Production, and Cement. Our solutions are tailored to address each sector's specific needs.",
    },
    {
      question: "What's the typical response time for a quote request?",
      answer:
        "Our team strives to respond to all quote inquiries within 24-48 business hours. For intricate projects, we may request additional details to provide an accurate and comprehensive quote.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we operate in Pakistan and other countries and can facilitate international shipping to other regions. Please contact our sales team to discuss logistics tailored to your location.",
    },
  ];

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const data = {
      access_key: "f1eda530-ae5a-4f49-ad2e-a35196921f42", // <-- Replace with your Web3Forms Access Key
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setResult("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("❌ Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-stretch">
          {/* --- LEFT SIDE: CONTACT FORM --- */}
          <div className="bg-black text-white p-10 rounded-2xl flex flex-col justify-between shadow-lg">
            <div className="mb-8">
              <h2 className="mb-4 text-4xl font-bold text-[#d4af37] lg:text-5xl">
                Get a Custom Quote
              </h2>
              <p className="text-lg text-gray-300">
                Have a project idea? Share your details, and our expert engineers will connect with you promptly to discuss tailored solutions for your needs.
              </p>
            </div>

            <form
              className="flex flex-col justify-between flex-grow space-y-6"
              onSubmit={handleSubmit}
            >
              {["name", "email", "subject", "message"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block mb-2 font-medium text-[#d4af37]"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field !== "message" ? (
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-black rounded-md border border-gray-400 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] focus:outline-none"
                    />
                  ) : (
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-black rounded-md border border-gray-400 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] focus:outline-none"
                    ></textarea>
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full px-8 py-4 font-semibold text-black bg-[#d4af37] rounded-md hover:bg-black hover:text-[#d4af37] border border-[#d4af37] transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
              </button>

              {result && (
                <p className="mt-3 text-center text-sm text-gray-300">{result}</p>
              )}
            </form>
          </div>

          {/* --- RIGHT SIDE: FAQ SECTION --- */}
          <div className="flex flex-col justify-center h-full p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="mb-8">
              <p className="mb-1 text-lg font-semibold text-[#d4af37]">
                Any Questions?
              </p>
              <h2 className="mb-4 text-4xl font-bold text-black lg:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sub Component: FAQ Item ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className={`border rounded-lg mb-4 overflow-hidden transition-all duration-500 ${
        isOpen ? "border-[#d4af37] bg-[#fffaf0]" : "border-gray-300 bg-white"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-5 text-left"
      >
        <span className="text-lg font-medium text-black">{question}</span>
        {isOpen ? (
          <MinusIcon className="w-7 h-7 text-[#d4af37]" />
        ) : (
          <PlusIcon className="w-7 h-7 text-gray-600" />
        )}
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
        className="transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden"
      >
        <div className="px-6 pb-5">
          <p className="text-gray-700">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
