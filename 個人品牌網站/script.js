// --- 翻譯資料庫 ---
const translations = {
    en: {
        nav_about: "About", nav_skills: "Skills", nav_portfolio: "Portfolio",
        nav_experience: "Experience", nav_education: "Education", nav_certs: "Certifications",
        nav_interests: "Interests", nav_contact: "Contact Me",
        hero_badge: "Hello, World! I'm Bruce",
        hero_title_1: "Cross-domain Engineering", hero_title_2: "AI-Driven R&D Engineer",
        hero_desc_intro: "Innovative R&D Engineer bridging the gap between physical engineering and AI. Expert in CFD simulation and high-precision sensor calibration in wind tunnel experiments. Leveraged Python/MATLAB to develop custom PSD and vibration analysis tools, and led optimization projects that resulted in a 32% drag reduction.",
        hero_desc_more: "Holder of Professional AI certificates issued by NVIDIA/Google, I aim to utilize N8N and Claude Skills to construct highly optimized R&D workflows, customizing AI Agents to achieve end-to-end automation from raw data to technical insights and decision-making suggestions. A collaborative problem-solver committed to improving manufacturing yield through data-driven precision.",
        btn_read_more: "Read more", btn_read_less: "Show less",
        stat_drag: "Drag Coefficient Reduction", stat_perturbation: "Perturbation Suppression", stat_certs: "Certifications & Courses", stat_gpa: "Master's GPA (4.0 scale)",
        about_title: "About Me",
        about_c1_title: "Cross-domain Integration", about_c1_desc: "Seamlessly integrating knowledge from Civil Engineering to AI technology to build unique competitiveness.",
        about_c2_title: "Innovative Thinking", about_c2_desc: "Utilizing innovative thinking and technical tools to effectively solve complex engineering challenges and improve work efficiency.",
        about_c3_title: "Diverse Development", about_c3_desc: "Singing champion and basketball captain. Pursuing excellence beyond the profession with strong team leadership.",

        about_detail_cross_1: "<strong class='text-white'>Building \"Sim-Ready\" simulations grounded in real mechanics</strong> — The closer a simulation environment is to the real world, the more meaningful its training and validation results are. With a solid foundation in structural, materials, and fluid mechanics, I build simulation environments that are physically grounded — not just numbers that happen to run.",
        about_detail_cross_2: "<strong class='text-white'>Automating repetitive R&D so I can focus on what AI can't solve</strong> — While specializing in AI, I design automation workflows for highly repetitive simulation/data-processing tasks, freeing up time to focus on extreme cases and edge conditions AI still can't handle on its own.",
        about_detail_cross_3: "<strong class='text-white'>What matters in a simulation result is physical meaning, not just a number</strong> — In robotics simulation, for example, it's easy to treat \"the code ran and produced output\" as the answer. I care more about how mechanics and fluid dynamics actually affect training outcomes — a simulation without physical meaning is just noise, however many numbers it produces.",
        about_detail_cross_4: "<strong class='text-white'>Few people combine deep mechanics with deep AI — that's exactly the ground I stand on</strong> — From setting up the physical environment to building the automated training pipeline, I can keep every layer both \"realistic enough\" and \"efficient enough\" — something a pure software background or a pure mechanics background can't do alone.",

        about_detail_innovate_1: "<strong class='text-white'>Every idea has to clear the \"market test\" first, not just \"sounds cool to me\"</strong> — Whenever a new idea comes up, I validate whether there's real demand and a real market before moving forward, so effort doesn't go into projects that only excite me.",
        about_detail_innovate_2: "<strong class='text-white'>Before building anything, I get AI to help me find my own blind spots</strong> — Once the direction is set, I talk it through with AI to surface what I don't know or haven't considered, clearing out risks that could send the project in the wrong direction before any real cost is sunk.",
        about_detail_innovate_3: "<strong class='text-white'>Frame first, then iterate step by step until every piece meets the bar</strong> — Once the direction is confirmed, I have AI scaffold an initial framework, then break it down step by step with a clear goal for each — anything off gets corrected on the spot until every step meets my standard.",
        about_detail_innovate_4: "<strong class='text-white'>Every validated workflow gets packaged into a skill — and tested against the original goal</strong> — Once every step checks out, I turn the whole workflow into a reusable automated skill, then immediately test whether its output matches the original goal. If not, back to the drawing board; if it matches, the skill is done.",

        about_detail_diverse_1: "<strong class='text-white'>Taichung Xitun District Chairman's Cup Basketball Tournament — Champion (2020)</strong> → Outstanding team leadership and steady decision-making resilience under high-pressure pace.",
        about_detail_diverse_2: "<strong class='text-white'>Hwei-Zai Star Singing Competition — Champion (2025)</strong> → Confident public expression and strong stage presence.",
        about_detail_diverse_3: "<strong class='text-white'>Teaching isn't just explaining — it's breaking hard ideas down until they click</strong> — As a Teaching Assistant for Mechanics of Materials, I built standardized instructional workflows (SOPs) to improve teaching efficiency and used real-world examples to visualize complex concepts, directly boosting student comprehension.",
        about_detail_diverse_4: "<strong class='text-white'>Cross-cultural communication forged through fully English-language instruction</strong> — As an international student basketball coach, I taught entirely in English while cultivating a culture of accountability in students and building a repeatable framework for team collaboration.",
        about_detail_diverse_5: "<strong class='text-white'>Even when the audience is elderly, risk and experience still come first</strong> — As a gymnastics coach and event coordinator, I managed the planning, execution, and risk control of outdoor activities, and optimized the program experience for senior participants — communication driven by empathy.",

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
        proj_3_title: "AI-Powered Job Application System", proj_3_desc: "An end-to-end job-hunting workflow built with Claude Code: automated job discovery & verification, tailored resumes and cover letters, and self-updating schedulers. Produced tailored application packages for 60+ companies with a built-in anti-fabrication integrity check.",
        btn_view_project: "View Project Details",
        btn_download_resume: "Download Resume (PDF)",
        exp_title: "Experience",

        // Exp 5 (Top)
        exp_5_role: "Teaching Assistant: Mechanics of Materials", exp_5_meta: "2025 – 2026 | Tamkang University",
        exp_5_desc: "<p>• Streamlined instructional workflows by implementing <span class='text-neon-cyan font-semibold'>Standard Operating Procedures (SOPs)</span>, significantly enhancing teaching efficiency and resource management.</p><p>• Visualized complex mechanical concepts through real-world case studies <span class='text-neon-cyan font-semibold'>(Simplifying Complex Concepts)</span>, boosting student comprehension and logical reasoning skills.</p>",

        // Exp 4
        exp_4_role: "Resident Performer (Lead Vocalist)", exp_4_meta: "2024 – 2025 | Golden Tulip Fab Hotel New Taipei",
        exp_4_desc: "<p>• Delivered high-stakes live performances, demonstrating exceptional <span class='text-neon-cyan font-semibold'>Resilience</span> and professional <span class='text-neon-cyan font-semibold'>Public Speaking</span> skills in a fast-paced hospitality environment.</p><p>• Cultivated <span class='text-neon-cyan font-semibold'>Strategic Networking</span> and engaged with high-profile stakeholders during large-scale corporate events.</p>",
        exp_4_award: '<span class="inline-flex items-center text-yellow-400 text-sm font-bold"><i class="fa-solid fa-trophy mr-2"></i> Award: Champion, Hwei-Zai Star Singing Competition (2025).</span>',

        // Exp 3
        exp_3_role: "International Student Basketball Coach", exp_3_meta: "2021 – 2025 | Taipei American School",
        exp_3_desc: "<p>• Facilitated <span class='text-neon-cyan font-semibold'>English-Only Instruction</span> for diverse groups, fostering <span class='text-neon-cyan font-semibold'>Cross-cultural Communication</span> and an inclusive learning environment.</p><p>• Cultivated a culture of <span class='text-neon-cyan font-semibold'>Accountability</span> and team synergy, designing collaborative mechanisms that improved overall team performance.</p>",

        // Exp 2
        exp_2_role: "Gymnastics Coach & Event Coordinator", exp_2_meta: "2018 – Present | Senior Home Care Center",
        exp_2_desc: "<p>• Orchestrated the planning and execution of outdoor activities with a rigorous focus on <span class='text-neon-cyan font-semibold'>Risk Mitigation</span> and process control <span class='text-neon-cyan font-semibold'>(Project Execution)</span>.</p><p>• Optimized curriculum experiences for senior citizens, showcasing advanced <span class='text-neon-cyan font-semibold'>Stakeholder Communication</span> and empathy-driven service design.</p>",

        // Exp 1
        exp_1_role: "Assistant Basketball Coach", exp_1_meta: "2018 – 2019 | THUHS Basketball Team",
        exp_1_desc: "<p>• Implemented <span class='text-neon-cyan font-semibold'>Data-driven Analytics</span> to evaluate player strengths, achieving <span class='text-neon-cyan font-semibold'>Role Optimization</span> through strategic positioning.</p><p>• Standardized training protocols (SOPs) to bolster team operational efficiency and tactical execution.</p>",
        exp_1_award: '<span class="inline-flex items-center text-yellow-400 text-sm font-bold"><i class="fa-solid fa-trophy mr-2"></i> Award: Champion, Taichung Xitun District Chairman\'s Cup Basketball Tournament (2020).</span>',

        // --- Updated Education (English) ---
        edu_title: "Education",
        edu_1_degree: "M.S. Civil Engineering<br> (Wind Tunnel Group)",
        edu_1_school: "Tamkang University | 2025 - 2026",
        edu_1_desc: "Research: Flow Control and Vibration Optimization System",

        edu_2_degree: "B.S. Civil Engineering",
        edu_2_school: "Tamkang University | 2021 - 2025",
        edu_2_desc: "Pop Dance Club Art Designer, Project Competition Winner",
        // ---------------------------

        certs_title: "Certifications",
        cert_nvidia_name: "NVIDIA Deep Learning Certification", cert_nvidia_desc: "Transformer NLP, Jetson Nano, Isaac Sim robotics simulation & more — 4 official certificates, 16 courses completed",
        cert_google_name: "GOOGLE SKILL Certification", cert_google_desc: "Google Career Certificates Program certificates · 72 certifications & courses across Cloud Skills Boost, Credly and Skillshop (BigQuery, Kubernetes, Gemini for Workspace, etc.)",
        cert_anthropic_name: "ANTHROPIC ACADEMY Certification", cert_anthropic_desc: "Claude Code 101, Model Context Protocol (MCP) — official course completions",
        cert_microsoft_name: "MICROSOFT Certification", cert_microsoft_desc: "Microsoft Learn profile — 2 trophies, 12 badges (Azure, AI agent development, etc.)",
        cert_mathworks_name: "MATHWORKS Certification", cert_mathworks_desc: "Deep Learning Onramp course certificate",
        cert_tku_name: "Tamkang University AI Innovation College Training Certificates", cert_tku_desc: "Azure AI Engineer certification course, Multimodal AI Applications hands-on workshop",
        cert_other_name: "Other Institutional Courses", cert_other_desc: "Institute for Information Industry \"Riding the AI Wave\" certificate, AI Business Applications & Smart Education Platform workshop",
        interests_title: "Achievements", int_1_name: "Hwei-Zai Star Singing", int_1_rank: "1st Place (2025)", int_2_name: "Taichung Xitun District Chairman's Cup", int_2_rank: "Champion (2020)",
        footer_title: "Let's Work Together", footer_desc: "Feel free to contact me for collaboration or technical exchange."
    },
    zh: {
        nav_about: "關於我", nav_skills: "專業技能", nav_portfolio: "專案作品",
        nav_experience: "工作經驗", nav_education: "教育背景", nav_certs: "認證證照",
        nav_interests: "個人興趣", nav_contact: "聯絡我",
        hero_badge: "Hello, World! I'm Bruce",
        hero_title_1: "跨領域工程", hero_title_2: "AI 應用研發",
        hero_desc_intro: "具備土木底蘊與 AI 跨域實力的研發工程師，擅長將 CFD 與結構振動問題透過 BigQuery 轉化為大規模分析模型。曾主導格柵優化專案，達成 25.5% 擾動降幅與 32% 減阻成效，具備將數值模擬導入 ML 進行自動化分析的核心實力。",
        hero_desc_more: "持有 NVIDIA 與 Google Cloud 專業認證，精通運用 BigQuery ML 處理海量實驗數據並縮短特徵提取週期。熟練 Docker 與 GKE 容器化部署，能將預測模型轉化為高可用服務，符合 MLOps 監控需求。具備 LLM 服務化基礎，能利用 Prompt 與 Agent 框架開發工程數據轉譯助手，實現從原始數據到技術洞察的端到端自動化。<br><br>致力於將 AI 導入工程工作流，憑藉嚴謹邏輯與溝通轉譯能力，為製程穩定與良率提升提供精準洞察，是具備開發下一代 AI 系統實力的高效協作者。",
        btn_read_more: "閱讀更多", btn_read_less: "收起",
        stat_drag: "阻力係數降低", stat_perturbation: "擾動強度抑制", stat_certs: "認證與課程紀錄", stat_gpa: "碩士 GPA（滿分4.0）",
        about_title: "關於我",
        about_c1_title: "跨領域整合", about_c1_desc: "從土木工程到 AI 技術，無縫整合不同領域知識，打造獨特競爭力。",
        about_c2_title: "創新思維", about_c2_desc: "運用創新思維與技術工具，有效解決複雜的工程與技術挑戰，提升工作效率。",
        about_c3_title: "多元發展", about_c3_desc: "歌唱冠軍、籃球隊長，在專業之外同樣追求卓越，具備團隊領導力。",

        about_detail_cross_1: "<strong class='text-white'>土木力學根底，是我做「Sim-Ready」模擬的底氣</strong> — 模擬環境越貼近真實世界，訓練與驗證出來的結果才越有意義；憑藉結構力學、材料力學、流體力學的紮實基礎，我能從物理層面架設更接近真實的模擬環境，而不只是讓數字「跑得出來」。",
        about_detail_cross_2: "<strong class='text-white'>把重複性研發流程自動化，把時間留給 AI 解不了的難題</strong> — 專研 AI 的同時，我會把高重複性的模擬／資料處理流程設計成自動化工作流，省下的研發時間拿去專注處理那些極端案例與邊界條件 —— AI 目前還無法自己搞定的部分。",
        about_detail_cross_3: "<strong class='text-white'>看模擬結果，我在意的是有沒有物理意義，不是有沒有跑出數字</strong> — 以機器人模擬為例，多數人容易把「程式跑得出結果」當成答案；我更在意力學與流體力學等物理性質對訓練成效的實際影響，因為沒有物理意義的模擬，再多數字都是假的。",
        about_detail_cross_4: "<strong class='text-white'>同時懂力學、懂 AI 的人不多，這個位置只有跨領域的人站得住</strong> — 從物理環境架設到自動化訓練流程，每一層都能同時顧到「夠真實」與「夠有效率」，這不是純軟體背景或純力學背景各自能做到的事。",

        about_detail_innovate_1: "<strong class='text-white'>想法一定要先過「市場關」，不是自己覺得酷就做</strong> — 每次冒出一個新想法，我會先驗證是不是真的有需求、有市場，通過這關才會往下走，避免把力氣花在自嗨的專案上。",
        about_detail_innovate_2: "<strong class='text-white'>動工前，先跟 AI 把自己的盲點問清楚</strong> — 確認方向後，我會先與 AI 溝通、釐清自己不懂或沒想到的地方，把可能導致方向錯誤的風險先排除，避免砸了成本才發現走錯路。",
        about_detail_innovate_3: "<strong class='text-white'>先出框架，再逐步驟訂目標、當場要求修到滿意為止</strong> — 方向確定後請 AI 架好初始框架，再一步步拆解每個步驟訂出明確目標，哪裡不對就當場要求修改，直到每一步都達到我要的標準。",
        about_detail_innovate_4: "<strong class='text-white'>把驗證過的流程收斂成一個 skill，而且一定要自己先實測過</strong> — 每個步驟都滿意後，我會把整套流程寫成可重複使用的自動化 skill；寫完馬上實測產出是否符合當初設定的目標，不一致就回頭修，一致才算真正完成。",

        about_detail_diverse_1: "<strong class='text-white'>台中市西屯主委盃籃球賽 冠軍（2020）</strong> → 卓越團隊領導力，具備高壓節奏下穩定的決策韌性。",
        about_detail_diverse_2: "<strong class='text-white'>滬尾之星歌唱組 冠軍（2025）</strong> → 具備自信公眾表達，以及高渲染力。",
        about_detail_diverse_3: "<strong class='text-white'>教學不只是教，而是把難懂的東西拆解到聽得懂</strong> — 擔任材料力學助教期間，建立標準化教學流程（SOP）提升授課效率，並運用實例將複雜的力學概念視覺化，直接反映在學生的理解力上。",
        about_detail_diverse_4: "<strong class='text-white'>全英語授課磨出來的跨文化溝通力</strong> — 擔任國際學生籃球教練，全程英語授課，同時培養學生自主當責（Accountability）的態度，建立起可複製的團隊協作機制。",
        about_detail_diverse_5: "<strong class='text-white'>連對象是長輩，也要顧好風險與體驗</strong> — 擔任體操教練與活動策劃，負責戶外活動的專案規劃與執行、風險控管，並針對高齡使用者優化課程體驗，展現同理心驅動的溝通能力。",

        skills_title: "專業技能",
        skill_civil_title: '<i class="fa-solid fa-wrench mr-3"></i>土木工程',
        skill_civil_desc: "數值方法、電腦輔助工程 (CAE)、結構設計、材料力學、專案管理。",
        skill_cfd_title: '<i class="fa-solid fa-wind mr-3"></i>風洞實驗 (CFD)',
        skill_cfd_desc: "頻譜分析、模型試驗、流場模擬、氣動力分析、數值模擬優化。",
        skill_ai_title: '<i class="fa-solid fa-brain mr-3"></i>人工智慧',
        skill_ai_desc: "資料庫建構、自動化部署、雲端資安與合規、容器化叢集管理、AI 模型推論優化、機器學習。",
        portfolio_title: "專案作品",
        proj_1_title: "智慧型建築風振控制與結構性能優化系統", proj_1_desc: "整合深度學習算法與結構動力學理論，自動辨識高層建築之氣動不穩定區位。透過即時優化流場控制機制（如主動減振器參數），有效降低阻力係數達 32% 並抑制 25.5% 擾動強度。",
        proj_2_title: "高精度 CFD 建築流場模擬與空氣動力優化平台", proj_2_desc: "運用大渦模擬 (LES) 技術重建複雜大氣邊界層流場，深度解析建築物表面的壓力分布與尾流結構。透過數值模擬驗證各種氣動優化手段之功效，為抗風設計提供高精確度的數據支撐。",
        proj_3_title: "AI 自動求職系統", proj_3_desc: "用 Claude Code 打造端到端自動求職工作流：自動搜尋並核實職缺、客製履歷與求職信、排程自我更新。已為 60+ 家企業產出客製投遞包，全程內建反造假核實機制。",
        btn_view_project: "查看專案詳情",
        btn_download_resume: "下載履歷 PDF",
        exp_title: "工作經驗",

        // Exp 5 (Top)
        exp_5_role: "材料力學助教", exp_5_meta: "2025 – 2026 | 淡江大學",
        exp_5_desc: "<p>• 建立標準化教學流程 (SOP)，優化授課效率。</p><p>• 運用實例將 <span class='text-neon-cyan font-semibold'>複雜概念視覺化 (Simplifying Complex Concepts)</span>，提升學生邏輯理解力。</p>",

        // Exp 4
        exp_4_role: "駐唱表演嘉賓", exp_4_meta: "2024 – 2025 | 淡水將捷金鬱金香酒店",
        exp_4_desc: "<p>• 在高壓環境下進行現場演出，具備卓越的 <span class='text-neon-cyan font-semibold'>抗壓性與公開演說 (Public Speaking)</span> 能力。</p><p>• 透過大型活動經營商業人脈。</p>",
        exp_4_award: '<span class="inline-flex items-center text-yellow-400 text-sm font-bold"><i class="fa-solid fa-trophy mr-2"></i> 滬尾之星歌唱組 —— 第一名 (2025)</span>',

        // Exp 3
        exp_3_role: "國際學生籃球教練", exp_3_meta: "2021 – 2025 | 天母美國學校",
        exp_3_desc: "<p>• 執行 <span class='text-neon-cyan font-semibold'>全英語授課 (English-Only Instruction)</span>，具備流暢的跨文化溝通能力。</p><p>• 培養學生 <span class='text-neon-cyan font-semibold'>自主當責 (Accountability)</span> 態度，建立團隊協作機制。</p>",

        // Exp 2
        exp_2_role: "體操教練 & 活動策劃", exp_2_meta: "2018 – Present | 金老時居家護理所",
        exp_2_desc: "<p>• 負責戶外活動的 <span class='text-neon-cyan font-semibold'>專案規劃與執行 (Project Execution)</span>，確保流程風險控管。</p><p>• 針對高齡使用者優化課程體驗，展現 <span class='text-neon-cyan font-semibold'>用戶溝通 (Stakeholder Comm)</span> 能力。</p>",

        // Exp 1
        exp_1_role: "籃球助教", exp_1_meta: "2018 – 2019 | 東大附中籃球隊",
        exp_1_desc: "<p>• 導入數據化思維，分析球員優勢進行 <span class='text-neon-cyan font-semibold'>位置配置最佳化 (Role Optimization)</span>。</p><p>• 協助制定訓練 SOP，提升團隊執行效率。</p>",
        exp_1_award: '<span class="inline-flex items-center text-yellow-400 text-sm font-bold"><i class="fa-solid fa-trophy mr-2"></i> 台中市西屯主委盃籃球賽 —— 第一名 (2020)</span>',

        // --- Updated Education (Chinese) ---
        edu_title: "教育背景",
        edu_1_degree: "土木工程碩士(風洞組)",
        edu_1_school: "淡江大學 | 2025 - 2026",
        edu_1_desc: "研究 : 流場控制與振動優化系統",

        edu_2_degree: "土木工程學士",
        edu_2_school: "淡江大學 | 2021 - 2025",
        edu_2_desc: "熱舞社美軒、專題競賽優勝",
        // ---------------------------

        certs_title: "專業認證",
        cert_nvidia_name: "NVIDIA 深度學習認證", cert_nvidia_desc: "Transformer NLP、Jetson Nano、Isaac Sim 機器人模擬等，4 張正式證書．16 門課程完課",
        cert_google_name: "GOOGLE SKILL 認證", cert_google_desc: "數位人才探索計畫結業證書．橫跨 Cloud Skills Boost、Credly、Skillshop 共 72 項認證與課程紀錄（BigQuery、Kubernetes、Gemini for Workspace 等）",
        cert_anthropic_name: "ANTHROPIC ACADEMY 認證", cert_anthropic_desc: "Claude Code 101、Model Context Protocol (MCP) 官方課程完課",
        cert_microsoft_name: "MICROSOFT 認證", cert_microsoft_desc: "Microsoft Learn 個人學習檔案，2 座獎盃．12 個徽章（Azure、AI 代理程式開發等）",
        cert_mathworks_name: "MATHWORKS 認證", cert_mathworks_desc: "Deep Learning Onramp 課程證書",
        cert_tku_name: "淡江大學 AI 創智學院研習證明", cert_tku_desc: "Azure AI 工程師認證課程、多模態 AI 應用實作工作坊",
        cert_other_name: "其他機構課程", cert_other_desc: "資策會「駕馭 AI 新浪潮」結業證書、AI 商務應用與智慧教育平台工作坊",
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

    // 語言切換後，讓「閱讀更多／收起」按鈕文字符合目前展開狀態
    syncHeroDescToggleLabel(lang);
}

// --- Hero 簡介展開／收合 ---
function syncHeroDescToggleLabel(lang) {
    const more = document.getElementById('hero-desc-more');
    const toggle = document.getElementById('hero-desc-toggle');
    if (!more || !toggle) return;
    const expanded = !more.classList.contains('hidden');
    toggle.querySelector('span').textContent = expanded ? translations[lang].btn_read_less : translations[lang].btn_read_more;
    toggle.querySelector('i').classList.toggle('fa-chevron-down', !expanded);
    toggle.querySelector('i').classList.toggle('fa-chevron-up', expanded);
}

function toggleHeroDesc() {
    const more = document.getElementById('hero-desc-more');
    more.classList.toggle('hidden');
    const lang = localStorage.getItem('pref_lang') || 'zh';
    syncHeroDescToggleLabel(lang);
}

// --- 關於我 卡片點擊展開 ---
const ABOUT_KEYS = ['cross', 'innovate', 'diverse'];

function toggleAboutDetail(key) {
    const panel = document.getElementById('about-detail-panel');
    const isExpanded = panel.classList.contains('about-detail-expanded');
    const currentKey = panel.dataset.current;

    if (isExpanded && currentKey === key) {
        // 再點一次同一張卡：收合
        panel.classList.remove('about-detail-expanded');
        panel.dataset.current = '';
        setAboutCardActive(null);
        return;
    }

    ABOUT_KEYS.forEach(k => {
        document.getElementById('about-detail-' + k).classList.toggle('hidden', k !== key);
    });
    panel.classList.add('about-detail-expanded');
    panel.dataset.current = key;
    setAboutCardActive(key);
}

function setAboutCardActive(activeKey) {
    ABOUT_KEYS.forEach(k => {
        const card = document.getElementById('about-card-' + k);
        const chevron = document.getElementById('about-chevron-' + k);
        const active = k === activeKey;
        card.classList.toggle('ring-2', active);
        card.classList.toggle('ring-neon-cyan', active);
        chevron.classList.toggle('fa-chevron-down', !active);
        chevron.classList.toggle('fa-chevron-up', active);
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
