"use client";

import { user } from "@/types";
import {

  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect } from "react";

export const ShareholderModal = ({ user }: {user:user}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  useEffect(() => {
    if (user) {
      onOpen();
    }
  }, [user]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Datos del Accionista</ModalHeader>
          <ModalBody>
            <p>
              Nombre:
              {" "}{user?.name} 
            </p>
          
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
