import React from 'react'

const Greets= props => {
    console.log(props)
     return (
     <div>
     <h1>
        Hello {props.name} a.k.a {props.superhero}
        </h1>
        {props.children}
    </div>
     )
}

export default Greets