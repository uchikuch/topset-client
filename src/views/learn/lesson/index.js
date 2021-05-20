import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import SplashScreen from "../../../components/SplashScreen";
import GetUserSubjects from "../../../queries/GetUserSubjects";
import Iframe from "react-iframe";

export default function Lesson(props) {
  const [
    {
      user,
      exam,
      subjects,
      active_topic,
      active_lesson,
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

  useEffect(() => {
    // set section
    if (!active_section) {
      if (active_topic) {
        let uri_section = active_topic.sections.filter((sections) => {
          return sections.slug === props.match.params.section;
        });
        dispatch({
          type: "SET_ACTIVE_SECTION",
          active_section: uri_section[0],
        });
      }
    }
  }, [active_topic]);

  useEffect(() => {
    // set lesson
    if (active_section) {
      let uri_lesson = active_section.lessons.filter((lessons) => {
        return lessons.slug === props.match.params.lesson;
      });
      dispatch({
        type: "SET_ACTIVE_LESSON",
        active_lesson: uri_lesson[0],
      });
    }
  }, [active_section, dispatch]);

  const { loading } = GetUserSubjects();

  return loading ? (
    <SplashScreen />
  ) : (
    <div>
      {active_lesson && (
        <div>
          <h1>Lesson: {active_lesson.name}</h1>
          numbering: {active_lesson.numbering}
          <br />
          parent_section: {active_lesson.parent_section}
          <br />
          xp: {active_lesson.xp}
          <br />
          lesson_link: {active_lesson.lesson_link}
          <br />
          <br />
          <br />
          <div>
            <Iframe
              url="https://topset.involve.me/test-math-quiz-lesson-integers"
              width="100%"
              height="650px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </div>
        </div>
      )}
    </div>
  );
}
