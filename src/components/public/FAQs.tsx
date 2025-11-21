import type React from "react";
import FAQCard from "../../ui/public/FAQCard";


const FAQs: React.FC = () => {

    const FAQCardList = [
       {
        title: "How do I apply for benefits?",
        desc: "You can apply online through our portal or visit your nearest SASSA office. Make sure to bring all required documents."
       },
       {
        title: "What documents do I need?",
        desc: "You'll need a valid ID, proof of income, proof of residence, and any other documents specific to the benefit you're applying for."
       },
       {
        title: "How long does processing take?",
        desc: "Applications are typically processed within 3 months. You can check your application status online or by calling our helpline."
       },
       {
        title: "When are payments made?",
        desc: "Payments are made on the first day of each month. You can collect from designated pay points or receive direct deposits."
       },
    ];

    return (
        <div className="w-full py-5 flex flex-col gap-6">
           <label className="font-bold text-xl">Frequently Asked Questions</label>
           <div className="w-full flex justify-between flex-wrap items-center gap-5 py-2">
              {FAQCardList.map((faq, index) => (
               <FAQCard
                 key={index}
                 title={faq.title}
                 desc={faq.desc}
               />
              ))}
           </div>
        </div>
    );
}

export default FAQs;