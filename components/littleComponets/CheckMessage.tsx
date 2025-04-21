import { HiCheck } from "react-icons/hi";

export const CheckMessage = (
  {children}: {children: React.ReactNode}
) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center text-white">
        <HiCheck size={15} />
      </div>
      <p>{children}</p>
    </div>
  );
};
