import React from 'react'
import axiosInstance from '../axios';

const LoginModal = () => {

  const emailLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value
    console.log(username);
    axiosInstance.get("login") 
      // .then(res => res.JSON())  
      .then(data => {
        const users=data.data
        if(users){ 
          if(users.length>=0){
           const getUser= users.find(user=>user.email==username)
           if(getUser){
            localStorage.setItem("user",username)
            window.location.href="/" ;
           }
           else{
            document.querySelector(".signUpBtn").click(); 
           }

          }
          else{
            console.log("No user found");
          }
        }
        else{
          console.log("No user found");
        }
      })
      .catch(err => {
        console.log("err", err);
      })

  }
  return (
    <div className="modal fade  " id="loginmodal" tabindex="-1" aria-labelledby="loginmodalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content modalBody" id="modalBody">

          <div className="modal-body " id="modalLogin">
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
                  <div className="m-auto text-center">
                    <img src="assets/img/logo.png" height="40" alt="" />
                    <p className="fw-bold my-4 logdes">WELCOME, BE A PART OF US</p>
                  </div>
                  <form className="formTag2" onSubmit={emailLogin}>
                    <label for="username" className="labelForInput2 logdes">Continue with Mobile Number or Email</label>
                    <input type="text" placeholder="Mobile Number or Email" name="username" id="username" />

                    <button className="loginButton my-4" type="submit">CONTINUE</button>
                  </form>

                  <div className="d-flex justify-content-between align-items-center my-2">
                    <div className=" borderBottom"></div>
                    <p className="mb-0">OR</p>
                    <div className=" borderBottom"></div>
                  </div>
                  <p className="text-center">Continue with</p>
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <p className="fbIcon"><img src="./assets/img/icons/google.png" alt="" /></p>
                    <p className="fbIcon"><i className="fa-brands fa-facebook"></i></p>
                  </div>
                  <div className="text-center mt-5">
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

export default LoginModal;