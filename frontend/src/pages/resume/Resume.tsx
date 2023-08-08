import { FC } from 'react'

import { Box, Grid, Grow } from '@mui/material'
import { getAllResume } from 'api/resume'
import Accordion from 'components/accordion/Accordion'
import CVDownloadBtn from 'components/button/CVDownloadBtn'
import CenterContainer from 'components/container/CenterContainer'
import TextLines from 'components/text/TextLines'
import { useSuspenseQuery } from 'utils/react-query'

import SkillValues from './components/SkillValues'

const Resume: FC = () => {
  const { data } = useSuspenseQuery('getAllResume', getAllResume)

  return (
    <CenterContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          {data.map((d, i) => {
            return (
              <Grow key={i} in={true} timeout={(i + 1) * 500}>
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
