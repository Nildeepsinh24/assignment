import { Routes, Route, Link, Outlet } from 'react-router-dom';

// User Child Components
const UserProfile = () => <div><h3>My Profile</h3><p>Personal detail form here.</p></div>;
const UserOrders = () => <div><h3>My Orders</h3><p>History of personal purchases.</p></div>;

// User Layout
const UserLayout = () => {
    return (
        <div className="module-layout user-theme">
            <aside className="sidebar">
                <h4>User Menu</h4>
                <ul>
                    <li><Link to="">Profile</Link></li>
                    <li><Link to="orders">Orders</Link></li>
                </ul>
            </aside>
            <div className="module-content">
                <h2>User Module Loaded Lazily</h2>
                {/* Child Router Outlet for User */}
                <div className="inner-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default function UserModule() {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<UserProfile />} />
                <Route path="orders" element={<UserOrders />} />
            </Route>
        </Routes>
    );
}
