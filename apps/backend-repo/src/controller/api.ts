import { Request, Response } from "express";
import { User } from "@ebuddy/shared";

import { getUser, updateUser } from "../repository/userCollection";

export const fetchUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await getUser(req.query.userId as string);
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: `Error fetching user data: ${error}` });
  }
};

export const updateUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user: User = req.body;
  if (!user.id || !user.name || !user.email || !user.age) {
    res.status(400).send({ error: "Invalid request: Missing fields" });
    return;
  }

  try {
    await updateUser(user);
    res.status(200).send({ message: "User data updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: `Error updating user data ${error}` });
  }
};
