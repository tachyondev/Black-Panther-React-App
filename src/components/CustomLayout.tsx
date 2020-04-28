import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./CustomLayout.css";

class CustomLayout extends Component {
  render() {
    return (
      <div className="content-base">
        <div className="content-grid-layer">
          <div className="content-first-col">
            <div className="content-first-menu-icon-parent">
              <FontAwesomeIcon className="menu-icon" icon={faBars} />
            </div>
            <div className="content-first-author-social-media">
              <h3 className="author-social-media-text">
                Instagram: @Kaarbhaari
              </h3>
            </div>
            <div className="content-first-author-name">
              <h3 className="author-name-text">Akshay Shelar</h3>
            </div>
          </div>
          <div className="content-second-col"></div>
          <div className="content-second-text-layout">
            <h1 className="title">BLACK</h1>
            <h1 className="title-sub">PANTHER</h1>
          </div>
          <div className="content-third-col">
            <div className="nav-holder">
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Nav.Link className="nav-items">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-items">Wakanda</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-items">Vibrenium</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-items">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="divider-holder">
              <div className="divider"></div>
            </div>
            <div className="way-to-button-holder">
              <Button className="way-button" variant="warning">
                Way to Wakanda
              </Button>{" "}
            </div>
          </div>
        </div>
        <div className="content-image-layer"></div>
      </div>
    );
  }
}

export default CustomLayout;
