import React from 'react';

const Scroll=(props)=>{
    return (
        <div style={{overflow:'scroll',border: '2px solid rgb(7, 104, 203)', height: '500px', borderRadius:'10px'}}>
            {props.children}
        </div>
    );

}

export default Scroll;