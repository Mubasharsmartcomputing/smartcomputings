import ApproachImage from '@/components/ApproachImage'
import CompanyLogos from '@/components/CompanyLogos'
import HeroBanner from '@/components/HeroBanner'
import MissionSection from '@/components/MissionSection'
import Testimonials from '@/components/Testimonials'
import WhatWeDo from '@/components/WhatWeDo'
import WhatWeDoImage from '@/components/WhatWeDoImage'

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <CompanyLogos />
      <WhatWeDoImage/>
      <WhatWeDo/>
      <ApproachImage/>
      <MissionSection/>
      <Testimonials/>
    </main>
  )
}