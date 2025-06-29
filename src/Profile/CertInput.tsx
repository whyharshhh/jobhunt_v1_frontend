import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

interface CertInputProps {
    setEdit: (value: boolean) => void;
}

const CertiInput = ({ setEdit }: CertInputProps) => {
    const select = fields;
    const [issueDate, setIssueDate] = useState<Date | null>(new Date());
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Add Certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput label="Title" withAsterisk placeholder="Enter title" />
                <SelectInput {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput
                                    withAsterisk
                                    label="Issue Date"
                                    placeholder="Pick date"
                                    value={issueDate}
                                    onChange={setIssueDate}
                                    maxDate={new Date()}
                />
                <TextInput label="Certificate Id" withAsterisk placeholder="Enter Id" />
            </div>
            <div className="flex gap-5">
                <Button onClick={()=>setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
                <Button onClick={()=>setEdit(false)} color="red.8" variant="light">Cancel</Button>
            </div>
        </div>
    );
};

export default CertiInput;