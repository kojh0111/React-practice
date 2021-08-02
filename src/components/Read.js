const Read = (props) => {
    const { title, dsc } = props
    return (
        <article>
            <h2>{title}</h2>
            Hello, {dsc}
        </article>
    )
}

export default Read;