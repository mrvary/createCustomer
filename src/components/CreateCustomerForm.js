// import React from 'react'

// import FormLabel from '@material-ui/core/FormLabel'
// import FormControl from '@material-ui/core/FormControl'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Paper      from '@material-ui/core/Paper'
// import Radio      from '@material-ui/core/Radio'
// import RadioGroup from '@material-ui/core/RadioGroup'
// import TextField  from '@material-ui/core/TextField'
// import withStyles from '@material-ui/core/styles/withStyles'

// const styles = theme => ({
//   paper: {
//     marginTop: theme.spacing.unit * 3,
//     marginBottom: theme.spacing.unit * 3,
//     padding: theme.spacing.unit * 2,
//     [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
//       marginTop: theme.spacing.unit * 6,
//       marginBottom: theme.spacing.unit * 6,
//       padding: theme.spacing.unit * 3,
//     },
//   },
// })

// function CreateCustomerForm(props) {
//   const { handleSubmit, handleChange, classes} = props
//   const { formData: {firstName, lastName, sex, birthday} } = props

//   return (
//     <Paper className={classes.paper}>
//     <form>
//       <legend>Create a customer: </legend>

//       <TextField
//         autoFocus
//         label="First name"
//         name="firstName"
//         placeholder="Enter your first name ..."
//         onChange={handleChange}
//         value={firstName}
//         required
//       />

//       <TextField
//         label="Last name"
//         name="lastName"
//         placeholder="Enter your last name ..."
//         onChange={handleChange}
//         value={lastName}
//         required
//       />

//       <TextField
//         name="birthday"
//         label="Birthday"
//         type="date"
//         onChange={handleChange}
//         value={birthday}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />

//       <FormControl component="fieldset">
//           <FormLabel component="legend">Sex</FormLabel>
//           <RadioGroup
//             aria-label="Gender"
//             name="sex"
//             value={sex}
//             onChange={handleChange}
//           >
//             <FormControlLabel value="female" control={<Radio />} label="Female" />
//             <FormControlLabel value="male" control={<Radio />} label="Male" />
//           </RadioGroup>
//       </ FormControl>

//       {/* <Button onClick={handleSubmit}>Add</Button> */}

//     </form>
//     </Paper>
//   )
// }

// export default withStyles(styles)(CreateCustomerForm)