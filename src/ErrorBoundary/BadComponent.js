// import ErrorBoundaryClass from "./ErrorBoundaryClass"
// import { ErrorBoundary } from "react-error-boundary"

// function BadComponent() {
//     // return ({
//     //     oops: 'This is a not good '
//     // })

//     // return <>
//     //     <h2>From BadComponent {props.name}</h2>
//     // </>
// }

// const SomeComponent = () => {
//     return <>
//         <ErrorBoundary FallbackComponent={ErrorFallback} >
//             <h1> From SomeComponent</h1>
//             <BadComponent />
//         </ErrorBoundary>
//     </>
// }

// const ErrorFallback = ({error}) => {
//     return <>
//         <h3>Something Went Wrong : {error.message}</h3>
//     </>
// }

// const BadComponentContainer = () => {
//     return <>
//         <header>Header</header>
//         <h1>From Container</h1>
//         <SomeComponent />
//         <footer>Footer</footer>
//     </>
// }

// export default BadComponentContainer;


import ErrorBoundaryClass from "./ErrorBoundaryClass"
import { ErrorBoundary } from 'react-error-boundary'

function BadComponent() {
    return ({
        oops: 'This is a not good '
    })

    return <>
        <h2>From BadComponent {props.name}</h2>
    </>
}

const SomeComponent = () => {
    return <>
        <ErrorBoundary FallbackComponent=
            {ErrorFallback}>
            <h1> From SomeComponent</h1>
            <BadComponent />

        </ErrorBoundary>
    </>
}

const ErrorFallback = ({ error }) => {
    return <>
        <h3>Something went wrong: {error.message}</h3>
    </>
}

const BadComponentContainer = () => {
    return <>
        <header>Header</header>
        <h1>From Container</h1>
        <SomeComponent />
        <footer>Footer</footer>
    </>
}

export default BadComponentContainer;