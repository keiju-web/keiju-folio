import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from 'constants/route'

import { Box, Hidden, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'

const Sidebar: FC = () => {
  // const [isOpen, setIsOpen] = useState(false)

  // const onDrawerToggle = useCallback(() => {
  //   setIsOpen(!isOpen)
  // }, [isOpen])

  return (
    <Box>
      {/* TODO: Responsive design for SP */}
      {/* <Drawer variant='temporary' open={isOpen} onClose={onDrawerToggle}> */}
      <Hidden smDown>
        <Paper elevation={3} sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
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
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: '24px', color: 'text.secondary' }}>
                        {route.name}
                      </Typography>
                    }
                  />
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

export default memo(Sidebar)
