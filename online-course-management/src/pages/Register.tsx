import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import Navbar from "../components/navbar"

function Register(){

const navigate = useNavigate()

const [form, setForm] = useState({
name:"",
email:"",
password:""
})

const handleChange = (e:any)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = (e:any)=>{
e.preventDefault()

if(!form.name || !form.email || !form.password){
alert("Please fill all fields")
return
}

// demo register
navigate("/login")
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
width:"380px",
border:"1px solid #1e293b"
}}>

<h2 style={{textAlign:"center",fontSize:"26px",fontWeight:700}}>
Create Account
</h2>

<p style={{textAlign:"center",color:"#94a3b8",marginBottom:"20px"}}>
Join EduCore 🚀
</p>

<input name="name" placeholder="Full Name" onChange={handleChange} style={inputStyle}/>
<input name="email" placeholder="Email" onChange={handleChange} style={inputStyle}/>
<input name="password" type="password" placeholder="Password" onChange={handleChange} style={inputStyle}/>

<button style={btnPrimary}>
Register
</button>

{/* 🔥 LOGIN LINK */}
<p style={{textAlign:"center",marginTop:"15px",color:"#94a3b8"}}>
Already have an account?{" "}
<Link to="/login" style={{color:"#22c55e",fontWeight:600}}>
Login
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

export default Register