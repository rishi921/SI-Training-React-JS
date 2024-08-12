import { Component } from "react";
export default class CounterCompoment extends Component {

    constructor() {
        super();
        this.state = {
            name: 'Guest',
            count: 0
        }
    }
    increment() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return <>
            <label>Welcome {this.state.name}</label>
            <h1> Count : {this.state.count}</h1>
            <button onClick={this.increment.bind(this)}>Click</button></>
    }
}
