import {
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export const FunctionCard = ({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card shadow="none" className="bg-default-100 space-y-10 p-2">
      <CardHeader className=" flex justify-between items-center">
        <Button disabled size="lg" isIconOnly color="primary" variant="flat">
          {icon}
        </Button>
        <Button
          as={Link}
          href={href}
          isIconOnly
          radius="full"
          className="text-white"
          variant="light"
        >
          <HiMiniArrowUpRight className="text-default-600" size={25} />
        </Button>
      </CardHeader>
      <CardBody>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-default-500 ">{description}</p>
      </CardBody>
    </Card>
  );
};
