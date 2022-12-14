import React from "react";
import Bebek from "../assets/bebek.png";
import Older from "../assets/adault.jpg";
import İlkbahar from "../assets/ilkbahar.jpg";
import Kis from "../assets/kis.jpg";
import Sonbahar from "../assets/sonbahar.jpg";
import Yaz from "../assets/yaz.jpg";
import "./header.css"

const Header = () => {
  return (
    <div className="container-fluid mt-5">
     
      <div className="row">
        <div className="col-2">
          <img src={Bebek} alt="Bebek"  />
        </div>
        <div className="col-1 way   ">
          <div className=" way1 "> </div>
          <div className="way2 "> </div>
        </div>
        <div className="col-1">
          <img src={İlkbahar} alt="Bebek"  />
        </div>
        <div className="col-2">
          <img src={Yaz} alt="Bebek"  />
        </div>
        <div className="col-2">
          <img src={Sonbahar} alt="Bebek" />
        </div>
        <div className="col-1">
          <img src={Kis} alt="Bebek" />
        </div>
        <div className="col-1 way  ">
          <div className="way3"> </div>
          <div className="way4"> </div>
        </div>
        <div className="col-2">
          <img src={Older} alt="Bebek"  />
        </div>
      </div>
      </div>
   
  );
};

export default Header;
