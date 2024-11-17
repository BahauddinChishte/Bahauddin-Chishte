interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  image: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface VolunteerExperience {
  title: string;
  organization: string;
  period: string;
  description: string;
  image: string;
}

interface Interest {
  title: string;
  description: string;
  icon: string;
}

interface Achievement {
  title: string;
  category: string;
  date: string;
  organization: string;
  description: string;
  image: string;
}

export const personalInfo: PersonalInfo = {
  name: "Baha",
  role: "Software Engineer",
  bio: "I'm a software engineer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.",
  image: "https://avatars.githubusercontent.com/u/91181868?v=4",
  contact: {
    email: "hello@example.com",
    phone: "+1 (555) 123-4567",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: "Led development of cloud-native applications and microservices architecture."
  },
  {
    title: "Software Developer",
    company: "Digital Innovations",
    period: "2019 - 2021",
    description: "Developed and maintained full-stack web applications."
  },
  {
    title: "Junior Developer",
    company: "StartUp Hub",
    period: "2018 - 2019",
    description: "Built responsive web interfaces and implemented RESTful APIs."
  }
];

export const volunteerExperiences: VolunteerExperience[] = [
  {
    title: "Code Mentor",
    organization: "Tech4Youth",
    period: "2022 - Present",
    description: "Mentoring underprivileged youth in web development fundamentals and modern programming practices.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Open Source Contributor",
    organization: "Various Projects",
    period: "2020 - Present",
    description: "Contributing to open-source projects focused on education and accessibility tools.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Community Workshop Leader",
    organization: "Local Tech Community",
    period: "2021 - Present",
    description: "Organizing and leading workshops on web development and software engineering practices.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "STEM Education Volunteer",
    organization: "Code.org",
    period: "2022 - Present",
    description: "Teaching coding fundamentals to middle school students through interactive workshops.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
  }
];

export const interests: Interest[] = [
  {
    title: "Photography",
    description: "Capturing moments and exploring visual storytelling through street and landscape photography.",
    icon: "Camera"
  },
  {
    title: "Open Source",
    description: "Contributing to and maintaining open source projects that make a difference.",
    icon: "Code2"
  },
  {
    title: "AI & Machine Learning",
    description: "Exploring the frontiers of artificial intelligence and its applications.",
    icon: "Brain"
  },
  {
    title: "Travel",
    description: "Experiencing different cultures and gaining new perspectives through world exploration.",
    icon: "Globe"
  }
];

export const achievements: Achievement[] = [
  {
    title: "AWS Certified Solutions Architect",
    category: "certificates",
    date: "2023",
    organization: "Amazon Web Services",
    description: "Achieved professional certification demonstrating expertise in designing distributed systems and deploying applications on AWS infrastructure. This certification validates advanced knowledge of AWS services and best practices for building secure and reliable applications.",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Innovation Award",
    category: "awards",
    date: "2023",
    organization: "Tech Conference 2023",
    description: "Recognized for developing an innovative AI-powered solution that revolutionized customer service automation, resulting in 40% improvement in response times and 95% customer satisfaction rate.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Hackathon Winner",
    category: "achievements",
    date: "2022",
    organization: "Global Tech Hackathon",
    description: "Led a team of four to victory by creating a sustainable technology solution for reducing urban waste management costs. The project was later implemented by two major cities.",
    image: "https://images.unsplash.com/photo-1496469888073-80de7e952517?auto=format&fit=crop&w=800&q=80"
  }
];