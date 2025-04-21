import { Button } from "@nextui-org/react"
import { HiBell } from "react-icons/hi2"

export const NotificationButton = () => {
  return (
    <Button className="text-default-500" isIconOnly variant="light">
      <HiBell />
    </Button>
  )
}
