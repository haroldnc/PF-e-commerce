import React from 'react'
import { Container, MoonIcon, SunIcon } from './StyledDarkModeBtn'


const DarkModeBtn = ({theme, setTheme}) => {

  const handleTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }

  const icon = theme === 'light' ? <MoonIcon /> : <SunIcon />

  return (
    <Container onClick={handleTheme}>
      {
        icon
      }
    </Container>
  )
}

export default DarkModeBtn