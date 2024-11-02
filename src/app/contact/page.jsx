"use client";

import { React, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+62 813 3944 2244"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "wahyuaristya08@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Gianyar, Bali, Indonesia",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [loading, setLoading] = useState(false); // Loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData); // Log the form data
        setLoading(true); // Set loading to true when submitting

        try {
            const response = await fetch("https://api-portofolio-gamma.vercel.app/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            console.log("Response status:", response.status); // Log the response status

            if (response.ok) {
                console.log("Message sent successfully!");
                setSuccessMessage("Message sent successfully!");
                setIsFormVisible(false); // Hide the form
                // Optionally reset the form
                setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            } else {
                console.error("Failed to send message");
                setSuccessMessage(""); // Clear success message
            }
        } catch (error) {
            console.error("Error occurred while sending message:", error);
            setSuccessMessage(""); // Clear success message
        } finally {
            setLoading(false); // Reset loading state after request
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn'
                }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* contact form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        {isFormVisible ? (
                            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                                <h3 className="text-4xl text-accent">lets Get in Touch</h3>
                                <p className="text-white/60">
                                    I’d love to hear from you! Whether you have questions, feedback, or collaboration inquiries, feel free to reach out.
                                </p>
                                {/* Success Message */}
                                {successMessage && (
                                    <div className="p-4 bg-green-500 text-white rounded-md">
                                        {successMessage}
                                    </div>
                                )}
                                {/* form */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required/>
                                    <Input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required/>
                                    <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required/>
                                    <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required/>
                                </div>
                                {/* textarea */}
                                <Textarea className="h-[200px]" name="message" placeholder="Type Your Message Here" value={formData.message} onChange={handleChange} required />
                                {/* button */}
                                <Button size="md" className="max-w-40" loading={loading}>Submit</Button> {/* Pass loading state */}
                            </form>
                        ) : (
                            <div className="p-10 bg-[#27272c] rounded-xl text-center">
                                <h3 className="text-4xl text-accent mb-4">Thank You!</h3>
                                <p className="text-white/60">Your message has been sent successfully.</p>
                            </div>
                        )}
                    </div>
                    {/* contact info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-full flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
