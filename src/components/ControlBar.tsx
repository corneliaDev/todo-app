import SortingGroup from "./SortingGroup";
import ClearCompletedItemsButton from "./ClearCompletedItemsButton";
import { useWindowSize } from "usehooks-ts";

import Counter from "./Counter";

export default function ControlBar() {
  const { width = 0 } = useWindowSize();
  return (
    <>
      <div className="h-12 text-sm flex justify-between items-center px-4 -tracking-[0.012rem] text-lTDarkGrayishBlue dark:text-dm5B5E7E bg-white dark:bg-dm25273D border-b border-lTLightGrayishBlue dark:border-dm393A4B rounded-b-[0.3125rem] overflow-hidden">
        <Counter />
        {width > 375 && <SortingGroup />}
        <ClearCompletedItemsButton />
      </div>
    </>
  );
}
