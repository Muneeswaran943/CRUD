import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddEditStudent from "./components/AddEditStudent";
import ViewStudent from "./components/ViewStudent";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TeacherList from "./components/TeacherList";

const studentsData = [
  { id: 1, name: "John Doe", age: 20, course: "Computer Science" },
  { id: 2, name: "Jane Smith", age: 22, course: "Mathematics" },
];

const teachersData = [
  { id: 1, name: "Mr. Anderson", subject: "Physics" },
  { id: 2, name: "Ms. Johnson", subject: "Chemistry" },
];

const App = () => {
  const [students, setStudents] = useState(studentsData);
  const [teachers, setTeachers] = useState(teachersData);

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home students={students} deleteStudent={deleteStudent} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/teachers" element={<TeacherList teachers={teachers} />} />
        <Route path="/add" element={<AddEditStudent students={students} setStudents={setStudents} />} />
        <Route path="/edit/:id" element={<AddEditStudent students={students} setStudents={setStudents} />} />
        <Route path="/view/:id" element={<ViewStudent students={students} />} />
      </Routes>
    </Router>
  );
};

export default App;
