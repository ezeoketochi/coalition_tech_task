
import AppBar from './components/appbar';
import DiagnosisHistorySection from './sections/diagnosis_history';
import PatientsSection from './sections/patients';
import ProfileSection from './sections/profile_section';

function App() {

  return (
    <>


      <div className="@container flex lg:gap-4 h-screen flex-col p-4  max-w-screen bg-slate-100">

        {/* navbar */}
        <AppBar />

        <div className="grid flex-1 gap-3 lg:grid-cols-[25%_1fr_25%] my-2 lg:gap-8 min-h-0">

          <div className='min-h-0'> <PatientsSection />  </div>
          <div className='min-h-0'> <DiagnosisHistorySection /></div>

          <div className='min-h-0'> <ProfileSection name={"Jessica Taylor"} /></div>



        </div>

      </div>

    </>
  )
}

export default App
