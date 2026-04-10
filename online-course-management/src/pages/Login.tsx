import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import Navbar from "../components/navbar"

function Login(){

const navigate = useNavigate()

const [form, setForm] = useState({
email:"",
password:""
})

const [role, setRole] = useState("student")

const handleChange = (e:any)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = (e:any)=>{
e.preventDefault()

if(!form.email || !form.password){
alert("Please fill all fields")
return
}

// ✅ ROLE BASED REDIRECT
if(role === "admin"){
navigate("/admin")
}else{
navigate("/mycourses")
}

}

return(

<div style={{
background:"#0b1120",
minHeight:"100vh",
color:"white"
}}>

<Navbar/>

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
padding:"60px"
}}>

<form onSubmit={handleSubmit} style={{
background:"#0f172a",
padding:"40px",
borderRadius:"16px",
width:"420px",
border:"1px solid #1e293b"
}}>

<h2 style={{textAlign:"center",fontSize:"26px",fontWeight:700}}>
Login
</h2>

<p style={{textAlign:"center",color:"#94a3b8",marginBottom:"20px"}}>
Welcome back 👋
</p>

{/* 🔥 ROLE SELECTION */}

<p style={{marginBottom:"10px",fontWeight:600}}>
Select Role
</p>

<div style={{
display:"flex",
gap:"15px",
marginBottom:"20px"
}}>

{/* STUDENT */}

<div
onClick={()=>setRole("student")}
style={{
flex:1,
padding:"15px",
borderRadius:"12px",
cursor:"pointer",
textAlign:"center",
border: role==="student" ? "2px solid #22c55e" : "1px solid #334155",
background: role==="student" ? "#052e1f" : "#020617",
transition:"0.3s"
}}
>
<h3>🎓</h3>
<p>Student</p>
</div>

{/* ADMIN */}

<div
onClick={()=>setRole("admin")}
style={{
flex:1,
padding:"15px",
borderRadius:"12px",
cursor:"pointer",
textAlign:"center",
border: role==="admin" ? "2px solid #22c55e" : "1px solid #334155",
background: role==="admin" ? "#052e1f" : "#020617",
transition:"0.3s"
}}
>
<h3>🛠</h3>
<p>Admin</p>
</div>

</div>

{/* INPUTS */}

<input name="email" placeholder="Email" onChange={handleChange} style={inputStyle}/>
<input name="password" type="password" placeholder="Password" onChange={handleChange} style={inputStyle}/>

<button style={btnPrimary}>
Login
</button>

{/* REGISTER LINK */}

<p style={{textAlign:"center",marginTop:"15px",color:"#94a3b8"}}>
Don’t have an account?{" "}
<Link to="/register" style={{color:"#22c55e",fontWeight:600}}>
Register
</Link>
</p>

</form>

</div>

</div>

)

}

const inputStyle = {
width:"100%",
padding:"12px",
marginBottom:"12px",
borderRadius:"8px",
border:"1px solid #334155",
background:"#020617",
color:"white"
}

const btnPrimary = {
width:"100%",
padding:"12px",
borderRadius:"8px",
border:"none",
background:"linear-gradient(135deg,#22c55e,#16a34a)",
color:"white",
fontWeight:600,
cursor:"pointer"
}

export default Login