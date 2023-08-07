import { FC } from 'react'

import { Box, Grid, Grow } from '@mui/material'
import { getAllResume } from 'api/resume'
import Accordion from 'components/accordion/Accordion'
import CenterContainer from 'components/container/CenterContainer'
import TextLines from 'components/text/TextLines'
import { useSuspenseQuery } from 'utils/react-query'

import SkillValues from './components/SkillValues'

const Resume: FC = () => {
  const { data } = useSuspenseQuery('getAllResume', getAllResume)

  return (
    <CenterContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          {/* TODO: Make the following into components */}
          {data.map((d, i) => {
            return (
              <Grow key={i} in={true} timeout={i * 2000}>
                <Box mt={2}>
                  <Accordion title={d.title}>
                    <TextLines text={d.content} />
                  </Accordion>
                </Box>
              </Grow>
            )
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <SkillValues />
        </Grid>
      </Grid>
    </CenterContainer>
  )
}

export default Resume
