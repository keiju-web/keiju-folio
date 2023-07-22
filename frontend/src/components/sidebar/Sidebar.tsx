import { FC, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { ROUTES } from 'constants/route'

import { Box, Hidden, List, ListItem, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'

const Sidebar: FC = () => {
  const location = useLocation()
  // const [isOpen, setIsOpen] = useState(false)

  // const onDrawerToggle = useCallback(() => {
  //   setIsOpen(!isOpen)
  // }, [isOpen])

  return (
    <Box>
      {/* TODO: Responsive design for SP */}
      {/* <Drawer variant='temporary' open={isOpen} onClose={onDrawerToggle}> */}
      <Hidden smDown>
        <Paper elevation={12} sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
          <List>
            {ROUTES.filter((route) => route.name).map((route, key) => (
              <ListItem
                key={key}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Link to={route.path}>
                  <BottomedTypography
                    className={location.pathname === route.path ? 'active' : ''}
                    sx={{ fontSize: '24px', color: 'text.secondary' }}
                  >
                    {route.name}
                  </BottomedTypography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Hidden>
      {/* </Drawer> */}
    </Box>
  )
}

const BottomedTypography = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  color: theme.palette.text.secondary,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '4px',
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.text.secondary,
    visibility: 'hidden',
    transform: 'scaleX(0)',
    transition: '.2s',
    transformOrigin: '0 50%',
  },
  '&:hover::after, &.active::after': {
    visibility: 'visible',
    transform: 'scaleX(1)',
  },
}))

export default memo(Sidebar)
