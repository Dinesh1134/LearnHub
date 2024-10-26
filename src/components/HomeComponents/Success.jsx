import React from 'react';
import './styles/Success.css';

const Success = ({ students }) => {
  const totalStudents = students.length;
  const placedStudents = students.filter(student => student.status === 'Placed').length;
  const unplacedStudents = students.filter(student => student.status === 'Unplaced').length;

  return (
    <div className='Success'>
      <div className='success-container'>
        <div className='success-content'>
          <div className='journey'>
            <h1>
              <p>Empower your future with cutting-edge skills</p>
              <span>New, Embrace innovation, master technology, & shape the digital world</span>
              <p>Your journey to success starts here.</p>
            </h1>
          </div>
          <div className='placement-record'>
            <p>Join our course with a proven track record of success, where learning isn't just about gaining skills; it's about growing them. Join us, learn with confidence, and watch your skills soar.</p>
            <div className='records'>
              <div className='total-student'>
                <div className='total-div'>
                  <div className='total'>Total Students</div>
                  <p>{totalStudents}</p>
                </div>
              </div>

              <div className='placed-students'>
                <div className='placed-div'>
                  <div className='placed'>Placed Students</div>
                  <p>{placedStudents}</p>
                </div>
              </div>

              <div className='unplaced-students'>
                <div className='unplaced-div'>
                  <div className='unplaced'>Unplaced Students</div>
                  <p>{unplacedStudents}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;