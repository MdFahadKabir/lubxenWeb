import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LUBXEN",
  description: "OXYGEN FOR ENGINE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ClientWrapper>{children}</ClientWrapper>
        </Suspense>
      </body>
    </html>
  );
}
