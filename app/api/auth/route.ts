import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";



const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "209095285842-ib1t06jjnl9nbnp868adf1rlllosehf8.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
}); 

export { handler as GET, handler as POST };

