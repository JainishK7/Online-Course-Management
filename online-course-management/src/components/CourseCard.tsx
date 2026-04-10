import { useNavigate } from "react-router-dom"

function CourseCard({ _id, title, instructor, image, rating, students, price }: any){

const navigate = useNavigate()

// ⭐ GENERATE STARS
const renderStars = () => {
  const stars = []
  for(let i=1;i<=5;i++){
    stars.push(
      <span key={i} style={{
        color: i <= Math.round(rating) ? "#f59e0b" : "#e5e7eb",
        fontSize:"14px"
      }}>
        ★
      </span>
    )
  }
  return stars
}

return(

<div style={{
width:"260px",
borderRadius:"14px",
overflow:"hidden",
boxShadow:"0 10px 25px rgba(0,0,0,0.08)",
cursor:"pointer",
transition:"0.3s",
background:"##FFFFFF",
color:"white",
border:"1px solid #1e293b"
}}

onClick={()=>navigate(`/course/${_id || title}`)}

onMouseEnter={(e:any)=> e.currentTarget.style.transform="translateY(-6px)"}
onMouseLeave={(e:any)=> e.currentTarget.style.transform="translateY(0)"}
>

<img src={image} style={{
width:"100%",
height:"150px",
objectFit:"cover"
}}/>

<div style={{padding:"15px"}}>

<h3 style={{fontSize:"16px",fontWeight:600}}>{title}</h3>

<p style={{fontSize:"13px",color:"#64748b"}}>{instructor}</p>

{/* ⭐ STARS */}
<div style={{display:"flex",alignItems:"center",gap:"4px",margin:"6px 0"}}>
{renderStars()}
<span style={{marginLeft:"5px",fontSize:"13px"}}>{rating}</span>
</div>

<p style={{fontSize:"12px",color:"#64748b"}}>
👨‍🎓 {students} students
</p>

<p style={{
marginTop:"8px",
fontWeight:700,
fontSize:"16px",
color:"#16a34a"
}}>
₹{price}
</p>

</div>

</div>

)

}

export default CourseCard