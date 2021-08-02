const Read = (props) => {
    const { title, desc } = props
    return (
        <article>
            <h2>{title}</h2>
            Hello, {desc}
        </article>
    )
}

export default Read;