function changeTheme() {
  const bodyTheme = document.querySelector('#changeBody')
  const buttonTheme = document.querySelector('#changeButton')

  if (bodyTheme.classList.contains('dark') == true) {
    bodyTheme.classList.remove('dark')
    buttonTheme.classList.remove('dark')
  } else {
    bodyTheme.classList.add('dark')
    buttonTheme.classList.add('dark')
  }
}