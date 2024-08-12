import { Component } from 'react'
// function Welcome(){
//     return <>
//     <h1>Welcome to React</h1>
//     </>
// }

//Arrow Function Component
// const Welcome = () => <h1>Kya bolti Public!</h1>

//Class Component
class Welcome extends Component {
    constructor() {
        super();
    }
    render() {
        return <h1>I am from class Component</h1>
    }
}

export default Welcome;