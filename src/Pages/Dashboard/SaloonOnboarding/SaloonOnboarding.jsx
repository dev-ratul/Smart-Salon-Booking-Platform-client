import React from 'react';
import { useForm } from 'react-hook-form';

  import axios from 'axios';

const SaloonOnboarding = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = async (data) => {
        const datas= {
            name: data.name,
            

        }
  try {
    const response = await axios.post(
      'https://smart-salon-server-new.onrender.com/api/saloon/create',
      datas, // axios automatically converts to JSON
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Server Response:', response.data);

  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

  return (
    <div className="h-[90vh] overflow-hidden rounded-2xl">
      <div className="p-4 h-full bg-slate-900 overflow-auto">
        <h2 className="text-2xl font-bold mb-6 text-white bg-slate-700 rounded-xl sticky top-0 z-10 p-4">
          Salon Onboarding Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                placeholder="owner"
                {...register("oi", { required: true })}
                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Location and Hours */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Salon Address"
                {...register("address", { required: true })}
                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                placeholder="City"
                {...register("city", { required: true })}
                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="time"
                  {...register("openingHours", { required: true })}
                  className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="time"
                  {...register("closingHours", { required: true })}
                  className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <input
                type="text"
                placeholder="Business License Number"
                {...register("licenseNumber")}
                className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Full Width Fields */}
          <div className="space-y-4">
            <textarea
              placeholder="Available Services (comma separated)"
              {...register("services")}
              rows="3"
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              placeholder="Salon Description"
              {...register("description")}
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
