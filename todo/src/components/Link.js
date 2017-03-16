import React, { PropTypes } from 'react'

const Link = ({ active, children, setVisibilityFilter, filter }) => {
  if (active) {
    return <span>{children}</span>
  }

  let onClick = function(){
    console.log("setVisibilityFilter", setVisibilityFilter)
    setVisibilityFilter(filter)
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
