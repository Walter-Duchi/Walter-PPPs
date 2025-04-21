import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import {
  HiOutlineBriefcase,
  HiOutlineCog,
  HiOutlineDocumentAdd,
  HiOutlineLogout,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import { signOutAction } from "../actions/signOutAction";
import { Session } from "next-auth";

export const UserDropdown = ({ session }: { session: Session }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          as="button"
          className="transition-transform"
          name={session?.user?.name || "user"} 
          src={session?.user?.image || undefined} 
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        className="p-3"
        onAction={(key) => {
          if (key === "logout") {
            signOutAction();
          }
        }}
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-200",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection
          title="Perfil"
          aria-label="Profile & Actions"
          showDivider
        >
          <DropdownItem
            key="profile"
            className="h-14 gap-2 opacity-100"
            href={session?.user ? `/user/${session.user.id}` : "/login"}
            textValue="Perfil"
          >
            <User
              name={session ? session.user?.name : "user"}
              description={session.user?.email}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "sm",
                name: session?.user?.name || "user",
                src: session?.user?.image || undefined,
              }}
            />
          </DropdownItem>

          <DropdownItem
            key="settings"
            startContent={<HiOutlineCog size={20} />}
            href="/user/settings"
          >
            Ajustes
          </DropdownItem>
        </DropdownSection>

        <DropdownSection
          title="Formularios"
          aria-label="Preferences"
          showDivider
        >
          <DropdownItem
            key="prestamos"
            startContent={<HiOutlineBriefcase size={20} />}
          >
            Prestamos
          </DropdownItem>
          <DropdownItem
            key="registro"
            startContent={<HiOutlineDocumentAdd size={20} />}
          >
            Registro
          </DropdownItem>
        </DropdownSection>

        <DropdownSection title="Otros" aria-label="Help & Feedback">
          <DropdownItem
            key="help_and_feedback"
            startContent={<HiOutlineQuestionMarkCircle size={20} />}
          >
            Ayuda y soporte
          </DropdownItem>
          <DropdownItem
            color="danger"
            key="logout"
            className="text-danger"
            startContent={<HiOutlineLogout className="text-danger" size={20} />}
          >
            <p className="text-danger">Cerrar sesión</p>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
