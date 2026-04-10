import Navbar from "../components/navbar"
import Footer from "../components/footer"
import hero from "../assets/hero.png"
import { useNavigate } from "react-router-dom"

function LandingPage(){
    const navigate = useNavigate()
return(

<div style={{
background:"#0b1120",
minHeight:"100vh",
color:"white",
fontFamily:"Inter, sans-serif"
}}>

<Navbar/>

{/* HERO */}

<div style={{
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"100px 80px",
position:"relative",

// ✅ REAL GRID BACKGROUND
backgroundImage: `
linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
`,
backgroundSize:"40px 40px"
}}>

{/* LEFT TEXT */}

<div style={{maxWidth:"600px"}}>

<h1 style={{
fontSize:"58px",
fontWeight:700,
lineHeight:"1.2",
fontFamily:"Poppins, sans-serif"
}}>

<span style={{color:"white"}}>Build </span>

<span style={{
background:"linear-gradient(90deg,#22c55e,#4ade80)",
WebkitBackgroundClip:"text",
color:"transparent"
}}>
in-demand skills
</span>

</h1>

<p style={{
marginTop:"20px",
color:"#94a3b8",
fontSize:"18px"
}}>
Learn from industry experts and grow your career with modern courses.
</p>

<div style={{marginTop:"30px", display:"flex", gap:"15px"}}>

<button onClick={()=>navigate("/register")}>
Get Started
</button>
<button onClick={()=>navigate("/courses")}>
Explore Courses
</button>

</div>

</div>

{/* RIGHT IMAGE */}

<img src={hero} style={{
width:"420px",
borderRadius:"20px",
boxShadow:"0 20px 60px rgba(0,0,0,0.4)"
}}/>

</div>

<Footer/>

</div>

)

}

export default LandingPage