import React from "react";
import './sidebar.css';

class Sidebar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  onClickCollapsed = () =>{
    this.setState({
      collapsed: !this.state.collapsed,
    });
    console.log("Collapse value changed:", this.state.collapsed);
  };

  render() {
    var isCollapsed = this.state.collapsed ? '-100%' : '0%';
    return (
      <div className="container-fluid">
        <div>
          <button type="button" className="btn btn-light btn-outline-dark" onClick={this.onClickCollapsed}  data-bs-toggle="collap" data-bs-target="#sideNav" aria-controls="sideNav" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
          </button>
          <div className="sidebar-collapse" style={{left: isCollapsed}} id="sideNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;