/*
  Search Bar
*/

import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props)

        this.state={
            userInput: this.props.searchText
        }
    
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return (
            <div>
                <form>
                    <input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChange}></input> 
                    <button type="submit" onClick={(event) => this.props.searchResult(event,this.state.userInput)}>Search for Book</button>
                </form>   
            </div>
        );
    }

}

export default SearchBar;
