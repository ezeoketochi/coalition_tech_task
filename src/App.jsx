
import AppBar from './sections/appbar';
import PatientsSection from './sections/patients';

function App() {

  return (
    <>


      <div className=" @container flex gap-4 lg:gap-8 h-screen flex-col overflow-hidden bg-gray-50 p-4  max-w-screen bg-slate-100">

        {/* navbar */}
        <AppBar/>

        <div className="grid flex-1 oveflow-hidden lg:grid-cols-[25%_1fr_25%] my-2 lg:gap-8">

          <PatientsSection/>

          <div className="bg-red-500">col 2</div>
          <div className="bg-yellow-400">col 3</div>

        </div>

      </div>

    </>
  )
}

export default App
