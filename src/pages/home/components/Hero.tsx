import { assets } from '../../../assets/assets'

function Hero() {
  return (
    <div className='w-full h-screen'>
        <img src={assets.hero} alt="plantation" width={"100%"} />
    </div>
  )
}

export default Hero