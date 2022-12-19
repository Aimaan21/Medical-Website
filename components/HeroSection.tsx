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
    
    <div className="temp-padding-inline flex mx-auto justify-center bg-backgroud-100">
      <div className="max-w-[800px] block py-20">
        <h1 className="text-primary-50">
          Consult a doctor <br />
          anytime,anywhere <br /> by{" "}
          <a className="text-primary-100">videocall</a>
        </h1>
        <h5 className="max-w-[600px] text-primary-200">
          Talk with a doctor using our highly secured HIPAA complaint end-to-end
          encrypted video call
        </h5>
        <AppButton btnColor="bg-primary-100" btnText="Ask A Doctor Online" btnTextColor="text-primary-300" type="button" clicked={(e:any) => setheroBtn(true)}/>
        <AppButton btnColor="bg-white" btnText="Ask A Doctor Online" btnTextColor="text-primary-100" type="button" clicked={(e:any) => setheroBtn(true)}/>
      </div>

      <div className="bg-primary px-[80px] flex">
        <div className="self-end relative">
        <AppButton btnColor="bg-white" btnText="2210 DOCTORS ONLINE" btnTextColor="text-black" type="button" className="absolute mt-[-20px]" clicked={(e:any) => setheroBtnSub(true)}/>
        <img src="doctor-image.png" className="lg:h-[600px] lg:w-[650px] self-end ml-20"></img>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
