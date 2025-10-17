



const BeneficiariesTable = () => {
    return (
    <table className="text-sm text-gray-500 bg-white">
        <thead className="border-b border-gray-300 bg-white">
            <tr>
                <th className="px-3 py-3 text-left">ID</th>
                <th className="px-3 py-3 text-left">Name</th>
                <th className="px-3 py-3 text-left">Age</th>
                <th className="px-3 py-3 text-left">Gender</th>
                <th className="px-3 py-3 text-left">Region</th>
                <th className="px-3 py-3 text-left">Program</th>
                <th className="px-3 py-3 text-left">Status</th>
                <th className="px-3 py-3 text-left">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-300">
                <td className="px-2 py-2 text-left">02110700629</td>
                <td className="px-2 py-2 text-left">Tjitouua Mapoha</td>
                <td className="px-2 py-2 text-left">22</td>
                <td className="px-2 py-2 text-left">Male</td>
                <td className="px-2 py-2 text-left">Khomas</td>
                <td className="px-2 py-2 text-left">Old Age Grand</td>
                <td className="px-2 py-2 text-left">
                    <div className="inline-block py-1 text-[12px] px-2 rounded-xl bg-blue-600/70 text-white">
                      Active
                    </div>
                </td>
                <td className="px-2 py-2 text-left">
                    <button className="px-3 rounded-sm cursor-pointer py-2 flex justify-center items-center hover:text-white hover:bg-blue-600">View</button>
                </td>
            </tr>


            <tr className="border-b border-gray-300">
                <td className="px-2 py-2 text-left">02110700629</td>
                <td className="px-2 py-2 text-left">Tjitouua Mapoha</td>
                <td className="px-2 py-2 text-left">22</td>
                <td className="px-2 py-2 text-left">Male</td>
                <td className="px-2 py-2 text-left">Khomas</td>
                <td className="px-2 py-2 text-left">Old Age Grand</td>
                <td className="px-2 py-2 text-left">
                    <div className="inline-block py-1 text-[12px] px-2 rounded-xl bg-red-700/70 text-white">
                      Inactive
                    </div>
                </td>
                <td className="px-2 py-2 text-left">
                    <button className="px-3 rounded-sm cursor-pointer py-2 flex justify-center items-center hover:text-white hover:bg-blue-600">View</button>
                </td>
            </tr>


            <tr className="border-b border-gray-300">
                <td className="px-2 py-2 text-left">02110700629</td>
                <td className="px-2 py-2 text-left">Tjitouua Mapoha</td>
                <td className="px-2 py-2 text-left">22</td>
                <td className="px-2 py-2 text-left">Male</td>
                <td className="px-2 py-2 text-left">Khomas</td>
                <td className="px-2 py-2 text-left">Old Age Grand</td>
                <td className="px-2 py-2 text-left">
                    <div className="inline-block py-1 text-[12px] px-2 rounded-xl border border-gray-400">
                      Pending
                    </div>
                </td>
                <td className="px-2 py-2 text-left">
                    <button className="px-3 rounded-sm cursor-pointer py-2 flex justify-center items-center hover:text-white hover:bg-blue-600">View</button>
                </td>
            </tr>




        </tbody>
    </table>
    );
}


export default BeneficiariesTable;