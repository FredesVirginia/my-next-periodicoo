import CreateFirtPlantilla from '@/components/plantillasTypePeriodico/createPlantillas/createFirtPlantilla'
import CreatedSecondPlantilla from '@/components/plantillasTypePeriodico/createPlantillas/createSecondPlantilla'
import SecondPlantilla from '@/components/plantillasTypePeriodico/SecondPlantilla'
import React from 'react'

export interface FormCreateNewsProps{
    type : "FIRTS" | "SECOND"
}

export default function formCreateNews( props : FormCreateNewsProps) {
  return (
    <div>
        { props.type === "FIRTS" ? ( <CreateFirtPlantilla/> ) : ( <CreatedSecondPlantilla/>)}
    </div>
  )
}
