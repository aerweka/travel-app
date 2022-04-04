import React, { useState } from "react";
import propTypes from "prop-types";
export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepsKeys = Object.keys(steps);

  const [CurrentStep, setCurrentState] = useState(
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
  );

  const totalSteps = stepsKeys.length;
  const indexOfStep = stepsKeys.indexOf(CurrentStep);

  function prevStep() {
    if (+indexOfStep > 0) setCurrentState(stepsKeys[indexOfStep - 1]);
  }

  function nextStep() {
    if (+indexOfStep < totalSteps) setCurrentState(stepsKeys[indexOfStep + 1]);
  }

  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}
Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string,
};
