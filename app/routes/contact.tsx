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
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
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
                              <p className="font-medium text-sm text-slate-900">visionitsupport@gmail.com</p>
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
                        <div className="bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg group relative">
                           {/* Hover Tooltip */}
                           <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.9 }}
                              whileHover={{ opacity: 1, y: -45, scale: 1 }}
                              className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-20"
                           >
                              <div className="bg-slate-900 text-white text-[10px] uppercase tracking-widest font-bold py-2 px-4 rounded-full shadow-xl whitespace-nowrap">
                                 click me for location
                                 <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                              </div>
                           </motion.div>

                           <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Our Headquarters</p>
                           <a
                              href="https://www.google.com/maps/search/?api=1&query=14.6633722,77.5733936"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold text-xs text-slate-900 block hover:text-blue-600 transition-colors"
                           >
                              2nd floor, BFC Plaza, Srinagar Colony, Anantapur, Andhra Pradesh, India
                           </a>
                        </div>
                     </div>
                  </div>

                  {/* New Social Row (Below Address Card) */}
                  <div className="grid grid-cols-2 gap-4">
                     <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-3 transition-all hover:shadow-md group/social"
                     >
                        <LinkedInIcon className="w-5 h-5 text-slate-300 group-hover/social:text-[#0077b5] transition-colors" />
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover/social:text-slate-600 transition-colors">LinkedIn</span>
                     </a>
                     <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-3 transition-all hover:shadow-md group/social"
                     >
                        <InstagramIcon className="w-5 h-5 text-slate-300 group-hover/social:text-[#E4405F] transition-colors" />
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover/social:text-slate-600 transition-colors">Instagram</span>
                     </a>
                  </div>
               </div>
            </div>

         </section>
      </div>
   );
}