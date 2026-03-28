import useApiCall from './api/api_call';
import AppBar from './components/appbar';
import DiagnosisHistorySection from './sections/diagnosis_history';
import PatientsSection from './sections/patients';
import ProfileSection from './sections/profile_section';


function App() {

  const { isLoading, error, data } = useApiCall(
    "repoData",
    "https://fedskillstest.coalitiontechnologies.workers.dev"
  );

  const jessicaData = data && data.find((item) => item.name === "Jessica Taylor");

  return (
    <div className="@container flex lg:gap-4 h-screen flex-col p-4 max-w-screen bg-slate-100">

      {/* navbar */}
      <AppBar />

      {isLoading ? (
        <div className="flex flex-1 justify-center items-center">
          Loading...
        </div>
      ) : error ? (
        <div className="flex flex-1 justify-center items-center">
          Error: {error.message}</div>
      ) : (
        data && (
          <div className="flex flex-col lg:grid flex-1 gap-3 lg:grid-cols-[20%_1fr_20%] my-2 lg:gap-8 min-h-0">

            <div className="min-h-0">
              <PatientsSection data={data} />
            </div>

            <div className="min-h-0">
              <DiagnosisHistorySection data={jessicaData} />
            </div>

            <div className="min-h-0">
              <ProfileSection profileData={jessicaData} />
            </div>

          </div>
        )
      )}
    </div>
  );
}

export default App
