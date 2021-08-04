const Control = (props) => {
    const clickHandler = e => {
        e.preventDefault()
        props.onChangeMode(e.target.dataset.mode)
    }
    return (
        <div>
            <a href="/create" data-mode="CREATE" onClick={clickHandler}>create</a> |
            <a href="/update" data-mode="UPDATE" onClick={clickHandler}>update</a> |
            <input type="button" value="delete" data-mode="DELETE" onClick={clickHandler}></input>
        </div>
    )
}

export default Control;