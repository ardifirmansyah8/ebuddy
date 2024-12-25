"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import Card from "@/components/Card";
import Container from "@/components/Container";
import UserEdit from "@/components/UserEdit";
import UserDetail from "@/components/UserDetail";
import { RootState } from "@/store/store";

export default function Home() {
  const router = useRouter();
  const { idToken } = useSelector((state: RootState) => state.login);
  const { isEdit } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!idToken) {
      router.push("/login");
    }
  }, [idToken, router]);

  return (
    <Container>
      <Card>{!isEdit ? <UserDetail /> : <UserEdit />}</Card>
    </Container>
  );
}
