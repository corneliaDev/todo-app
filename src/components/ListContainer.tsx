import ControlBar from "./ControlBar";
import ToDoList from "./ToDoList";
import SortingGroupGroup from "./SortingGroup";
import { useWindowSize } from "usehooks-ts";

export default function ToDoListContainer() {
  const { width = 0 } = useWindowSize();
  return (
    <>
      <main className="shadow-2xl">
        <ToDoList />
        <ControlBar />
      </main>
      <div>{width < 375 && <SortingGroupGroup />}</div>
    </>
  );
}
