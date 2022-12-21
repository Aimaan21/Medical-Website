import { useEffect, useState } from "react";
import AppButton from "./AppButton";




export const HeroSection = () => {
  const [heroBtn, setheroBtn] = useState(false)
  const [heroBtnSub, setheroBtnSub] = useState(false)

  useEffect(() => {
    if(heroBtn){
      console.log("Hero btn click")
      setheroBtn(false);
    }
    if(heroBtnSub){
      console.log("Hero btn sub click")
      setheroBtnSub(false);
    }
    // setheroBtn(false)
   
  }, [heroBtn,heroBtnSub])
  

  return (
    
    <div className="temp-padding-inline flex mx-auto gap-x-56" id="hero-section">
      <div className=" block py-20 space-y-12">
        <h1 className="text-primary-100">
          Consult a doctor <br />
          anytime, anywhere <br /> by{" "}
          <a className="text-primary-50 underline">video call</a>
        </h1>
        <p className="text-primary-100 lead opacity-75">
          Talk with a doctor using our highly secured HIPAA complaint end-to-end
          encrypted video call
        </p>
        <div className="btn-group space-x-6">
          <AppButton className="shadow-lg" btnColor="bg-primary-50 hover:bg-primary-50 transition" btnText="Ask A Doctor Online" btnTextColor="text-primary-300" type="button" clicked={(e:any) => setheroBtn(true)}/>
          <AppButton className="shadow-lg" btnColor="bg-white" btnText="Unlimited Chat" btnTextColor="text-primary-100" type="button" clicked={(e:any) => setheroBtn(true)}/>
        </div>
      </div>

      <div className=" flex flex-col justify-end">
        <div className="self-end relative">
        <AppButton btnColor="bg-white" btnText="2210 Doctors Online" btnTextColor="text-slate-900" type="button" className="absolute -top-20 -left-12 shadow-lg" clicked={(e:any) => setheroBtnSub(true)}/>
        <img src="doctor-image.png" className="hero-img" />
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
