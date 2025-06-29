import React from 'react'
import JobCard from '../FindJobs/JobCard';
import { jobList } from '../Data/JobsData';

const RecommendedJobs = () => {
  return (
        <div className="">
            <div className="text-2xl font-semibold mb-5">
                Recommended Jobs
            </div>
            <div className="flex flex-col flex-wrap gap-5">
                {jobList.map((job:any, index:any) => (
                    index<6 && <JobCard key={index} {...job}/>
                ))}
            </div>
        </div>
  )
}

export default RecommendedJobs;