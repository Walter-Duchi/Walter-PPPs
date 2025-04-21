import { Button } from "@nextui-org/react";

export const SocialButton = (
  {children}: {children: React.ReactNode}
) => {
  return (
    <Button
      isIconOnly
      radius="full"
      variant="light"
      size="sm"
      className="text-white text-lg"
    >
      {children}
    </Button>
  );
};
