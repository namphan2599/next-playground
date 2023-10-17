'use client'

import { getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";



export default function ProtectedPage() {

  const session = getServerSession({
    providers: [
      GoogleProvider({
        clientId:
          "209095285842-ib1t06jjnl9nbnp868adf1rlllosehf8.apps.googleusercontent.com",
        clientSecret: "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",
      }),
    ],
  });

  return (
    <div>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}