"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  return (
    <div>
      <Button
        onClick={async () => {
          await signIn("google", { callbackUrl: `/` });
        }}
      >
        <FcGoogle size={24} />
        Entrar com Google
      </Button>
    </div>
  );
}
