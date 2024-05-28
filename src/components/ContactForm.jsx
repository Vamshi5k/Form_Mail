import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_vej6eu6', 'template_pwt7ioq', formData, 'hGCPrD_wr7urr0hf6')
            .then((result) => {
                toast.success('Form Submitted');
            }, (error) => {
                console.log(error.text);
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container mt-5">
            <Toaster position='top-right' reverseOrder={false} />
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete='off'
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete='off'
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        autoComplete='off'
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
