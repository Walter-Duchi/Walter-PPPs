"use client";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { InputFile } from "../littleComponets/InputFile";
import {
  HiChatBubbleOvalLeftEllipsis,
  HiEnvelope,
  HiOutlinePencil,
  HiUser,
} from "react-icons/hi2";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const initialErrors = {
  name: "",
  email: "",
  review: "",
  image: "",
};

export const ReviewCard = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<any>(initialErrors);
  const { toast } = useToast();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      setErrors({});

      const formData = new FormData();
      formData.append("image", image as File);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("review", data.review);
      const res = await fetch(`/api/reviews`, {
        method: "POST",

        body: formData,
      });
      const response = await res.json();
      if (!res.ok) {
        setErrors(response.errors ? response.errors : initialErrors); ;
         toast({
          title: "Error",
          description: response.message,
          className: "bg-danger text-white",
          variant: "error",
        });
        return;
      }
      toast({
        title: "Éxito",
        description: response.message,
        variant: "success",
      });
      return;
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Ha ocurrido un error",
        variant: "destructive",
      });
    } finally{
      setIsLoading(false);
    }
  };
  return (
    <>
      <Card className="rounded-2xl">
        <CardBody className="grid md:grid-cols-2 gap-10 p-8">
          <section className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-primary">
              ¿Deseas dejar una opinión sobre nuestros servicios?
            </h2>
            <p className="text-default-600 text-sm font-serif">
              Ayúdanos a mejorar nuestros servicios, tu opinión es muy
              importante para nosotros.
            </p>
          </section>
          <section className="flex items-center justify-center gap-3">
            {/* <Input
              placeholder="Ingresa tu correo electrónico"
              size="lg"
              type="email"
              color="primary"
              className="grow"
              {...register("email")}
            /> */}
            <Button endContent={
              <HiOutlinePencil />
            } fullWidth variant="flat" onPress={onOpen} size="lg" className="font-serif" color="primary">
              Escribir opinión
            </Button>
          </section>
        </CardBody>
      </Card>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>
            <h2 className="text-2xl font-serif font-bold text-primary">Deja tu opinión</h2>
          </ModalHeader>
          <ModalBody className="flex flex-row  gap-5">
            <InputFile onChange={handleImageChange}>
              <Avatar
                src={image ? URL.createObjectURL(image) : ""}
                color="warning"
                className="w-32 h-32"
                isBordered
              />
              {errors  && (
                <p className="text-xs text-danger mt-1">{
                  errors.image
                  }</p>
              )}
            </InputFile>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 grow font-serif"> {/*Formulario para enviar la opinion*/}
              <fieldset>
                <Input
                  placeholder="Ingresa tu nombre"
                  variant="bordered"
                  color="primary"
                  errorMessage={errors.name && errors.name}
                  isInvalid={errors.name ? true : false}
                  startContent={<HiUser className="text-default-500" />}
                  {...register("name")}
                />
              </fieldset>
              <fieldset>
                <Input
                  color="primary"
                  placeholder="Ingresa tu correo electrónico"
                  type="email"
                  variant="bordered"
                  className="grow"
                  errorMessage={errors && errors.email}
                  isInvalid={errors.email ? true : false}	
                  startContent={<HiEnvelope className="text-default-500" />}
                  {...register("email")}
                />
              </fieldset>
              <fieldset>
                <Textarea
                  placeholder="Escribe tu opinión"
                  color="primary"
                  variant="bordered"
                  errorMessage={errors && errors.review}
                  isInvalid={errors.review ? true : false}

                  startContent={
                    <HiChatBubbleOvalLeftEllipsis className="text-default-500" />
                  }
                  {...register("review")}
                />
              </fieldset>
              <Button isLoading={isLoading} fullWidth type="submit" color="primary">
                Enviar
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
