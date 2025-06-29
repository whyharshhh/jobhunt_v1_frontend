import { ActionIcon, Button, Divider, TagsInput, Textarea } from "@mantine/core";
import { IconAdjustments, IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertCard from "./CertCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import ExpInput from "./ExpInput";
import CertiInput from "./CertInput";

const Profile = (props:any) => {
    const select = fields;
    const [edit, setEdit] = useState<boolean[]>([false, false, false, false, false]);
    const [about, setAbout] = useState(`${props.about}`);
    const [addExp, setAddExp] = useState(false);
    const [addCert, setAddCert] = useState(false);
    const [skills, setSkills] = useState<string[]>(props.skills || []);
    
    const handleEdit = (index: number) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
        console.log(edit);
    };


    return (
        <div className="w-4/5 mx-auto">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img 
                    className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8" 
                    src="/avatar.png" 
                    alt="" 
                />
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">
                    {props.name}
                    <ActionIcon onClick={()=>handleEdit(0)} variant="subtle" color="brightSun.4" size="lg">
                        {edit[0]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>
                {
                    edit[0]? <><div className="flex gap-10 [&>*]:w-1/2">
                        <SelectInput {...select[0]} />
                        <SelectInput {...select[1]} />
                </div>
                <SelectInput {...select[2]} /></>:
                <><div className="text-xl flex gap-1 items-center">
                    <IconBriefcase className="h-5 w-5" stroke={1.5}/> 
                    {props.role} &bull; {props.company}
                </div>
                <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                    <IconMapPin className="h-5 w-5" stroke={1.5}/> 
                    {props.location}
                </div></>
                }
                
            </div>
            <Divider mx="sm" size="xs" my="xl"/>
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">About
                    <ActionIcon onClick={()=>handleEdit(1)} variant="subtle" color="brightSun.4" size="lg">
                        {edit[1]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>

                {
                    edit[1]? 
                    <Textarea
                        autosize
                        minRows={3}
                        placeholder="Enter about yourself"
                        value={about}
                        onChange={(event) => setAbout(event.currentTarget.value)}
                    />:
                    <div className="text-sm text-mine-shaft-300 text-justify">
                        {about}
                    </div>
                
                }
                
            </div>

            <Divider mx="sm" size="xs" my="xl"/>
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">Skills
                    <ActionIcon onClick={()=>handleEdit(2)} variant="subtle" color="brightSun.4" size="lg">
                        {edit[2]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>

                {
                    edit[2]? 
                    <TagsInput
                        value={skills} 
                        onChange={setSkills}
                        placeholder="Add skills"
                        splitChars={[',', ' ', '|']}
                    />:
                    <div className="flex flex-wrap gap-2">
                        {
                            props.skills.map((skill:any, index:any) => (
                                <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-20 rounded-3xl text-bright-sun-400 px-3 py-1">{skill}</div>
                            ))
                        }
                    </div>
                
                }
                
            </div>

            <Divider mx="xs" my="xl" />

            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between">Experience
                    <div className="flex gap-2">
                        <ActionIcon onClick={()=>setAddExp(true)} variant="subtle" color="brightSun.4" size="lg">
                        <IconPlus className="h-4/5 w-4/5" />
                        </ActionIcon>
                        <ActionIcon onClick={()=>handleEdit(3)} variant="subtle" color="brightSun.4" size="lg">
                        {edit[3]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
                        </ActionIcon>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    {
                        props.experience.map((exp:any, index:any) => (
                            <ExpCard key={index} {...exp} edit={edit[3]}/>
                        ))
                    }
                    {
                        addExp && <ExpInput add setEdit={setAddExp}/>
                    }
                </div>
            </div>

            <Divider mx="xs" my="xl" />

            <div className="px-3">  
                <div className="text-2xl font-semibold mb-5 flex justify-between">Certifications
                    <div className="flex gap-2">
                        <ActionIcon onClick={()=>setAddCert(true)} variant="subtle" color="brightSun.4" size="lg">
                        <IconPlus className="h-4/5 w-4/5" />
                        </ActionIcon>
                        <ActionIcon onClick={()=>handleEdit(4)} variant="subtle" color="brightSun.4" size="lg">
                        {edit[4]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
                        </ActionIcon>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    {
                        props.certifications.map((exp:any, index:any) => (
                            <CertCard key={index} edit={edit[4]} {...exp}/>
                        ))
                    }
                    {
                        addCert && <CertiInput setEdit={setAddCert} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;