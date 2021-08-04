import React, { useState } from 'react';

const Update = ({ data, id, onUpdateSubmit, setData }) => {
    const handleSubmit = e => {
        e.preventDefault()
        let title = e.target.title.value
        let desc = e.target.desc.value
        onUpdateSubmit({
            title: title,
            desc: desc
        })
    }
    const clickHandler = (e) => {
        e.preventDefault()
        console.log(id)
        setData((cur) => {
            let newData = []
            for (let i = 0; i < data.length; i++) {
                if (data[i]._id !== id) {
                    newData.push(data[i])
                }
            }
            return newData
        })
    }

    let select_title
    let select_desc
    for (let i = 0; i < data.length; i++) {
        if (data[i]._id === id) {
            select_title = data[i].title
            select_desc = data[i].desc
        }
    }
    const [title, setTitle] = useState(select_title)
    const [desc, setDesc] = useState(select_desc)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Update</h2>
                <p><input
                    type="text"
                    placeholder="title"
                    name="title"
                    onChange={e => setTitle(e.target.value)}
                    value={title}></input>
                </p>
                <p><textarea
                    placeholder="description"
                    name="desc"
                    onChange={e => setDesc(e.target.value)}
                    value={desc}></textarea>
                </p>
                <p><input type="submit"></input></p>
                <input type="button" value="삭제" data-mode="DELETE" onClick={clickHandler}></input>
            </form>
        </div>)
}

export default Update