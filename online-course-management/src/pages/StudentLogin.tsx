import Navbar from "../components/navbar"

function StudentLogin(){

 return(

  <div>

   <Navbar/>

   <div style={{
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     height:"80vh"
   }}>

    <div style={{
      width:"360px",
      padding:"40px",
      background:"#fff",
      borderRadius:"16px",
      boxShadow:"0 10px 30px rgba(0,0,0,0.05)"
    }}>

     <h2 style={{marginBottom:"20px"}}>
       Login
     </h2>

     <input placeholder="Email"
      style={{
       width:"100%",
       padding:"12px",
       marginBottom:"12px",
       borderRadius:"8px",
       border:"1px solid #e2e8f0"
      }}
     />

     <input placeholder="Password"
      type="password"
      style={{
       width:"100%",
       padding:"12px",
       marginBottom:"20px",
       borderRadius:"8px",
       border:"1px solid #e2e8f0"
      }}
     />

     <button style={{
      width:"100%",
      padding:"12px",
      borderRadius:"10px",
      border:"none",
      background:"#4F46E5",
      color:"white"
     }}>
      Login
     </button>

    </div>

   </div>

  </div>

 )

}

export default StudentLogin