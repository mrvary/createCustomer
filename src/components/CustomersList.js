import React from "react";

import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import BuildIcon from "@material-ui/icons/Build";
import PersonIcon from "@material-ui/icons/Person";

const styles = theme => ({
  List: {
    padding: "20px 120px"
  }
});

const CustomersList = ({ customers, handleDelete, handleEdit, classes }) => (
  <List className={classes.List}>
    {customers.map(
      ({ lastName, firstName, sex, birthday, avatarColor, id }, i) => (
        <ListItem key={id} divider={i !== customers.length - 1}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: avatarColor, fontSize: "16px" }}>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary={firstName + " " + lastName}
            secondary={sex + (birthday ? " - born: " + birthday : "")}
          />

          <IconButton onClick={handleEdit(id)}>
            <BuildIcon fontSize="small" />
          </IconButton>

          <IconButton onClick={handleDelete(id)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </ListItem>
      )
    )}
  </List>
);

export default withStyles(styles)(CustomersList);
