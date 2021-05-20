import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import SplashScreen from "../../../components/SplashScreen";
import GetUserSubjects from "../../../queries/GetUserSubjects";
import server from "../../../configs/Urls";

export default function Session(props) {
  const [
    {
      user,
      exam,
      subjects,
      active_topic,
      active_section,
      active_subject,
      completed_lessons,
      completed_sections,
      completed_topics,
    },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    if (subjects) {
      let uri_subject = subjects.filter((subject) => {
        return subject.slug === props.match.params.subject;
      });
      dispatch({
        type: "SET_ACTIVE_SUBJECT",
        active_subject: uri_subject[0],
      });
      let object = {
        user_id: user._id,
        subject_id: uri_subject[0]._id,
        exam_id: exam._id,
      };
    }
    // get lessons
  }, [subjects]);

  useEffect(() => {
    if (active_subject) {
      // set topic
      if (!active_topic) {
        if (active_subject.active_topic) {
          let topic = active_subject.topics.filter((topic) => {
            return topic._id === active_subject.active_topic.topic_id;
          });
          dispatch({
            type: "SET_ACTIVE_TOPIC",
            active_topic: topic[0],
          });
        } else {
          let topic = active_subject.topics[0];
          dispatch({
            type: "SET_ACTIVE_TOPIC",
            active_topic: topic,
          });
        }
      }
    }
  }, [active_subject]);

  useEffect(async () => {
    // set section
    console.log("setting section!!!");
    if (active_topic) {
      let uri_section = active_topic.sections.filter((sections) => {
        return sections.slug === props.match.params.section;
      });
      dispatch({
        type: "SET_ACTIVE_SECTION",
        active_section: uri_section[0],
      });
      // send active section data to server
      let activeSection = {
        user_id: user._id,
        section_id: uri_section[0]._id,
        topic_id: active_topic._id,
        subject_id: active_subject._id,
        exam_id: exam._id,
      };
      const res = await fetch(`${server.url}/active_section`, {
        method: "POST",
        body: JSON.stringify(activeSection),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("res", data);
    }
  }, [active_topic]);

  const { loading } = GetUserSubjects();

  return loading ? (
    <SplashScreen />
  ) : (
    <div>
      {active_section && (
        <div>
          <h1>Section: {active_section.name}</h1>
          Lessons:
          <ul>
            {active_section.lessons.map((lesson) => (
              <Link
                key={lesson._id}
                to={`/learn/${exam.name
                  .replace(/\W+/g, "-")
                  .toLowerCase()}/${active_subject.name
                  .replace(/\W+/g, "-")
                  .toLowerCase()}/${active_topic.name
                  .replace(/\W+/g, "-")
                  .toLowerCase()}/${active_section.name
                  .replace(/\W+/g, "-")
                  .toLowerCase()}/${lesson.name
                  .replace(/\W+/g, "-")
                  .toLowerCase()}`}
              >
                <li key={lesson._id}>{lesson.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
