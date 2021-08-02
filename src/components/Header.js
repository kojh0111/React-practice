const Header = (props) => {
    const onClickHandler = e => {
        e.preventDefault();
        props.onChangeMode();
    }
    return (
        <header>
            <h1>
                <a href="index.html" onClick={onClickHandler}>Web</a>
            </h1>
        </header>
    )
}

export default Header;