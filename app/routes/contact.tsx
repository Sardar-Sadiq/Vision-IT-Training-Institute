import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useLoaderData } from "react-router";

export async function loader() {
   const accessKey = process.env.FORM_ACCESS_KEY || "";
   console.log("Contact Loader: accessKey exists?", !!accessKey);
   return {
      accessKey
   };
}

// --- Custom Icons ---
const LinkedInIcon = ({ className }: { className?: string }) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
);

// --- Component ---
export default function Contact() {
   const data = useLoaderData() as { accessKey: string };
   const accessKey = data?.accessKey || "";
   const [result, setResult] = useState<string>("");
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);

   const onSubmit = async (event: any) => {
      event.preventDefault();
      setIsSubmitting(true);
      setResult("Sending....");

      const formData = new FormData(event.target);
      formData.append("access_key", accessKey);
      formData.append("from_name", "Vision IT Training Institute Inquiry");
      
      const originalSubject = formData.get("subject");
      formData.set("subject", `New Website Inquiry: ${originalSubject}`);

      try {
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
            headers: {
               "Accept": "application/json",
            }
         });

         const data = await response.json();
         if (data.success) {
            setResult("Form Submitted Successfully");
            setIsSuccess(true);
            event.target.reset();
         } else {
            setResult("Error");
            setIsSuccess(false);
         }
      } catch (error) {
         setResult("Error");
         setIsSuccess(false);
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div className="w-full bg-slate-50">
         {/* Hero Section */}
         <section className="container mx-auto px-6 pt-24 pb-16">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="max-w-2xl"
            >
               <h1 className="text-5xl lg:text-[5rem] leading-none font-bold text-slate-900 tracking-tight">
                  Get in <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-400">touch.</span>
               </h1>
               <p className="mt-8 text-lg text-slate-600 leading-relaxed">
                  Whether you're looking to pivot your career or scale your engineering team, our studio is ready to help you architect your future. Reach out to our technical advisors today.
               </p>
            </motion.div>
         </section>

         {/* Main Content */}
         <section className="container mx-auto px-6 pb-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

               {/* Left Col: Form */}
               <div className="lg:col-span-7">
                  <div className="bg-white p-8 md:p-12 rounded-3xl h-auto border border-gray-100 shadow-sm">
                     <h3 className="text-3xl font-bold text-gray-900 mb-10">Send a message</h3>

                     {isSuccess ? (
                        <motion.div
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="p-8 bg-slate-50 border border-gray-100 rounded-2xl text-gray-900"
                        >
                           <h4 className="font-bold text-xl flex items-center gap-3 mb-3 text-[#1a1f3c]">
                              <MessageSquare className="w-5 h-5" /> Thank You!
                           </h4>
                           <p className="text-gray-600 text-sm">{result}</p>
                           <button
                              onClick={() => {
                                 setIsSuccess(false);
                                 setResult("");
                              }}
                              className="mt-6 text-sm font-bold text-[#4a62bd] uppercase tracking-wider hover:underline"
                           >
                              Send another message
                           </button>
                        </motion.div>
                     ) : (
                        <form onSubmit={onSubmit} className="space-y-8">
                           {result && !isSubmitting && !isSuccess && (
                              <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl mb-6 text-sm flex items-center gap-2">
                                 <MessageSquare className="w-4 h-4" /> {result}
                              </div>
                           )}

                           <div className="grid md:grid-cols-2 gap-8">
                              <div className="space-y-3">
                                 <label className="text-[10px] uppercase text-gray-400 font-bold tracking-widest block">Name</label>
                                 <input
                                    name="name"
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white text-gray-900 text-sm p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4a62bd] focus:ring-1 focus:ring-[#4a62bd]/20 transition-all placeholder:text-gray-300"
                                 />
                              </div>
                              <div className="space-y-3">
                                 <label className="text-[10px] uppercase text-gray-400 font-bold tracking-widest block">Email</label>
                                 <input
                                    name="email"
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white text-gray-900 text-sm p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4a62bd] focus:ring-1 focus:ring-[#4a62bd]/20 transition-all placeholder:text-gray-300"
                                 />
                              </div>
                           </div>

                           <div className="space-y-3">
                              <label className="text-[10px] uppercase text-gray-400 font-bold tracking-widest block">Subject</label>
                              <input
                                 name="subject"
                                 required
                                 type="text"
                                 placeholder="How can we help?"
                                 className="w-full bg-white text-gray-900 text-sm p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4a62bd] focus:ring-1 focus:ring-[#4a62bd]/20 transition-all placeholder:text-gray-300"
                              />
                           </div>

                           <div className="space-y-3">
                              <label className="text-[10px] uppercase text-gray-400 font-bold tracking-widest block">Message</label>
                              <textarea
                                 name="message"
                                 required
                                 rows={6}
                                 placeholder="Tell us about your engineering goals..."
                                 className="w-full bg-white text-gray-900 text-sm p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4a62bd] focus:ring-1 focus:ring-[#4a62bd]/20 transition-all placeholder:text-gray-300 resize-none"
                              ></textarea>
                           </div>

                           <button
                              type="submit"
                              disabled={isSubmitting}
                              className={`w-full bg-linear-to-r from-[#1a1f3c] to-[#4a62bd] text-white rounded-xl py-5 px-6 font-bold tracking-widest text-sm uppercase transition-all shadow-md ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-xl hover:shadow-[#4a62bd]/20 active:scale-[0.98]"}`}
                           >
                              {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                           </button>
                        </form>
                     )}
                  </div>
               </div>

               {/* Right Col: Info */}
               <div className="lg:col-span-5 flex flex-col gap-8">
                  <div className="bg-slate-200/50 p-10 rounded-3xl shadow-sm h-auto flex flex-col justify-between">
                     <h3 className="text-xl font-bold text-slate-900 mb-8">Studio Access</h3>
                     <div className="space-y-8">
                        <div className="flex items-center gap-6">
                           <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                              <Mail className="w-5 h-5 text-blue-600" />
                           </div>
                           <div>
                              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Email</p>
                              <p className="font-medium text-sm text-slate-900">sakevamsik@gmail.com</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-6">
                           <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                              <Phone className="w-5 h-5 text-blue-600" />
                           </div>
                           <div>
                              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Phone</p>
                              <p className="font-medium text-sm text-slate-900">+91 9390441858</p>
                           </div>
                        </div>
                     </div>
                     <div className="mt-12 text-sm text-slate-600">
                        <p>Available Monday — Friday</p>
                        <p>07:00 AM - 10:00 AM & 6:00 PM - 9:00 PM IST</p>
                     </div>
                  </div>

                  {/* HQ Image Overlay */}
                  <div className="rounded-3xl overflow-hidden relative shadow-sm h-60 min-h-[250px]">
                     <img
                        src="https://images.unsplash.com/photo-1549241520-425e3dfc01cb?auto=format&fit=crop&w=800&q=80"
                        alt="Anantapur Headquarters"
                        className="w-full h-full object-cover filter grayscale opacity-80"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
                     <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg">
                           <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Our Headquarters</p>
                           <p className="font-bold text-xs text-slate-900">2nd floor, BFC Plaza, Srinagar Colony, Anantapur, Andhra Pradesh, India</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
               {[
                  { icon: LinkedInIcon, label: "LinkedIn", color: "#0077b5" },
                  { icon: TwitterIcon, label: "Twitter", color: "#1da1f2" },
                  { icon: GithubIcon, label: "Github", color: "#333" },
                  { icon: MessageSquare, label: "Discord", color: "#5865F2" }
               ].map((social) => (
                  <a key={social.label} href="#" className="bg-white p-6 rounded-2xl flex items-center justify-center gap-3 hover:shadow-md transition-all group border border-slate-100">
                     <social.icon className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                     <span className="text-xs font-bold uppercase tracking-widest text-slate-600">{social.label}</span>
                  </a>
               ))}
            </div>
         </section>
      </div>
   );
}