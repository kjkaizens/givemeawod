import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Home.module.css'
import data from './wod_data.json'

const Details = (props: { description: string }) => {
  return (
    <>
      <h2>Details </h2>
      {props.description.split('\n').map((text,index) => <p key = {index} id = {index.toString()}>{text}</p>)}
    </>
  )
}

const WodCard = (props: { name:string, equipments: string, description: string, video?:string }) => {
  return (
    <div>
      <h1 className={styles.title}>
        {props.name}
      </h1>

      <p className={styles.description}>
        Equipments needed :  {props.equipments}
      </p>

      <div className={styles.grid}>
        {props.video ?
          <a href={props.video} className={styles.card}>
            <Details description={props.description} />
          </a>
          :
          <div className={styles.card}>
            <Details description={props.description} />
          </div>}
      </div>
    </div>
  )
}

const PageLayout = (props:{children:React.ReactChild|React.ReactChild[]}) =>{
  return(
    <div className={styles.container}>
      <Head>
        <title>Give me a WOD</title>
        <meta name="description" content="Creates Workout of the day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className={styles.main}>
        {props.children}
      </main>
    </div>
  )
}

const RandomWodButton = () =>{
  const l = data.length
  const d = Math.floor(Math.random() * l);
  const randomWodLink = "/" + data[d].alias
  return(
    <a href={randomWodLink}>
    <button className={styles.randomWodButton}>
      Give me another WOD
    </button>
    </a>
  )
}

const RehabWodButton = () =>{
  const rehabWodLink = "/rehabWOD"
  return(
    //<a target="_blank" href={process.env.PUBLIC_URL + "terminos.html"} > terminos</a>
    //<a href={rehabWodLink}>
    <a href={"rehabWOD/index.html"} >  
    <button className={styles.rehabWodButton}>
      Give me Rehab WOD
    </button>
    </a>
  )
}


const Home: NextPage = () => {
  const router = useRouter()
  const today_alias = router.query.alias
  if(!today_alias) {
    return(
      <>
      Page not found. Return to main page
      </>
    )
  }
  const ss = typeof today_alias=== "string"? today_alias: today_alias[0]
  const wod_data = data.find(d=>d.alias===ss)
  if (!wod_data){
    const l = data.length
    const x = Math.floor(Math.random() * l);
    const new_wod_data = data[x]
    return(
      <PageLayout>
        <WodCard {...new_wod_data}/>
        <RandomWodButton/>
        {/* <RehabWodButton/> */}
    </PageLayout>  
    )
  }
  return (
    <PageLayout>
      <WodCard {...wod_data}/>
      <RandomWodButton/>
      {/* <RehabWodButton/> */}
    </PageLayout>  
  )
}

export default Home
