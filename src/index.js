import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class DataTable {
  constructor() {
    this.rows = {};
    this.nrows = 0;
    this.ncols = 0;
    this.colnames = [];
    this.rownames = [];
  }

  addRow(key, arr) {
    this.rows[key] = arr;
  }

  size() {}

  setSize(nr, nc) {}

  addCol(colname, arr) {}

  setColNames(arr) {}

  setRowNames(arr) {}

  setValue(r, c, val) {}

  value(r, c) {}
}
class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      showMenu2: false,
      showMenu3: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.showMenu2 = this.showMenu2.bind(this);
    this.closeMenu2 = this.closeMenu2.bind(this);
    this.showMenu3 = this.showMenu3.bind(this);
    this.closeMenu3 = this.closeMenu3.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }
  showMenu2(event) {
    event.preventDefault();

    this.setState({ showMenu2: true }, () => {
      document.addEventListener("click", this.closeMenu2);
    });
  }

  showMenu3(event) {
    event.preventDefault();

    this.setState({ showMenu3: true }, () => {
      document.addEventListener("click", this.closeMenu3);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }
  closeMenu2(event) {
    if (!this.dropdownMenu2.contains(event.target)) {
      this.setState({ showMenu2: false }, () => {
        document.removeEventListener("click", this.closeMenu2);
      });
    }
  }
  closeMenu3(event) {
    if (!this.dropdownMenu3.contains(event.target)) {
      this.setState({ showMenu3: false }, () => {
        document.removeEventListener("click", this.closeMenu3);
      });
    }
  }

  render() {
    return (
      <div id="wrapper">
        <div id="file">
          <button class="menuButton" onClick={this.showMenu}>
            File
          </button>
          {this.state.showMenu ? (
            <div
              className="menu"
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <div>
                <button class="menuButton"> Save </button>
              </div>
            </div>
          ) : null}
        </div>
        <div id="edit">
          <button class="menuButton" onClick={this.showMenu2}>
            Edit
          </button>
          {this.state.showMenu2 ? (
            <div
              className="menu"
              ref={element => {
                this.dropdownMenu2 = element;
              }}
            >
              <div>
                <button class="menuButton"> Undo </button>
              </div>
              <div>
                <button onClick={this.showMenu3} class="menuButton">
                  {" "}
                  Change chart type{" "}
                </button>
              </div>
              {this.state.showMenu3 ? (
                <div
                  className="menu"
                  ref={element => {
                    this.dropdownMenu3 = element;
                  }}
                >
                  <div>
                    <button class="menuButton"> Stack </button>
                  </div>
                  <div>
                    <button class="menuButton"> Scatter </button>
                  </div>
                  <div>
                    <button class="menuButton"> Plot </button>
                  </div>
                  <div>
                    <button class="menuButton"> Surface </button>
                  </div>
                  <div>
                    <button class="menuButton"> Pie </button>
                  </div>
                  <div>
                    <button class="menuButton"> Paraller </button>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        <div id="values">
          <button
            class="menuButton"
            //onClick={ReactDOM.createPortal(child, container)}
          >
            Values
          </button>
        </div>
        <div id="help">
          <button class="menuButton" onClick={console.log("TODO")}>
            Help
          </button>
        </div>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

class MyWindowPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    // STEP 1: create a container <div>
    this.containerEl = document.createElement("div");
    this.externalWindow = null;
  }

  render() {
    // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }

  componentDidMount() {
    // STEP 3: open a new browser window and store a reference to it
    this.externalWindow = window.open(
      "",
      "",
      "width=600,height=400,left=200,top=200"
    );

    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.appendChild(this.containerEl);
  }

  componentWillUnmount() {
    // STEP 5: This will fire when this.state.showWindowPortal in the parent component becomes false
    // So we tidy up by closing the window
    this.externalWindow.close();
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Card />, rootElement);
