import { useMemo, useState } from "react"

const MemoisedSearch = () => {

    const [text, setText] = useState('');
    const [query, setQuery] = useState('');
    
    const fruits = ['Apple', 'Blueberry', 'Rasberry', 'Mango', 'Grapes', 'Orange', 'Coconut', 'Papaya', 'Banana', 'Pears', 'Fig', 'Jack-Fruit', 'Litchi', 'Water-Melon', 'Chickoo', 'Custard-Apple', 'Kiwi']

    const matchedValues = useMemo(() => {
        return fruits.filter(x => x.includes(query))
    }, [query])


    const onTextChanged = (e) => {
        setText(e.target.value)
        setQuery(text)
    }

    return <>
        <input value={text} onChange={onTextChanged} />
        <h2>{matchedValues.join(',')}</h2>
    </>
}

export default MemoisedSearch