import React from 'react'

function Users() {

    return (
        <>
            <h1>This is User's Data Page</h1>
            <table className='table table-primary mt-5'>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                </thead>

                <tbody>
                    <tr>
                        <td>ABC</td>
                        <td>Abc@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Users