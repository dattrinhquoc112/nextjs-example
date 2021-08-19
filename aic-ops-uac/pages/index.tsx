import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Screen1 from './src/pages/screen1'
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <h3>Home page</h3>
      <Button onClick={() => router.push("/screen1")}>Screen 1</Button>
    </>
  )
}

export default Home
