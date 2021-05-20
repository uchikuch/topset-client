export const initialState = {
  user: null,
  subjects: null,
  topics: null,
  exam: null,
  completed_lessons: null,
  completed_sections: null,
  completed_topics: null,
  active_topic: null,
  active_subject: null,
  active_section: null,
  active_lesson: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGOUT_USER":
      window.localStorage.removeItem("topset_jwt");
      return {
        user: null,
      };
    case "SET_ACTIVE_LESSON":
      return {
        ...state,
        active_lesson: action.active_lesson,
      };

    case "SET_ACTIVE_SUBJECT":
      return {
        ...state,
        active_subject: action.active_subject,
      };

    case "SET_ACTIVE_SECTION":
      return {
        ...state,
        active_section: action.active_section,
      };

    case "SET_ACTIVE_TOPIC":
      console.log("HELLO SET_ACTIVE_TOPIC");
      return {
        ...state,
        active_topic: action.active_topic,
      };

    case "SET_COMPLETED_LESSONS":
      return {
        ...state,
        completed_lessons: action.completed_lessons,
      };

    case "SET_COMPLETED_SECTIONS":
      return {
        ...state,
        completed_sections: action.completed_sections,
      };

    case "SET_COMPLETED_TOPICS":
      return {
        ...state,
        completed_topics: action.completed_topics,
      };

    case "SET_EXAM":
      return {
        ...state,
        exam: action.exam,
      };

    case "SET_SUBJECTS":
      return {
        ...state,
        subjects: action.subjects,
      };

    case "SET_TOPICS":
      return {
        ...state,
        topics: action.topics,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
