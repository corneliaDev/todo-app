import Logo from "./ScreenMode";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-xl medium:text-[2.5rem] font-bold font-josefin text-white uppercase tracking-[0.9375rem]">
        ToDo
      </h1>
      <Logo />
    </header>
  );
}
