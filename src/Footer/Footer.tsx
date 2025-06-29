import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    return (
        (location.pathname !== "/signup")
        &&
        (location.pathname !== "/login")
        ?
        <div className="pt-20 pb-5 flex flex-col lg:flex-row gap-8 lg:gap-5 justify-around bg-mine-shaft-950 font-['poppins'] px-4">
            <div className="w-full lg:w-1/4 flex flex-col gap-4">
                <div className="flex gap-1 items-center text-bright-sun-400">
                    <IconAnchor className="h-6 w-6" stroke={2.5} />
                    <div className="text-xl font-semibold">JobHunt</div>
                </div>
                <div className="text-mine-shaft-300 text-sm lg:text-base">
                    Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
                </div>
                <div className="flex gap-3">
                    <IconBrandFacebook className="cursor-pointer hover:text-bright-sun-400 transition-colors duration-200" aria-label="Follow us on Facebook" />
                    <IconBrandInstagram className="cursor-pointer hover:text-bright-sun-400 transition-colors duration-200" aria-label="Follow us on Instagram" />
                    <IconBrandX className="cursor-pointer hover:text-bright-sun-400 transition-colors duration-200" aria-label="Follow us on X (Twitter)" />
                </div>
            </div>

            {footerLinks.map((item, index) => (
                <div key={index} className="w-full lg:w-auto">
                    <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>
                    {item.links.map((link, index) => (
                        <div 
                            key={index} 
                            className="hover:text-bright-sun-400 text-mine-shaft-300 text-sm cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    // Handle click action here
                                }
                            }}
                        >
                            {link}
                        </div>
                    ))}
                </div>
            ))}
        </div>:<></>
    );
};

export default Footer;