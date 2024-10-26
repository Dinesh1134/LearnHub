import React from 'react';
import './styles/StudentsData.css';

const StudentsData = ({ students, deleteStudent }) => {
  return (
    <div className='StudentsData'>
      <div className="StudentsData-container">
      {students.map((student, index) => (
        <div className="Students-detial" key={index}>
          <div className="student-name">
            <div className="initial">{student.name.charAt(0)}</div>
            <h3 className="fullname">{student.name}</h3>
          </div>
          <div className="students-info">
            <p><strong>Role:</strong> {student.role}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone Number:</strong> {student.phoneNumber}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Status:</strong> {student.status}</p>
          </div>
          <button onClick={() => deleteStudent(index)}>Delete</button>
        </div>
      ))}
      </div>
    </div>
    
  );
};

export default StudentsData;