import React from 'react';
import SearchBar from '../FindJobs/SearchBar';
import { Button, Divider } from '@mantine/core';
import Jobs from '../FindJobs/Jobs';
import { Link } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';
import ApplyJobComp from '../ApplyJobs/ApplyJobComp';

const ApplyJobsPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-5 inline-block" to="/jobs">
                <Button 
                    leftSection={<IconArrowLeft size={20}/>} 
                    color="brightSun.4" 
                    variant="light"
                >
                    Back
                </Button>
            </Link>
            <ApplyJobComp />
        </div>
    );
};

export default ApplyJobsPage;