import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { GiBlackBook } from "react-icons/gi";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";


const tourDates = [
  {
    
    
    time: "Rs. 250",
    venue: "Records",
    
  },
  {
    
    
    time: "Rs. 250",
    venue: "Observations",
  
  },
  {
   
   
    time: "Rs. 250",
    venue: "Assignments",
   
  },
  {
   
    time: "Rs. 250",
    venue: "Notebooks",
  
  },
];

export default function TourDates() {
  return (
    <ul className="list-none">
      {tourDates.map((gig) => {
        return (
          <li
            key={gig.id}
            className="flex items-center justify-between py-2 border-solid border-b-2 border-white last:border-b-0 leading-tight text-xl md:py-3 md:text-2xl lg:py-5 lg:justify-center lg:text-2xl xl:text-3xl lg:flex-row"
          >
            <div className="flex flex-col items-center justify-between text-center text-base leading-none w-[40%] md:text-xl lg:w-6/12 lg:flex-row lg:justify-start lg:text-left lg:text-2xl">
              <div className="flex flex-col justify-center items-center date w-[3.4rem] h-[3.4rem] leading-tight p-2 bg-fluo-green rounded-md lg:mr-12 lg:w-[3.3rem] lg:h-[3.3rem]">
                <p className="font-bold text-center uppercase">
                  {gig.date}
                  <GiBlackBook />
                </p>
              </div>
              <div className=" text-white font-semibold leading-tight lg:ml-[20%]">
                <p>{gig.day}</p>
                <p>{gig.time}</p>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 items-center text-center text-base justify-between w-[60%] md:text-xl lg:flex-row lg:text-left lg:w-6/12 lg:mt-0 lg:text-2xl">
              <div className="text-white font-semibold leading-tight">
                <p>{gig.venue}</p>
              </div>
              <div className="ml-2.5 lg:ml-auto">
                <a className="text-xs md:text-sm lg:text-base">
				<ScrollTo toId="" duration={1500}>
                  <ButtonPrimary>Fill the form</ButtonPrimary>
				  </ScrollTo>
                </a>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
