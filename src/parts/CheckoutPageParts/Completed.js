import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIllustration from "assets/images/completed.jpg";
export default function Completed() {
  return (
    <Fade>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedIllustration}
              alt="completed checkout"
              className="img-fluid"
            />
            <p className="text-gray500">
              We will email you later once the transaction has been accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
