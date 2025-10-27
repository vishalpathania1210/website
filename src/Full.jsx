import React, { useRef } from "react";
import { CheckCircle, LinkedinIcon, YoutubeIcon } from "lucide-react"; // for the icons
import { Quote } from "lucide-react";
import { BookOpen, Send } from "lucide-react";
import { Mail, MessageCircle, Linkedin, Youtube } from "lucide-react";
import websiteimage from "./assets/websiteimage.png";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { Heart, Target, Handshake, Sparkles } from "lucide-react";

const Full = () => {
  const mentorshipref = useRef(null);
  const plansref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      stage: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      toast.success("Abhinav will contact you in 24Hrs");
      resetForm();
    },
  });

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-[#f1b60f]" />,
      title: "Passion Over Payment",
      desc: "Your dedication matters more than your wallet. Serious aspirants deserve guidance.",
    },
    {
      icon: <Target className="w-8 h-8 text-[#f1b60f]" />,
      title: "Clear Strategy",
      desc: "Proven methods that work with minimal resources. Smart work beats expensive courses.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-[#f1b60f]" />,
      title: "Personal Support",
      desc: "Direct access to personalized mentorship. We'll find a way that works for you.",
    },
  ];
  

  const plans = [
    {
      title: "Strategy Call",
      subtitle: "20-minute clarity session",
      desc: "One focused session to identify your weak areas, create a study roadmap, and remove confusion.",
      price: "₹299",
      buttonText: "Book Now",
      highlight: false,
      bg: "white",
    },
    {
      title: "Weekly Mentorship",
      subtitle: "4 calls + WhatsApp follow-up",
      desc: "Get consistent guidance, accountability, and detailed answer feedback. Build strong habits that last.",
      price: "₹999 / month",
      buttonText: "Enrol Now",
      highlight: true,
      bg: "white",
    },
    {
      title: "Full Guidance Pack",
      subtitle: "1-month mentorship + answer review",
      desc: "Four calls, personalised strategy, answer evaluation, and a mock interview — complete 360° preparation support.",
      price: "₹2499 / month",
      buttonText: "Join Waitlist",
      highlight: false,
      bg: "white",
    },
  ];

  const testimonials = [
    {
      text: `"Abhinav sir's mentorship changed my entire approach. His feedback helped me double my answer-writing score within weeks."`,
      name: "Riya K.",
      title: "PCS Aspirant",
    },
    {
      text: `"Short, focused sessions that deliver real clarity. He truly understands what aspirants go through."`,
      name: "Suresh P.",
      title: "UPSC Aspirant",
    },
  ];

  return (
    <div className="flex flex-col">
          <div className="min-h-[90vh] flex flex-col justify-center bg-gradient-to-b from-white via-[#fdf8ef] to-[#f8f5ef] overflow-hidden">
      <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10  gap-52">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-left"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#0d1b2a] leading-tight tracking-tight">
            Personal Mentorship <br /> for IAS & PCS <br /> Aspirants
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Guided by{" "}
            <span className="font-semibold text-gray-800">Abhinav Dahiya</span> — 
            6× Prelims and 3× Mains qualifier with years of experience mentoring aspirants toward consistent success.
Small batches, practical strategy, and personal guidance to turn preparation into results.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(mentorshipref)}
              className="bg-[#f1b60f] text-black font-semibold px-8 py-3 rounded-md shadow-md 
                         hover:bg-[#e0a90e] transition-all duration-300 hover:shadow-lg"
            >
              Book a Mentorship Call
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(plansref)}
              className="border-2 border-[#0d1b2a] text-[#0d1b2a] font-semibold px-8 py-3 rounded-md 
                         hover:bg-[#0d1b2a] hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              View Plans
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Floating Glow Animation */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full blur-3xl bg-yellow-300 opacity-40 animate-pulse"></div>
            <img
              src={websiteimage}
              alt="Mentor"
              className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full 
                         shadow-xl border-4 border-white hover:shadow-2xl transition-shadow duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
      {/* ===== About Abhinav Section ===== */}
      <div className="relative bg-gradient-to-b from-[#f8f5ef] via-[#f3ede6] to-[#f8f5ef] py-24 px-6 overflow-hidden">

{/* Decorative radial light effect */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#f1b60f]/20 blur-3xl rounded-full opacity-30 pointer-events-none"></div>

<div className="relative max-w-6xl mx-auto text-center">

  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-5xl md:text-6xl font-playfair font-bold text-[#0d1b2a] mb-10"
  >
    About <span className="text-[#f1b60f]">Abhinav</span>
  </motion.h2>

  {/* Subtitle Line */}
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "120px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="h-[3px] bg-[#f1b60f] mx-auto mb-12 rounded-full"
  ></motion.div>

  {/* Paragraphs */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed space-y-6 mb-16"
  >
    <p>Abhinav's journey is one of resilience, discipline, and purpose.</p>
    <p>
      A Mechanical Engineer by training, he pursued the IAS journey with
      determination — clearing the <span className="font-semibold text-[#0d1b2a]">Prelims six times</span> and the{" "}
      <span className="font-semibold text-[#0d1b2a]">Mains three times</span>.
    </p>
    <p>
      Those years forged his strategy-first approach, focused
      answer-writing techniques, and the ability to stay consistent under
      pressure.
    </p>
    <p>
    Through his <span className="font-semibold text-[#0d1b2a]"> mentorship Journey</span>, Abhinav has guided hundreds of
      aspirants on study planning, mindset, and performance improvement.
    </p>
    <p className="text-gray-800 font-semibold italic">
      Today, he mentors students personally, helping them build clarity,
      discipline, and direction — one step at a time.
    </p>
  </motion.div>

  {/* Floating Cards Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-16">
    {[
      "6× IAS Prelims Qualified",
      "3× IAS Mains Qualified",
      "Dedicated UPSC & PCS Mentor",
      "Independent Personal Mentor",
    ].map((text, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ scale: 1.08, y: -5 }}
        className="relative backdrop-blur-lg bg-white/70 px-6 py-6 rounded-xl shadow-md border border-gray-200 w-[260px] 
                   hover:shadow-2xl hover:bg-white/90 transition-all duration-300 ease-in-out"
      >
        <CheckCircle className="text-[#f1b60f] mx-auto mb-3" size={26} />
        <span className="text-gray-800 font-semibold text-sm">{text}</span>
      </motion.div>
    ))}
  </div>

  {/* Button */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex justify-center"
  >
    <motion.button
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 20px rgba(13,27,42,0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollToSection(plansref)}
      className="bg-[#0d1b2a] text-white px-8 py-3 rounded-md font-semibold 
                 shadow-md hover:bg-[#1b263b] transition-all duration-300"
    >
      See Mentorship Plans
    </motion.button>
  </motion.div>
</div>
</div>

{/* dedication section */}
<section className="relative bg-[#f8f9fa] text-gray-800 py-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#fafafa] to-[#f1f1f1] opacity-70" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Icon with fade-up */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 bg-gradient-to-tr from-[#f1b60f] to-[#b8860b] rounded-full shadow-md">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-playfair font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-[#1a1a1a] to-[#d4af37] bg-clip-text text-transparent">
            Your Dedication, My Commitment
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 mb-12"
        >
          Financial constraints should <span className="font-semibold text-gray-800">never</span> stop a dedicated aspirant
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="p-4 bg-gray-100 rounded-full">{item.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <section className="relative bg-[#f8f9fa] text-gray-800 py-16 overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff] via-[#fafafa] to-[#f4f1ea] opacity-80" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Card container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-md rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.05)] border border-gray-100 p-10 md:p-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 mb-4 leading-relaxed"
          >
            If you're serious about your preparation but struggling with resources,{" "}
            <span className="font-semibold text-[#0d1b2a]">reach out personally.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-6 leading-relaxed"
          >
            I believe that <span className="font-semibold text-gray-800">dedication and discipline</span> 
            matter far more than money when it comes to cracking competitive exams.
            All you need is the right guidance, a clear strategy, and unwavering commitment.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg font-semibold text-gray-800 mb-8"
          >
            I'm here to walk that journey with you — regardless of your financial situation.
          </motion.p>

          {/* CTA Button */}
          <motion.button
          onClick={() => scrollToSection(mentorshipref)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#0d1b2a] text-white font-semibold px-6 py-3 rounded-md mx-auto shadow-md hover:shadow-lg transition-all"
          >
            <Handshake className="w-5 h-5" />
            Let’s Discuss Your Journey
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-gray-500 mt-4 italic"
          >
            No obligation. Just an honest conversation about your goals.
          </motion.p>
        </motion.div>
      </div>
    </section>
    </section>

      {/* ===== MENTORSHIP PLANS SECTION ===== */}
      <div
      ref={plansref}
      className="bg-gradient-to-b from-[#faf9f7] via-[#f9f9f9] to-[#f4f2ef] py-20 px-6 md:px-16 text-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-playfair font-bold text-[#0d1b2a] mb-4"
        >
          Mentorship Plans
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg mb-14"
        >
          Affordable, focused programs designed for serious aspirants — limited seats for personal attention.
        </motion.p>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative rounded-xl shadow-md border p-8 text-left flex flex-col justify-between 
                          transition-all duration-300 ease-in-out hover:shadow-2xl ${
                            plan.highlight
                              ? "border-yellow-400"
                              : "border-gray-200"
                          } bg-white`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-sm font-semibold text-black px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-2xl font-playfair font-semibold text-[#0d1b2a] mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600 font-medium mb-2">{plan.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{plan.desc}</p>
                <p className="text-2xl font-bold text-[#0d1b2a] mb-6">{plan.price}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(mentorshipref)}
                className={`font-semibold px-6 py-3 rounded-md transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#f1b60f] text-black hover:bg-[#e0a90e]"
                    : "border-2 border-[#0d1b2a] text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-white"
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-500 text-sm mt-12 italic"
        >
          Introductory prices. Seats are limited to ensure personal feedback and attention.
        </motion.p>
      </div>
    </div>

      {/* what stundents say section  */}
      <div className="bg-gradient-to-b from-[#f7f0ea] via-[#faf6f2] to-[#f7f0ea] py-20 px-6 md:px-20 overflow-hidden">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-playfair font-bold text-center text-[#0f172a] mb-14"
      >
        What Students Say
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            className="relative bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-10 
                       transition-all duration-300 hover:shadow-2xl"
          >
            {/* Floating quote icon */}
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Quote className="text-yellow-500 w-10 h-10 mb-5" />
            </motion.div>

            <p className="italic text-gray-700 leading-relaxed mb-6 text-lg">
              {t.text}
            </p>

            <div>
              <p className="font-semibold text-gray-900 text-lg">{t.name}</p>
              <p className="text-gray-600 text-sm">{t.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
      {/* =========================
     Free 7-Day Study Reset Section
========================= */}
  
<section className="bg-[#0d1b2a] text-white py-20 text-center overflow-hidden">
  <div className="max-w-4xl mx-auto px-6">
    {/* Animated Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold font-serif mb-6"
    >
      Free <span className="text-[#f1b60f]">7-Day Study Reset</span>
    </motion.h2>

    {/* Animated Paragraph */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-lg text-gray-300 mb-10 leading-relaxed"
    >
      Start your journey with a free study planner and daily strategy
      checklist designed by Abhinav. <br />
      Join the Telegram group for weekly mentorship insights and UPSC
      strategy updates.
    </motion.p>

    {/* Animated Buttons */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row justify-center gap-4"
    >
      {/* Get the Planner Button */}
      <motion.button
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 0px 20px rgba(241, 182, 15, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-2 bg-[#f1b60f] text-black font-semibold px-6 py-3 rounded-md transition-all duration-300"
      >
        <BookOpen className="w-5 h-5" />
        Get the Planner
      </motion.button>

      {/* Join Telegram Button */}
      <motion.button
        whileHover={{
          scale: 1.08,
          backgroundColor: "#ffffff",
          color: "#0d1b2a",
          boxShadow: "0px 0px 20px rgba(255,255,255,0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
      >
        <Send className="w-5 h-5" />
        Join Telegram
      </motion.button>
    </motion.div>
  </div>
</section>
<section ref={mentorshipref} className="bg-[#f8f5ef] pt-20 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif font-bold text-center text-[#0d1b2a]"
    >
      Book a Mentorship Slot
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center text-gray-600 mt-4 mb-12 max-w-2xl mx-auto"
    >
      Fill in your details and Abhinav will get in touch to confirm your
      session. You'll receive a 20-minute clarity call link within 24 hours.
    </motion.p>

    <div className="grid md:grid-cols-3 gap-8 items-start">
      {/* =================== FORM =================== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}
        className="md:col-span-2 bg-white rounded-xl shadow-sm p-8"
      >
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Input Fields */}
          {[
            { label: "Full Name", type: "text", name: "fullName", placeholder: "Your full name" },
            { label: "Email", type: "email", name: "email", placeholder: "your.email@example.com" },
            { label: "Phone", type: "tel", name: "phone", placeholder: "+91 XXXXX XXXXX" },
          ].map((field, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <label className="block font-semibold text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                required
                placeholder={field.placeholder}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f1b60f]"
              />
            </motion.div>
          ))}

          {/* Stage */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <label className="block font-semibold text-gray-700 mb-1">
              Current Stage
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f1b60f]">
              <option>Select your preparation stage</option>
              <option>Starting out</option>
              <option>Prelims</option>
              <option>Mains</option>
              <option>Interview</option>
            </select>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <label className="block font-semibold text-gray-700 mb-1">
              Message (optional)
            </label>
            <textarea
              rows="4"
              name="message"
              placeholder="Tell us about your preparation journey..."
              value={formik.values.message}
              onChange={formik.handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f1b60f]"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#e0a90e" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full bg-[#f1b60f] text-black font-semibold py-3 rounded-md transition"
          >
            Request a Call
          </motion.button>
        </form>
      </motion.div>

      {/* =================== RIGHT SIDEBAR =================== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* How Mentorship Works */}
        <motion.div
          whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.3 }}
          className="bg-[#f2ebe2] p-6 rounded-xl"
        >
          <h3 className="font-serif font-semibold text-xl mb-4 text-[#0d1b2a]">
            How Mentorship Works
          </h3>
          <ul className="space-y-3 text-gray-700">
            {[
              "Book a 20-minute clarity call (₹299)",
              "Abhinav reviews your routine & creates a 7-day plan",
              "Weekly review sessions with actionable feedback",
              "Mock interviews for advanced students",
            ].map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="bg-[#f1b60f] text-black font-bold px-2 rounded-full">
                  {i + 1}
                </span>
                {step}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
          className="bg-[#0d1b2a] text-white p-6 rounded-xl"
        >
          <h3 className="font-serif font-semibold text-xl mb-4">
            Quick Contact
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#f1b60f]" />
              abhinav@example.com
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#f1b60f]" />
              @AbhinavMentor
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </div>

  {/* Footer */}
  <motion.footer
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="bg-[#0d1b2a] text-white py-12 mt-20"
  >
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Left */}
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <p className="text-lg">
          © 2025 <span className="font-semibold">Mentored by Abhinav.</span>{" "}
          All rights reserved.
        </p>
        <p className="text-lg text-gray-400">Made with care for aspirants.</p>
      </motion.div>

      {/* Middle */}
      <div className="flex items-center gap-3 text-base text-gray-300">
        <a href="#" className="hover:text-[#f1b60f] transition-colors duration-300">
          Privacy Policy
        </a>
        <span className="text-gray-500">|</span>
        <a href="#" className="hover:text-[#f1b60f] transition-colors duration-300">
          Terms & Conditions
        </a>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {[LinkedinIcon, Send, YoutubeIcon].map((Icon, i) => (
          <motion.a
            key={i}
            href="#"
            whileHover={{ scale: 1.2, color: "#f1b60f" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </div>
  </motion.footer>
</section>
</div>
  );
};

export default Full;
