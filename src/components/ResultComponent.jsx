import { Component } from "react";
import "./ResultComponent.css";

export default class ResultComponent extends Component {
  render() {
    return (
      <>
        <div className="main-container">
          <h1 className="result-text">Result</h1>

          <div className="resultPage-container">

            <div className="statement">
              <h2><strong>You need more practice!</strong></h2>
            </div>

            <div className="score">
              <h1><strong>Your score is 20%</strong></h1>
            </div>

            <div className="question-cont">
              <div className="noOfQuestions">
                <div>
                  <h3><strong>Total number of questions</strong></h3>
                </div>

                <div>
                  <h3><strong>15</strong></h3>
                </div>
              </div>

              <div className="noOfQuestions">
                <div>
                  <h3><strong>Number of attempted questions</strong></h3>
                </div>

                <div>
                  <h3><strong>9</strong></h3>
                </div>
              </div>

              <div className="noOfQuestions">
                <div>
                  <h3><strong>Number of correct answers</strong></h3>
                </div>

                <div>
                  <h3><strong>3</strong></h3>
                </div>
              </div>

              <div className="noOfQuestions">
                <div>
                  <h3><strong>Number of wrong answers</strong></h3>
                </div>

                <div>
                  <h3><strong>6</strong></h3>
                </div>
              </div>
            </div>
          </div>

          <div className="res-btns">
            <div>
              <button className="playAgain-btn">Play Again</button>
            </div>

            <div>
              <button className="back-btn">Back to home</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
