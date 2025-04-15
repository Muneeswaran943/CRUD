import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, TextField, Button } from "@mui/material";
import axios from "axios";

const AddEditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const [student, setStudent] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
  });

  // Fetch existing student when editing
  // useEffect(() => {
  //   if (isEditing) {
  //     axios.get(`http://localhost:5001/students/${id}`)
  //       .then((res) => setStudent(res.data))
  //       .catch((err) => console.error("Failed to fetch student", err));
  //   }
  // }, [id, isEditing]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:5001/update/${id}`, student);
      } else {
        await axios.post("http://localhost:5001/add", student);
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving student", error);
    }
  };

  return (
    <Container>
      <h2>{isEditing ? "Edit" : "Add"} Student</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="ID"
          name="id"
          type="number"
          value={student.id}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          disabled={isEditing}
        />
        <TextField
          label="Name"
          name="name"
          value={student.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={student.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Course"
          name="course"
          value={student.course}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          {isEditing ? "Update" : "Add"} Student
        </Button>
      </form>
    </Container>
  );
};

export default AddEditStudent;
