import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import leaveServices from '../services/leaveServices';


export default function RegisterLeave() {
    const [name, setname] = useState('');
    const [jobposition, setjobposition] = useState('');
    const [branch, setbranch] = useState('');
    const [date, setdate] = useState('');
    
    const navigate = useNavigate();
    const { id } = useParams(); 
  
    const saveleave = (e) => {
      e.preventDefault();
      const leave = { name,jobposition,branch,date};
      if (id) {
       leaveServices.updateleave(id, leave)
          .then((response) => {
            console.log(response.data);
            navigate('/leave');
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        leaveServices.createleave(leave)
          .then((response) => {
            console.log(response.data);
            navigate('/leave');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    
  
    useEffect(() => {
      if (id) {
         
        leaveServices.getleaveById(id)
          .then((response) => {
            setname(response.data.name);
            setjobposition(response.data.jobposition);
            setbranch(response.data.branch);
            setdate(response.data.date);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [id]);
  
    const title = () => {
      if (id) {
        return <h2 className="text-center">Update Leave</h2>;
      } else {
        return <h2 className="text-center">Add Leave</h2>;
      }
    };
  
    return (
      <div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {title()}
  
              <div className="card-body">
                <form>
                  <div className="form-group mb-2">
                    <label className="form-label">Name :</label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
  
                  <div className="form-group mb-2">
                    <label className="form-label"> Occupation :</label>
                    <input
                      type="text"
                      placeholder="Enter Occcupation"
                      name="jobposition"
                      className="form-control"
                      value={jobposition}
                      onChange={(e) => setjobposition(e.target.value)}
                    />
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label"> Branch :</label>
                    <input
                      type="text"
                      placeholder="Enter Occcupation"
                      name="branch"
                      className="form-control"
                      value={branch}
                      onChange={(e) => setbranch(e.target.value)}
                    />
                  </div>


                  <div className="form-group mb-2">
                    <label className="form-label"> Leave Date :</label>
                    <input
                      type="Date"
                      placeholder="Enter leave date"
                      name="date"
                      className="form-control"
                      value={date}
                      onChange={(e) => setdate(e.target.value)}

                    />
                  </div>
  
                  <button className="btn btn-success" onClick={(e) => saveleave(e)}>
                  Save
                  </button>
                  <Link to="/leave" className="btn btn-danger">
                    Cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  