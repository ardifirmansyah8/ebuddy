import { Response, User } from "@ebuddy/shared";

import { auth } from "./firebase";

const BASE_URL = "http://localhost:5001/ebuddy-d2588/us-central1/api";

export const fetchUserData = async (
  userId: string
): Promise<Response<User>> => {
  const response = await fetch(`${BASE_URL}/fetch-user-data?userId=${userId}`, {
    headers: { Authorization: `Bearer ${await getToken()}` },
  });
  return await response.json();
};

export const updateUserData = async (user: User) => {
  const response = await fetch(`${BASE_URL}/update-user-data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getToken()}`,
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};

const getToken = async () => {
  const user = auth.currentUser;

  if (user) {
    return await user.getIdToken();
  }

  throw new Error("Not authenticated");
};
