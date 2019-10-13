/*
  Book view of each individual book
*/

import React from "react";

class Book extends React.Component {
  render() {
    return (
      <div style={{padding:"2em", margin:"2em", border:"2px solid black", borderRadius:"5px"}}>
        <a style={{ display: "block" }} href={this.props.site} >{this.props.title}</a>
        <p style={{ display: "block" }}>{this.props.description}</p>
        <img src={this.props.image} alt=""></img>
        <hr />
        <p style={{ display: "block" }}>{this.props.categories}</p>
      </div>
    );
  }
}

export default Book;
