import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BasicCard({ contact }) {
  return (
    <Box>
      <Card sx={{ minWidth: 275 }}>
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
        </CardContent>
        <CardActions>
          <Button size="small">
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
