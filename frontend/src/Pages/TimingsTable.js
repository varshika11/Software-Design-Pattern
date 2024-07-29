// src/Pages/TimingsTable.js
import React from 'react';
import { FaUserPlus, FaClock, FaUserMinus, FaExchangeAlt, FaFilter, FaDraftingCompass, FaClipboardList, FaPrint } from 'react-icons/fa';
import '../Assets/TimingsTable.css';

const employees = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Manager',
    imgUrl: 'https://b2092664.smushcdn.com/2092664/wp-content/uploads/2020/10/STAFF-Antoinette-Myers-Joyce@2x.png?lossy=0&strip=1&webp=1',
    color: '#FFB6C1', // light pink
    timings: [
      { day: 'Monday', startTime: '09:00 AM', endTime: '05:00 PM' },
      { day: 'Tuesday', startTime: '09:00 AM', endTime: '05:00 PM' },
      { day: 'Wednesday', startTime: '09:00 AM', endTime: '05:00 PM' },
      { day: 'Thursday', startTime: '09:00 AM', endTime: '05:00 PM' },
      { day: 'Friday', startTime: '09:00 AM', endTime: '05:00 PM' },
    ],
  },
  {
    id: 2,
    name: 'Bob Smith',
    role: 'Developer',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lQHH4lXf8gt-fEpRHuQPB4N8l5VgYHYezg&s',
    color: '#B0E0E6', // powder blue
    timings: [
      { day: 'Monday', startTime: '10:00 AM', endTime: '06:00 PM' },
      { day: 'Tuesday', startTime: '10:00 AM', endTime: '06:00 PM' },
      { day: 'Wednesday', startTime: '10:00 AM', endTime: '06:00 PM' },
      { day: 'Thursday', startTime: '10:00 AM', endTime: '06:00 PM' },
      { day: 'Friday', startTime: '10:00 AM', endTime: '06:00 PM' },
    ],
  },
  {
    id: 3,
    name: 'Charlie Brown',
    role: 'Designer',
    imgUrl: 'https://media.istockphoto.com/id/1145109341/photo/happy-mature-aged-man-in-backyard.jpg?s=612x612&w=0&k=20&c=Np3Bay6idcKsd_x8PCzJCvlof_I2eysAAKsZllclrdM=',
    color: '#FFDAB9', // peach puff
    timings: [
      { day: 'Monday', startTime: '11:00 AM', endTime: '07:00 PM' },
      { day: 'Tuesday', startTime: '11:00 AM', endTime: '07:00 PM' },
      { day: 'Wednesday', startTime: '11:00 AM', endTime: '07:00 PM' },
      { day: 'Thursday', startTime: '11:00 AM', endTime: '07:00 PM' },
      { day: 'Friday', startTime: '11:00 AM', endTime: '07:00 PM' },
    ],
  },
];

const TimingsTable = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <ul>
          <li>
            <FaUserPlus className="icon" />
            <span>Add Employee</span>
          </li>
          <li>
            <FaClock className="icon" />
            <span>Assign Times</span>
          </li>
          <li>
            <FaUserMinus className="icon" />
            <span>Remove Employee</span>
          </li>
          <li>
            <FaExchangeAlt className="icon" />
            <span>Swap Times</span>
          </li>
          <li>
            <FaFilter className="icon" />
            <span>Filter Positions</span>
          </li>
          <li>
            <FaDraftingCompass className="icon" />
            <span>Draft Shifts</span>
          </li>
          <li>
            <FaClipboardList className="icon" />
            <span>Positions Assigned</span>
          </li>
          <li>
            <FaPrint className="icon" />
            <span>Print Schedule</span>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Employee Schedules</h1>
        {employees.map((employee) => (
          <div key={employee.id} className="employee-section">
            <div className="employee-info">
              <img src={employee.imgUrl} alt={employee.name} className="employee-img" />
              <div className="employee-details">
                <h2>{employee.name}</h2>
                <p>{employee.role}</p>
              </div>
            </div>
            <table className="timings-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
              <tbody>
                {employee.timings.map((timing, index) => (
                  <tr key={index} style={{ backgroundColor: employee.color }}>
                    <td>{timing.day}</td>
                    <td>{timing.startTime}</td>
                    <td>{timing.endTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimingsTable;
