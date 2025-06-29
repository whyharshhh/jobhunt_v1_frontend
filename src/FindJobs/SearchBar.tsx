import { dropdownData } from "../Data/JobsData";
import { Divider, Group, RangeSlider, } from '@mantine/core';
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
        <div className="flex flex-col lg:flex-row px-4 lg:px-5 py-6 lg:py-8 gap-4 lg:gap-0">
            {dropdownData.map((item, index) => (
                <div key={index} className="w-full lg:w-1/5">
                    <MultiInput {...item} />
                    {index < dropdownData.length - 1 && (
                        <Divider className="lg:hidden" size="xs" my="xs" />
                    )}
                </div>
            ))}
            <Divider className="hidden lg:block" mr="xs" size="xs" orientation="vertical" />
            <div className="w-full lg:w-1/5 [&__mantine-Slider-label]:!translate-y-10">
                <div className="flex text-sm justify-between mb-2">
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
                    aria-label="Salary range slider"
                />
            </div>
        </div>
    );
}

export default SearchBar;