import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddCourse() {

const navigate = useNavigate()

const [course, setCourse] = useState({
  title: "",
  instructor: "",
  price: "",
  category: "",
  image: "",
  description: ""
})

const [message, setMessage] = useState("")

const handleChange = (e: any) => {
  setCourse({ ...course, [e.target.name]: e.target.value })
}

const handleSubmit = async (e: any) => {
  e.preventDefault()

  // ✅ VALIDATION
  if (!course.title || !course.instructor || !course.price) {
    setMessage("Please fill required fields ❗")
    return
  }

  try {
    // ✅ API CALL
    const res = await fetch("http://localhost:5000/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...course,
        price: Number(course.price),
        rating: 4.5,
        students: 1000
      })
    })

    if (!res.ok) throw new Error("Failed to add course")

    setMessage("Course added successfully ✅")

    // ✅ RESET FORM
    setCourse({
      title: "",
      instructor: "",
      price: "",
      category: "",
      image: "",
      description: ""
    })

  } catch (err) {
    console.error(err)
    setMessage("Error adding course ❌")
  }
}

return (

<div style={{
background:"linear-gradient(135deg,#eef2ff,#f8fafc)",
minHeight:"100vh",
display:"flex"
}}>

{/* SIDEBAR */}

<div style={{
width:"240px",
background:"linear-gradient(180deg,#1e293b,#0f172a)",
color:"white",
padding:"25px",
display:"flex",
flexDirection:"column",
justifyContent:"space-between"
}}>

<div>
<h2 style={{marginBottom:"40px"}}>EduCore</h2>

<p style={menuItem} onClick={()=>navigate("/admin")}>📊 Dashboard</p>
<p style={menuItem} onClick={()=>navigate("/courses")}>📚 Courses</p>
<p style={menuItem}>➕ Add Course</p>
<p style={menuItem}>👥 Users</p>
</div>

<div>
<hr style={{border:"0.5px solid #334155",margin:"20px 0"}} />

<button onClick={()=>navigate("/")} style={backBtn}>
← Back to Home
</button>
</div>

</div>

{/* FORM */}

<div style={{
flex:1,
padding:"40px",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}>

<form onSubmit={handleSubmit} style={{
width:"420px",
background:"white",
padding:"30px",
borderRadius:"16px",
boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
}}>

<h2 style={{fontSize:"26px",fontWeight:700,marginBottom:"10px"}}>
Add New Course
</h2>

<p style={{color:"#64748b",marginBottom:"20px"}}>
Create a new course for students
</p>

<input name="title" placeholder="Course Title" value={course.title} onChange={handleChange} style={inputStyle}/>
<input name="instructor" placeholder="Instructor Name" value={course.instructor} onChange={handleChange} style={inputStyle}/>
<input name="price" placeholder="Price (₹)" value={course.price} onChange={handleChange} style={inputStyle}/>

<select name="category" value={course.category} onChange={handleChange} style={inputStyle}>
<option value="">Select Category</option>
<option>Web Development</option>
<option>AI / ML</option>
<option>Design</option>
<option>Business</option>
</select>

<input name="image" placeholder="Image URL" value={course.image} onChange={handleChange} style={inputStyle}/>

<textarea name="description" placeholder="Course Description" value={course.description} onChange={handleChange} style={{
...inputStyle,
height:"80px"
}}/>

<p style={{color:"green",fontSize:"14px"}}>{message}</p>

<button style={{
width:"100%",
padding:"12px",
marginTop:"10px",
borderRadius:"10px",
border:"none",
background:"linear-gradient(135deg,#6366f1,#3b82f6)",
color:"white",
fontWeight:600,
cursor:"pointer"
}}>
Add Course
</button>

</form>

</div>

</div>

)

}

const inputStyle = {
width:"100%",
padding:"10px",
marginBottom:"10px",
borderRadius:"8px",
border:"1px solid #e2e8f0"
}

const menuItem = {
marginBottom:"15px",
cursor:"pointer",
opacity:0.85
}

const backBtn = {
width:"100%",
padding:"10px",
borderRadius:"10px",
border:"1px solid #334155",
background:"transparent",
color:"#cbd5f5",
cursor:"pointer"
}

export default AddCourse