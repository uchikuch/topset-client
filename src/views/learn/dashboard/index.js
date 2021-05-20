import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import SplashScreen from "../../../components/SplashScreen";
import GetUserSubjects from "../../../queries/GetUserSubjects";
import server from "../../../configs/Urls";

export default function Dashboard(props) {
  const [
    {
      user,
      exam,
      subjects,
      active_subject,
      active_topic,
      topics,
      completed_lessons,
      completed_sections,
      completed_topics,
    },
    dispatch,
  ] = useStateValue();

  const handlePrev = () => {
    let index = topics.findIndex((topic) => topic._id === active_topic._id);
    index = index - 1 < 0 ? topics.length - 1 : index - 1;
    dispatch({
      type: "SET_ACTIVE_TOPIC",
      active_topic: topics[index],
    });
    // send new active topic to server
    sendActiveTopicToServer(topics[index]._id);
  };

  const handleNext = () => {
    let index = topics.findIndex((topic) => topic._id === active_topic._id);
    index = index + 1 >= topics.length ? 0 : index + 1;
    dispatch({
      type: "SET_ACTIVE_TOPIC",
      active_topic: topics[index],
    });
    // send new active topic to server
    sendActiveTopicToServer(topics[index]._id);
  };

  const sendActiveSubjectToServer = async (subject_id) => {
    // send active section data to server
    let activeSubject = {
      user_id: user._id,
      subject_id,
      exam_id: exam._id,
    };
    const res = await fetch(`${server.url}/active_subject`, {
      method: "POST",
      body: JSON.stringify(activeSubject),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("res", data);
  };

  const sendActiveTopicToServer = async (topic_id) => {
    // send active section data to server
    let activeSection = {
      user_id: user._id,
      topic_id,
      subject_id: active_subject._id,
      exam_id: exam._id,
    };
    const res = await fetch(`${server.url}/active_topic`, {
      method: "POST",
      body: JSON.stringify(activeSection),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("res", data);
  };

  useEffect(() => {
    if (subjects) {
      // set subject
      let uri_subject = subjects.filter((subject) => {
        return subject.slug === props.match.params.subject;
      });
      dispatch({
        type: "SET_ACTIVE_SUBJECT",
        active_subject: uri_subject[0],
      });
      // send new active topic to server
      sendActiveSubjectToServer(uri_subject[0]._id);
    }

    //set topics

    if (active_subject) {
      // set topics
      dispatch({
        type: "SET_TOPICS",
        topics: active_subject.topics,
      });

      if (!active_subject.active_topic) {
        let topic = active_subject.topics[0];
        dispatch({
          type: "SET_ACTIVE_TOPIC",
          active_topic: topic,
        });
        sendActiveTopicToServer(topic._id);
      } else {
        let topic = active_subject.topics.filter((topic) => {
          return topic._id === active_subject.active_topic.topic_id;
        });
        dispatch({
          type: "SET_ACTIVE_TOPIC",
          active_topic: topic[0],
        });
        sendActiveTopicToServer(topic[0]._id);
      }
    }
  }, [active_subject]);

  const { loading } = GetUserSubjects();

  return loading ? (
    <SplashScreen />
  ) : (
    <div>
      {active_topic && active_subject && (
        <div>
          <h1>
            Topic {active_topic.numbering}: {active_topic.name}
          </h1>
          Sections:
          <ul>
            {active_topic.sections.map((section) => (
              <Link
                key={section._id}
                to={`/learn/${exam.name
                  .replace(/\W+/g, "-")
                  .toLowerCase()}/${active_subject.name
                  .replace(/\W+/g, "-")
                  .toLowerCase()}/${active_topic.name
                  .replace(/\W+/g, "-")
                  .toLowerCase()}/${section.name
                  .replace(/\W+/g, "-")
                  .toLowerCase()}`}
              >
                <li>{section.name}</li>
              </Link>
            ))}
          </ul>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
}
