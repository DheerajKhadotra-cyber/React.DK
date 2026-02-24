import React from 'react'
// import { Bookmark } from 'lucide-react'
import Card from './Components/cards'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "full time",
    tag2: "junior level",
    pay: "$45/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Engineer",
    tag1: "full time",
    tag2: "senior level",
    pay: "$70/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "full time",
    tag2: "senior level",
    pay: "$65/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "Data Scientist",
    tag1: "full time",
    tag2: "junior level",
    pay: "$55/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "10 weeks ago",
    post: "Backend Engineer",
    tag1: "part time",
    tag2: "junior level",
    pay: "$40/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "AI Researcher",
    tag1: "full time",
    tag2: "senior level",
    pay: "$75/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "6 days ago",
    post: "Embedded Systems Engineer",
    tag1: "full time",
    tag2: "junior level",
    pay: "$50/hour",
    location: "Palo Alto, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    datePosted: "8 weeks ago",
    post: "GPU Programmer",
    tag1: "full time",
    tag2: "senior level",
    pay: "$80/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    datePosted: "2 days ago",
    post: "Database Administrator",
    tag1: "part time",
    tag2: "junior level",
    pay: "$35/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "3 weeks ago",
    post: "UX Designer",
    tag1: "full time",
    tag2: "senior level",
    pay: "$60/hour",
    location: "San Jose, USA"
  }
];
  console.log(jobOpenings);
  return (
    
      <div className="parent">
        
         {jobOpenings.map(function(elem,index){
          return <div key = {index}>
          <Card   company = {elem.company} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} brandLogo = {elem.brandLogo} pay= {elem.pay} datePosted = {elem.datePosted} locaction = {elem.location}/>
          </div>
        })}
         
       
        
      </div>
   
  )
}

export default App


