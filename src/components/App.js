import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './Header'
import CreateCustomerForm from './CreateCustomerForm'
import CustomersList from './CustomersList'

const emptyFormData = { firstName: "", lastName: "", sex: "", birthday: "" }

class App extends Component {

  state = {
    formData: emptyFormData,
    customers: []
  }

  handleChange = (e) => {
    const {name, value, type} = e.target
    const { formData } = this.state

    type === 'checkbox'  
      ? this.setState({ formData: {...formData, [name]: value}}) 
      : this.setState({ formData: {...formData, [e.target.name]: e.target.value}})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      const { formData, customers } = prevState
      let newCustomers = customers
      newCustomers.push(formData)

      return {
        formData: emptyFormData,
        customers: newCustomers
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <CreateCustomerForm 
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <CustomersList 
            customers={this.state.customers}
          />
        </main>
      </Fragment>
    );
  }
} 


export default App;
