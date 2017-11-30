import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Word from './word.json';

class App extends Component {
  constructor(props){
		super(props);
		this.state ={
			term  : '',list : Word.words,
			search : ''
		};
	}
	 
	updatedData(event){
		this.setState({search: event.target.value})
	}

  render() {
  	let filterList = this.state.list.filter(
  		(item) => {
  			return item.word.indexOf(this.state.search) !== -1 || item.meaning.indexOf(this.state.search) !== -1; 
  			}
  		);
  	 var flower = filterList.map(function(item){
      if(item.ratio === -1){
        return null;
      }	
      return (
      
		  <div className="column" key={item.id}>
		    <div className="post-module">
		      <div className="thumbnail">
          
		  		<img className="card-img-top" src={"http://appsculture.com/vocab/images/"+ item.id +".png"}  alt=''  />
		      </div>
		      <div className="post-content">
		        <div className="category">Photos</div>
		        <h1 className="title">{item.word}</h1>
		        <h2 className="sub_title">{item.meaning}.</h2>
		        <p className="description">{item.meaning}.</p>
		      </div>
		    </div>
		  </div>
      	);
    });
    return (
      <div className="container">
      	<input type="text" placeholder="Search Dictionary" name="search"  value = {this.state.search}
      	onChange={this.updatedData.bind(this)}
      	/>
      	<div>{flower}</div>
      
      </div>
    );
  }
}

export default App;
