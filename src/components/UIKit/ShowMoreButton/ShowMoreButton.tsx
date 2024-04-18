import { useModal } from "hooks/useModal";
import { FC } from "react";
import Modal from "../Modal";
import VehicleInfo from "components/VehicleInfo";
import { Vehicle } from "types/entities";
import VehicleDataProvider from "components/VehicleDataProvider";

interface IShowMoreButtonProps {
  title: string;
  vehicle: Vehicle;
}

const ShowMoreButton: FC<IShowMoreButtonProps> = ({ title, vehicle }) => {
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
        <VehicleDataProvider data={vehicle}>
          <VehicleInfo />
          {/* <VehicleInfo data={vehicle} /> */}
        </VehicleDataProvider>
      </Modal>
    </>
  );
};

export default ShowMoreButton;
