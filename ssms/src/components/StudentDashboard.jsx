// src/components/StudentDashboard.js


import React from 'react';
import { useLocation } from 'react-router-dom';
import VotingPage from './VotingPage';
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const location = useLocation();
  const { name, studentId, semester } = location.state || {};

  console.log("Student ID  :", studentId);


  return (
   <>
    <div>

    <Link
      to={{
        pathname: '/votingPage', // Adjust the pathname as per your setup
        search: `?studentId=${studentId}`,
      }}
    >
      Go to Voting Page
    </Link>
      
      </div>
      <div>
        <h2>Student Dashboard</h2>
        <p>Name: {name}</p>
        <p>Student ID: {studentId}</p>
        <p>Semester: {semester}</p>
  
  
      </div>
   </>
  );
};

export default StudentDashboard;
