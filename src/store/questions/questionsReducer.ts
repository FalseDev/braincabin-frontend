import * as actions from "./questionsActions";


const questionInitialState = {
  question: null,
  loadingQuestion: false,
  loadingQuestionFailed: false
}

const questionsInitialState = {
  questions: [],
  loadingQuestions: false,
  loadingQuestionsFailed: false,
}

const initialState = {
  ...questionInitialState,
  ...questionsInitialState
};

function questionsReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.LOAD_QUESTIONS:
      return { ...initialState, loadingQuestions: true };
    case actions.LOADED_QUESTIONS:
      return {
        ...state,
        loadingQuestions: false,
        questions: action.payload,
        ...questionInitialState
      };
    case actions.FAILED_TO_LOAD_QUESTIONS:
      return { loadingQuestions: false, questions: [], loadingQuestionsFailed: true, ...questionInitialState };
    case actions.LOAD_QUESTION:
      return { ...initialState, loadingQuestion: true }
    case actions.LOADED_QUESTION:
      return { ...initialState, question: action.payload }
    case actions.FAILED_TO_LOAD_QUESTION:
      return { ...initialState, loadingQuestionFailed: true }
    default:
      return state;
  }
}

export default questionsReducer;
