import React from "react";
import { Link } from "react-router-dom";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const Home = ({deleteStudent}) => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:5001/')
    .then(res=>setStudents(res.data))
    .catch(err=>console.log(err))
  },[])

  // Delete a student
  

  
  
  return (
    <Container>
      <h2>Student Management Records</h2>
      <Stack spacing={2} direction='row'>
      <Link to="/add"><Button variant="contained" color="primary">Add Student</Button></Link>
      <Button variant="contained" color="primary" onClick={() => navigate('/teachers')}>Teachers List</Button>
      </Stack>
      <TableContainer style={{ marginTop: "30px" }} sx={{ maxHeight: 440 }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>
                <Stack direction="row" spacing={1} >
                  <Link to={`/view/${student.id}`}><Button variant="outlined">View</Button></Link>
                  <Link to={`/edit/${student._id}`}><Button variant="outlined" color="primary">Edit</Button></Link>
                  <Button variant="outlined" color="secondary" onClick={() => deleteStudent(student.id)}>Delete</Button>
                </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;
