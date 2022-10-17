import Header from '../Header'
import './index.css'

const Home = props => {
  const navigateToJobs = () => {
    const {history} = props
    history.push('/jobs')
  }

  return (
    <div className="home-bg">
      <Header />
      <div className="home-content">
        <h1 className="home-heading">Find The Job That Fits Your Life</h1>
        <p className="home-para">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <button type="button" className="home-button" onClick={navigateToJobs}>
          Find Jobs
        </button>
      </div>
    </div>
  )
}

export default Home
