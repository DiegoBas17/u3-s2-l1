import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "./App.css";
/* import AllTheBooks from "./component/AllTheBooks"; */
import MyFooter from "./component/MyFooter";
import MyNav from "./component/MyNav";
import Welcome from "./component/Welcome";
import BookList from "./component/BookList";
/* *************** */
import scifi from "./books/scifi.json";
import fantasy from "./books/fantasy.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import history from "./books/history.json";

class App extends Component {
  state = {
    libriDaVisualizzare: fantasy,
  };

  changeCategory = (category) => {
    switch (category) {
      case "Fantasy":
        this.setState({ libriDaVisualizzare: fantasy });
        break;
      case "History":
        this.setState({ libriDaVisualizzare: history });
        break;
      case "Horror":
        this.setState({ libriDaVisualizzare: horror });
        break;
      case "Romance":
        this.setState({ libriDaVisualizzare: romance });
        break;
      case "Scifi":
        this.setState({ libriDaVisualizzare: scifi });
        break;
      default:
        this.setState({ libriDaVisualizzare: fantasy });
        break;
    }
  };

  render() {
    return (
      <div>
        <MyNav changeCategory={this.changeCategory} />
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList libriDaVisualizzare={this.state.libriDaVisualizzare} />
        <MyFooter />
      </div>
    );
  }
}

export default App;
