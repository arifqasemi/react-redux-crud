import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { insertAction } from "../store/store";
function Home(params) {
    const users = useSelector((state) =>state.user.userData);
    const dispatch = useDispatch();
    const deleteUser = (id)=>{
        dispatch(insertAction.deleteUser({id}));

    }
    return(
        <div className="container mt-5">
            <h4>Home</h4>
            <Link to="/create" className="btn btn-primary btn-sm mb-3">Add User</Link>
            <table className="table border">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/update/${user.id}`} className="btn btn-primary btn-sm">
                    Edit
                  </Link>{" "}
                  <button onClick={() => deleteUser(user.id)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found.</td>
            </tr>
          )}
               
            </tbody>
</table>
        </div>
    )
}

export default Home