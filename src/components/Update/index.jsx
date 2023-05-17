import React, { useState } from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import axios from "axios";

const Update = () => {
  const [squirrelFormData, setSquirrelFormDdata] = useState({
    squirrel_ID: "",
    update_timestamp: "",
    call_handle: "",
    latitude: "",
    longitude: "",
    location_description: "",
    user_name: "",
    telephone_number: "",
    color: "",
    icon: "",
    user_SID: "",
  });
  const handleUpdateFormChange = (event) => {
    event.preventDefault();
    setSquirrelFormDdata({
      ...squirrelFormData,
      [event.target.getAttribute("name")]: event.target.value,
    });
  };

  const handleUpdateFormSubmit = (event) => {
    event.preventDefault();
    console.log(squirrelFormData);
    axios
      .post("http://localhost:8000/result", { squirrelFormData })
      .then((response) => console.log(response))
      .then((err) => console.log(err));
  };

  return (
    <div>
      <Header Desc="Update Data in Squirel Database" />
      <div className="container">
        <Link to="/squirrels">
          <div className="back-btn-container">
            <button className="Add-btn">
              <ArrowLeft />
              Back
            </button>
          </div>
        </Link>
      </div>
      <div className="container mt-120">
        <div className="form-wrap">
          <form id="survey-form" onSubmit={handleUpdateFormSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label">squirrel_ID</label>
                  <input
                    type="text"
                    name="squirrel_ID"
                    id="squirrel_ID"
                    onChange={handleUpdateFormChange}
                    placeholder="Enter your squirrel_ID"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="email-label">update_timestamp</label>
                  <input
                    type="date"
                    name="update_timestamp"
                    id="update_timestamp"
                    onChange={handleUpdateFormChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label id="number-label">call_handle</label>
                  <input
                    type="text"
                    name="call_handle"
                    id="call_handle"
                    onChange={handleUpdateFormChange}
                    className="form-control"
                    placeholder="call_handle"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>latitude</label>
                  <input
                    type="text"
                    name="latitude"
                    id="latitude"
                    onChange={handleUpdateFormChange}
                    className="form-control"
                    placeholder="latitude"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>longitude</label>
                  <input
                    type="text"
                    name="longitude"
                    id="longitude"
                    onChange={handleUpdateFormChange}
                    className="form-control"
                    placeholder="longitude"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>location_description</label>
                  <textarea
                    id="location_description"
                    className="form-control"
                    onChange={handleUpdateFormChange}
                    name="location_description"
                    placeholder="location description here..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>user_name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    onChange={handleUpdateFormChange}
                    className="form-control"
                    placeholder="user_name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>telephone_number</label>
                  <input
                    type="text"
                    name="telephone_number"
                    id="telephone_number"
                    onChange={handleUpdateFormChange}
                    className="form-control"
                    placeholder="telephone_number"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>color</label>
                  <input
                    type="text"
                    name="color"
                    id="color"
                    onChange={handleUpdateFormChange}
                    className="form-control"
                    placeholder="color"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>icon</label>
                  <input
                    type="text"
                    name="telephone_number"
                    id="telephone_number"
                    onChange={handleUpdateFormChange}
                    className="form-control"
                    placeholder="telephone_number"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>user_SID</label>
                  <input
                    type="text"
                    name="user_SID"
                    id="user_SID"
                    onChange={handleUpdateFormChange}
                    className="form-control"
                    placeholder="user_SID"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <button
                  type="submit"
                  id="submit"
                  className="btn btn-primary btn-block"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
