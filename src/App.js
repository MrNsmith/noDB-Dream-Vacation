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
    axios.post('/api/destination', {dest: dest})
    .then(res => this.setState({choiceDest: res.data}))
    .catch(err => console.log(err))


  }
  changeRating = (id, rating)=>{
    let body = {rating: rating};
    axios.put(`/api/destination/${id}`, body)
    .then(res => this.setState({choiceDest: res.data}))
    .catch(err => console.log(err))
  }
  deleteDest =(id)=>{
    axios.delete(`/api/destination/${id}`)
    .then(res => this.setState({choiceDest: res.data}))
    .catch(err => console.log(err))
  }
  render(){
    
    return (
      <div>
        <Header/>
        <Vchoice 
          postDestFn={this.postDest}/>
        <Voption
        choiceDest={this.state.choiceDest}
        ratingFn={this.changeRating}
        deleteFn={this.deleteDest}/>

        
      </div>
    )

  }
  
}

export default App;
