export default function DiagnosticTable({ data }) {

    console.log(`data for table is ${data}`)

    return <div className=" bg-transparent overflow-y-auto">

        <table className="w-full text-left">
            <thead>
                <tr className="bg-[#F6F7F8]">
                    <th className="px-8 py-5 text-sm font-semibold text-gray-700 rounded-l-3xl">Problem/Diagnosis</th>
                    <th className="px-8 py-5 text-sm font-semibold text-gray-700">Description</th>
                    <th className="px-8 py-5 text-sm font-semibold text-gray-700 rounded-r-3xl">Status</th>
                </tr>


            </thead>
            <tbody className="divide-y divide-gray-100">
                {data && data.diagnostic_list.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                        <td className="px-8 py-6 text-sm text-gray-800">{row.name}</td>
                        <td className="px-8 py-6 text-sm text-gray-600">{row.description}</td>
                        <td className="px-8 py-6 text-sm text-gray-800">{row.status}</td>
                    </tr>
                ))}
            </tbody>

        </table>

    </div>
}