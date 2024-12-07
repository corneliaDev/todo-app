import { useMotionValue, Reorder } from "framer-motion";
import { ToDoItem } from "../lib/types";
import clsx from "clsx";
import { usetodoAppStore } from "../stores/todoAppStore";

type ToDoListItemProps = {
  item: ToDoItem;
};

export default function ToDoListItem({ item }: ToDoListItemProps) {
  const completeItem = usetodoAppStore((state) => state.completeItem);
  const deleteItem = usetodoAppStore((state) => state.deleteItem);

  const y = useMotionValue(0);

  return (
    <Reorder.Item value={item} id={`${item.id}`} style={{ y }}>
      <div
        id={`${item.id}`}
        className="w-full h-[3.9375rem] pl-6  text-lTVeryDarkGrayishBlue dark:text-dmC8CBE7 bg-white  border-b border-lTLightGrayishBlue dark:bg-dm25273D dark:border-dm393A4B flex items-center hover:cursor-pointer group transition-all"
      >
        <div className="group-hover:bg-gradient-to-br group-hover:from-bgGradientBlue group-hover:to-bgGradientPink rounded-full">
          <button
            onClick={() => completeItem(item.id)}
            className={clsx(
              "h-6 w-6 rounded-full border border-lTLightGrayishBlue dark:border-dm393A4B flex flex-col items-center justify-center group-hover:bg-white  group-hover:dark:bg-dm25273D group-hover:scale-90",
              {
                "bg-gradient-to-br from-bgGradientBlue to-bgGradientPink":
                  item.isCompleted,
              }
            )}
          >
            <img
              src="/images/icon-check.svg"
              alt="Check icon"
              className={clsx("w-3 h-3 ", {
                hidden: !item.isCompleted,
              })}
            />
          </button>
        </div>
        <div
          className={clsx("ml-4", {
            "line-through text-lTLightGrayishBlue dark:text-dm5B5E7E":
              item.isCompleted,
          })}
        >
          {item.text}
        </div>
        <button
          onClick={() => deleteItem(item.id)}
          className="ml-auto pr-4 invisible group-hover:visible text-lTVeryDarkGrayishBlue"
        >
          <img
            className="w-[1.0625rem] h-[1.0625rem]"
            src="/images/icon-cross.svg"
            alt="Cross icon"
          />
        </button>
      </div>
    </Reorder.Item>
  );
}

// group-hover:[border-image:linear-gradient(to_top_right,#f6b73c,#4d9f0c)_1]
