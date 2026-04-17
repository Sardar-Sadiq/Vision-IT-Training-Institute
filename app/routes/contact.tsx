import { Button } from "../components/ui";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Form, useActionData, useNavigation } from "react-router";

export async function action({ request }: { request: Request }) {
   const formData = await request.formData();
   const data = Object.fromEntries(formData);

   try {
      const response = await fetch("https://formsubmit.co/ajax/sadiqali66657@gmail.com", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
         },
         body: JSON.stringify(data),
      });
      if (!response.ok) {
         console.error("Failed to send email");
      }
   } catch (e) {
      console.error(e);
   }

   return {
      success: true,
      message: "Thank you! Your message has been routed to our technical advisors. We will reply to " + data.email + " shortly."
   };
}

export default function Contact() {
   const actionData = useActionData<{ success: boolean; message: string }>();
   const navigation = useNavigation();
   const isSubmitting = navigation.state === "submitting";

   return (
      <div className="w-full bg-surface">
         {/* Hero Section */}
         <section className="container mx-auto px-6 pt-24 pb-16">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="max-w-2xl"
            >
               <h1 className="text-5xl lg:text-[5rem] leading-none font-display font-bold text-primary tracking-tight">
                  Get in <span className="text-transparent bg-clip-text bg-linear-to-r from-on-primary-container to-blue-400">touch.</span>
               </h1>
               <p className="mt-8 text-lg font-sans text-on-surface/80 leading-relaxed">
                  Whether you're looking to pivot your career or scale your engineering team, our studio is ready to help you architect your future. Reach out to our technical advisors today.
               </p>
            </motion.div>
         </section>

         {/* Main Content */}
         <section className="container mx-auto px-6 pb-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

               {/* Left Col: Form */}
               <div className="lg:col-span-7">
                  <div className="bg-surface-container-low p-8 md:p-12 rounded-3xl h-full shadow-sm">
                     <h3 className="text-2xl font-display font-bold text-primary mb-8">Send a message</h3>

                     {actionData?.success ? (
                        <motion.div
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="p-6 bg-[#e8dafa] border border-[#d2bbf4] rounded-xl text-[#4d2d7c] font-sans text-sm"
                        >
                           <h4 className="font-bold flex items-center gap-2 mb-2">
                              <MessageSquare className="w-4 h-4" /> Message Sent Successfully
                           </h4>
                           <p>{actionData.message}</p>
                        </motion.div>
                     ) : (
                        <Form method="post" className="space-y-6">
                           <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                 <label className="text-xs font-label uppercase text-outline-variant font-semibold block">Name</label>
                                 <input
                                    name="name"
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-surface-container-lowest text-on-surface text-sm p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-on-primary-container/50 border border-transparent transition-all"
                                 />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-xs font-label uppercase text-outline-variant font-semibold block">Email</label>
                                 <input
                                    name="email"
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-surface-container-lowest text-on-surface text-sm p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-on-primary-container/50 border border-transparent transition-all"
                                 />
                              </div>
                           </div>

                           <div className="space-y-2">
                              <label className="text-xs font-label uppercase text-outline-variant font-semibold block">Subject</label>
                              <input
                                 name="subject"
                                 required
                                 type="text"
                                 placeholder="How can we help?"
                                 className="w-full bg-surface-container-lowest text-on-surface text-sm p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-on-primary-container/50 border border-transparent transition-all"
                              />
                           </div>

                           <div className="space-y-2">
                              <label className="text-xs font-label uppercase text-outline-variant font-semibold block">Message</label>
                              <textarea
                                 name="message"
                                 required
                                 rows={5}
                                 placeholder="Tell us about your engineering goals..."
                                 className="w-full bg-surface-container-lowest text-on-surface text-sm p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-on-primary-container/50 border border-transparent transition-all resize-none"
                              ></textarea>
                           </div>

                           <Button type="submit" disabled={isSubmitting} className={isSubmitting ? "opacity-70" : ""}>
                              {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                           </Button>
                        </Form>
                     )}
                  </div>
               </div>

               {/* Right Col: Info */}
               <div className="lg:col-span-5 flex flex-col gap-8">

                  {/* Studio Access Card */}
                  <div className="bg-[#e2e8f0]/40 p-10 rounded-3xl shadow-sm h-1/2 flex flex-col justify-between">
                     <h3 className="text-xl font-sans font-bold text-primary mb-8">Studio Access</h3>

                     <div className="space-y-8">
                        <div className="flex items-center gap-6">
                           <div className="w-12 h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                              <Mail className="w-5 h-5 text-primary" />
                           </div>
                           <div>
                              <p className="text-[10px] uppercase font-label tracking-widest text-on-surface/50 mb-1">Email</p>
                              <p className="font-sans font-medium text-sm text-primary">studio@ethostack.com</p>
                           </div>
                        </div>

                        <div className="flex items-center gap-6">
                           <div className="w-12 h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                              <Phone className="w-5 h-5 text-primary" />
                           </div>
                           <div>
                              <p className="text-[10px] uppercase font-label tracking-widest text-on-surface/50 mb-1">Phone</p>
                              <p className="font-sans font-medium text-sm text-primary">+1 (555) ETHOSTACK</p>
                           </div>
                        </div>
                     </div>

                     <div className="mt-12 text-sm font-sans text-on-surface/60">
                        <p>Available Monday — Friday</p>
                        <p>09:00 — 18:00 EST</p>
                     </div>
                  </div>

                  {/* HQ Image Overlay */}
                  <div className="rounded-3xl overflow-hidden relative shadow-sm h-1/2 min-h-[250px]">
                     <img
                        src="https://images.unsplash.com/photo-1549241520-425e3dfc01cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Abstract Architecture"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter grayscale opacity-80"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent mix-blend-multiply"></div>
                     <div className="absolute bottom-8 left-8 right-8">
                        <div className="bg-surface-container-lowest/90 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/20">
                           <p className="text-[10px] uppercase font-label tracking-widest text-on-surface/50 mb-1">Our Headquarters</p>
                           <p className="font-sans font-bold text-sm text-primary">101 Innovation Blvd, Silicon Valley</p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
               <a href="#" className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-surface-container-highest transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 text-on-surface/40 group-hover:text-[#0077b5] transition-colors"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  <span className="text-xs font-label uppercase tracking-widest font-semibold">LinkedIn</span>
               </a>
               <a href="#" className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-surface-container-highest transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 text-on-surface/40 group-hover:text-[#1da1f2] transition-colors"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  <span className="text-xs font-label uppercase tracking-widest font-semibold">Twitter</span>
               </a>
               <a href="#" className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-surface-container-highest transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 text-on-surface/40 group-hover:text-primary transition-colors"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  <span className="text-xs font-label uppercase tracking-widest font-semibold">Github</span>
               </a>
               <a href="#" className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-surface-container-highest transition-colors group">
                  <MessageSquare className="w-5 h-5 text-on-surface/40 group-hover:text-[#5865F2] transition-colors" />
                  <span className="text-xs font-label uppercase tracking-widest font-semibold">Discord</span>
               </a>
            </div>
         </section>
      </div>
   );
}
