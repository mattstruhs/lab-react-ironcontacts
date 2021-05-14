import React, { Component } from "react";
import ContactCard from "../contactCard/ContactCard";
import contacts from "./contacts.json";

export default class Contacts extends Component {
  state = [(listOfContacts = contacts.slice(0, 5))];

  showContacts = () => {
    return this.state.list.map((eachContact, index) => {
      return (
        <ContactCard index={index} {...eachContact} key={eachContact.name} />
      );
    });
  };
  render() {
    return (
      <div>
        <div>
          <ul>{this.showContacts()}</ul>
        </div>
      </div>
    );
  }
}
