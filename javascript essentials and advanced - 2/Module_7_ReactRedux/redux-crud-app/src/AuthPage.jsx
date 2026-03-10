import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from './app/authSlice';

// A simple combined Login/Register page
export default function AuthPage() {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            dispatch(login(formData));
        } else {
            dispatch(register(formData));
        }
    };

    return (
        <div className="auth-container d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-sm" style={{ width: '350px' }}>
                <h3 className="text-center mb-4">{isLogin ? 'Login' : 'Register'}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Username</label>
                        <input
                            required
                            className="form-control"
                            value={formData.username}
                            onChange={e => setFormData({ ...formData, username: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            required
                            type="password"
                            className="form-control"
                            value={formData.password}
                            onChange={e => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                    <button className="btn btn-primary w-100 mb-3" type="submit">
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
                <p className="text-center mb-0" style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
                </p>
            </div>
        </div>
    );
}
