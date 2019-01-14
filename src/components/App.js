import React, { Component, Fragment } from 'react'
import { filter, sample } from 'lodash'
import { storedCustomers, customColors } from './data/_storedCustomers'

import CreateCustomerDialog from './CreateCustomerDialog'
import CustomersList from './CustomersList'
import Header from './Header'
import SearchBar from './SearchBar'
import withStyles from '@material-ui/core/styles/withStyles'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import { MuiThemeProvider } from '@material-ui/core'
import theme from '../theme/muiTheme'

const emptyFormData = {
  firstName: "",
  lastName: "",
  sex: "",
  birthday: "",
  avatarColor: ""
}

const styles = theme => ({
  fab: {
    position: 'fixed',
    right: 20,
    marginTop: 20
  }
})

class App extends Component {
  state = {
    formData: emptyFormData,
    filterText: "",
    filteredCustomers: [],
    customers: storedCustomers,
    openDialog: false,
    editMode: false,
    idCounter: storedCustomers.length
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(({ formData }) => ({ 
      formData: { ...formData, [name]: value } 
    }))
  }

  handleClickOpen = () => {
    this.setState({ openDialog: true })
  }

  handleClose = () => {
    this.setState({ openDialog: false })
  }

  handleDelete = deleteId => () => {
    this.setState(({ customers, filteredCustomers }) => ({ 
      customers: customers.filter(({ id }) => id !== deleteId),
      filteredCustomers: filteredCustomers.filter(({ id }) => id !== deleteId)
    }))
  }

  handleEdit = editId => () => {
    this.setState(({ customers }) => {
      const customerToEdit = customers.filter(({ id }) => id === editId)[0]
      return {formData: customerToEdit, openDialog: true, editMode: true}
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(({ formData, customers, idCounter, editMode }) => {
      if (formData.avatarColor === '') {
        formData.avatarColor = sample(customColors)
      }
      let newCustomers = editMode 
        ? customers.filter(({ id }) => formData.id !== id) 
        : customers
      formData.id = idCounter
      newCustomers.push(formData)

      return {
        formData: emptyFormData,
        customers: newCustomers,
        filterText: "",
        filteredCustomers: [],
        openDialog: false,
        editMode: false,
        idCounter: ++idCounter
      }
    })
  }

  filterSearch = ({ target: { value }}) => {
    this.setState(({ customers }) => {
      const filtered = filter(customers, ({ firstName, lastName }) => {
        const combined = firstName + lastName
        return combined.toLowerCase().search(value.toLowerCase()) !== -1
      })
      return { filteredCustomers: filtered, filterText: [value] }
    })
  }

  render() {
    const { filterText, customers, filteredCustomers } = this.state
    const { classes } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <Header>
          <SearchBar
            searchText={filterText}
            onChange={this.filterSearch}
          />
        <Fab
          color="primary"
          className={classes.fab}
          onClick={this.handleClickOpen}
          type="submit"
        >
          <AddIcon />
        </Fab>
        </Header>
        <main>
          <CreateCustomerDialog
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleClose={this.handleClose}
          />
          <CustomersList
            customers={filterText ? filteredCustomers : customers}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </main>

      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App)
