import React, { useState, useEffect } from 'react';
import leaveServices from '../services/leaveServices'; 
import { Link } from 'react-router-dom';

const ListComponent = () => {
  const [leaves, setLeaves] = useState([]);
  const [error, setError] = useState(null);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    if (filterDate) {
      leaveServices.getFilteredLeave(filterDate)
        .then((response) => {
          setLeaves(response.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      leaveServices.getAllLeave()
        .then((response) => {
          setLeaves(response.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [filterDate]);

  const deleteLeave = (leaveId) => {
    leaveServices.deleteleave(leaveId)
      .then(() => {
        
        setLeaves((prevLeaves) => prevLeaves.filter((leave) => leave.id !== leaveId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  return (
    <div className="container">
      <h2 className="text-center">List Leaves</h2>
      {error && <div className="alert alert-danger">{error}</div>} 

      <div className="form-group">
        <label htmlFor="filterDate">Filter by Date:</label>
        <input
          type="date"
          id="filterDate"
          className="form-control"
          value={filterDate}
          onChange={handleFilterChange}
        />
      </div>

      <Link to="/add-leave" className="btn btn-primary mb-2">
        Add leave
      </Link>

      <div className="row" style={{ overflowY: 'scroll', maxHeight: '600px', paddingRight: '20px' }}>
        {leaves.map((leave) => (
          <div className="col-lg-4 col-md-6 mb-4" key={leave.id}>
            <div className="card custom-card">
              <div className="card-body">
                <h5 className="card-title">{leave.name}</h5>
                <p className="card-text">Job Position: {leave.jobposition}</p>
                <p className="card-text">Branch: {leave.branch}</p>
                <p className="card-text">Date: {new Date(leave.date).toLocaleDateString()}</p>
                <p className="card-text">Status: {leave.status}</p>
                <div className="d-flex justify-content-between align-items-center">
                <Link className="btn btn-info" to={`/edit-leave/${leave.id}`}>
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteLeave(leave.id)}
                    style={{ marginLeft: '10px' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListComponent;