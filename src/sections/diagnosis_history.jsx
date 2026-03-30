import DiagnosisChart from "../components/chart";
import DiagnosticTable from "../components/diagnostic_table";

export default function DiagnosisHistorySection({ data }) {


    return <section id="diagnosis" className="h-full w-full">

        <div className="flex flex-col gap-4 h-full w-full ">

            <div id="diagnosis-history" className="bg-white rounded-lg sm:rounded-[40px] p-8 shadow-md flex-5 flex-col w-full">

                <div className="py-3 h-[10%] flex items-center justify-start">
                    <h1 className="text-lg font-bold text-md sm:text-2xl lg:text-[24px]">Diagnosis History</h1>

                </div >

                <div className="flex flex-col gap-4 h-[90%] w-full">

                    <div id="chart" className="flex bg-gray-200 rounded-lg flex-3 w-full min-h-0">
                        <DiagnosisChart data={[...data.diagnosis_history].reverse()} />
                    </div>

                    <div id="vitals" className="bg-red-500 flex-2 rounded-lg">

                    </div>

                </div>




            </div>

            <div id="diagnostic-list" className=" bg-white rounded-lg sm:rounded-[40px] p-8 shadow-md flex flex-2 flex-col min-h-0  ">

                <div className="py-2 bg-white ">
                    <h1 className="text-lg font-bold text-md sm:text-2xl lg:text-[24px]">Diagnostic List</h1>

                </div>

                {/* table */}
                <DiagnosticTable data={data} />


            </div>
        </div>




    </section>
}