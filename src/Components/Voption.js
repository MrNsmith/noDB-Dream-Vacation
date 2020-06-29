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
            <h1>Please rate your dream vacation</h1>
            <div className='dest-flex'>{mappedDest}</div>
            
        </div>
    )
    
    
}
export default Voption;