import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const { registerUser } = useAuth(); // Assuming your context has this
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: '',
        email: '', // Added email for signup
        password: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await registerUser(form.username, form.email, form.password);

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
                    <h1>SIGN UP</h1>
                    <p>CREATE YOUR IDENTITY WITHIN THE CORE</p>
                </header>

                <div className="input-group">
                    <input name="username" type="text" required placeholder=" " onChange={handleChange} />
                    <label>USERNAME</label>
                </div>

                <div className="input-group">
                    <input name="email" type="email" required placeholder=" " onChange={handleChange} />
                    <label>EMAIL</label>
                </div>

                <div className="input-group">
                    <input name="password" type="password" required placeholder=" " onChange={handleChange} />
                    <label>PASSWORD</label>
                </div>

                <button type="submit">CREATE ACCOUNT</button>

                <div className="auth-toggle">
                    ALREADY REGISTERED? 
                    <button type="button" id="switch-mode" onClick={() => navigate('/login')}>
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;