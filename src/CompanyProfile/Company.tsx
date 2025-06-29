import { Avatar, Button, Divider, Tabs } from '@mantine/core';
import { IconBriefcase, IconMapPin } from '@tabler/icons-react';
import React from 'react'
import AboutComp from './AboutComp';
import CompanyJobs from './CompanyJobs';
import CompanyEmployees from './CompanyEmployees';

const Company = () => {
  return (
    <div className='w-3/4'>
        <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img 
                    className="w-36 h-36 rounded-3xl border-8 p-2 -bottom-1/3 absolute left-5 border-mine-shaft-950 border-8 bg-mine-shaft-950" 
                    src="/Icons/Google.png" 
                    alt="" 
                    
                />
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">
                    Google
                    <Avatar.Group>
                        <Avatar size={40} radius="xl" src="avatar.png" alt="" />
                        <Avatar size={40} radius="xl" src="avatar1.png" alt="" />
                        <Avatar size={40} radius="xl" src="avatar2.png" alt="" />
                        <Avatar>+10k</Avatar>
                    </Avatar.Group>
                </div>
                <div className="text-xl flex gap-1 items-center">
                    <IconBriefcase className="h-5 w-5" stroke={1.5}/> 
                    Software Engineer &bull; Google
                </div>
                <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                    <IconMapPin className="h-5 w-5" stroke={1.5}/> 
                    USA
                </div>
            </div>
            <Divider mx="sm" size="xs" my="xl"/>

            <div>
                <Tabs variant="outline" radius="lg" defaultValue="about">
                    <Tabs.List className=" [&_button]:text-lg font-sembled  [&_button[data-active='true']]:text-bright-sun-d@">
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employees">Employees</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
                    <Tabs.Panel value="jobs"><CompanyJobs /></Tabs.Panel>
                    <Tabs.Panel value="employees"><CompanyEmployees /></Tabs.Panel>
                </Tabs>
            </div>



    </div>
  )
}

export default Company;