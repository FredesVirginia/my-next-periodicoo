
import CreatedSecondPlantilla from '@/components/plantillasTypePeriodico/createPlantillas/createSecondPlantilla'

export interface FormCreateNewsProps{
    type : "FIRTS" | "SECOND"
}

export default function formCreateNews( props : FormCreateNewsProps) {
  return (
    <div>
        { props.type === "FIRTS" ? ( <CreatedSecondPlantilla/> ) : ( null)}
    </div>
  )
}
