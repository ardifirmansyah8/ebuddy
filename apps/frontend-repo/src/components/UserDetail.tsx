import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setIsEdit } from "@/store/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";

export default function UserDetail() {
  const { user, fetchLoading, fetchError } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleFetchUser = () => {
    dispatch(getUser());
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={handleFetchUser}
          disabled={fetchLoading}
        >
          Fetch User
        </Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}>
        {fetchError && <Typography color="error">{fetchError}</Typography>}

        {fetchLoading && <CircularProgress size={24} color="inherit" />}

        {!fetchLoading && !fetchError && !user?.name && (
          <Typography variant="subtitle1">Data user empty</Typography>
        )}
      </Box>

      {!fetchLoading && user?.name && (
        <>
          <Box>
            <Typography variant="subtitle1">Name: {user.name}</Typography>
            <Typography variant="subtitle1">Email: {user.email}</Typography>
            <Typography variant="subtitle1">Age: {user.age}</Typography>
          </Box>
          <Button
            fullWidth
            variant="contained"
            onClick={() => dispatch(setIsEdit())}
          >
            Edit
          </Button>
        </>
      )}
    </>
  );
}
