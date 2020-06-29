import React, { Component } from 'react';

class VchoiceDis extends Component{
    handleChoice=()=>{
        const {postDestFn, dest,resetFn} = this.props;
        let destPick = {
            name: dest.name,
            img: dest.img,
            rating: dest.rating
        }
        postDestFn(destPick)
        resetFn()
    }
    render(){
        const {dest} = this.props;//passed down form Vchoice
        return(
            <div className='transition' onClick={this.handleChoice}>
                <img className='vaca-pics'src= {dest.img} alt = {dest.name}/>
                <p className='vaca-name'>{dest.name}</p>
                <p className='vaca-rating'>Rating: {dest.rating} /10 stars</p>
            </div>
        )
    }
}

export default VchoiceDis;