import { usetodoAppStore } from "../stores/todoAppStore";

export default function ClearCompletedItemsButton() {
  const removeCompletedItems = usetodoAppStore(
    (state) => state.removeCompletedItems
  );
  return (
    <button
      className="  hover:text-lTVeryDarkGrayishBlue dark:hover:text-lTVeryLightGrayishBlue"
      onClick={() => removeCompletedItems()}
    >
      Clear Completed
    </button>
  );
}
