import { searchFields } from "../Data/TalentData";
import { Divider, Group, Input, RangeSlider, } from '@mantine/core';
import MultiInput from "../FindJobs/MultiInput";
import { useState } from "react";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return <div className="flex px-5 py-8">
                <div className="flex items-center">
                    <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2">
                        <IconUserCircle size={20} />
                    </div>
                    <Input 
                        className="[&_input]:!placeholder-mine-shaft-300" 
                        variant="unstyled"
                        placeholder="Talent Name" 
                    />
                </div>
        {searchFields.map((item, index) => (
            <>  
                <div key={index} className="w-1/5">
                    <MultiInput {...item} />
                </div>
                <Divider mr="xs" size="xs" orientation="vertical" />
            </>
            
        ))}
        <div className="w-1/5 [&__mantine-Slider-label]:!translate-y-10">
    <div className="flex text-sm justify-between">
        <div>Salary</div>
        <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
    </div>
    <RangeSlider 
        color="brightSun.4" 
        size="xs" 
        value={value} 
        labelTransitionProps={{
            transition: 'skew-down',
            duration: 150,
            timingFunction: 'linear',
        }} 
        onChange={setValue} 
    />
</div>
    </div>
}

export default SearchBar;