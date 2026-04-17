import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Niriza Lailaumi",
  lastName: "Hidayat",
  name: `Niriza Lailaumi Hidayat`,
  role: "UI/UX Designer | Frontend Developer",
  avatar: "/images/avatarr.jpg",
  email: "nirizalailaumi1@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["", ""], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nirizalaila",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/niriza",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Halo👋 Selamat Datang</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Niriza</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          UI/UX & Frontend
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
  <br/>Saya Niriza, mahasiswa Sistem Informasi Bisnis yang mendalami UI/UX design dan frontend development.
  Saya berfokus pada rancangan tampilan yang tidak hanya menarik, tetapi juga mudah dipahami dan digunakan.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Tentang Saya",
    description: (
      <>
       Mahasiswa Sistem Informasi Bisnis di Politeknik Negeri Malang dengan ketertarikan pada UI/UX design dan frontend development. 
       Berfokus pada menciptakan pengalaman digital yang bermakna melalui perpaduan desain yang tepat dan implementasi antarmuka yang responsif.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Workshop Riset Informatika",
        timeframe: "2024-2025",
        role: "Mentor UI/UX Design",
        achievements: [
          <>
            Membimbing peserta dalam memahami proses desain, mulai dari penyusunan alur, pembuatan tampilan, 
            hingga memberikan arahan dan evaluasi terhadap hasil desain.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Juara 1 (IBAC)",
        timeframe: "2024",
        role: "Chief Technology Officer",
        achievements: [
          <>
            Berperan sebagai CTO (Chief Technology Officer) dalam tim dan meraih Juara 1 International Business Administration Competition (IBAC) 2024, 
            dengan tanggung jawab utama mengarahkan aspek teknologi, mengembangkan prototype aplikasi, serta merancang UI/UX dan materi visual pendukung untuk business plan.
          </>,
        ],
        images: [
          {
            src: "/images/ibac2.png",
            alt: "Sertifikat IBAC",
            width: 16,
            height: 9,
          },
          {
            src: "/images/ibac1.jpeg",
            alt: "dokumentasi IBAC",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Kompetisi UI/UX",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Aktif mengikuti berbagai kompetisi UI/UX Design, mulai dari tingkat kampus hingga nasional, 
            dengan fokus pada pengembangan kemampuan dalam merancang solusi digital yang berpusat pada pengguna.
          </>,
        ],
        images: [
          {
            src: "/images/sertif1.png",
            alt: "Sertifikat Kompetisi UI/UX",
            width: 16,
            height: 9,
          },
          {
            src: "/images/sertif2.png",
            alt: "Sertifikat Kompetisi UI/UX",
            width: 16,
            height: 9,
          },
          {
            src: "/images/sertif3.png",
            alt: "Sertifikat Kompetisi UI/UX",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Project SIPETO",
        timeframe: "2025",
        role: "UI/UX Designer & Frontend Developer",
        achievements: [
          <>
            Berperan sebagai UI/UX Designer dengan merancang user flow, wireframe, hingga high-fidelity design
            untuk memastikan pengalaman pengguna yang intuitif dan terstruktur dalam simulasi TOEIC.
          </>,
          <>
            Mengimplementasikan desain sebagai Frontend Developer menggunakan HTML, CSS, JavaScript, dan Bootstrap, sehingga menghasilkan antarmuka 
            web yang responsif, interaktif, serta konsisten di berbagai perangkat.
          </>,
          <>
            <Row gap="8" vertical="center">
              {/* GitHub */}
              <a href="https://github.com/dhevinaagustina/SIPETO_2025.git" target="_blank" rel="noopener noreferrer">
                <Row gap="4" vertical="center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </Row>
              </a>

              <Line vert height="16" background="neutral-alpha-weak" />
              {/* Figma */}
              <a href="https://www.figma.com/design/oOM8aJAg8EPpFeZnJWGm1P/SIPETO?node-id=0-1" target="_blank" rel="noopener noreferrer">
                <Row gap="4" vertical="center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 12C12 9.79 13.79 8 16 8C18.21 8 20 9.79 20 12C20 14.21 18.21 16 16 16C13.79 16 12 14.21 12 12Z" />
                    <path d="M4 20C4 17.79 5.79 16 8 16H12V20C12 22.21 10.21 24 8 24C5.79 24 4 22.21 4 20Z" />
                    <path d="M12 0V8H16C18.21 8 20 6.21 20 4C20 1.79 18.21 0 16 0H12Z" />
                    <path d="M4 4C4 1.79 5.79 0 8 0H12V8H8C5.79 8 4 6.21 4 4Z" />
                    <path d="M4 12C4 9.79 5.79 8 8 8H12V16H8C5.79 16 4 14.21 4 12Z" />
                  </svg>
                  Figma
                </Row>
              </a>

              <Line vert height="16" background="neutral-alpha-weak" />

              {/* Documentation */}
              <a href="https://drive.google.com/file/d/1SfX2ZEVe58Hb_ZwrF8jOWUIxjByhsVwK/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Row gap="4" vertical="center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 8h8M8 12h8M8 16h4" />
                  </svg>
                  Full Documentation
                </Row>
              </a>
            </Row>
          </>
        ],
        images: [
          {
            src: "/images/SIPETO.jpg",
            alt: "SIPETO",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Project Sugarwise",
        timeframe: "2023",
        role: "UI/UX Designer",
        achievements: [
          <>
            Mendesain tampilan aplikasi Sugarwise mulai dari wireframe hingga desain akhir di Figma, 
            dengan fokus membuat fitur mudah dipahami untuk membantu pengguna mencatat dan memantau konsumsi gula sehari-hari.
          </>,
          <>
            Menentukan alur penggunaan dan menyusun tampilan fitur seperti pencatatan gula, laporan, dan rencana (Journey) 
            supaya lebih jelas, rapi, dan nyaman digunakan dalam aktivitas sehari-hari.
          </>,
          <>
            <Row gap="8" vertical="center">
              {/* Figma */}
              <a href="https://www.figma.com/proto/5Kefo4KLiSJXu94cEoI2He/Sugarwise?node-id=1-92&p=f&t=mAhO0QdIelMNEOkh-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A92&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
                <Row gap="4" vertical="center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 12C12 9.79 13.79 8 16 8C18.21 8 20 9.79 20 12C20 14.21 18.21 16 16 16C13.79 16 12 14.21 12 12Z" />
                    <path d="M4 20C4 17.79 5.79 16 8 16H12V20C12 22.21 10.21 24 8 24C5.79 24 4 22.21 4 20Z" />
                    <path d="M12 0V8H16C18.21 8 20 6.21 20 4C20 1.79 18.21 0 16 0H12Z" />
                    <path d="M4 4C4 1.79 5.79 0 8 0H12V8H8C5.79 8 4 6.21 4 4Z" />
                    <path d="M4 12C4 9.79 5.79 8 8 8H12V16H8C5.79 16 4 14.21 4 12Z" />
                  </svg>
                  Figma
                </Row>
              </a>

              <Line vert height="16" background="neutral-alpha-weak" />

              {/* Documentation */}
              <a href="https://drive.google.com/file/d/141wSpq-O1xQIbloWR132EaU09ch-1p1e/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Row gap="4" vertical="center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 8h8M8 12h8M8 16h4" />
                  </svg>
                  Full Documentation
                </Row>
              </a>
            </Row>
          </>
        ],
        images: [
          {
            src: "/images/SUGARWISE.jpg",
            alt: "SUGARWISE",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "BisnisKITA Malang",
        timeframe: "2024-Sekarang",
        role: "Graphic Designer & Content Creator",
        achievements: [
          <>
            Berperan sebagai Graphic Designer, bertanggung jawab dalam membuat berbagai kebutuhan desain visual seperti konten media sosial, 
            materi promosi, dan kebutuhan branding sesuai identitas yang ditentukan.
          </>,
          <>
            Berperan sebagai Content Creator dengan menyusun konsep dan mengelola konten visual 
            maupun copy untuk mendukung komunikasi brand agar lebih menarik dan konsisten di berbagai platform.
          </>,
          <>
            Melakukan pengambilan foto dan video produk untuk kebutuhan promosi dan branding, serta mengolah hasil visual 
            agar sesuai dengan konsep dan identitas brand.
          </>,
          <Row gap="8" vertical="center">
            {/* Documentation */}
              <a href="https://drive.google.com/drive/folders/196gMKa4WB0a1UgXg4C5LFEL1t87jbDPS?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Row gap="4" vertical="center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 8h8M8 12h8M8 16h4" />
                  </svg>
                  Video Konten
                </Row>
              </a>
          </Row>
        ],
        images: [
          {
            src: "/images/bk1.png",
            alt: "Portofolio BisnisKITA",
            width: 9,
            height: 9,
          },
          {
            src: "/images/bk2.png",
            alt: "Portofolio BisnisKITA",
            width: 9,
            height: 9,
          },
          {
            src: "/images/bk3.png",
            alt: "Portofolio BisnisKITA",
            width: 9,
            height: 9,
          },
          {
            src: "/images/bk4.jpeg",
            alt: "Portofolio BisnisKITA",
            width: 9,
            height: 9
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Politeknik Negeri Malang",
        description: <>D4 Sistem Informasi Binis</>,
      },
      {
        name: "SMA Negeri 4 Malang",
        description: <>MIPA</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>
            Berpengalaman dalam merancang antarmuka berbasis user-centered design menggunakan Figma. 
            Mampu membuat wireframe, desain high-fidelity, serta prototype interaktif. 
            Digunakan dalam pengembangan proyek seperti Sugarwise dan Martac, dengan fokus pada user journey 
            dan peningkatan pengalaman pengguna.
          </>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
      {
        title: "Laravel",
        description: (
          <>
            Mampu mengembangkan aplikasi web menggunakan framework Laravel, termasuk implementasi CRUD, 
            autentikasi, dan pengelolaan data. Berpengalaman menggunakan AdminLTE, DataTables, 
            serta fitur import/export (Excel & PDF) dalam pengembangan proyek akademik.
          </>
        ),
        tags: [
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "PHP",
            icon: "php",
          },
        ],
        images: [],
      },
      {
        title: "Next.js",
        description: (
          <>
            Memiliki pemahaman dalam membangun antarmuka web modern menggunakan Next.js dan React. 
            Berpengalaman dalam membuat komponen UI yang responsif, menyusun struktur halaman, 
            serta melakukan deployment menggunakan platform seperti Vercel.
          </>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react",
          },
        ],
        images: [],
      },
      {
        title: "Photography",
        description: (
          <>
            Memiliki kemampuan dalam fotografi produk dan pembuatan konten visual untuk kebutuhan digital. 
            Berpengalaman dalam pengambilan dan pengolahan gambar untuk mendukung branding serta promosi di media sosial.
          </>
        ),
        tags: [
          {
            name: "Photography",
            icon: "camera",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
