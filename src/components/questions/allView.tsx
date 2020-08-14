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
      <Row>
        <Jumbotron>
          <CardGroup>
            {this.state.questions.map((question) => this.Question(question))}
          </CardGroup>
        </Jumbotron>
      </Row>
    );
  }

  Question(question: { title: string; description: string }) {
    return (
      <Col className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <Card
          bg={"dark"}
          style={{ height: "90%" }}
          text={"white"}
          className="mb-2 mt-2"
        >
          <Card.Body>
            <Card.Title>{question.title}</Card.Title>
            <Card.Text>{question.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  async componentDidMount() {
    const res = await fetch(
      "https://edu-forum-backend.herokuapp.com/api/questions/all"
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
