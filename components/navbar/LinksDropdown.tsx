import { navLink } from "@/types";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";

export const LinksDropdown = ({
  items,
  label,
}: {
  items: navLink[];
  label: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Dropdown onOpenChange={onOpenChange} showArrow>
      <DropdownTrigger>
        <Button
          color="primary"
          variant="light"
          size="lg"
          endContent={
            <HiOutlineChevronDown
              size={14}
              className={`transition-transform ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          }
          className="text-lg font-medium"
        >
          {label}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="ACME features"
        variant="flat"
        color="primary"
        classNames={{
          list: "grid grid-cols-2 gap-2 p-2",
        }}
        itemClasses={{
          base: "gap-4",
        }}
        items={items}
      >
        {(item) => (
          <DropdownItem
            className="w-60"
            description={item.description}
            key={item.href}
            href={item.href}
          >
            {item.title}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
