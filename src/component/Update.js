import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { insertAction } from "../store/store";

function Update(params) {
    const [userName,setName]= useState();
    const [userEmail,setEmail]= useState();
    const users = useSelector((state) =>state.user.userData);
    const {id} = useParams();
    const navigate = useNavigate();
     const user = users.filter((f)=> f.id == id);
     const { name, email } = user.length > 0 ? user[0] : {};
      useState(() => {
        setName(name);
        setEmail(email);
      }, [name, email]);
      const dispatch = useDispatch();
    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(insertAction.updateUser({
            id,name:userName,email:userEmail
        }));

       navigate('/');
    }
    return(
        <div className="container border mt-5">
         <form onSubmit={submitHandler}>
         <div className="form-group">
            <h4>Edit User</h4>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" name="name" className="form-control" onChange={e =>setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" value={userName}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" onChange={e =>setEmail(e.target.value)} id="exampleInputPassword1" placeholder="Email" value={userEmail}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    
}


export default Update;