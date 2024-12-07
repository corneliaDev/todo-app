// import { useState } from "react";

import { usetodoAppStore } from "../stores/todoAppStore";

export default function ScreenMode() {
  const setDarkMode = usetodoAppStore((state) => state.setDarkMode);
  const darkMode = usetodoAppStore((state) => state.darkMode);

  const toggleScreenMode = () => {
    setDarkMode();
    document.body.classList.toggle("dark");
  };
  return (
    <button onClick={toggleScreenMode} className="">
      {!darkMode ? (
        <img
          src="/images/icon-moon.svg"
          alt="light mode icon"
          className="logo__img w-5 h-[1.2075rem] medium:w-10 medium:h-[2.415rem] "
        />
      ) : (
        <img
          src="/images/icon-sun.svg"
          alt="dark mode icon"
          className="logo__img w-5 h-5 medium:w-[1.625rem] medium:h-[1.625rem]"
        />
      )}
    </button>
  );
}
