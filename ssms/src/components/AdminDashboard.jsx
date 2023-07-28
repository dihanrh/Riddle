// src/components/AdminDashboard.js

import React, { useState } from "react";
import { Link } from "react-router-dom";


// CreateElection Component

const CreateElection = () => {
  const [electionTitle, setElectionTitle] = useState("");
  const [positionName, setPositionName] = useState("");
  const [amountOfCandidates, setAmountOfCandidates] = useState("");
  const [votingDuration, setVotingDuration] = useState("");

  const handleVotingDurationChange = (event) => {
    setVotingDuration(event.target.value);
  };

  const handleSaveAndNext = () => {
    // Add validation to check if all text fields are filled before proceeding
    if (electionTitle && positionName && amountOfCandidates && votingDuration) {
      // Save the election information and redirect to the next page
      // For now, let's just console.log the data
      console.log("Election Title:", electionTitle);
      console.log("Position Name:", positionName);
      console.log("Amount of Candidates:", amountOfCandidates);
      console.log("Voting Duration:", votingDuration);

      // Redirect to the next page (Candidate Information Page)
      // Replace "/candidateInformation" with the correct path to the next page
      // For example, if the path for the candidate information page is "/candidate-info", replace it accordingly
      // history.push("/candidateInformation"); // You'll need to import useHistory from react-router-dom to use this
    } else {
      alert("Please fill all the fields before proceeding.");
    }
  };

  return (
    <div>
      <h2>Election Information</h2>
      <form>
        <div>
          <label>Election Title:</label>
          <input
            type="text"
            value={electionTitle}
            onChange={(e) => setElectionTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Position Name:</label>
          <input
            type="text"
            value={positionName}
            onChange={(e) => setPositionName(e.target.value)}
          />
        </div>
        <div>
          <label>Amount of Candidates:</label>
          <input
            type="number"
            value={amountOfCandidates}
            onChange={(e) => setAmountOfCandidates(e.target.value)}
          />
        </div>
        <div>
          <label>Voting Duration:</label>
          <input
            type="text"
            value={votingDuration}
            onChange={handleVotingDurationChange}
          />
          {/* Implement the popup with time selection menu */}
          {/* For now, let's just display the selected value */}
          <div>Selected Duration: {votingDuration}</div>
        </div>
        <button type="button" onClick={handleSaveAndNext}>
          Save and Next
        </button>
      </form>
    </div>
  );
};



// Clicking on "Create Election" will call "CreateElection" component

const CreateElectionDropdown = () => {
  // State to manage the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="dropdown">
      {/* CreateElection button */}
      <button onClick={toggleDropdown}>Create Election</button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <ul>
          <li>
            <CreateElection/>
          </li>
        </ul>
      )}
    </div>
  );
};



const AdminDashboard = () => {
  const [pendingRegistrations, setPendingRegistrations] = useState([]);

  // Replace this with actual logic to fetch pending registrations from the server
  // For demonstration purposes, we are using a sample array
  

  const handleApproval = (id) => {
    // Add your logic to approve the registration with the given ID
    // You may need to make an API call to update the status on the server
    // For this example, we will simply remove the registration from the list
    setPendingRegistrations((prevRegistrations) =>
      prevRegistrations.filter((reg) => reg.id !== id)
    );
  };

  // pros driling 

  return (
    <div className="adminDiv">
    
      <h2>Admin Dashboard</h2>

      <ul className="adminUl">
          <li className="CreateElectionDropdown">
         <CreateElectionDropdown/> 
          </li>
          <li className="currentElections" >
            <Link to="/currentElections">Current Elections</Link>
          </li>
          <li className="disableEVoting">
            <Link to="/disableEVoting">Disable E-Voting</Link>
          </li>
          <li className="publishResult">
            <Link to="/publishResult">Publish Result</Link>
          </li>
        </ul>
     
    </div>
  );
};

export default AdminDashboard;
