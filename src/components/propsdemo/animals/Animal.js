import PropTypes from 'prop-types';
const Image = (props) => {
    return <img src={props.path} alt={props.title} style={{ height: 200, width: 250 }} />
}
const AnimalDetails = (props) => {
    // let { item } = props

    let { name, count, isEndagered } = props.item
    return <>
        <li>
            {props.image}
            <p>Name : {name} </p>
            <p>Count: {count}</p>
            <p>Endangered: {isEndagered ? "Yes" : "No"}</p>
        </li>

    </>
}

const Animal = (props) => {
    let { children, list } = props

    const getList = list.map((element,i) => <AnimalDetails key={i} item={element} image={<Image path={element.photo} title={element.name} />} />)
    return <>
        {props.children}        
        <ul>
            {getList}
        </ul>

    </>
}

export default Animal

Image.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
AnimalDetails.propTypes = {
    item: PropTypes.object.isRequired
}
Animal.propTypes = {
    list: PropTypes.array
}
//Animal Container (list) -----> animal (single element) -----> animalDetails