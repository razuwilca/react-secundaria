import React from "react";
import Card from "./Card";
import "./cards.css";

const imagenes = {
  img1: "/vite.svg",
  img2: "/src/assets/cs.jpg",
  img3: "/src/assets/edufisica.jpg",
  img4: "/src/assets/lengua.jpg",
  img5: "/src/assets/lenguajnative.jpg",
};

const linkDrive = {
  primero:
    "https://drive.google.com/drive/folders/1gD4d8RmhrSnrXtTgnUTplWzCntP_W5tK?usp=sharing",
  segundo:
    "https://drive.google.com/drive/folders/1BiL2aN1wJD4Itj27mdMRCXNNzK3Y6SF6?usp=sharing",
  tercero:
    "https://drive.google.com/drive/folders/1y70yKIRNcE5-otLJy17yxPRliaaXLJuX?usp=sharing",
  cuarto:
    "https://drive.google.com/drive/folders/1Esl_2Xqi8OA5y34csLRUfS45-PW9r6bx?usp=sharing",
  quinto:
    "https://drive.google.com/drive/folders/1zjIno3ijangOBt7DKdEV-l9310vD7sSo?usp=sharing",
};

const title = {
  primero: "1° grado de secundaria",
  segundo: "2° grado de secundaria",
  tercero: "3° grado de secundaria",
  cuarto: "4° grado de secundaria",
  quinto: "5° grado de secundaria",
};

const Cards = () => {
  return (
    <div className="container  justify-content-center align-items-center main">
      <div className="row">
        <div className="col-md-4 alto">
          <Card
            img={imagenes.img1}
            drive={linkDrive.primero}
            title={title.primero}
          ></Card>
        </div>
        <div className="col-md-4 alto">
          <Card
            img={imagenes.img2}
            drive={linkDrive.segundo}
            title={title.segundo}
          ></Card>
        </div>
        <div className="col-md-4 alto">
          <Card
            img={imagenes.img3}
            drive={linkDrive.tercero}
            title={title.tercero}
          ></Card>
        </div>
        <div className="col-md-4 alto">
          <Card
            img={imagenes.img4}
            drive={linkDrive.cuarto}
            title={title.cuarto}
          ></Card>
        </div>
        <div className="col-md-4 alto">
          <Card
            img={imagenes.img5}
            drive={linkDrive.quinto}
            title={title.quinto}
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
