import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import { deleteContact } from "../actions/index";

const ContactCard = ({ contacts, deleteContact }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find((contact) => contact.id === Number(id));

  const handleNavigateContacts = () => {
    navigate("/contacts");
  };

  const handleDeleteContact = () => {
    // create modal to request user confirmation
    deleteContact(contact.id);
    handleNavigateContacts();
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
          <Typography color="text.secondary" gutterBottom>
            ID:
          </Typography>
          <Typography variant="h5" component="div">
            {contact.id}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Name:
          </Typography>
          <Typography variant="body2">{contact.name}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email:
          </Typography>
          <Typography variant="body2">{contact.email}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Phone:
          </Typography>
          <Typography variant="body2">{contact.phone}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <EditIcon />
          </Button>
          <Button size="small" onClick={handleDeleteContact}>
            <PersonRemoveIcon />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, { deleteContact })(ContactCard);
