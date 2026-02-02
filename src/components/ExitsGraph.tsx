import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Graphs from "../ui/Graphs";
import { useEffect, useState } from "react";

/*
const regions = [
    { program: "CBIG", enrolled: 0 },
    { program: "Temporary Disability Grant", enrolled: 5527 },
    { program: "Permanent Disability Grant", enrolled: 8416 },
    { program: "Street Committee Member", enrolled: 0 },
    { program: "Assistant Teachers", enrolled: 0 },
    { program: "Old Age Grant", enrolled: 15537 },
];
*/


interface ProgramAPIData {
    name: string;
    value: number;
}

interface ProgramChartData {
    program: string;
    enrolled: number;
}


const ExitsGraph = () => {
    const [programs, setPrograms] = useState<ProgramAPIData[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("http://localhost/backend_ibr/getExitsProgramsStats.php")
        .then(res => res.json())
        .then(data => {
            setPrograms(data);
            setLoading(false);
        })
        .catch(err => console.error("Failed to fetch program data: ", err));
        setLoading(false);
    }, []);

    if(loading) {
        return <p className="text-xs">Loading programme data...</p>
    }

    if(programs.length === 0) {
        return <p className="text-xs">No programme data available</p>
    }



    return (
        <Graphs title="Exits by Programme" desc="Overview of participants exiting each programme">
            <div className="w-full h-70 mt-2 text-[10px] font-bold text-black">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={programs}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} angle={-15} textAnchor="end" />
                        <YAxis />
                        <Tooltip formatter={(value: number) => `${value} Exits`} />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#1434A4"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Graphs>
    );
};

export default ExitsGraph;
