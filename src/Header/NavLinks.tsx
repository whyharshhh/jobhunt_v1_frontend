import { Link, useLocation } from "react-router-dom";

interface NavLinksProps {
  isMobile?: boolean;
}

const NavLinks = ({ isMobile = false }: NavLinksProps) => {
    const links = [
        { name: "Find Jobs", url: "/find-jobs" },
        { name: "Find Talent", url: "/find-talent" },
        { name: "Post Job", url: "/post-job" },
        { name: "Posted Job", url: "/posted-job" },
        { name: "Job History", url: "/job-history" },
    ];

    const location = useLocation();
    
    if (isMobile) {
        return (
            <nav className="flex flex-col gap-2 text-mine-shaft-300" role="navigation" aria-label="Mobile navigation">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={link.url}
                        className={`${
                            location.pathname.startsWith(link.url)
                                ? "text-bright-sun-400 bg-mine-shaft-800"
                                : "hover:text-bright-sun-300 hover:bg-mine-shaft-800"
                        } px-4 py-3 rounded-lg transition-colors duration-200 text-base`}
                        aria-current={location.pathname.startsWith(link.url) ? "page" : undefined}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        );
    }
    
    return (
        <nav className="flex gap-3 lg:gap-5 text-mine-shaft-300 h-full items-center" role="navigation" aria-label="Main navigation">
            {links.map((link, index) => (
                <div
                    key={index}
                    className={`${
                        location.pathname.startsWith(link.url)
                            ? "border-bright-sun-400 text-bright-sun-400"
                            : "border-transparent hover:text-bright-sun-300"
                    } border-t-[2px] h-full flex items-center px-1 lg:px-2 transition-colors duration-200 p-2`}
                >
                    <Link 
                        to={link.url}
                        className="text-sm lg:text-base whitespace-nowrap"
                        aria-current={location.pathname.startsWith(link.url) ? "page" : undefined}
                    >
                        {link.name}
                    </Link>
                </div>
            ))}
        </nav>
    );
};

export default NavLinks;