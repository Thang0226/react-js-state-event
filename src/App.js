import './App.css';
import {Component} from "react";
import Hello from "./Hello";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      color: "orange",
      display: true
    };
  }

  increase = () => {
    this.setState({number: this.state.number + 1});
  }

  decrease = () => {
    this.setState({number: this.state.number - 1});
  }

  delete = () => {
    this.setState({display: false});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({color: "pink"});
    }, 5000)
  }

  render() {
    let element;
    if (this.state.display) {
      element = <Hello/>;
    }
    return (
    <div style={{textAlign: "center", padding: 30, width: 400, height: 200, margin: "auto", backgroundColor: this.state.color}}>
      <button onClick={this.decrease}>Decrease</button>
      <span style={{padding: 10}}>{this.state.number}</span>
      <button onClick={this.increase}>Increase</button>
      {element}
      <br/><br/>
      <button onClick={this.delete}>Delete the Hello World</button>
    </div>);
  };
}

export default App;
