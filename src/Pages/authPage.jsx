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
        <div className="auth-page">
            <form onSubmit={handleSubmit} className="glass-pillar">

                <h2>Login</h2>

                <input
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AuthPage;