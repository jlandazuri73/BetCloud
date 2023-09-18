import { useState } from "react";
import ItemPronostico from "../shared/itemPronostico";
import Modal from "../shared/modal";

export default function Home() {
  const [showModal, setshowModal] = useState(false);
  const handleClick = () => {
    setshowModal(true);
  };
  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{ flexDirection: "column" }}
      >
        <ItemPronostico onClick={handleClick} />
      </div>

      <Modal show={showModal} setShow={setshowModal} title={"Example"}>
        Hola
      </Modal>
    </>
  );
}
