import React , {Component} from 'react';
import AddFishForm from '../AddFishForm'

class Inventory extends Component {
  render(addFish){
    return(
      <div>
       <h2>Inventory</h2>
       <AddFishForm  addFish ={this.props.addFish}/>
       <button onClick ={this.props.sampleFish} >Add Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
