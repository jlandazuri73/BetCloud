import { useState } from "react";
import Modal from "./modal";

export default function ItemPronostico() {
    const [showModal, setshowModal] = useState(false);
  function handleClic() {
    setshowModal(true);
  }

  return (
    <>
      <div
        className="pronostico w-full h-24 cursor-pointer rounded mb-7"
        onClick={() => {
          handleClic();
        }}
      >
        <div className="header-pronostico rounded flex justify-between items-center">
          <div className="h-full flex items-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAG1BMVEUAkkbOKzf///8Ajj18wZnw+fX88/TjjJHMHix9qaStAAABAElEQVR4nO3QRwEAIAwEsDKLf8WouF8iIVUxa5+ZcvuNmFyJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEye5kw8x5tcsm2OWvgAAAABJRU5ErkJggg=="
              alt=""
            />
            <p className="ml-2 text-sm">
              <strong>SERIE A</strong>
            </p>
          </div>
          <div className="bg-white mr-1 text-sm text-black rounded px-2 flex items-center justify-between">
            <i className="fa-solid fa-clock"></i>
            <p className="ml-2">16: 00</p>
          </div>
        </div>
        <div className="body-pronostico relative text-center rounded flex justify-between items-center w-full">
          <div className="h-full w-2/4 justify-center items-center flex">
            <h4 className="font-bold">Inter</h4>
          </div>
          <div className="flex">
            <h4 className="px-1 text-orange-500 font-semibold">5</h4>
            <div className="px-1 text-sm">
              {/*Esperar <i className="fa-regular fa-clock text-yellow-300"></i>*/}
              {/*Ganada <i className="fa-solid fa-square-check text-green-300"></i>*/}
              <i className="fa-solid fa-circle-xmark text-red-500"></i>
            </div>
            <h4 className="px-1 text-orange-500 font-semibold">1</h4>
          </div>
          <div className="h-full w-2/4 justify-center items-center flex">
            <h4 className="font-bold">AC Milan</h4>
          </div>
          <div
            className="w-3/5 h-8 absolute flex justify-center -bottom-4 rounded"
            style={{ left: "20%" }}
          >
            <div className="w-auto px-2 text-sm h-full flex items-center justify-center text-black font-semibold bg-yellow-600 rounded">
              Inter Or Draw 1x
            </div>
            <div className="w-auto flex items-center justify-center rounded px-2 bg-green-500 h-full">
              1.35
            </div>
          </div>
        </div>
      </div>


      <Modal show={showModal} setShow={setshowModal} title={"d"}>
        
      </Modal>
    </>
  );
}
