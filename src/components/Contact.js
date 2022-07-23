import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const Contact = ({ contact, handleDisplayCard }) => {

  return (
    <>
      <TableRow
        key={contact.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        onClick={() => handleDisplayCard(contact.id)}
      >
        <TableCell component="th" scope="row">
          {contact.name}
        </TableCell>
        <TableCell align="right">{contact.id}</TableCell>
        <TableCell align="right">{contact.name}</TableCell>
        <TableCell align="right">{contact.email}</TableCell>
        <TableCell align="right">{contact.phone}</TableCell>
      </TableRow>
    </>
  );
};

export default Contact;
