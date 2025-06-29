import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import Company from '../CompanyProfile/Company'
import SimilarCompanies from '../CompanyProfile/SimilarComp'
import PostedJob from '../PostedJob/PostedJob'
import PostedJobDesc from '../PostedJob/PostedJobDesc'

const PostedJobPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
            <div className="flex gap-5">
                <PostedJob/>
                <PostedJobDesc/>
            </div>
        </div>
  )
}

export default PostedJobPage;