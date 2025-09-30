import { useState } from "react";
import Swal from "sweetalert2";

export default function SignupForm() {
    const initialInput = {
        name: "",
        email: "",
        password: "",
        age: "",
    };

    const [input, setInput] = useState(initialInput);
    const [submitted, setSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function handleInputChange(e) {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function submit(e) {
        e.preventDefault();

        if (!input.name || !input.email || !input.password || !input.age) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "⚠️ Please fill all fields!",
            });
            return;
        }

        const ageNum = Number(input.age);

        if (ageNum > 40) {
            Swal.fire({
                icon: "warning",
                title: "Age Restriction",
                text: "⚠️ You must be at least 40 years old!",
            });
            return;
        }

        if (input.password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Weak Password",
                text: "⚠️ Password must be at least 6 characters long!",
            });
            return;
        }

        // ✅ Success Alert
        Swal.fire({
            icon: "success",
            title: "Signup Successful!",
            text: `Welcome ${input.name}!`,
        });
        setTimeout(() => {
            setSubmitted(true);
        }, 2000);
        // 
    }

    function handleBack() {
        setInput(initialInput);
        setSubmitted(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 px-6 py-12">
            {!submitted ? (
                <form
                    onSubmit={submit}
                    className="bg-white rounded-2xl shadow-xl p-10    max-w-md w-full"
                    aria-label="Signup Form"
                >
                    <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 tracking-wide flex items-center justify-center gap-3">
                        <i className="fas fa-user-plus text-indigo-600"></i>
                        Create Your Account
                    </h2>

                    <label className="block mb-6 relative">
                        <span className="text-gray-700 font-semibold mb-2 block">Name</span>
                        <i className="fas fa-user absolute left-3 top-14 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="w-full px-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
                            required
                        />
                    </label>

                    <label className="block mb-6 relative">
                        <span className="text-gray-700 font-semibold mb-2 block">Email</span>
                        <i className="fas fa-envelope absolute left-3 top-14 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            className="w-full px-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
                            required
                        />
                    </label>

                    {/* password functionality starts here */}
                    <label className="block mb-6 relative">
                        <span className="text-gray-700 font-semibold mb-2 block">Password</span>
                        <i className="fas fa-lock absolute left-3 top-14 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={input.password}
                            onChange={handleInputChange}
                            placeholder="At least 6 characters"
                            className="w-full px-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-[58px] transform -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? (
                                <i className="fas fa-eye-slash"></i>
                            ) : (
                                <i className="fas fa-eye"></i>
                            )}
                        </button>
                    </label>

                    {/* password functionality ends here */}

                    <label className="block mb-8 relative">
                        <span className="text-gray-700 font-semibold mb-2 block">Age</span>
                        <i className="fas fa-calendar-alt absolute left-3 top-14 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="number"
                            name="age"
                            value={input.age}
                            onChange={handleInputChange}
                            placeholder="Your age"
                            className="w-full px-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-bold py-3 rounded-lg shadow-lg text-lg flex justify-center items-center gap-2"
                    >
                        <i className="fas fa-user-plus"></i>
                        Sign Up
                    </button>
                </form>
            ) : (
                <section
                    className="bg-white rounded-2xl shadow-xl max-w-md w-full p-10 text-center"
                    aria-label="Signup Preview"
                >
                    <h2 className="text-3xl font-extrabold mb-6 text-indigo-700 flex items-center justify-center gap-3">
                        <i className="fas fa-check-circle"></i>
                        Signup Successful!
                    </h2>
                    <p className="mb-6 text-gray-700 text-lg">
                        Welcome{" "}
                        <span className="font-semibold text-indigo-600">{input.name}</span>!{" "}
                        Your account has been created.
                    </p>

                    <div className="bg-indigo-50 rounded-lg p-6 text-left space-y-4 shadow-inner border border-indigo-200">
                        <div className="flex justify-between border-b border-indigo-200 pb-2">
                            <span className="font-semibold text-gray-700">Email:</span>
                            <span className="text-gray-900 break-all">{input.email}</span>
                        </div>
                        <div className="flex justify-between border-b border-indigo-200 pb-2">
                            <span className="font-semibold text-gray-700">Age:</span>
                            <span className="text-gray-900">{input.age}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-700">Password:</span>
                            <span className="text-gray-900 tracking-widest">
                                {"*".repeat(input.password.length)}
                            </span>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                            className="bg-gray-500 hover:bg-gray-600 transition-colors text-white font-semibold py-3 px-8 rounded-lg shadow-lg flex items-center gap-2"
                            onClick={handleBack}
                        >
                            <i className="fas fa-arrow-left"></i>
                            Back (Reset Form)
                        </button>
                    </div>
                </section>
            )}
        </div>
    );
}
