import React from "react";

type CounterUseStateProps = {
    initialValue: number;
}

const CounterUseState = (props: CounterUseStateProps) => {
    const { initialValue } = props;
    const [count, setCount] = React.useState(initialValue);

    return (
        <div>
            <p>Count : {count}</p>

            <button onClick={()=>setCount(count - 1)}>-</button>
            <button onClick={()=>setCount(count + 1)}>+</button>
        </div>
    );
}

export default CounterUseState;