import React, { useRef, useState } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef()
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('') // 'success' or 'error'

    const sendEmail = async (e) => {
        e.preventDefault();
        
        // Get email value for validation
        const formData = new FormData(form.current);
        const email = formData.get('user_email');
        
        // Basic email validation
        if (!email || !isValidEmail(email)) {
            setMessage('Please enter a valid email address');
            setMessageType('error');
            return;
        }

        setIsLoading(true);
        setMessage('');
        
        try {
            const result = await emailjs.sendForm(
                'service_c918e34', 
                'template_w1u2nxn', 
                form.current, 
                {
                    publicKey: 'GhGsKhqeo2zgm3Ogg',
                }
            );
            
            console.log('Email sent successfully:', result.text);
            setMessage('🎉 Welcome aboard! Check your email for confirmation.');
            setMessageType('success');
            
            // Reset form after successful submission
            form.current.reset();
            
        } catch (error) {
            console.error('Email sending failed:', error);
            setMessage('Oops! Something went wrong. Please try again later.');
            setMessageType('error');
        } finally {
            setIsLoading(false);
            
            // Clear message after 5 seconds
            setTimeout(() => {
                setMessage('');
                setMessageType('');
            }, 5000);
        }
    };

    // Email validation helper function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Clear message when user starts typing
    const handleInputChange = () => {
        if (message) {
            setMessage('');
            setMessageType('');
        }
    };

    return (
        <div className="join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP </span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text'>WITH US? </span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input 
                        type="email" 
                        name='user_email' 
                        placeholder='Enter Your Email Address'
                        required
                        disabled={isLoading}
                        onChange={handleInputChange}
                    />
                    
                    <button 
                        className={`btn btn-j ${isLoading ? 'loading' : ''}`}
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span>Joining...</span>
                                <div className="loading-spinner"></div>
                            </>
                        ) : (
                            'Join Now'
                        )}
                    </button>
                </form>
                
                {/* Message Display */}
                {message && (
                    <div className={`message ${messageType}`}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Join