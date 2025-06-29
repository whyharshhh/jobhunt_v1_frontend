import { Avatar, Button, Divider, Text } from "@mantine/core";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { DateInput, TimeInput } from '@mantine/dates';
import { useRef, useState } from "react";

const TalentCard = (props:any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);
    return (
        <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_yellow] !shadow-bright-sun-400 transition-all duration-200 ease-in-out">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                        <Avatar className="h-7" size='lg' src={`/${props.image}.png`} alt={`${props.company} Logo`} />
                    </div>
                    <div>
                        <div className="font-semibold text-lg">{props.name}</div>
                        <div className="text-sm text-mine-shaft-300">{props.role} &#x2022; {props.company}</div>
                    </div>
                </div>
                <IconHeart className="cursor-pointer text-mine-shaft-300"/>
            </div>

            <div className="flex gap-2 ">
                {
                    props.topSkills?.map((skill:any, index:any) => {
                        return (
                            <div key={index} className="bg-mine-shaft-800 p-1 rounded-full text-xs text-bright-sun-400 p-2 py-1">
                                {skill}
                            </div>
                        )
                    })
                }
            </div>

            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                {props.about}
            </Text>

            <Divider size="xs" color="mineShaft.7" />
            {
                props.invited?<div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
                    <IconCalendarMonth className="h-5 w-5" stroke={1.5} /> Invited to Interview on August 27, 4:50 P.M.
                </div>:<div className="flex justify-between">
                <div>
                    {props.expectedCtc}
                </div>
                <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
                    <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
                </div>
            </div>
            }

            <Divider size="xs" color="mineShaft.7" />

            <div className="flex [&>*]:w-1/2 [&>*]:p-1 ">
            {
                !props.invited &&
                <>   
                    <Link to="/talent-profile" className="flex gap-2 items-center justify-between">
                        <Button variant="outline" color="brightSun.4" fullWidth > Profile </Button>
                    </Link>
                    <div>
                        {props.posted?<Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5" />} variant="light" color="brightSun.4" fullWidth > Schedule </Button>:<Button variant="light" color="brightSun.4" fullWidth > Message </Button>}
                    </div>
                </>
            }
            {
                props.invited && <>
                    <div><Button variant="outline" color="brightSun.4" fullWidth > Accept </Button></div>
                    <div><Button variant="light" color="brightSun.4" fullWidth > Reject </Button></div>
                </>
            }
                
            </div>

            <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                <div className="flex flex-col gap-4">
                    <DateInput minDate={new Date()} value={value} onChange={setValue} label="Date" placeholder="Enter Date"/>
                    <TimeInput onClick={() => ref.current?.showPicker()} label="Time" ref={ref} />
                    <Button variant="light" color="brightSun.4" fullWidth > Schedule </Button>
                </div>
            </Modal>
        </div>
    )
}

export default TalentCard;