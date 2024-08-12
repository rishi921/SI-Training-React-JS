import { func } from "prop-types";

function Button({ log, onClick, title }) {
    return (
        <button onClick={(e) => {
            log(e);
            onClick(e);
        }}>
            {title}
        </button>
    );
}
function log(item) {
    console.log('Logger: ', item);
}

function Logger({ render }) {
    return render(log);
}

//Like HOC's , render props denote an architectural pattern in React and not a feature of the library. Here you create a component that accepts a prop named render and then executes it in its own function body. You can then pass additional information during this execution 

export default function RenderPropsDemo() {

    return (
        <Logger render={(log) => (
            <Button
                log={log}
                onClick={() => console.log('Click Handled')}
                title='Click Me' />
        )} />
    )
}