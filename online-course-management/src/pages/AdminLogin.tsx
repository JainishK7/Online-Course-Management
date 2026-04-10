import { useNavigate } from "react-router-dom";

function AdminLogin(){

  const navigate = useNavigate();

  return (
    <div style={{padding:"40px"}}>

      <h1>Admin Login</h1>

      <input placeholder="Username" />
      <br/><br/>

      <input type="password" placeholder="Password" />
      <br/><br/>

      <button onClick={()=>navigate("/admin-dashboard")}>
        Login
      </button>

    </div>
  );
}

export default AdminLogin;