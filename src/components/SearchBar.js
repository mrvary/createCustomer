import React from 'react'

import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  searchIconContainer: {
    display: 'flex'
  },
  searchIcon: {
    marginTop: '3px'
  }
})

const SearchBar = ({ onChange, searchText, classes }) => (
  <div className={classes.searchIconContainer}>
    <SearchIcon className={classes.searchIcon}></SearchIcon>

    <Input
      label="Search.."
      onChange={onChange}
      placeholder="Search..."
      value={searchText}
      required
    />

  </div>
)

export default withStyles(styles)(SearchBar)