import React, { useState } from 'react';
import { Avatar, Drawer, Button } from '@mantine/core';
import { IconAsset, IconBell, IconSettings, IconBowFilled, IconMenu2 } from '@tabler/icons-react';
import { Indicator } from '@mantine/core';
import { useMantineTheme } from '@mantine/core'; 
import { NavLink, useLocation, Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import ProfileMenu from './ProfileMenu';


const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
      (location.pathname !== "/signup")
      &&
      (location.pathname !== "/login")
      ?
      <div className="flex gap-3 items-center justify-between px-4 py-2 shadow-md bg-mine-shaft-950 font-['poppins']">
      {/* Logo Section */}
      <Link to="/" className="flex gap-3 items-center text-bright-sun-400 hover:text-bright-sun-300 transition-colors duration-200 cursor-pointer">
        <IconBowFilled className="h-8 w-8 lg:h-10 lg:w-10" stroke={1.25} />
        <div className="text-2xl lg:text-3xl font-semibold">JobHunt</div>
      </Link>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:block">
        <NavLinks />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpened(true)}
          className="bg-mine-shaft-900 p-1.5 rounded-full hover:bg-mine-shaft-800 transition-colors duration-200"
          aria-label="Open mobile menu"
        >
          <IconMenu2 stroke={1.5} />
        </button>
      </div>

      {/* SignUp Button and User Section */}
      <div className="flex gap-2 lg:gap-3 items-center">
        {/* SignUp Button */}
        <Link to="/signup">
          <Button 
            variant="outline" 
            color="brightSun.4" 
            size="sm"
            className="hidden md:block hover:bg-bright-sun-400 hover:text-mine-shaft-950 transition-colors duration-200"
          >
            Sign Up
          </Button>
        </Link>
        
        <ProfileMenu/>
        
        <div className="bg-mine-shaft-900 p-1.5 rounded-full hover:bg-mine-shaft-800 transition-colors duration-200" role="button" aria-label="Settings">
            <IconSettings stroke={1.5} />
        </div>
        
        <div className="bg-mine-shaft-900 p-1.5 rounded-full hover:bg-mine-shaft-800 transition-colors duration-200" role="button" aria-label="Notifications">
            <Indicator color="brightSun.4" offset={6} size={8} processing>
                <IconBell stroke={1.5} />
            </Indicator>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        opened={mobileMenuOpened}
        onClose={() => setMobileMenuOpened(false)}
        position="right"
        size="xs"
        title="Menu"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        className="md:hidden"
      >
        <div className="flex flex-col gap-4 p-4">
          <NavLinks isMobile={true} />
          {/* SignUp Button for Mobile */}
          <Link to="/signup" className="w-full">
            <Button 
              variant="outline" 
              color="brightSun.4" 
              fullWidth
              className="hover:bg-bright-sun-400 hover:text-mine-shaft-950 transition-colors duration-200"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </Drawer>
    </div>:<></>
  );
};

export default Header;
