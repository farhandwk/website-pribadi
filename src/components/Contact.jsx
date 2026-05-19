import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// ─── Icons ─────────────────────────────────────────────────────────────────────
const MailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);
const GitHubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

const ArrowIcon = () => (
    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

const SendIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

// ─── Contact Link Card ─────────────────────────────────────────────────────────
function ContactCard({ href, icon, label, value, isExternal }) {
    return (
        <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between px-5 py-4 rounded-2xl
                       transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{
                background: 'rgba(34,34,34,0.04)',
                border: '1px solid rgba(34,34,34,0.09)',
                boxShadow: '0 2px 12px rgba(34,34,34,0.05)',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.background = '#222222';
                e.currentTarget.querySelectorAll('[data-text]').forEach(el => el.style.color = '#F8F8F8');
                e.currentTarget.querySelectorAll('[data-sub]').forEach(el => el.style.color = 'rgba(248,248,248,0.6)');
                e.currentTarget.querySelectorAll('[data-icon]').forEach(el => el.style.color = '#F8F8F8');
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(34,34,34,0.04)';
                e.currentTarget.querySelectorAll('[data-text]').forEach(el => el.style.color = '#222222');
                e.currentTarget.querySelectorAll('[data-sub]').forEach(el => el.style.color = '#7B7B7B');
                e.currentTarget.querySelectorAll('[data-icon]').forEach(el => el.style.color = '#222222');
            }}
        >
            <div className="flex items-center gap-4">
                {/* Icon box */}
                <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{ background: 'rgba(34,34,34,0.07)' }}
                    data-icon
                >
                    <span data-icon style={{ color: '#222222' }}>{icon}</span>
                </div>
                <div>
                    <p
                        data-text
                        className="text-xs font-semibold uppercase tracking-widest mb-0.5 transition-colors duration-300"
                        style={{ color: '#222222' }}
                    >
                        {label}
                    </p>
                    <p
                        data-sub
                        className="text-sm font-medium transition-colors duration-300"
                        style={{ color: '#7B7B7B' }}
                    >
                        {value}
                    </p>
                </div>
            </div>
            <span data-icon style={{ color: '#222222' }} className="transition-colors duration-300">
                <ArrowIcon />
            </span>
        </a>
    );
}

// ─── Input Field ───────────────────────────────────────────────────────────────
function Field({ label, id, name, type = 'text', required, rows }) {
    const [focused, setFocused] = useState(false);
    const Tag = rows ? 'textarea' : 'input';

    return (
        <div>
            <label
                htmlFor={id}
                className="block text-[11px] font-semibold uppercase tracking-widest mb-2"
                style={{ color: focused ? '#222222' : '#7B7B7B', transition: 'color 0.2s' }}
            >
                {label}
            </label>
            <Tag
                id={id}
                name={name}
                type={type}
                required={required}
                rows={rows}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="block w-full rounded-xl text-sm py-3 px-4 outline-none transition-all duration-200 resize-none"
                style={{
                    background: 'rgba(34,34,34,0.04)',
                    border: focused ? '1px solid rgba(34,34,34,0.5)' : '1px solid rgba(34,34,34,0.1)',
                    color: '#222222',
                    boxShadow: focused ? '0 0 0 3px rgba(34,34,34,0.06)' : 'none',
                }}
            />
        </div>
    );
}

