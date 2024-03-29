import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Home.module.css'
import data from './wod_data.json'
import Spec from '../components/spec'
import Navbar from '../components/Navbar'

const Details = (props: { description: string }) => {
  return (
    <p className={styles.lineDescription}>
        {props.description.split(',').map((text,index) => <div key = {index} id = {index.toString()}>{text}</div>)}
    </p>
  )
}


const WodCard = (props: { name:string, equipments: string, description: string, video?:string }) => {
  const handleEvent = () =>{
    console.log('Click or touch event detected!');
    // Enter full screen
    const div = document.getElementById('wod_details');
    if(div){
      div.requestFullscreen();
    }
    
  };
  return (
    <div className={styles.infoCard}>
      <div id='wod_details' className={styles.wodDetails}  onClick={handleEvent} onTouchStart={handleEvent} onTouchEnd={handleEvent}  >
      <div className={styles.title}>
        {props.name}
      </div>

      <div>
        <div className={styles.subtitle}>Equipment</div>
        <div className={styles.description}>{props.equipments.split(',').map((text,index) => <p key = {index} id = {index.toString()}>{text}</p>)}</div>
      </div>

      <div>
        <div  className={styles.subtitle}>Details</div>
        <Details description={props.description} />
      </div>
      </div>

     <div>
        <Spec/>
      </div>

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
      another workout
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


const PageLayout = (props:{children:React.ReactChild|React.ReactChild[]}) =>{
  return(
    <div className={styles.fullContainer}>
      <Head>
        <title>Give me a WOD</title>
        <meta name="description" content="Creates Workout of the day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
          <Navbar></Navbar>
      </div>
      <div className={styles.body}>
        <div className={styles.container}>  
            {props.children}
        </div>
      </div>
      <div className={styles.footer}>
        <RandomWodButton/> 
      </div>
      

    </div>
  )
}

const Home: NextPage = () => {
  const router = useRouter()
  const today_alias = router.query.alias
  if(!today_alias) {
    return(
      <>
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
         <div id ='wodcard'>
            <WodCard {...new_wod_data}/>
        </div>
    </PageLayout>  
    )
  }
  return (
    <PageLayout>
      <div id ='wodcard'>
        <WodCard {...wod_data}/>
      </div>
    </PageLayout>  
  )
}



export default Home
