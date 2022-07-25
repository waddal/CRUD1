import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import * as yup from "yup";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import { updateContact } from "../actions/index";
import schema from "../validation/formSchema";

const initialFormErrors = {
  name: "",
  email: "",
  phone: "",
};

const EditContactForm = ({ contacts, updateContact }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === Number(id));
  const { name, email, phone } = contact;
  const editFormValues = { id: id, name: name, email: email, phone: phone };

  const [formValues, setFormValues] = useState(editFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("edit contact: ", formValues);
    await updateContact(formValues);
    navigate(`/contacts/${id}`);
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
            Edit Contact
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
            <div id="error">{formErrors.name}</div>

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
            <div id="error">{formErrors.email}</div>

            <Typography sx={{ mb: 0.5 }} color="text.secondary">
              Phone:
            </Typography>
            <Typography variant="body2">
              <input
                name="phone"
                placeholder="1113339999"
                type={"tel"}
                value={formValues.phone}
                onChange={handleChange}
              />
            </Typography>
            <div id="error">{formErrors.phone}</div>

            <input
              type={"submit"}
              value={"Submit Changes"}
              style={{ cursor: "pointer", marginTop: "1%" }}
              disabled={disabled}
            />
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { contacts: state.contacts };
};

export default connect(mapStateToProps, { updateContact })(EditContactForm);
