import { FC, MouseEvent, ReactNode, useEffect, useRef } from "react";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import { createPortal } from "react-dom";

interface IModalProps {
  close: () => void;
  isOpen: boolean;
  children: ReactNode;
}

const Modal: FC<IModalProps> = ({ children, close, isOpen }) => {
  const portalRef = useRef<HTMLElement | null>(
    document.getElementById("portal")
  );

  useEffect(() => {
    const onEscButtonClose = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", onEscButtonClose);

    return () => {
      window.removeEventListener("keydown", onEscButtonClose);
    };
  }, [close]);

  const onBackdropClickClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    isOpen &&
    portalRef.current &&
    createPortal(
      <div
        className="fixed left-0 top-0 z-[100] h-full w-full bg-black/40 "
        onClick={onBackdropClickClose}
      >
        <div className="absolute left-1/2 top-10 flex -translate-x-1/2 xl:w-[982px] rounded-[20px]  max-h-[calc(100%-80px)] bg-white p-10">
          <button
            className="absolute right-10 top-10 transition-all duration-300 ease-in-out hover:scale-110"
            onClick={close}
          >
            <CloseIcon
              width={32}
              height={32}
            />
          </button>

          {children}
        </div>
      </div>,
      portalRef.current
    )
  );
};

export default Modal;
