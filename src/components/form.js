import React from 'react'

const trigger = ()=>{
    let name = document.getElementById("name");
    let username = document.getElementById("username");
    let email = document.getElementById("mail");
    let phone = document.getElementById("phone");
    
    // email.addEventListener("keyup", function (event) {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("I expect an e-mail");
        email.innerHTML = "hello it a email";
      } else {
        email.setCustomValidity("");
      }
    // });
    localStorage.setItem("Name", name.value);
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
}

const form = () => {
  return (
    <>  <div className='register'>
            <h1 className='heading'>Super App</h1>
            <p className='subHeading'>Create your new account</p>
            <form className='form' action="/categories">
                <input required className='input' placeholder='Name' type="text" name="Name" id="name" />
                <input required className='input' placeholder='Username' type="text" name="Username" id="username" />
                <input required className='input' placeholder='Email' type="email" name="Email" id="mail" />
                <input required className='input' placeholder='Mobile' type="tel" name="Phone" id="phone" />
                <div className="checkDiv">
                    <input required className='checkbox' type="checkbox" name="Checkbox" id="" content="Share my registration data with Superapp"/>Share my registration data with Superapp
                </div>
                <button className='btn' onClick={trigger}>Sign Up</button>
                <p className='para-1'>By clicking on Sign up. you agree to Superapp <span className='.span'>Terms and Conditions of Use</span> </p>
                <p className='para-1'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className='.span'
                >Privacy Policy</span> </p>
            </form>
        </div>
    </>
  )
}


export default form