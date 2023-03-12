import React, {Component} from 'react';
import './Card.css';

class Card extends Component{

  state={
      classOpen:false
  }

  toggleClass=(id)=>{
      if (id === this.state.classOpen){
          // this means that we clicked the same item that was opened previously
          // so close it 
          this.setState({classOpen: false});
          return;
      }
      this.setState({classOpen: id})
  }

  render(){
    //calling props passed from parent  
    const robots= this.props.robots;
    return (
        <div>
            {/* <input type="checkbox" id="zoomCheck"/> */}
            <div className='robots-wrapper'>
                {robots.map((users,i)=>{
                    return(
                        <div key={"robot-"+i} onClick={()=>this.toggleClass(robots[i].id)} className={`container ${(this.state.classOpen === robots[i].id)? 'open':'grow'} tc bg-light-blue dib br3 pa3 ma2 bw2 shadow-5`}>
                            <div>
                                <img alt='robots' src={`https://robohash.org/${robots[i].id}?200x200`}/>
                                <h2>{robots[i].name}</h2>
                                <p>{robots[i].email}</p>
                            </div>
                        </div>
                    ); 
                })}
            </div>
        </div>
    );
  }
}

export default Card; 