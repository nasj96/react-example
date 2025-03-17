import React from "react";

const TitleContext = React.createContext<string>('');

const Title = () => {
    // const title = useContext(TitleContext);
    // return <p>{title}</p>;

    return (
        <TitleContext.Consumer>
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    );

}

const Header = () => {
    return (
        <Title />
    );
}

const Page = () => {
    const title = 'React Book'

    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    );
}

export default Page;