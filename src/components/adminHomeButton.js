import React, { Component } from "react";
import { Row, Col } from "antd";

import AdminButtons from "./adminButtons";

class AdminHomeButton extends Component {
  render() {
    const titles = [
      "Conference Room Booking",
      "Hospital Appointments",
      " Utilities Booking",
      "Check Hostel Complaints",
    ];
    const path = ["/conferencepage", "/", "/", "/"];
    const svgs = [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        className="bi bi-person-fill admin-icons"
        viewBox="0 0 16 16"
      >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>,
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        className="bi bi-calendar2-plus-fill admin-icons"
        viewBox="0 0 16 16"
      >
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 3.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5H2.545c-.3 0-.545.224-.545.5zm6.5 5a.5.5 0 0 0-1 0V10H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V11H10a.5.5 0 0 0 0-1H8.5V8.5z" />
      </svg>,
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        className="bi bi-speaker-fill admin-icons"
        viewBox="0 0 16 16"
      >
        <path d="M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-2.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
        <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
      </svg>,
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        className="bi bi-file-check-fill admin-icons"
        viewBox="0 0 16 16"
      >
        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1.146 6.854l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
      </svg>,
    ];
    const color = [
      "linear-gradient(130deg, #7d23d9, #9f40ff)",
      "linear-gradient(130deg, #d62d2d, #f05959)",
      "linear-gradient(130deg, #409bf7, #8ac4ff)",
      "linear-gradient(130deg, #e6bc1c, #ffd63d)",
    ];
    return (
      <div>
        <Row justify="center">
          <h1 style={{ margin: "20px 0px" }}>Welcome, Admin!</h1>
        </Row>
        {titles.map((title, index) => {
          return (
            <Row justify="center" key={index}>
              <AdminButtons
                title={title}
                path={path[index]}
                svgs={svgs[index]}
                color={color[index]}
              />
            </Row>
          );
        })}
      </div>
    );
  }
}

export default AdminHomeButton;
