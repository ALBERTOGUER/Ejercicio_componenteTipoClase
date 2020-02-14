import React, { Component } from "react";
import contactsData from "./../ContactsData";
import ContactsCard from "./ContactCard";
import AddContact from "./AddContact";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }
  addHandler = () => {
    this.setState({
      contacts: contactsData
    });
  };
  render() {
    const cards = this.state.contacts.map((contact, idx) => (
      <ContactsCard info={contact} key={idx} />
    ));

    const Agregar = () => {
      console.log("Este botón agregara un contacto al directorio");
    };
    
    return (
      <div>
        <div className="card-columns container mt-5">
          {this.state.contacts.length === 0 ?"No hay contactos disponibles" : cards} 
          <AddContact metodo={this.addHandler} />
          </div>
      </div>
    );
  }
}

export default Directory;
