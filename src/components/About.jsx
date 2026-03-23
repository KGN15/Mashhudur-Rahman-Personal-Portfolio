import React from 'react';
import { Download, Code, Palette, Globe, Server, ShieldCheck } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    const cvPath = "/Mashhudur_Rahman_Resume.pdf"; // তোমার file name

    // Live open
    window.open(cvPath, "_blank");

    // Download
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Mashhudur_Rahman_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Clean Code",
      description: "Writing maintainable, readable, and efficient code for scalable applications."
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "Modern Design",
      description: "Creating beautiful, intuitive, and user-friendly interfaces with modern UI/UX principles."
    },
    {
      icon: <Server className="w-8 h-8 text-green-400" />,
      title: "Scalable Server",
      description: "Building industry-standard backend servers optimized for high traffic and performance."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Responsive",
      description: "Ensuring seamless experience across devices with fully responsive designs."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
      title: "Secure & Reliable",
      description: "Implementing best security practices to protect applications and user data."
    }
  ];

  return (
<section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10"></div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
    </div>

    {/* মেইন গ্রিড কন্টেইনার */}
    <div className="grid md:grid-cols-2 gap-12 items-start">
      
      {/* বাম সাইড: এখানে ইমেজ এবং ডিটেইলস একসাথে থাকবে */}
      <div className="flex flex-col space-y-8">
        
        {/* ইমেজের অংশ - এখানে সাইজ ঠিক করে দেওয়া হয়েছে */}
        <div className="w-full max-w-md overflow-hidden rounded-2xl border-2 border-cyan-400/30 shadow-[0_0_20px_rgba(0,245,255,0.2)]">
          <img 
            src="https://mashhudurrahman.vercel.app/about-img.jpg" 
            alt="Mashhudur Rahman Softwear Devloper" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* ডিটেইলস টেক্সট */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-orbitron">
            Hi, I'm{' '}
            <span className="text-cyan-400">Mashhudur Rahman</span>
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed">
            Also known as <span className="text-purple-400 font-medium">MR.</span>,
            I am a software developer with strong expertise in building
            scalable server-side solutions, while also crafting clean and responsive
            frontend experiences.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            My goal is to deliver professional web applications that balance functionality,
            performance, and style. I prioritize writing clean, maintainable code.
          </p>

          <button
            onClick={handleDownloadCV}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:scale-105"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </button>
        </div>
      </div>

      {/* ডান সাইড: ফিচার বা ট্যাগগুলো */}
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,245,255,0.2)] hover:transform hover:translate-x-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
  );
};

export default About;