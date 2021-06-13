import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getApprovedEvents } from '../lib/api'
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
          <ul>
          {events.map((event) => (
            <li>{event.name}</li>
          ))}
          </ul>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const events = (await getApprovedEvents())

  return {
    props: { events },
  }
}
