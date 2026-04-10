import { useNavigate } from "react-router-dom"
function AdminDashboard(){
  const navigate = useNavigate()
return(

<div style={{
background:"#0b1120",
minHeight:"100vh",
fontFamily:"Inter, sans-serif"
}}>



<div style={{display:"flex"}}>

{/* SIDEBAR */}
<div style={{
width:"240px",
background:"#020617",
color:"white",
padding:"25px",
minHeight:"100vh",
borderTopRightRadius:"20px",
display:"flex",
flexDirection:"column",
justifyContent:"space-between"
}}>

{/* TOP SECTION */}
<div>

<h2 style={{
marginBottom:"40px",
fontSize:"20px",
fontWeight:600,
letterSpacing:"0.5px"
}}>
EduCore
</h2>

<p style={menuItem}>📊 Dashboard</p>
<p style={menuItem}>📚 Courses</p>
<p style={menuItem} onClick={()=>navigate("/add-course")}>
➕ Add Course
</p><p style={menuItem}>👥 Users</p>

</div>

{/* BOTTOM SECTION */}
<div>

<hr style={{border:"0.5px solid #334155",margin:"20px 0"}} />

<button

style={{
width:"100%",
padding:"10px",
borderRadius:"10px",
border:"1px solid #334155",
background:"transparent",
color:"#cbd5f5",
cursor:"pointer",
fontWeight:500,
transition:"0.3s"
}}

onMouseEnter={(e:any)=> e.currentTarget.style.background="#334155"}
onMouseLeave={(e:any)=> e.currentTarget.style.background="transparent"}
>
← Back to Home
</button>

</div>

</div>

{/* MAIN */}

<div style={{
flex:1,
padding:"40px"
}}>

<h1 style={{
fontSize:"32px",
fontWeight:700,
color:"white",
marginBottom:"10px"
}}>
Dashboard Overview
</h1>

<p style={{
color:" #22c55e  ",
marginBottom:"30px"
}}>
Welcome back, Admin 👋
</p>


{/* STATS CARDS */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px",
background:"0f172a"
}}>

<div style={cardStyle}>
<h4>Total Courses</h4>
<p style={numberStyle}>12</p>
</div>

<div style={cardStyle}>
<h4>Total Students</h4>
<p style={numberStyle}>150</p>
</div>

<div style={cardStyle}>
<h4>Revenue</h4>
<p style={numberStyle}>₹45,000</p>
</div>

</div>


{/* RECENT ACTIVITY */}

<div style={{
marginTop:"40px",
display:"grid",
gridTemplateColumns:"2fr 1fr",
gap:"20px"
}}>

{/* LEFT PANEL */}

<div style={panelStyle}>

<h3 style={{marginBottom:"15px"}}>Recent Courses</h3>

<div style={listItem}>React for Beginners</div>
<div style={listItem}>Python Bootcamp</div>
<div style={listItem}>UI/UX Masterclass</div>

</div>


{/* RIGHT PANEL */}

<div style={{
...panelStyle,
background:"linear-gradient(135deg,#6366f1,#3b82f6)",
color:"white"
}}>

<h3>Quick Actions</h3>

<button style={actionBtn}>+ Add Course</button>
<button style={actionBtn}>View Users</button>

</div>

</div>

</div>

</div>

</div>

)

}

/* STYLES */

const menuItem = {
marginBottom:"18px",
cursor:"pointer",
opacity:0.85,
transition:"0.3s"
}

const cardStyle = {
background:"rgba(255,255,255,0.7)",
backdropFilter:"blur(10px)",
padding:"25px",
borderRadius:"16px",
boxShadow:"0 8px 20px rgba(0,0,0,0.05)"
}

const numberStyle = {
fontSize:"28px",
fontWeight:700,
marginTop:"10px",
color:"#1e293b"
}

const panelStyle = {
background:"white",
padding:"20px",
borderRadius:"16px",
boxShadow:"0 8px 20px rgba(0,0,0,0.05)"
}

const listItem = {
padding:"10px 0",
borderBottom:"1px solid #e5e7eb",
color:"#334155"
}
const actionBtn = {
  width:"100%",
  padding:"12px",
  marginTop:"12px",
  borderRadius:"10px",
  border:"1px solid #e5e7eb",
  background:"#f1f5f9",
  color:"#1e293b",
  fontWeight:600,
  cursor:"pointer",
  transition:"0.3s"
  }
  
export default AdminDashboard