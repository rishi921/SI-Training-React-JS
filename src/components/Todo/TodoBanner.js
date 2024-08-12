export default function TodoBanner(props) {
    const { name, tasks } = props
    return <>
        <h1 className="bg-primary text-center text-white m-2 p-2 ">
            {name}'s ToDo Items,
            {tasks.filter(x => !x.done).length} Items to be Done
        </h1>
    </>
}