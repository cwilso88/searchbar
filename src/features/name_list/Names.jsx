import React from 'react'


const Names = ({ names }) => {
    return names.map((name, index) => {
        return (
            <ul>
                <li>{name.name}</li>
            </ul>
        )
    })
}

export default Names;