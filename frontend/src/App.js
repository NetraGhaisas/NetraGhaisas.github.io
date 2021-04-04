import logo from "./logo.svg";
import code from "./images/code.svg";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/fontawesome-all.min.css";
import { Component } from "react";

class App extends Component {
  state = {
    loaded:false,
  }
  componentDidMount(){
    this.setState({loaded:true})
  }
  render() {
    return (
          <header id="header" class="alt">
            <span class="logo">
              <img src={code} alt="" />
            </span>
            <h1>Netra Ghaisas</h1>
            <p>CS Undergrad &nbsp;&bull;&nbsp; Software Developer</p>
            {/* <br></br> */}
            <ul class="icons">
              <li>
                <a
                  href="https://github.com/NetraGhaisas"
                  class="icon brands fa-github alt"
                >
                  <span class="label">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/netraghaisas/"
                  class="icon brands fa-linkedin alt"
                >
                  <span class="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:netraghaisas@gmail.com"
                  class="icon brands fa-google alt"
                >
                  <span class="label">Email</span>
                </a>
              </li>
            </ul>
          </header>
    );
  }
}

export default App;
