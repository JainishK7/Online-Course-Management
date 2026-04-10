import Navbar from "../components/navbar"
import react from "../assets/react.png"
import python from "../assets/python.jpg"
import footer from "../components/footer"


function MyCourses(){

const courses = [
{
title:"React JS Masterclass",
instructor:"John Doe",
image:react,
progress:70
},
{
title:"Python for Data Science",
instructor:"Andrew Ng",
image:python,
progress:45
}
]

return(

<div>

<Navbar/>

{/* HEADER SECTION */}

<div style={{
background:"#0f172a",
color:"white",
padding:"40px 60px"
}}>

<h1 style={{fontSize:"34px",fontWeight:700}}>
My Learning
</h1>

{/* TABS */}

<div style={{
display:"flex",
gap:"25px",
marginTop:"20px",
fontSize:"15px"
}}>

<span style={{borderBottom:"2px solid white",paddingBottom:"5px"}}>All Courses</span>
<span>My Lists</span>
<span>Certifications</span>


</div>

</div>


{/* STREAK CARD */}

<div style={{
margin:"30px 60px",
background:"#fff",
borderRadius:"16px",
padding:"20px",
boxShadow:"0 8px 25px rgba(0,0,0,0.05)"
}}>

<h3>Start a new streak 🔥</h3>
<p style={{color:"#64748b"}}>
Watch courses daily to build your learning habit
</p>

</div>


{/* COURSES LIST */}

<div style={{
padding:"20px 60px"
}}>

{courses.map((course,index)=>(
<div key={index} style={{
display:"flex",
gap:"20px",
background:"#fff",
padding:"15px",
borderRadius:"12px",
marginBottom:"20px",
boxShadow:"0 8px 20px rgba(0,0,0,0.05)",
alignItems:"center"
}}>

<img
src={course.image}
style={{
width:"220px",
height:"120px",
objectFit:"cover",
borderRadius:"10px"
}}
/>

<div style={{flex:1}}>

<h3 style={{fontWeight:600}}>
{course.title}
</h3>

<p style={{
color:"#64748b",
fontSize:"14px"
}}>
{course.instructor}
</p>

{/* PROGRESS */}

<div style={{marginTop:"10px"}}>

<div style={{
height:"8px",
background:"#e2e8f0",
borderRadius:"10px"
}}>

<div style={{
width:`${course.progress}%`,
height:"100%",
background:"#6366f1",
borderRadius:"10px"
}}></div>

</div>

<p style={{
fontSize:"13px",
marginTop:"5px"
}}>
{course.progress}% complete
</p>

</div>

</div>

{/* BUTTON */}

<button style={{
padding:"10px 16px",
borderRadius:"8px",
border:"none",
background:"#6366f1",
color:"white"
}}>
Continue
</button>

</div>
))}

</div>

</div>

)

}

export default MyCourses