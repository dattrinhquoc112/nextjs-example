import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Screen1 from './src/pages/screen1'
import { Button } from 'react-bootstrap'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Screen1 />
    </div>
  )
}

export default Home
