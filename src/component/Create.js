import React, { useState } from "react";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { insertAction } from "../store/store";
import { useNavigate } from "react-router-dom";
function Create(params) {
    const [email,setEmail]= useState();
    const [name,setname]= useState();
    const dispatchdata = useDispatch(); 
    const users = useSelector((state) =>state.user.userData);
    const navigate = useNavigate();
        console.log(users.length);

    const submitHandler = (e)=>{
        e.preventDefault();
        const userNewId = users.length > 0  ? users[users.length -1].id + 1 : 1;
        dispatchdata(insertAction.addUser({id:userNewId, name,email}));
        
        navigate('/');
    }
    return(
        <div className="container border mt-5">
         <form onSubmit={submitHandler}>
         <div className="form-group">
            <h4>Add User</h4>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="tedt" className="form-control" onChange={e =>setname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" onChange={e =>setEmail(e.target.value)} id="exampleInputPassword1" placeholder="Email"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    
}

export default Create;