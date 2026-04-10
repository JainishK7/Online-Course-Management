import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import CourseCard from "../components/CourseCard"

// images
import react from "../assets/react.png"
import python from "../assets/python.jpg"
import os from "../assets/os.png"
import js from "../assets/js.png"
import fullstack from "../assets/fullstack.png"
import ml from "../assets/ml.png"
import marketing from "../assets/marketing.png"
import finance from "../assets/finance.png"
import figma from "../assets/figma.png"
import graphic from "../assets/graphic.png"
import sp from "../assets/sp.png"
import deeplearning from "../assets/deeplearning.png"

function Courses(){

const [courses, setCourses] = useState([])

// backend courses
useEffect(()=>{
fetch("http://localhost:5000/api/courses")
.then(res => res.json())
.then(data => setCourses(data))
},[])

return(

<div style={{background:" #0b1120",minHeight:"100vh"}}>

<Navbar/>

<h1 style={{
textAlign:"center",
marginTop:"40px",
fontSize:"36px",
fontWeight:700,
color:"#FFFFFF"
}}>
Explore Courses
</h1>

{/* 🔥 ALL COURSES (12 STATIC) */}

<section style={{padding:"40px 80px"}}>

<h2 style={{marginBottom:"20px"}}>Popular Courses</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,260px)",
gap:"30px"

}}>

<CourseCard title="React JS Masterclass" instructor="John Doe" image={react} rating={4.5} students={12000} price={499}/>
<CourseCard title="Full Stack Development" instructor="Emily Clark" image={fullstack} rating={4.8} students={18000} price={999}/>
<CourseCard title="Advanced JavaScript" instructor="Chris Evans" image={js} rating={4.3} students={9500} price={599}/>

<CourseCard title="Python for Data Science" instructor="Andrew Ng" image={python} rating={4.7} students={20000} price={899}/>
<CourseCard title="Machine Learning Basics" instructor="Sophia Lee" image={ml} rating={4.6} students={15000} price={799}/>
<CourseCard title="Deep Learning Fundamentals" instructor="Daniel Kim" image={deeplearning} rating={4.5} students={11000} price={899}/>

<CourseCard title="Digital Marketing" instructor="Olivia Brown" image={marketing} rating={4.4} students={14000} price={699}/>
<CourseCard title="Startup Entrepreneurship" instructor="Mark Cuban" image={sp} rating={4.2} students={10000} price={599}/>
<CourseCard title="Financial Management" instructor="Warren Smith" image={finance} rating={4.6} students={17000} price={699}/>

<CourseCard title="UI/UX Design" instructor="Alex Turner" image={figma} rating={4.8} students={13000} price={799}/>
<CourseCard title="Graphic Design" instructor="Lisa Ray" image={graphic} rating={4.3} students={8000} price={599}/>
<CourseCard title="Operating Systems" instructor="Michael Brown" image={os} rating={4.5} students={9000} price={699}/>

</div>

</section>

</div>

)

}

export default Courses