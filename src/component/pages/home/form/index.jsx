import React, { useState } from 'react'
import sitImg from "../../../images/sitting.webp";
import { AlertCircle, CheckCircle, Mail, Phone, Send } from 'lucide-react';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                if (!/^[a-zA-Z\s]+$/.test(value.trim())) return 'Name can only contain letters and spaces';
                return '';

            case 'email':
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
                return '';

            case 'subject':
                if (!value.trim()) return 'Subject is required';
                if (value.trim().length < 3) return 'Subject must be at least 3 characters';
                if (value.trim().length > 100) return 'Subject must be less than 100 characters';
                return '';

            case 'message':
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
                return '';

            default:
                return '';
        }
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Real-time validation
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({
                ...prev,
                [name]: error
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));

        const error = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Mark all fields as touched
        const allTouched = Object.keys(formData).reduce((acc, key) => {
            acc[key] = true;
            return acc;
        }, {});
        setTouched(allTouched);

        // Validate form
        if (!validateForm()) {
            setSubmitStatus('validation_error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Using Formspree (free service) - you'll need to replace with your form endpoint
            const response = await fetch('https://formspree.io/f/xeojvqol', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                    _replyto: "ahamednasith733@gmail.com",
                    _subject: `New message from ${formData.name.trim()}: ${formData.subject.trim()}`,
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setErrors({});
                setTouched({});
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='mt-[150px] sm:mt-[380px] relative w-10/12 xl:w-7/12 mx-auto'>
            <img src={sitImg} alt='sitImg' className='absolute -top-[78px] sm:-top-[230px] -left-[15px] sm:-left-[40px] w-[50px] sm:w-auto' />
            <div className='w-full mx-auto bg-[#0B7DFF4D] rounded-[14px] sm:rounded-[30px] p-[20px] sm:px-[90px] sm:py-[53px] grid lg:grid-cols-2 gap-[50px] relative z-10'>
                <div className='text-[#FFFFFF]'>
                    <p className='inter-bold text-[24px]'>Get in touch</p>
                    <p className='mt-[5px] sm:mt-[19px] inter-medium text-[15px] sm:text-[17px]'>I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
                    <div className='mt-[15px] sm:mmt-[60px]'>
                        <div className='flex gap-[16px] items-center'>
                            <div className='size-[40px] rounded-full bg-[#FFFFFF4D] flex justify-center items-center'>
                                <Phone size={16}/>
                            </div>
                            <p className='inter-regular text-[15px]'>9003479021</p>
                        </div>
                        <div className='flex gap-[16px] items-center mt-[14px]'>
                            <div className='size-[40px] rounded-full bg-[#FFFFFF4D] flex justify-center items-center'>
                                <Mail size={16}/>
                            </div>
                            <p className='inter-regular text-[15px]'>s.subash90034@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='text-[#FFF]'>
                    <p className='inter-bold text-[24px]'>Send me a message</p>

                    {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-green-200">Message sent successfully!</span>
                        </div>
                    )}

                    {submitStatus === 'validation_error' && (
                        <div className="mb-6 p-4 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center space-x-3">
                            <AlertCircle className="w-5 h-5 text-orange-400" />
                            <span className="text-orange-200">Please fix the errors below before submitting.</span>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                            <AlertCircle className="w-5 h-5 text-red-400" />
                            <span className="text-red-200">Failed to send message. Please try again.</span>
                        </div>
                    )}

                    <input type='text' name="name" className={`placeholder:text-[#FFF] pl-[20px] pr-[10px] py-[10px] w-full bg-[#FFFFFF4D] rounded-[10px] mt-[20px] focus:outline-none ${errors.name && touched.name ? 'border-red-400 focus:ring-red-400' : 'border-none'}`} placeholder='Name'
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                        <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.name}</span>
                        </p>
                    )}
                    <input type="email" name="email" className={`placeholder:text-[#FFF] pl-[20px] pr-[10px] py-[10px] w-full bg-[#FFFFFF4D] rounded-[10px] mt-[20px] focus:outline-none ${errors.email && touched.email ? 'border-red-400 focus:ring-red-400' : 'border-none'}`} placeholder='Email Adress'
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur} />
                    {errors.email && touched.email && (
                        <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.email}</span>
                        </p>
                    )}
                    <input type='text' name="subject" className={`placeholder:text-[#FFF] pl-[20px] pr-[10px] py-[10px] w-full bg-[#FFFFFF4D] rounded-[10px] mt-[20px] focus:outline-none ${errors.subject && touched.subject ? 'border-red-400 focus:ring-red-400' : 'border-none'}`} placeholder='Subject'
                        value={formData.subject}
                        onChange={handleInputChange}
                        onBlur={handleBlur} />
                    {errors.subject && touched.subject && (
                        <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.subject}</span>
                        </p>
                    )}
                    <textarea rows={5} name="message" className={`placeholder:text-[#FFF] pl-[20px] pr-[10px] py-[10px] w-full bg-[#FFFFFF4D] rounded-[10px] mt-[20px] focus:outline-none resize-none ${errors.message && touched.message ? 'border-red-400 focus:ring-red-400' : 'border-none'}`} placeholder='Your message'
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {errors.message && touched.message && (
                        <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.message}</span>
                        </p>
                    )}
                    <button className='mt-[20px] bg-gradient-to-bl from-[#0A7CFF] via-[#0A7CFF] to-[#FFFFFF] px-[24px] py-[10px] rounded-[10px] text-[14px] flex gap-2'
                        onClick={handleSubmit}
                        disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                <span>Send message</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
            <div className='absolute bg-blue-500 opacity-70 blur-[200px] w-[400px] h-[200px] bottom-0 z-0 -left-[450px]'></div>
            <div className='absolute bg-blue-500 opacity-70 blur-[200px] w-[400px] h-[200px] -top-[300px] z-0 -right-[450px]'></div>
        </div>
    )
}
