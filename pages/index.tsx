import Container from '../components/container'
import Calendar from '../components/calendar'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getEvents } from '../lib/api'
import Head from 'next/head'
import { Event } from '../types/event'
import ReactHlsPlayer from 'react-hls-player'
import React from 'react'

type Props = {
  events: Event[]
}

const Index = ({ events }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>もしも</title>
        </Head>
        <Container>
          <ReactHlsPlayer
            src="https://fm.moshimo.space/live/moshimofm.m3u8"
            autoPlay={true}
            controls={true}
            playsInline={true}
            muted={true}
            playerRef={React.createRef<HTMLVideoElement>()}
            width="80%"
            height="auto"
            style={{"margin": "0 auto", "padding": "25px"}}
          /> 
          <Intro />
          {/* <Calendar events={events} /> */}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  // const events = (await getEvents())
  const events: Event[] = []

  return {
    props: { events },
  }
}
