// --- 翻譯資料庫 ---
const translations = {
    en: {
        nav_about: "About", nav_skills: "Skills", nav_portfolio: "Portfolio",
        nav_experience: "Experience", nav_education: "Education", nav_certs: "Certifications",
        nav_interests: "Interests", nav_contact: "Contact Me",
        hero_badge: "Hello, World! I'm Bruce",
        hero_title_1: "Cross-domain Engineering", hero_title_2: "AI Tech Expert",
        hero_desc: "Innovative R&D Engineer bridging the gap between physical engineering and AI. Expert in CFD simulation and high-precision sensor calibration in wind tunnel experiments. Leveraged Python/MATLAB to develop custom PSD and vibration analysis tools, and led optimization projects that resulted in a 32% drag reduction. Holder of Professional AI certificates issued by NVIDIA/Google, I aim to utilize N8N and Claude Skills to construct highly optimized R&D workflows, customizing AI Agents to achieve end-to-end automation from raw data to technical insights and decision-making suggestions. A collaborative problem-solver committed to improving manufacturing yield through data-driven precision.",
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

        // Exp 5 (Top)
        exp_5_role: "Teaching Assistant: Mechanics of Materials", exp_5_meta: "2025 – 2026 | Tamkang University",
        exp_5_desc: "<p>• Streamlined instructional workflows by implementing <span class='text-neon-cyan font-semibold'>Standard Operating Procedures (SOPs)</span>, significantly enhancing teaching efficiency and resource management.</p><p>• Visualized complex mechanical concepts through real-world case studies <span class='text-neon-cyan font-semibold'>(Simplifying Complex Concepts)</span>, boosting student comprehension and logical reasoning skills.</p>",

        // Exp 4
        exp_4_role: "Resident Performer (Lead Vocalist)", exp_4_meta: "2024 – 2025 | Golden Tulip Fab Hotel New Taipei",
        exp_4_desc: "<p>• Delivered high-stakes live performances, demonstrating exceptional <span class='text-neon-cyan font-semibold'>Resilience</span> and professional <span class='text-neon-cyan font-semibold'>Public Speaking</span> skills in a fast-paced hospitality environment.</p><p>• Cultivated <span class='text-neon-cyan font-semibold'>Strategic Networking</span> and engaged with high-profile stakeholders during large-scale corporate events.</p>",
        exp_4_award: '<a href="https://www.youtube.com" target="_blank" class="inline-flex items-center text-yellow-400 hover:text-yellow-300 text-sm font-bold transition-colors"><i class="fa-solid fa-trophy mr-2"></i> Award: Champion, Hwei-Zai Star Singing Competition (2025).</a>',

        // Exp 3
        exp_3_role: "International Student Basketball Coach", exp_3_meta: "2021 – 2025 | Taipei American School",
        exp_3_desc: "<p>• Facilitated <span class='text-neon-cyan font-semibold'>English-Only Instruction</span> for diverse groups, fostering <span class='text-neon-cyan font-semibold'>Cross-cultural Communication</span> and an inclusive learning environment.</p><p>• Cultivated a culture of <span class='text-neon-cyan font-semibold'>Accountability</span> and team synergy, designing collaborative mechanisms that improved overall team performance.</p>",

        // Exp 2
        exp_2_role: "Gymnastics Coach & Event Coordinator", exp_2_meta: "2018 – Present | Senior Home Care Center",
        exp_2_desc: "<p>• Orchestrated the planning and execution of outdoor activities with a rigorous focus on <span class='text-neon-cyan font-semibold'>Risk Mitigation</span> and process control <span class='text-neon-cyan font-semibold'>(Project Execution)</span>.</p><p>• Optimized curriculum experiences for senior citizens, showcasing advanced <span class='text-neon-cyan font-semibold'>Stakeholder Communication</span> and empathy-driven service design.</p>",

        // Exp 1
        exp_1_role: "Assistant Basketball Coach", exp_1_meta: "2018 – 2019 | THUHS Basketball Team",
        exp_1_desc: "<p>• Implemented <span class='text-neon-cyan font-semibold'>Data-driven Analytics</span> to evaluate player strengths, achieving <span class='text-neon-cyan font-semibold'>Role Optimization</span> through strategic positioning.</p><p>• Standardized training protocols (SOPs) to bolster team operational efficiency and tactical execution.</p>",
        exp_1_award: '<a href="https://www.facebook.com" target="_blank" class="inline-flex items-center text-yellow-400 hover:text-yellow-300 text-sm font-bold transition-colors"><i class="fa-solid fa-trophy mr-2"></i> Award: Champion, Taichung Xitun District Chairman\'s Cup Basketball Tournament (2020).</a>',

        // --- Updated Education (English) ---
        edu_title: "Education",
        edu_1_degree: "M.S. Civil Engineering<br> (Wind Tunnel Group)",
        edu_1_school: "Tamkang University | 2025 - 2026",
        edu_1_desc: "Research: Flow Control and Vibration Optimization System",

        edu_2_degree: "B.S. Civil Engineering",
        edu_2_school: "Tamkang University | 2021 - 2025",
        edu_2_desc: "Pop Dance Club Art Designer, Project Competition Winner",
        // ---------------------------

        certs_title: "Certifications", cert_1_name: "NVIDIA Deep Learning Certification", cert_1_desc: "Deep Learning Technology", cert_2_name: "GOOGLE SKILL Certification", cert_2_desc: "National Examination Qualified",
        interests_title: "Achievements", int_1_name: "Hwei-Zai Star Singing", int_1_rank: "1st Place (2025)", int_2_name: "Taichung Xitun District Chairman's Cup", int_2_rank: "Champion (2020)",
        footer_title: "Let's Work Together", footer_desc: "Feel free to contact me for collaboration or technical exchange."
    },
    zh: {
        nav_about: "關於我", nav_skills: "專業技能", nav_portfolio: "專案作品",
        nav_experience: "工作經驗", nav_education: "教育背景", nav_certs: "認證證照",
        nav_interests: "個人興趣", nav_contact: "聯絡我",
        hero_badge: "Hello, World! I'm Bruce",
        hero_title_1: "跨領域工程", hero_title_2: "AI 技術專家",
        hero_desc: "具備土木底蘊與 AI 跨域實力的研發工程師，擅長將 CFD 與結構振動問題透過 BigQuery 轉化為大規模分析模型 。曾主導格柵優化專案，達成 25.5% 擾動降幅與 32% 減阻成效，具備將數值模擬導入 ML 進行自動化分析的核心實力 。<br><br>持有 NVIDIA 與 Google Cloud 專業認證 ，精通運用 BigQuery ML 處理海量實驗數據並縮短特徵提取週期 。熟練 Docker 與 GKE 容器化部署 ，能將預測模型轉化為高可用服務，符合 MLOps 監控需求 。具備 LLM 服務化基礎，能利用 Prompt 與 Agent 框架開發工程數據轉譯助手 ，實現從原始數據到技術洞察的端到端自動化 。<br><br>致力於將 AI 導入工程工作流，憑藉嚴謹邏輯與溝通轉譯能力，為製程穩定與良率提升提供精準洞察，是具備開發下一代 AI 系統實力的高效協作者 。",
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

        // Exp 5 (Top)
        exp_5_role: "材料力學助教", exp_5_meta: "2025 – 2026 | 淡江大學",
        exp_5_desc: "<p>• 建立標準化教學流程 (SOP)，優化授課效率。</p><p>• 運用實例將 <span class='text-neon-cyan font-semibold'>複雜概念視覺化 (Simplifying Complex Concepts)</span>，提升學生邏輯理解力。</p>",

        // Exp 4
        exp_4_role: "駐唱表演嘉賓", exp_4_meta: "2024 – 2025 | 淡水將捷金鬱金香酒店",
        exp_4_desc: "<p>• 在高壓環境下進行現場演出，具備卓越的 <span class='text-neon-cyan font-semibold'>抗壓性與公開演說 (Public Speaking)</span> 能力。</p><p>• 透過大型活動經營商業人脈。</p>",
        exp_4_award: '<a href="https://www.youtube.com" target="_blank" class="inline-flex items-center text-yellow-400 hover:text-yellow-300 text-sm font-bold transition-colors"><i class="fa-solid fa-trophy mr-2"></i> 滬尾之星歌唱組 —— 第一名 (2025)</a>',

        // Exp 3
        exp_3_role: "國際學生籃球教練", exp_3_meta: "2021 – 2025 | 天母美國學校",
        exp_3_desc: "<p>• 執行 <span class='text-neon-cyan font-semibold'>全英語授課 (English-Only Instruction)</span>，具備流暢的跨文化溝通能力。</p><p>• 培養學生 <span class='text-neon-cyan font-semibold'>自主當責 (Accountability)</span> 態度，建立團隊協作機制。</p>",

        // Exp 2
        exp_2_role: "體操教練 & 活動策劃", exp_2_meta: "2018 – Present | 金老時居家護理所",
        exp_2_desc: "<p>• 負責戶外活動的 <span class='text-neon-cyan font-semibold'>專案規劃與執行 (Project Execution)</span>，確保流程風險控管。</p><p>• 針對高齡使用者優化課程體驗，展現 <span class='text-neon-cyan font-semibold'>用戶溝通 (Stakeholder Comm)</span> 能力。</p>",

        // Exp 1
        exp_1_role: "籃球助教", exp_1_meta: "2018 – 2019 | 東大附中籃球隊",
        exp_1_desc: "<p>• 導入數據化思維，分析球員優勢進行 <span class='text-neon-cyan font-semibold'>位置配置最佳化 (Role Optimization)</span>。</p><p>• 協助制定訓練 SOP，提升團隊執行效率。</p>",
        exp_1_award: '<a href="https://www.facebook.com" target="_blank" class="inline-flex items-center text-yellow-400 hover:text-yellow-300 text-sm font-bold transition-colors"><i class="fa-solid fa-trophy mr-2"></i> 台中市西屯主委盃籃球賽 —— 第一名 (2020)</a>',

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
        interests_title: "個人成就", int_1_name: "滬尾之星歌唱組", int_1_rank: "第一名 (2025)", int_2_name: "西屯主委盃籃球", int_2_rank: "冠軍 (2020)",
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
    for (let i = 0; i < 200; i++) particles.push(new P());

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
