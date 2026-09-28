import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full bg-secondary bg-[url('/common-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {children}
    </main>
  );
}