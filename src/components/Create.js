import React from 'react'

const Create = ({ onCreateSubmit }) => {
    const handleSubmit = e => {
        e.preventDefault()
        let title = e.target.title.value
        let desc = e.target.desc.value
        onCreateSubmit({
            title: title,
            desc: desc
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create</h2>
                <p><input type="text" placeholder="title" name="title"></input></p>
                <p><textarea placeholder="description" name="desc"></textarea></p>
                <p><input type="submit"></input></p>
            </form>
        </div>)
}

export default Create