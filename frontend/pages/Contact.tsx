import React, { FormEvent, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/contact.css";

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  topic: "",
  message: ""
};

function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?[0-9()\-\s]{7,20}$/;

  if (data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!emailPattern.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.phone.trim().length > 0 && !phonePattern.test(data.phone.trim())) {
    errors.phone = "Phone number format looks invalid.";
  }

  if (!data.topic.trim()) {
    errors.topic = "Please choose what you need help with.";
  }

  if (data.message.trim().length < 10) {
    errors.message = "Please add at least 10 characters in your message.";
  }

  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function clearFieldError(field: keyof ContactFormData) {
    setErrors((previous) => {
      if (!previous[field]) {
        return previous;
      }

      const next = { ...previous };
      delete next[field];
      return next;
    });
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    const field = name as keyof ContactFormData;

    setFormData((previous) => ({ ...previous, [field]: value }));
    clearFieldError(field);
    if (submitted) {
      setSubmitted(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData(initialFormData);
  }

  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-main">
        <section className="contact-hero">
          <p className="contact-eyebrow">Contact Harmony Bank</p>
          <h1>Talk to our team.</h1>
          <p>
            Need support, have a partnership idea, or want to ask a quick
            question? Send us a message and we will respond within one business
            day.
          </p>
        </section>

        <section className="contact-layout">
          <article className="contact-card">
            <h2>Reach Us Directly</h2>
            <p className="contact-card-copy">
              You can use the form or contact us through these channels.
            </p>
            <ul className="contact-list">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@harmonybank.com">
                  support@harmonybank.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+2349012345678">+234 901 234 5678</a>
              </li>
              <li>
                <strong>Office:</strong> 18 Cedar Avenue, Abuja, Nigeria
              </li>
              <li>
                <strong>Hours:</strong> Mon to Fri, 8:00 AM to 6:00 PM
              </li>
            </ul>
          </article>

          <article className="contact-card">
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="brad Doe"
              />
              {errors.fullName ? (
                <p className="field-error">{errors.fullName}</p>
              ) : null}

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="brad@email.com"
              />
              {errors.email ? <p className="field-error">{errors.email}</p> : null}

              <label htmlFor="phone">Phone (Optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 901 234 5678"
              />
              {errors.phone ? <p className="field-error">{errors.phone}</p> : null}

              <label htmlFor="topic">Topic</label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
              >
                <option value="">Choose a topic</option>
                <option value="account">Account Support</option>
                <option value="payments">Payments and Transfers</option>
                <option value="business">Business Inquiry</option>
                <option value="other">Other</option>
              </select>
              {errors.topic ? <p className="field-error">{errors.topic}</p> : null}

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
              />
              {errors.message ? (
                <p className="field-error">{errors.message}</p>
              ) : null}

              <button type="submit" className="submit-btn">
                Send Message
              </button>

              {submitted ? (
                <p className="form-success" role="status">
                  Message sent. Our team will get back to you soon.
                </p>
              ) : null}
            </form>

            {!hasErrors && !submitted ? (
              <p className="contact-form-note">
                We only use your details to respond to this request.
              </p>
            ) : null}
          </article>
        </section>
      </main>
    </div>
  );
}
