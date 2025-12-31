export const data = {
    tr: {
        experiences: [
            {
                title: "Senior Full Stack Developer",
                company: "Tech Innovators",
                period: "2021 - 2022",
                type: "Tam Zamanlı",
                location: "İstanbul, Türkiye",
                description: "Modern web uygulamaları geliştirme, mikroservis mimarileri tasarlama ve takım liderliği.",
                highlights: [
                    "10+ büyük ölçekli projenin başarıyla tamamlanması",
                    "Mikroservis mimarisi ile %40 performans artışı",
                    "5 kişilik geliştirici ekibine mentorluk"
                ],
                tech: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
                color: "from-blue-500 to-indigo-500"
            },
            {
                title: "Full Stack Developer",
                company: "Digital Solutions",
                period: "2019 - 2021",
                type: "Tam Zamanlı",
                location: "Ankara, Türkiye",
                description: "E-ticaret platformları ve kurumsal web uygulamaları geliştirme.",
                highlights: [
                    "3 büyük e-ticaret projesinin geliştirilmesi",
                    "Ödeme sistemi entegrasyonları",
                    "SEO optimizasyonları"
                ],
                tech: ["Vue.js", "Python", "Django", "PostgreSQL"],
                color: "from-green-500 to-teal-500"
            },
            {
                title: "Frontend Developer",
                company: "Creative Web",
                period: "2018 - 2019",
                type: "Tam Zamanlı",
                location: "İzmir, Türkiye",
                description: "Kullanıcı arayüzü geliştirme ve UX tasarımı.",
                highlights: [
                    "Responsive web tasarımları",
                    "Performance optimizasyonu",
                    "A/B testleri"
                ],
                tech: ["HTML", "CSS", "JavaScript", "Sass"],
                color: "from-purple-500 to-pink-500"
            }
        ],
        skillsCategories: [
            {
                title: "Frontend Geliştirme",
                icon: "🎨",
                color: "from-blue-500 to-indigo-500",
                skills: [
                    { name: "React.js", level: 95, icon: "devicon-react-original colored" },
                    { name: "Vue.js", level: 90, icon: "devicon-vuejs-plain colored" },
                    { name: "TypeScript", level: 88, icon: "devicon-typescript-plain colored" },
                    { name: "Next.js", level: 85, icon: "devicon-nextjs-original" },
                    { name: "Tailwind CSS", level: 92, icon: "devicon-tailwindcss-plain colored" }
                ]
            },
            {
                title: "Backend Geliştirme",
                icon: "⚙️",
                color: "from-green-500 to-teal-500",
                skills: [
                    { name: "Node.js", level: 92, icon: "devicon-nodejs-plain colored" },
                    { name: "Python", level: 88, icon: "devicon-python-plain colored" },
                    { name: "PostgreSQL", level: 85, icon: "devicon-postgresql-plain colored" },
                    { name: "MongoDB", level: 90, icon: "devicon-mongodb-plain colored" },
                    { name: "GraphQL", level: 82, icon: "devicon-graphql-plain colored" }
                ]
            },
            {
                title: "DevOps & Araçlar",
                icon: "🛠️",
                color: "from-purple-500 to-pink-500",
                skills: [
                    { name: "Docker", level: 88, icon: "devicon-docker-plain colored" },
                    { name: "Git", level: 95, icon: "devicon-git-plain colored" },
                    { name: "AWS", level: 85, icon: "devicon-amazonwebservices-original colored" },
                    { name: "Linux", level: 90, icon: "devicon-linux-plain colored" },
                    { name: "Nginx", level: 82, icon: "devicon-nginx-original colored" }
                ]
            }
        ],
        softSkills: [
            { name: "Problem Çözme", value: 95, icon: "🧩" },
            { name: "Takım Çalışması", value: 90, icon: "👥" },
            { name: "İletişim", value: 92, icon: "💬" },
            { name: "Adaptasyon", value: 88, icon: "🔄" },
            { name: "Liderlik", value: 85, icon: "🎯" },
            { name: "Zaman Yönetimi", value: 90, icon: "⏰" }
        ],
        projects: [
            {
                title: "E-Ticaret Platformu",
                description: "Modern ve ölçeklenebilir bir e-ticaret çözümü. Next.js, TypeScript ve Tailwind CSS ile geliştirildi.",
                image: "/projects/ecommerce.jpg",
                tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
                demoUrl: "https://demo.ecommerce.com",
                githubUrl: "https://github.com/username/ecommerce",
                features: [
                    "Gelişmiş ürün filtreleme ve arama",
                    "Gerçek zamanlı sepet yönetimi",
                    "Stripe entegrasyonu",
                    "Admin paneli"
                ]
            },
            {
                title: "AI Destekli Blog Platformu",
                description: "Yapay zeka destekli içerik önerileri sunan modern blog platformu. Vue.js ve Node.js ile geliştirildi.",
                image: "/projects/blog.jpg",
                tags: ["Vue.js", "Node.js", "MongoDB", "OpenAI", "AWS"],
                demoUrl: "https://demo.blog.com",
                githubUrl: "https://github.com/username/blog",
                features: [
                    "AI destekli içerik önerileri",
                    "Markdown editör",
                    "SEO optimizasyonu",
                    "Otomatik etiketleme"
                ]
            },
            {
                title: "Proje Yönetim Uygulaması",
                description: "Takımlar için gelişmiş proje ve görev yönetim platformu. React ve GraphQL ile geliştirildi.",
                image: "/projects/project-management.jpg",
                tags: ["React", "GraphQL", "PostgreSQL", "Docker", "Redis"],
                demoUrl: "https://demo.projectmanagement.com",
                githubUrl: "https://github.com/username/project-management",
                features: [
                    "Gerçek zamanlı işbirliği",
                    "Gantt şeması görünümü",
                    "Otomatik raporlama",
                    "Kaynak yönetimi"
                ]
            }
        ],
        about: {
            bio: [
                "Merhaba, 4 yıllık alaylı bir Full Stack Geliştirici, UI/UX Tasarımcısı ve DevOps. Şu ana kadar 20'den fazla projede geliştirici ve bilgi teknolojileri sorumlusu olarak aktif görev aldım.",
                "Son dönemde kurumsal düzeyde projeler üretmeye başladım ve kullanıcı geri bildirimleri sayesinde hem teknik becerilerimi hem de kullanıcı deneyimi konusundaki uzmanlığımı sürekli olarak geliştiriyorum.",
                "Modern web teknolojileri, estetik tasarım ve kullanıcı odaklı yaklaşım benim için vazgeçilmez."
            ],
            stats: [
                { number: "5+", text: "Yıl Deneyim", icon: "⚡", description: "Frontend ve Backend geliştirmede profesyonel deneyim" },
                { number: "50+", text: "Tamamlanan Proje", icon: "🚀", description: "Başarıyla tamamlanan web ve mobil projeler" },
                { number: "20+", text: "Mutlu Müşteri", icon: "😊", description: "Dünya çapında memnun müşteriler" },
                { number: "3", text: "Ödül & Başarı", icon: "🏆", description: "Sektörde kazanılan ödüller ve başarılar" }
            ]
        },
        testimonials: [
            {
                id: 1,
                name: "Ahmet Yılmaz",
                role: "CEO",
                company: "TechStart Yazılım",
                avatar: "https://ui-avatars.com/api/?name=Ahmet+Yilmaz&background=2563eb&color=fff&size=100",
                content: "Doğukan ile çalışmak harika bir deneyimdi. Projemizi zamanında ve beklentilerimizin üzerinde teslim etti. Teknik bilgisi ve iletişim becerisi üst düzey.",
                rating: 5
            },
            {
                id: 2,
                name: "Elif Kaya",
                role: "Proje Yöneticisi",
                company: "Digital Agency",
                avatar: "https://ui-avatars.com/api/?name=Elif+Kaya&background=8b5cf6&color=fff&size=100",
                content: "E-ticaret sitemizi sıfırdan geliştirdi. Modern tasarımı ve kullanıcı dostu arayüzü ile müşteri memnuniyetimiz %40 arttı. Kesinlikle tavsiye ederim!",
                rating: 5
            },
            {
                id: 3,
                name: "Mehmet Demir",
                role: "CTO",
                company: "Fintech Solutions",
                avatar: "https://ui-avatars.com/api/?name=Mehmet+Demir&background=10b981&color=fff&size=100",
                content: "DevOps süreçlerimizi optimize etti ve CI/CD pipeline'larımızı kurdu. Deployment sürelerimiz %60 azaldı. Profesyonel ve çözüm odaklı bir geliştirici.",
                rating: 5
            },
            {
                id: 4,
                name: "Zeynep Öztürk",
                role: "Ürün Müdürü",
                company: "SaaS Platform",
                avatar: "https://ui-avatars.com/api/?name=Zeynep+Ozturk&background=f59e0b&color=fff&size=100",
                content: "Mobil uygulamamızı React Native ile geliştirdi. App Store'da 4.8 puan aldık! Detaylara olan ilgisi ve kalite anlayışı takdire şayan.",
                rating: 5
            }
        ],
        terminal: {
            help: `Kullanılabilir komutlar:
      <span class="text-green-400">about</span>     - Hakkımda bilgiler
      <span class="text-green-400">skills</span>    - Yeteneklerim
      <span class="text-green-400">projects</span>  - Projelerim
      <span class="text-green-400">contact</span>   - İletişim bilgileri
      <span class="text-green-400">social</span>    - Sosyal medya
      <span class="text-green-400">clear</span>     - Ekranı temizle
      <span class="text-green-400">help</span>      - Bu yardım mesajı`,

            about: `<span class="text-yellow-400">━━━ HAKKIMDA ━━━</span>
      
      👋 Merhaba! Ben <span class="text-primary">Doğukan Tevfik Sağıroğlu</span>
      
      💼 Full Stack Geliştirici & DevOps
      📍 Samsun, Türkiye | Hannover, Almanya
      💻 4+ yıl profesyonel deneyim
      
      Modern web teknolojileri ile yaratıcı ve kurumsal
      çözümler üreten tutkulu bir geliştiriciyim.`,

            skills: `<span class="text-yellow-400">━━━ YETENEKLERİM ━━━</span>
    
      <span class="text-blue-400">Frontend:</span>
        ▸ React.js, Vue.js, Next.js
        ▸ TypeScript, JavaScript
        ▸ Tailwind CSS, SCSS
    
      <span class="text-green-400">Backend:</span>
        ▸ Node.js, Python
        ▸ PostgreSQL, MongoDB
        ▸ GraphQL, REST API
    
      <span class="text-purple-400">DevOps:</span>
        ▸ Docker, Kubernetes
        ▸ AWS, Linux
        ▸ CI/CD Pipelines`,

            projects: `<span class="text-yellow-400">━━━ PROJELERİM ━━━</span>
    
      🛒 <span class="text-primary">E-Ticaret Platformu</span>
         Next.js, TypeScript, Stripe
    
      📝 <span class="text-primary">AI Blog Platformu</span>
         Vue.js, Node.js, OpenAI
    
      📊 <span class="text-primary">Proje Yönetimi</span>
         React, GraphQL, PostgreSQL
      
      <span class="text-gray-400">Detaylar için #projects bölümüne gidin</span>`,

            contact: `<span class="text-yellow-400">━━━ İLETİŞİM ━━━</span>
    
      📧 Email: <span class="text-primary">email@example.com</span>
      📱 Tel: <span class="text-primary">+90 5**********</span>
      📍 Konum: Samsun, TR | Hannover, DE
      
      <span class="text-gray-400">İletişim formuna gitmek için #contact yazın</span>`,

            social: `<span class="text-yellow-400">━━━ SOSYAL MEDYA ━━━</span>
    
      <span class="text-gray-300">GitHub:</span>   github.com/dogukansagiroglu
      <span class="text-blue-400">LinkedIn:</span> linkedin.com/in/dogukan
      <span class="text-sky-400">Twitter:</span>  @dogukansagiroglu`
        }
    },
    de: {
        experiences: [
            {
                title: "Senior Full Stack Entwickler",
                company: "Tech Innovators",
                period: "2021 - 2022",
                type: "Vollzeit",
                location: "Istanbul, Türkei",
                description: "Entwicklung moderner Webanwendungen, Design von Microservices-Architekturen und Teamleitung.",
                highlights: [
                    "Erfolgreicher Abschluss von 10+ Großprojekten",
                    "40% Leistungssteigerung durch Microservices",
                    "Mentoring eines 5-köpfigen Entwicklerteams"
                ],
                tech: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
                color: "from-blue-500 to-indigo-500"
            },
            {
                title: "Full Stack Entwickler",
                company: "Digital Solutions",
                period: "2019 - 2021",
                type: "Vollzeit",
                location: "Ankara, Türkei",
                description: "Entwicklung von E-Commerce-Plattformen und Unternehmensanwendungen.",
                highlights: [
                    "Entwicklung von 3 großen E-Commerce-Projekten",
                    "Integration von Zahlungssystemen",
                    "SEO-Optimierung"
                ],
                tech: ["Vue.js", "Python", "Django", "PostgreSQL"],
                color: "from-green-500 to-teal-500"
            },
            {
                title: "Frontend Entwickler",
                company: "Creative Web",
                period: "2018 - 2019",
                type: "Vollzeit",
                location: "Izmir, Türkei",
                description: "Entwicklung von Benutzeroberflächen und UX-Design.",
                highlights: [
                    "Responsive Webdesigns",
                    "Leistungsoptimierung",
                    "A/B-Tests"
                ],
                tech: ["HTML", "CSS", "JavaScript", "Sass"],
                color: "from-purple-500 to-pink-500"
            }
        ],
        skillsCategories: [
            {
                title: "Frontend-Entwicklung",
                icon: "🎨",
                color: "from-blue-500 to-indigo-500",
                skills: [
                    { name: "React.js", level: 95, icon: "devicon-react-original colored" },
                    { name: "Vue.js", level: 90, icon: "devicon-vuejs-plain colored" },
                    { name: "TypeScript", level: 88, icon: "devicon-typescript-plain colored" },
                    { name: "Next.js", level: 85, icon: "devicon-nextjs-original" },
                    { name: "Tailwind CSS", level: 92, icon: "devicon-tailwindcss-plain colored" }
                ]
            },
            {
                title: "Backend-Entwicklung",
                icon: "⚙️",
                color: "from-green-500 to-teal-500",
                skills: [
                    { name: "Node.js", level: 92, icon: "devicon-nodejs-plain colored" },
                    { name: "Python", level: 88, icon: "devicon-python-plain colored" },
                    { name: "PostgreSQL", level: 85, icon: "devicon-postgresql-plain colored" },
                    { name: "MongoDB", level: 90, icon: "devicon-mongodb-plain colored" },
                    { name: "GraphQL", level: 82, icon: "devicon-graphql-plain colored" }
                ]
            },
            {
                title: "DevOps & Tools",
                icon: "🛠️",
                color: "from-purple-500 to-pink-500",
                skills: [
                    { name: "Docker", level: 88, icon: "devicon-docker-plain colored" },
                    { name: "Git", level: 95, icon: "devicon-git-plain colored" },
                    { name: "AWS", level: 85, icon: "devicon-amazonwebservices-original colored" },
                    { name: "Linux", level: 90, icon: "devicon-linux-plain colored" },
                    { name: "Nginx", level: 82, icon: "devicon-nginx-original colored" }
                ]
            }
        ],
        softSkills: [
            { name: "Problemlösung", value: 95, icon: "🧩" },
            { name: "Teamarbeit", value: 90, icon: "👥" },
            { name: "Kommunikation", value: 92, icon: "💬" },
            { name: "Anpassungsfähigkeit", value: 88, icon: "🔄" },
            { name: "Führung", value: 85, icon: "🎯" },
            { name: "Zeitmanagement", value: 90, icon: "⏰" }
        ],
        projects: [
            {
                title: "E-Commerce-Plattform",
                description: "Moderne und skalierbare E-Commerce-Lösung. Entwickelt mit Next.js, TypeScript und Tailwind CSS.",
                image: "/projects/ecommerce.jpg",
                tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
                demoUrl: "https://demo.ecommerce.com",
                githubUrl: "https://github.com/username/ecommerce",
                features: [
                    "Erweiterte Produktfilterung und Suche",
                    "Echtzeit-Warenkorbverwaltung",
                    "Stripe-Integration",
                    "Admin-Panel"
                ]
            },
            {
                title: "KI-gestützte Blog-Plattform",
                description: "Moderne Blog-Plattform mit KI-gestützten Inhaltsvorschlägen. Entwickelt mit Vue.js und Node.js.",
                image: "/projects/blog.jpg",
                tags: ["Vue.js", "Node.js", "MongoDB", "OpenAI", "AWS"],
                demoUrl: "https://demo.blog.com",
                githubUrl: "https://github.com/username/blog",
                features: [
                    "KI-gestützte Inhaltsvorschlägen",
                    "Markdown-Editor",
                    "SEO-Optimierung",
                    "Automatisches Tagging"
                ]
            },
            {
                title: "Projektmanagement-App",
                description: "Erweiterte Projekt- und Aufgabenmanagement-Plattform für Teams. Entwickelt mit React und GraphQL.",
                image: "/projects/project-management.jpg",
                tags: ["React", "GraphQL", "PostgreSQL", "Docker", "Redis"],
                demoUrl: "https://demo.projectmanagement.com",
                githubUrl: "https://github.com/username/project-management",
                features: [
                    "Echtzeit-Zusammenarbeit",
                    "Gantt-Diagramm-Ansicht",
                    "Automatische Berichterstattung",
                    "Ressourcenmanagement"
                ]
            }
        ],
        about: {
            bio: [
                "Hallo, ich bin ein autodidaktischer Full Stack Entwickler, UI/UX Designer und DevOps mit 4 Jahren Erfahrung. Ich habe in mehr als 20 Projekten als Entwickler und IT-Verantwortlicher gearbeitet.",
                "In letzter Zeit habe ich begonnen, Projekte auf Unternehmensebene zu produzieren, und entwickle meine technischen Fähigkeiten und mein Fachwissen im Bereich User Experience ständig weiter.",
                "Moderne Webtechnologien, ästhetisches Design und ein benutzerorientierter Ansatz sind für mich unverzichtbar."
            ],
            stats: [
                { number: "5+", text: "Jahre Erfahrung", icon: "⚡", description: "Professionelle Erfahrung in Frontend und Backend" },
                { number: "50+", text: "Projekte", icon: "🚀", description: "Erfolgreich abgeschlossene Web- und Mobile-Projekte" },
                { number: "20+", text: "Kunden", icon: "😊", description: "Zufriedene Kunden weltweit" },
                { number: "3", text: "Auszeichnungen", icon: "🏆", description: "Branchenauszeichnungen und Erfolge" }
            ]
        },
        testimonials: [
            {
                id: 1,
                name: "Ahmet Yılmaz",
                role: "CEO",
                company: "TechStart Yazılım",
                avatar: "https://ui-avatars.com/api/?name=Ahmet+Yilmaz&background=2563eb&color=fff&size=100",
                content: "Die Zusammenarbeit mit Doğukan war großartig. Er hat unser Projekt pünktlich und über unseren Erwartungen geliefert. Sein technisches Wissen und seine Kommunikationsfähigkeiten sind erstklassig.",
                rating: 5
            },
            {
                id: 2,
                name: "Elif Kaya",
                role: "Projektmanagerin",
                company: "Digital Agency",
                avatar: "https://ui-avatars.com/api/?name=Elif+Kaya&background=8b5cf6&color=fff&size=100",
                content: "Hat unsere E-Commerce-Seite von Grund auf entwickelt. Dank des modernen Designs und der benutzerfreundlichen Oberfläche stieg unsere Kundenzufriedenheit um 40%. Absolut empfehlenswert!",
                rating: 5
            },
            {
                id: 3,
                name: "Mehmet Demir",
                role: "CTO",
                company: "Fintech Solutions",
                avatar: "https://ui-avatars.com/api/?name=Mehmet+Demir&background=10b981&color=fff&size=100",
                content: "Hat unsere DevOps-Prozesse optimiert und CI/CD-Pipelines eingerichtet. Unsere Bereitstellungszeiten haben sich um 60% verkürzt. Ein professioneller und lösungsorientierter Entwickler.",
                rating: 5
            },
            {
                id: 4,
                name: "Zeynep Öztürk",
                role: "Produktmanagerin",
                company: "SaaS Platform",
                avatar: "https://ui-avatars.com/api/?name=Zeynep+Ozturk&background=f59e0b&color=fff&size=100",
                content: "Hat unsere mobile App mit React Native entwickelt. Wir haben 4,8 Punkte im App Store erhalten! Seine Liebe zum Detail und sein Qualitätsverständnis sind bewundernswert.",
                rating: 5
            }
        ],
        terminal: {
            help: `Verfügbare Befehle:
          <span class="text-green-400">about</span>     - Über mich
          <span class="text-green-400">skills</span>    - Fähigkeiten
          <span class="text-green-400">projects</span>  - Projekte
          <span class="text-green-400">contact</span>   - Kontakt
          <span class="text-green-400">social</span>    - Soziale Medien
          <span class="text-green-400">clear</span>     - Bildschirm löschen
          <span class="text-green-400">help</span>      - Diese Hilfe`,

            about: `<span class="text-yellow-400">━━━ ÜBER MICH ━━━</span>
          
          👋 Hallo! Ich bin <span class="text-primary">Doğukan Tevfik Sağıroğlu</span>
          
          💼 Full Stack Entwickler & DevOps
          📍 Samsun, Türkei | Hannover, Deutschland
          💻 4+ Jahre Berufserfahrung
          
          Ich bin ein leidenschaftlicher Entwickler, der kreative und unternehmerische
          Lösungen mit modernen Webtechnologien entwickelt.`,

            skills: `<span class="text-yellow-400">━━━ FÄHIGKEITEN ━━━</span>
        
          <span class="text-blue-400">Frontend:</span>
            ▸ React.js, Vue.js, Next.js
            ▸ TypeScript, JavaScript
            ▸ Tailwind CSS, SCSS
        
          <span class="text-green-400">Backend:</span>
            ▸ Node.js, Python
            ▸ PostgreSQL, MongoDB
            ▸ GraphQL, REST API
        
          <span class="text-purple-400">DevOps:</span>
            ▸ Docker, Kubernetes
            ▸ AWS, Linux
            ▸ CI/CD Pipelines`,

            projects: `<span class="text-yellow-400">━━━ PROJEKTE ━━━</span>
        
          🛒 <span class="text-primary">E-Commerce-Plattform</span>
             Next.js, TypeScript, Stripe
        
          📝 <span class="text-primary">KI-Blog-Plattform</span>
             Vue.js, Node.js, OpenAI
        
          📊 <span class="text-primary">Projektmanagement</span>
             React, GraphQL, PostgreSQL
          
          <span class="text-gray-400">Gehen Sie zum Abschnitt #projects für Details</span>`,

            contact: `<span class="text-yellow-400">━━━ KONTAKT ━━━</span>
        
          📧 Email: <span class="text-primary">email@example.com</span>
          📱 Tel: <span class="text-primary">+90 5**********</span>
          📍 Ort: Samsun, TR | Hannover, DE
          
          <span class="text-gray-400">Geben Sie #contact ein, um zum Kontaktformular zu gelangen</span>`,

            social: `<span class="text-yellow-400">━━━ SOZIALE MEDIEN ━━━</span>
        
          <span class="text-gray-300">GitHub:</span>   github.com/dogukansagiroglu
          <span class="text-blue-400">LinkedIn:</span> linkedin.com/in/dogukan
          <span class="text-sky-400">Twitter:</span>  @dogukansagiroglu`
        }
    }
};
