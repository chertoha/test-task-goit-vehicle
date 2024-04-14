// import Chip from "components/UIKit/Chip";
// import Modal from "components/UIKit/Modal";
// import { useModal } from "hooks/useModal";

const Catalog = () => {
  // const { open, isOpen, close } = useModal();

  return (
    <>
      <div className="container-default outline outline-fuchsia-400">
        <div className="flex items-start gap-x-16 h-[600px]">
          <aside className="outline outline-green-700 w-[360px]">
            Filter
            {/* <button onClick={open}>CLICK</button> */}
          </aside>

          <div className="outline outline-cyan-700 w-full ">
            {/* <Chip
              iconKey="adults"
              title="adults"
              value={2}
            /> */}

            {/* <button className="button-primary w-[170px]">Search</button>
            <br />
            <button className="button-secondary w-[145px]">Load more</button> */}
          </div>
        </div>
      </div>

      {/* <Modal
        close={close}
        isOpen={isOpen}
      >
        <div className="text-3xl overflow-y-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          qui esse ratione aperiam consectetur reprehenderit ipsa ipsum eius
          obcaecati rem maiores expedita reiciendis unde cumque, consequuntur,
        </div>
      </Modal> */}
    </>
  );
};

export default Catalog;
