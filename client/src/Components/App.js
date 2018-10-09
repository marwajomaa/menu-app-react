import React, { Component } from 'react';
import StorePicker from './StorePicker'
import Order from './Order'
import Inventory from './Inventory'
import fishes from '.././sampleFishes'
import Fish from './Fish';

class App extends Component {
  state = {
   Fishes : {}
  }

  sampleFish =()=>{
    this.setState({Fishes:fishes})
    console.log(this.state.Fishes.fish1);
  }

  addFish =(fish)=>{
    console.log(fish);
    console.log(this.state);
    //1.copy the state
    const Fishes = {...this.state.addFish};
    // console.log(Fishes);
    //2.adding key
     Fishes[`fish${Date.now()}`]=fish;
     //3. adding fish to the state
    this.setState({ Fishes })
    console.log(this.state);
  }

  render(){
    return(
      <div>
      {Object.keys(this.state.Fishes).map(key=><Fish key={key} details={this.state.Fishes[key]}/>)}
      {/*<StorePicker />*/}
      <Order />
      <Inventory addFish={this.addFish} sampleFish={this.sampleFish} />
      </div>
    )
  }
}

export default App;
