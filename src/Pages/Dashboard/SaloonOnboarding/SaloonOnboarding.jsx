import React, { useState } from 'react';

const SaloonOnboarding = () => {
    const [formData, setFormData] = useState({
        salonName: '',
        ownerName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        openingHours: '',
        closingHours: '',
        services: '',
        description: '',
        licenseNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="h-[90vh] overflow-hidden rounded-2xl">
            <div className="p-4 h-full bg-slate-900 overflow-auto">
                <h2 className="text-2xl font-bold mb-6 text-white bg-slate-700 rounded-xl sticky top-0 z-10 p-4">
                Salon Onboarding Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Basic Information */}
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="salonName"
                                placeholder="Salon Name"
                                value={formData.salonName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />

                            <input
                                type="text"
                                name="ownerName"
                                placeholder="Owner Name"
                                value={formData.ownerName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        {/* Location and Hours */}
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="address"
                                placeholder="Salon Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />

                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                type="time"
                                name="openingHours"
                                placeholder="Opening Hours"
                                value={formData.openingHours}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />

                                <input
                                type="time"
                                name="closingHours"
                                placeholder="Closing Hours"
                                value={formData.closingHours}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>

                            <input
                                type="text"
                                name="licenseNumber"
                                placeholder="Business License Number"
                                value={formData.licenseNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>
                    </div>

                    {/* Full Width Fields */}
                    <div className="space-y-4">
                        <textarea
                        name="services"
                        placeholder="Available Services (comma separated)"
                        value={formData.services}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />

                        <textarea
                        name="description"
                        placeholder="Salon Description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SaloonOnboarding;