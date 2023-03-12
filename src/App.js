import React, { Component } from 'react';
import Card from './Card';
import Scroll from'./Scroll';
import SearchBox from'./SearchBox';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:'',
        }
    }

    arr = [
        {
            title:"asdasd",
            parag:"sdasasdasda",
            button:'sadasdasdasdas'
        },
        {
            title:"sadadasd",
            parag:'',
            button:''
        },
    ]

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json();})
        .then(users=>{this.setState({robots: users});})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots,searchfield}=this.state;
        const filteredRobots=robots.filter(robot=>{
            return(
                robot.name.toLowerCase().includes(searchfield.toLowerCase())
            );
        })
        return(
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    
                    <Card robots={filteredRobots}/>
                </Scroll>
            </div>
            
        );
    }
}

export default App;