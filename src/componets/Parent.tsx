import React, { memo } from "react";

type FizzProps = {
    isFizz: boolean;
}

const Fizz = (props: FizzProps) => {
    const { isFizz } = props;

    return (
        <div>
            {isFizz ? 'Fizz' : ''}
        </div>
    );
}

type BuzzProps = {
    isBuzz: boolean;
    onClick: () => void;
}

// const Buzz = (props: BuzzProps) => {
const Buzz = memo<BuzzProps>((props) => {
    const { isBuzz } = props;
    console.log(`Buzz가 다시 렌더링 되었습니다. isBuzz: ${isBuzz}`);

    return (
        <div>
            {isBuzz ? 'Buzz' : ''}
        </div>
    );
})

export const Parent = () => {
    const [count, setCount] = React.useState(1);
    const isFizz = count % 3 === 0;
    const isBuzz = count % 5 === 0;

    const onBuzzClick = () => {
        console.log('버튼이 클릭되었습니다. isBuzz: ', isBuzz);
    }
    console.log('Parent가 다시 렌더링 되었습니다. count: ', count);

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Count : {count}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick}/>
            </p>
        </div>
    );
}

export default Parent
