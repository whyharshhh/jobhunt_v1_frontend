import { talents } from "../Data/TalentData"
import TalentCard from "../FindTalent/TalentCard";

const RecommendedTalent = (props:any) => {
    return (
            <div className="">
                <div className="text-2xl font-semibold mb-5">
                    Recommended Talents
                </div>
                <div className="flex flex-col flex-wrap gap-5">
                    {talents.map((talent:any, index:any) => (
                        index<4 && <TalentCard key={index} {...talent}/>
                    ))}
                </div>
            </div>
    );
}

export default RecommendedTalent;