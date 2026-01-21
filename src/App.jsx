import { useMemo } from "react";

function ButtonLink({ href, children, variant = "solid" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99]";
  const solid =
    "bg-zinc-900 text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400";
  const ghost =
    "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-200";

  return (
    <a
      href={href}
      className={`${base} ${variant === "solid" ? solid : ghost}`}
      target={href.startsWith("#") ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700">
      {children}
    </span>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 max-w-3xl text-zinc-600">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const profile = useMemo(
    () => ({
      name: "Anagha Ghate",
      location: "Binghamton, NY",
      email: "aghate@binghamton.edu",
      github: "https://github.com/Anaghate",
      handshake: "https://binghamton.joinhandshake.com/profiles/anaghate", // TODO: replace with your real Handshake
      // linkedin: "https://www.linkedin.com/", // TODO: replace with your real LinkedIn
      headline: "Software Developer | Cloud-Native Backend Engineer",
      summary:
        "Software Developer with experience building scalable backend systems, cloud deployments, and real-time IoT integrations across Azure, GCP, and AWS. Focused on reliability, observability, and measurable product impact.",
    }),
    []
  );

  const featuredProjects = useMemo(
  () => [
    {
      name: "Hotel Reviews Analysis",
      oneLiner:
        "Flask + MongoDB analytics platform for unstructured hotel reviews with trend and loyalty insights.",
      stack: ["Flask", "MongoDB", "JavaScript", "REST APIs"],
      bullets: [
        "Built analytics workflows using MongoDB aggregation pipelines for rating trends and loyalty detection.",
        "Developed backend endpoints to serve review insights and customer segmentation.",
        "Created an interactive UI to explore trends from unstructured review text.",
      ],
      links: { github: "", live: "" },
    },
    {
      name: "Image Caption Generator",
      oneLiner:
        "End-to-end deep learning pipeline that generates descriptive captions for input images using CNN + LSTM.",
      stack: [
        "Python",
        "TensorFlow/Keras",
        "VGG16",
        "LSTM",
        "Google Colab",
        "GitHub",
      ],
      bullets: [
        "Used VGG16 for CNN feature extraction to convert images into feature vectors.",
        "Trained an LSTM sequence model to generate grammatically coherent captions.",
        "Built a custom dataset pipeline: cleaned captions, created vocabulary, aligned image-caption pairs.",
        "Optimized training with sequence padding, batching, and generator-based input pipelines.",
      ],
      links: { github: "", live: "" },
    },
    {
      name: "Bike Navigator (IoT)",
      oneLiner:
        "ESP32-based bike navigation using BLE/Wi-Fi and an OLED display for real-time distance & direction.",
      stack: ["ESP32", "BLE", "Wi-Fi", "OLED", "IoT"],
      bullets: [
        "Integrated Bluetooth Low Energy + Wi-Fi to receive navigation data.",
        "Rendered real-time distance and direction on an OLED dashboard mounted on a bike.",
        "Designed for low-latency updates suitable for outdoor usage.",
      ],
      links: { github: "", live: "" },
    },
    {
      name: "Floor Cleaning Robot",
      oneLiner:
        "Arduino (ATmega328) embedded automation project to simplify and automate floor cleaning.",
      stack: ["Arduino (ATmega328)", "Embedded C"],
      bullets: [
        "Implemented embedded control logic to automate floor cleaning tasks.",
        "Designed system behavior to reduce manual effort through automation.",
      ],
      links: { github: "", live: "" },
    },
    {
      name: "Automatic Traffic Signal Control",
      oneLiner:
        "Density-based adaptive traffic signal control system using Arduino (ATmega328).",
      stack: ["Arduino (ATmega328)", "Embedded C"],
      bullets: [
        "Implemented adaptive switching logic dependent on traffic density.",
        "Built embedded workflow for real-time signal control behavior.",
      ],
      links: { github: "", live: "" },
    },
    {
      name: "Currency Recognition & Conversion",
      oneLiner:
        "Python GUI app to identify currency and convert it to another country’s currency.",
      stack: ["Python"],
      bullets: [
        "Designed a GUI-based workflow for currency recognition and conversion.",
        "Built an end-to-end user flow from identification to converted output.",
      ],
      links: { github: "", live: "" },
    },
    {
      name: "Educational Tool for Continuous-Time LTI Systems",
      oneLiner:
        "Standalone executable application to analyze continuous-time LTI systems using Laplace transforms.",
      stack: ["MATLAB"],
      bullets: [
        "Developed a standalone tool for analyzing CT-LTI systems using Laplace transform methods.",
        "Designed an educational workflow to help users interpret system behavior.",
      ],
      links: { github: "", live: "" },
    },
  ],
  []
);


  const experience = useMemo(
    () => [
      {
        company: "Meltek Inc., USA",
        title: "Software Developer",
        dates: "Sep 2025 – Present",
        bullets: [
          "Worked with a containerized architecture on Azure Container Apps, supporting 10+ backend and worker services.",
          "Developed a role-based admin dashboard to monitor 6K+ users, transaction flows, revenue metrics, and connected IoT devices.",
          "Integrated phone + email verification using Twilio and SendGrid, reducing fraudulent or invalid signups by ~30%.",
          "Built Grafana dashboards for real-time monitoring of container health, performance metrics, and resource utilization.",
          "Integrated Enode webhooks to ingest and process real-time IoT device events, handling thousands of device updates/day in an event-driven pipeline.",
          "Improved observability using logs, metrics, and alerts; supported frequent releases with minimal downtime.",
        ],
      },
      {
        company: "Global Health Impact, Binghamton, USA",
        title: "Backend Developer",
        dates: "Oct 2024 – May 2025",
        bullets: [
          "Designed and implemented backend APIs with Python/Flask, enabling scalable forecasting services.",
          "Applied role-based access control for secure data access and compliance.",
          "Used telemetry and metrics to optimize performance and reduce latency.",
          "Partnered with product managers and engineers to deliver reliable SaaS-style features.",
        ],
      },
      {
        company: "Accenture, India",
        title: "Software Development Engineer",
        dates: "Dec 2020 – Jul 2023",
        bullets: [
          "Built backend services in Python/Flask and integrated Google Cloud AI APIs for multilingual speech-to-text, translation, and text-to-speech.",
          "Designed scalable Cloud SQL schema and data models to support cross-region workflows.",
          "Reduced manual localization effort by 60% using AI-driven voice synthesis and dubbing automation.",
          "Implemented CI/CD with Docker, Kubernetes, Cloud Build, and Cloud Run to accelerate delivery.",
          "Improved platform stability by 40% using Cloud Logging + monitoring pipelines.",
        ],
      },
      {
        company: "Rabbit & Tortoise Technology Solutions, Pune, India",
        title: "C++ Developer Intern",
        dates: "Jan 2020 – Jul 2020",
        bullets: [
          "Developed OCR preprocessing algorithms in C++ and Python, improving prediction accuracy by 12%.",
          "Modularized components using OOP patterns to improve maintainability.",
        ],
      },
      {
        company: "IEEE Student Branch, VIT",
        title: "Executive Committee Member",
        dates: "Aug 2018 – Sep 2019",
        bullets: [
          "Led a three-day intercollegiate technical event (VISHWOTSAV) at VIT Pune in collaboration with the Electronics & Telecommunication Engineering department and IEEE Pune Section.",
          "Organized and delivered technical workshops for first-year undergraduate students, inviting industry experts to bridge academic learning with real-world exposure.",
        ],
      },
    ],
    []
  );

  const skills = useMemo(
    () => ({
      Languages: ["Python", "Java", "C++", "SQL", "JavaScript", "MATLAB", "Shell"],
      "Frameworks/Libraries": ["Flask", "FastAPI", "Django", "Pandas", "NumPy", "PyTest"],
      Cloud: ["Azure", "GCP (Cloud SQL, Cloud Run, Cloud Build)", "AWS (API Gateway, Lambda, ECS)"],
      DevOps: ["Docker", "Kubernetes", "Jenkins", "Git", "CI/CD"],
      Databases: ["PostgreSQL", "MongoDB", "Redis", "Cloud SQL", "AWS RDS"],
      Testing: [
        "Unit Testing",
        "Integration Testing",
        "Functional Testing",
        "PyTest",
      ],
      "Monitoring & Security": [
        "Cloud Logging",
        "HIPAA Compliance",
        "Healthcare IT Security",
      ],
      // Certifications: [
      //   "AWS Certified Cloud Engineer",
      //   "Google Cloud Certified Associate Cloud Engineer",
      //   "PCEP (Python Institute)",
      // ],
    }),
    []
  );

  const education = useMemo(
    () => [
      {
        school: "SUNY Binghamton, NY, USA",
        degree: "Master of Science in Computer Science",
        dates: "Aug 2023 – May 2025",
        coursework:
          "Data Structures & Algorithms, Design Patterns, Data Mining, Artificial Intelligence, Databases, Distributed Systems, Programming Languages",
      },
      {
        school: "Vishwakarma Institute of Technology, Pune, India",
        degree: "Bachelor of Technology in Electronics & Telecommunication Engineering",
        dates: "Aug 2017 – May 2020",
        coursework:
          "Data Structures & Algorithms, Object Oriented Programming, Microprocessors & Microcontrollers, Digital Signal Processing, Digital Image Processing, Internet of Things, Embedded Systems",
      },
      {
        school: "Government Polytechnic, Amravati, India",
        degree: "Diploma in Electronics & Telecommunication Engineering",
        dates: "Aug 2014 – May 2017",
      },
    ],
    []
  );

  const patents = useMemo(
    () => [
      {
        title: 'US 12,393,794 B2 – "Video Translation Platform"',
        date: "Granted on August 19, 2025",
        description:
          "This patent focuses on enabling seamless video translation and transcription, where spoken content in one language can be translated, synchronized, and rendered into another language—bridging communication gaps across borders and cultures.",
        link: "https://patents.google.com/patent/US12393794B2/en?oq=US12393794B2",
      },
    ],
    []
  );

  const certifications = useMemo(
    () => [
      {
        name: "AWS Certified Cloud Engineer",
        link: "https://www.credly.com/badges/c6859be7-51a6-46c0-aea8-322fc9df6a47/public_url",
      },
      {
        name: "PCEP – Python Institute",
        link: "https://www.youracclaim.com/badges/f9b43606-e4d1-4dfb-b07c-99e5527e1750",
      },
      {
        name: "Data Structures & Algorithms – AlgoExpert",
        link: "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-5857f16ceb",
      },
      {
        name: "Google Cloud Certified Associate Cloud Engineer",
        link: "https://www.credly.com/",
      },
    ],
    []
  );

  const recognition = useMemo(
    () => [
      "Winner — Accenture Global Technology Innovation Competition (GTIC), selected from 5,000+ global projects",
      "Accenture Inventor Award",
    ],
    []
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-bold tracking-tight">
            {profile.name}
          </a>

          <nav className="hidden gap-6 text-sm text-zinc-700 md:flex">
            <a className="hover:text-zinc-900" href="#projects">Projects</a>
            <a className="hover:text-zinc-900" href="#experience">Experience</a>
            <a className="hover:text-zinc-900" href="#skills">Skills</a>
            <a className="hover:text-zinc-900" href="#education">Education</a>
            <a className="hover:text-zinc-900" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="/resume.pdf" variant="solid">Download Resume</ButtonLink>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="py-14">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-lg text-zinc-700">{profile.headline}</p>
              <p className="mt-4 max-w-2xl text-zinc-600">{profile.summary}</p>

              {/* <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="#projects" variant="solid">View Projects</ButtonLink>
                <ButtonLink href={profile.linkedin} variant="ghost">LinkedIn</ButtonLink>
                <ButtonLink href={profile.github} variant="ghost">GitHub</ButtonLink>
                <ButtonLink href={`mailto:${profile.email}`} variant="ghost">Email</ButtonLink>
              </div> */}

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>{profile.location}</Badge>
                <Badge>{profile.email}</Badge>
              </div>
            </div>

            <Card>
              <div className="text-sm font-semibold text-zinc-900">Highlights</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>• Azure Container Apps: 10+ services</li>
                <li>• Admin dashboard: 6K+ users</li>
                <li>• Signup fraud reduction: ~30%</li>
                <li>• Localization automation: 60% less manual effort</li>
                <li>• Stability gain via monitoring: 40%</li>
              </ul>
              <div className="mt-5">
                <ButtonLink href="/resume.pdf" variant="solid">Download Resume</ButtonLink>
              </div>
            </Card>
          </div>
        </section>

        {/* Experience */}
        <Section
          id="experience"
          title="Experience"
          subtitle="Cloud-native backend engineering, observability, and real-time integrations."
        >
          <div className="space-y-5">
            {experience.map((e) => (
              <Card key={`${e.company}-${e.title}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold">{e.company}</h3>
                    <p className="text-sm text-zinc-700">
                      {e.title}
                      <span className="text-zinc-500"> • {e.dates}</span>
                    </p>
                  </div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section
          id="projects"
          title="Featured Projects"
          subtitle="A quick snapshot of projects that show cloud, backend, data, and embedded/IOT depth."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((p) => (
              <Card key={p.name}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">{p.name}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{p.oneLiner}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.links.github ? (
                    <ButtonLink href={p.links.github} variant="ghost">GitHub</ButtonLink>
                  ) : null}
                  {p.links.live ? (
                    <ButtonLink href={p.links.live} variant="ghost">Live Demo</ButtonLink>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Education */}
        {/* <Section id="education" title="Education" subtitle="Academic foundation in CS, systems, and embedded/IOT."> */}
        <Section id="education" title="Education">
          <div className="space-y-5">
            {education.map((ed) => (
              <Card key={`${ed.school}-${ed.degree}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold">{ed.degree}</h3>
                    <p className="text-sm text-zinc-700">
                      {ed.school} <span className="text-zinc-500"> • {ed.dates}</span>
                    </p>
                  </div>
                </div>
                {ed.coursework && (
                  <p className="mt-3 text-sm text-zinc-600">
                    <span className="font-semibold text-zinc-800">Coursework:</span>{" "}
                    {ed.coursework}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" subtitle="Core technologies I use to build and ship production systems.">
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <Card key={group}>
                <h3 className="text-sm font-semibold text-zinc-900">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((x) => (
                    <Badge key={x}>{x}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section
          id="certifications"
          title="Certifications"
          subtitle="Industry-recognized credentials validating cloud, programming, and algorithmic expertise."
        >
          <Card>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-900 hover:shadow-sm"
                >
                  {cert.name}
                </a>
              ))}
            </div>
          </Card>
        </Section>

        {/* Recognition */}
        <Section id="awards" title="Recognition">
          <Card>
            <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
              {recognition.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </Card>
        </Section>

        {/* Patents */}
        <Section
          id="patents"
          title="Patent"
          subtitle="Granted intellectual property demonstrating innovation in cloud-based AI systems."
        >
          <div className="space-y-5">
            {patents.map((patent) => (
              <Card key={patent.title}>
                <h3 className="text-lg font-bold text-zinc-900">
                  {patent.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-zinc-600">
                  {patent.date}
                </p>

                <p className="mt-3 text-sm text-zinc-700">
                  {patent.description}
                </p>

                <div className="mt-4">
                  <a
                    href={patent.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    View patent details →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          title="Contact"
          subtitle="Best way to reach me is email. I typically respond within a day."
        >
          <Card>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-zinc-900">{profile.email}</div>
                <div className="mt-1 text-sm text-zinc-600">{profile.location}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                <ButtonLink href={`mailto:${profile.email}`} variant="solid">Email</ButtonLink>
                {/* <ButtonLink href={profile.linkedin} variant="ghost">LinkedIn</ButtonLink> */}
                <ButtonLink href={profile.github} variant="ghost">GitHub</ButtonLink>
                <ButtonLink href={profile.handshake} variant="ghost">Handshake</ButtonLink>
              </div>
            </div>
          </Card>
        </Section>

        <footer className="py-10 text-center text-sm text-zinc-500">
          Made with <span className="text-red-500">❤️</span> by Anagha
        </footer>
      </main>
    </div>
  );
}
