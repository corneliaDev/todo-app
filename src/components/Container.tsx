type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-[20.4375rem] medium:w-[33.75rem] mt-[3rem] medium:mt-[4.375rem] z-10 flex flex-col gap-4 medium:gap-6 ">
      {children}
    </div>
  );
}
