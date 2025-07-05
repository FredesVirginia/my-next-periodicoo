import React from "react";

export const CruzGrande = () => {
  return <div className=" w-14 h-14 text-3xl flex items-center justify-center rotate-45 ">X</div>;
};

export const Fondo = () => {
  return (
    <div
      style={{ backgroundColor: "#757bb7" }}
      className="absolute top-0 left-0 w-full h-full z-0"
    >
      {/* Tu contenido decorativo */}
      <div className="absolute -top-50 -right-20 text-yellow-300">
        <p style={{ fontSize: "390px" }} className="font-bold x-description">
          x
        </p>
      </div>

      <div className="w-96 h-96 absolute bottom-0 -left-40 bg-sky-300 rounded-full flex justify-center items-center">
        <div
          style={{ backgroundColor: "#757bb7" }}
          className="w-56 h-56 rounded-full"
        ></div>
      </div>
    </div>
  );
};



export const CruzChica = () => {
  return <div className=" w-14 h-14 text-3xl flex items-center justify-center rotate-45">X</div>;
};
export const Circulo = () => {
  return (
    <div className="w-8 h-8 bg-yellow-300 rounded-full flex justify-center items-center">
      <div className="w-5 h-5 bg-white rounded-full"></div>
    </div>
  );
};
export const Mas = () => {
  return (
    <div className=" w-14 h-14 text-3xl flex items-center justify-center  text-sky-500 ">
      <p className="text-sky-500 font-bold text-5xl">+</p>
    </div>
  );
};
