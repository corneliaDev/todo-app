import { usetodoAppStore } from "../stores/todoAppStore";

export default function BackgroundHeading() {
  const darkMode = usetodoAppStore((state) => state.darkMode);
  return (
    <div className="h-[12.5rem] w-full medium:h-[18.75rem] absolute top-0 left-0 medium:max-w-[90rem]  large:left-[50%] large:-translate-x-1/2">
      <img
        className="w-full h-full object-cover"
        src={
          darkMode
            ? "/images/bg-desktop-dark.jpg"
            : "/images/bg-desktop-light.jpg"
        }
        alt="Background pattern light theme"
      />
    </div>
  );
}
