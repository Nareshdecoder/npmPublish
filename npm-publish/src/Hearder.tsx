import React, { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { removeToSession } from "./sessionStorage";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const NavLinkRef = useRef<HTMLDivElement>(null);
  let navigate = useNavigate();
  const handleLogout = () => {
    removeToSession("loggedData");
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <div>
              <Navbar.Brand href="#home">Voyaging</Navbar.Brand>
            </div>
            <div className="d-flex justify-content-between">
              <Nav className="me-auto gap-4">
                <Nav.Link
                  href="/home"
                  className={
                    location.pathname === "/home"
                      ? "text-white active"
                      : "text-white"
                  }
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  className={
                    location.pathname === "/about"
                      ? "text-white active"
                      : "text-white"
                  }
                >
                  About
                </Nav.Link>

                <Nav.Link
                  href="/trips"
                  className={
                    location.pathname === "/trips"
                      ? "text-white active"
                      : "text-white"
                  }
                >
                  Trips
                </Nav.Link>

                <Button
                  title={"Logout"}
                  className={"text-white bg-primary"}
                  onClick={() => handleLogout()}
                />
              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
