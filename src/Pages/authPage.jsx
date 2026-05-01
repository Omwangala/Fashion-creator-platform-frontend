import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await loginUser(form.username, form.password);

        if (res.success === false) {
            alert(res.message);
            return;
        }

        navigate('/');
    };

    return (
        <div className="auth-page app-container">
            <form onSubmit={handleSubmit} className="glass-pillar">
                
                <header className="auth-header">
                    <h1>LOGIN</h1>
                    <p>ENTER YOUR CREDENTIALS TO ACCESS THE CORE</p>
                </header>

                {/* Username Group */}
                <div className="input-group">
                    <input
                        name="username"
                        type="text"
                        required
                        placeholder=" " 
                        onChange={handleChange}
                        value={form.username}
                    />
                    <label>USERNAME</label>
                </div>

                {/* Password Group */}
                <div className="input-group">
                    <input
                        name="password"
                        type="password"
                        required
                        placeholder=" "
                        onChange={handleChange}
                        value={form.password}
                    />
                    <label>PASSWORD</label>
                </div>

                <button type="submit">LOGIN</button>

                <div className="auth-toggle">
                    DON'T HAVE AN ACCOUNT? 
                    <button type="button" id="switch-mode" onClick={() => navigate('/signup')}>
                        SIGN UP
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;