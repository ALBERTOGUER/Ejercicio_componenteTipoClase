import React from "react";

function ContactCard(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.info.imgUrl} alt="Not found" />
      <div className="card-body">
        <h2 className="card-title">{props.info.name}</h2>
        <p className="card-text">Telefono: {props.info.phone}</p>
        <p className="card-text">Email: {props.info.email}</p>
      </div>
    </div>
  );
}

export default ContactCard;
