import { useEffect, useState } from "react";

export const useModal = (): {
  isOpen: boolean;
  open: () => void;
  close: () => void;
} => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return { isOpen, open, close };
};
