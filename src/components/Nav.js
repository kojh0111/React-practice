const Nav = (props) => {
    const { onChangeMode, data } = props
    const onClickHandler = e => {
        console.log(e.target.text)
        e.preventDefault();
        props.onChangeMode();
    }
    const lis = []
    data.map(d => (
        lis.push(<li key={d._id}><a href={d._id + ".html"} onClick={onClickHandler}>{d.title}</a></li>)
    ))
    return (
        <nav>
            <ul>
                {lis}
            </ul>
        </nav>
    )
}

export default Nav;