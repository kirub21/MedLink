import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Mikiyas Getu",
      role: "Co-Founder & CTO",
      bio: "BSc in IT; Expert in building scalable and impactful software products.",
      image: "/mikiyas.jpg"
    },
    {
      name: "Kirubel Gulilat",
      role: "Co-Founder & Product Lead",
      bio: "BSc in IT; Experienced in aligning IT systems with real-world healthcare needs.",
      image: "/kirubel.jpg"
    },
    {
      name: "Kalkidan Getachew",
      role: "Data Analyst & Healthcare Specialist",
      bio: "MSc in Clinical Studies; Data analyst focused on scaling healthcare startups.",
      image: "/kalkidan.jpg"
    },
    {
      name: "Yednekachew Banteyerga",
      role: "Backend Developer",
      bio: "BSc in Software Engineering; Full Stack Developer with backend specialization.",
      image: "/yednekachew.jpg"
    },
    {
      name: "Hermela Bekele",
      role: "Frontend Developer",
      bio: "BSc in Software Engineering; Frontend Developer focused on UI/UX and accessibility.",
      image: "/hermela.jpg"
    },
    {
      name: "Abraham Asrat",
      role: "Marketing & Communications Lead",
      bio: "BSc in IT; Skilled in marketing and communication strategies for healthtech.",
      image: "/abraham.jpg"
    }
  
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate professionals driving healthcare innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-blue-100"
            >
              <div className="text-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;