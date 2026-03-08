import React from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Student Management System</h1>

      <AddStudent refresh={refresh}/>
      <StudentList />

    </div>
  );
}

export default App;