import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';

const App = () => {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const deleteStudent = (index) => {
    setStudents((prevStudents) => prevStudents.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element = {
          <Home students={students} />
        }/>
        <Route path="/admin" element= {
          <Admin addStudent={addStudent} deleteStudent={deleteStudent} students={students} />
        } />
      </Routes>
    </Router>
  );
};

export default App;