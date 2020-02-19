import React, { Component } from "react";
import contactsData from "./../ContactsData";
import ContactsCard from "./ContactCard";
import AddContact from "./AddContact";

class Directory extends Component {
  state = {
    contacts: [],
    newContactData: {
      name: "",
      phone: "",
      email: "",
      website:""
    }
  };

  addHandler = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          contacts: data
        });
      });
  };

  newHandler = e => {
    e.preventDefault();
    let newContact = this.state.newContactData;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      newContactData: {
        name: "",
        email: "",
        phone: "",
        website:""
      }
    }));
  };

  handleNombre = e => {
    let value = e.target.value;

    this.setState(prevState => ({
      newContactData: {
        ...prevState.newContactData,
        name: value
      }
    }));
  };

  handlecorreo = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      newContactData: {
        ...prevState.newContactData,
        email: value
      }
    }));
  };

  handletelefono = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      newContactData: {
        ...prevState.newContactData,
        phone: value
      }
    }));
  };

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newContactData: {
        ...prevState.newContactData,
        [name]: value
      }
    }));
  };


  handleClearForm = e => {
    e.preventDefault();
    this.setState({
      newContactData: {
        name: "",
        email: "",
        phone: "",
        website : ""
      }
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
          {this.state.contacts.length === 0
            ? "No hay contactos disponibles"
            : cards}
          <AddContact metodo={this.addHandler} name="Agregar Contactos" />
        </div>
        <div className="container mb-5">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-3"
                name="name"
                id=""
                aria-describedby="helpId"
                placeholder="Nombre"
                value={this.state.newContactData.name}
                onChange={this.handleInput}
              />
              <input
                type="text"
                className="form-control mt-3"
                name="email"
                id=""
                aria-describedby="helpId"
                placeholder="Correo"
                value={this.state.newContactData.email}
                onChange={this.handleInput}
              />
              <input
                type="text"
                className="form-control mt-3"
                name="phone"
                id=""
                aria-describedby="helpId"
                placeholder="Telefono"
                value={this.state.newContactData.phone}
                onChange={this.handleInput}
              />
              <input
                type="text"
                className="form-control mt-3"
                name="website"
                id=""
                aria-describedby="helpId"
                placeholder="Website"
                value={this.state.newContactData.website}
                onChange={this.handleInput}
              />
            </div>
            <AddContact metodo={this.newHandler} name="Nuevo contacto" />
            <AddContact
              metodo={this.handleClearForm}
              name="Limpiar formulario"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Directory;
