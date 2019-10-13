/*
  Main view
*/

import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import Books from './Books'
import RippleIcon from './Spinner/RippleIcon'
import './App.css';

const blockOptions = ["none", "block"] //div options
const apis = ["https://www.googleapis.com/books/v1/volumes?q="]
const errorText = "No results found for "
const defaultText = "聲の形" //default text for searchbar

class App extends React.Component {

  constructor(props){
    super(props)

    this.state={
      bookInfo: [],
      sVisibility: blockOptions[0],
      errVisibility: blockOptions[0],
      errorMessage: errorText,
      searchText: defaultText
    }

    this.searchResult = this.searchResult.bind(this)
  }

  //on submit button clicked, fetches data
  searchResult(event, userInput) {

    //runs this on user search
    if(event){
      event.preventDefault()
    }
  
    //show spinner
    this.setState({
      sVisibility: blockOptions[1]
    })

    axios.get(`${apis[0]}${userInput}`)
      .then(res => {
        let tempBookInfo = [] //stores book info temporarily
  
        for(let i = 0; i < res.data.items.length; i++){
          tempBookInfo.push(res.data.items[i].volumeInfo)
        }
        
        this.setState({
          bookInfo: tempBookInfo,
          sVisibility: blockOptions[0],
          errVisibility: blockOptions[0]
        })
    })
    .catch(error => {
      this.setState({
        errorMessage: this.state.errorMessage + userInput,
        sVisibility: blockOptions[0],
        errVisibility: blockOptions[1]
      })
  });
  }

  componentDidMount(){
    this.searchResult(null, defaultText); //does a default search
      
  }

  render(){
    return (
      <div className="App">
        <div id="spinnerContainer" style={{display:this.state.sVisibility}}><RippleIcon></RippleIcon></div>
        <SearchBar searchText={this.state.searchText} searchResult={this.searchResult}></SearchBar>
        <p id="errorMessage" style={{display:this.state.errVisibility, color:"red"}}>{this.state.errorMessage}</p>
        <Books id="books" bookInfo={this.state.bookInfo}></Books>
      </div>
    );
  }
}

export default App;
