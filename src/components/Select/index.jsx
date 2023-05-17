import React from "react";
import "./select.css";
import "./bootstrap.min.css";
import { Link } from "react-router-dom";

const Select = () => {
  return (
    <div>
      <div className="center-div row mt-5">
        <div className="col-md-6 text-center">
          <div className="mb-3">
            <img className="staticSquirrel" src="./squirrel.jpg" alt="" />
            <img className="squirrelRun" src="./squirrel.gif" alt="" />
          </div>
          <Link to="/squirrels">
            <button className="btn btn-primary squirrelBtn">
              Squirrel Database
            </button>
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <div className="mb-3">
            <img class="staticTeam" src="./team.jpg" alt="" />
            <img className="teamMember" src="./team.gif" alt="" />
          </div>
          <Link to="/teams">
            <button className="btn btn-primary">Team Database</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Select;
