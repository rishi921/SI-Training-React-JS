import { useState } from "react";

const EmojiDisplay = () => {
    const[mood, setMood] = useState('unknown');
    let emotions = new Map();
    emotions.set('😌', 'Listen to Music');
    emotions.set('😉', 'Go for a Ride');
    emotions.set('😙', 'Hey Dude Cheer Up');
    emotions.set('😇', 'Let me Join with you');
    emotions.set('💪', 'Go to Gym');

    //Handle the Method
    const handleMoodChange = (e) => { setMood(e.target.value) }

    //Method that returns dropdown list options by iterating through the Map
    const populateDropdownList = () => {
        return <select onChange={handleMoodChange}>
            <option value='Select an Emoji'>Select an Emoji</option>
            {[...emotions.keys()].map(k => <option key={k} value={emotions.get(k)}>{k}</option>)}
        </select>
    }
    return <div className="container m-2 p-3">
        <h1>What's your Mood ?</h1>
        <h2>{mood}</h2>
        <br />
        {populateDropdownList()}
    </div>
}
export default EmojiDisplay;