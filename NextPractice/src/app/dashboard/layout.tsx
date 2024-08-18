import DisabledButton from "@/components/DisabledButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "dummy app for practice by next at Dashboard",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DisabledButton />
      <h1>Hi next layout at route level</h1>
      {children}
    </>
  );
}
