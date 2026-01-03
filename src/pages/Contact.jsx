import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formRef.current.name.value,
          email: formRef.current.email.value,
          subject: formRef.current.subject.value,
          message: formRef.current.message.value,
          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-slate-900 animate-fade-slide-up">
          Contact Us
        </h1>
        <p className="text-center text-slate-600 mt-2 animate-fade-slide-up">
          We’d love to hear from you
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-xl border border-slate-200 bg-white p-6 space-y-5"
          >
            <Input label="Name" name="name" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="Subject" name="subject" required />

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <button
              disabled={loading}
              className="w-full rounded-full bg-emerald-800 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-center text-sm text-emerald-700">
                Message sent successfully!
              </p>
            )}
          </form>

          <div className="rounded-xl bg-emerald-800 text-white p-8 space-y-6">
            <Info icon={LocationIcon}>
              riidl Headquarters 520
              <br />
              Bhaskaracharya Building
              <br />
              Somaiya Vidyavihar University, Mumbai – 400077
            </Info>

            <Info icon={PhoneIcon}>+91 97573 0747</Info>
            <Info icon={MailIcon}>riidl@somaiya.edu</Info>
            <Info icon={GlobeIcon}>www.riidl.org</Info>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        {...props}
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
      />
    </div>
  );
}

function Info({ icon: Icon, children }) {
  return (
    <div className="flex gap-3 items-start">
      <Icon />
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}

const LocationIcon = () => (
  <svg
    className="h-6 w-6 text-indigo-200"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="h-6 w-6 text-indigo-200"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    className="h-6 w-6 text-indigo-200"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="h-6 w-6 text-indigo-200"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);
