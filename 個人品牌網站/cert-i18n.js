// --- 認證分頁共用雙語字典 ---
// 課程名、機構名、證書編號等專有名詞保持原文；說明性文案（標題、圖說、按鈕）翻譯。
const CERT_TRANSLATIONS = {
    en: {
        back_home: "Back to Home",

        // NVIDIA
        nvidia_page_title: "NVIDIA Deep Learning Certification - Bruce Kuo",
        nvidia_h1: "NVIDIA Deep Learning Certification",
        nvidia_intro: "Original screenshots of all official certificates and course completion records, all earned by cheng an kuo (Bruce Kuo) himself.",
        nvidia_link1: "Visit NVIDIA Deep Learning Institute (login required for personal records)",
        nvidia_h2_1: "Official Certificates (Certificate of Competency)",
        nvidia_cap_1: "Building Transformer-Based Natural Language Processing Applications — 2026/06/11",
        nvidia_cap_2: "Getting Started with Deep Learning — 2026/05/30",
        nvidia_cap_3: "Getting Started with AI on Jetson Nano — 2025/09/20",
        nvidia_cap_4: "Disaster Risk Monitoring Using Satellite Imagery (NVIDIA × UNITAR/UNOSAT) — 2025/10/05",
        nvidia_h2_2: "100% Course Completion · Isaac Sim / ROS Series (no separate certificate)",
        nvidia_cap_5: "An Introduction to AI-Based Robot Development With Isaac ROS",
        nvidia_cap_6: "Synthetic Data Generation for Perception Model Training in Isaac Sim",
        nvidia_cap_7: "Developing Robots With Software-in-the-Loop (SIL) in Isaac Sim",
        nvidia_cap_8: "Leveraging ROS 2 and Hardware-in-the-Loop (HIL) in Isaac Sim",
        nvidia_cap_9: "Ingesting Robot Assets and Simulating Your Robot in Isaac Sim",
        nvidia_h2_3: "NVIDIA DLI Short Course Completions (100% complete, no individual certificate issued)",
        nvidia_cap_10: "Generative AI Explained, Agentic AI Explained, Building A Brain in 10 Minutes and 8 other short courses (11 total)",

        // Google
        google_page_title: "GOOGLE SKILL Certification - Bruce Kuo",
        google_h1: "GOOGLE SKILL Certification",
        google_intro: "Original screenshots of all certificates of completion, skill badges and course completion records, all earned by cheng an kuo (Bruce Kuo) himself.",
        google_link1: "View verified badges on Credly (no login required)",
        google_link2: "Visit Google Cloud Skills Boost (login required for personal records)",
        google_h2_1: "Google Career Certificates Program · Certificates of Completion",
        google_cap_1: "AI for Generalists — Certificate ID 1OCR2FFD (English version)",
        google_cap_2: "AI Workplace Literacy Program Certificate of Completion — Certificate ID 1OCR2FFD (Chinese version)",
        google_cap_3: "Google Cloud — Certificate ID 1OCR2FFD (English version)",
        google_cap_4: "Google Cloud Certificate of Completion — Certificate ID 1OCR2FFD (Chinese version)",
        google_h2_2: "Google Cloud Skill Badges (Credly-verified)",
        google_cap_5_pre: "Credly Badge Wallet — 8 skill badges (Prompt Design in Vertex AI, Analyze BigQuery Data in Connected Sheets, Classify Images with TensorFlow, Derive Insights from BigQuery Data, Get Started with Google Workspace Tools, Integrate BigQuery Data and Google Workspace using Apps Script, Manage Kubernetes in Google Cloud, Secure BigLake Data) — ",
        google_cap_5_link: "View on Credly",
        google_h2_3: "Google Cloud Skills Boost — \"My Learning\" Completions (68 total)",
        google_note1: "The 12 screenshots below are the complete \"My Learning\" record (Oct 2025 – Jun 2026), each containing 6 completed courses/badges.",
        google_cap_6: "Skill Wallet — official skill tags automatically compiled from the courses/badges above",
        google_h2_4: "Other Google Certifications",
        google_cap_7: "AI-Powered Performance Certification (Google Ads) — Google (Skillshop), issued 2026/06/25, expires 2027/06/25",
        google_cap_8: "Getting Started with Google Kubernetes Engine — iSpan × Google Cloud, Taipei, 2025/11/06",

        // Anthropic
        anthropic_page_title: "ANTHROPIC ACADEMY Certification - Bruce Kuo",
        anthropic_h1: "ANTHROPIC ACADEMY Certification",
        anthropic_intro: "Anthropic Academy course completion records (the platform currently has no public, downloadable certificate page — the screenshot below is the completion record).",
        anthropic_link1: "Visit Anthropic Academy (login required to view personal completion records)",
        anthropic_cap_1: "Claude Code 101, Model Context Protocol (MCP)",

        // MathWorks
        mathworks_page_title: "MATHWORKS Certification - Bruce Kuo",
        mathworks_h1: "MATHWORKS Certification",
        mathworks_intro: "Original screenshot of the course certificate, earned by cheng an kuo (Bruce Kuo) himself.",
        mathworks_cap_1: "Deep Learning Onramp — MathWorks Training Services, 100% completed, 2025/08/16",

        // TKU
        tku_page_title: "Tamkang University AI Innovation College Training Certificates - Bruce Kuo",
        tku_h1: "Tamkang University AI Innovation College Training Certificates",
        tku_intro: "Original screenshots of the training certificates, earned by Bruce Kuo himself.",
        tku_cap_1: "[AI-102] Microsoft-Certified Online Course: How to Become an Azure AI Engineer? — 6-hour training, 2026/06/18, Doc No. 11420012",
        tku_cap_2: "[AI Hands-on Workshop]: Multimodal AI Applications — 2-hour training, 2026/06/18, Doc No. 11420272",

        // Other
        other_page_title: "Other Institutional Courses - Bruce Kuo",
        other_h1: "Other Institutional Courses",
        other_intro: "Original screenshots of the certificates of completion, earned by Bruce Kuo himself.",
        other_cap_1: "Left: Institute for Information Industry (III) Certificate of Completion \"Riding the AI Wave – Introduction to Google AI Applications\" (organized by Taipei City Dept. of Youth Affairs, 15 hours, 2025/06/14–15, Certificate No. (114)TPYDIII NO.148) / Right: AI Business Applications & Smart Education Platform Workshop Certificate of Completion (7 hours, completed 2025/12/18, Certificate No. TB00032)",

        // Microsoft
        microsoft_page_title: "MICROSOFT Certification - Bruce Kuo",
        microsoft_h1: "MICROSOFT Certification",
        microsoft_intro: "Microsoft Learn personal learning profile, earned by Bruce Kuo himself — public page, no login required.",
        microsoft_link1: "View full profile on Microsoft Learn (no login required)",
        microsoft_h2_1: "Trophies",
        microsoft_trophy_1: "Build AI Agents with Microsoft Foundry (Microsoft Applied Skills) — completed 2026/05/11",
        microsoft_trophy_2: "Introduction to Azure database management — completed 2026/05/10",
        microsoft_h2_2: "Badges (12 total)",
        microsoft_badge_1: "Configure storage accounts — 2026/05/13",
        microsoft_badge_2: "Configure virtual networks — 2026/05/13",
        microsoft_badge_3: "Understand Microsoft Entra ID — 2026/05/13",
        microsoft_badge_4: "Introduction to Azure Cloud Shell — 2026/05/13",
        microsoft_badge_5: "Build a multimodal analysis solution with Azure Content Understanding — 2026/05/12",
        microsoft_badge_6: "Analyze images — 2026/05/12",
        microsoft_badge_7: "Use Azure Language to analyze text in Foundry tools — 2026/05/11",
        microsoft_badge_8: "Get started with AI agent development on Azure — 2026/05/11",
        microsoft_badge_9: "Use imperative development techniques for canvas apps in Power Apps — 2026/05/10",
        microsoft_badge_10: "Prepare to maintain SQL Server-based databases on Azure — 2026/05/10",
        microsoft_badge_11: "Introduction to generative AI and agents — 2026/05/10",
        microsoft_badge_12: "AI concepts introduction — 2026/05/07",

        // AI Job Application System
        autojob_page_title: "AI-Powered Job Application System - Bruce Kuo",
        autojob_h1: "AI-Powered Job Application System",
        autojob_subtitle: "An end-to-end job-hunting automation workflow built with Claude Code — humans make every decision.",
        autojob_stat_1: "Companies with tailored resumes & cover letters",
        autojob_stat_2: "Fully automated schedulers",
        autojob_stat_3_value: "Dozens",
        autojob_stat_3: "Verified active job postings",
        autojob_stat_4: "Tailored resumes passed integrity QA",
        autojob_philosophy_title: "Development Philosophy",
        autojob_phil_1_title: "Humans decide, the system repeats",
        autojob_phil_1_desc: "Every time-consuming, repetitive step (searching, verifying, formatting, checking) is automated; every key decision (apply or not, hit submit or not) always stays with the human. The system gets everything ready right up to the submit button — but I'm the one who clicks it.",
        autojob_phil_2_title: "Honesty is architecture, not willpower",
        autojob_phil_2_desc: "Preventing fabrication isn't a matter of self-discipline — the rule \"honesty overrides ATS score\" is built directly into the system: every resume claim is automatically checked against a verified record of real experience, so every output is honest by design.",
        autojob_phil_3_title: "Gaps get built, not written around",
        autojob_phil_3_desc: "When the system spots a gap in my resume, it doesn't reword its way around it — it turns the gap into a to-do project, and only after real results exist does it go into the resume.",
        autojob_timeline_title: "How It Was Built",
        autojob_step_1_title: "Step 1｜Build the Record of Experience",
        autojob_step_1_desc: "First, skills, certifications, work history, and job preferences were organized into one structured \"single source of truth.\" Every job-fit score, resume customization, and anti-fabrication check since then is based on this record.",
        autojob_step_2_title: "Step 2｜Job Search & Verification",
        autojob_step_2_desc: "Built a search workflow with Claude Code: automatically search for job openings, verify each one is genuinely active, and filter out hard blockers like visa/citizenship/military-service requirements (e.g., US-citizen-only postings are excluded outright). Each surviving listing gets a 0–100 fit score written to a tracking board, turning \"who to apply to, in what order\" into one ranked action list.",
        autojob_step_3_title: "Step 3｜Customization Pipeline",
        autojob_step_3_desc: "Paste in a job posting, and the system automatically matches the JD against the record of experience, producing a tailored resume, cover letter, role analysis, and a complete application package — checked for ATS (applicant tracking system) compatibility.",
        autojob_step_4_title: "Step 4｜Integrity Safeguard",
        autojob_step_4_desc: "Anti-fabrication rules and an integrity QA pass are built into the pipeline: skills the JD asks for but I don't actually have are never padded in — they're automatically turned into a to-do list to genuinely go build. All 60+ tailored resumes have passed verification with zero fabrication.",
        autojob_step_5_title: "Step 5｜Full Automation",
        autojob_step_5_desc: "Finally, the whole workflow was put on a schedule: every Monday it automatically searches for new openings and writes them to the board; every month it automatically checks for newly earned certifications and updates the record of experience. The system went from being a \"tool\" to a \"job-search assistant that grows itself without anyone watching it.\"",
        autojob_step_6_title: "Step 6｜A Real Project Grown From a Gap",
        autojob_step_6_desc: "The system flagged a gap — no hands-on machine learning project — so real wind-tunnel experimental data from my thesis (55 test cases, 288 pressure taps) was used to build an ML surrogate model, achieving R²=0.84 for full-field reconstruction from 10 sensors and R²=0.99 for full-field prediction, with every number checked under leakage-free cross-validation and an adversarial audit — the gap itself became the starting point for the next real project.",
        autojob_summary_title: "Results at a Glance",
        autojob_summary_list: "<div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-cyan-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">End-to-end job application system</strong> — a full pipeline from \"search jobs → verify → track → tailor resumes → produce application packages,\" already used to produce tailored resumes and cover letters for 60+ companies.</p></div><div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-blue-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">Automated scheduling agents</strong> — weekly job search and monthly certification review, keeping the system self-updating.</p></div><div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-purple-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">One-click tailored resumes and cover letters</strong> — automatically matches the JD against the record of experience to produce a CV, cover letter, role analysis, and application package, checked against ATS.</p></div><div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-green-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">Automatic eligibility checks before applying</strong> — visa/citizenship/military-service hard requirements are filtered out automatically, so no time is wasted on structurally impossible applications.</p></div><div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-orange-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">Integrity safeguard</strong> — \"honesty overrides ATS score\" is built into the pipeline; all 60+ tailored resumes passed integrity QA with zero fabrication.</p></div><div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-pink-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">A real project grown from a gap</strong> — an ML surrogate model built on real wind-tunnel data: R²=0.84 full-field reconstruction from 10 sensors, R²=0.99 full-field prediction.</p></div>",
    },
    zh: {
        back_home: "返回首頁",

        // NVIDIA
        nvidia_page_title: "NVIDIA 深度學習認證 - 郭正安 Bruce",
        nvidia_h1: "NVIDIA 深度學習認證",
        nvidia_intro: "以下為所有正式證書與課程完課紀錄的原始截圖，皆為 cheng an kuo（郭正安）本人取得。",
        nvidia_link1: "前往 NVIDIA Deep Learning Institute（需登入查看個人紀錄）",
        nvidia_h2_1: "正式證書（Certificate of Competency）",
        nvidia_cap_1: "建造以 Transformer 為基礎的自然語言處理應用 — 2026/06/11",
        nvidia_cap_2: "Getting Started with Deep Learning — 2026/05/30",
        nvidia_cap_3: "Getting Started with AI on Jetson Nano — 2025/09/20",
        nvidia_cap_4: "Disaster Risk Monitoring Using Satellite Imagery（NVIDIA × UNITAR/UNOSAT）— 2025/10/05",
        nvidia_h2_2: "100% 完課紀錄．Isaac Sim / ROS 系列（無獨立證書）",
        nvidia_cap_5: "An Introduction to AI-Based Robot Development With Isaac ROS",
        nvidia_cap_6: "Synthetic Data Generation for Perception Model Training in Isaac Sim",
        nvidia_cap_7: "Developing Robots With Software-in-the-Loop (SIL) in Isaac Sim",
        nvidia_cap_8: "Leveraging ROS 2 and Hardware-in-the-Loop (HIL) in Isaac Sim",
        nvidia_cap_9: "Ingesting Robot Assets and Simulating Your Robot in Isaac Sim",
        nvidia_h2_3: "NVIDIA DLI 短課完課紀錄（100% 完課，平台未核發個別證書）",
        nvidia_cap_10: "Generative AI Explained、Agentic AI Explained、Building A Brain in 10 Minutes 等 11 門短課",

        // Google
        google_page_title: "GOOGLE SKILL 認證 - 郭正安 Bruce",
        google_h1: "GOOGLE SKILL 認證",
        google_intro: "以下為所有結業證書、技能徽章與課程完課紀錄的原始截圖，皆為 cheng an kuo（郭正安）本人取得。",
        google_link1: "在 Credly 查看已驗證徽章（免登入）",
        google_link2: "前往 Google Cloud Skills Boost（需登入查看個人紀錄）",
        google_h2_1: "Google 數位人才探索計畫．結業證書",
        google_cap_1: "AI for Generalists — 證書編號 1OCR2FFD（英文版）",
        google_cap_2: "AI 職場通識學程結業證書 — 證書編號 1OCR2FFD（中文版）",
        google_cap_3: "Google Cloud — 證書編號 1OCR2FFD（英文版）",
        google_cap_4: "Google Cloud 學程結業證書 — 證書編號 1OCR2FFD（中文版）",
        google_h2_2: "Google Cloud Skill Badge（Credly 可驗證徽章）",
        google_cap_5_pre: "Credly Badge Wallet — 8 個技能徽章（Prompt Design in Vertex AI、Analyze BigQuery Data in Connected Sheets、Classify Images with TensorFlow、Derive Insights from BigQuery Data、Get Started with Google Workspace Tools、Integrate BigQuery Data and Google Workspace using Apps Script、Manage Kubernetes in Google Cloud、Secure BigLake Data） — ",
        google_cap_5_link: "在 Credly 查看",
        google_h2_3: "Google Cloud Skills Boost「My Learning」已完成課程（共 68 項）",
        google_note1: "以下 12 張截圖為「My Learning」頁面完整紀錄（2025/10 – 2026/06），每張含 6 項已完成課程／徽章。",
        google_cap_6: "Skill Wallet 官方技能標籤彙整（由上述課程／徽章自動彙整而成）",
        google_h2_4: "其他 Google 認證",
        google_cap_7: "AI 技術輔助高效廣告認證（Google Ads AI-Powered Performance）— Google (Skillshop)，發證 2026/06/25，效期至 2027/06/25",
        google_cap_8: "Getting Started with Google Kubernetes Engine — iSpan × Google Cloud，台北，2025/11/06",

        // Anthropic
        anthropic_page_title: "ANTHROPIC ACADEMY 認證 - 郭正安 Bruce",
        anthropic_h1: "ANTHROPIC ACADEMY 認證",
        anthropic_intro: "Anthropic Academy 完課紀錄（官方平台目前無公開可下載之證書頁面，以下為完課紀錄截圖）。",
        anthropic_link1: "前往 Anthropic Academy（需登入查看個人完課紀錄）",
        anthropic_cap_1: "Claude Code 101、Model Context Protocol (MCP)",

        // MathWorks
        mathworks_page_title: "MATHWORKS 認證 - 郭正安 Bruce",
        mathworks_h1: "MATHWORKS 認證",
        mathworks_intro: "以下為課程證書原始截圖，為 cheng an kuo（郭正安）本人取得。",
        mathworks_cap_1: "Deep Learning Onramp — MathWorks Training Services，100% 完課，2025/08/16",

        // TKU
        tku_page_title: "淡江大學 AI 創智學院研習證明 - 郭正安 Bruce",
        tku_h1: "淡江大學 AI 創智學院研習證明",
        tku_intro: "以下為研習證明原始截圖，為郭正安本人取得。",
        tku_cap_1: "【AI-102】微軟認證線上課程：如何成為 Azure AI 工程師？— 6 小時研習，2026/06/18，院字第11420012號",
        tku_cap_2: "【AI 實作體驗工作坊】：多模態 AI 應用 — 2 小時研習，2026/06/18，院字第11420272號",

        // Other
        other_page_title: "其他機構課程 - 郭正安 Bruce",
        other_h1: "其他機構課程",
        other_intro: "以下為結業／完訓證書原始截圖，為郭正安本人取得。",
        other_cap_1: "左：財團法人資訊工業策進會結業證書「駕馭 AI 新浪潮－Google AI 的應用入門」（臺北市政府青年局主辦，15 小時，2025/06/14–15，證書號碼(114)TPYDIII NO.148）／右：AI 商務應用與智慧教育平台推廣工作坊完訓證書（7 小時，完成日期 2025/12/18，證書編號 TB00032）",

        // Microsoft
        microsoft_page_title: "MICROSOFT 認證 - 郭正安 Bruce",
        microsoft_h1: "MICROSOFT 認證",
        microsoft_intro: "Microsoft Learn 個人學習檔案，郭正安本人取得，公開頁面免登入即可查看。",
        microsoft_link1: "在 Microsoft Learn 查看完整檔案（免登入）",
        microsoft_h2_1: "獎盃（Trophies）",
        microsoft_trophy_1: "使用 Microsoft Foundry（Microsoft 應用技能）建立 AI 代理 — 完成時間 2026/05/11",
        microsoft_trophy_2: "Azure 資料庫管理簡介 — 完成時間 2026/05/10",
        microsoft_h2_2: "徽章（Badges，共 12 個）",
        microsoft_badge_1: "設定儲存體帳戶 — 2026/05/13",
        microsoft_badge_2: "設定虛擬網路 — 2026/05/13",
        microsoft_badge_3: "了解 Microsoft Entra ID — 2026/05/13",
        microsoft_badge_4: "Azure Cloud Shell 簡介 — 2026/05/13",
        microsoft_badge_5: "使用 Azure Content Understanding 建立多模態分析解決方案 — 2026/05/12",
        microsoft_badge_6: "分析影像 — 2026/05/12",
        microsoft_badge_7: "在 Foundry 工具中使用 Azure 語言分析文字 — 2026/05/11",
        microsoft_badge_8: "開始使用 Azure 上的 AI 代理程式開發 — 2026/05/11",
        microsoft_badge_9: "Use imperative development techniques for canvas apps in Power Apps — 2026/05/10",
        microsoft_badge_10: "準備在 Azure 上維護以 SQL Server 為基礎的資料庫 — 2026/05/10",
        microsoft_badge_11: "生成式 AI 和代理程式簡介 — 2026/05/10",
        microsoft_badge_12: "AI 概念簡介 — 2026/05/07",

        // AI 自動求職系統
        autojob_page_title: "AI 自動求職系統 - 郭正安 Bruce",
        autojob_h1: "AI 自動求職系統",
        autojob_subtitle: "用 Claude Code 打造的端到端求職自動化工作流 —— 人只負責做決策。",
        autojob_stat_1: "家企業客製履歷與求職信",
        autojob_stat_2: "個全自動排程",
        autojob_stat_3_value: "數十筆",
        autojob_stat_3: "核實在招職缺",
        autojob_stat_4: "客製履歷通過誠信 QA",
        autojob_philosophy_title: "開發理念",
        autojob_phil_1_title: "人做決策，系統做重複",
        autojob_phil_1_desc: "所有耗時重複的環節（搜尋、核實、排版、格式檢查）交給自動化；所有關鍵決策（投不投、按不按送出）永遠留給人。系統做到「按送出鍵前一刻」，按下去的始終是我本人。",
        autojob_phil_2_title: "誠實是架構，不是自律",
        autojob_phil_2_desc: "防造假不靠意志力，而是把「誠實凌駕 ATS 分數」直接寫進系統規則：每一條履歷主張都會自動對照真實資歷庫核實，讓每一份產出天生就是誠實的。",
        autojob_phil_3_title: "缺口用做的，不是用寫的",
        autojob_phil_3_desc: "系統盤點出履歷缺什麼，不是換個說法灌水，而是把缺口轉成待辦專案清單，做出真實成果後才寫進履歷。",
        autojob_timeline_title: "建立歷程",
        autojob_step_1_title: "Step 1｜建立資歷庫",
        autojob_step_1_desc: "先把技能、認證、經歷、求職條件整理成一份結構化的「唯一事實來源」。之後所有的職缺評分、履歷客製、防造假核對，都以這份資歷庫為依據。",
        autojob_step_2_title: "Step 2｜職缺搜尋與核實",
        autojob_step_2_desc: "用 Claude Code 建立搜尋工作流：自動搜尋職缺、逐筆驗證「真實在招」、過濾簽證／國籍／兵役等硬性門檻（例如美國公民限定的職缺直接排除），再標上 0–100 契合度評分寫入追蹤看板，把「該投誰、先投誰」變成一張排序好的行動清單。",
        autojob_step_3_title: "Step 3｜客製化產線",
        autojob_step_3_desc: "貼上一則職缺，系統自動比對 JD 與資歷庫，產出量身訂做的履歷、求職信、職位分析與完整投遞包，並通過 ATS（履歷篩選系統）相容性檢查。",
        autojob_step_4_title: "Step 4｜誠實防護",
        autojob_step_4_desc: "在產線中內建反造假規則與誠信 QA：JD 要求但沒做過的技能不灌水，自動轉成待辦清單去真的補上。60+ 份客製履歷全數通過核實、零造假。",
        autojob_step_5_title: "Step 5｜全自動化",
        autojob_step_5_desc: "最後把整套流程掛上排程：每週一自動搜尋新職缺寫入看板、每月自動盤點新取得的認證更新資歷庫。系統從「工具」變成「不用人盯著也會自己長大的求職助理」。",
        autojob_step_6_title: "Step 6｜從缺口長出真專案",
        autojob_step_6_desc: "系統盤點出「缺機器學習實作作品」的缺口，於是用碩論的真實風洞實驗資料（55 個實驗案例、288 個壓力測點）建立 ML 代理模型，達成 10 個感測點重建全場 R²=0.84、全場預測 R²=0.99，所有數字經防洩漏交叉驗證與對抗式稽核 —— 缺口本身成了下一個真實專案的起點。",
        autojob_summary_title: "成果總覽",
        autojob_summary_list: "<div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-cyan-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">端到端自動求職系統</strong> — 「搜尋職缺 → 驗證真偽 → 追蹤管理 → 客製履歷 → 產出投遞包」一條龍自動化，已為 60+ 家企業產出職缺客製化履歷與求職信。</p></div><div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-blue-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">自動化排程代理</strong> — 每週自動搜職缺、每月自動盤點認證，系統自我更新。</p></div><div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-purple-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">一鍵客製履歷與推薦信</strong> — 自動比對 JD 與資歷庫，產出 CV、求職信、職位分析與投遞包並通過 ATS 檢查。</p></div><div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-green-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">投遞前資格自動核實</strong> — 簽證／國籍／兵役硬門檻自動過濾，不浪費時間在結構性不可能的申請。</p></div><div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-orange-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">誠實防護機制</strong> — 「誠實凌駕 ATS 分數」內建於流程，60+ 份客製履歷全數通過誠信 QA、零造假。</p></div><div class=\"glass-card rounded-xl p-4 flex gap-3\"><i class=\"fa-solid fa-circle-check text-pink-400 mt-1\"></i><p class=\"text-gray-300 text-sm leading-relaxed\"><strong class=\"text-white\">從缺口長出真專案</strong> — 真實風洞資料 ML 代理模型：10 感測點重建全場 R²=0.84、全場預測 R²=0.99。</p></div>",
    }
};

function applyCertLanguage(lang) {
    const dict = CERT_TRANSLATIONS[lang];
    if (!dict) return;

    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
    if (typeof CERT_PAGE !== 'undefined' && dict[CERT_PAGE + '_page_title']) {
        document.title = dict[CERT_PAGE + '_page_title'];
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    const tw = document.getElementById('lang-tw');
    const en = document.getElementById('lang-en');
    if (tw) tw.classList.toggle('active', lang === 'zh');
    if (en) en.classList.toggle('active', lang === 'en');
}

function setCertLanguage(lang) {
    localStorage.setItem('pref_lang', lang);
    applyCertLanguage(lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('pref_lang') || 'zh';
    applyCertLanguage(savedLang);
});
