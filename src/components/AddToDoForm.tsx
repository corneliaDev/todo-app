import { useRef, useState } from "react";
import { usetodoAppStore } from "../stores/todoAppStore";

export default function AddToDoForm() {
  const [todoText, setTodoText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const addToDo = usetodoAppStore((state) => state.addItem);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoText) {
      alert("Please enter a todo item");
      inputRef.current?.focus();
    }
    addToDo(todoText);
    setTodoText("");
  };

  return (
    <form
      className="relative mt-6 medium:mt-8 dark:shadow-xl"
      onSubmit={handleSubmit}
    >
      <span className="h-6 w-6 rounded-full border border-lTLightGrayishBlue dark:border-dm393A4B absolute top-4 left-6 translate-y-0.5"></span>
      <label htmlFor="todo-input">
        <input
          className="h-12 medium:h-[3.875rem] w-full pl-16 border dark:bg-dm25273D border-lTLightGrayishBlue rounded-[0.3125rem] text-lTVeryDarkGrayishBlue dark:text-lTLightGrayishBlue placeholder:text-lTDarkGrayishBlue dark:border-dm393A4B dark:placeholder:text-dm767992 dark:focus:placeholder:text-white placeholder:-tracking-[0.010rem] placeholder:medium:-tracking-[0.015rem] outline-0 focus:placeholder:text-lTVeryDarkGrayishBlue"
          id="todo-input"
          placeholder="Create a new todo.."
          autoFocus
          ref={inputRef}
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </label>
    </form>
  );
}
