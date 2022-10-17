import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

const JobCard = props => {
  const {jobsDetails} = props
  const {
    id,
    title,
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
  } = jobsDetails

  return (
    <li className="job-item">
      <Link to={`/jobs/${id}`} className="link-item">
        <div className="logo-title-rating-container">
          <img src={companyLogoUrl} alt="" className="company-logo" />
          <div>
            <p className="job-title">{title}</p>
            <div className="star-rating-container">
              <AiFillStar fill="#fbbf24" />
              <p className="company-rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-salary-container">
          <div className="location-type-container">
            <div className="icon-para-container">
              <MdLocationOn fill="white" />
              <p className="location-para">{location}</p>
            </div>
            <div className="icon-para-container">
              <BsFillBriefcaseFill fill="white" />
              <p className="location-para">{employmentType}</p>
            </div>
          </div>
          <p className="company-package">{packagePerAnnum}</p>
        </div>
        <hr className="line" />
        <p className="description-para">Description</p>
        <p className="description-para">{jobDescription}</p>
      </Link>
    </li>
  )
}

export default JobCard
