import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Profilepage.css";
import profile from "../assets/ilham-img/aaron-williams.jpg";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "./lib/axios";
import NavbarHome from "./navbarHome";

export default function Profilepage() {
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("/api/auth/token");
      console.log(response);
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setId(decoded.userId);
      setusername(decoded.username);
      setemail(decoded.email);
    } catch (error) {}
  };
  return (
    <>
      <NavbarHome />

      <div className="container mt-5 align-items-center d-flex justify-content-evenly">
        <div className="d-flex column justify-content-evenly align-items-center">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-self-center text-center">
                  <img
                    src={profile}
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                  />
                  <div className="mt-3">
                    <h4>{username}</h4>
                    <p className="text-secondary mb-1">Gamers</p>
                    <p className="text-muted font-size-sm">
                      Bay Area, San Francisco, CA
                    </p>
                    <button className="btn btn-primary">Follow</button>
                    <button className="btn btn-outline-primary">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="row mb-3">
                <div className="">
                  <h6 className="mb-2">UserId</h6>
                </div>
                <input type="integer" className="form-control" value={id} />
              </div>
              <div className="row mb-3">
                <div className="">
                  <h6 className="mb-2">Username</h6>
                </div>
                <input type="text" className="form-control" value={username} />
              </div>
              <div className="row mb-3">
                <div className="">
                  <h6 className="mb-2">Email</h6>
                </div>
                <input type="email" className="form-control" value={email} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
