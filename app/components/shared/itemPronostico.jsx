export default function ItemPronostico({ data = {}, onClick }) {
  const isInProgress = data?.status_prediction == "IN PROGRESS";

  return (
    <>
      <div
        onClick={onClick}
        className={`pronostico w-full h-24 ${
          onClick && "cursor-pointer"
        } rounded mb-7`}
      >
        <div className="header-pronostico rounded text-white flex justify-between items-center">
          <div className="h-full flex items-center">
            <img
              src={
                data?.ligue_img ||
                "https://static.vecteezy.com/system/resources/previews/022/118/972/original/white-flag-free-png.png"
              }
            />
            <p className="p-c ml-2 text-xs">
              <strong className="uppercase">{data?.ligue || ""}</strong>
            </p>
          </div>
          <div className="bg-white mr-1 text-sm text-black rounded px-2 flex items-center justify-between">
            <i className="fa-solid fa-clock"></i>
            <p className="ml-2">{data?.hour || ""}</p>
          </div>
        </div>
        <div className="body-pronostico relative text-center rounded flex justify-between items-center w-full">
          <div className="h-full w-2/4 justify-center items-center flex">
            <h5 className="h-c font-bold text-white">{data?.team_local || ""}</h5>
          </div>
          <div className="flex text-md">
            <h4 className="px-1 text-orange-500 font-semibold">
              {!isInProgress && data?.gols_local}
            </h4>
            <div className="px-1 text-md">
              {isInProgress ? (
                <i className="fa-regular fa-clock text-yellow-300"></i>
              ) : data?.status_prediction == "WON" ? (
                <i className="fa-solid fa-square-check text-green-300"></i>
              ) : (
                <i className="fa-solid fa-circle-xmark text-red-500"></i>
              )}
            </div>
            <h5 className="px-1 text-orange-500 font-semibold">
              {!isInProgress && data?.gols_visiting}
            </h5>
          </div>
          <div className="h-full w-2/4 justify-center items-center flex">
            <h5 className="h-c font-bold text-white">
              {data?.team_visiting || ""}
            </h5>
          </div>
          <div
            className="w-4/5 h-8 absolute flex justify-center items-center -bottom-4 rounded"
            style={{ left: "10%" }}
          >
            <div className="kdjn p-c w-auto py-2 px-2 text-sm h-full flex items-center text-black font-semibold bg-yellow-600 rounded">
              {data?.prediction || ""}
            </div>
            <div className="w-auto text-white flex items-center justify-center rounded px-2 bg-green-500 h-full">
              {data?.odds || ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
