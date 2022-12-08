import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Caption from '../../../Components/Caption'


export default function captionComponentText() {
    return (
      <div>
        <Caption 
          text="Free Stock Photos"
        />
      </div>
    )
  }
  