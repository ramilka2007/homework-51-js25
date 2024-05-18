import './App.css'
import {useState} from "react";
import Number from "./Number/Number";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    return (
        <div className="App">
            <button>New numbers</button>
            {numbers.map((number, index) => (<Number key={index} numberToShow={number} />))}
        </div>
    );
};

export default App;
