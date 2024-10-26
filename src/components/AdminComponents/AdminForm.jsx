import React, { useState } from 'react';
import './styles/AdminForm.css';

const AdminForm = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phoneNumber: '',
    course: '',
    status: 'Placed',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({ name: '', role: '', email: '', phoneNumber: '', course: '', status: 'Placed' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Fill This Form</h1>
        <div className="form-content">
          <div className="form-holder">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-holder">
            <label htmlFor="role">Role:</label>
            <input type="text" id="role" placeholder="Enter your role" value={formData.role} onChange={handleChange} />
          </div>
          <div className="form-holder">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-holder">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div className="form-holder">
            <label htmlFor="course">Course:</label>
            <select id="course" value={formData.course} onChange={handleChange}>
              <option value="">Select a course</option>
              <option value="React Basics">React Basics</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Javascript Fundamentals">Javascript Fundamentals</option>
              <option value="Advanced CSS">Advanced CSS</option>
              <option value="Backend Development">Backend Development</option>
            </select>
          </div>
          <div className="form-holder">
            <label htmlFor="status">Status:</label>
            <select id="status" value={formData.status} onChange={handleChange}>
              <option value="Placed">Placed</option>
              <option value="Unplaced">Unplaced</option>
            </select>
          </div>
        </div>
        <div className="form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;