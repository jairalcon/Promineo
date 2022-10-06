import React from 'react'

// destructuring title from parent
const Header = ({ title }) => {
  return (
    <header>
      {/* grabbing from parent component */}
        <h1>{title}</h1>
    </header>
  )
}

// spec-ing component with default props
Header.defaultProps = {
  title: "Default Title"
}

export default Header