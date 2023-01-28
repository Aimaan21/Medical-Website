import AppButton from "./AppButton";

export default function Foot() {
  return (
   
    <div id="footer-section">
        {/* for mobile,lg,xl,2xl */}
      <div
        
        className="nav-background-shade 
        grid auto-cols-auto	gap-x-16 space-y-8 px-6 py-8 text-base font-medium
        text-primary-700/60
        md:hidden 
        lg:grid lg:grid-cols-6 lg:gap-x-8 lg:px-10 lg:py-10 lg:text-md lg:font-medium
        xl:gap-x-12 xl:px-16 xl:py-12 xl:text-lg
        2xl:gap-x-16 2xl:px-20 2xl:py-16"
      >
        <div className="col-span-2 flex flex-col space-y-4">
          <h5 className="font-bold text-secondary-500">Doctor Web portal</h5>
          <p className="twxt-lg w-[25ch]">
            Talk with a doctor using our highly end-to-end encrypted
          </p>
          <div className="btn-group">
            <AppButton
              className="bg-primary-500 text-sm text-btn-200 shadow-lg transition hover:bg-secondary-500"
              btnText="Ask A "
              // btnTextColor="text-btn-200"
              type="button"
            />
            <AppButton
              className="bg-white text-secondary-500 shadow-lg"
              // btnColor="bg-white"
              btnText="Unlimite"
              // btnTextColor="text-secondary-500"
              type="button"
            />
          </div>
        </div>
        <div id="footer-col-2">
          <ul className="grid grid-cols-1 gap-y-1 md:gap-y-2 lg:gap-y-3">
            <li>
              <a href="">Ask a doctor online</a>
            </li>
            <li>
              <a href="">Chat with a doctor</a>
            </li>
            <li>
              <a href="">Phone a doctor</a>
            </li>
            <li>
              <a href="">online covid-19 care</a>
            </li>
            <li>
              <a href="">Ask a doctor online</a>
            </li>
            <li>
              <a href="">Chat with a doctor</a>
            </li>
            <li>
              <a href="">Phone a doctor</a>
            </li>
            <li>
              <a href="">online covid-19 care</a>
            </li>
            <li>
              <a href="">Chat with a doctor</a>
            </li>
            <li>
              <a href="">Phone a doctor</a>
            </li>
            <li>
              <a href="">online covid-19 care</a>
            </li>
          </ul>
        </div>
        <div id="footer-col-3">
          <ul className="grid grid-cols-1 gap-y-1 md:gap-y-2 lg:gap-y-3 lg:pl-7 xl:pl-12">
            <li>
              <a href="">Tools</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Ads policy</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
          </ul>
        </div>

        <div id="footer-col-4">
          <ul className="grid grid-cols-1 gap-y-1 md:gap-y-2 lg:gap-y-3">
            <li>
              <a href="">Get docta app</a>
            </li>
            <li>
              <a href="">Get api</a>
            </li>
            <li>
              <a href="">Get widget</a>
            </li>
            <li>
              <a href="">Medical review team</a>
            </li>
            <li>
              <a href="">Symtoms checker</a>
            </li>
            <li>
              <a href="">Deals & offers</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
        </div>
        <div id="footer-col-5">
          <ul className="grid grid-cols-1 gap-y-1 md:gap-y-2 lg:gap-y-3">
            <li>
              <a href="">For employers</a>
            </li>
            <li>
              <a href="">For telegram</a>
            </li>
            <li>
              <a href="">For slack teams</a>
            </li>
            <li>
              <a href="">For ms teams</a>
            </li>
            <li>
              <a href="">For employers</a>
            </li>
            <li>
              <a href="">For telegram</a>
            </li>
            <li>
              <a href="">For slack teams</a>
            </li>
            <li>
              <a href="">For ms teams</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" nav-background-shade hidden md:flex md:flex-col lg:hidden
      text-primary-700/60 text-base font-medium px-8 py-8 gap-y-6
      ">
        <div className="grid grid-col-1">
        <div className="flex flex-col space-y-4">
          <h5 className="font-bold text-secondary-500">Doctor Web portal</h5>
          <p className="twxt-lg w-[25ch]">
            Talk with a doctor using our highly end-to-end encrypted
          </p>
          <div className="btn-group">
            <AppButton
              className="bg-primary-500 text-sm text-btn-200 shadow-lg transition hover:bg-secondary-500"
              btnText="Ask A "
              // btnTextColor="text-btn-200"
              type="button"
            />
            <AppButton
              className="bg-white text-secondary-500 shadow-lg"
              // btnColor="bg-white"
              btnText="Unlimite"
              // btnTextColor="text-secondary-500"
              type="button"
            />
          </div>
        </div>
        </div>
        <div className="grid grid-cols-4 gap-x-12">
        <div id="footer-col-2">
          <ul className="grid grid-cols-1 gap-y-1 md:gap-y-2 lg:gap-y-3">
            <li>
              <a href="">Ask a doctor online</a>
            </li>
            <li>
              <a href="">Chat with a doctor</a>
            </li>
            <li>
              <a href="">Phone a doctor</a>
            </li>
            <li>
              <a href="">online covid-19 care</a>
            </li>
            <li>
              <a href="">Ask a doctor online</a>
            </li>
            <li>
              <a href="">Chat with a doctor</a>
            </li>
            <li>
              <a href="">Phone a doctor</a>
            </li>
            <li>
              <a href="">online covid-19 care</a>
            </li>
            <li>
              <a href="">Chat with a doctor</a>
            </li>
            <li>
              <a href="">Phone a doctor</a>
            </li>
            <li>
              <a href="">online covid-19 care</a>
            </li>
          </ul>
        </div>
        <div id="footer-col-3">
          <ul className="grid grid-cols-1  md:gap-y-2 pl-8">
            <li>
              <a href="">Tools</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Ads policy</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
          </ul>
        </div>

        <div id="footer-col-4">
          <ul className="grid grid-cols-1 gap-y-1 md:gap-y-2 lg:gap-y-3">
            <li>
              <a href="">Get docta app</a>
            </li>
            <li>
              <a href="">Get api</a>
            </li>
            <li>
              <a href="">Get widget</a>
            </li>
            <li>
              <a href="">Medical review team</a>
            </li>
            <li>
              <a href="">Symtoms checker</a>
            </li>
            <li>
              <a href="">Deals & offers</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
        </div>
        <div id="footer-col-5">
          <ul className="grid grid-cols-1 gap-y-1 md:gap-y-2 lg:gap-y-3">
            <li>
              <a href="">For employers</a>
            </li>
            <li>
              <a href="">For telegram</a>
            </li>
            <li>
              <a href="">For slack teams</a>
            </li>
            <li>
              <a href="">For ms teams</a>
            </li>
            <li>
              <a href="">For employers</a>
            </li>
            <li>
              <a href="">For telegram</a>
            </li>
            <li>
              <a href="">For slack teams</a>
            </li>
            <li>
              <a href="">For ms teams</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
