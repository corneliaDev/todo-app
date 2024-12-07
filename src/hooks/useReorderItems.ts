import { useEffect, useState } from "react";
import { usetodoAppStore } from "../stores/todoAppStore";
import { ToDoItem } from "../lib/types";

export default function useReorderItems() {
  const toDoItems = usetodoAppStore((state) => state.listItems);
  const initialItems = usetodoAppStore.getState().items;

  // state for framer-motion Reorder component
  const [listItems, setListItems] = useState<ToDoItem[]>(initialItems);

  useEffect(() => {
    setListItems(initialItems);
    if (!toDoItems) return;
    setListItems(toDoItems);
  }, [initialItems, toDoItems]);
  return { listItems, setListItems };
}
