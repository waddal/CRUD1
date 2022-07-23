import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Contact from "./Contact";
import ContactCard from "./ContactCard";

const ContactsList = ({ contacts }) => {
  const [active, setActive] = useState(false);

  const handleDisplayCard = (id) => {
    if (!active) {
      setActive(contacts.filter((item) => item.id === id));
    } else {
      setActive(false);
    }
  };

  return (
    <>
      {!active && (
        <TableContainer>
          <Table
            sx={{
              minWidth: 650,
              maxWidth: 900,
              border: "1px solid black",
              margin: 1,
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
                <Contact
                  key={index}
                  contact={contact}
                  handleDisplayCard={handleDisplayCard}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {active && (
        <ContactCard contact={active} handleDisplayCard={handleDisplayCard} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, {})(ContactsList);

const StyledContactsList = styled.div`
  background-color: bisque;
  overflow: scroll;
`;
