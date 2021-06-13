import Container from '../components/container'
import Calendar from '../components/calendar'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getEvents } from '../lib/api'
import Head from 'next/head'
import { Event } from '../types/event'

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
          <Intro />
          <Calendar events={events} />
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const events = (await getEvents())

  return {
    props: { events },
  }
}
