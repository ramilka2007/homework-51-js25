import './App.css'
import {useState} from "react";
import Number from "./Number/Number";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const changeNumbers = () => {
    }

    return (
        <div className="App">
            <button onClick={changeNumbers}>New numbers</button>
            <div className="rowNumber">
                {numbers.map((number, index) => (<Number key={index} numberToShow={number} />))}
            </div>
        </div>
    );
};

export default App;
