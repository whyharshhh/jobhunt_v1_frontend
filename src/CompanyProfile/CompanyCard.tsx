import { ActionIcon } from '@mantine/core'
import { IconBookmark, IconExternalLink } from '@tabler/icons-react'
import React from 'react'

const CompanyCard = (props:any) => {
  return (
        <div className="flex justify-between bg-mine-shaft-900 items-center p-4 rounded-md hover:bg-mine-shaft-800 transition-all duration-200 ease-in-out cursor-pointer">
            <div className="flex gap-2 items-center ">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/Google.png`} alt={`${props.company} Logo`} />
                </div>
                <div>
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-xs text-mine-shaft-300">{props.employees} Employees</div>
                </div>
            </div>
            <ActionIcon
                variant="subtle"
                color="brightSun.4"
            >
                <IconExternalLink />
            </ActionIcon >
        </div>
  )
}

export default CompanyCard