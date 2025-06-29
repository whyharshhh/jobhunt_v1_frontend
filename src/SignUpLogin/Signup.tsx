import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock, IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            {/* Back to Home Link */}
            <Link 
                to="/" 
                className="flex items-center gap-2 text-mine-shaft-300 hover:text-bright-sun-400 transition-colors duration-200 mb-4 self-start"
            >
                <IconArrowLeft size={16} />
                <span className="text-sm">Back to Home</span>
            </Link>
            
            <div className="text-2xl font-semibold">Create Account</div>
            <TextInput withAsterisk label="Full Name" placeholder="Your name" />
            <TextInput 
                withAsterisk 
                leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} 
                label="Email" 
                placeholder="Your email"
            />
            <PasswordInput 
                withAsterisk 
                leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} 
                label="Password" 
                placeholder="Password" 
            />
            <PasswordInput 
                withAsterisk 
                leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} 
                label="Confirm Password" 
                placeholder="Confirm password" 
            />
            <Checkbox 
                autoContrast 
                label={
                    <>
                        I accept {' '}<Anchor>terms & conditions</Anchor>
                    </>
                } 
            />
            <Button autoContrast variant="filled">Sign up</Button>
            <div className="mx-auto">Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link></div>
        </div>
    );
}

export default SignUp;