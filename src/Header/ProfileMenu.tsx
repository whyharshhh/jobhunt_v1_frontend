import { Menu, Button, Text, Avatar, Switch } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout2,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu=()=> {
    const [opened, setOpened] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened} position="bottom-end">
      <Menu.Target>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-mine-shaft-800 p-1 rounded-lg transition-colors duration-200" role="button" aria-label="Open profile menu" tabIndex={0}>
            <div className="hidden sm:block text-sm">Marshals</div>
            <Avatar src="avatar.png" alt="User profile picture" size="sm" />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Menu.Item leftSection={<IconUserCircle size={14} />}>
                Profile
            </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon size={14} />}
          rightSection={
            <Switch
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
                size="md"
                color="dark.4"
                onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
                offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
                aria-label="Toggle dark mode"
            />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={<IconLogout2 size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;