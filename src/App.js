import React, {Component} from 'react';
import {Search} from './components/Search/search.component';
import { CardList } from './components/card-list/card-list.component';
import { connect } from "react-redux";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      searchFields: ''
            }
      }
    
  render(){
    const { searchFields} = this.state;
    const page1 = this.props.page1["content-items"].content;
     const filteredPlayers = page1 && page1.filter(artist =>
      (artist.name.toLowerCase().includes(searchFields.toLowerCase()))
      );   

     return(
      <div className='App'>
          <div>
            {/* <img src="images/Back.png"  width={20} height={20}/> */}
            <h1>{this.props.page1.title}</h1>
            <Search 
              placeholder='search artists'
              handleChange={e =>this.setState({searchFields:e.target.value})}
              />
          </div>
         <CardList page1 = {filteredPlayers}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page1:state.page1,
    page2:state.page2,
    page3:state.page3
  };
};

export default connect(mapStateToProps, null)(App);

