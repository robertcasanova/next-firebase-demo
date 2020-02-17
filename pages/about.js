import Layout from '../components/MyLayout.js'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'


const About = (props) => {

  return (
    <Layout>
      {props.user.name && <h1>Welcome {props.user.name}</h1>}
      <p>This is the about page</p>
    </Layout>
  )
}

About.getInitialProps = async () => {
  const res = await fetch(process.env.BASE_PATH +'/api/user').then(d => d.json())
  return {
    user: res
  }
}

export default About
