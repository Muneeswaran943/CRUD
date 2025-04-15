import React, { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const TeacherList = () => {
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([
        { id: 1, name: "Mr. Anderson", subject: "Physics" },
        { id: 2, name: "Ms. Johnson", subject: "Chemistry" },
      ]);
  const [open, setOpen] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState({ id: null, name: "", subject: "" });

  const handleOpen = (teacher = { id: null, name: "", subject: "" }) => {
    setCurrentTeacher(teacher);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (currentTeacher.id) {
      setTeachers(
        teachers.map((t) => (t.id === currentTeacher.id ? currentTeacher : t))
      );
    } else {
      setTeachers([...teachers, { ...currentTeacher, id: teachers.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter((t) => t.id !== id));
  };
  return (
    <Container>
      <h2>Teachers List</h2>
      <Stack spacing={2} direction='row'>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>Add Teacher</Button>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>Students List</Button>
      </Stack>
      <TableContainer component={Paper} style={{ marginTop: 20}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.id}</TableCell>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>
                  <Button color="primary" onClick={() => handleOpen(teacher)}>Edit</Button>
                  <Button color="secondary" onClick={() => handleDelete(teacher.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentTeacher.id ? "Edit Teacher":"Add Teacher"}</DialogTitle>
            <DialogContent>
            <TextField label="Name" fullWidth margin="dense" value={currentTeacher.name} onChange={(e)=>setCurrentTeacher({...currentTeacher,name:e.target.value})}/>
            <TextField label="Subject" fullWidth margin="dense" value={currentTeacher.subject} onChange={(e)=>setCurrentTeacher({...currentTeacher,subject:e.target.value})}/>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="secondary">Cancel</Button>
            <Button onClick={handleSave} color="primary">Save</Button>
            </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TeacherList;
