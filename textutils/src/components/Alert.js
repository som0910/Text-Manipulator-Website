import React from 'react'

export default function Alert(props) {
    return (
        props.alert!="" && <div className="my-3">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                {props.alert}
            </div>
        </div>
    )
}
