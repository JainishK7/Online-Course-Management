import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register"
import StudentLogin from "./pages/StudentLogin";
import AdminLogin from "./pages/AdminLogin";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Courses from "./pages/Courses";
import MyCourses from "./pages/MyCourses";
import AddCourse from "./pages/AddCourse";
import Profile from "./pages/Profile";
import Progress from "./pages/Progress";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/register" element={<Register />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/add-course" element={<AddCourse />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;