import { useState } from 'react';

import Algorithms from './navbar-components/algorithms';
import Size from './navbar-components/size';
import Speed from './navbar-components/speed';

const Navbar = (props) => {
    const [algorithms] = useState([
        { value: 1, type: 'Bubble Sort' },
        { value: 2, type: 'Selection Sort' },
        { value: 3, type: 'Insertion Sort' },
        { value: 4, type: 'Merge Sort' },
        { value: 5, type: 'Quick Sort' },
        { value: 6, type: 'Heap Sort' },
        // { value: 7, type: 'Twist Sort' },
    ]);

    const [lengths] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    const [speeds] = useState([0.50, 0.75, 1.00, 2.00, 4.00]);

    const handleClick = (e) => {
        e.preventDefault();
        props.response();
    }

    return (
        <div className="navbar" id="navbar">
            <button id="random" onClick={() => props.newList(1)}>Random</button>
            <Algorithms 
                onChange={props.onChange}
                algorithms={algorithms}
            />
            <Size 
                onChange={props.onChange}
                lengths={lengths}
            />
            <Speed 
                onChange={props.onChange}
                speeds={speeds}
            />
            <button id="start" onClick={() => props.start()}>Start</button>
            <a 
                className="icon" 
                onClick={(e) => handleClick(e)}
                href="/">
                <i className="fa fa-bars"></i>
            </a>
        </div>
    );
}

export default Navbar;
