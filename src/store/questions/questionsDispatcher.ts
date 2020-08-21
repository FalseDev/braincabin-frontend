import * as actions from "./questionsActions";
import axios from "axios";

export const loadQuestions = () => ({
  type: actions.LOAD_QUESTIONS,
});

export const loadedQuestions = (questions: any) => ({
  type: actions.LOADED_QUESTIONS,
  payload: questions,
});

export const failedToLoadQuestions = () => ({
  type: actions.FAILED_TO_LOAD_QUESTIONS,
});

export const loadQuestion = () => ({ type: actions.LOAD_QUESTION });

export const loadedQuestion = (question: any) => ({
  type: actions.LOADED_QUESTION,
  payload: question,
});

export const failedToLoadQuestion = () => ({
  type: actions.FAILED_TO_LOAD_QUESTION,
});

export const questionLoader = (start: number, stop: number) => async (
  dispatch: (arg: any) => void
) => {
  dispatch(loadQuestions());

  const response = await axios.get("questions/all", {
    baseURL: "https://edu-forum-backend.herokuapp.com/api/",
    responseType: "json",
    params: { start, stop },
  });
  const data = response.data;
  dispatch(loadedQuestions(data));
};
