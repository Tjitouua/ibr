import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Graphs from "../ui/Graphs";

const regions = [
    { program: "CBIG", enrolled: 0 },
    { program: "Temporary Disability Grant", enrolled: 5527 },
    { program: "Permanent Disability Grant", enrolled: 8416 },
    { program: "Street Committee Member", enrolled: 0 },
    { program: "Assistant Teachers", enrolled: 0 },
    { program: "Old Age Grant", enrolled: 15537 },
];

const ExitsGraph = () => {
    return (
        <Graphs title="Exits by Programme" desc="Overview of participants exiting each programme">
            <div className="w-full h-70 mt-2 text-[10px] font-bold text-black">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={regions}
                        margin={{ top: 0, right: 30, left: 0, bottom: 15 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="program" interval={0} angle={-30} textAnchor="end" />
                        <YAxis />
                        <Tooltip formatter={(value: number) => `N$ ${(value / 1_000_000).toFixed(2)}M`} />
                        <Line
                            type="monotone"
                            dataKey="enrolled"
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
