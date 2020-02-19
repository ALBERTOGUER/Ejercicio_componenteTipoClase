import React, { Component } from "react";
import contactsData from "./../ContactsData";
import ContactsCard from "./ContactCard";
import AddContact from "./AddContact";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      newContactData: {
        name: "",
        phone: "",
        email: ""
      }
    };

    this.handleNombre = this.handleNombre.bind(this);
    this.handlecorreo = this.handlecorreo.bind(this);
    this.handletelefono = this.handletelefono.bind(this);
    this.newHandler = this.newHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    console.log(this.state.contacts);
    
  }

  addHandler(){
    this.setState({
      contacts: contactsData
    })
  }

  newHandler ( e)  {
    e.preventDefault(); 
    let newContact = this.state.newContactData;
    this.setState( prevState => ({
      contacts: [...prevState.contacts, newContact],
      newContactData : {
        name: "",
        email: "",
        phone: ""
      }

    }));
  };

  handleNombre(e) {
    let value = e.target.value;

    this.setState(prevState => ({
      newContactData: {
        ...prevState.newContactData,
        name: value
      }
    }));
  }

  handlecorreo(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newContactData: {
        ...prevState.newContactData,
        email: value
      }
    }));
  }

  handletelefono(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newContactData: {
        ...prevState.newContactData,
        phone: value
      }
    }));
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newContactData: {
        name: "",
        email: "",
        phone: ""
      }
    });
  }

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
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Nombre"
                value={this.state.newContactData.name}
                onChange={this.handleNombre}
              />
              <input
                type="text"
                className="form-control mt-3"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Correo"
                value={this.state.newContactData.email}
                onChange={this.handlecorreo}
              />
              <input
                type="text"
                className="form-control mt-3"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Telefono"
                value={this.state.newContactData.phone}
                onChange={this.handletelefono}
              />
            </div>
            <AddContact metodo={this.newHandler} name="Nuevo contacto" />
            <AddContact metodo={this.handleClearForm} name="Limpiar formulario" />
          </form>
        </div>
      </div>
    );
  }
}

export default Directory;
