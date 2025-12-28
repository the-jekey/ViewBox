import Dashboard from "./Components/Dashboard";
import Paymentsinfo from "./Components/PaymentsInfo";
import Referrals from "./Components/Referrals";
import UploadedVideos from "./Components/UploadedVideos";
import Withdrawals from "./Components/Withdrawals";
import Routing from "./Utils/Routing";

export default function App() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <Routing />
    </div>
  );
}
