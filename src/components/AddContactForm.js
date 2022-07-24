import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addContact } from "../actions/index";

const initialFormValues = { name: "", email: "", phone: 0 };

const AddContactForm = ({ addContact }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(formValues);
    navigate("/contacts");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add New Contact</h2>
        <label> Name </label>
        <input
          name="name"
          placeholder="Name"
          type={"text"}
          value={formValues.name}
          onChange={handleChange}
        />

        <label> Email </label>
        <input
          name="email"
          placeholder="Email"
          type={"email"}
          value={formValues.email}
          onChange={handleChange}
        />

        <label> Phone</label>
        <input
          name="phone"
          placeholder="Phone"
          type={"tel"}
          value={formValues.phone}
          onChange={handleChange}
        />

        <input type={"submit"} value={"Add"} />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { addContact })(AddContactForm);