// ─── Contact Component ─────────────────────────────────────────────────────────
function Contact() {
    const form = useRef();
    const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceID  = 'service_tlhyxkv';
        const templateID = 'template_v805edq';
        const publicKey  = 'aurTRs8eg-nNxaRzH';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then(() => {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(null), 4000);
            })
            .catch(() => {
                setStatus('error');
                setTimeout(() => setStatus(null), 4000);
            });
    };

    return (
        <section className="bg-[var(--tertiary)] text-[var(--primary)] min-h-screen flex items-center py-16 md:py-24 font-[aeonik]">
            <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20">

                {/* ── Header — consistent with all pages ── */}
                <header className="text-center mb-14 md:mb-20">
                    <p
                        className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
                        style={{ color: '#7B7B7B' }}
                    >
                        Let's Connect
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-4 leading-tight">
                        Get in Touch
                    </h1>
                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="h-px w-12" style={{ background: 'rgba(34,34,34,0.18)' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                        <div className="h-px w-12" style={{ background: 'rgba(34,34,34,0.18)' }} />
                    </div>
                    <p className="mt-5 text-base md:text-lg text-[var(--secondary)] max-w-md mx-auto leading-relaxed">
                        Terbuka untuk diskusi, kolaborasi, atau peluang baru. Jangan ragu untuk menghubungi saya.
                    </p>
                </header>

                {/* ── Two-column layout ── */}
                <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">

                    {/* ── LEFT — Contact info ── */}
                    <div className="w-full lg:w-2/5 flex flex-col gap-4">

                        {/* Section label */}
                        <p
                            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-2"
                            style={{ color: '#7B7B7B' }}
                        >
                            Kontak Langsung
                        </p>

                        <ContactCard
                            href="mailto:farhandwiki15@gmail.com"
                            icon={<MailIcon />}
                            label="Email"
                            value="farhandwiki15@gmail.com"
                        />
                        <ContactCard
                            href="https://www.linkedin.com/in/farhanardhani/"
                            icon={<LinkedInIcon />}
                            label="LinkedIn"
                            value="Farhan Ardhani"
                            isExternal
                        />
                        <ContactCard
                            href="https://github.com/farhandwk"
                            icon={<GitHubIcon />}
                            label="GitHub"
                            value="farhandwk"
                            isExternal
                        />

                        {/* Availability note */}
                        <div
                            className="mt-2 flex items-start gap-3 px-5 py-4 rounded-2xl"
                            style={{
                                background: 'rgba(34,34,34,0.03)',
                                border: '1px solid rgba(34,34,34,0.07)',
                            }}
                        >
                            <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: '#222222', minHeight: '2rem' }} />
                            <p className="text-sm leading-relaxed" style={{ color: '#7B7B7B' }}>
                                Biasanya merespons dalam <span className="font-semibold text-[var(--primary)]">24 jam</span>. Saya sangat antusias untuk berdiskusi tentang proyek baru!
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT — Contact form ── */}
                    <div className="w-full lg:w-3/5">
                        <div
                            className="p-7 md:p-9 rounded-2xl"
                            style={{
                                background: 'rgba(34,34,34,0.03)',
                                border: '1px solid rgba(34,34,34,0.09)',
                                boxShadow: '0 4px 32px rgba(34,34,34,0.06)',
                            }}
                        >
                            {/* Form header */}
                            <div className="mb-7">
                                <p
                                    className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-1.5"
                                    style={{ color: '#7B7B7B' }}
                                >
                                    Formulir Pesan
                                </p>
                                <h2 className="text-xl md:text-2xl font-bold text-[var(--primary)]">
                                    Kirim Pesan
                                </h2>
                                <div className="w-8 h-px mt-3" style={{ background: '#222222' }} />
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <Field label="Nama" id="name" name="name" required />
                                    <Field label="Email" id="email" name="email" type="email" required />
                                </div>
                                <Field label="Pesan" id="message" name="message" required rows={5} />

                                {/* Status message */}
                                {status === 'success' && (
                                    <div
                                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium"
                                        style={{ background: 'rgba(34,34,34,0.05)', border: '1px solid rgba(34,34,34,0.12)', color: '#222222' }}
                                    >
                                        <span>✓</span> Pesan berhasil dikirim! Terima kasih.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div
                                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium"
                                        style={{ background: 'rgba(200,50,50,0.06)', border: '1px solid rgba(200,50,50,0.15)', color: '#b91c1c' }}
                                    >
                                        <span>✕</span> Gagal mengirim pesan. Silakan coba lagi.
                                    </div>
                                )}

                                {/* Submit */}
                                <div className="flex justify-end pt-1">
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="group flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold
                                                   transition-all duration-200 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                                        style={{ background: '#222222', color: '#F8F8F8' }}
                                        onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = '#3a3a3a'; }}
                                        onMouseLeave={e => e.currentTarget.style.background = '#222222'}
                                    >
                                        <SendIcon />
                                        {status === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}
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