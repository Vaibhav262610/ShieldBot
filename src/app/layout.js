import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "ShieldBot- Think Like an Attacker",
  description: "ShieldBot simulates real-world DDoS attacks to test your website's resilience and identify vulnerabilities. Stay ahead of cyber threats by stress-testing your security before hackers do! 🚀🛡️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <title>ShieldBot- Think Like an Attacker</title> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
