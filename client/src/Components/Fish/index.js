import React , {Component} from 'react';

class Fish extends Component {
  render(){
   const {image,name,desc,price,status} =this.props. details;
   const available = status === 'fresh';

    return(
      <div>
      <h1>{name}<span>{price}</span></h1>
      <img src={image} alt={name} />
      <p>{desc}</p>
      <p>{status}</p>
      <button disabled={!available}>{available?'add to card':'sold out'}</button>

      </div>
    )
  }
}

export default Fish;
