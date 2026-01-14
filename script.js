// ==================== JAVASCRIPT START ====================

// Education Data
const educationData = [
    {
        date: "2018 - 2022",
        title: "S1 Teknik Informatika",
        institution: "Universitas Indonesia",
        description: "Fokus pada pengembangan perangkat lunak, algoritma, dan struktur data. IPK: 3.75/4.00"
    },
    {
        date: "2015 - 2018",
        title: "SMA Negeri 1 Jakarta",
        institution: "Jurusan IPA",
        description: "Aktif dalam berbagai kompetisi programming dan olimpiade sains tingkat nasional"
    }
];

// Experience Data
const experienceData = [
    {
        date: "2023 - Present",
        title: "Senior Full Stack Developer",
        company: "Tech Startup Indonesia",
        description: "Memimpin tim pengembangan dalam membangun platform e-commerce modern. Mengimplementasikan microservices architecture dan meningkatkan performance aplikasi hingga 60%."
    },
    {
        date: "2022 - 2023",
        title: "Full Stack Developer",
        company: "Digital Agency Jakarta",
        description: "Mengembangkan berbagai aplikasi web untuk klien dari berbagai industri. Bekerja dengan teknologi React, Node.js, dan cloud services."
    },
    {
        date: "2021 - 2022",
        title: "Junior Developer",
        company: "Software House",
        description: "Memulai karir sebagai junior developer, fokus pada frontend development dengan React dan Vue.js. Belajar best practices dan clean code principles."
    }
];

// Projects Data
const projectsData = [
    {
        title: "E-Commerce Platform",
        tech: "React • Node.js • MongoDB",
        description: "Platform e-commerce lengkap dengan fitur payment gateway, inventory management, dan analytics dashboard.",
        visual: "visual-web"
    },
    {
        title: "Mobile Banking App",
        tech: "React Native • Firebase",
        description: "Aplikasi mobile banking dengan fitur transfer, pembayaran tagihan, dan investasi. Digunakan oleh 100K+ users.",
        visual: "visual-mobile"
    },
    {
        title: "AI Chatbot Assistant",
        tech: "Python • TensorFlow • NLP",
        description: "Chatbot AI untuk customer service yang dapat memahami bahasa natural dan memberikan solusi otomatis.",
        visual: "visual-ai"
    },
    {
        title: "Multiplayer Game Platform",
        tech: "Unity • WebSocket • Node.js",
        description: "Platform gaming multiplayer real-time dengan sistem ranking, achievement, dan in-game marketplace.",
        visual: "visual-game"
    }
];

// Generate Education Timeline
function generateEducation() {
    const timeline = document.getElementById('educationTimeline');
    educationData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animation = `fadeIn 0.6s ease ${index * 0.2}s backwards`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <div class="timeline-subtitle">${item.institution}</div>
                <p class="timeline-description">${item.description}</p>
            </div>
            <div></div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Generate Experience Timeline
function generateExperience() {
    const timeline = document.getElementById('experienceTimeline');
    experienceData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animation = `fadeIn 0.6s ease ${index * 0.2}s backwards`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <div class="timeline-subtitle">${item.company}</div>
                <p class="timeline-description">${item.description}</p>
            </div>
            <div></div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Generate Projects
function generateProjects() {
    const grid = document.getElementById('projectsGrid');
    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animation = `fadeIn 0.6s ease ${index * 0.1}s backwards`;
        
        card.innerHTML = `
            <div class="project-visual ${project.visual}"></div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-tech">${project.tech}</p>
                <p class="project-description">${project.description}</p>
                <button class="project-btn">View Details</button>
            </div>
        `;
        
        const btn = card.querySelector('.project-btn');
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            alert(`📂 Project: ${project.title}\n💻 Tech Stack: ${project.tech}\n\n${project.description}`);
        });
        
        grid.appendChild(card);
    });
}

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        navbar.style.boxShadow = '0 0 40px rgba(0, 243, 255, 0.8)';
    } else {
        navbar.style.boxShadow = '0 0 30px rgba(0, 243, 255, 0.5)';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateEducation();
    generateExperience();
    generateProjects();
    
    // Terminal typing effect for subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    const text = 'FULL STACK DEVELOPER ';
    subtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.innerHTML = text.substring(0, i + 1) + '<span class="terminal-text">█</span>';
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 800);
});

// ==================== JAVASCRIPT END ====================