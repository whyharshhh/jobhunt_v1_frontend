import { Tabs } from '@mantine/core'
import React from 'react'
import AboutComp from '../CompanyProfile/AboutComp'
import CompanyJobs from '../CompanyProfile/CompanyJobs'
import CompanyEmployees from '../CompanyProfile/CompanyEmployees'
import { jobList } from '../Data/JobsData'
import Card from './Card'

const JobHistory = () => {
  return (
    <div>
      <div className="text-2xl font-semibold mb-5">Job History</div>
      <div>
                      <Tabs variant="outline" radius="lg" defaultValue="applied">
                          <Tabs.List className=" [&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                              <Tabs.Tab value="applied">Applied</Tabs.Tab>
                              <Tabs.Tab value="saved">Saved</Tabs.Tab>
                              <Tabs.Tab value="offered">Offered</Tabs.Tab>
                              <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
                          </Tabs.List>
      
                          <Tabs.Panel value="applied">
                          <div className="flex flex-wrap gap-5 mt-10">
                {
                    jobList.map((job, index) => <Card key={index} {...job} applied />)
                }
            </div>
                          </Tabs.Panel>
                          <Tabs.Panel value="saved">
                            <div className="flex flex-wrap gap-5 mt-10">
                              {
                                  jobList.map((job, index) => <Card key={index} {...job} saved/>)
                              }
                            </div>
                          </Tabs.Panel>
                          <Tabs.Panel value="offered">
                            <div className="flex flex-wrap gap-5 mt-10">
                                {
                                    jobList.map((job, index) => <Card key={index} {...job} offered/>)
                                }
                            </div>
                          </Tabs.Panel>
                          <Tabs.Panel value="interviewing">
                            <div className="flex flex-wrap gap-5 mt-10">
                                {
                                    jobList.map((job, index) => <Card key={index} {...job} interviewing/>)
                                }
                            </div>
                          </Tabs.Panel>
                      </Tabs>
                  </div>
    </div>
  )
}

export default JobHistory