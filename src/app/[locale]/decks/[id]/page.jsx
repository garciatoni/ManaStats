import React from 'react'

export const page = ({ params }) => {
    const { id } = params;

    return (
        <div>
            <h1>Barajas de Usuario {id}</h1>
        </div>
    )
}

export default page;