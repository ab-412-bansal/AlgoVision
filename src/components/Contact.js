import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const initialFormData = {
    name: '',
    email: '',
    contactNumber: '',
    starRating: '',
    reason: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.contactNumber) errors.contactNumber = 'Contact number is required';
    if (!formData.starRating) errors.starRating = 'Please select a star rating';
    if (!formData.reason) errors.reason = 'Please select a reason for contacting';
    if (!formData.message) errors.message = 'Message is required';

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      setFormData(initialFormData); // Reset form to initial values
      // Submit the form to backend...
      const url = "http://localhost:8000/contact"
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mbno: formData.contactNumber,
          starRatings: formData.starRating,
          reason: formData.reason,
          message: formData.message
        })
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log("Data: ", data)
      if(data.msg){
        // alert("Contact info saved!")
        setMessage(data.msg)
      }
      else{
        setMessage(data.error)
      }
    } else {
      setSubmitted(false);
    }
    setFormErrors(errors);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className="contact-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span className="error-message">{formErrors.name}</span>}
        </div>

        <div className="contact-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span className="error-message">{formErrors.email}</span>}
        </div>

        <div className="contact-group">
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          {formErrors.contactNumber && <span className="error-message">{formErrors.contactNumber}</span>}
        </div>

        <div className="contact-group">
          <label>Star Rating:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star}>
                <input
                  type="radio"
                  name="starRating"
                  value={star}
                  onChange={handleChange}
                  checked={formData.starRating === String(star)}
                />
                {star} Star{star > 1 && 's'}
              </label>
            ))}
          </div>
          {formErrors.starRating && <span className="error-message">{formErrors.starRating}</span>}
        </div>

        <div className="contact-group">
          <label>Reason for Contacting:</label>
          <div className="reason-options">
            <label>
              <input
                type="radio"
                name="reason"
                value="complaint"
                onChange={handleChange}
                checked={formData.reason === 'complaint'}
              />
              Complaint
            </label>
            <label>
              <input
                type="radio"
                name="reason"
                value="suggestion"
                onChange={handleChange}
                checked={formData.reason === 'suggestion'}
              />
              Suggestion
            </label>
            <label>
              <input
                type="radio"
                name="reason"
                value="feedback"
                onChange={handleChange}
                checked={formData.reason === 'feedback'}
              />
              Feedback
            </label>
          </div>
          {formErrors.reason && <span className="error-message">{formErrors.reason}</span>}
        </div>

        <div className="contact-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {formErrors.message && <span className="error-message">{formErrors.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && <p className="success-message">{message}</p>}
    </div>
  );
}

export default Contact;
