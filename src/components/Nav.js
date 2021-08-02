const Nav = (props) => {
    const { data } = props
    const lis = []
    data.map(d => {
        lis.push(<li><a href="1.html">{d.title}</a></li>)
    })
    return (
        <nav>
            <ul>
                {lis}
            </ul>
        </nav>
    )
}

export default Nav;