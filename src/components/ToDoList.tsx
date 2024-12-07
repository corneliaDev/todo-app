// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ToDoListItem from "./ToDoListItem";
import { ToDoItem } from "../lib/types";
import { Reorder } from "framer-motion";

import useReorderItems from "../hooks/useReorderItems";

export default function ToDoList() {
  const { listItems, setListItems } = useReorderItems();

  return (
    <ul className="first:rounded-t-[0.3125rem] overflow-hidden">
      <Reorder.Group axis="y" onReorder={setListItems} values={listItems}>
        {listItems.map((item: ToDoItem) => (
          <ToDoListItem key={`${item.id}`} item={item} />
        ))}
      </Reorder.Group>
    </ul>
  );
}
console.log(<ToDoList />);
