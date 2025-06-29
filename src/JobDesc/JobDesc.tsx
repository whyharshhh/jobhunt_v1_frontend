import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconAdjustments, IconBookmark, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { card, desc, skills } from '../Data/JobDescData'
import DOMPurify from 'dompurify'

const JobDesc = (props:any) => {
    const data = DOMPurify.sanitize(desc);
  return (
    <div className='w-2/3'>
        <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14" src={`/Icons/Google.png`} alt={`${props.company} Logo`} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className="font-medium text-xl">Software Engineer</div>
                        <div className="text-md text-mine-shaft-300">Google &#x2022; 3 days ago &#x2022; 40 Applicants</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <Link to="/apply-jobs" className="w-full">
                        <Button color="brightSun.4" size='sm' variant="light">{props.edit?"Edit":"Apply"}</Button>
                    </Link>
                </div>
                {props.edit?<Button color="red.4" size='sm' variant="outline">Delete</Button> :<IconBookmark className="cursor-pointer text-mine-shaft-300"/>}
        </div>
            
            <Divider size="xs" color="mineShaft.7" my='xl' />
            
            <div className='flex justify-between'>
                {
                    card.map((item:any, index:any) => {
                        return (
                            <div key={index} className='flex gap-1 flex-col items-center'>
                                <ActionIcon color='brightSun.4' className='!h-12 !w-12' variant="light" radius='xl' aria-label="Settings">
                                    <item.icon className='h-4/5 w-4/5' stroke={1.5} />
                                </ActionIcon>
                                <div className='text-sm font-semibold'>{item.name}</div>
                                <div className='font-semibold'>{item.value}</div>
                            </div>
                        )
                    }
                )}
            </div>
            
            <Divider size="xs" color="mineShaft.7" my='xl' />
            
            <div>
                <div className='text-xl mb-5 font-semibold'>Requirred Skills</div>
                <div className='flex flex-wrap gap-2'>
                {
                    skills.map((item:any, index:any) => {
                        return (
                            <div key={index} className='flex gap-1 flex-col items-center'>
                                <ActionIcon color='brightSun.4' className='!h-fit !w-fit font-medium !text-sm' variant="light" p='xs' radius='xl' aria-label="Settings">
                                    {item}
                                </ActionIcon>
                                <div className='text-sm font-semibold'>{item.name}</div>
                                <div className='font-semibold'>{item.value}</div>
                            </div>
                        )
                    }
                )}
            </div>

            <Divider size="xs" color="mineShaft.7" my='xl' />
            <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify" dangerouslySetInnerHTML={{__html: data}}></div>

            <Divider size="xs" color="mineShaft.7" my='xl' />
            <div>
                <div className='text-xl font-semibold mb-5'>
                    About Company
                </div>
                <div className="flex justify-between mb-3">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-8" src={`/Icons/Google.png`} alt={`${props.company} Logo`} />
                        </div>
                        <div className='flex flex-col gap-1'>
                        <div className="font-medium text-lg">Google</div>
                        <div className="text-sm text-mine-shaft-300">10k+ Employees</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <Link to='/company' className="w-full">
                            <Button color="brightSun.4" size='sm' variant="light">Company Page</Button>
                        </Link>
                    </div>
                </div>
                <div className='text-mine-shaft-300 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laboriosam veritatis ipsum aliquam fugit ea suscipit, quibusdam neque nobis ab amet in quod hic vitae voluptates consequuntur itaque corrupti ad!</div>
            </div>
        </div>
    </div>
  )
}

export default JobDesc;