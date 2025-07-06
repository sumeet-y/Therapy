"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactTime: "",
    preferredMethod: "",
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const target = e.target as HTMLInputElement;
    
    setFormData({
      ...formData,
      [name]: target.type === "checkbox" ? target.checked : value,
    });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim())
      newErrors.message = "Please let us know what brings you here";
    if (!formData.contactTime.trim())
      newErrors.contactTime = "Preferred time is required";
    if (!formData.preferredMethod.trim())
      newErrors.preferredMethod = "Please select a contact method";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate form submission
    alert("Form submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      contactTime: "",
      preferredMethod: "",
      agree: false,
    });

    console.log(formData);
  };

  return (
    <div className="max-w-xl  bg-white border rounded-lg p-6 shadow-md my-14 px-4 mx-auto ">
      <h2 className="text-2xl font-bold text-center text-green-900 mb-6">
        Get In Touch
      </h2>
      <p className="text-center text-green-900 mb-6">
        Simply fill out the brief fields below and Dr. Serena Blake will be in
        touch with you soon, usually within one business day. This form is safe,
        private, and completely free.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-green-900">
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered w-full rounded-md text-gray-500 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="input input-bordered w-full rounded-md text-gray-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="label">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="(123) 456-7890"
            className="input input-bordered w-full rounded-md text-gray-500 focus:outline-none"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="label">What brings you here?</label>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full rounded-md text-gray-500 focus:outline-none"
            rows={3}
            placeholder="How can I help you?"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <div>
          <label className="label">Preferred time to reach you</label>
          <input
            type="text"
            name="contactTime"
            className="input input-bordered w-full rounded-md text-gray-500 focus:outline-none"
            placeholder="e.g., Mornings, Afternoons, Evenings"
            value={formData.contactTime}
            onChange={handleChange}
          />
          <p className="text-sm text-green-800 mt-1">
            Let us know when you&apos;re typically available for a call or
            consultation
          </p>
          {errors.contactTime && (
            <p className="text-red-500 text-sm">{errors.contactTime}</p>
          )}
        </div>
        <div>
          <label className="label">Preferred Contact Method</label>
          <select
            name="preferredMethod"
            className="select select-bordered w-full rounded-md focus:outline-none"
            value={formData.preferredMethod}
            onChange={handleChange}
          >
            <option value="">Select preferred method</option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
            <option value="Text">Text</option>
          </select>
          {errors.preferredMethod && (
            <p className="text-red-500 text-sm">{errors.preferredMethod}</p>
          )}
        </div>

        <button type="submit" className="btn  w-full rounded-md bg-green-900 text-white">
          Submit
        </button>

        <p className="text-xs text-gray-600 mt-3">
          <span className="inline-block align-middle mr-1">ℹ️</span> By clicking
          submit you consent to receive texts and emails from Dr. Serena Blake.
        </p>
      </form>
    </div>
  );
}
