import './App.css'
import {useState} from "react";
import Number from "./Number/Number";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const changeNumbers = () => {
        const change = () => {
            let newNumbers: number[] = [];
            while (newNumbers) {
                const newNumber: number = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
                if (newNumbers.length === 5) {
                    break;
                } else {
                    if (!newNumbers.includes(newNumber)) {
                        newNumbers.push(newNumber);
                        newNumbers.sort(function (a: number, b: number){
                            return a - b;
                        });
                    }
                }
            }
            return newNumbers;
        };

        setNumbers(change());
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
