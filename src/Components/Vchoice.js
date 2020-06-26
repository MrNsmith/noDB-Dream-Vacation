import React, {Component} from 'react';
import axios from 'axios'
import VchoiceDis from './VchoiceDis'

class Vchoice extends Component{
    constructor(props){
        super(props)
        this.state = {
            destinations: []

        }
    }
    componentDidMount(){
        this.getVaca();
    }
    getVaca = () => {
        axios.get ('/api/vacations')
        .then(res => this.setState({destinations: res.data}))
        .catch(err => console.log(err))
    }
  
    render(){
        const {destinations} = this.state
        const mappedDest = destinations.map((dest, i) =>(
            //passing down to display
            <VchoiceDis
                    key={i}
                    //defining props to be passed down
                    dest={dest}
                    postDestFn = {this.props.postDestFn}
                    resetFn = {this.getVaca}/> 

        ))
        
        return (
            <div className='dest-flex'>
                {mappedDest}

            </div>
        )
    }
}
export default Vchoice;