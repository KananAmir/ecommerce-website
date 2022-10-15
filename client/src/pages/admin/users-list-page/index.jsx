import React, {useEffect, useState} from "react";
import LayoutAdmin from "../../../layout/LayoutAdmin";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button, DialogContent, DialogContentText, DialogActions, Dialog,
} from "@mui/material";
import styled from "@emotion/styled";
import {deleteUser, getUsers} from "../../../services/user.service";
import {deleteBrand} from "../../../services/brand.service";

const UsersListPage = () => {
  const [users, setUsers] = useState();
  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    handleGet();
  }, [])

  async function handleGet(){
    setUsers(await getUsers());
  }

  function handleDelete(id){
    setId(id);
    setOpen(true);
  }

  const handleYeap = () => {
    setOpen(false);
    deleteUser(id).then(() => getUsers());
  };

  return (
    <LayoutAdmin>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                "&:first-child th": { fontWeight: "600", fontSize: "16px" },
              }}
            >
              <TableCell>User Name</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Surname</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Added Date</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                key={user.email}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{user.username}</TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.surname}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.address}</TableCell>
                <TableCell align="center">{`${user.date.slice(0, 10)} / ${user.date.slice(11, 16)}`}</TableCell>
                <TableCell align="center">
                  <Button
                    sx={{
                      color: "red",
                      fontWeight: "500",
                      border: "1px solid red",
                      ":hover": {
                        backgroundColor: "red",
                        color: "white",
                      },
                    }}
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure about deleting this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Nope</Button>
          <Button onClick={handleYeap}>Yeap</Button>
        </DialogActions>
      </Dialog>
    </LayoutAdmin>
  );
};

export default UsersListPage;
