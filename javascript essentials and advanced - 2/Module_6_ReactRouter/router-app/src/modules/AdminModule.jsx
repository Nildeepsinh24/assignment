import { Routes, Route, Link, Outlet } from 'react-router-dom';

// Admin Child Components
const AdminDashboard = () => <div><h3>Admin Dashboard</h3><p>Overview of system metrics.</p></div>;
const ManageUsers = () => <div><h3>Manage Users</h3><p>User administration table here.</p></div>;
const SystemSettings = () => <div><h3>System Settings</h3><p>Global app configuration options.</p></div>;

// Admin Layout
const AdminLayout = () => {
    return (
        <div className="module-layout admin-theme">
            <aside className="sidebar">
                <h4>Admin Menu</h4>
                <ul>
                    <li><Link to="">Dashboard</Link></li>
                    <li><Link to="users">Manage Users</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                </ul>
            </aside>
            <div className="module-content">
                <h2>Admin Module Loaded Lazily</h2>
                {/* Child Router Outlet for Admin */}
                <div className="inner-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default function AdminModule() {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<ManageUsers />} />
                <Route path="settings" element={<SystemSettings />} />
            </Route>
        </Routes>
    );
}
