import { Carousel } from "@mantine/carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { jobCategory } from "../Data/Data";

const JobCategory = () => {
    return (
        <div className="mt-10 lg:mt-20 pb-5 px-4">
            <div className="text-2xl lg:text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
                Browse <span className="text-bright-sun-400">Job</span> Category
            </div>
            <div className="text-base lg:text-lg mb-6 lg:mb-10 mx-auto text-mine-shaft-300 text-center w-full lg:w-1/2">
                Explore diverse job opportunities tailored to your skills. Start your career journey today!
            </div>
            <Carousel 
                slideSize={{ base: '100%', sm: '50%', md: '33.333%', lg: '22%' }}
                slideGap="md" 
                loop
                className="focus-visible:[&_button]:!outline-none
                    [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75
                    [&_button]:opacity-0 hover:[&_button]:opacity-100"
                nextControlIcon={<IconArrowRight className="h-6 w-6 lg:h-8 lg:w-8" />}
                previousControlIcon={<IconArrowLeft className="h-6 w-6 lg:h-8 lg:w-8" />}
            >
                {jobCategory.map((category, index) => (
                    <Carousel.Slide key={index}>
                        <div className="flex flex-col items-center w-full max-w-64 gap-2 border border-bright-sun-400 p-4 lg:p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out">
                            <div className="p-2 bg-bright-sun-300 rounded-full">
                                <img className="h-6 w-6 lg:h-8 lg:w-8" src={`/Category/${category.name}.png`} alt={`${category.name} icon`} />
                            </div>
                            <div className="text-mine-shaft-100 text-lg lg:text-xl font-semibold text-center">
                                {category.name}
                            </div>
                            <div className="text-xs lg:text-sm text-center text-mine-shaft-300">
                                {category.desc}
                            </div>
                            <div className="text-bright-sun-300 text-sm lg:text-lg">
                                {category.jobs} new job posted
                            </div>
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    );
};

export default JobCategory;