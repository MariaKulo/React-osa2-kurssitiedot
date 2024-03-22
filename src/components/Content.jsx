import React from 'react'

const Content = ({ course }) => {

    const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0)

    return (
        <div>
            {course.parts.map(part => (
                <p key={part.id}>{part.name} {part.exercises}</p>
            ))}
                <p><strong>Total of {totalExercises} exercises</strong></p>
        </div>
    )
}

export default Content