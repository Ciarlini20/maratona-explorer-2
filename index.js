function changeTheme() {
  const body = document.querySelector('#body')
  const button = document.querySelector('#Button')
  if (body.classList.contains('dark') == true) {
    body.classList.remove('dark')
  } else {
    body.classList.add('dark')
  }
}
