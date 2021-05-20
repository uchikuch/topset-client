import React from "react";
import { Button } from "../../components/Button";
import IconSelect from "../../components/iconSelect/IconSelect";

export default function StepThree({
  onNext,
  onBack,
  subjects,
  selectedSubjects,
  setSelectedSubjects,
  error,
  setError,
}) {
  const handleSelect = async (e) => {
    // toggle selectedSubjects
    setError("");
    if (selectedSubjects.includes(e.target.id)) {
      // popping subject id from array
      const index = selectedSubjects.findIndex((item) => item === e.target.id);
      if (index >= 0) {
        selectedSubjects.splice(index, 1);
        setSelectedSubjects([...selectedSubjects]);
      }
    } else {
      // pushing subject id to array
      subjects.forEach((subject) => {
        if (subject._id === e.target.id) {
          setSelectedSubjects([...selectedSubjects, e.target.id]);
        }
      });
      console.log(selectedSubjects);
    }
  };

  return (
    <div className="container has-text-centered">
      {/* Intro text */}
      <div className="__heading-box">
        <h2 className="__reduceMarginBottom">What would you like to learn?</h2>
      </div>
      {/* Subjects */}
      <div className="__subjects container is-max-desktop">
        {subjects.map((subject) => (
          <div id={subject.label} onClick={handleSelect} key={subject.label}>
            <IconSelect
              subject={subject}
              selectorStyle={
                selectedSubjects.includes(subject._id) ? "selected" : ""
              }
            />
          </div>
        ))}
        <div className="__label mt-3">
          <p>{error}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="columns is-desktop is-vcentered __btn-padding __btn-margin100 __reverse-columns">
        <div className="column">
          <Button
            type="submit"
            buttonStyle="btn--back"
            buttonSize="btn--mobile"
            onClick={onBack}
          >
            Back
          </Button>
        </div>
        <div className="column is-three-quarters">
          <Button
            type="button"
            buttonStyle="btn--continue"
            buttonSize="btn--primary-hover"
            onClick={onNext}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
