# 個人品牌網站 — 修繕指示檔（求職定位）

> **用途說明**：這是一份給 AI（Claude Sonnet 5）執行的工作指示。
> 網站原始碼在 `個人品牌網站/` 資料夾（`index.html` + `script.js` + `styles.css`，純靜態、無建置流程）。
> 部署方式：push 到 `main` 後由 `.github/workflows/deploy-pages.yml` 自動部署到 GitHub Pages。
> 線上網址：<https://bruce0611.github.io/my-web-project/>
>
> **執行原則**：
> - 網站是雙語的（繁中/英文），所有文案修改必須「同時」更新 `index.html` 內寫死的中文 **和** `script.js` 的 `translations.zh` / `translations.en` 兩份資料，三處保持一致。
> - 保持現有深色科技風（neon-cyan #66FCF1）視覺風格，不要大改設計。
> - 每完成一個區塊就用瀏覽器（或 Playwright）實際打開頁面驗證，桌機與手機寬度都要看。
> - 逐項完成後在本檔案的 checkbox 打勾。

---

## P0 — 最傷求職形象，優先處理

### 1. 手機版沒有導覽選單
- 現況：選單是 `hidden xl:flex`（`index.html` 約 L73），視窗寬度 < 1280px 時整個選單消失，訪客只能盲滑。
- 任務：加一個漢堡選單（hamburger menu），在 `xl` 以下顯示按鈕、點開後展示全部導覽連結與「聯絡我」。
- 驗收：iPhone 寬度（390px）下能開合選單並跳到每個 section。

### 2. 專案卡片是死連結
- 現況：兩張專案卡 `<a href="#" target="_blank">`（`index.html` L281、L305），點「查看專案詳情」沒有任何反應。
- 任務（擇一，優先前者）：
  a. 把兩個專案各做成一個 modal 或獨立詳情頁（可放方法、圖表、成果數據 32% 減阻 / 25.5% 擾動抑制的說明）；
  b. 或先把 `href="#"` 與箭頭按鈕移除，卡片改為純展示，不要有「可點擊卻沒反應」的 UI。
- 注意：專案一（風振控制）之後會連到碩士論文區（見文末筆記），先預留 `href="#thesis"` 的可能性。

### 3. 獎項連結是佔位假連結
- 現況：`script.js` 中 `exp_4_award` 連到 `https://www.youtube.com`、`exp_1_award` 連到 `https://www.facebook.com`（首頁，非實際內容）。`index.html` L381、L449 同樣。
- 任務：先把 `<a>` 改成不可點的 `<span>`（保留獎盃圖示與文字）。若使用者之後提供實際影片/貼文連結再接回去。

### 4. 證照區內容錯誤
- 現況：`cert_2_name` 是「GOOGLE SKILL 認證」但 `cert_2_desc` 寫「國家高考及格」（英文版 "National Examination Qualified"）— 明顯是貼錯的內容。
- 任務：
  - 修正描述（Google 的部分應該是 Google Cloud Skills Boost / 相關課程認證，正確名稱需向使用者確認，先改成「Google Cloud 技能認證」並加上 `<!-- TODO: 確認正確認證名稱與驗證連結 -->`）。
  - 若「國家高考及格」是真實成就（土木高考？），它值得**獨立一個條目**，不該混在 Google 認證裡 — 對台灣工程職缺這是強項，請新增第三個認證條目並向使用者確認名稱。
  - 兩張證照補上驗證連結（credential URL）的位置，先用 TODO 註解佔位。

### 5. 移除公開的手機號碼
- 現況：`+886 965-660-770` 出現在 Hero（L123）與 Footer（L550）。
- 任務：兩處都移除電話，只留 email。版面空缺可補一個「下載履歷」按鈕（見 P1-7）。

---

## P1 — 內容與求職定位

### 6. 清理 AI 生成殘留與排版錯誤
- `script.js` `translations.zh.hero_desc`：多處句號前有多餘空格（「…分析模型 。」「…特徵提取週期 。」等），是引用標記刪除後的殘影，全部清掉。
- `proj_2_desc`（zh 與 en、以及 index.html L317）：`$LES$` 會原樣顯示錢字號，改成 `LES`。
- `index.html` L18-19：`tailwind.config` 內 `'brand-ig'` 重複定義兩次，刪一個。

### 7. 加「下載履歷 PDF」按鈕
- 求職網站必備。在 Hero 區社群按鈕附近與 Footer 各加一個明顯的「下載履歷 / Download Resume」按鈕。
- 檔案路徑用 `個人品牌網站/resume.pdf`，檔案還不存在，先做好按鈕與 TODO 註解，並在本檔案回報「等使用者提供 resume.pdf」。

### 8. 中英文/寫死文案不同步
- `index.html` 寫死的內容與 `script.js` 翻譯檔有出入，以 `script.js` 的 zh 版為準修正 HTML：
  - L352：`University Dept.` → `淡江大學`
  - L398：`Freelance / Academy` → `天母美國學校`
  - L473 教育卡片：desc 內重複了一次「GPA: 4.0/4.0」（右上角已有 badge），刪除 desc 中的重複；L482 同理。
