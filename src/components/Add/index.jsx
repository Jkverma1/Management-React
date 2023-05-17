import React, { useState } from "react";
import Header from "../common/Header";
import { nanoid } from "nanoid";
import "./Add.css";
import { Link } from "react-router-dom";
import data from "../../data.json";
import { ArrowLeft } from "react-bootstrap-icons";

const Add = () => {
  const [entries, setEntries] = useState(data);
  const [addSquirrelFormData, setAddSquirrelFormDdata] = useState({
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
    // team_ID: "",
    // team_name: "",
    // chat_channel_SID: "",
    // teamColor: "",
    // teamIcon: "",
  });
  const handleAddSquirrelFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addSquirrelFormData };
    newFormData[fieldName] = fieldValue;
    setAddSquirrelFormDdata(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newEntry = {
      id: nanoid(),
      squirrel_ID: addSquirrelFormData.squirrel_ID,
      update_timestamp: addSquirrelFormData.update_timestamp,
      call_handle: addSquirrelFormData.call_handle,
      latitude: addSquirrelFormData.latitude,
      longitude: addSquirrelFormData.longitude,
      location_description: addSquirrelFormData.location_description,
      user_name: addSquirrelFormData.user_name,
      telephone_number: addSquirrelFormData.telephone_number,
      color: addSquirrelFormData.color,
      icon: addSquirrelFormData.icon,
      user_SID: addSquirrelFormData.user_SID,
    };
    const newEntries = [...entries, newEntry];
    setEntries(newEntries);
  };
  return (
    <div>
      <Header Desc="Add Entry in Squirell Database" />
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
          <form onSubmit={handleAddFormSubmit} id="survey-form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label">squirrel_ID</label>
                  <input
                    type="text"
                    name="squirrel_ID"
                    id="squirrel_ID"
                    placeholder="Enter your squirrel_ID"
                    className="form-control"
                    onChange={handleAddSquirrelFormChange}
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
                    className="form-control"
                    onChange={handleAddSquirrelFormChange}
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
                    className="form-control"
                    onChange={handleAddSquirrelFormChange}
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
                    className="form-control"
                    onChange={handleAddSquirrelFormChange}
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
                    className="form-control"
                    onChange={handleAddSquirrelFormChange}
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
                    name="location_description"
                    onChange={handleAddSquirrelFormChange}
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
                    className="form-control"
                    onChange={handleAddSquirrelFormChange}
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
                    className="form-control"
                    onChange={handleAddSquirrelFormChange}
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
                    className="form-control"
                    onChange={handleAddSquirrelFormChange}
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
                    className="form-control"
                    onChange={handleAddSquirrelFormChange}
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
                    className="form-control"
                    onChange={handleAddSquirrelFormChange}
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

export default Add;
