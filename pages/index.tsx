import { Box } from '@mui/material'
import type { NextPage } from 'next'
import List from '../src/components/List/List'
import { Teacher } from '../src/@types/teacher'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Professor 1",
      picture: 'https://github.com/herbcyor.png',
      description: 'blabla1',
      hr_wage: 200,
    },
    {
      id: 2,
      name: "Professor 2",
      picture: 'https://github.com/herbcyor.png',
      description: 'blabla1',
      hr_wage: 200,
    },
    {
      id: 3,
      name: "Professor 3",
      picture: 'https://github.com/herbcyor.png',
      description: 'blabla1',
      hr_wage: 200,
    },
    {
      id: 4,
      name: "Professor 4",
      picture: 'https://github.com/herbcyor.png',
      description: 'blabla1',
      hr_wage: 200,
    },
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <List teachers={teachers}></List>
    </Box >
  )
}

export default Home
