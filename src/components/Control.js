const Control = ({ onChangeMode }) => {
    const clickHandler = e => {
        e.preventDefault()
        onChangeMode()
    }
    return (
        <div>
            <a href="/create" data-mode="create" onClick={clickHandler}>create</a> |
            <a href="/update" data-mode="update" onClick={clickHandler}>update</a> |
            <input type="button" value="delete" data-mode="delete" onClick={clickHandler}></input>
        </div>
    )
}

export default Control;