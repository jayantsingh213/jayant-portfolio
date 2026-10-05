"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [] as string[],
    timeline: "",
    budget: "",
    projectDetails: "",
    honeypot: "", // for spam protection
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (service: string) => {
    setFormData(prev => {
      const current = prev.services;
      if (current.includes(service)) {
        return { ...prev, services: current.filter(s => s !== service) };
      } else {
        return { ...prev, services: [...current, service] };
      }
    });
  };

  const handleRadio = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    // Spam check
    if (formData.honeypot) {
      setIsSubmitting(false);
      return; // silently ignore
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      triggerMailto();
      setIsSuccess(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: accessKey,
          subject: `New Portfolio Inquiry from ${formData.name}`,
        }),
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      // Fallback
      triggerMailto();
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(`New Project Enquiry from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Services: ${formData.services.join(", ")}
Timeline: ${formData.timeline}
Budget: ${formData.budget}

Project Details:
${formData.projectDetails}
    `.trim());
    
    window.location.href = `mailto:${siteConfig.links.emailDisplay}?subject=${subject}&body=${body}`;
  };

  if (isSuccess) {
    return (
      <div className="w-full flex flex-col items-center justify-center p-8 bg-brand-form-fill rounded-[16px] border border-blue-300 text-center space-y-6">
        <h3 className="font-sans text-[24px] font-bold text-brand-black">Thanks! I&apos;ll get back to you soon.</h3>
        <p className="font-sans text-[16px] text-brand-black">
          Your details are only used to reply to your enquiry.
        </p>
        
        {/* Optional WhatsApp Button */}
        <a 
          href={`${siteConfig.links.whatsapp}?text=${encodeURIComponent("Hi Jayant, I just filled out the contact form on your website!")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-sans font-bold py-3 px-6 rounded-full transition-colors flex items-center gap-2"
        >
          Message me on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h3 className="font-sans text-[18px] text-brand-black mb-6">Let&apos;s Build Something Together</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <input 
          type="text" 
          name="honeypot" 
          value={formData.honeypot} 
          onChange={handleChange} 
          className="hidden" 
          tabIndex={-1} 
          autoComplete="off" 
        />

        <div className="space-y-2">
          <label htmlFor="name" className="block font-sans text-[15px] font-medium text-brand-black">Your name*</label>
          <input 
            type="text" 
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-[8px] border border-[#118AFF] bg-transparent outline-none focus:ring-2 focus:ring-brand-blue"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block font-sans text-[15px] font-medium text-brand-black">Your business email address*</label>
          <input 
            type="email" 
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-[8px] border border-[#118AFF] bg-transparent outline-none focus:ring-2 focus:ring-brand-blue"
          />
        </div>

        {/* Services / Type of work */}
        <div className="space-y-2 pt-2">
          <label className="block font-sans text-[15px] font-medium text-brand-black mb-3">What type of work do you need completed?</label>
          <div className="space-y-2">
            {siteConfig.formOptions.services.map(service => {
              const isChecked = formData.services.includes(service);
              return (
                <label 
                  key={service} 
                  className={`flex items-center w-full px-4 py-3 rounded-[8px] cursor-pointer transition-colors ${isChecked ? 'bg-[#98B8E8]' : 'bg-brand-form-fill hover:bg-[#A9C4EB]'}`}
                >
                  <input 
                    type="checkbox"
                    className="mr-3 w-4 h-4 rounded border-blue-400 text-brand-blue focus:ring-brand-blue"
                    checked={isChecked}
                    onChange={() => handleCheckbox(service)}
                  />
                  <span className="font-sans text-[14px] text-brand-black">{service}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-2 pt-2">
          <label className="block font-sans text-[15px] font-medium text-brand-black mb-3">What is your timeline?</label>
          <div className="space-y-2">
            {siteConfig.formOptions.timelines.map(option => {
              const isChecked = formData.timeline === option;
              return (
                <label 
                  key={option} 
                  className={`flex items-center w-full px-4 py-3 rounded-[8px] cursor-pointer transition-colors ${isChecked ? 'bg-[#98B8E8]' : 'bg-brand-form-fill hover:bg-[#A9C4EB]'}`}
                >
                  <input 
                    type="radio"
                    name="timeline"
                    className="mr-3 w-4 h-4 border-blue-400 text-brand-blue focus:ring-brand-blue"
                    checked={isChecked}
                    onChange={() => handleRadio("timeline", option)}
                  />
                  <span className="font-sans text-[14px] text-brand-black">{option}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Budget */}
        <div className="space-y-2 pt-2">
          <label className="block font-sans text-[15px] font-medium text-brand-black mb-3">What budget range are we working with?</label>
          <div className="space-y-2">
            {siteConfig.formOptions.budgets.map(option => {
              const isChecked = formData.budget === option;
              return (
                <label 
                  key={option} 
                  className={`flex items-center w-full px-4 py-3 rounded-[8px] cursor-pointer transition-colors ${isChecked ? 'bg-[#98B8E8]' : 'bg-brand-form-fill hover:bg-[#A9C4EB]'}`}
                >
                  <input 
                    type="radio"
                    name="budget"
                    className="mr-3 w-4 h-4 border-blue-400 text-brand-blue focus:ring-brand-blue"
                    checked={isChecked}
                    onChange={() => handleRadio("budget", option)}
                  />
                  <span className="font-sans text-[14px] text-brand-black">{option}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <label htmlFor="projectDetails" className="block font-sans text-[15px] font-medium text-brand-black">Tell me about your project</label>
          <textarea 
            id="projectDetails"
            name="projectDetails"
            rows={4}
            value={formData.projectDetails}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-[8px] border border-[#118AFF] bg-transparent outline-none focus:ring-2 focus:ring-brand-blue resize-y"
          ></textarea>
        </div>

        {errorMsg && (
          <p className="text-red-600 font-sans text-sm">{errorMsg}</p>
        )}

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-black text-white font-sans font-bold text-[18px] py-4 rounded-full transition-opacity hover:opacity-90 disabled:opacity-70 flex justify-center items-center"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>

        <p className="text-center font-sans text-[13px] text-gray-700 mt-4">
          Your details are only used to reply to your enquiry.
        </p>
      </form>
    </div>
  );
}
