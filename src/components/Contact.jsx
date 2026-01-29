import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  MessageCircle,
  DollarSign,
  Clock,
  ChevronDown,
  Check,
} from "lucide-react";

/* ---------- UI Helpers ---------- */

const Label = ({ text }) => (
  <label className="block mb-2 text-sm font-medium text-gray-300">
    {text}
  </label>
);

const inputBase =
  "w-full rounded-xl bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300";

/* ---------- Custom Select ---------- */

const CustomSelect = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  icon,
}) => {
  const [query, setQuery] = useState("");

  const filtered =
    query === ""
      ? options
      : options.filter((o) =>
        o.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div>
      <Label text={label} />
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button
            className={`${inputBase} px-4 py-3 pl-11 text-left cursor-pointer`}
          >
            {icon && (
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                {icon}
              </span>
            )}
            <span className={value ? "text-gray-200" : "text-gray-400"}>
              {value || placeholder}
            </span>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </Listbox.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Listbox.Options className="absolute z-50 mt-2 w-full rounded-xl bg-gray-900 border border-gray-700 shadow-xl max-h-60 overflow-auto">
              {/* Search */}
              <div className="sticky top-0 bg-gray-900 p-2 border-b border-gray-700">
                <input
                  placeholder="Search..."
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              {filtered.length === 0 && (
                <div className="px-4 py-3 text-gray-500 text-sm">
                  No results found
                </div>
              )}

              {filtered.map((opt, i) => (
                <Listbox.Option
                  key={i}
                  value={opt}
                  className={({ active }) =>
                    `cursor-pointer px-4 py-3 ${active
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-gray-200"
                    }`
                  }
                >
                  {({ selected }) => (
                    <div className="flex justify-between items-center">
                      <span>{opt}</span>
                      {selected && (
                        <Check className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

/* ---------- Main Component ---------- */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.message.length < 20)
      return alert("Minimum 20 characters required");

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-4">
            Clean communication. Premium results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700">
            {success && (
              <div className="mb-6 flex items-center gap-3 text-green-400 bg-green-400/10 p-4 rounded-xl">
                <CheckCircle size={18} />
                Message sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label text="Your Name" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`${inputBase} px-4 py-3`}
                  required
                />
              </div>

              <div>
                <Label text="Email Address" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`${inputBase} px-4 py-3`}
                  required
                />
              </div>

              <div>
                <Label text="Phone Number" />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1XXXXXXXXX"
                  className={`${inputBase} px-4 py-3`}
                  required
                />
              </div>
              <div>
                <Label text="Whatsapp Number" />
                <input
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+880 1XXXXXXXXX"
                  className={`${inputBase} px-4 py-3`}
                  required
                />
              </div>
              <div>
                <Label text="1 Social Media Link" />
                <input
                  name="social"
                  value={formData.social}
                  onChange={handleChange}
                  placeholder="example(facebook, instagram, linkdine profile link.)"
                  className={`${inputBase} px-4 py-3`}
                  required
                />
              </div>

              <CustomSelect
                label="Service Needed"
                placeholder="Select a service"
                icon={<MessageCircle size={18} />}
                value={formData.service}
                onChange={(v) => setFormData({ ...formData, service: v })}
                options={[
                  "Web Development",
                  "Backend / API",
                  "Full-Stack Project",
                  "UI / UX Design",
                  "Other",
                ]}
              />

              <CustomSelect
                label="Estimated Budget"
                placeholder="Choose budget"
                icon={<DollarSign size={18} />}
                value={formData.budget}
                onChange={(v) => setFormData({ ...formData, budget: v })}
                options={["Under $100", "$100 – $500", "$500+"]}
              />

              <CustomSelect
                label="Project Timeline"
                placeholder="Expected delivery time"
                icon={<Clock size={18} />}
                value={formData.timeline}
                onChange={(v) => setFormData({ ...formData, timeline: v })}
                options={["Urgent (1–3 days)", "1 Week", "1 Month"]}
              />

              <div>
                <Label text="Project Details" />
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project (min 20 chars)"
                  className={`${inputBase} px-4 py-3 resize-none`}
                  required
                />
              </div>

              <button
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition disabled:opacity-60"
              >
                {loading ? "Sending..." : <>
                  <Send size={18} />
                  Send Message
                </>}
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="space-y-6">
                      <div className="mt-12 p-8 bg-gray-800/30 backdrop-blur-xl rounded-3xl border cursor-pointer border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]">
            <h4 className="text-xl md:text-2xl font-semibold text-white mb-4 font-orbitron">Get a Free Call</h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fill the contact from your name, phone, email and others filds. I will mail you nok you in your whatsapp or sochal acounts and call you in your phone number. and we will fixd miting and discous about your project. 
            </p>
          </div>
            {[
              { icon: <Mail />, text: "kgn.mashudur@gmail.com" },
              { icon: <Phone />, text: "+880 1996525342" },
              { icon: <MapPin />, text: "Gazipur, Bangladesh" },
            ].map((i, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-6 bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-cyan-400 transition"
              >
                <div className="text-cyan-400">{i.icon}</div>
                <p className="text-gray-200">{i.text}</p>
              </div>
            ))}
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
