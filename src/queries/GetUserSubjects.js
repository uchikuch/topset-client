import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { useStateValue } from "../StateProvider";

export default function GetUserSubjects() {
  const [{ user }, dispatch] = useStateValue();

  const USER_SUBJECTS = gql`
    query($exam_id: ID, $id: ID!, $containsId: [String]) {
      exam(_id: $exam_id) {
        _id
        name
      }
      user(_id: $id) {
        username
        subjects(containsId: $containsId) {
          _id
          name
          slug
          progress_status
          background_color
          image_src
          active_topic(user_id: $id) {
            _id
            user_id
            exam_id
            subject_id
            topic_id
          }
          completed_lessons(user_id: $id) {
            lesson_id
            section_id
            topic_id
            subject_id
            exam_id
          }
          completed_sections(user_id: $id) {
            section_id
            topic_id
            subject_id
            exam_id
          }
          completed_topics(user_id: $id) {
            topic_id
            subject_id
            exam_id
          }
          subject_progress(user_id: $id) {
            _id
            user_id
            exam_id
            subject_id
            active_topic
            active_section
            active_lesson
          }
          topics {
            _id
            name
            slug
            numbering
            subject_id
            sections {
              _id
              numbering
              name
              slug
              parent_topic
              lessons {
                _id
                numbering
                name
                slug
                parent_section
                section_id
                xp
                lesson_link
              }
              active_lesson(user_id: $id) {
                _id
                user_id
                exam_id
                subject_id
                section_id
                lesson_id
              }
            }
            active_section(user_id: $id) {
              _id
              user_id
              exam_id
              subject_id
              section_id
            }
          }
        }
        active_subject(exam_id: $exam_id) {
          _id
          user_id
          exam_id
          subject_id
        }
      }
      completed_lessons(user_id: $id) {
        exam_id
        subject_id
        topic_id
        section_id
        lesson_id
      }
      completed_sections(user_id: $id) {
        exam_id
        subject_id
        topic_id
        section_id
      }
      completed_topics(user_id: $id) {
        exam_id
        subject_id
        topic_id
      }
    }
  `;

  const { loading, error, data } = useQuery(USER_SUBJECTS, {
    variables: {
      exam_id: user.exam_id,
      id: user._id,
      containsId: user.subjects,
    },
  });

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (data) {
      dispatch({
        type: "SET_SUBJECTS",
        subjects: data.user.subjects,
      });
      dispatch({
        type: "SET_EXAM",
        exam: data.exam,
      });
      dispatch({
        type: "SET_COMPLETED_LESSONS",
        completed_lessons: data.completed_lessons,
      });
      dispatch({
        type: "SET_COMPLETED_SECTIONS",
        completed_sections: data.completed_sections,
      });
      dispatch({
        type: "SET_COMPLETED_TOPICS",
        completed_topics: data.completed_topics,
      });
      // Set Active Subject
      if (data.user.active_subject) {
        let active_subject = data.user.subjects.filter((subject) => {
          return subject._id === data.user.active_subject.subject_id;
        });
        dispatch({
          type: "SET_ACTIVE_SUBJECT",
          active_subject: active_subject[0],
        });
      }
      //console.log(data.user);
    }
  }, [data, dispatch]);

  return { loading, error, data };
}
