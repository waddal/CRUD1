import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import Contact from "./ContactListItem";

const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  minWidth: 650,
  maxWidth: 900,
  padding: "1%",
}));

const Header = styled("header")({
  display: "flex",
  marginBottom: "1%",
});

const Title = styled("h2")({
  flex: 2,
  fontSize: "1.4rem",
  textAlign: "center",
});

const ContactsList = ({ contacts }) => {
  let navigate = useNavigate();

  const handleAddContact = () => {
    navigate("/contacts/add");
  };

  return (
    <Container>
      <Header>
        <Title>Contacts</Title>
        <IconButton onClick={handleAddContact}>
          <PersonAddIcon />
        </IconButton>
      </Header>
      <TableContainer>
        <Table
          sx={{
            border: "1px solid black",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Contacts</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact, index) => (
              <Contact key={index} contact={contact} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, {})(ContactsList);
