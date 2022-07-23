import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BasicCard({ contact, handleDisplayCard }) {
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
          onClick={handleDisplayCard}
        >
          <CloseIcon />
        </div>
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            ID:
          </Typography>
          <Typography variant="h5" component="div">
            {contact[0].id}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Name:
          </Typography>
          <Typography variant="body2">{contact[0].name}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email:
          </Typography>
          <Typography variant="body2">{contact[0].email}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Phone:
          </Typography>
          <Typography variant="body2">{contact[0].phone}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <EditIcon />
          </Button>
          <Button size="small">
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
