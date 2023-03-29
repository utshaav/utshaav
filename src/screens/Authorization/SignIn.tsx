import React, { useState } from 'react'
import "../Authorization/SignIn.scss"

function SignIn() {

    const [currentPage, setCurrentPage] = useState("signin");


    var handleChange = (e: any) => {
        e.preventDefault();
        var tabName: any = e.currentTarget;
        var currentTab = tabName.dataset.tabname;
        document.getElementsByClassName("active");
        for (const li of document.querySelectorAll("a.active")) {
            li.classList.remove("active");
        }
        tabName.classList.add("active");
        setCurrentPage(currentTab)
    }




    return (
        <div className='d-flex justify-content-center align-items-center main-div'>

            <form className='login-form'>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-tabname="signin" aria-current="page" onClick={handleChange}>SignIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-tabname="signup" onClick={handleChange}>SignUp</a>
                    </li>
                </ul>
                {currentPage == "signin" && <>
                    <div className=" inputs mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </>}
                {currentPage == "signup" && <>
                    <div className=" inputs mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullName" aria-describedby="fullnameHelp" />
                    </div><div className=" inputs mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </>}


            </form>
        </div>
    )
}

export default SignIn