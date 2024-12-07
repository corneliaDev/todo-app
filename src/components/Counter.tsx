import { usetodoAppStore } from "../stores/todoAppStore";

export default function Counter() {
  const numberofActiveItems = usetodoAppStore(
    (state) => state.items.filter((item) => !item.isCompleted).length
  );

  return <p className="font-normal ">{numberofActiveItems} items left</p>;
}
