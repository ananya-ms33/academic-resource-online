import Navbar from './navbar';

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="dashboard">
        <div className="dashboard-card">
          <h2>Welcome to Student Dashboard</h2>
          <p>
            Here you will see approved resources and placement experiences.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;