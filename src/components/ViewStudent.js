import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Button } from "@mui/material";

const ViewStudent = ({ students }) => {
  const { id } = useParams();
  const student = students.find((s) => s.id === Number(id));
  
  if (!student) return <Container><h2>Student Not Found</h2></Container>;

  return (
    <Container>
      <h2>Student Details</h2>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <Link to="/"><Button variant="contained">Back to Home</Button></Link>
    </Container>
  );
};

export default ViewStudent;
