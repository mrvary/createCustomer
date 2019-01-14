import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Grid from '@material-ui/core/Grid'

const FormDialog = ({ 
  handleSubmit,
  handleChange,
  handleClose,
  openDialog,
  formData: {
    firstName,
    lastName,
    sex,
    birthday
  }
}) => (
  <div>
    <Dialog
      open={openDialog}
      onClose={handleClose}
    >
      <DialogTitle>
        Add a new customer
      </DialogTitle>

      <DialogContent>
        { 
          renderGridWithFourComponents(
            renderTextInput("First name", "firstName", handleChange, firstName),
            renderTextInput("Last name", "lastName", handleChange, lastName),
            renderDatePicker(handleChange, birthday),
            renderSexSelect(handleChange, sex)
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} variant="contained" >
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  </div>
)

const renderTextInput = (label, name, onChange, value) => (
  <TextField
    label={label}
    name={name}
    onChange={onChange}
    value={value}
    required
    fullWidth
  />
)

const renderDatePicker = (onChange, value) => (
  <TextField
    name="birthday"
    label="Birthday"
    type="date"
    onChange={onChange}
    value={value}
    InputLabelProps={{
      shrink: true
    }}
    fullWidth
  />
)

const renderSexSelect = (onChange, sex) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Sex</FormLabel>
    <RadioGroup
      aria-label="Gender"
      name="sex"
      value={sex}
      onChange={onChange}
      row={true}
    >
      <FormControlLabel
        value="female"
        control={<Radio color="primary"/>}
        label="Female"
      />
      <FormControlLabel 
        value="male" 
        control={<Radio color="primary"/>} 
        label="Male" 
      />
    </RadioGroup>
  </FormControl>
)

const renderGridWithFourComponents = (...components) => (
  <Grid container spacing={24}>
    <Grid item xs={12} md={6}>
      { components[0] }
    </Grid>

    <Grid item xs={12} md={6}>
      { components[1] }
    </Grid>

    <Grid item xs={12} md={6}>
      { components[2] }
    </Grid>

    <Grid item xs={12} md={6}>
      { components[3] }
    </Grid>
  </Grid>
)

export default FormDialog