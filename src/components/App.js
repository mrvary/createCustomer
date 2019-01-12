import React, { Component, Fragment } from 'react'
import { filter } from 'lodash'

import './App.css';

import Header from './Header'
import CreateCustomerForm from './CreateCustomerForm'
import CustomersList from './CustomersList'
import SearchBar from './SearchBar'

const emptyFormData = { firstName: "", lastName: "", sex: "", birthday: "" }

class App extends Component {

  state = {
    formData: emptyFormData,
    filterText: "",
    filteredCustomers: [],
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
        customers: newCustomers,
        filterText: "",
        filteredCustomers: []
      }
    })
  }

  filterSearch = (customers) => (e) => {
    this.setState({ filterText: [e.target.value] })

    let filtered = filter(customers, (c) => {
      const { firstName, lastName } = c
      const combined = firstName + lastName
      return combined.toLowerCase()
              .search( e.target.value.toLowerCase()) !== -1
    })

    this.setState({ filteredCustomers: filtered })
  }

  render() {
    const { filterText, customers, filteredCustomers } = this.state

    return (
      <Fragment>
        <Header />
        <main>
          <CreateCustomerForm 
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <SearchBar 
            searchText={filterText}
            onChange={this.filterSearch(customers)}
          />
          <CustomersList 
            customers={ filterText ? filteredCustomers : customers }
          />
        </main>
      </Fragment>
    );
  }
} 

export default App;
