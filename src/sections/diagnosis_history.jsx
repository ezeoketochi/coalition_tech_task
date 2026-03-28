import DiagnosticTable from "../components/diagnostic_table";

export default function DiagnosisHistorySection({ data }) {


    return <section id="diagnosis" className="h-full">

        <div className="flex flex-col gap-4 h-full ">

            <div id="diagnosis-history" className="bg-white rounded-lg sm:rounded-[40px] p-8 shadow-md flex-5">

                <div className="py-3">
                    <h1 className="text-lg font-bold text-md sm:text-2xl lg:text-[24px]">Diagnosis History</h1>

                </div >

                <div>

                    <div id="chart" className="">

                    </div>

                    <div id="vitals">

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