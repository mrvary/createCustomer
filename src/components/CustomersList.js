import React from 'react'

import './CustomersList.css'

function CustomersList (props) {
  return (
    <ul className="component-customers-list">
      {
        props.customers.map(({lastName, firstName, sex, birthday}, i) => {
          return <li key={i}> <p>{firstName} {lastName} {sex} {birthday}</p> </li>
        })
      }
    </ul>
  )
}

export default CustomersList