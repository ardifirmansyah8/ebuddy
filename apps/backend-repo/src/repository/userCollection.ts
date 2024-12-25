import { Response, User } from "@ebuddy/shared";

import db from "../config/firebaseConfig";

export const getUser = async (userId: string): Promise<Response<User>> => {
  const userDoc = await db.collection("USERS").doc(userId).get();
  if (!userDoc.exists) {
    return {
      data: null,
      message: "No user found",
    };
  } else {
    return { data: (userDoc.data() as User) ?? null, message: "success" };
  }
};

export const updateUser = async (user: User): Promise<void> => {
  await db.collection("USERS").doc(user.id).update({
    name: user.name,
    email: user.email,
    age: user.age,
  });
};
