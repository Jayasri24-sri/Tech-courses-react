import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation function
  const validate = () => {
    const errors = {};
    if (formData.name.length < 3)
      errors.name = "Name should be at least 3 characters.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Please enter a valid email.";
    if (formData.password.length < 8)
      errors.password = "Password must be at least 8 characters.";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Confirm Password does not match Password.";
    return errors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setFormError("");
      console.log("Form Submitted:", formData);

      // Save form data to localStorage
      localStorage.setItem("signupData", JSON.stringify(formData));

      // Show success message
      setIsSubmitted(true);
      setFormError("");
      alert("Signup data saved to localStorage!");
      navigate("/");

      // Optionally, reset the form after submission
      // setFormData({
      //   name: "",
      //   email: "",
      //   password: "",
      //   confirmPassword: "",
      // });
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
      setFormError("Please fix the errors in the form.");
    }
  };

  return (
    <section className="align_center form_page">
      <form className="authentication_form signup_form" onSubmit={handleSubmit}>
        <h2>Signup Form</h2>

        <div className="form_inputs signup_form_input">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form_text_input"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoFocus
            />
            {errors.name && <em className="form_error">{errors.name}</em>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form_text_input"
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <em className="form_error">{errors.email}</em>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form_text_input"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <em className="form_error">{errors.password}</em>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              className="form_text_input"
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <em className="form_error">{errors.confirmPassword}</em>
            )}
          </div>
        </div>

        {/* Show global error if any */}
        {formError && <em className="form_error">{formError}</em>}

        {/* Success Message after submission */}
        {isSubmitted && (
          <div className="form_success">
            <strong>Signup Successful!</strong> Your information has been saved.
          </div>
        )}

        <button className="search_button form_submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Signup;
