import React, { Component } from "react";
import contactsData from "./../ContactsData";
import ContactsCard from "./ContactCard";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contactsData
    };
  }
  render() {
    const cards = this.state.contacts.map((contact, idx) => (
      <ContactsCard info={contact} key={idx} />
    ));
    return <div className="card-columns container mt-5">{cards}</div>;
  }
}

export default Directory;
