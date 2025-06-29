import React from 'react';
import { Avatar } from '@mantine/core';
import { work } from "../Data/Data";


const Working = () => {
    return (
        <div className="flex items-center px-20 gap-10 justify-between">
            <div className="relative">
                <img className="w-[30rem]" src="/Working/Girl.png" alt="girl working" />
                <div className="w-36 flex top-[15%] right-0 absolute flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md bg-mine-shaft-900/50">
                    <Avatar className="!h-16 !w-16" src="avatar1.png" alt="profile" />
                    <div className="text-sm font-semibold text-mine-shaft-200 text-center">Complete your profile</div>
                    <div className="text-xs text-mine-shaft-300">70% Completed</div>
                </div>
            </div>

            <div className="flex flex-col gap-10">
                {work.map((item, index) => (
                    <div key={index} className="flex items-center gap-6">
                        <div className="p-2.5 bg-bright-sun-300 rounded-full">
                            <img className="h-12 w-12" src={`/Working/${item.name}.png`} alt={item.name} />
                        </div>
                        <div>
                            <div className="text-mine-shaft-200 text-xl font-semibold">{item.name}</div>
                            <div className="text-mine-shaft-300">{item.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Working;