import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";

const Companies = () => {
  return (
    <div className="mt-10 lg:mt-20 pb-5 px-4">
      <div className="text-2xl lg:text-4xl text-center font-semibold mb-6 lg:mb-10 text-mine-shaft-100">
        Trusted By <span className="text-bright-sun-400">1000+</span> Companies
      </div>
      <Marquee pauseOnHover={true} speed={40}>
        {
          companies.map((company, index) => (
            <div key={index} className="mx-4 lg:mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer transition-colors duration-200">
              <img className="h-10 lg:h-14" src={`/Companies/${company}.png`} alt={`${company} logo`} />
            </div>
          ))
        }
      </Marquee>
    </div>
  );
}

export default Companies;
