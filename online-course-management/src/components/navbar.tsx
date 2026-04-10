import { Link, useNavigate } from "react-router-dom"

function Navbar(){

const navigate = useNavigate()

return(
<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"20px 40px",
background:"#0b1120",   // ✅ SAME AS HOMEPAGE
color:"white",
borderBottom:"1px solid #1e293b",
position:"sticky",
top:0,
zIndex:1000
}}>

<h2>EduCore</h2>

<div style={{display:"flex",gap:"20px",alignItems:"center"}}>

<Link to="/" style={linkStyle}>Home</Link>
<Link to="/courses" style={linkStyle}>Courses</Link>
<Link to="/mycourses" style={linkStyle}>My Learning</Link>

{/* ✅ LOGIN */}
<button onClick={()=>navigate("/login")} style={btnOutline}>
Login
</button>

{/* ✅ SIGNUP */}
<button onClick={()=>navigate("/register")} style={btnPrimary}>
Sign Up
</button>

</div>

</div>

)

}
const linkStyle = {
    textDecoration:"none",
    color:"#cbd5f5"
    }

const btnOutline = {
padding:"8px 16px",
borderRadius:"6px",
border:"1px solid #334155",
background:"#22c55e",
cursor:"pointer"
}

const btnPrimary = {
padding:"8px 16px",
borderRadius:"6px",
border:"none",
background:"#22c55e",
color:"white",
cursor:"pointer"
}

export default Navbar