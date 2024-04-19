import { useWindowSize } from "hooks/useWindowSize";
import { FC, ReactNode, createContext, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

interface ITogglerProps {
  children: ReactNode;
  title: string;
}

export const TogglerContext = createContext<() => void>(() => {});

const Toggler: FC<ITogglerProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isDesktop } = useWindowSize();

  const toggle = () => setIsOpen(p => !p);
  const close = () => setIsOpen(false);

  return !isDesktop ? (
    <div className="relative">
      <div className="heading-2 flex gap-x-2 items-center">
        {title}
        <button
          type="button"
          className=""
          onClick={toggle}
        >
          {isOpen ? <GoChevronUp size={28} /> : <GoChevronDown size={28} />}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } border-2 border-dark w-full rounded-xl absolute bg-white p-4 `}
      >
        <TogglerContext.Provider value={close}>{children}</TogglerContext.Provider>
      </div>
    </div>
  ) : (
    <div className="">{children}</div>
  );
};
export default Toggler;
