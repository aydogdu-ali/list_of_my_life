import React from "react";
import Bebek from "../assets/bebek.png";
import Older from "../assets/adault.jpg";
import İlkbahar from "../assets/ilkbahar.jpg";
import Kis from "../assets/kis.jpg";
import Sonbahar from "../assets/sonbahar.jpg";
import Yaz from "../assets/yaz.jpg";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <img src={Bebek} alt="Bebek" width="50px" />
        </div>
        <div className="col-1 d-flex justify-content-center ">
          <div className="bg-primary w-25 h-100"> </div>
          <div className="bg-success w-25 h-100"> </div>
        </div>
        <div className="col-1">
          <img src={İlkbahar} alt="Bebek" width="50px" />
        </div>
        <div className="col-2">
          <img src={Yaz} alt="Bebek" width="50px" />
        </div>
        <div className="col-2">
          <img src={Sonbahar} alt="Bebek" width="50px" />
        </div>
        <div className="col-1">
          <img src={Kis} alt="Bebek" width="50px" />
        </div>
        <div className="col-1 d-flex ">
          <div className="bg-primary w-25 h-100"> </div>
          <div className="bg-primary w-25 h-100"> </div>
        </div>
        <div className="col-2">
          <img src={Older} alt="Bebek" width="50px" />
        </div>
      </div>
    </div>
  );
};

export default Header;
