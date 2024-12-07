import { usetodoAppStore } from "../stores/todoAppStore";
import SortingButton from "./SortingButton";

export default function SortingGroup() {
  const items = usetodoAppStore((state) => state.items);
  const setListItems = usetodoAppStore((state) => state.setListItems);

  const filterActiveItems = () => {
    const newItems = items.filter((item) => !item.isCompleted);
    setListItems(newItems);
  };

  const filterCompletedItems = () => {
    const newItems = items.filter((item) => item.isCompleted);
    setListItems(newItems);
  };

  const showAllItems = () => {
    setListItems(items);
  };

  const filterItemsButtons = [
    { text: "All", onClick: () => showAllItems() },
    { text: "Active", onClick: () => filterActiveItems() },
    { text: "Completed", onClick: () => filterCompletedItems() },
  ];

  return (
    <div className="h-12 text-sm  bg-white rounded-[0.3125rem] flex justify-center gap-2 text-lTDarkGrayishBlue dark:text-dm5B5E7E dark:bg-dm25273D">
      {filterItemsButtons.map((button) => (
        <SortingButton
          key={button.text + button.onClick.toString()}
          onClick={button.onClick}
          text={button.text}
        >
          {button.text}
        </SortingButton>
      ))}
    </div>
  );
}
