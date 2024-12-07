import clsx from "clsx";

type SortingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  text: string;
};

export default function SortingButton({
  children,
  onClick,
  text,
}: SortingButtonProps) {
  return (
    <button
      className={clsx("font-semibold hover:font-bold active:font-bold", {
        "text-brightBlue": text === "All",
        "text-lightGray hover:text-lTVeryDarkGrayishBlue active: text-lTVeryDarkGrayishBlue dark:hover:text-lTVeryLightGrayishBlue":
          text === "Active" || text === "Completed",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
