import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation logic
  const validate = () => {
    const errors = {};
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false); // Reset success state on error
      return;
    }

    // Get stored signup data from localStorage
    const storedSignupData = JSON.parse(localStorage.getItem("signupData"));

    // Validate credentials
    if (
      storedSignupData &&
      storedSignupData.email === formData.email &&
      storedSignupData.password === formData.password
    ) {
      setErrors({});
      setFormError("");
      setIsSubmitted(true);
      localStorage.setItem("loggedIn", true); // Set login state
      localStorage.setItem("user", JSON.stringify(storedSignupData)); // Store logged-in user data
      alert("Login successful!");
      window.location = "/"; // Redirect to homepage/dashboard
    } else {
      setFormError("Invalid email or password.");
      setIsSubmitted(false); // Reset success state if login fails
    }
  };

  // Focus on the first error field
  React.useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorField = document.querySelector(".form_error");
      if (firstErrorField) firstErrorField.focus();
    }
  }, [errors]);

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form_text_input"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-describedby="emailHelp"
              autoFocus
            />
            {errors.email && (
              <em className="form_error" role="alert">
                {errors.email}
              </em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form_text_input"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              aria-describedby="passwordHelp"
            />
            {errors.password && (
              <em className="form_error" role="alert">
                {errors.password}
              </em>
            )}
          </div>

          {formError && (
            <em className="form_error" role="alert">
              {formError}
            </em>
          )}

          {/* Success Message after submission */}
          {isSubmitted && (
            <div className="form_success" role="alert">
              <strong>Login Successful!</strong> Redirecting...
            </div>
          )}

          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
