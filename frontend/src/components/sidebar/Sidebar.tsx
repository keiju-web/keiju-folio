import { FC, memo, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { PROFILE_IMG_SRC } from 'constants/env'
import { ROUTES } from 'constants/route'

import { Box, Hidden, List, ListItem, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import Image from 'components/image/Image'
import { useToast } from 'hooks/use-toast'
import { fadeIn, slideInFromLeft, slideInFromRight } from 'styles/keyframes'

const Sidebar: FC = () => {
  const location = useLocation()
  const { openToast } = useToast()
  // const [isOpen, setIsOpen] = useState(false)

  // const onDrawerToggle = useCallback(() => {
  //   setIsOpen(!isOpen)
  // }, [isOpen])

  const onClickComingSoonPage = useCallback(() => {
    openToast({
      message: 'Sorry, this page is coming soon',
      severity: 'info',
    })
  }, [])

  return (
    <Box component='nav'>
      {/* TODO: Responsive design for SP */}
      {/* <Drawer variant='temporary' open={isOpen} onClose={onDrawerToggle}> */}
      <Hidden smDown>
        <Paper elevation={12} sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
          <Box pt={8} pb={2}>
            <Image
              image={PROFILE_IMG_SRC}
              alt='profile-pic'
              sx={{
                animation: `${fadeIn} 4s`,
                // Fixed image size
                width: '200px',
                height: '200px',
              }}
            />
            <Typography mt={2} variant='h4' component='h1' color='textSecondary' textAlign='center'>
              Keiju Hikichi
            </Typography>
          </Box>

          <List>
            {ROUTES.filter((route) => route.name).map((route, key) => (
              <ListItem
                key={key}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  animation: `${key % 2 === 0 ? slideInFromLeft : slideInFromRight} 1s ease-out`,
                }}
              >
                {route.isComingSoon ? (
                  <Box sx={{ cursor: 'pointer' }}>
                    <BottomedTypography onClick={onClickComingSoonPage}>
                      {route.name}
                    </BottomedTypography>
                  </Box>
                ) : (
                  <Link to={route.path}>
                    <BottomedTypography
                      className={location.pathname === route.path ? 'active' : ''}
                    >
                      {route.name}
                    </BottomedTypography>
                  </Link>
                )}
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
  fontSize: '26px',
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
