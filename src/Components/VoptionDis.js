import React, {Component} from 'react';

class VoptionDis extends Component{
    constructor(props){
        super(props);
        this.state ={
            updating: false,
            rating: null
        }
    }
    handleInput=(val)=>{
        this.setState({rating: val})
    }
    handleToggle=()=>{
        this.setState({updating: !this.state.updating})

    }
    handleEdit=(id)=>{
        this.props.ratingFn(id, this.state.rating)
        this.handleToggle();

    }
    
    render(){
        return(
            <div className='choice'>
                <img className="choice-pic"src={this.props.dest.img} alt={this.props.dest.name}/>
                {this.state.updating 
                ?(
                    <div>
                    <input 
                    onChange={e=> this.handleInput(e.target.value) } 
                    placeholder="out of 10 stars"/>
                    <button className='button'
                    onClick={() => this.handleEdit(this.props.dest.id)}>Update</button>
                    </div>

                )
                : (
                    <div>
                        <p className="vaca-name">{this.props.dest.name}</p>
                        <p className="vaca-rating2">{this.props.dest.rating}/ 10 stars</p>
                        <button onClick={this.handleToggle}>New Rating</button>

                    </div>


                )}
                <button onClick ={()=>this.props.deleteFn(this.props.dest.id)}>Delete</button>

            </div>

        )
    }
}
export default VoptionDis;