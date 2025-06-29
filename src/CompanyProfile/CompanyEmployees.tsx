import React from 'react'
import { talents } from '../Data/TalentData';
import TalentCard from '../FindTalent/TalentCard';

const CompanyEmployees = () => {
  return (
    <div className="flex flex-wrap gap-10 mt-10 ">
                {
                    talents.map((talent, index) => index<6 && <TalentCard key={index} {...talent} />)
                }
    </div>
  )
}

export default CompanyEmployees;