import type React from "react";



interface FAQCardProps {
    title: string;
    desc: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ title, desc }) => {
    return (
        <div className="w-full xl:w-[49%] py-7 flex flex-col gap-2 border rounded border-gray-300 px-5">
            <label className="text-md font-semibold">{title}</label>
            <label className="text-sm text-gray-500">{desc}</label>
        </div>
    );
}

export default FAQCard;