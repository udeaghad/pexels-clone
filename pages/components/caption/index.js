import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Caption from '../../../Components/Caption/Caption'


export default function captionComponentText() {
    return (
      <div>
        <Caption 
          text="Free Stock Photos"
          color="text-slate-600"
          size="text-xl"
          variant="h4"
          
        />
      </div>
    )
  }
  