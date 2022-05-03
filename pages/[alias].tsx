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


      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Have a good WOD --  <a href ="https://www.linkedin.com/in/jacobkevin/">  Kevin</a> and <a href ="https://github.com/Addono" >Adriaan</a>
        </a>
      </footer>
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
  const alias = router.query.alias
  if(!alias) {
    return(
      <>
      Rest Day
      </>
    )
  }
  const wod_data = data.find(d=>d.alias.includes(typeof alias=== "string"? alias: alias[0]))
  if (!wod_data){
    return(
      <PageLayout >
        <h1 className={styles.title}>
        Rest Day!! Remember to Eat Well, Drink Water and Rest well. 
      </h1>
      <RandomWodButton/>
      <RehabWodButton/>
      </PageLayout>
    )
  }
  return (
    <PageLayout>
      <WodCard {...wod_data}/>
      <RandomWodButton/>
      <RehabWodButton/>
    </PageLayout>  
  )
}

export default Home
