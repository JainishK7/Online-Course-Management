import Navbar from "../components/navbar"
import reactcourse from "../assets/react.jpg"
import footer from "../components/footer"


function CourseDetails(){

return(

<div>

<Navbar/>

{/* HERO SECTION */}

<section style={{
background:"#1e293b",
color:"white",
padding:"60px 80px",
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}>

<div style={{maxWidth:"500px"}}>

<h1 style={{
fontSize:"36px",
fontWeight:700
}}>
React JS Masterclass
</h1>

<p style={{marginTop:"10px"}}>
Build modern web applications using React and TypeScript.
</p>

<div style={{
marginTop:"10px",
display:"flex",
gap:"10px",
alignItems:"center"
}}>

<span style={{color:"#f59e0b",fontWeight:600}}>4.8 ⭐</span>

<span>(12,450 students)</span>

</div>

<p style={{marginTop:"10px"}}>
Created by John Doe
</p>

</div>

<img
src={reactcourse}
style={{
width:"400px",
borderRadius:"15px"
}}
/>

</section>


{/* COURSE CONTENT */}

<section style={{
padding:"60px 80px",
display:"flex",
gap:"60px"
}}>

{/* LEFT CONTENT */}

<div style={{flex:2}}>

<h2>What you'll learn</h2>

<ul style={{marginTop:"20px",lineHeight:"30px"}}>

<li>Build modern React applications</li>
<li>Understand React Hooks</li>
<li>Create reusable components</li>
<li>Manage application state</li>
<li>Deploy React projects</li>

</ul>

<h2 style={{marginTop:"40px"}}>Course Description</h2>

<p style={{marginTop:"10px",color:"#475569"}}>

This course teaches you how to build professional React applications
from scratch. You'll learn components, hooks, state management,
and real-world development practices.

</p>

</div>


{/* RIGHT SIDE CARD */}

<div style={{
flex:1,
background:"white",
padding:"25px",
borderRadius:"16px",
boxShadow:"0 8px 25px rgba(0,0,0,0.05)",
height:"fit-content"
}}>

<img
src={reactcourse}
style={{
width:"100%",
borderRadius:"10px"
}}
/>

<h2 style={{marginTop:"15px"}}>₹499</h2>

<button style={{
marginTop:"15px",
width:"100%",
padding:"12px",
background:"#6366f1",
color:"white",
border:"none",
borderRadius:"8px",
fontSize:"16px"
}}>
Enroll Now
</button>

<p style={{
marginTop:"10px",
fontSize:"14px",
color:"#64748b"
}}>
30-day money-back guarantee
</p>

</div>

</section>

</div>

)

}

export default CourseDetails