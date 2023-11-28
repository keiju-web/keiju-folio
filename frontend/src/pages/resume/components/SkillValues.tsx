import { Box, Grow, Typography } from '@mui/material'
import { getAllSkillValues } from 'api/skill-value'
import { LinearProgressWithLabel } from 'components'
import { useCallback } from 'react'
import { useSuspenseQuery } from 'utils/react-query'

import type { LinearProgressProps } from '@mui/material'
import type { FC } from 'react'

const SkillValues: FC = () => {
  const { data } = useSuspenseQuery('getAllSkillValues', getAllSkillValues)

  const getLinearColor = useCallback((value: number): LinearProgressProps['color'] => {
    if (value < 20) return 'error'
    if (value < 40) return 'warning'
    if (value < 60) return 'info'
    return 'success'
  }, [])

  return (
    <>
      <Typography variant='h5' textAlign='center'>
        My skill overview
      </Typography>
      {data
        .sort((a, b) => b.value - a.value)
        .map((d, i) => {
          return (
            <Grow key={i} in timeout={(i + 1) * 500}>
              <Box>
                <Typography>{d.title}</Typography>
                <LinearProgressWithLabel color={getLinearColor(d.value)} value={d.value} />
              </Box>
            </Grow>
          )
        })}
    </>
  )
}

export default SkillValues
