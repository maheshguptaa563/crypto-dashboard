import DashboardLayout from "../../components/DashboardLayout";
import Portfolio from "./components/Portfolio";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashbboard">
      <Portfolio />
    </DashboardLayout>
  );
};

export default Dashboard;
