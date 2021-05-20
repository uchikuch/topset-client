import React from "react";
import { useStateValue } from "../../StateProvider";
import SplashScreen from "../../components/SplashScreen";
import GetUserSubjects from "../../queries/GetUserSubjects";

import Heading from "./Heading";
import GeneralStats from "./GeneralStats";
import SubjectStats from "./SubjectStats";

export default function Home() {
  const [
    {
      user,
      exam,
      subjects,
      completed_lessons,
      completed_sections,
      completed_topics,
    },
  ] = useStateValue();

  const { loading } = GetUserSubjects();

  return loading ? (
    <SplashScreen />
  ) : (
    <div>
      {subjects && (
        <div>
          <Heading user={user} exam={exam} />
          <GeneralStats
            completed_lessons={completed_lessons}
            completed_sections={completed_sections}
            completed_topics={completed_topics}
          />
          <SubjectStats
            user={user}
            exam={exam}
            subjects={subjects}
            completed_lessons={completed_lessons}
          />
        </div>
      )}
    </div>
  );
}
