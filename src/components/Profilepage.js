import "../style/Profilepage.css";
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

export default function Profilepage() {
  return (
    <section className="profile">
      <MDBCol lg="4" className="iniapa3">
        <MDBCard className="boxAvatar">
          <MDBCardBody className="picture">
            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle" style={{ width: "150px" }} fluid />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* kolom username---------- */}

      <MDBCardBody className="data">
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>User Name</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />

        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Email</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">example@example.com</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />

        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Password</MDBCardText>
          </MDBCol>
          <MDBCol sm="9" className="custom-9">
            <input type="password" className="text-muted-9" value="88888" readOnly />
          </MDBCol>
        </MDBRow>
        <hr />

        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Role</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">Fighter</MDBCardText>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </section>
  );
}
