import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:8081/update/"+id, {name, email })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <lable htmlFor="">Name</lable>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <lable htmlFor="">Email</lable>
            <input
              type="emial"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};
export default UpdateStudent;
