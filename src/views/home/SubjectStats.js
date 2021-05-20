import React from "react";
import { useHistory } from "react-router-dom";
import userStatsService from "../../services/userStatsService";
import { useStateValue } from "../../StateProvider";

export default function SubjectStats({
  user,
  subjects,
  exam,
  completed_lessons,
}) {
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const handleSelect = async (e) => {
    subjects.forEach((subject) => {
      if (subject._id === e.target.id) {
        console.log("setting subject", e.target.id);
        dispatch({
          type: "SET_ACTIVE_SUBJECT",
          active_subject: subject,
        });
        // send new active topic to server
        userStatsService.sendActiveSubjectToServer(
          user._id,
          exam._id,
          subject._id
        );
        history.push(
          `learn/${exam.name.replace(/\W+/g, "-").toLowerCase()}/${subject.name
            .replace(/\W+/g, "-")
            .toLowerCase()}`
        );
      }
    });
  };

  return (
    <div>
      {subjects && (
        <div className="__main_card_container">
          <div className="__subject_stats_container">
            <div className="container is-widescreen">
              <div className="columns is-multiline is-desktop">
                {subjects.map((subject) => (
                  <div
                    className="column is-one-third __subject_box"
                    key={subject._id}
                    onClick={handleSelect}
                    id={subject._id}
                  >
                    {/* <Link
                      to={`learn/${exam.name
                        .replace(/\W+/g, "-")
                        .toLowerCase()}/${subject.name
                        .replace(/\W+/g, "-")
                        .toLowerCase()}`}
                    > */}
                    <div
                      className="__card_header"
                      style={{ pointerEvents: "none" }}
                    >
                      {subject.name}
                    </div>
                    <div
                      className="__card_body"
                      style={{ pointerEvents: "none" }}
                    >
                      <img
                        src={subject.image_src}
                        alt="report_image"
                        height="200px"
                        width="200px"
                      />
                      <div className="__xp" style={{ pointerEvents: "none" }}>
                        <img
                          src="https://topset.ng/wp-content/uploads/2021/03/medal.svg"
                          alt="medal"
                          height="25px"
                          width="25px"
                        />
                        <div
                          className="__xp_value"
                          style={{ pointerEvents: "none" }}
                        >
                          {subject.completed_lessons.length * 100} XP
                        </div>
                      </div>
                      <div style={{ marginTop: 10, pointerEvents: "none" }}>
                        <div>
                          Lessons completed: {subject.completed_lessons.length}
                        </div>
                        <div>
                          Sections completed:{" "}
                          {subject.completed_sections.length}
                        </div>
                        <div>
                          Topics completed: {subject.completed_topics.length}
                        </div>
                      </div>
                      <div
                        className="__continue"
                        style={{ pointerEvents: "none" }}
                      >
                        Continue
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
