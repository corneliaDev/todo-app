import { useEffect, useState } from "react";
import { usetodoAppStore } from "../stores/todoAppStore";
import { ToDoItem } from "../lib/types";

export default function useReorderItems() {
  const toDoItems = usetodoAppStore((state) => state.listItems);

  const initialItems = usetodoAppStore((state) => state.items);

  // state for framer-motion Reorder component
  const [listItems, setListItems] = useState<ToDoItem[]>([]);

  useEffect(() => {
    if (toDoItems.length === 0) setListItems(initialItems);
    else setListItems(toDoItems);
  }, [initialItems, toDoItems]);

  console.log(listItems);
  return { listItems, setListItems };
}
