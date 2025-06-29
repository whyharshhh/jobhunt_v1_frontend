import { Button, Divider, FileInput, NumberInput, Notification, rem, Textarea, TextInput, LoadingOverlay } from '@mantine/core'
import { IconArrowLeft, IconBookmark, IconCheck, IconPaperclip } from '@tabler/icons-react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ApplyJobComp = (props: any) => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();
  
  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleSubmit = () => {
    setSubmit(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let x = 5;
    setInterval(() => {
      x--;
      setSec(x);
      if (x === 0) {
        navigate('/find-jobs');
      }
    }, 1000);
  }

  return (
    <div className='w-2/3 mx-auto'>
      <LoadingOverlay className='!fixed' visible={submit} zIndex={1000} overlayProps={{radius:'sm', blur:'2'}} loaderProps={{color:'brightSun.4', type:'bars'}} />

      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-14" src={`/Icons/Google.png`} alt={`${props.company} Logo`} />
          </div>
          <div className='flex flex-col gap-1'>
            <div className="font-medium text-xl">Software Engineer</div>
            <div className="text-md text-mine-shaft-300">Google &#x2022; 3 days ago &#x2022; 40 Applicants</div>
          </div>
        </div>
      </div>
      <Divider size="xs" color="mineShaft.7" my='xl' />

      <div className='text-xl mb-5 font-semibold'>Submit Your Application</div>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-10 [&>*]:w-1/2'>
          <TextInput 
            readOnly={preview} 
            variant={preview ? "unstyled" : "default"} 
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} 
            label="Full Name" 
            withAsterisk 
            placeholder="Enter Name" 
            required 
          />
          <TextInput 
            readOnly={preview} 
            variant={preview ? "unstyled" : "default"} 
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} 
            label="Email" 
            withAsterisk 
            placeholder="Enter Email" 
            required
          />
        </div>
        <div className='flex gap-10 [&>*]:w-1/2'>
          <NumberInput 
            readOnly={preview} 
            variant={preview ? "unstyled" : "default"} 
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} 
            label="Phone Number" 
            withAsterisk 
            placeholder="Enter Phone Number" 
            required 
            hideControls 
            min={0} 
            max={9999999999} 
            clampBehavior='strict' 
          />
          <TextInput 
            readOnly={preview} 
            variant={preview ? "unstyled" : "default"} 
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} 
            label="Portfolio" 
            withAsterisk 
            placeholder="Enter Portfolio URL" 
            required
          />
        </div>
        <FileInput 
          readOnly={preview} 
          variant={preview ? "unstyled" : "default"} 
          className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} 
          label="Attach Your Resume" 
          withAsterisk 
          placeholder="Upload Resume" 
          required 
          accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
          leftSection={<IconPaperclip />} 
          leftSectionPointerEvents='none'
        />
        <Textarea 
          readOnly={preview} 
          variant={preview ? "unstyled" : "default"} 
          className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} 
          label="Cover Letter" 
          withAsterisk 
          placeholder="Type something about Yourself...." 
          required 
          minRows={4} 
          autosize 
        />

        {!preview && <Button onClick={handlePreview} color="brightSun.4" variant="light">Preview</Button>}
        {preview && (
          <div className="flex gap-10 [&>*]:w-1/2">
            <Button fullWidth onClick={handlePreview} color="brightSun.4" variant="outline">Edit</Button>
            <Button fullWidth onClick={handleSubmit} color="brightSun.4" variant="light">Submit</Button>
          </div>
        )}
      </div>

      {submit && (
        <Notification 
          className={`!border-bright-sun-400 -translate-y-20 !fixed top-0 left-[35%] transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"}`} 
          icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />} 
          color="teal" 
          withBorder 
          title="Application Submitted!" 
          mt="md" 
          withCloseButton={false}
          z-index={1001}
        >
          Redirecting to Find Jobs in {sec} seconds...
        </Notification>
      )}
    </div>
  )
}

export default ApplyJobComp;