'use client';
import {useState} from "react";
import '../../styles/register.css';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock async request
            alert('Account created successfully!');
            setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
            setErrors({});
        } catch (error) {
            setErrors({ form: 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    return (
        <div className="register-container">
            <div className="form-box">
                <h1>Create Your Account</h1>
                {errors.form && <p className="error-message">{errors.form}</p>}
                <form onSubmit={handleSubmit} noValidate>
                    <div className="input-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            aria-invalid={!!errors.fullName}
                            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                            required
                        />
                        {errors.fullName && (
                            <span id="fullName-error" className="error-message">
                {errors.fullName}
              </span>
                        )}
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            required
                        />
                        {errors.email && (
                            <span id="email-error" className="error-message">
                {errors.email}
              </span>
                        )}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            aria-invalid={!!errors.password}
                            aria-describedby={errors.password ? 'password-error' : undefined}
                            required
                        />
                        {errors.password && (
                            <span id="password-error" className="error-message">
                {errors.password}
              </span>
                        )}
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            aria-invalid={!!errors.confirmPassword}
                            aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                            required
                        />
                        {errors.confirmPassword && (
                            <span id="confirmPassword-error" className="error-message">
                {errors.confirmPassword}
              </span>
                        )}
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>
                <p>
                    Already have an account? <a href="/login">Sign in</a>
                </p>
            </div>
        </div>
    );
}