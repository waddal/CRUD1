import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import { addContact } from "../actions/index";

const initialFormValues = { name: "", email: "", phone: null };

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

  const handleNavigateContacts = () => {
    navigate("/contacts");
  };

  return (
    <Box>
      <Card
        sx={{
          position: "relative",
          minWidth: 650,
          maxWidth: 900,
          border: "1px solid black",
          margin: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            cursor: "pointer",
          }}
          onClick={handleNavigateContacts}
        >
          <CloseIcon />
        </div>
        <CardContent>
          <Typography color="text.primary" gutterBottom>
            New Contact
          </Typography>
          <form onSubmit={handleSubmit}>
            <Typography color="text.secondary" gutterBottom>
              Name:
            </Typography>
            <Typography variant="body2" component="div">
              <input
                name="name"
                placeholder="Name"
                type={"text"}
                value={formValues.name}
                onChange={handleChange}
              />
            </Typography>
            <Typography sx={{ mb: 0.5 }} color="text.secondary">
              Email:
            </Typography>
            <Typography variant="body2">
              <input
                name="email"
                placeholder="Email"
                type={"email"}
                value={formValues.email}
                onChange={handleChange}
              />
            </Typography>
            <Typography sx={{ mb: 0.5 }} color="text.secondary">
              Phone:
            </Typography>
            <Typography variant="body2">
              <input
                name="phone"
                placeholder="999-999-9999"
                type={"tel"}
                value={formValues.phone}
                onChange={handleChange}
              />
            </Typography>
            <input
              type={"submit"}
              value={"Add Contact"}
              style={{ cursor: "pointer", marginTop: "1%" }}
            />
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { addContact })(AddContactForm);
