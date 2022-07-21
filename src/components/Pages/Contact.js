import React from "react";
import classes from'./Contact.module.css'
const Contact  = (props)=>{
    async function formSubmitHandler(event) {
        event.preventDefault();
        const user = {
            Name: event.target[0].value,
            Email: event.target[1].value,
            Phone: event.target[2].value,
        };

        const response = await fetch('https://swapi-366f3-default-rtdb.firebaseio.com//users.json',{
          method:'POST',
          body:JSON.stringify(user)
    
        })};
    return(
        <>
            {/* <form onSubmit={formSubmitHandler} className='mainForm'>
                <div className="Name">
                    <label htmlFor="nameLabel" className="Lable">Name</label><br></br>
                    <input type="text" id="nameLable" className="nameInput" />
                </div>
                <div className="Email">
                    <label htmlFor="emailLabel" className="Lable">Email</label><br></br>
                    <input type="text" id="nameLable" className="nameInput" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" />
                </div>
                <div className="Phone">
                    <label htmlFor="phoneLabel" className="Lable">Phone Number</label><br></br>
                    <input type="number" id="phoneLable" className="nameInput" maxLength='10' />
                </div>
                <button className="formSubmit" type="submit">Submit</button>


            </form> */}

            <form onSubmit={formSubmitHandler} className={classes.mainForm}>
                <div className={classes.control}>
                    <label htmlFor='title'>Name</label>
                    <input type='text' id='title'  />
                </div>
                <div className={classes.control}>
                    <label htmlFor='opening-text'>Email</label>
                    <input rows='5' id='opening-text' pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"  onInvalid={e => e.target.setCustomValidity('Enter a Valid Email ID')}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='date'>Phone Number</label>
                    <input type='number' id='date' maxLength={10} />
                </div>
                <button className={classes.buttonStyle}>Submit</button>
                </form>
        </>
    );
};
export default Contact;