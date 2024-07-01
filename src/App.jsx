import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "./App.css";
/* import AllTheBooks from "./component/AllTheBooks"; */
import MyFooter from "./component/MyFooter";
import MyNav from "./component/MyNav";
import Welcome from "./component/Welcome";
import BookList from "./component/BookList";

class App extends Component {
  render() {
    return (
      <div>
        <MyNav />
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList />
        <MyFooter />
      </div>
    );
  }
}

export default App;
