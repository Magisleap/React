import type React from 'react'
import './App.css'
import './utils/i18n'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const App = (): React.JSX.Element => {
  const { t } = useTranslation()
  return (
    <Container maxWidth='sm'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              {t('message.hello')}
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  )
}

export default App
