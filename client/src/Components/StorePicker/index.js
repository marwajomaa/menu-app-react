import React , {Component} from 'react';

class StorePicker extends Component {

 handleStoreName =(e)=>{
   //1.prevent the form from submitting
  e.preventDefault();
  //2.take the value from the input
  const storeName = this.storeName.value;
  //3.change the page when the url change
  // window.location=`/store/${storeName}`
  this.props.history.push(`/store/${storeName}`)
 }

  render(){
    return(
      <form onSubmit={this.handleStoreName}>
       <input ref={input=>this.storeName = input} type="text" placeholder='Enter store name' />
       <button>Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
