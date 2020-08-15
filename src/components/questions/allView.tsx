import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AllQuestionsView extends React.Component {
  state = {
    loading: true,
    questions: [],
  };

  Questions() {
    return (
      <Row style={{ width: "100vw" }}>
        <Jumbotron style={{ width: "100%", height: "100%" }}>
          {this.state.questions.map((question) => this.Question(question))}
        </Jumbotron>
      </Row>
    );
  }

  Question(question: {
    title: string;
    description: string;
    tags: [string];
    upvoteCount: number;
    downvoteCount: number;
    answerCount: number;
    level: string;
    subject: string;
    user: { _id: string; name: string; username: string };
  }) {
    return (
      <Row>
        <Col style={{ border: 20 }} className="col-3">
          {question.upvoteCount}
          {question.downvoteCount}
        </Col>
        <Col className="col-9">{question.title}</Col>
      </Row>
    );
  }

  async componentDidMount() {
    const res = await fetch(
      "http://192.168.43.168:5000/api/questions/all" //https://edu-forum-backend.herokuapp.com/api/questions/all"
    );
    const data = await res.json();
    this.setState({ loading: false, questions: data });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>
            <Spinner animation="border" />
          </div>
        ) : (
          this.Questions()
        )}
      </div>
    );
  }
}

export default AllQuestionsView;
