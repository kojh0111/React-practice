const Nav = (props) => {
    const { onChangeMode, data } = props
    const onClickHandler = e => {
        e.preventDefault();
        const _id = parseInt(e.target.dataset.id) // 이게 없으면 문자열이라서 state를 이용해 id값을 비교할 수 없음
        onChangeMode(_id);
    }
    const lis = []
    data.map(d => (
        lis.push(<li key={d._id}><a data-id={d._id} href={d._id + ".html"} onClick={onClickHandler}>{d.title}</a></li>)
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