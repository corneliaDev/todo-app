import { useEffect, useState } from "react";
import { usetodoAppStore } from "../stores/todoAppStore";
import { ToDoItem } from "../lib/types";

export default function useReorderItems() {
  const toDoItems = usetodoAppStore((state) => state.listItems);

  // state for framer-motion Reorder component
  const [listItems, setListItems] = useState<ToDoItem[]>([]);

  useEffect(() => {
    if (!toDoItems) return;
    setListItems(toDoItems);
  }, [toDoItems]);
  return { listItems, setListItems };
}
