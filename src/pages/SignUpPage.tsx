import { Divider } from '@mantine/core';
import { IconAnchor } from "@tabler/icons-react";
import Signup from '../SignUpLogin/Signup';
import Login from '../SignUpLogin/Login';
import { useLocation, Link } from 'react-router-dom';

const SignUpPage = () => {
    const location = useLocation();
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
            <div className={`w-[100vn] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
                <Login/>
                <div className={`w-1/2 h-full transition-all ease-in-out duration-1000 ${location.pathname=="/signup"?'rounded-r-[200px]':'rounded-l-[200px]'} bg-mine-shaft-900 flex items-center gap-5 justify-center flex-col`}>
                    <Link 
                        to="/" 
                        className="flex gap-1 items-center text-bright-sun-400 hover:text-bright-sun-300 transition-colors duration-200 cursor-pointer"
                    >
                        <IconAnchor className="h-16 w-16" stroke={2.5} />
                        <div className="text-6xl font-semibold">JobHunt</div>
                    </Link>
                    <div className="text-2xl text-mine-shaft-200 font-semibold">Find the made for you</div>
                </div>
                <Signup/>
            </div>
        </div>
    );
}

export default SignUpPage;