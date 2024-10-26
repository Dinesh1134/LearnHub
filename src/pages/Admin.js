import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminForm from '../components/AdminComponents/AdminForm';
import StudentsData from '../components/AdminComponents/StudentsData';
import './styles/Admin.css'

const Admin = ({ addStudent, deleteStudent, students }) => {
  return (
    <div>
      <Header />
      <main className="Admin-page">
        <AdminForm addStudent={addStudent} />
        <StudentsData students={students} deleteStudent={deleteStudent} />
      </main>
      <Footer />
    </div>
  );
};

export default Admin;