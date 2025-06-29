import { TextInput, Avatar, AvatarGroup } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const DreamJob = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center px-4 lg:px-16 py-8">
            <div className="flex flex-col w-full lg:w-[45%] gap-3 mb-8 lg:mb-0">
                <div className="text-4xl lg:text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
                    Find your <span>dream</span> <span>job</span> with us
                </div>
                <div className="text-base lg:text-lg text-mine-shaft-200">
                    Good life begins with a good company. Start explore thousands of jobs in one place.
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                    <TextInput 
                        className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                        aria-label="Enter job title"
                    />
                    <TextInput 
                        className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Type"
                        placeholder="Fulltime"
                        aria-label="Enter job type"
                    />
                    <div className="flex items-center justify-center h-full w-full sm:w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer transition-colors duration-200">
                        <IconSearch className="h-6 w-6" />
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-[55%] flex items-center justify-center relative">
                <img src="/Boy.png" alt="Person searching for jobs" className="w-full max-w-[30rem]" />
                
                {/* Right floating badge */}
                <div className="absolute right-2 lg:right-10 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md bg-mine-shaft-900/50">
                    <div className="text-center mb-1 text-sm text-mine-shaft-100">10k+ got job</div>
                    <AvatarGroup >
                        <Avatar src="avatar.png" size="sm" alt="User avatar" />
                        <Avatar src="avatar1.png" size="sm" alt="User avatar" />
                        <Avatar src="avatar2.png" size="sm" alt="User avatar" />
                        <Avatar size="sm">+9k</Avatar>
                    </AvatarGroup>
                </div>

                {/* Left floating job card */}
                <div className="absolute left-2 lg:left-6 w-fit top-[30%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md bg-mine-shaft-900/50">
                    <div className="flex gap-2 items-center mb-2">
                        <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg flex items-center justify-center">
                            <img src="/Companies/Google.png" alt="Google logo" className="max-w-full max-h-full" />
                        </div>
                        <div className="text-sm text-mine-shaft-100">
                            <div>Software Engineer</div>
                            <div className="text-mine-shaft-200 text-xs">New York</div>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
                        <span>1 day ago</span>
                        <span>120 Applicants</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DreamJob;