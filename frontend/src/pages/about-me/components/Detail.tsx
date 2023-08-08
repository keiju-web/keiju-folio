import { FC } from 'react'

import { Box, Grow } from '@mui/material'
import { getAllAboutMe } from 'api/about-me'
import TextLines from 'components/text/TextLines'
import { useSuspenseQuery } from 'utils/react-query'

const Detail: FC = () => {
  const { data } = useSuspenseQuery('getAllAboutMe', getAllAboutMe)

  return (
    <>
      {data.map((d, i) => {
        return (
          <Grow key={i} in={true} timeout={i * 500 + 1000}>
            <Box mt={4}>
              <TextLines text={d.content} />
            </Box>
          </Grow>
        )
      })}
    </>
  )
}

export default Detail
