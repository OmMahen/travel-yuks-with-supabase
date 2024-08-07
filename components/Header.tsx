"use client";
import { Navbar } from "flowbite-react";
import AuthButton from "./AuthButtonClient";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  if (pathname === "/login") return <></>;
  return (
    <Navbar rounded>
      <div className="flex">
        <Navbar.Toggle />
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl sm:text-2xl font-bold text-green-600">
            Budget Buddy
          </span>
        </Navbar.Brand>
      </div>

      <div className="flex items-center md:order-2">
        <AuthButton />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        <Navbar.Link href="/transactions">Transactions</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
