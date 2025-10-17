


const Filters = () => {
     return (
        <div className="w-60 p-5 text-sm bg-white flex flex-col gap-3 border border-gray-300 shadow-lg right-20 mt-25 rounded-lg absolute">
            <div className="flex w-full py-2 border-b border-gray-300">
                <label className="">Filters</label>
            </div>
            
            <div className="flex flex-col gap-3 w-full">
                <label>Region</label>
                <div className="w-full flex justify-between items-center gap-3">
                    <div className="flex gap-2 items-center">
                       <input type="checkbox" />
                       <label>Khomas</label>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Filters;




