import { useModal } from "hooks/useModal";
import { FC } from "react";
import Modal from "../Modal";
import VehicleInfo from "components/VehicleInfo";

interface IShowMoreButtonProps {
  title: string;
}

const ShowMoreButton: FC<IShowMoreButtonProps> = ({ title }) => {
  const { open, isOpen, close } = useModal();

  return (
    <>
      <button
        type="button"
        className="button-primary w-full"
        onClick={open}
      >
        {title}
      </button>

      <Modal
        close={close}
        isOpen={isOpen}
      >
        <VehicleInfo />
      </Modal>
    </>
  );
};

export default ShowMoreButton;
