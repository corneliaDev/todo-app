import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { ToDoItem } from "../lib/types";
import { persist } from "zustand/middleware";

type ToDoState = {
  items: ToDoItem[];
  listItems: ToDoItem[];
  darkMode: boolean;
  setDarkMode: () => void;
  setListItems: (items: ToDoItem[]) => void;
  addItem: (newItemText: string) => void;
  completeItem: (id: number) => void;
  deleteItem: (id: number) => void;
  removeCompletedItems: () => void;
};

export const usetodoAppStore = create<ToDoState>()(
  persist(
    (set) => ({
      items: initialItems,
      listItems: [],
      darkMode: false,
      setDarkMode: () => {
        set((state) => ({ darkMode: !state.darkMode }));
      },
      setListItems: (sortedItems) => {
        set(() => ({ listItems: sortedItems }));
      },
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          text: newItemText,
          isCompleted: false,
        };
        set((state) => ({
          listItems: [...state.listItems, newItem],
          items: [...state.items, newItem],
        }));
      },
      completeItem: (id: number) => {
        set((state) => {
          const newItems = state.items.map((item) =>
            item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
          );
          return { listItems: newItems, items: newItems };
        });
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { listItems: newItems, items: newItems };
        });
      },
      removeCompletedItems: () => {
        set((state) => {
          const newItems = state.items.filter((item) => !item.isCompleted);
          return { listItems: newItems };
        });
      },
    }),
    {
      name: "items-storage",
    }
  )
);
