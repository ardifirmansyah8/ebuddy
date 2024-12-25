"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUser, setIsEdit, updateUser } from "@/store/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";

export default function UserEdit() {
  const { user, updateSuccess, updateError } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();

  const [payload, setPayload] = useState({ name: "", email: "", age: 0 });

  useEffect(() => {
    if (user.name) {
      setPayload({
        name: user.name,
        email: user.email,
        age: user.age,
      });
    }
  }, [user]);

  useEffect(() => {
    if (updateSuccess) {
      setTimeout(() => dispatch(setIsEdit()), 2000);
      dispatch(getUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateSuccess]);

  const handleUpdateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateUser({ id: "XgWIBIYEpIAn3anl2ZgS", ...payload }));
  };

  return (
    <Box
      component="form"
      onSubmit={handleUpdateUser}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 2,
      }}
    >
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <TextField
          id="name"
          name="name"
          autoFocus
          required
          fullWidth
          variant="outlined"
          value={payload.name}
          onChange={(e) => {
            console.log(e.target.value);
            setPayload({ ...payload, name: e.target.value });
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          id="email"
          type="email"
          name="email"
          autoFocus
          required
          fullWidth
          variant="outlined"
          value={payload.email}
          onChange={(e) => setPayload({ ...payload, email: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="age">Age</FormLabel>
        <TextField
          id="age"
          type="number"
          name="age"
          autoFocus
          required
          fullWidth
          variant="outlined"
          value={payload.age}
          onChange={(e) =>
            setPayload({ ...payload, age: Number(e.target.value) })
          }
        />
      </FormControl>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => dispatch(setIsEdit())}
        >
          Cancel
        </Button>
        <Button type="submit" fullWidth variant="contained">
          Update
        </Button>
      </Box>
      {updateError && (
        <Typography variant="subtitle1" color="error">
          {updateError}
        </Typography>
      )}
      {updateSuccess && (
        <Typography variant="subtitle1" color="success">
          Update success
        </Typography>
      )}
    </Box>
  );
}
