import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      author: "",
      comment: "",
      rate: 1,
      elementId: this.props.idLibro,
      createdAt: "",
    },
  };

  fetchNewComment = (e) => {
    e.preventDefault();

    this.setState({
      comment: { ...this.state.comment, createdAt: new Date() },
    });

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.comment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNWI0NDNhMzhjYjAwMTVmNjNjZjIiLCJpYXQiOjE3MTk0OTEzOTYsImV4cCI6MTcyMDcwMDk5Nn0.LDXvAzpXS0c_jlmLQEYfFPW6AtZZGHZZ5chs8xkBFzI",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          this.setState({
            comment: {
              comment: "",
              createdAt: "",
              elementId: this.props.idLibro,
              rate: 1,
              updatedAt: "",
              __v: 0,
              _id: "",
            },
          });
          alert("Commento aggiunto con successo!");
        } else {
          throw new Error("Errore nel reperimento dei commenti");
        }
      })
      .catch((err) => alert(err));
  };

  render() {
    return (
      <Form onSubmit={this.fetchNewComment}>
        <Form.Control
          type="text"
          placeholder="Aggiuingi un commento"
          value={this.state.comment.comment}
          onChange={(e) =>
            this.setState({
              comment: { ...this.state.comment, comment: e.target.value },
            })
          }
          required
        />
        <Form.Select
          aria-label="Number of seats"
          onChange={(e) =>
            this.setState({
              comment: { ...this.state.comment, rate: e.target.value },
            })
          }
        >
          <option>Quante stelle</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
        <Button type="submit" variant="outline-secondary" id="button-addon2">
          Invia Commento
        </Button>
      </Form>
    );
  }
}
export default AddComment;
