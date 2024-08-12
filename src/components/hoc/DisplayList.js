import { useState } from "react";

function List(props) {
    const listElements = props.list.map((e, i) => <li key={i}>{e}</li>)
    return <ul>
        {listElements}
    </ul>
}

// //Const EnhancedComponent = higherOrderComponent(WrappedComponent);
function titledList(WrappedComponent) {
    return ((props) => {
        return <div>
            <h2>{props.title}</h2>
            <WrappedComponent {...props} />
        </div>
    })
}


// function titledList(WrappedComponent) {
//     return (function (props) {
//         return <div>
//             <h2>{props.title}</h2>
//             <WrappedComponent {...props} />
//         </div>
//     })
// }

const EnhancedComponent = titledList(List);

export default function RenderList() {
    const [fruits] = useState(['Mango', 'Guava', 'Orange', 'Jackfruit', 'Pineapple']);

    return <>
        <EnhancedComponent title='Fruits Available' list={fruits} />
    </>
}