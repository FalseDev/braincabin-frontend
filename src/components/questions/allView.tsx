import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux"
import Questions from "./Questions"
import {IQuestion} from "./Questions"
import { questionLoader } from "../../store/questions/questionsDispatcher"

interface IQuestionsProp{
  questions:IQuestion[],
  loading:Boolean,
  loadQuestions:()=>void
}

class AllQuestionsView extends React.Component<IQuestionsProp> {

  componentDidMount(){
    this.props.loadQuestions()
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Container className="align-middle">
            <Spinner animation="border" />
          </Container>
        ) : (
            Questions(this.props.questions)
          )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loading: state.questions.loadingQuestions,
  questions: state.questions.questions
})

const mapDispatchersToProps = (dispatch: (action: any) => void) => ({
  loadQuestions: (start = 1, stop = 5) => {dispatch(questionLoader(start, stop))}
})

export default connect(mapStateToProps, mapDispatchersToProps)(AllQuestionsView);
