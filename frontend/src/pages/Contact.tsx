import { FC } from 'react'

import { getAllContacts } from 'api/contact'
import { useSuspenseQuery } from 'utils/react-query'

const Contact: FC = () => {
  const { data } = useSuspenseQuery('getAllContacts', () => getAllContacts())

  return (
    <div>
      {data.map((d) => {
        return <div key={d.id}>{d.content}</div>
      })}
    </div>
  )
}

export default Contact
