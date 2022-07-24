import React from "react";
import { useNavigate } from "react-router-dom";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const ContactListItem = ({ contact }) => {
  const navigate = useNavigate();
  const handleNavigateCard = () => {
    navigate(`${contact.id}`);
  };

  return (
    <TableRow
      key={contact.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 }, "&:hover": { backgroundColor: "white" }, cursor: 'pointer' }}
      onClick={handleNavigateCard}
    >
      <TableCell component="th" scope="row">
        {contact.name}
      </TableCell>
      <TableCell align="right">{contact.id}</TableCell>
      <TableCell align="right">{contact.name}</TableCell>
      <TableCell align="right">{contact.email}</TableCell>
      <TableCell align="right">{contact.phone}</TableCell>
    </TableRow>
  );
};

export default ContactListItem;
