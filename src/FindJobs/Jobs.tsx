import JobCard from "./JobCard";
import Sort from "./Sort";
import { jobList } from "../Data/JobsData";

const Jobs = () => {
    return (
        <div className="p-4 lg:p-5">
            <div className="flex flex-col sm:flex-row justify-between mt-5 gap-4">
                <div className="text-xl lg:text-2xl font-semibold">Recommended Jobs</div>
                <div>
                    <Sort />
                </div>
            </div>

            <div className="flex flex-wrap gap-4 lg:gap-5 mt-8 lg:mt-10 justify-center lg:justify-start">
                {
                    jobList.map((job, index) => <JobCard key={index} {...job} />)
                }
            </div>
            
        </div>
    )
}

export default Jobs;