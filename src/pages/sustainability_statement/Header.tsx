import { assets } from "../../assets/assets";

function Header() {
 return (
   <div className="relative w-full h-142 md:h-150 overflow-hidden">
     <img
       src={assets.sustainableagric}
       alt="Ile-Nla farm aerial view"
       className="absolute inset-0 w-full h-full object-cover"
     />
     <div className="absolute inset-0 bg-black/50" />

     <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 gap-4 max-w-3xl mx-auto">
       <p className="text-stat tracking-widest text-xs font-semibold">
         OUR ECOLOGICAL PLEDGE
       </p>
       <p className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
         Our Commitment to Sustainable Agriculture
       </p>
       <p className="text-milky text-sm md:text-base max-w-xl">
         At Ile-Nla, we combine precision agronomy and climate-smart
         technologies to nourish communities without compromising the future of
         our land.
       </p>
     </div>
   </div>
 );
}

export default Header