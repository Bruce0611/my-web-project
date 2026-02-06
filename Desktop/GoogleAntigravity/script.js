// --- 翻譯資料庫 ---
const translations = {
    en: {
        nav_about: "About", nav_skills: "Skills", nav_portfolio: "Portfolio",
        nav_experience: "Experience", nav_education: "Education", nav_certs: "Certifications",
        nav_interests: "Interests", nav_contact: "Contact Me",
        hero_badge: "Hello, World! I'm Bruce",
        hero_title_1: "Cross-domain Engineering", hero_title_2: "AI Tech Expert",
        hero_desc: "Expert in multi-source data analysis and machine learning to solve complex engineering challenges. Creating smarter solutions bridging technology and physical principles.",
        about_title: "About Me",
        about_c1_title: "Cross-domain Integration", about_c1_desc: "Seamlessly integrating knowledge from Civil Engineering to AI technology to build unique competitiveness.",
        about_c2_title: "Innovative Thinking", about_c2_desc: "Utilizing innovative thinking and technical tools to effectively solve complex engineering challenges and improve work efficiency.",
        about_c3_title: "Diverse Development", about_c3_desc: "Singing champion and basketball captain. Pursuing excellence beyond the profession with strong team leadership.",
        skills_title: "Professional Skills",
        skill_civil_title: '<i class="fa-solid fa-wrench mr-3"></i>Civil Engineering',
        skill_civil_desc: "Numerical Methods, CAE, Structure Design, Material Mechanics, Project Management.",
        skill_cfd_title: '<i class="fa-solid fa-wind mr-3"></i>Wind Tunnel (CFD)',
        skill_cfd_desc: "Spectral Analysis, Model Testing, Flow Simulation, Aerodynamics, Numerical Optimization.",
        skill_ai_title: '<i class="fa-solid fa-brain mr-3"></i>Artificial Intelligence',
        skill_ai_desc: "Database Construction, Automated Deployment, Cloud Security & Compliance, Container Cluster Mgmt, AI Inference Optimization, Machine Learning.",
        portfolio_title: "Selected Projects",
        proj_1_title: "Intelligent Wind-Induced Vibration Control and Structural Performance Optimization System", proj_1_desc: "Integrates deep learning algorithms with structural dynamics theory to automatically identify aerodynamic instability zones in tall buildings. Through real-time optimization of flow control mechanisms (such as active damper parameters), effective drag coefficient reduction of 32% and suppression of perturbation intensity by 25.5% are achieved.",
        proj_2_title: "High-Fidelity CFD Simulation and Aerodynamic Optimization Platform for Tall Buildings", proj_2_desc: "Utilizes Large Eddy Simulation (LES) technology to reconstruct complex atmospheric boundary layer flow fields, providing deep analysis of surface pressure distribution and wake structures. Validates the efficacy of various aerodynamic optimization measures through numerical simulation, offering high-precision data support for wind-resistant design.",
        btn_view_project: "View Project Details",
        exp_title: "Experience",
        exp_1_role: "Civil Engineer", exp_1_meta: "2022 - Present | ABC Engineering Consultants",
        exp_1_desc: "<li>Responsible for large-scale structural design/analysis (15+ projects).</li><li>Implemented AI tools improving design efficiency by 30%.</li><li>Optimized BIM workflow reducing communication costs.</li>",
        exp_2_role: "Research Assistant", exp_2_meta: "2020 - 2022 | XYZ University Wind Engineering Center",
        exp_2_desc: "<li>Conducted CFD simulations and wind tunnel tests (3 papers published).</li><li>Developed Python automation scripts reducing analysis time by 50%.</li>",

        // --- Updated Education (English) ---
        edu_title: "Education",
        edu_1_degree: "M.S. Civil Engineering (Wind Tunnel Group)",
        edu_1_school: "Tamkang University | 2025 - 2026",
        edu_1_desc: "Research: Flow Control and Vibration Optimization System | GPA: 4.0/4.0",

        edu_2_degree: "B.S. Civil Engineering",
        edu_2_school: "Tamkang University | 2021 - 2025",
        edu_2_desc: "Pop Dance Club Art Designer, Project Competition Winner | GPA: 3.45/4.0",
        // ---------------------------

        certs_title: "Certifications", cert_1_name: "NVIDIA Deep Learning Certification", cert_1_desc: "Deep Learning Technology", cert_2_name: "GOOGLE SKILL Certification", cert_2_desc: "National Examination Qualified",
        interests_title: "Achievements", int_1_name: "Singing Contest", int_1_rank: "1st Place (2025)", int_2_name: "Basketball Cup", int_2_rank: "Champion (2020)",
        footer_title: "Let's Work Together", footer_desc: "Feel free to contact me for collaboration or technical exchange."
    },
    zh: {
        nav_about: "關於我", nav_skills: "專業技能", nav_portfolio: "專案作品",
        nav_experience: "工作經驗", nav_education: "教育背景", nav_certs: "認證證照",
        nav_interests: "個人興趣", nav_contact: "聯絡我",
        hero_badge: "Hello, World! I'm Bruce",
        hero_title_1: "跨領域工程", hero_title_2: "AI 技術專家",
        hero_desc: "擅長運用多源數據分析與機器學習，解決複雜工程挑戰。<br>持續推動科技與工程的融合，致力於創造更智慧的解決方案。",
        about_title: "關於我",
        about_c1_title: "跨領域整合", about_c1_desc: "從土木工程到 AI 技術，無縫整合不同領域知識，打造獨特競爭力。",
        about_c2_title: "創新思維", about_c2_desc: "運用創新思維與技術工具，有效解決複雜的工程與技術挑戰，提升工作效率。",
        about_c3_title: "多元發展", about_c3_desc: "歌唱冠軍、籃球隊長，在專業之外同樣追求卓越，具備團隊領導力。",
        skills_title: "專業技能",
        skill_civil_title: '<i class="fa-solid fa-wrench mr-3"></i>土木工程',
        skill_civil_desc: "數值方法、電腦輔助工程 (CAE)、結構設計、材料力學、專案管理。",
        skill_cfd_title: '<i class="fa-solid fa-wind mr-3"></i>風洞實驗 (CFD)',
        skill_cfd_desc: "頻譜分析、模型試驗、流場模擬、氣動力分析、數值模擬優化。",
        skill_ai_title: '<i class="fa-solid fa-brain mr-3"></i>人工智慧',
        skill_ai_desc: "資料庫建構、自動化部署、雲端資安與合規、容器化叢集管理、AI 模型推論優化、機器學習。",
        portfolio_title: "專案作品",
        proj_1_title: "智慧型建築風振控制與結構性能優化系統", proj_1_desc: "整合深度學習算法與結構動力學理論，自動辨識高層建築之氣動不穩定區位。透過即時優化流場控制機制（如主動減振器參數），有效降低阻力係數達 32% 並抑制 25.5% 擾動強度。",
        proj_2_title: "高精度 CFD 建築流場模擬與空氣動力優化平台", proj_2_desc: "運用大渦模擬 ($LES$) 技術重建複雜大氣邊界層流場，深度解析建築物表面的壓力分布與尾流結構。透過數值模擬驗證各種氣動優化手段之功效，為抗風設計提供高精確度的數據支撐。",
        btn_view_project: "查看專案詳情",
        exp_title: "工作經驗",
        exp_1_role: "土木工程師", exp_1_meta: "2022 - Present | ABC 工程顧問公司",
        exp_1_desc: "<li>負責大型建築結構設計與分析，累積完成 15+ 專案。</li><li>導入 AI 輔助設計工具，提升團隊設計效率 30%。</li><li>優化 BIM 協作流程，大幅降低跨部門溝通成本。</li>",
        exp_2_role: "研究助理", exp_2_meta: "2020 - 2022 | XYZ 大學風工程中心",
        exp_2_desc: "<li>執行 CFD 模擬與風洞實驗，發表 3 篇學術論文。</li><li>開發 Python 自動化數據處理腳本，縮短分析時間 50%。</li>",

        // --- Updated Education (Chinese) ---
        edu_title: "教育背景",
        edu_1_degree: "土木工程碩士(風洞組)",
        edu_1_school: "淡江大學 | 2025 - 2026",
        edu_1_desc: "研究 : 流場控制與振動優化系統",

        edu_2_degree: "土木工程學士",
        edu_2_school: "淡江大學 | 2021 - 2025",
        edu_2_desc: "熱舞社美軒、專題競賽優勝",
        // ---------------------------

        certs_title: "專業認證", cert_1_name: "NVIDIA 深度學習認證", cert_1_desc: "深度學習技術認證", cert_2_name: "GOOGLE SKILL 認證", cert_2_desc: "國家高考及格",
        interests_title: "個人成就", int_1_name: "派尾之星歌唱組", int_1_rank: "第一名 (2025)", int_2_name: "西屯主委盃籃球", int_2_rank: "冠軍 (2020)",
        footer_title: "開始我們的合作", footer_desc: "無論是工程專案合作還是技術交流，歡迎隨時聯繫。"
    }
};

function setLanguage(lang) {
    // 儲存設定
    localStorage.setItem('pref_lang', lang);

    // 切換按鈕樣式
    document.getElementById('lang-tw').classList.toggle('active', lang === 'zh');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');

    // 替換文字
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// --- 初始化 ---
window.addEventListener('load', () => {
    // 載入動畫
    const progress = document.getElementById('progress');
    const loader = document.getElementById('loader');
    if (progress) {
        setTimeout(() => { progress.style.width = '50%'; }, 100);
        setTimeout(() => { progress.style.width = '100%'; }, 800);
        setTimeout(() => {
            loader.style.opacity = '0'; loader.style.visibility = 'hidden';
        }, 1500);
    }

    // 讀取語言設定
    const savedLang = localStorage.getItem('pref_lang') || 'zh';
    setLanguage(savedLang);
});

// ScrollSpy
const navLinks = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section, footer');
let isManualScrolling = false;

function setActive(element) {
    isManualScrolling = true;
    navLinks.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
    setTimeout(() => { isManualScrolling = false; }, 1000);
}

window.addEventListener('scroll', () => {
    if (isManualScrolling) return;
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 250)) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
});

// Canvas Animation
const canvas = document.getElementById('fluid-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    let mouse = { x: null, y: null };

    function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize); resize();
    window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });
    window.addEventListener('click', (e) => {
        particles.forEach(p => {
            const dx = p.x - e.x; const dy = p.y - e.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 300) {
                const force = (300 - distance) / 300;
                p.vx += (dx / distance) * force * 20; p.vy += (dy / distance) * force * 20;
            }
        });
    });

    class P {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w; this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.5; this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1; this.c = Math.random() > 0.5 ? '#66FCF1' : '#45A29E';
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            this.vx *= 0.98; this.vy *= 0.98;
            if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.05;
            if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.05;
            if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
        }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = this.c; ctx.fill(); }
    }
    for (let i = 0; i < 100; i++) particles.push(new P());

    function animate() {
        ctx.fillStyle = 'rgba(11, 12, 16, 0.1)'; ctx.fillRect(0, 0, w, h);
        particles.forEach(p => { p.update(); p.draw(); });
        particles.forEach((p1, i) => {
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                if (d < 100) {
                    ctx.beginPath(); ctx.strokeStyle = `rgba(102, 252, 241, ${0.1 - d / 1000})`;
                    ctx.lineWidth = 0.5; ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
                }
            }
            if (mouse.x) {
                const dMouse = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
                if (dMouse < 150) {
                    ctx.beginPath(); ctx.strokeStyle = `rgba(102, 252, 241, ${0.5 - dMouse / 300})`;
                    ctx.lineWidth = 1; ctx.moveTo(p1.x, p1.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }
    animate();
}
