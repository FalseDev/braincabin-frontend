import React from "react"
import Table from "react-bootstrap/Table"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export interface IQuestion {
  _id: string;
  title: string;
  description: string;
  tags: [string];
  upvoteCount: number;
  downvoteCount: number;
  answerCount: number;
  level: string;
  subject: string;
  user: {
    _id: string;
    name: string;
    username: string;
  };
}


export default function Questions(questions: IQuestion[]) {
  return (
    <Table striped hover bordered>
      <tbody>
        {questions.map((question) => Question(question, question._id))}
      </tbody>
    </Table>
  );
}

const Question = (question: IQuestion, key: string) => (
  <tr key={key}><td>

    <Row className="ml-2 mb-2 mt-2 mr-2" >
      <Col className="col-1">
        <Row>{question.upvoteCount + 100}</Row>
        <Row>{question.downvoteCount}</Row>
      </Col>
      <Col className="col-10">
        <Row>{question.title}</Row>
        <Row>{question.description.slice(0, 100)}</Row>
      </Col>
    </Row >

  </td></tr>
)
