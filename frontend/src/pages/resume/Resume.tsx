import { Box, Grid, Grow } from '@mui/material'
import { getAllResume } from 'api/resume'
import { Accordion, CVDownloadBtn, CenterContainer, TextLines } from 'components'
import { useSuspenseQuery } from 'utils/react-query'

import Badges from './components/Badges'
import SkillValues from './components/SkillValues'

import type { FC } from 'react'

const Resume: FC = () => {
  const { data } = useSuspenseQuery('getAllResume', getAllResume)

  return (
    <CenterContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Badges />
          {data.map((d, i) => {
            return (
              <Grow key={i} in timeout={(i + 1) * 500}>
                <Box mt={2}>
                  <Accordion title={d.title}>
                    <TextLines text={d.content} />
                  </Accordion>
                </Box>
              </Grow>
            )
          })}
        </Grid>
        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
          <SkillValues />
          <Box mt={4} display='flex' justifyContent='center'>
            <CVDownloadBtn />
          </Box>
        </Grid>
      </Grid>
    </CenterContainer>
  )
}

export default Resume
