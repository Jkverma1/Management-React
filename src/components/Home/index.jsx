import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import "./home.css";
import { PencilSquare, Trash, ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import data from "../../data.json";
const Home = () => {
  let API = "http://localhost:8000/squirrel";
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  const [entries, setEntries] = useState(data);
  // const [addSquirrelFormData, setAddSquirrelFormDdata] = useState({
  //   squirrel_ID: "",
  //   update_timestamp: "",
  //   call_handle: "",
  //   latitude: "",
  //   longitude: "",
  //   location_description: "",
  //   user_name: "",
  //   telephone_number: "",
  //   color: "",
  //   icon: "",
  //   user_SID: "",
  // });

  // const handleAddSquirrelFormChange = (event) => {
  //   event.preventDefault();
  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;
  //   const newFormData = { ...addSquirrelFormData };
  //   newFormData[fieldName] = fieldValue;
  //   setAddSquirrelFormDdata(newFormData);
  // };

  // const handleAddFormSubmit = (event) => {
  //   event.preventDefault();
  //   const newEntry = {
  //     id: nanoid(),
  //     squirrel_ID: addSquirrelFormData.squirrel_ID,
  //     update_timestamp: addSquirrelFormData.update_timestamp,
  //     call_handle: addSquirrelFormData.call_handle,
  //     latitude: addSquirrelFormData.latitude,
  //     longitude: addSquirrelFormData.longitude,
  //     location_description: addSquirrelFormData.location_description,
  //     user_name: addSquirrelFormData.user_name,
  //     telephone_number: addSquirrelFormData.telephone_number,
  //     color: addSquirrelFormData.color,
  //     icon: addSquirrelFormData.icon,
  //     user_SID: addSquirrelFormData.user_SID,
  //   };
  //   const newEntries = [...entries, newEntry];
  //   setEntries(newEntries);
  //   console.log(newEntries);
  // };

  const handleDeleteClick = (entryId) => {
    console.log(entryId);
    // const newEntries = [...entries];
    // const index = entries.findIndex((entry) => entry.id === entryId);
    // entries.splice(index, 1);
    // setEntries(newEntries);
  };

  return (
    <div>
      <Header Desc="Read Data From Squirel Database" />
      <div className="container btn-container">
        <Link to="/squirrels/add">
          <button className="Add-btn">Add Squirrel Data</button>
        </Link>
        <Link to='/'>
        <button className="Add-btn">
          <ArrowLeft />
          Back
        </button>
        </Link>
        
      </div>
      <div className="container table-responsive">
        <table className="table table-hover table-collapse">
          <thead className="thead-color">
            <tr>
              <th scope="col">squirrel_ID</th>
              <th scope="col">update_timestamp</th>
              <th scope="col">call_handle</th>
              <th scope="col">latitude</th>
              <th scope="col">longitude</th>
              <th scope="col">location_description</th>
              <th scope="col">user_name</th>
              <th scope="col">telephone_number</th>
              <th scope="col">color</th>
              <th scope="col">icon</th>
              <th scope="col">user_SID</th>
              <th scope="col">team_ID</th>
              <th scope="col">team_name</th>
              <th scope="col">chat_channel_SID</th>
              <th scope="col">color</th>
              <th scope="col">icon</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr>
                <td>{entry.squirrel_ID}</td>
                <td>{entry.update_timestamp}</td>
                <td>{entry.call_handle}</td>
                <td>{entry.latitude}</td>
                <td>{entry.longitude}</td>
                <td>{entry.location_description}</td>
                <td>{entry.user_name}</td>
                <td>{entry.telephone_number}</td>
                <td>{entry.color}</td>
                <td>{entry.icon}</td>
                <td>{entry.user_SID}</td>
                <td>{entry.team_ID}</td>
                <td>{entry.team_name}</td>
                <td>{entry.chat_channel_SID}</td>
                <td>{entry.teamColor}</td>
                <td>{entry.teamIcon}</td>
                <td className="ActionCell">
                  <Link to="/squirrels/update">
                    <button className="Action-btn">
                      <PencilSquare />
                    </button>
                  </Link>
                  <button
                    className="Action-btn"
                    onClick={() => handleDeleteClick(entry.squirrel_ID)}
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
