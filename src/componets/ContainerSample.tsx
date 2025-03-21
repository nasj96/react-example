// const Container = (props: { title: string, children: React.ReactNode }) => {
//     const { title, children } = props;

//     return (
//         <div style={{ backgroundColor: "red" }}>
//             {props.children}

//             <span>{title}</span>
//             <div>{children}</div>
//         </div>
//     );
// }

type ContainerProps = {
    title: string;
    children: React.ReactNode;  
}

const Container = (props: ContainerProps) => {
    const { title, children } = props;

    return (
        <div style={{ backgroundColor: "red" }}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    );
}

const Parent = () => {
    return (
        <Container title="Hello">
            <p>이 부분이 배경색으로 둘러싸여 있습니다.</p>
        </Container>
    );
}

export default Parent;