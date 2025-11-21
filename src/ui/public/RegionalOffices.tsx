

const RegionalOffices = () => {
      return (
        <div className="w-full py-8 px-6 rounded-md border gap-3 flex flex-col border-gray-300">
          <label className="font-bold text-xl">Regional Offices</label>
          <div className="flex flex-col">
             <label className="font-bold">Khomas Region</label>
             <label className="text-gray-500 text-sm">Windhoek Regional Office</label>
          </div>

          <div className="flex flex-col">
             <label className="font-bold">Oshana Region</label>
             <label className="text-gray-500 text-sm">Oshakati Regional Office</label>
          </div>

          <div className="flex flex-col">
             <label className="font-bold">Erongo Region</label>
             <label className="text-gray-500 text-sm">Swakopmund Regional Office</label>
          </div>

          <div className="flex flex-col">
             <label className="font-bold">Ohangwena Region</label>
             <label className="text-gray-500 text-sm">Eenhana Regional Office</label>
          </div>

        </div>
      );
}

export default RegionalOffices;