import React from "react";

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case 'DECREMENT':
            return currentCount - 1;
        case 'INCREMENT':
            return currentCount + 1;
        case 'DOUBLE':
            return currentCount * 2;
        case 'RESET':
            return 0;
        default:
            return currentCount;
    }
}

type CouterProps = {
    initialValue: number;
}

const CounterUseReducer = (props: CouterProps) => {
    const { initialValue } = props;
    const [count, dispatch] = React.useReducer(reducer, initialValue);

    return (
        <div>
            <p>Count : {count}</p>

            <button onClick={()=>dispatch('DECREMENT')}>-</button>
            <button onClick={()=>dispatch('INCREMENT')}>+</button>
            <button onClick={()=>dispatch('DOUBLE')}>*2</button>
            <button onClick={()=>dispatch('RESET')}>Reset</button>
        </div>
    );
}

export default CounterUseReducer;