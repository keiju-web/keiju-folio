import { PROFILE_IMG_SRC } from 'constants/env'
import { MESSAGE } from 'constants/message'
import { ROUTES } from 'constants/route'

import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  Paper,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import { styled } from '@mui/system'
import { GitHubBtn, Image } from 'components'
import { useToast } from 'hooks/use-toast'
import { memo, useCallback, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { fadeIn, slideInFromLeft, slideInFromRight } from 'styles/keyframes'

import type { FC } from 'react'

const Sidebar: FC = () => {
  const theme = useTheme()

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen(!drawerOpen)
  }, [drawerOpen])

  return (
    <Box component='nav'>
      <Hidden mdUp>
        <AppBar position='static'>
          <Toolbar sx={{ pr: 1 }}>
            <IconButton
              edge='start'
              aria-label='open drawer'
              onClick={handleDrawerToggle}
              sx={{
                bgcolor: 'primary.main',
              }}
            >
              <MenuIcon
                fontSize='large'
                style={{
                  color: theme.palette.background.default,
                }}
              />
            </IconButton>
            <Drawer
              variant='temporary'
              anchor='left'
              open={drawerOpen}
              onClose={handleDrawerToggle}
              PaperProps={{ style: { width: '80%' } }}
            >
              <Contents handleDrawerToggle={handleDrawerToggle} />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Hidden>

      <Hidden mdDown>
        <Contents />
      </Hidden>
    </Box>
  )
}

const Contents: FC<{ handleDrawerToggle?: () => void }> = (props) => {
  const location = useLocation()
  const { openToast } = useToast()

  const onClickComingSoonPage = useCallback(() => {
    openToast({
      message: MESSAGE.NOT_READY_PAGE,
      severity: 'info',
    })
  }, [])

  return (
    <Paper elevation={12} sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
      <Box pt={8} pb={2}>
        <Image
          image={PROFILE_IMG_SRC}
          alt='profile-pic'
          sx={{
            animation: `${fadeIn} 4s`,
            // Fixed image size
            width: { xs: '100px', sm: '200px' },
            height: { xs: '100px', sm: '200px' },
          }}
        />
        <Typography mt={2} variant='h4' color='textSecondary' textAlign='center'>
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
              <Link to={route.path} onClick={props.handleDrawerToggle}>
                <BottomedTypography className={location.pathname === route.path ? 'active' : ''}>
                  {route.name}
                </BottomedTypography>
              </Link>
            )}
          </ListItem>
        ))}
        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
          <GitHubBtn />
        </ListItem>
      </List>
    </Paper>
  )
}

const BottomedTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    fontSize: '30px !important',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    fontSize: '28px !important',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px !important',
  },
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
