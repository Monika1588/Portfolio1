import "./Feedback.css";
import { useState } from "react";
import { sendFeedback } from "../services/api";

const StarRating = ({ rating, setRating, error, clearError }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating-wrapper">
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hover || rating) ? "filled" : ""}`}
            onClick={() => {
              setRating(star);
              clearError();
            }}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    rating: 0,
    message: ""
  });

  const [error, setError] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    if (form.rating === 0) {
      setError("Please select a rating ⭐");
      return;
    }

    try {
      await sendFeedback(form);

      setShowPopup(true);

      setForm({ name: "", rating: 0, message: "" });
      setError("");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="feedback" className="feedback-section reveal">
      <h2 className="section-title">Feedback</h2>

      <form className="feedback-form" onSubmit={submit}>
        <p className="feedback-intro">

          <strong><h3>Wait, before you go…</h3></strong>
          <i> I’d like to hear your valuable feedback on this portfolio experience.</i>
        </p>
        
        <StarRating
          rating={form.rating}
          setRating={(value) => setForm({ ...form, rating: value })}
          error={error}
          clearError={() => setError("")}
        />
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />



        <textarea
          placeholder="Your Feedback"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button type="submit">
          <span>Send Feedback</span>
        </button>
      </form>

      {showPopup && (
        <div className="thankyou-overlay">
          <div className="thankyou-card">
            <div className="thankyou-icon">✓</div>

            <h3>Feedback Submitted</h3>
            <p>
              Thank you for taking the time to share your feedback.
              Your response is valuable and helps improve the overall experience.
            </p>

            <button
              className="thankyou-btn"
              onClick={() => setShowPopup(false)}
            >
              Okay 🙌
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
