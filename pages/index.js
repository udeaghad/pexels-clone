import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../Components/Logo'

export default function Home() {
  return (
    <div>
      <Logo className="w-80 h-80 "
        image="/pexel.png"
        alt="logo"
        link="/"
      />

    </div>
  )
}
