import { Component } from "react";

export default class ErrorBoundaryClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrors: false
        }
    }

    //These methods are called when there is an error during rendering, in a lifecycle method, or in 
    static getDerivedStateFromError(error) {
        return { hasErrors: true }
    }

    //called during the commit phase i.e. after the render phase
    componentDidCatch(error, info) {
        console.log(`Error: $(error)`);
        console.log(`Error Information: $(JSON.stringify(info))`);
    }

    render() {
        if (this.state.hasErrors) {
            return <h2 style={{ color: 'red' }}>Oops !, Something went wrong</h2>
        }
        return this.props.children;
    }
}