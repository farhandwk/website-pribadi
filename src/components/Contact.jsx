import React, { useRef } from 'react'; 
import emailjs from '@emailjs/browser';

// --- Komponen Ikon (tidak diubah) ---
const MailIcon = () => (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);
const LinkedInIcon = () => (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);
const GitHubIcon = () => (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
);


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const serviceID = 'service_tlhyxkv';
        const templateID = 'template_v805edq';
        const publicKey = 'aurTRs8eg-nNxaRzH';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        <section className="bg-[var(--tertiary)] text-white min-h-screen flex items-center py-16 md:py-24 font-[aeonik]">
            <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-24">
                
                <header className="text-center mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-[var(--primary)]">Get in Touch</h1>
                    <p className="text-lg md:text-xl text-[var(--secondary)] max-w-3xl mx-auto">
                        Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru. Jangan ragu untuk menghubungi saya.
                    </p>
                </header>

                {/* --- Kontainer Utama (2 kolom di 'lg') --- */}
                <div className='flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16'>

                    {/* --- KOLOM KIRI (Info Kontak) --- */}
                    <div className='w-full lg:w-2/5'>
                        {/* Di desktop (lg), kartu kontak akan kembali menjadi 1 kolom vertikal */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6">
                            {/* Email */}
                            <a href="mailto:farhandwiki15@gmail.com" className="bg-[var(--secondary)] p-6 rounded-lg flex items-center gap-4 hover:bg-[var(--primary)]/50 transition-colors group">
                                <MailIcon />
                                <div className='text-left'>
                                    <h3 className="text-xl font-semibold">Email</h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors">farhandwiki15@gmail.com</p>
                                </div>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/farhanardhani/" target="_blank" rel="noopener noreferrer" className="bg-[var(--secondary)] p-6 rounded-lg flex items-center gap-4 hover:bg-[var(--primary)]/50 transition-colors group">
                                <LinkedInIcon />
                                <div className='text-left'>
                                    <h3 className="text-xl font-semibold">LinkedIn</h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors">Farhan Ardhani</p>
                                </div>
                            </a>
                            {/* GitHub */}
                            <a href="https://github.com/farhandwk" target="_blank" rel="noopener noreferrer" className="bg-[var(--secondary)] p-6 rounded-lg flex items-center gap-4 hover:bg-[var(--primary)]/50 transition-colors group">
                                <GitHubIcon />
                                <div className='text-left'>
                                    <h3 className="text-xl font-semibold">GitHub</h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors">farhandwk</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    {/* --- KOLOM KANAN (Form Kontak) --- */}
                    <div className='w-full lg:w-3/5'>
                        <div className="bg-[var(--secondary)] p-8 rounded-lg w-full">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">Or send me a message</h2>
                            <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                                    <input type="text" id="name" name="name" required className="block w-full bg-[var(--tertiary)] border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Your Email</label>
                                    <input type="email" id="email" name="email" required className="block w-full bg-[var(--tertiary)] border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"/>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                    <textarea id="message" name="message" rows="4" required className="block w-full bg-[var(--tertiary)] border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"></textarea>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[var(--primary)] hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-sky-500 transition-colors">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;