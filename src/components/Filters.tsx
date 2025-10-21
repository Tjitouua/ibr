

interface FilterOption {
   label: string;
   value: string;
}

interface FilterCategory {
   name: string;
   options: FilterOption[];
}

interface FilterProps {
    categories: FilterCategory[];
}


const Filters: React.FC<FilterProps> = ({ categories }) => {
     return (
        <div className="w-60 p-5 text-sm bg-white flex flex-col gap-3 border border-gray-300 shadow-lg right-20 mt-25 rounded-lg absolute">
            <div className="flex w-full py-2 border-b border-gray-300">
                <label className="">Filters</label>
            </div>
            
            {categories.map((category) => (
            <div className="flex flex-col gap-3 text-gray-800 text-sm w-full">
                <label className="font-bold">{category.name}</label>
                <div className="w-full flex justify-between border-b border-gray-300 pb-4 flex-wrap items-center gap-3">
                    {category.options.map((option) => (
                    <div className="flex gap-2 items-center">
                       <input type="checkbox" />
                       <label>{option.label}</label>
                    </div>
                    ))}
                </div>
            </div>
            ))}
        </div>
     );
}

export default Filters;




