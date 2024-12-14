import type { Metadata } from "next";
import "./globals.css";
import "./css/main.css";

export const metadata: Metadata = {
  title: "Demo App",
  description: "Prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        {children}
      </body>
    </html>
  );
}
