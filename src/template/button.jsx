import React from 'react'

export default props => (
    <button className={'btn btn-'+ props.style}
        onClick={props.onClick}>
            {props.title}
    </button>

)