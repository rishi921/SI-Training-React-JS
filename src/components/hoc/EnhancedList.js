import { useState } from "react";

function GeneralList(props) {
    return <div className={`bg- ${props.theme} p-2`}>
        {props.list.map((item, index) => <div key={index}>{item}</div>)}
    </div>
}

//------------------Component to render a button-----------------
function ActionButton(props) {
    const handleClick = () => props.callback();
    return <button onClick={handleClick}>{props.text}</button>
}

//-----_Sorted List---
function SortedList(props) {
    const [toSort, setToSort] = useState(false)

    const getList = () => toSort ? props.list.sort() : props.list

    let toggleSort = () => setToSort(true)

    return <>
        <GeneralList theme='info' list={getList()} />
        <div className="text-center m-2">
            <ActionButton text='Sort' callback={toggleSort} />
        </div>
    </>
}

//----Function that accepts the component and returns enhanced component
// const EnhancedComponent = higherOrderComponent(WrappedComponent);

function higherOrderComponent(FeatureComponent) {
    return function (props) {
        let { status, ...childprops } = props;
        if (status) {
            return <FeatureComponent {...childprops} />
        }
        else {
            return (
                <h4 className='bg-warning text-black text center m-2 p-2'>This is a Pro Feature</h4>
            )
        }
    }
}

//==========Call the Function========
const EnhancedComponent = higherOrderComponent(SortedList);

//=============Container======

export default function ProFeatureContainer() {
    const [fruits, setFruits] = useState(['Mango', 'Guava', 'Orange', 'Jackfruit', 'Pine-apple']);

    const [cities, setCities] = useState(['Mumbai', 'Delhi', 'Ranchi', 'Chennai', 'Lucknow']);

    let [proMode, setProMode] = useState(false);
    const toggleProMode = () => { setProMode(!proMode) };

    return <div className="container-fluid">
        {/* Row 1 */}
        <div className="row">
            <div className="col-12 text-center p-2">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value={proMode} onChange={toggleProMode} />
                    <label className="form-check-label">Pro Mode</label>
                </div>
            </div>
        </div>

        {/* Row 2 */}
        <div className="row">
            <div className="col-3">
                <GeneralList theme='primary' list={fruits} />
            </div>

            <div className="col-3">
                <EnhancedComponent list={fruits} status={proMode} />
            </div>

            <div className="col-3">
                <GeneralList theme='primary' list={cities} />
            </div>

            <div className="col-3">
                <EnhancedComponent list={cities} status={proMode} />
            </div>
        </div>
    </div>
}