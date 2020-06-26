import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header'
import Vchoice from './Components/Vchoice'
import Voption from './Components/Voption'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      choiceDest: []
      
    }
  }
  componentDidMount(){
    axios.get('/api/destination')
    .then(res => this.setState({choiceDest: res.data}))
    .catch(err => console.log(err))
  }
  postDest =(dest)=>{
    axios.post('/api/destination', {dest})
    .then(res => this.setState({choiceDest: res.data}))
    .catch(err => console.log(err))


  }
 
  render(){
    console.log(this.state.choiceDest)
    return (
      <div>
        <Header/>
        <Vchoice 
          postDestFn={this.postDest}/>
        <Voption
        choiceDest={this.state.choiceDest}/>

        <p>destinations</p>
      </div>
    )

  }
  
}

export default App;
