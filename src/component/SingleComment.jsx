import { Component } from "react";
import { Accordion, Badge, Button } from "react-bootstrap";

class SingleComment extends Component {
  deleteComment = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.oggettoCommenti._id,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNWI0NDNhMzhjYjAwMTVmNjNjZjIiLCJpYXQiOjE3MTk0OTEzOTYsImV4cCI6MTcyMDcwMDk5Nn0.LDXvAzpXS0c_jlmLQEYfFPW6AtZZGHZZ5chs8xkBFzI",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          alert("commento eliminato");
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei commenti");
        }
      })
      .catch((err) => alert(err));
  };
  render() {
    return (
      <Accordion className="border border-1">
        {console.log(this.props.index)}
        <Accordion.Item eventKey={` ${this.props.index.toString()} `}>
          <Accordion.Header>
            {this.props.oggettoCommenti.comment}
          </Accordion.Header>
          <Accordion.Body className="d-flex justify-content-between">
            <p className="mb-0 d-inline">
              {this.props.oggettoCommenti.elementId}
            </p>
            <Badge className="d-inline ms-auto">
              {this.props.oggettoCommenti.rate}
            </Badge>
            <Button variant="danger" size="sm" onClick={this.deleteComment}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}
export default SingleComment;
