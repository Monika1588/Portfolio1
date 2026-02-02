import { useState, useEffect, useRef } from "react";
import { sendContact } from "../services/api";
import "./Contact.css";
import { FaThumbsUp, FaCheck } from "react-icons/fa";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      await sendContact(data);
      setShowPopup(true);
      setData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="contact-section">
      <div className="contact-left">
        <h2 className="contact-heading">Contact</h2>
        <p className="contact-description">
          I’m open to full-time roles, internships, and collaborative projects.
          Feel free to reach out for opportunities, discussions, or professional inquiries.
        </p>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={submit}>
          <input
            className="contact-input"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
          />

          <input
            className="contact-input"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />

          <textarea
            className="contact-textarea"
            placeholder="Message"
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            required
          />

          <button className="contact-btn" disabled={isSubmitting}>
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="thankyou-overlay">
          <div className="thankyou-card">
          <div className="thankyou-icon">
  <FaCheck className="tick-icon" />
</div>

            <h3>Message Sent Successfully</h3>
            <p>
              Thank you for reaching out.
              Your message has been delivered, and I’ll get back to you as soon as possible.
            </p>

            <button
              className="thankyou-btn"
              onClick={() => setShowPopup(false)}
            >
              Got it <FaThumbsUp />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
