import React, { useState } from "react";

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState({});

  const handlechange = (event) => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = {};
    if (!formdata.name) {
      validationErrors.name = "Name is required";
    }
    if (!formdata.email) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(formdata.email)) {
      validationErrors.email = "Invalid email address";
    }

    setError(validationErrors);

    // If no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formdata);
      // TODO: Add your form submission logic here
    }

    const form = event.currentTarget;
    const forms = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: forms,
      });

      if (response.ok) {
        alert("Sucess");
      } else {
        alert("failed");
      }
    } catch (error) {
      alert("not ok");
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="div pt-20">
      <h1 className="div_head">CONTACT ME</h1>
      <form
        onSubmit={handleSubmit}
        id="gform"
        method="POST"
        action="https://script.google.com/macros/s/AKfycby19zCA2CJarBjyv4EfpEFVd4LmFsboH4WlA_-F7C-vh4HuskYGYDT8uv1IAWi7bkuDuA/exec"
      >
        <div className="lg:flex lg:justify-center lg:space-x-10 pt-10">
          <div>
            <p className="text-white">Name</p>
            <input
              className="mt-5 border-4 hover:border-sky-500"
              name="name"
              value={formdata.name}
              onChange={handlechange}
              type="text"
            />
            {error.name && <span className="error">{error.name}</span>}
          </div>
          <div>
            <p className="text-white ">Email</p>
            <input
              type="text"
              name="email"
              value={formdata.email}
              onChange={handlechange}
              className="mt-5 border-4 hover:border-sky-500"
            />
            {error.email && <span className="error">{error.email}</span>}
          </div>
        </div>
        <div className="lg:mx-96 pt-10 lg:px-6">
          <p className="text-white">Message</p>
          <textarea
            className="lg:mt-5 border-4 hover:border-sky-500"
            name=""
            id=""
            cols="35"
            rows="10"
          ></textarea>
        </div>
        <div className="lg:mx-96 lg:px-64 mt-2">
          <button
            type="submit"
            class="  relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-sky-500 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-sky-950  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
