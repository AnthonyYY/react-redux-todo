import React from 'react';

const Link = ({
    children,
    active,
    onFilterClick
}) => {
    if(active) {
        return <span>{ children }</span>
    }
    return (
        <a href="#" onClick={onFilterClick}>{ children }</a>
    )
}

export default Link;