import ItemPronostico from "../shared/itemPronostico";
import Modal from "../shared/modal";

export default function Home() {
  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{ flexDirection: "column" }}
      >
        <ItemPronostico  />
      </div>
    </>
  );
}

