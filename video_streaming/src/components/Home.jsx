import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import VideoStream from "./VideoStream";
import AudioRecorder from "./AudioRecorder";
import TextMessage from "./TextMessage";

const Home = ({ Toggle }) => {
  const navigate = useNavigate();

  const handleCameraClick = (e) => {
    if (e.target.id !== "speaker-button") {
      navigate("/fullscreen");
    }
  };

  return (
    <div className="px-3 bg-secondary">
      <Navbar Toggle={Toggle} />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-6 p-1" onClick={handleCameraClick}>
            <div
              className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center"
              style={{ height: "50vh", cursor: "pointer", overflow: "hidden" }}
            >
              <VideoStream />
              <div style={{ display: "flex", gap: "8px", zIndex: 2, position: "relative" }}>
                <AudioRecorder id="1" />
                <TextMessage id="1"/>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-1" onClick={handleCameraClick}>
            <div
              className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center"
              style={{ height: "50vh", cursor: "pointer", overflow: "hidden" }}
            >
              <VideoStream />
              <div style={{ display: "flex", gap: "8px" }}>
                <AudioRecorder id="2" />
                <TextMessage id="2"/>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-md-6 p-1" onClick={handleCameraClick}>
            <div
              className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center"
              style={{ height: "50vh", cursor: "pointer", overflow: "hidden" }}
            >
              <VideoStream />
              <div style={{ display: "flex", gap: "8px" }}>
                <AudioRecorder id="3" />
                <TextMessage id="3"/>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-1" onClick={handleCameraClick}>
            <div
              className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center"
              style={{ height: "50vh", cursor: "pointer", overflow: "hidden" }}
            >
              <VideoStream />
              <div style={{ display: "flex", gap: "8px" }}>
                <AudioRecorder id="4" />
                <TextMessage id="4" />
              </div>
            </div>
          </div>
        </div>
        <table className="table caption-top bg-white rounded mt-2">
          <caption className="text-white fs-4">Recent Orders</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
