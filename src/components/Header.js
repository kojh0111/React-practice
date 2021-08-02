const Header = ({ onChangeMode }) => {
    const onClickHandler = e => {
        e.preventDefault();
        onChangeMode();
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