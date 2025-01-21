import logo from './logo.svg';
import './App.css';
import {Comopnent, Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      color: "orange"
    };
  }

  increase = () => {
    this.setState({number: this.state.number + 1});
  }

  decrease = () => {
    this.setState({number: this.state.number - 1});
  }

  componentDidMount() {       // function without binding is auto-called after loading page
    setTimeout(() => {
      this.setState({color: "pink"});
    }, 5000)
  }

  render() {
    return (
    <div style={{textAlign: "center", padding: 30, width: 400, height: 100, margin: "auto", backgroundColor: this.state.color}}>
      <button onClick={this.decrease}>Decrease</button>
      <span style={{padding: 10}}>{this.state.number}</span>
      <button onClick={this.increase}>Increase</button>
    </div>);
  };
}

export default App;
