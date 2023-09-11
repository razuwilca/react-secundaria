import React from "react";

const Card = (props) => {
  return (
    <div className="card ca">
      <img src={props.img} alt="" />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <div className="card-text text-secondary">
          <div>paso 1: Haga click en el el boton ir al examen.</div>
          <div>
            paso 2:
            {props.title === "3° grado de secundaria"
              ? "Haga click en el examen de Lectura"
              : "Haga click en el examen de matematica, primer archivo."}
          </div>
          <div>
            paso 3: Despues de terminar con el examen de matematicas haga click
            atras en el navegador web luego haga click en el examen de Lectura.
          </div>
        </div>
        <a
          href={props.drive}
          className="btn btn-outline-warning"
          target="_blank"
        >
          {"IR AL EXAMEN ->"}
        </a>
      </div>
    </div>
  );
};

export default Card;
