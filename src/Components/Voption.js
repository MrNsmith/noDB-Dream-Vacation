import React from 'react';
import VoptionDis from './VoptionDis';

const Voption = props =>{
    const mappedDest = props.choiceDest.map((dest, i )=>(
        <VoptionDis 
        key={i}
        dest={dest}
        ratingFn={props.ratingFn}
        deleteFn={props.deleteFn}
        />
        
    ))
    return(
        
        <div >
            <h1>How did you enjoy it?</h1>
            <h2>Please rate your dream vacation</h2>
            <div className='dest-flex'>{mappedDest}</div>
            
        </div>
    )
    
    
}
export default Voption;