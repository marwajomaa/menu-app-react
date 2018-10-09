import React , {Component} from 'react';

class AddFishForm extends Component {
 createFish =(e)=>{
   e.preventDefault();
   //1. access the value of the inputs
   const obj = {
     name : this.nameRef.value,
     price : parseFloat(this.price.value),
     status : this.selectStauts.value,
     image : this.imageRef.value,
     desc : this.desc.value,
   }
    console.log(obj);
    //2.passing obj into func to save it in the app state
    this.props.addFish(obj);
    //3. reset from after submitting
    e.target.reset();
 }

  render(){
    return(
      <form onSubmit={this.createFish}>
        <input ref={input=>this.nameRef =input} type="text" name="name" placeholder='name' />
        <input ref={input=>this.price =input} type="text" name="price" placeholder='price' / >
        <select ref={input=>this.selectStauts=input}>
         <option>fresh</option>
         <option>sold</option>
        </select>
        <input ref={input=>this.imageRef = input} type="text" name="image" placeholder='image' />
        <textarea ref={input=>this.desc=input} name="des" placeholder='desc' />
        <button type="submit">+Add fish</button>
      </form>
    )
  }
}

export default AddFishForm;
