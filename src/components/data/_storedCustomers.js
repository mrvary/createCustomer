let id = -1;
const createData = (firstName, lastName, sex, birthday, avatarColor) => {
  id += 1;
  return { id, firstName, lastName, sex, birthday, avatarColor }
}

const storedCustomers = [
  createData("Heinz", "Meier", "male", "1990-08-01", "#3a90b7"),
  createData("Jennifer", "Bauer", "female", "1986-12-13", "#ab0f59"),
  createData("Robert", "Müller", "male", "1997-03-01", "#3a90b7"),
  createData("Barbara", "Schmidt", "female", "1950-05-21", "#222")
]

const customColors = ['#ab0f59', '#3a90b7', '#222']

export { storedCustomers, customColors }