- Hero 的中文簡介（L129-130）比 `translations.zh.hero_desc` 短很多，統一以較完整的版本為準（但先做第 6 項的清理）。

### 9. SEO 與社群分享基本盤
- `<head>` 補上：
  - `<meta name="description" content="...">`（80–120 字，中文，包含：土木工程、風洞/CFD、機器學習、淡江大學碩士）
  - Open Graph：`og:title`、`og:description`、`og:image`（用 `profile.png`）、`og:url`（`https://bruce0611.github.io/my-web-project/`）、`og:type=website`
  - Twitter card：`summary_large_image`
  - favicon（可用 emoji SVG data URI 或簡單的圓形縮寫 SVG，不要引外部檔案服務）
- 切換語言時同步更新 `document.title` 與 `<html lang>`（在 `setLanguage()` 裡處理）。

### 10. 定位語調微調（需保守，別改過頭）
- 「AI 技術專家 / AI Tech Expert」對一個碩士生的稱謂偏高，面試官可能反感。建議改成「AI 應用研發 / AI-Driven R&D Engineer」這類「做得到」的措辭。**改之前在 PR/commit 訊息中註明此變更，讓使用者可以否決。**
- 技能區的 tag「Tracker」語意不明（是 Physics Tracker 影像分析軟體？），加 TODO 向使用者確認。

---

## P2 — 技術品質（有空再做，不影響內容）

### 11. Tailwind CDN → 正式建置（或至少消音）
- `cdn.tailwindcss.com` 是開發用途，production 會在 console 警告且載入慢。
- 建議：導入 Tailwind CLI 建置出靜態 CSS（需新增最小化的 package.json 與 GitHub Actions build step），或短期內先接受 CDN 但把 config 抽乾淨。此項改動較大，先徵求使用者同意再動。

### 12. Loading 動畫縮短
- 假的「SYSTEM INITIALIZING」進度條固定擋 1.5 秒（`script.js` L150-154）。改成 ≤0.6 秒，或內容就緒即淡出。

### 13. 粒子背景效能
- 200 顆粒子、每幀 O(n²) 連線計算，手機上耗電發燙。任務：
  - 手機寬度（<768px）粒子數降到 ~60；
  - 尊重 `prefers-reduced-motion: reduce`（直接不啟動 canvas 動畫）；
  - 分頁不可見時暫停（`document.visibilitychange`）。

### 14. 外連安全與小修
- 所有 `target="_blank"` 補 `rel="noopener noreferrer"`。
- `pageYOffset` 已棄用，改 `window.scrollY`。
- `perspective-1000` 不是 Tailwind 內建 class（L158），無效，刪除或以 CSS 實作。

---

## 📌 預留筆記：碩士論文區塊（等使用者提供資料）

使用者之後會提供碩士論文的完整資訊，屆時新增一個獨立 section。**先不要實作，等資料到位。**

### 屆時要做的事
1. 新增 `<section id="thesis">`，位置放在「專案作品」與「工作經驗」之間（論文就是最大的專案，緊接作品集最合理）。
2. 導覽列（桌機 + 手機漢堡選單）加「碩士論文 / Thesis」項目，i18n key 建議 `nav_thesis`。
3. 區塊內容欄位（i18n key 建議前綴 `thesis_`）：
   - 論文標題（中/英）
   - 指導教授、系所、學位、口試/出版年月
   - 摘要（Abstract，中/英，可做展開/收合避免過長）
   - 關鍵字 tags（風工程、CFD、LES、機器學習…沿用技能區的 pill 樣式）
   - 主要貢獻/成果數據（可沿用 32% 減阻、25.5% 擾動抑制等，與專案一的數據要一致，不要兩處講不同數字）
   - 連結按鈕群：
     - 🔗 論文網址（國圖 / 學校圖書館 handle / DOI）
     - 📄 電子檔 PDF（檔案放 `個人品牌網站/thesis.pdf`，注意：**先確認學校的公開授權範圍**再上傳全文；若不能公開全文，只放摘要與外部連結）
     - （可選）投影片、口試簡報、相關 GitHub repo
4. 專案一（智慧型建築風振控制）的「查看專案詳情」改為連到 `#thesis`。
5. Open Graph description 可順帶提及論文主題。

### 等待使用者提供的資料清單
- [ ] 論文中英文標題
- [ ] 摘要（中/英）
- [ ] 論文連結（國圖/圖書館/DOI）
- [ ] PDF 電子檔（與可公開範圍：全文 or 僅摘要）
- [ ] 指導教授姓名、口試通過年月
- [ ] 關鍵字列表
- [ ] （可選）簡報檔、相關程式碼 repo

---

## 執行完成後

1. 全部改動 commit 到指定分支並 push。
2. 用瀏覽器對 `index.html` 做桌機（1440px）與手機（390px）截圖驗證，中英文各切一次。
3. 在本檔案勾選完成項目、補上「等待使用者提供」的清單狀態。
