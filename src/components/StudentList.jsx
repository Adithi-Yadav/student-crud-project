import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {

  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios.get("http://localhost:8080/students")
      .then(res => setStudents(res.data));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8080/students/${id}`)
      .then(fetchStudents);
  };

  return (
    <div>
      <h2>Student List</h2>

      {students.map(student => (
        <div key={student.id}>
          <p>{student.name} | {student.email} | {student.course}</p>
          <button onClick={()=>deleteStudent(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;