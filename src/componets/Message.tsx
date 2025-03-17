const Text = (props: { content: string }) => {
    const { content } = props;
    return <p className="text">{content}</p>;
};

const Message = () => {
    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.value);
    // };

    const content1 = 'This is parent component';
    const content2 = 'Message uses Text component';

    return (
        <div>
            <Text content={content1} />
            <Text content={content2} />
        </div>
    );
};


export default Message;
