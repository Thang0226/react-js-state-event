import {Component} from "react";

class Hello extends Component {
    componentWillUnmount = () => {
        alert("The component is going to be unmounted!");
    }

    render() {
        return (
            <h3>Hello World!</h3>
        );
    }
}

export default Hello;