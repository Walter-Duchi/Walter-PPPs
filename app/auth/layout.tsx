import { Card, CardBody } from "@nextui-org/react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticación",
  description: "Autenticación de usuarios",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Card>
        <CardBody className="">
          {children}
          <section></section>
        </CardBody>
      </Card>
    </div>
  );
}
