import React from 'react'
import { useState } from 'react';
import Select from 'react-select';
import axiosInstance from '../axios';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];



const SignupModal = () => {
  const [selectedOption, setSelectedOption] = useState("")


  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
    console.log(`Option selected:`, selectedOption)

  };



  const signUp=(e)=>{
    e.preventDefault();
    const signUpData={
      countryCode: e.target.countryCode.value,
      phoneNumber: e.target.phoneNumber.value,
      userName:    e.target.name.value,
      email:       e.target.email.value,
      password:    e.target.password.value

    }

    axiosInstance.post("/login",signUpData)  
    .then(data=>{
      console.log(data.data);
    })
    .catch(err=>{
      console.log(err);
    })
      
     
  

  }
  return (
    <div className="modal fade  " id="signupmodal" tabindex="-1" aria-labelledby="signupmodalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content modalBody" id="modalBody">

          <div className="modal-body " id="modalsignup">
            <div className="d-flex justify-content-around ">
              <div className="text-center d-none d-md-block">
                <h6 className="text-uppercase promoCode ">Use code <span className="font-weight-bold">newzo</span></h6>
                <p className="mb-0">and get</p>
                <h4 className="cashback">20% cashback</h4>
                <p className="mb-0">on first order</p>
                <img src="./assets/img/Screenshot_119.png" className="discountImg" alt="" />

              </div>
              <div className="loginSection">
                <div className=" loginDiv">
                  <div className="text-end w-100">
                    <button type="button" className="btn-close closeButton" data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <h5 className="fw-bold mb-0">Sign up</h5>
                  <p className="fw-bold mb-4">Hi new user buddy, let's you started with us</p>
                  <form className="formTag" onSubmit={signUp}>

                    <label className="labelForInput">Mobile <br />
                      <input list="browsers" name="countryCode" id="selectInput" placeholder="India(+91)"
                   
                       />
                       <input type="number" name="phoneNumber" id="selectInput2" 
                     
                        /></label> <br /> <br />

                    <datalist id="browsers"
                      >
                      <option value="India(+91)" />
                      <option value="bd (+880)" />
                      <option value="India(+91)" />
                      <option value="bd (+880)" />
                      <option value="pakistan (+92)" />
                    </datalist>

                    <input type="text" placeholder="Name" name="name" id="" /><br /><br />
                    <input type="email" placeholder="Email" name="email" id="" /><br /><br />



                    <br />
                    {/* 
                    <Select
                      value={selectedOption}
                      onChange={handleChange}
                      options={options}
                    /> */}

                    <p className="passwordDiv position-relative">
                      <input type="password" placeholder="Password" name="password"
                      id="password" />
                      <i className="fa-solid fa-eye eyeIcon" id="togglePassword"></i>
                    </p>
                    <button className="loginButton" type='submit' >continue</button>

                  </form>

                  <div className="d-flex justify-content-between align-items-center my-2">
                    <div className=" borderBottom"></div>
                    <p className="mb-0">OR</p>
                    <div className=" borderBottom"></div>
                  </div>
                  <p className="text-center">Continue with</p>
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <p className="fbIcon"><i className="fa-brands fa-facebook"></i></p>
                    <p className="fbIcon"><img src="./assets/img/icons/google.png" alt="" /></p>
                  </div>


                  <div className="text-center mt-3">
                    <small>By continuing, you are agree to our <span className="terms">terms and conditions</span></small>
                    <small>See our <span className="terms">privacy notice</span></small>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupModal;