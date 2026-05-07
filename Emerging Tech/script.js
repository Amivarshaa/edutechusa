// ========================================
// DATA
// ========================================

const corporateClients = [
    { name: "Infosys", logo: 'Industry Clients Logos/infosys.jpg' },
    { name: "Wipro", logo: "Industry Clients Logos/wipro.jpg" },
    { name: "TCS", logo: "Industry Clients Logos/tcs.jpg" },
    { name: "NTT Data", logo: "Industry Clients Logos/ntt.jpg" },
    { name: "Microsoft", logo: "Industry Clients Logos/microsoft.jpg" },
    { name: "AWS", logo: "Industry Clients Logos/aws.jpg" },
    { name: "IBM", logo: "Industry Clients Logos/ibm.jpg" },
    { name: "Daimler", logo: "Industry Clients Logos/daimler.jpg" },
    { name: "Siemens", logo: "Industry Clients Logos/siemens.jpg" },
    { name: "GE", logo: "Industry Clients Logos/generalelectric.jpg" },
    { name: "Accenture", logo: "Industry Clients Logos/accenture.jpg" },
    { name: "Collins Aerospace", logo: "Industry Clients Logos/collins.jpg",style: "transform: scale(1.5);" },
    { name: "Capgemini", logo: "Industry Clients Logos/capgemini.jpg" },
    { name: "Oracle", logo: "Industry Clients Logos/oracle.jpg" },
    { name: "Bajaj", logo: "Industry Clients Logos/bajaj.jpg" },
    { name: "Motorola", logo: "Industry Clients Logos/motorola.jpg" },
    { name: "Skoda", logo: "Industry Clients Logos/skoda.jpg" },
    { name: "TVS", logo: "Industry Clients Logos/tvs.jpg" },
    { name: "SAP", logo: "Industry Clients Logos/sap.jpg" },
    { name: "SBI", logo: "Industry Clients Logos/sbi.jpg" },
    
    
];

const educationalInstitutions = [
    { name: "Reserve Bank Of India", logo: "Education Partners Logos/rbi.jpg" },
    { name: "IIT Kharagpur", logo: "Education Partners Logos/iitkharagpur.jpg" },
    { name: "BITS Pilani", logo: "Education Partners Logos/bitspilani.jpg" },
    { name: "NIT Surathkal", logo: "Education Partners Logos/nitsurathkal.jpg" },
    { name: "IIT Madras", logo: "Education Partners Logos/iitmadras.jpg" },
    { name: "IIT Kanpur", logo: "Education Partners Logos/iitkanpur.jpg" },
    { name: "IIT Guwhati", logo: "Education Partners Logos/iitguwhati.jpg" },
    { name: "IIT Delhi", logo: "Education Partners Logos/iitdelhi.jpg" },
    { name: "IIT Banglore", logo: "Education Partners Logos/iitbanglore.jpg" },
    { name: "IIT Tirupati", logo: "Education Partners Logos/iittirupati.jpg" },
     { name: "IIT Roorkee", logo: "Education Partners Logos/iitroorkee.jpg" },
    { name: "IIT Bubaneshwar", logo: "Education Partners Logos/iitbubaneshwar.jpg" },
    { name: "IITRAM", logo: "Education Partners Logos/iitram.jpg" },
    { name: "IIT Gandhinagar", logo: "Education Partners Logos/iitgandhinagar.jpg" },
    { name: "IIT Mandi", logo: "Education Partners Logos/iitmandi.jpg" },
    { name: "IIT Hyderabad", logo: "Education Partners Logos/iithyd.jpg" },
    { name: "IIT Jodhpur", logo: "Education Partners Logos/iitjodhpur.jpg" },
    { name: "IIT Patna", logo: "Education Partners Logos/iitpatna.jpg" },
    { name: "IIT Indore", logo: "Education Partners Logos/iit-i.jpg" },
    { name: "NIT Silchar", logo: "Education Partners Logos/nitsilchar.jpg" },
    { name: "IIT Varnasi", logo: "Education Partners Logos/iitvarnasi.jpg" },
    { name: "IIT Jammu", logo: "Education Partners Logos/iitjammu.jpg" },
    { name: "IIT Palakkad", logo: "Education Partners Logos/iitpalakkad.jpg" },
];

const domains = [
    { name: "Engineering Research", icon: "📡", color: "gradient-blue" },
    { name: "Automotive", icon: "🚗", color: "gradient-red" },
    { name: "Manufacturing", icon: "🏭", color: "gradient-purple" },
    { name: "Aerospace & Defense", icon: "✈️", color: "gradient-indigo" },
    { name: "Information Technology", icon: "💻", color: "gradient-green" },
    { name: "Energy & Utility", icon: "⚡", color: "gradient-yellow" },
    { name: "Learning & Development", icon: "🎓", color: "gradient-pink" },
    { name: "Healthcare,Retail & Banking", icon: "❤️", color: "gradient-teal" },
];

const products = [
    {
        title: "Industry 4.0, IoT, Digital Engineering",
        images: [
            "Product Images/IOT.jpg"
        ],
        
    },
    {
        title: "Embodied AI for Enterprise Use Cases",
        images: [
            "Product Images/embodied.jpg"
        ],
        featured: false,
    },
    {
        title: "Physical AI Hardware Models/Prototype for your Business",
        images: [
            "Product Images/physicalai.jpg"
        ],
        
    },
    {
        title: "Future Mobility Labs (EV, Autonomous Vehicles, SDV & Drones)",
        images: [
           "Product Images/drones.jpg"
        ],
        featured: false,
    },
    {
        title: "Software Defined Healthcare / MedTech Labs",
        images: [
            "Product Images/software.jpg"
        ],
        featured: false,
    },
    {
        title: "Motion Capture for Movement Sciences",
        images: [
            "Product Images/motion.jpg"
        ],
        
    },
    {
        title: "Smart Energy Labs",
        images: [
            "Product Images/smart.jpg"
        ],
        featured: false,
    },
    {
        title: "Industry Std. Chipsets, IoT, Cloud & Edge AI H/Ws with Sensors and Actuators",
        images: [
            "Product Images/chipsets.jpg",
        ],
        
    },
    {
        title: "Private 5G & Enterprise Communication Labs",
        images: [
            "Product Images/5g.jpg"
        ],
        
    },
    {
        title: "AI Based Displays: Holograms, Spatial AI Avatars, Interactive Robots & Kiosks, Face Computing, Capability demos",
        images: [
            "Product Images/holograms.jpg",
        ],
        
    },
    {
        title: "Industry Aligned Cybersecurity Labs",
        images: [
            "Product Images/cyber.jpg"
        ],
        featured: false,
    },
    {
        title: "Build your own Systems: Sensors, DIY Components, Accessories, Innovation Lab Projects, POC, etc",
        images: [
           "Product Images/sensor.jpg"
        ],
        featured: false,
    },
];

const advantages = [
    {
        icon: "🔄",
        title: "Bridging the Virtual-Physical Gap",
        description: "Simulations approximate real-world scenarios, but physical models generate real-world sensor data that reflects real, unpredictable environmental conditions, system behaviors, and failures.",
        color: "gradient-blue",
    },
    {
        icon: "💾",
        title: "Hardware Based Real-Time Data Generation",
        description: "AI models trained only on synthetic data can lead to biases and inaccuracies. Hands-on platforms provide real sensor data for machine learning, predictive maintenance, and digital twins.",
        color: "gradient-purple",
    },
    {
        icon: "👥",
        title: "Industry-Ready Skill Development",
        description: "70% of engineers trained in simulations & software struggle with real-world troubleshooting. Hands-on engineering models help them work with real hardware, IoT sensors, and AI-driven automation.",
        color: "gradient-green",
    },
    {
        icon: "✅",
        title: "Testing & Validation in Real Environments",
        description: "Many R&D failures happen due to a lack of physical testing. Hands-on labs enable rapid prototyping, algorithmic validation, and edge AI integration in real conditions.",
        color: "gradient-orange",
    },
    {
        icon: "📈",
        title: "Accelerating Product Development",
        description: "Companies developing AI-driven robotics, autonomous vehicles, or smart energy systems need physical testbeds to fine-tune control systems and real-world responses.",
        color: "gradient-red",
    },
];

const useCases = [
    {
        icon: "🚗",
        title: "Autonomous & Electric Vehicles",
        description: "Data-driven models for battery management, ADAS testing, and AI-driven navigation.",
        color: "gradient-blue",
    },
    {
        icon: "🏭",
        title: "Industry 4.0 & Digital Twins",
        description: "PLC, SCADA, Cloud and Sensor-integrated systems to train AI for predictive maintenance.",
        color: "gradient-purple",
    },
    {
        icon: "⚡",
        title: "Smart Energy & Renewable Tech",
        description: "Real-time performance testing of hybrid energy systems & IoT-based monitoring.",
        color: "gradient-yellow",
    },
    {
        icon: "🤖",
        title: "AI & Robotics",
        description: "Training robots with real-world sensor feedback instead of synthetic simulation data.",
        color: "gradient-pink",
    },
];

const techPartners = [
    { name: "ChatGPT", logo: "Tools Logos/ChatGPT.jpg" },
    { name: "AWS", logo: "Tools Logos/AWS.jpg" },
    { name: "Microsoft Azure", logo: "Tools Logos/Microsoft Azure.jpg" },
    { name: "Google Cloud", logo: "Tools Logos/Google Cloud.jpg" },
    { name: "Arduino", logo: "Tools Logos/Arduino.jpg" },
    { name: "Raspberry Pi", logo: "Tools Logos/Raspberry Pi.jpg" },
    { name: "NVIDIA", logo: "Tools Logos/NVIDIA.jpg" },
    { name: "TensorFlow", logo: "Tools Logos/Tensorflow.jpg" },
    { name: "PyTorch", logo: "Tools Logos/PyTorch.jpg" },
    { name: "Unity", logo: "Tools Logos/Unity.jpg" },
    { name: "ROS", logo: "Tools Logos/ROS.jpg" },
    { name: "MathWorks", logo: "Tools Logos/MathWorks.jpg" },
    { name: "C", logo: "Tools Logos/C.jpg" },
    { name: "C++", logo: "Tools Logos/C++.jpg" },
    { name: "Python", logo: "Tools Logos/Python.jpg" },
    { name: "Unreal", logo: "Tools Logos/Unreal.jpg" },
    { name: "OpenCV", logo: "Tools Logos/OpenCV.jpg" },
    { name: "Nvidia Omniverse", logo: "Tools Logos/Nvidia Omniverse.jpg" },
    { name: "Linux", logo: "Tools Logos/Linux.jpg" },
    { name: "LabView", logo: "Tools Logos/LabVIEW.jpg" },
    { name: "Java", logo: "Tools Logos/Java.jpg" },
    { name: "Gazebo", logo: "Tools Logos/Gazebo.jpg" },
    { name: "Google", logo: "Tools Logos/Google.jpg" },









];
// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMobileMenu();
    renderCorporateClients();
    renderAcademicClients();
    renderDomains();
    renderProducts();
    renderAdvantages();
    renderUseCases();
    renderTechPartners();
    initScrollAnimations();
    initParallax();
    initStatsCounter();
    initSmoothScroll();
});

// ========================================
// NAVIGATION
// ========================================

function initNavigation() {
    const nav = document.getElementById('mainNav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
    
    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// RENDER FUNCTIONS
// ========================================

function renderCorporateClients() {
    const grid = document.getElementById('corporateGrid');
    
    corporateClients.forEach((client, index) => {
        const card = document.createElement('div');
        card.className = 'client-card';
        card.style.transitionDelay = `${index * 0.05}s`;
        
        const img = document.createElement('img');
        img.src = client.logo;
        img.alt = client.name;
        if (client.style) img.style.cssText = client.style;
        img.onerror = function() {
            this.src = `https://via.placeholder.com/120x48/ffffff/374151?text=${encodeURIComponent(client.name)}`;
        };
        
        card.appendChild(img);
        grid.appendChild(card);
    });
}

function renderAcademicClients() {
    const grid = document.getElementById('academicGrid');
    
    educationalInstitutions.forEach((institution, index) => {
        const card = document.createElement('div');
        card.className = 'client-card academic';
        card.style.transitionDelay = `${index * 0.05}s`;
        
        const img = document.createElement('img');
        img.src = institution.logo;
        img.alt = institution.name;
        if (institution.style) img.style.cssText = institution.style;
        img.onerror = function() {
            this.src = `https://via.placeholder.com/120x48/ffffff/374151?text=${encodeURIComponent(institution.name)}`;
        };
        
        card.appendChild(img);
        grid.appendChild(card);
    });
}

function renderDomains() {
    const grid = document.getElementById('domainsGrid');
    
    domains.forEach((domain, index) => {
        const card = document.createElement('div');
        card.className = 'domain-card';
        
        const icon = document.createElement('div');
        icon.className = `domain-icon ${domain.color}`;
        icon.textContent = domain.icon;
        
        const text = document.createElement('p');
        text.textContent = domain.name;
        
        card.appendChild(icon);
        card.appendChild(text);
        grid.appendChild(card);
    });
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = `product-card ${product.featured ? 'featured' : ''}`;
        card.style.transitionDelay = `${index * 0.05}s`;
        
        // Images container
        const imagesDiv = document.createElement('div');
        imagesDiv.className = 'product-images';
        
        product.images.forEach(imgSrc => {
            const wrapper = document.createElement('div');
            wrapper.className = 'product-image-wrapper';
            
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = '';
            
            const overlay = document.createElement('div');
            overlay.className = 'product-image-overlay';
            
            wrapper.appendChild(img);
            wrapper.appendChild(overlay);
            imagesDiv.appendChild(wrapper);
        });
        
        // Footer
        const footer = document.createElement('div');
        footer.className = `product-footer ${product.featured ? 'featured' : 'standard'}`;
        
        const title = document.createElement('h3');
        title.textContent = product.title;
        
        footer.appendChild(title);
        
        if (product.featured) {
            const badge = document.createElement('span');
            badge.className = 'product-badge';
            badge.textContent = 'Featured';
            footer.appendChild(badge);
        }
        
        card.appendChild(imagesDiv);
        card.appendChild(footer);
        grid.appendChild(card);
    });
}

function renderAdvantages() {
    const list = document.getElementById('advantagesList');
    
    advantages.forEach((advantage, index) => {
        const item = document.createElement('div');
        item.className = 'advantage-item';
        item.style.transitionDelay = `${index * 0.1}s`;
        
        const icon = document.createElement('div');
        icon.className = `advantage-icon ${advantage.color}`;
        icon.textContent = advantage.icon;
        
        const content = document.createElement('div');
        content.className = 'advantage-content';
        
        const title = document.createElement('h3');
        title.textContent = advantage.title;
        
        const description = document.createElement('p');
        description.textContent = advantage.description;
        
        content.appendChild(title);
        content.appendChild(description);
        
        item.appendChild(icon);
        item.appendChild(content);
        list.appendChild(item);
    });
}

function renderUseCases() {
    const grid = document.getElementById('useCasesGrid');
    
    useCases.forEach((useCase, index) => {
        const card = document.createElement('div');
        card.className = 'use-case-card';
        
        const icon = document.createElement('div');
        icon.className = `use-case-icon ${useCase.color}`;
        icon.textContent = useCase.icon;
        
        const content = document.createElement('div');
        content.className = 'use-case-content';
        
        const title = document.createElement('h4');
        title.textContent = useCase.title;
        
        const description = document.createElement('p');
        description.textContent = useCase.description;
        
        content.appendChild(title);
        content.appendChild(description);
        
        card.appendChild(icon);
        card.appendChild(content);
        grid.appendChild(card);
    });
}

function renderTechPartners() {
    const grid = document.getElementById('techPartnersGrid');

    techPartners.forEach((partner, index) => {
        const badge = document.createElement('div');
        badge.className = 'tech-partner-badge';
        badge.style.transitionDelay = `${index * 0.05}s`;

        const img = document.createElement('img');
        img.src = partner.logo;
        img.alt = partner.name;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';

        badge.appendChild(img);
        grid.appendChild(badge);
    });
}

// ========================================
// ANIMATIONS
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.stat-card, .client-card, .service-card, .domains-box, .mission-box, ' +
        '.product-header, .product-card, .advantages-header, .advantage-item, ' +
        '.use-cases-box, .tech-partners, .trust-badge, .cta-content'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-bg');
        
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

function initStatsCounter() {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const numberElement = entry.target.querySelector('.stat-number');
                const text = numberElement.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[0-9]/g, '');
                
                animateCounter(numberElement, number, suffix, 2000);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-card').forEach(card => {
        statsObserver.observe(card);
    });
}

function animateCounter(element, target, suffix, duration) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// ========================================
// UTILITIES
// ========================================

// Log when page is loaded
console.log('Edutech Emerging Tech Labs - Website loaded successfully');
