import React from "react";

const SignInForm = () => {
  return (
    <div className="mx-3 mb-10">
      <form action="">
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-3 border rounded-md my-3"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full p-3 border rounded-md my-3"
        />
        <input
          type="text"
          placeholder="Email address"
          className="w-full p-3 border rounded-md my-3"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full p-3 border rounded-md my-3"
        />
        <input
          type="submit"
          value="Start sharing your content on Pexels"
          className="w-full p-2 border rounded-md bg-black hover:bg-[#059377] text-white font-semibold cursor-pointer my-5"
        />
      </form>

      <div className="flex justify-center items-center">
        <span className="text-[#7f7f7f] font-medium text-center text-[14px]">
          <span className="whitespace-nowrap">
            By joining, you agree to our{" "}
            <span className="underline decoration-dotted decoration-2">
              Terms of Service
            </span>{" "}
            and
          </span>{" "}
          <span className="whitespace-nowrap underline decoration-dotted decoration-2">
            Privacy Policy
          </span>
        </span>
      </div>
    </div>
  );
};

export default SignInForm;
