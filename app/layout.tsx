import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Header from "@/components/Header";
import { UserProvider } from "@/utils/userContext";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Budget Buddy",
  description: "Stay on Budget, Every Transaction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <UserProvider>
        <body className="bg-background text-foreground">
          <Flowbite>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-black text-black dark:text-white">
              {children}
            </main>
            <DarkThemeToggle className="fixed bottom-0 right-0 z-50 m-4 scale-130 " />
          </Flowbite>
        </body>
      </UserProvider>
    </html>
  );
}
