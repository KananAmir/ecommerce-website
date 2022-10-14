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
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import {deleteUser, getUsers} from "../../../services/user.service";

const UsersListPage = () => {
  const [users, setUsers] = useState();
  // const users = [
  //   {
  //     name: "Fazil",
  //     surname: "Salamli",
  //     email: "fazil_salam@mail.ru",
  //     username: "Fazo",
  //     address: "Kurdaxani",
  //     password: "fazo_123",
  //   },
  //   {
  //     name: "Malik",
  //     surname: "Sagollu",
  //     email: "malik_sagol@mail.ru",
  //     username: "Mako",
  //     address: "Mashdaga",
  //     password: "mako_123",
  //   },
  // ];

  useEffect(() => {
    handleGet();
  }, [])

  async function handleGet(){
    console.log(await getUsers())
    setUsers(await getUsers());
  }

  function handleDelete(id){
    deleteUser(id).then(() => getUsers());
  }

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
              <TableCell align="center">Password</TableCell>
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
                <TableCell align="center">{user.password}</TableCell>
                <TableCell align="center">{user.addDate}</TableCell>
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
    </LayoutAdmin>
  );
};

export default UsersListPage;
