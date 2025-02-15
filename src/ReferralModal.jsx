import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ReferralModal({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    const req = await axios.post("https://a-be.onrender.com",{
      yourName: data.yourName,
      yourEmail: data.yourEmail,
      friendName: data.friendName,
      friendEmail: data.friendEmail,
      course: data.course
    });
    console.log(req.data);
    // Here you would typically send the data to your backend
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  bg-opacity-25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-purple-600 mb-4"
                >
                  Refer a Friend
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="yourName" className="block text-sm font-medium text-purple-600">Your Name</label>
                    <input
                      type="text"
                      id="yourName"
                      {...register("yourName", { required: "Your name is required" })}
                      className="mt-1 p-2 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                    />
                    {errors.yourName && <p className="mt-1 text-sm text-red-600">{errors.yourName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="yourEmail" className="block text-sm font-medium text-purple-600">Your Email</label>
                    <input
                      type="email"
                      id="yourEmail"
                      {...register("yourEmail", { 
                        required: "Your email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="mt-1 p-2 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                    />
                    {errors.yourEmail && <p className="mt-1 text-sm text-red-600">{errors.yourEmail.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="friendName" className="block text-sm font-medium text-purple-600">Friend's Name</label>
                    <input
                      type="text"
                      id="friendName"
                      {...register("friendName", { required: "Friend's name is required" })}
                      className="mt-1 p-2 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                    />
                    {errors.friendName && <p className="mt-1 text-sm text-red-600">{errors.friendName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="friendEmail" className="block text-sm font-medium text-purple-600">Friend's Email</label>
                    <input
                      type="email"
                      id="friendEmail"
                      {...register("friendEmail", { 
                        required: "Friend's email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="mt-1 p-2 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                    />
                    {errors.friendEmail && <p className="mt-1 text-sm text-red-600">{errors.friendEmail.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-purple-600">Course to Refer</label>
                    <select
                      id="course"
                      {...register("course", { required: "Please select a course" })}
                      className="mt-1 p-2 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                    >
                      <option value="">Select a course</option>
                      <option value="react">React Course</option>
                      <option value="node">Backend Development</option>
                      <option value="python">Web 3</option>
                    </select>
                    {errors.course && <p className="mt-1 text-sm text-red-600">{errors.course.message}</p>}
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                    >
                      Submit Referral
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ReferralModal;