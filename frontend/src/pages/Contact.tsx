import { FC } from 'react'

import { getAllContacts } from 'api/contact'
import { InsertContact } from 'types/contact'
import { useSuspenseQuery } from 'utils/react-query'

const req: InsertContact[] = [
  {
    content: 'aa',
    email: 'bb',
    name: 'cc',
  },
]

const Contact: FC = () => {
  const { data } = useSuspenseQuery('selectContacts', () => getAllContacts())
  return (
    <div>
      {data.map((d) => {
        return <div key={d.id}>{d.content}</div>
      })}
    </div>
  )
}

export default Contact
