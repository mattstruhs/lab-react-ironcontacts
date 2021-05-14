import React, { Component } from "react";

export default class ContactCard extends Component {
  render() {
    const { name, pictureUrl, popularity, ids, index } = this.props;

    return (
      <>
        {
          <li>
            <h3>Name: {name}</h3>
            <p>Popularity: {popularity}</p>
          </li>
        }
      </>
    );
  }
}
