import { BallCanvas } from "./canvas"
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from "../Constants";

const Tech = () => {
  return <>
  <div className="flex justify-center flex-wrap gap-2">
  {technologies.map((technology)=>(
    <div className="w-28 h-28" key={technology.name}>
      <BallCanvas icon = {technology.icon} />
    </div>
  ))}
  </div>
  

  
  </>
}

export default SectionWrapper(Tech, 'tech')