import React from "react";

import "./home.css";

export default function Heading({ user, exam }) {
  return (
    <div>
      {exam && (
        <div className="__main_container">
          <div className="container is-widescreen heading_box __padding20">
            <div className="columns">
              <div className="column is-three-quarters">
                <div className="__bold_white">Hey {user.firstname},</div>
                <div className="__whiteText" style={{ marginTop: -5 }}>
                  See how you're doing with your {exam.name} preparations 👇🏾
                </div>
              </div>
              <div className="column">
                <img
                  src="https://topset.ng/wp-content/uploads/2021/03/report-card.svg"
                  alt="report_image"
                  height="200px"
                  width="200px"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
