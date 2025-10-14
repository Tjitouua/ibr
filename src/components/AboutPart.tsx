import React from 'react'

const AboutPart = () => {
      return (
         <div className="w-full min-h-100 max-w-400 flex px-5 py-17 gap-8 flex-col xl:flex-row justify-between">
             {/* Info Div  */}
             <div className="py-2 flex flex-col gap-3 w-full xl:w-1/2">
                 <label className="text-3xl font-bold text-black">What is the CBMIS System?</label>
                 <label className="text-lg">The Commodity and Beneficiary Management 
                 Information System (CBMIS) helps bring together all the information 
                 about people who are part of Namibia’s social protection programs. 
                 Instead of having different systems for each program, CBMIS keeps
                  everything in one place. It stores details about the beneficiaries, 
                  the payments they receive, and even any complaints or issues they raise.</label>

                <label className="text-lg">By keeping all this information connected, the
                 system makes it easier for the government to see the bigger picture, how
                  programs are working, who’s being helped, and where things can be improved.
                   It also gives useful reports and insights that help Namibia strengthen and
                    manage its social protection policies more effectively.</label>
             </div>

             {/* Image Div  */}
             <div className="w-full xl:w-[45%] h-90 px-10 bg-[url('/images/about.jpg')] rounded-xl bg-cover bg-center" >
 
             </div>
         </div>
      );
}

export default AboutPart;