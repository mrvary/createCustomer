import React from 'react'

import './CreateCustomerForm.css'

function CreateCustomerForm(props) {
  const { handleSubmit, handleChange } = props
  const { formData: {firstName, lastName, sex} } = props

  return (
    <form onSubmit={handleSubmit}>
      <legend>Create a customer: </legend>

      <br /> 

      <label> First name: 
        <input 
          id="firstName"
          type="text"        
          placeholder="Enter first name ..."
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </label>

      <br />

      <label> Last name:
        <input 
          id="lastName"
          type="text"        
          placeholder="Enter last name ..."
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </label>

      <br />

      <label> Date of birth:
        <input 
          type="date" name="birthday"
          max={new Date().toJSON().slice(0, 10)}
          onChange={handleChange}
        />
      </label>

      <br />

      {/* <div id="sex"> */}
        <label>
          <input 
            type="radio"        
            checked={sex === 'female'}
            value="female"
            name="sex"
            onChange={handleChange}
          /> Female
        </label>
        <label>
          <input 
            type="radio"        
            checked={sex === 'male'}
            value="male"
            name="sex"
            onChange={handleChange}
          /> Male
        </label>

      {/* </div> */}

      <br />

      <button>Create</button>

    </form>
  )
}

export default CreateCustomerForm