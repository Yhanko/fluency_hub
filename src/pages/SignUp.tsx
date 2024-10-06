import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GirlAds } from "../assets/Banner";

type FormValues = {
  fullName: string;
  email: string;
  idDocument: FileList;
  phoneNumber: string;
  course: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <section className="flex h-screen items-center px-20 justify-around">
      <img src={GirlAds} alt="" className="w-[40%]" />

      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 flex flex-col gap-4">
        <div className="text-[#1F1C14] font-bold text-lg text-center flex flex-col">
          <p>
            Join us on your journey to{" "}
            <span className="text-[#029BC5]">Fluency Hub</span>!
          </p>
        </div>

        <div className="flex flex-col gap-2 text-[#1F1C14]">
          <label className="flex flex-col text-sm gap-1 outline-none">
            Full Name
            <input
              type="text"
              className="bg-[#F2F2F2] px-4 py-2 rounded h-11"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName.message}</span>}
          </label>

          <label className="flex flex-col text-sm gap-1 outline-none">
            Email
            <input
              type="email"
              className="bg-[#F2F2F2] px-4 py-2 rounded h-11"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
              })}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </label>

          <label className="flex flex-col text-sm gap-1 outline-none">
            ID Document
            <input
              type="file"
              className="bg-[#F2F2F2] px-4 py-2 rounded h-11"
              {...register("idDocument", { required: "ID Document is required" })}
            />
            {errors.idDocument && <span className="text-red-500 text-xs">{errors.idDocument.message}</span>}
          </label>

          <label className="flex flex-col text-sm gap-1 outline-none">
            Phone Number
            <input
              type="text"
              className="bg-[#F2F2F2] px-4 py-2 rounded h-11"
              {...register("phoneNumber", {
                required: "Phone Number is required",
                pattern: { value: /^[0-9]+$/i, message: "Invalid phone number" }
              })}
            />
            {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber.message}</span>}
          </label>

          <label className="flex flex-col text-sm gap-1 outline-none">
            Course
            <div className="bg-[#F2F2F2] px-4 py-2 rounded h-11">
              <select
                className="w-full bg-transparent h-full outline-none"
                {...register("course", { required: "Please select a course" })}
              >
                <option value="">Choose the Course</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="extra">Extra</option>
              </select>
            </div>
            {errors.course && <span className="text-red-500 text-xs">{errors.course.message}</span>}
          </label>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center px-10 py-2 rounded bg-[#FAB900] hover:bg-[#362B0E] hover:text-white text-[#362B0E] h-11 font-bold transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignUp;
