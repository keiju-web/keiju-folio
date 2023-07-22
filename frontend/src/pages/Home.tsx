import { FC } from 'react'

import { supabase } from 'constants/global-settings'

import Button from 'components/button/Button'

const Home: FC = () => {
  return (
    <div>
      HOME
      <Button onClick={() => supabase.auth.signOut()}>SignOut</Button>
    </div>
  )
}

export default Home
