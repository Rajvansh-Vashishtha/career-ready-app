/* ==========================================================================
   Career Ready - Application Logic & Interactive AI Simulators
   ========================================================================== */

/* --------------------------------------------------------------------------
   0. DYNAMIC ROLE & SKILL DATA DEFINITIONS
   -------------------------------------------------------------------------- */
const ROLE_DATA = {
    apm: {
        title: "Associate Product Manager",
        baseScore: 55,
        skills: [
            { id: 'prd', label: 'PRD & Spec Writing', patterns: ['prd', 'product requirements', 'product spec', 'requirements document', 'spec writing'], weight: 0.25 },
            { id: 'wireframing', label: 'Wireframing & UX Prototyping (Figma)', patterns: ['figma', 'wireframe', 'wireframing', 'prototype', 'ux design', 'ui design'], weight: 0.20 },
            { id: 'analytics', label: 'Product Telemetry & PostHog', patterns: ['posthog', 'amplitude', 'analytics', 'telemetry', 'mixpanel', 'event tracking'], weight: 0.15 },
            { id: 'ai-tools', label: 'AI Tools & Prompt Engineering', patterns: ['claude', 'llm', 'ai tool', 'firebase', 'openai', 'gpt', 'prompt engineering'], weight: 0.15 },
            { id: 'user-research', label: 'User Research & JTBD Framework', patterns: ['user research', 'jtbd', 'jobs to be done', 'persona', 'customer interview'], weight: 0.15 },
            { id: 'metrics', label: 'Metrics Definition & KPIs', patterns: ['metrics', 'kpi', 'retention', 'dau', 'mau', 'conversion', 'north star', 'funnel'], weight: 0.10 }
        ],
        gapSkill: "PostHog & Product Telemetry",
        recruiterFeedback: "Strong foundation in PRD specs and Figma wireframes. Recommend demonstrating data-driven metric validation to secure top APM callback rates.",
        interviewQuestions: [
            { badge: "APM Product Strategy", q: "How would you improve the user onboarding flow for a newly launched AI features app to increase Day 7 retention by 20%?", tips: "Focus on user friction points, progressive disclosure, interactive tutorials, and measuring activation drop-off." },
            { badge: "APM Execution & Trade-offs", q: "How do you handle feature trade-offs when engineering estimates a key feature will take twice as long to ship?", tips: "Use RICE prioritization, scope down MVP, and communicate transparently with stakeholders." }
        ]
    },
    'ai-pm': {
        title: "AI Product Manager",
        baseScore: 50,
        skills: [
            { id: 'prompt-eng', label: 'Prompt Eng. & LLM System Prompts', patterns: ['prompt engineering', 'prompting', 'system prompt', 'langchain', 'llm'], weight: 0.25 },
            { id: 'model-eval', label: 'Model Evaluation & Benchmarking', patterns: ['model evaluation', 'benchmarking', 'accuracy', 'eval', 'hallucination', 'grounding'], weight: 0.20 },
            { id: 'ai-safety', label: 'AI Safety & Fallback Guardrails', patterns: ['ai safety', 'guardrails', 'moderation', 'alignment', 'fallback', 'error handling'], weight: 0.15 },
            { id: 'ai-prd', label: 'AI PRDs & Model Specs', patterns: ['prd', 'model spec', 'ai requirements', 'latency budget', 'cost budget'], weight: 0.15 },
            { id: 'cost-opt', label: 'Model Latency & Token Cost Opt.', patterns: ['latency', 'token cost', 'caching', 'quantization', 'streaming', 'cost optimization'], weight: 0.15 },
            { id: 'ai-tools', label: 'AI Builder Tools (Claude/Firebase)', patterns: ['claude', 'firebase', 'openai', 'api', 'huggingface'], weight: 0.10 }
        ],
        gapSkill: "Model Latency & Token Cost Opt.",
        recruiterFeedback: "Excellent hands-on builder experience with Claude Code & Firebase! Add explicit AI safety & error fallback strategies to your PRD case studies.",
        interviewQuestions: [
            { badge: "AI PM Model Evaluation", q: "How do you measure hallucination rates and output quality for a customer support AI agent before deploying to production?", tips: "Discuss golden datasets, LLM-as-a-judge, human-in-the-loop review, and automated evaluation metrics." },
            { badge: "AI System Architecture", q: "How do you design fallbacks when an LLM API experiences high latency or rate limiting during live user sessions?", tips: "Discuss client-side optimistic UI, background queueing, model fallback (Flash/Lite), and graceful error toast notifications." }
        ]
    },
    swe: {
        title: "Associate Software Engineer",
        baseScore: 60,
        skills: [
            { id: 'dsa', label: 'Data Structures & Algorithms', patterns: ['dsa', 'data structures', 'algorithms', 'leetcode', 'complexity', 'problem solving'], weight: 0.25 },
            { id: 'system-design', label: 'System Design & Code Architecture', patterns: ['system design', 'architecture', 'scalability', 'microservices', 'oop', 'design patterns'], weight: 0.20 },
            { id: 'api-design', label: 'REST APIs & Backend Integration', patterns: ['rest api', 'api design', 'json', 'http', 'express', 'node', 'fastapi'], weight: 0.20 },
            { id: 'ai-tools', label: 'AI Code Assistants & SDKs', patterns: ['github copilot', 'claude code', 'ai sdk', 'openai api', 'git'], weight: 0.15 },
            { id: 'unit-testing', label: 'Unit Testing & Automated Debugging', patterns: ['unit testing', 'jest', 'pytest', 'debugging', 'tdd', 'test coverage'], weight: 0.10 },
            { id: 'cicd', label: 'Git Version Control & CI/CD', patterns: ['git', 'github actions', 'ci/cd', 'docker', 'deployment', 'vercel'], weight: 0.10 }
        ],
        gapSkill: "Unit Testing & Automated Debugging",
        recruiterFeedback: "Great code execution speed. Focus on demonstrating clean modular code and API error handling for senior engineering review.",
        interviewQuestions: [
            { badge: "SWE System Design", q: "How would you design a rate-limiter API service that handles 10,000 requests per second with sub-10ms latency?", tips: "Discuss sliding window counter, Redis in-memory storage, distributed locks, and HTTP 429 status responses." },
            { badge: "SWE Code Architecture", q: "Explain how you optimize frontend render cycles when dealing with heavy real-time data streams.", tips: "Discuss virtual DOM diffing, debounce/throttle, memoization, and requestAnimationFrame." }
        ]
    },
    data: {
        title: "Data Analyst / Product Analyst",
        baseScore: 52,
        skills: [
            { id: 'powerbi-dashboards', label: 'Power BI & Tableau Dashboarding', patterns: ['power bi', 'tableau', 'dashboard', 'powerbi', 'looker', 'visualization', 'reporting'], weight: 0.20 },
            { id: 'advanced-excel', label: 'Advanced Excel & Financial Modeling', patterns: ['excel', 'pivot tables', 'vlookup', 'xlookup', 'spreadsheet', 'financial modeling', 'formulas'], weight: 0.20 },
            { id: 'sql', label: 'Advanced SQL & Query Optimization', patterns: ['sql', 'postgres', 'bigquery', 'joins', 'window functions', 'query optimization', 'cte'], weight: 0.20 },
            { id: 'analytics', label: 'PostHog & Amplitude Telemetry', patterns: ['posthog', 'amplitude', 'mixpanel', 'event tracking', 'telemetry', 'analytics'], weight: 0.15 },
            { id: 'retention', label: 'Cohort Retention & Funnel Analysis', patterns: ['cohort', 'retention', 'funnel', 'churn', 'dau/mau', 'activation'], weight: 0.15 },
            { id: 'python-data', label: 'Python (Pandas) & A/B Testing', patterns: ['python', 'pandas', 'numpy', 'a/b testing', 'experimentation', 'p-value', 'statistics'], weight: 0.10 }
        ],
        gapSkill: "Power BI & Advanced Excel Dashboarding",
        recruiterFeedback: "Solid grasp of data analytics. Demonstrating automated Power BI dashboards and complex Excel/SQL modeling will put you in top candidate tier.",
        interviewQuestions: [
            { badge: "Data Analytics & Power BI", q: "How do you design a real-time Power BI executive dashboard connecting SQL databases with automated daily refresh schedules?", tips: "Discuss DAX measures, star schema data modeling, incremental refresh, and scheduled gateway syncs." },
            { badge: "Excel & Data Modeling", q: "How do you use XLOOKUP, Index/Match, and Pivot Tables to clean and model messy multi-sheet transaction datasets?", tips: "Discuss data cleaning, handling N/A errors, dynamic arrays, and structured table references." }
        ]
    },
    ux: {
        title: "UX / Product Designer",
        baseScore: 58,
        skills: [
            { id: 'wireframing', label: 'Figma Design Systems & Components', patterns: ['figma', 'design system', 'auto layout', 'components', 'variants', 'tokens'], weight: 0.25 },
            { id: 'user-research', label: 'User Research & Persona Mapping', patterns: ['user research', 'user testing', 'persona', 'journey map', 'interviews'], weight: 0.20 },
            { id: 'micro-anim', label: 'Interactive Micro-animations', patterns: ['animation', 'micro-interaction', 'framer', 'lottie', 'css transition'], weight: 0.15 },
            { id: 'usability', label: 'Usability Testing & Accessibility', patterns: ['usability', 'accessibility', 'wcag', 'a11y', 'color contrast'], weight: 0.15 },
            { id: 'ia-wireframe', label: 'Information Arch. & Wireframes', patterns: ['information architecture', 'wireframe', 'flowchart', 'sitemap', 'low-fi'], weight: 0.15 },
            { id: 'prd-align', label: 'PRD Alignment & Dev Handoff', patterns: ['prd', 'developer handoff', 'specs', 'design tokens', 'component specs'], weight: 0.10 }
        ],
        gapSkill: "Interactive Micro-animations",
        recruiterFeedback: "Visually polished prototypes. Pair your visual designs with clear success metrics and user testing validation loops.",
        interviewQuestions: [
            { badge: "UX Strategy", q: "Walk us through a design decision where user research directly changed your initial wireframe layout.", tips: "Describe initial assumption, user testing feedback/friction point, iteration, and measured UX improvement." },
            { badge: "Design Systems", q: "How do you maintain accessibility (WCAG) and dark-mode design tokens across large Figma design libraries?", tips: "Discuss semantic color tokens, minimum 4.5:1 contrast ratios, screen-reader focus states, and component variants." }
        ]
    }
};

/* --------------------------------------------------------------------------
   1. CENTRALIZED RESUME STORE (synced across all features)
   -------------------------------------------------------------------------- */
const RESUME_STORAGE_KEY = 'careerReady_resume_v1';
const RESUME_MAX_BYTES = 5 * 1024 * 1024;

const ResumeStore = {
    state: {
        fileName: null,
        text: '',
        uploadedAt: null
    },

    init() {
        this.loadFromStorage();
        this.updateUI();
    },

    loadFromStorage() {
        try {
            const raw = localStorage.getItem(RESUME_STORAGE_KEY);
            if (!raw) return;
            const saved = JSON.parse(raw);
            if (saved && saved.text) {
                this.state = {
                    fileName: saved.fileName || 'saved-resume.txt',
                    text: saved.text,
                    uploadedAt: saved.uploadedAt || null
                };
            }
        } catch (e) {
            console.warn('Could not restore resume from storage', e);
        }
    },

    saveToStorage() {
        try {
            localStorage.setItem(RESUME_STORAGE_KEY, JSON.stringify({
                fileName: this.state.fileName,
                text: this.state.text,
                uploadedAt: this.state.uploadedAt
            }));
        } catch (e) {
            console.warn('Could not persist resume', e);
        }
    },

    hasResume() {
        return Boolean(this.state.text && this.state.text.trim().length > 0);
    },

    getText() {
        return this.state.text || '';
    },

    getFileName() {
        return this.state.fileName || '';
    },

    getDetectedSkillsForRole(roleKey) {
        if (!this.hasResume()) return [];
        const lower = this.state.text.toLowerCase();
        const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;
        const detected = [];

        roleConfig.skills.forEach(skill => {
            const matched = skill.patterns.some(p => lower.includes(p));
            if (matched) detected.push(skill.id);
        });

        return detected;
    },

    getDetectedKeywordsForRole(roleKey) {
        if (!this.hasResume()) return [];
        const lower = this.state.text.toLowerCase();
        const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;
        const keywords = [];

        roleConfig.skills.forEach(skill => {
            skill.patterns.forEach(p => {
                if (lower.includes(p) && !keywords.includes(p)) keywords.push(p);
            });
        });

        return keywords;
    },

    computeATSScoreForRole(roleKey) {
        if (!this.hasResume()) return 0;
        const detected = this.getDetectedSkillsForRole(roleKey);
        const keywords = this.getDetectedKeywordsForRole(roleKey);

        const base = 55;
        const skillBonus = detected.length * 6;
        const kwBonus = Math.min(keywords.length * 2, 18);
        const lengthBonus = this.state.text.length > 200 ? 6 : 0;

        return Math.min(base + skillBonus + kwBonus + lengthBonus, 98);
    },

    computeRecruiterTierForRole(roleKey) {
        const score = this.computeATSScoreForRole(roleKey);
        if (score >= 85) return { tier: 'Top 12%', color: 'badge-green' };
        if (score >= 70) return { tier: 'Top 25%', color: 'badge-purple' };
        return { tier: 'Needs Optimization', color: 'badge-amber' };
    },

    computeRoleMatches() {
        if (!this.hasResume()) {
            return { apm: 78, 'ai-pm': 82, swe: 80, data: 74, ux: 76 };
        }
        const matches = {};
        Object.keys(ROLE_DATA).forEach(rk => {
            matches[rk] = this.computeATSScoreForRole(rk);
        });
        return matches;
    },

    async setResume(fileName, text) {
        this.state = {
            fileName,
            text: text.trim(),
            uploadedAt: new Date().toISOString()
        };
        this.saveToStorage();
        this.dispatchChange();
        this.updateUI();
        this.syncAllFeatures();
    },

    clear() {
        this.state = {
            fileName: null,
            text: '',
            uploadedAt: null
        };
        localStorage.removeItem(RESUME_STORAGE_KEY);
        this.dispatchChange();
        this.updateUI();
        this.syncAllFeatures();
    },

    dispatchChange() {
        document.dispatchEvent(new CustomEvent('resume:updated', {
            detail: { ...this.state }
        }));
    },

    updateUI() {
        const hasResume = this.hasResume();
        const dropZone = document.getElementById('resume-drop-zone');
        const emptyZone = document.getElementById('upload-zone-empty');
        const loadedZone = document.getElementById('upload-zone-loaded');
        const previewPanel = document.getElementById('resume-preview-panel');
        const sharedText = document.getElementById('resume-shared-text');
        const fileNameEl = document.getElementById('resume-file-name');
        const fileMetaEl = document.getElementById('resume-file-meta');
        const syncBadge = document.getElementById('resume-sync-badge');
        const syncText = document.getElementById('resume-sync-text');
        const headerStatus = document.getElementById('resume-header-status');
        const headerLabel = document.getElementById('resume-header-label');

        if (dropZone) dropZone.classList.toggle('has-file', hasResume);
        if (emptyZone) emptyZone.style.display = hasResume ? 'none' : 'block';
        if (loadedZone) loadedZone.style.display = hasResume ? 'flex' : 'none';
        if (previewPanel) previewPanel.style.display = hasResume ? 'block' : 'none';
        if (sharedText) sharedText.value = this.state.text;

        if (hasResume && fileNameEl) fileNameEl.textContent = this.state.fileName;
        if (hasResume && fileMetaEl) {
            const when = this.state.uploadedAt
                ? new Date(this.state.uploadedAt).toLocaleString()
                : 'Just now';
            const currentRole = document.getElementById('user-role')?.value || 'apm';
            const detected = this.getDetectedSkillsForRole(currentRole);
            fileMetaEl.textContent = `${when} · ${detected.length} skills detected for active role`;
        }

        if (syncBadge && syncText) {
            if (hasResume) {
                syncBadge.classList.add('synced');
                syncText.textContent = 'Synced to all AI engines';
            } else {
                syncBadge.classList.remove('synced');
                syncText.textContent = 'No resume loaded';
            }
        }

        if (headerStatus && headerLabel) {
            headerStatus.classList.toggle('has-resume', hasResume);
            headerLabel.textContent = hasResume
                ? this.state.fileName
                : 'Upload Resume';
            headerStatus.title = hasResume
                ? `Resume synced: ${this.state.fileName}`
                : 'Click to upload resume';
        }

        if (window.lucide) lucide.createIcons();
    },

    syncAllFeatures() {
        calculateAndRenderResults();
        syncAssessmentFromResume();
        syncResumeScannerUI();
        refreshActiveAIEngine();
        updateExportModalResumeFields();
    }
};

/* --------------------------------------------------------------------------
   2. RESUME FILE PARSER (PDF, DOCX, TXT)
   -------------------------------------------------------------------------- */
async function parseResumeFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();

    if (file.size > RESUME_MAX_BYTES) {
        throw new Error('File exceeds 5 MB limit. Please upload a smaller resume.');
    }

    if (ext === 'txt' || ext === 'md') {
        return await file.text();
    }

    if (ext === 'pdf') {
        if (!window.pdfjsLib) throw new Error('PDF parser not loaded. Try TXT or DOCX.');
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            fullText += content.items.map(item => item.str).join(' ') + '\n';
        }
        return fullText.trim();
    }

    if (ext === 'docx' || ext === 'doc') {
        if (!window.mammoth) throw new Error('DOCX parser not loaded. Try TXT or PDF.');
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        return result.value.trim();
    }

    throw new Error('Unsupported format. Use PDF, DOCX, or TXT.');
}

function showResumeError(msg) {
    let errEl = document.getElementById('resume-upload-error');
    if (!errEl) {
        errEl = document.createElement('p');
        errEl.id = 'resume-upload-error';
        errEl.className = 'resume-upload-error';
        document.getElementById('resume-drop-zone')?.appendChild(errEl);
    }
    errEl.textContent = msg;
    errEl.classList.add('visible');
    setTimeout(() => errEl.classList.remove('visible'), 5000);
}

function initResumeUpload() {
    try {
        if (window.pdfjsLib && window.pdfjsLib.GlobalWorkerOptions) {
            pdfjsLib.GlobalWorkerOptions.workerSrc =
                'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        }
    } catch (e) {
        console.warn('PDF.js worker initialization skipped:', e);
    }

    const fileInput = document.getElementById('resume-file-input');
    const dropZone = document.getElementById('resume-drop-zone');
    const btnBrowse = document.getElementById('btn-browse-resume');
    const btnReplace = document.getElementById('btn-replace-resume');
    const btnClear = document.getElementById('btn-clear-resume');
    const btnTogglePreview = document.getElementById('btn-toggle-preview');
    const headerStatus = document.getElementById('resume-header-status');
    const previewText = document.getElementById('resume-shared-text');

    const openFilePicker = () => fileInput?.click();

    async function handleFile(file) {
        if (!file) return;
        try {
            const text = await parseResumeFile(file);
            if (!text || text.length < 20) {
                throw new Error('Could not extract enough text. Try a text-based PDF or paste into TXT.');
            }
            await ResumeStore.setResume(file.name, text);
        } catch (err) {
            showResumeError(err.message || 'Failed to parse resume.');
        }
    }

    btnBrowse?.addEventListener('click', openFilePicker);
    btnReplace?.addEventListener('click', openFilePicker);
    headerStatus?.addEventListener('click', () => {
        document.getElementById('resume-hub')?.scrollIntoView({ behavior: 'smooth' });
        if (!ResumeStore.hasResume()) openFilePicker();
    });

    btnClear?.addEventListener('click', () => {
        if (confirm('Remove your resume? All features will reset to default data.')) {
            ResumeStore.clear();
            if (fileInput) fileInput.value = '';
        }
    });

    fileInput?.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    });

    dropZone?.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });
    dropZone?.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
    dropZone?.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const file = e.dataTransfer?.files?.[0];
        if (file) handleFile(file);
    });

    btnTogglePreview?.addEventListener('click', () => {
        if (!previewText) return;
        previewText.style.display = previewText.style.display === 'none' ? 'block' : 'none';
    });

    ResumeStore.init();
}

/* --------------------------------------------------------------------------
   3. DYNAMIC ROLE SKILLS GRID & CROSS-FEATURE SYNC
   -------------------------------------------------------------------------- */
function renderRoleSkillsGrid(roleKey) {
    const grid = document.getElementById('checkbox-grid');
    if (!grid) return;

    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;
    const detectedSkills = ResumeStore.getDetectedSkillsForRole(roleKey);

    grid.innerHTML = roleConfig.skills.map((skill, idx) => {
        const isDetected = detectedSkills.includes(skill.id);
        const defaultChecked = !ResumeStore.hasResume() && idx < 3;
        const isChecked = isDetected || defaultChecked;

        const badgeText = isDetected ? '<span class="skill-auto-badge">Resume Detected</span>' : '';

        return `
            <label class="check-chip ${isDetected ? 'detected-chip' : ''}">
                <input type="checkbox" value="${skill.id}" ${isChecked ? 'checked' : ''}>
                <span>${skill.label}</span>
                ${badgeText}
            </label>
        `;
    }).join('');

    grid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
            calculateAndRenderResults();
        });
    });
}

function syncAssessmentFromResume() {
    const roleSelect = document.getElementById('user-role');
    const roleKey = roleSelect ? roleSelect.value : 'apm';
    renderRoleSkillsGrid(roleKey);
}

function syncResumeScannerUI() {
    const txtInput = document.getElementById('resume-text-input');
    if (txtInput && ResumeStore.hasResume()) {
        txtInput.value = ResumeStore.getText();
    }
}

function updateExportModalResumeFields() {
    const modalResume = document.getElementById('modal-resume');
    const modalSkills = document.getElementById('modal-resume-skills');
    const roleKey = document.getElementById('user-role')?.value || 'apm';
    const detected = ResumeStore.getDetectedSkillsForRole(roleKey);
    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;

    if (modalResume) {
        modalResume.textContent = ResumeStore.hasResume()
            ? ResumeStore.getFileName()
            : 'Not uploaded';
    }
    if (modalSkills) {
        const skillLabels = detected.map(id => {
            const found = roleConfig.skills.find(s => s.id === id);
            return found ? found.label : id;
        });
        modalSkills.textContent = ResumeStore.hasResume()
            ? (skillLabels.join(', ') || 'None detected for active role')
            : '—';
    }
}

function buildRecruiterLensContent() {
    const roleKey = document.getElementById('user-role')?.value || 'apm';
    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;

    if (!ResumeStore.hasResume()) {
        return `
            <div class="recruiter-lens-box">
                <div class="feedback-tag-group">
                    <span class="feedback-badge badge-green">Target Role: ${roleConfig.title}</span>
                    <span class="feedback-badge badge-purple">Candidate Tier: Top 15%</span>
                    <span class="feedback-badge badge-amber">Gap: ${roleConfig.gapSkill}</span>
                </div>
                <p class="resume-sync-notice"><i data-lucide="info"></i> Upload a resume above to get dynamic recruiter evaluation for <strong>${roleConfig.title}</strong>.</p>
                <div class="ai-output-card">
                    <p><strong>AI Recruiter Evaluation Summary (${roleConfig.title}):</strong></p>
                    <br>
                    <p>• <strong>Core Competency Signal:</strong> Solid foundation across baseline ${roleConfig.title} requirements.</p>
                    <p>• <strong>Key Recruiter Recommendation:</strong> ${roleConfig.recruiterFeedback}</p>
                    <p>• <strong>Hiring Manager Verdict:</strong> <span style="color: var(--accent-emerald); font-weight: bold;">STRONG PASSTHROUGH TO FIRST ROUND INTERVIEW</span></p>
                </div>
            </div>
        `;
    }

    const tier = ResumeStore.computeRecruiterTierForRole(roleKey);
    const detectedIds = ResumeStore.getDetectedSkillsForRole(roleKey);
    const detectedLabels = detectedIds.map(id => roleConfig.skills.find(s => s.id === id)?.label || id);
    const missingSkills = roleConfig.skills.filter(s => !detectedIds.includes(s.id));
    const primaryGap = missingSkills.length ? missingSkills[0].label : 'Minor polish';
    const keywords = ResumeStore.getDetectedKeywordsForRole(roleKey).slice(0, 6);

    return `
        <div class="recruiter-lens-box">
            <div class="feedback-tag-group">
                <span class="feedback-badge ${tier.color}">Target Role: ${roleConfig.title} (${tier.tier})</span>
                <span class="feedback-badge badge-purple">Resume: ${ResumeStore.getFileName()}</span>
                <span class="feedback-badge badge-amber">Gap: ${primaryGap}</span>
            </div>
            <p class="resume-sync-notice"><i data-lucide="link-2"></i> Live NLP analysis from your uploaded resume synced to <strong>${roleConfig.title}</strong>.</p>
            <div class="ai-output-card">
                <p><strong>AI Recruiter Evaluation Summary (${roleConfig.title}):</strong></p>
                <br>
                <p>• <strong>Detected Role Skills (${detectedIds.length}/${roleConfig.skills.length}):</strong> ${detectedLabels.join(', ') || 'None detected yet'}.</p>
                <p>• <strong>Matched Keywords:</strong> ${keywords.join(', ') || 'General tech terms'}.</p>
                <p>• <strong>Primary Skill Gap:</strong> <strong style="color: var(--accent-amber);">${primaryGap}</strong>.</p>
                <p>• <strong>Hiring Manager Verdict:</strong> <span style="color: var(--accent-emerald); font-weight: bold;">${tier.tier.includes('Top') ? 'STRONG PASSTHROUGH TO INTERVIEW ROUND' : 'REVISE RESUME SKILLS BEFORE APPLYING'}</span></p>
            </div>
        </div>
    `;
}

function buildSkillROIContent() {
    const roleKey = document.getElementById('user-role')?.value || 'apm';
    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;
    const detectedIds = ResumeStore.getDetectedSkillsForRole(roleKey);

    const uplifts = ['+28%', '+24%', '+18%', '+15%', '+12%', '+10%'];

    const items = roleConfig.skills.map((skill, idx) => {
        const isVerified = detectedIds.includes(skill.id);
        const statusTag = isVerified
            ? '<span style="color: var(--accent-emerald); font-weight: bold;"><i data-lucide="check-circle-2"></i> Verified in Resume</span>'
            : '<span style="color: var(--accent-amber); font-weight: bold;"><i data-lucide="alert-triangle"></i> Not in Resume — High ROI</span>';

        return `<p>${idx + 1}. <strong>${skill.label}:</strong> ${uplifts[idx % uplifts.length]} Salary Uplift | ${statusTag}</p>`;
    }).join('\n');

    const topMissing = roleConfig.skills.find(s => !detectedIds.includes(s.id));

    return `
        <div class="recruiter-lens-box">
            <div class="feedback-tag-group">
                <span class="feedback-badge badge-green">Target Role: ${roleConfig.title}</span>
                ${topMissing ? `<span class="feedback-badge badge-amber">Highest ROI Gap: ${topMissing.label}</span>` : '<span class="feedback-badge badge-green">All Core Skills Covered!</span>'}
            </div>
            <div class="ai-output-card">
                <p><strong>Skill ROI & Value Breakdown for ${roleConfig.title}:</strong></p>
                <br>
                ${items}
                <br>
                <p><em>ROI Recommendation: ${topMissing ? `Acquiring <strong>${topMissing.label}</strong> yields the highest callback multiplier for ${roleConfig.title} applications.` : 'Your resume covers all key core skills for this role! Focus on portfolio project walkthroughs.'}</em></p>
            </div>
        </div>
    `;
}

function buildRoleScoreContent() {
    const matches = ResumeStore.computeRoleMatches();
    const activeRole = document.getElementById('user-role')?.value || 'apm';

    return `
        <div class="recruiter-lens-box">
            <p class="resume-sync-notice"><i data-lucide="link-2"></i> JD matching matrices benchmarked across all 5 tech tracks.</p>
            <div class="ai-output-card">
                <p><strong>Job Description Matching Matrix:</strong></p>
                <br>
                <p>• Associate Product Manager (APM): <strong>${matches.apm}% Match</strong> ${activeRole === 'apm' ? '👈 (Selected)' : ''}</p>
                <p>• AI Product Manager: <strong>${matches['ai-pm']}% Match</strong> ${activeRole === 'ai-pm' ? '👈 (Selected)' : ''}</p>
                <p>• Associate Software Engineer: <strong>${matches.swe}% Match</strong> ${activeRole === 'swe' ? '👈 (Selected)' : ''}</p>
                <p>• Data / Product Analyst: <strong>${matches.data}% Match</strong> ${activeRole === 'data' ? '👈 (Selected)' : ''}</p>
                <p>• UX / Product Designer: <strong>${matches.ux}% Match</strong> ${activeRole === 'ux' ? '👈 (Selected)' : ''}</p>
            </div>
        </div>
    `;
}

function buildRoadmapGenContent() {
    const roleKey = document.getElementById('user-role')?.value || 'apm';
    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;
    const expSelect = document.getElementById('user-exp');
    const expValue = expSelect ? expSelect.value : 'fresher';
    const isFresher = (expValue === 'fresher');

    const checkedSkills = Array.from(document.querySelectorAll('#checkbox-grid input:checked')).map(cb => cb.value);
    const resumeDetected = ResumeStore.getDetectedSkillsForRole(roleKey);
    const roleTips = ROLE_PRO_TIPS[roleKey] || ROLE_PRO_TIPS.apm;

    const missingSkills = roleConfig.skills.filter(s => !checkedSkills.includes(s.id));
    const verifiedSkills = roleConfig.skills.filter(s => checkedSkills.includes(s.id));

    const resumeNote = ResumeStore.hasResume()
        ? `Resume "${ResumeStore.getFileName()}" synced (${resumeDetected.length} skills auto-detected)`
        : 'Resume: Not uploaded (Self-Assessment Mode)';

    const gapSolutionsHTML = missingSkills.length ? missingSkills.map(gap => {
        const tip = roleTips[gap.label] || `Master ${gap.label} and showcase it in your portfolio write-up to boost recruiter callback rates.`;
        return `
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.8rem 1rem; margin-bottom: 0.8rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                    <span style="font-weight: 700; color: var(--accent-amber); font-size: 0.88rem;">✗ Skill Gap: ${gap.label}</span>
                    <span class="feedback-badge badge-amber">Gap Priority</span>
                </div>
                <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.4rem;">
                    <strong>Recommended Career Action:</strong> Build a hands-on feature or module explicitly demonstrating <strong>${gap.label}</strong> for ${roleConfig.title}.
                </p>
                <div style="font-size: 0.8rem; color: var(--accent-cyan); background: rgba(6, 182, 212, 0.08); padding: 0.4rem 0.6rem; border-radius: 4px;">
                    💡 ${tip}
                </div>
            </div>
        `;
    }).join('') : `
        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid var(--accent-emerald); border-radius: var(--radius-sm); padding: 0.8rem 1rem; margin-bottom: 0.8rem; color: var(--accent-emerald);">
            ✓ <strong>All ${roleConfig.skills.length} core competencies for ${roleConfig.title} are verified in your resume! Focus on portfolio packaging.</strong>
        </div>
    `;

    let salaryRange = "$75,000 – $105,000 / yr";
    let targetCompanies = "Growth SaaS Startups, Mid-Market Tech, Fintech Unicorns";
    if (roleKey === 'ai-pm') {
        salaryRange = "$95,000 – $140,000 / yr";
        targetCompanies = "AI Labs, Enterprise LLM Platforms, High-Growth AI Unicorns";
    } else if (roleKey === 'swe') {
        salaryRange = "$85,000 – $125,000 / yr";
        targetCompanies = "FAANG, High-Scale Cloud Tech, FinTech Platforms";
    } else if (roleKey === 'data') {
        salaryRange = "$70,000 – $100,000 / yr";
        targetCompanies = "E-Commerce Platforms, Product Analytics Firms, Fintech";
    } else if (roleKey === 'ux') {
        salaryRange = "$72,000 – $102,000 / yr";
        targetCompanies = "Design Agencies, Consumer Mobile Apps, B2B SaaS";
    }

    return `
        <div class="recruiter-lens-box">
            <div class="feedback-tag-group">
                <span class="feedback-badge badge-green">Target Role: ${roleConfig.title}</span>
                <span class="feedback-badge badge-purple">${isFresher ? 'Fresher Candidate Track' : 'Experienced Transition Track'}</span>
                <span class="feedback-badge badge-cyan">✓ ${verifiedSkills.length} Verified</span>
                <span class="feedback-badge badge-amber">✗ ${missingSkills.length} Gaps</span>
            </div>

            <p class="resume-sync-notice"><i data-lucide="link-2"></i> ${resumeNote}</p>

            <div class="ai-output-card" style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--accent-cyan); margin-bottom: 0.6rem;">🎯 AI Personalized Career Profile & Market Positioning</h4>
                <p style="font-size: 0.85rem; color: var(--text-primary); margin-bottom: 0.3rem;">• <strong>Target Salary Band:</strong> ${salaryRange}</p>
                <p style="font-size: 0.85rem; color: var(--text-primary); margin-bottom: 0.3rem;">• <strong>Recommended Company Tier:</strong> ${targetCompanies}</p>
                <p style="font-size: 0.85rem; color: var(--text-primary);">• <strong>Recruiter Screening Verdict:</strong> ${roleConfig.recruiterFeedback}</p>
            </div>

            <div class="ai-output-card" style="margin-bottom: 1.2rem;">
                <h4 style="color: var(--accent-amber); margin-bottom: 0.8rem;">⚡ Detailed Skill Gap Resolution Strategy (${missingSkills.length} Skill Gaps)</h4>
                ${gapSolutionsHTML}
            </div>

            <div class="ai-output-card">
                <h4 style="color: var(--accent-emerald); margin-bottom: 0.6rem;">📅 Actionable 90-Day Execution Timeline</h4>
                <p style="font-size: 0.85rem; color: var(--text-primary); margin-bottom: 0.4rem;">
                    • <strong>Month 1 (Days 1–30):</strong> Build 1 concrete feature or project module for every missing skill gap above. Update resume text and re-upload to Career Ready.
                </p>
                <p style="font-size: 0.85rem; color: var(--text-primary); margin-bottom: 0.4rem;">
                    • <strong>Month 2 (Days 31–60):</strong> Deploy your interactive app sandbox to Vercel/GitHub Pages and record a 2-minute Loom video demo walking through your problem discovery & metrics.
                </p>
                <p style="font-size: 0.85rem; color: var(--text-primary);">
                    • <strong>Month 3 (Days 61–90):</strong> Practice mock interviews on Career Ready, run targeted LinkedIn outreach to Senior Managers with a 3-bullet project pitch, and track callback rates.
                </p>
            </div>
        </div>
    `;
}

function buildReadinessScoreContent() {
    const roleKey = document.getElementById('user-role')?.value || 'apm';
    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;

    const expSelect = document.getElementById('user-exp');
    const checkedSkills = Array.from(document.querySelectorAll('#checkbox-grid input:checked')).map(cb => cb.value);
    const resumeDetected = ResumeStore.getDetectedSkillsForRole(roleKey);

    let base = roleConfig.baseScore;
    let skillPts = checkedSkills.length * 6;
    let expPts = (expSelect && expSelect.value === 'intern') ? 8 : (expSelect && expSelect.value === 'career-switch' ? 4 : 0);
    let resumePts = ResumeStore.hasResume() ? Math.min(resumeDetected.length * 3, 12) : 0;

    let totalScore = Math.min(Math.max(base + skillPts + expPts + resumePts, 35), 98);

    const skillListHTML = roleConfig.skills.map(skill => {
        const isChecked = checkedSkills.includes(skill.id);
        const isDetected = resumeDetected.includes(skill.id);

        let statusBadge = '';
        if (isDetected && isChecked) {
            statusBadge = '<span class="feedback-badge badge-green">✓ Verified in Resume (+15 pts)</span>';
        } else if (isChecked) {
            statusBadge = '<span class="feedback-badge badge-cyan">✓ Self-Checked (+10 pts)</span>';
        } else if (isDetected) {
            statusBadge = '<span class="feedback-badge badge-purple">✓ In Resume (+12 pts)</span>';
        } else {
            statusBadge = '<span class="feedback-badge badge-amber">✗ Missing Skill Gap (0 pts)</span>';
        }

        return `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.55rem 0; border-bottom: 1px solid var(--border-color);">
                <span style="font-size: 0.88rem; color: var(--text-primary);">• <strong>${skill.label}</strong></span>
                ${statusBadge}
            </div>
        `;
    }).join('');

    const statusTagText = totalScore >= 85
        ? 'Interview Ready'
        : (totalScore >= 70 ? 'Strong Candidate' : 'Gaps Identified');

    return `
        <div class="recruiter-lens-box">
            <div class="feedback-tag-group">
                <span class="feedback-badge badge-green">Target Role: ${roleConfig.title}</span>
                <span class="feedback-badge badge-purple">Readiness Score: ${totalScore}%</span>
                <span class="feedback-badge badge-cyan">Status: ${statusTagText}</span>
            </div>
            ${ResumeStore.hasResume()
                ? `<p class="resume-sync-notice"><i data-lucide="link-2"></i> Score computed directly from resume "${ResumeStore.getFileName()}" (${resumeDetected.length}/${roleConfig.skills.length} skills verified).</p>`
                : '<p class="resume-sync-notice"><i data-lucide="info"></i> Upload your resume above to auto-verify skills and boost your score calculation.</p>'
            }
            <div class="ai-output-card">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; padding-bottom: 0.8rem; border-bottom: 2px solid var(--border-color);">
                    <div>
                        <h4 style="font-size: 1.1rem; color: var(--accent-cyan); margin: 0;">Calculated Career Readiness Score</h4>
                        <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0;">Based on resume parsing, verified skills & role alignment</p>
                    </div>
                    <div style="font-size: 2.2rem; font-weight: 800; color: var(--accent-cyan); font-family: var(--font-heading);">${totalScore}%</div>
                </div>`;r: var(--accent-cyan); font-family: var(--font-heading);">${totalScore}%</div>
                </div>

                <p style="margin-bottom: 0.6rem;"><strong>Role Core Skill Breakdown (${roleConfig.title}):</strong></p>
                <div style="margin-bottom: 1.2rem;">
                    ${skillListHTML}
                </div>

                <div style="background: rgba(255,255,255,0.03); padding: 0.8rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                    <p><strong>Score Point Breakdown:</strong></p>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.3rem;">
                        Base Target Score: <strong>${base} pts</strong> | Verified Core Skills: <strong>+${skillPts} pts</strong> | Experience Weighting: <strong>+${expPts} pts</strong> | Resume Parsing Bonus: <strong>+${resumePts} pts</strong>
                    </p>
                </div>
            </div>
        </div>
    `;
}

function buildImpactEngineContent() {
    const roleKey = document.getElementById('user-role')?.value || 'apm';
    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;
    const score = ResumeStore.computeATSScoreForRole(roleKey);
    const callbackMult = ResumeStore.hasResume()
        ? (score >= 80 ? '3.8x' : '2.9x')
        : '3.2x';

    return `
        <div class="recruiter-lens-box">
            <div class="ai-output-card">
                <p><strong>1-Year Career Trajectory Simulation (${roleConfig.title}):</strong></p>
                <br>
                <p>• <strong>Expected Interview Callbacks:</strong> ${callbackMult} Industry Average</p>
                <p>• <strong>Offer Conversion Probability:</strong> ${Math.min(55 + ResumeStore.getDetectedSkillsForRole(roleKey).length * 5, 88)}%</p>
                <p>• <strong>Key Portfolio Asset:</strong> "Career Ready" Case Study PRD & Interactive ${roleConfig.title} Simulator</p>
            </div>
        </div>
    `;
}

let activeAIEngineKey = 'recruiter-lens';

function refreshActiveAIEngine() {
    switchAIEngine(activeAIEngineKey);
}

/* --------------------------------------------------------------------------
   0. MANUAL LIGHT / DARK THEME TOGGLE
   -------------------------------------------------------------------------- */
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const themeLabel = document.getElementById('theme-label');
    const iconMoon = document.getElementById('theme-icon-moon');
    const iconSun = document.getElementById('theme-icon-sun');

    const savedTheme = localStorage.getItem('careerReady_theme') || 'dark';
    applyTheme(savedTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark-theme');
            const nextTheme = isDark ? 'light' : 'dark';
            applyTheme(nextTheme);
            localStorage.setItem('careerReady_theme', nextTheme);
        });
    }

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            if (themeLabel) themeLabel.textContent = 'Light';
            if (iconMoon) iconMoon.style.display = 'none';
            if (iconSun) iconSun.style.display = 'inline-block';
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            if (themeLabel) themeLabel.textContent = 'Dark';
            if (iconMoon) iconMoon.style.display = 'inline-block';
            if (iconSun) iconSun.style.display = 'none';
        }
        if (window.lucide) lucide.createIcons();
    }
}

function mainInit() {
    try { ResumeStore.init(); } catch(e) { console.warn('ResumeStore init:', e); }
    try { if (window.lucide) lucide.createIcons(); } catch(e) { console.warn('Lucide init:', e); }
    try { initThemeToggle(); } catch(e) { console.warn('ThemeToggle init:', e); }
    try { initResumeUpload(); } catch(e) { console.warn('ResumeUpload init:', e); }
    try { initNavigation(); } catch(e) { console.warn('Navigation init:', e); }
    try { initAssessmentSimulator(); } catch(e) { console.warn('Assessment init:', e); }
    try { initAIEnginesShowcase(); } catch(e) { console.warn('AIEngines init:', e); }
    try { initPRDViewer(); } catch(e) { console.warn('PRD init:', e); }
    try { initWireframeViewer(); } catch(e) { console.warn('Wireframe init:', e); }
    try { initTelemetryStream(); } catch(e) { console.warn('Telemetry init:', e); }
    try { initExportModal(); } catch(e) { console.warn('ExportModal init:', e); }
    try { calculateAndRenderResults(); } catch(e) { console.warn('Results init:', e); }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mainInit);
} else {
    mainInit();
}

/* --------------------------------------------------------------------------
   4. NAVIGATION & TAB SWITCHING
   -------------------------------------------------------------------------- */
function initNavigation() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-btn');
        if (btn) {
            const targetTab = btn.getAttribute('data-tab');
            if (targetTab) {
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                document.querySelectorAll('.tab-page').forEach(page => {
                    if (page.id === targetTab) {
                        page.classList.add('active');
                    } else {
                        page.classList.remove('active');
                    }
                });

                try { if (window.lucide) lucide.createIcons(); } catch(err) {}
            }
        }

        const actionTile = e.target.closest('.action-tile');
        if (actionTile) {
            const action = actionTile.getAttribute('data-action');
            if (action === 'run-recruiter') {
                switchToTab('tab-ai-engines');
                switchAIEngine('recruiter-lens');
            } else if (action === 'run-roi') {
                switchToTab('tab-ai-engines');
                switchAIEngine('skill-roi');
            } else if (action === 'view-roadmap') {
                const roadmapEl = document.getElementById('roadmap-timeline');
                if (roadmapEl) roadmapEl.scrollIntoView({ behavior: 'smooth' });
            }
        }

        const aiSideBtn = e.target.closest('.ai-side-btn');
        if (aiSideBtn) {
            const aiKey = aiSideBtn.getAttribute('data-ai');
            if (aiKey) {
                document.querySelectorAll('.ai-side-btn').forEach(b => b.classList.remove('active'));
                aiSideBtn.classList.add('active');
                activeAIEngineKey = aiKey;
                switchAIEngine(aiKey);
            }
        }

        const tocItem = e.target.closest('.toc-item');
        if (tocItem) {
            document.querySelectorAll('.toc-item').forEach(i => i.classList.remove('active'));
            tocItem.classList.add('active');
            const secKey = tocItem.getAttribute('data-prd-sec');
            const contentBody = document.getElementById('prd-content-body');
            if (contentBody && PRD_SECTIONS[secKey]) {
                contentBody.innerHTML = PRD_SECTIONS[secKey];
            }
        }

        const screenBtn = e.target.closest('.screen-btn');
        if (screenBtn) {
            document.querySelectorAll('.screen-btn').forEach(b => b.classList.remove('active'));
            screenBtn.classList.add('active');
            const screenKey = screenBtn.getAttribute('data-screen');
            const stage = document.getElementById('wireframe-stage');
            if (stage && WIREFRAME_SCREENS[screenKey]) {
                stage.innerHTML = WIREFRAME_SCREENS[screenKey];
            }
        }

        const exportBtn = e.target.closest('#btn-export-summary');
        if (exportBtn) {
            updateExportModalResumeFields();
            const modal = document.getElementById('export-modal');
            if (modal) modal.classList.add('active');
        }
    });
}

function switchToTab(tabId) {
    const btn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
    if (btn) btn.click();
}

/* --------------------------------------------------------------------------
   5. ASSESSMENT SIMULATOR & DYNAMIC READINESS ENGINE
   -------------------------------------------------------------------------- */
function initAssessmentSimulator() {
    const form = document.getElementById('assessment-form');
    const roleSelect = document.getElementById('user-role');
    const expSelect = document.getElementById('user-exp');

    if (roleSelect) {
        roleSelect.addEventListener('change', () => {
            const roleKey = roleSelect.value;
            renderRoleSkillsGrid(roleKey);
            calculateAndRenderResults();
            ResumeStore.syncAllFeatures();
        });
    }

    if (expSelect) {
        expSelect.addEventListener('change', () => {
            calculateAndRenderResults();
            ResumeStore.syncAllFeatures();
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            calculateAndRenderResults();
            ResumeStore.syncAllFeatures();

            const resultsCard = document.getElementById('readiness-ring')?.closest('.results-grid') || document.getElementById('readiness-ring');
            if (resultsCard) {
                resultsCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // Initial render for default APM role
    renderRoleSkillsGrid('apm');
    calculateAndRenderResults();
}

function calculateAndRenderResults() {
    const roleSelect = document.getElementById('user-role');
    const expSelect = document.getElementById('user-exp');
    const roleKey = roleSelect ? roleSelect.value : 'apm';
    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;

    const checkedSkills = Array.from(document.querySelectorAll('#checkbox-grid input:checked')).map(cb => cb.value);
    const resumeDetected = ResumeStore.getDetectedSkillsForRole(roleKey);

    const scoreNumEl = document.getElementById('readiness-score-num');
    const ringEl = document.getElementById('readiness-ring');
    const tagEl = document.getElementById('readiness-level-tag');
    const summaryEl = document.getElementById('readiness-summary-text');

    let score = roleConfig.baseScore;
    score += checkedSkills.length * 6;
    if (expSelect && expSelect.value === 'intern') score += 8;
    if (expSelect && expSelect.value === 'career-switch') score += 4;
    if (ResumeStore.hasResume()) score += Math.min(resumeDetected.length * 3, 12);

    score = Math.min(Math.max(score, 35), 98);

    if (scoreNumEl) scoreNumEl.textContent = score;

    if (ringEl) {
        const offset = 440 - (440 * score) / 100;
        ringEl.style.strokeDashoffset = offset;
    }

    if (tagEl) {
        if (score >= 85) {
            tagEl.textContent = "Interview Ready";
            tagEl.style.color = "var(--accent-emerald)";
        } else if (score >= 70) {
            tagEl.textContent = "Strong Candidate";
            tagEl.style.color = "var(--accent-cyan)";
        } else {
            tagEl.textContent = "Gaps Identified";
            tagEl.style.color = "var(--accent-amber)";
        }
    }

    if (summaryEl) {
        const missing = roleConfig.skills.filter(s => !checkedSkills.includes(s.id));
        const gapText = missing.length ? missing[0].label : roleConfig.gapSkill;
        const resumeNote = ResumeStore.hasResume()
            ? ` Resume "${ResumeStore.getFileName()}" synced (${resumeDetected.length} skills auto-detected).`
            : '';
        summaryEl.textContent = `Assessing for ${roleConfig.title}: ${checkedSkills.length}/${roleConfig.skills.length} core skills verified. Primary gap: ${gapText}.${resumeNote}`;
    }

    renderCompetencyBars(roleConfig, checkedSkills);
    renderRoadmap(roleConfig, score);

    const modalRole = document.getElementById('modal-role');
    const modalScore = document.getElementById('modal-score');
    const modalGap = document.getElementById('modal-gap');

    const missing = roleConfig.skills.filter(s => !checkedSkills.includes(s.id));
    if (modalRole) modalRole.textContent = roleConfig.title;
    if (modalScore) modalScore.textContent = `${score}%`;
    if (modalGap) modalGap.textContent = missing.length ? missing[0].label : roleConfig.gapSkill;
}

function renderCompetencyBars(roleConfig, checkedSkills) {
    const container = document.getElementById('competency-bars');
    if (!container) return;

    const roleKey = document.getElementById('user-role')?.value || 'apm';
    const resumeDetected = ResumeStore.getDetectedSkillsForRole(roleKey);
    const colors = ['bg-cyan', 'bg-indigo', 'bg-purple', 'bg-emerald', 'bg-amber', 'bg-cyan'];

    container.innerHTML = roleConfig.skills.map((skill, idx) => {
        const isChecked = checkedSkills.includes(skill.id);
        const isResumeDetected = resumeDetected.includes(skill.id);

        let compVal = 40;
        if (isChecked && isResumeDetected) compVal = 96;
        else if (isChecked) compVal = 82;
        else if (isResumeDetected) compVal = 75;
        else compVal = Math.max(48 - idx * 3, 35);

        const matchLabel = `${compVal}% Match ${isResumeDetected ? '✓' : ''}`;
        const colorClass = colors[idx % colors.length];

        return `
            <div class="comp-item">
                <div class="comp-header">
                    <span class="comp-name">${skill.label}</span>
                    <span class="comp-score">${matchLabel}</span>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill ${colorClass}" style="width: ${compVal}%;"></div>
                </div>
            </div>
        `;
    }).join('');
}

const ROLE_PRO_TIPS = {
    apm: {
        'PostHog & Product Telemetry': "Pro Tip: Integrate `posthog.capture('feature_used')` into your portfolio project. Show retention cohort tables in your case study to boost callback rates by 2.8x.",
        'PRD & Spec Writing': "Pro Tip: Structure your PRD using the RICE framework (Reach, Impact, Confidence, Effort). Link your live PRD spec in your resume header.",
        'Wireframing & UX Prototyping (Figma)': "Pro Tip: Create interactive component variants in Figma with Auto-Layout and link a 2-minute Loom walkthrough in your resume.",
        'AI Tools & Prompt Engineering': "Pro Tip: Document your prompt engineering techniques (few-shot prompting, system prompts) and link your AI tool prototype.",
        'User Research & JTBD Framework': "Pro Tip: Include 3 real user persona interviews with Jobs-to-be-Done (JTBD) pain points in your portfolio presentation.",
        'Metrics Definition & KPIs': "Pro Tip: Define North Star metrics, activation conversion rates, and D30 cohort benchmarks for your case study app."
    },
    'ai-pm': {
        'Model Latency & Token Cost Opt.': "Pro Tip: Implement token caching and streaming responses (SSE). Document latency budget reduction from 2.5s to 600ms in your resume.",
        'Prompt Eng. & LLM System Prompts': "Pro Tip: Link your LLM system prompt repository. Show structured JSON output schemas and zero-shot vs few-shot benchmarks.",
        'Model Evaluation & Benchmarking': "Pro Tip: Build an automated evaluation pipeline using LLM-as-a-judge on a 50-test-case golden dataset.",
        'AI Safety & Fallback Guardrails': "Pro Tip: Document model fallback rules (e.g. Flash-Lite fallback on rate limit) and moderation API guardrails in your PRD.",
        'AI PRDs & Model Specs': "Pro Tip: Write an AI PRD covering token budgets, context window limits, and cost-per-query projections.",
        'AI Builder Tools (Claude/Firebase)': "Pro Tip: Deploy a full-stack AI prototype using Claude Code, Firebase, and Vercel to showcase end-to-end execution."
    },
    swe: {
        'Unit Testing & Automated Debugging': "Pro Tip: Write Jest/PyTest unit tests reaching >85% code coverage for your REST APIs and add the GitHub Actions build badge to your resume.",
        'Data Structures & Algorithms': "Pro Tip: Highlight runtime complexity optimizations (e.g. O(N log N) vs O(N^2)) in your project README.",
        'System Design & Code Architecture': "Pro Tip: Include a C4 system design architecture diagram (load balancers, Redis cache, DB replicas) in your GitHub repository.",
        'REST APIs & Backend Integration': "Pro Tip: Publish interactive Swagger/OpenAPI documentation for your REST endpoints.",
        'Git Version Control & CI/CD': "Pro Tip: Configure automated CI/CD pipelines deploying your app to Vercel/AWS on git push.",
        'AI Code Assistants & SDKs': "Pro Tip: Demonstrate building custom API wrappers using LLM SDKs and WebSockets."
    },
    data: {
        'Power BI & Tableau Dashboarding': "Pro Tip: Build a 3-tab Power BI dashboard connected to SQL databases, publish DAX measures (`TOTALSALES = SUM(Sales[Amount])`), and link it in your resume.",
        'Advanced Excel & Financial Modeling': "Pro Tip: Use XLOOKUP, Index/Match, dynamic array formulas, and Pivot Tables to model transaction datasets and link your Excel workbook.",
        'Advanced SQL & Query Optimization': "Pro Tip: Include complex SQL CTEs, window functions (`ROW_NUMBER() OVER (PARTITION BY user_id)`), and query execution plans in your portfolio.",
        'PostHog & Amplitude Telemetry': "Pro Tip: Build user funnel drop-off reports and daily active user (DAU) telemetry logs.",
        'Cohort Retention & Funnel Analysis': "Pro Tip: Calculate Day 1, Day 7, and Day 30 user retention matrices and present recommendations in an executive summary.",
        'Python (Pandas) & A/B Testing': "Pro Tip: Run statistical hypothesis testing (p-values, T-tests) in Pandas and present confidence interval charts."
    },
    ux: {
        'Interactive Micro-animations': "Pro Tip: Create smooth Lottie/Framer CSS micro-interactions for button hover and modal states, and document design tokens.",
        'Figma Design Systems & Components': "Pro Tip: Publish a public Figma design library with dark/light mode semantic color tokens and variants.",
        'User Research & Persona Mapping': "Pro Tip: Create journey maps highlighting user friction points and link video clip snippets of usability tests.",
        'Usability Testing & Accessibility': "Pro Tip: Audit your design for WCAG 2.1 AA compliance (minimum 4.5:1 contrast ratios) and document focus state tokens.",
        'Information Arch. & Wireframes': "Pro Tip: Map low-fidelity wireframe user flows and card sorting research in FigJam.",
        'PRD Alignment & Dev Handoff': "Pro Tip: Write developer handoff specs with pixel-perfect spacing, font scales, and component state tokens."
    }
};

function renderRoadmap(roleConfig, score) {
    const container = document.getElementById('roadmap-timeline');
    if (!container) return;

    const roleKey = document.getElementById('user-role')?.value || 'apm';
    const expSelect = document.getElementById('user-exp');
    const expValue = expSelect ? expSelect.value : 'fresher';
    const isFresher = (expValue === 'fresher');

    const checkedSkills = Array.from(document.querySelectorAll('#checkbox-grid input:checked')).map(cb => cb.value);
    const resumeDetected = ResumeStore.getDetectedSkillsForRole(roleKey);
    const roleTips = ROLE_PRO_TIPS[roleKey] || ROLE_PRO_TIPS.apm;

    const missingSkills = roleConfig.skills.filter(s => !checkedSkills.includes(s.id));
    const verifiedSkills = roleConfig.skills.filter(s => checkedSkills.includes(s.id));
    const topMissing = missingSkills.length ? missingSkills[0] : roleConfig.skills[0];

    const customTip = roleTips[topMissing.label] || `Pro Tip: Master ${topMissing.label} and showcase it in your portfolio case study to double callback rates.`;

    const verifiedLabels = verifiedSkills.map(s => s.label);
    const missingLabels = missingSkills.map(s => s.label);

    const resumeStatusNote = ResumeStore.hasResume()
        ? `Resume "${ResumeStore.getFileName()}" synced: ${resumeDetected.length}/${roleConfig.skills.length} core skills auto-verified.`
        : `Self-assessment mode: ${checkedSkills.length}/${roleConfig.skills.length} core skills checked. Upload resume above to auto-sync.`;

    let items = [];

    if (isFresher) {
        // FRESHER / ENTRY-LEVEL ROADMAP TRACK
        items = [
            {
                phase: "Phase 1 • Days 1-30",
                title: `Fresher Skill Gap Resolution: ${topMissing.label}`,
                desc: `Build 0-to-1 project proof for your missing core skills (${missingLabels.length ? missingLabels.join(', ') : 'All skills verified!'}) tailored for ${roleConfig.title}:`,
                tip: customTip,
                tasks: [
                    `Build 1 concrete mini-feature or case study module for missing skill: <strong>${topMissing.label}</strong>`,
                    `Include live proof link (Figma / Power BI / GitHub repo) in your project write-up`,
                    `Update your resume bullet points with quantified results and re-upload to Career Ready`
                ]
            },
            {
                phase: "Phase 2 • Days 31-60",
                title: `Fresher Portfolio & Loom Walkthrough`,
                desc: `Package your verified skills into a recruiter-ready portfolio case study for ${roleConfig.title}:`,
                tip: `🎓 <strong>Fresher Tip:</strong> Recruiters review freshers in under 15 seconds. Include a 2-minute Loom video demo at the top of your portfolio website or GitHub README!`,
                tasks: [
                    `Publish interactive Figma wireframe / Power BI dashboard / live web app simulator`,
                    `Deploy live app sandbox to Vercel or GitHub Pages`,
                    `Record a 2-minute Loom video demo walking through your problem discovery and metrics`
                ]
            },
            {
                phase: "Phase 3 • Days 61-90",
                title: `Fresher ATS Screening & Direct Hiring Outreach`,
                desc: `Optimize resume keyword density and launch direct outreach to target hiring managers:`,
                tip: `🤝 <strong>Fresher Hiring Strategy:</strong> Cold applying online converts at <3%. Direct LinkedIn messaging to Senior Managers with a 3-bullet project pitch converts at >22%!`,
                tasks: [
                    `Run 5 mock interview rounds using Career Ready AI Mock Interviewer`,
                    `Cold reach-out to 20 target hiring managers on LinkedIn with live case study link`,
                    `Track application response rates and iterate resume keyword density`
                ]
            }
        ];
    } else {
        // EXPERIENCED / CAREER SWITCHER ROADMAP TRACK
        items = [
            {
                phase: "Phase 1 • Days 1-30",
                title: `Advanced Skill Gap & Business Metric Optimization`,
                desc: `Elevate core competencies (${missingLabels.length ? missingLabels.join(', ') : 'All skills verified!'}) to enterprise and business-impact standards for ${roleConfig.title}:`,
                tip: `💼 <strong>Experienced Strategy Tip:</strong> Hiring managers for experienced candidates evaluate business impact and system trade-offs. Frame your skills around ROI, scalability, and latency metrics.`,
                tasks: [
                    `Design enterprise-grade implementations for missing skill: <strong>${topMissing.label}</strong>`,
                    `Quantify high-level business impact (e.g. "reduced inference cost by 45%, saving $12k/yr")`,
                    `Structure resume bullet points using STAR framework (Situation, Task, Action, Result)`
                ]
            },
            {
                phase: "Phase 2 • Days 31-60",
                title: `Architecture Specification & System Showcase`,
                desc: `Demonstrate system architecture, data pipelines, and senior design ownership for ${roleConfig.title}:`,
                tip: `💼 <strong>Experienced Portfolio Tip:</strong> Senior recruiters look for system ownership. Link a C4 architecture diagram or executive dashboard directly in your resume header!`,
                tasks: [
                    `Publish technical Architecture PRD / System Design Diagram (C4 model / ERD schema)`,
                    `Configure automated CI/CD build pipelines with Jest/PyTest test coverage badges (>85%)`,
                    `Publish an executive dashboard highlighting revenue conversion and churn retention cohorts`
                ]
            },
            {
                phase: "Phase 3 • Days 61-90",
                title: `Executive Placement & Referral Campaign`,
                desc: `Leverage warm referral channels, senior ATS optimization, and offer package negotiations for ${roleConfig.title}:`,
                tip: `🤝 <strong>Recruiter Executive Verdict:</strong> ${roleConfig.recruiterFeedback}`,
                tasks: [
                    `Run senior-level technical & product strategy mock interviews on system trade-off scenarios`,
                    `Leverage warm referral channels and target internal recruiters at high-growth tech companies`,
                    `Negotiate offer packages utilizing Skill ROI salary uplift metrics (+25-38% target uplift)`
                ]
            }
        ];
    }

    container.innerHTML = `
        <div style="background: rgba(6, 182, 212, 0.06); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem 1.2rem; margin-bottom: 1.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.8rem;">
                <div>
                    <h4 style="margin: 0; color: var(--accent-cyan); font-size: 1.05rem;">
                        ${isFresher ? '🎓 Fresher Career Acceleration Roadmap' : '💼 Experienced / Career Switcher Transition Roadmap'} (${roleConfig.title})
                    </h4>
                    <p style="margin: 0.2rem 0 0 0; font-size: 0.83rem; color: var(--text-secondary);">${resumeStatusNote}</p>
                </div>
                <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                    <span class="feedback-badge badge-cyan">${isFresher ? 'Fresher Track' : 'Experienced Track'}</span>
                    <span class="feedback-badge badge-green">✓ ${checkedSkills.length} Verified</span>
                    <span class="feedback-badge badge-amber">✗ ${missingSkills.length} Gaps</span>
                </div>
            </div>

            <div style="font-size: 0.82rem; color: var(--text-primary); border-top: 1px solid var(--border-color); padding-top: 0.6rem; display: flex; flex-direction: column; gap: 0.3rem;">
                <div><strong>Verified Resume Skills:</strong> ${verifiedLabels.length ? verifiedLabels.map(l => `<span style="color: var(--accent-emerald);">✓ ${l}</span>`).join(' &nbsp;•&nbsp; ') : '<span style="color: var(--text-muted);">None verified yet</span>'}</div>
                <div><strong>Identified Skill Gaps:</strong> ${missingLabels.length ? missingLabels.map(l => `<span style="color: var(--accent-amber);">✗ ${l}</span>`).join(' &nbsp;•&nbsp; ') : '<span style="color: var(--accent-emerald);">✓ All core skills verified!</span>'}</div>
            </div>
        </div>

        ${items.map(item => `
            <div class="roadmap-card">
                <div class="phase-tag">${item.phase}</div>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <div style="background: rgba(6, 182, 212, 0.08); border-left: 3px solid var(--accent-cyan); padding: 0.7rem 0.9rem; border-radius: 6px; margin: 0.8rem 0; font-size: 0.83rem; color: var(--text-primary);">
                    <i data-lucide="lightbulb" style="color: var(--accent-cyan); width: 14px; height: 14px; margin-right: 4px; display: inline-block; vertical-align: middle;"></i>
                    ${item.tip}
                </div>
                <ul class="roadmap-tasks">
                    ${item.tasks.map(t => `<li><i data-lucide="check-circle-2"></i> ${t}</li>`).join('')}
                </ul>
            </div>
        `).join('')}
    `;

    if (window.lucide) lucide.createIcons();

    document.querySelectorAll('.roadmap-controls .chip-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.roadmap-controls .chip-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

/* --------------------------------------------------------------------------
   6. AI ENGINES SHOWCASE
   -------------------------------------------------------------------------- */
function initAIEnginesShowcase() {
    switchAIEngine('recruiter-lens');
}

function switchAIEngine(aiKey) {
    const displayEl = document.getElementById('ai-engine-display');
    if (!displayEl) return;

    let title = '';
    let subtitle = '';
    let content = '';

    const roleKey = document.getElementById('user-role')?.value || 'apm';
    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;

    if (aiKey === 'recruiter-lens') {
        title = `AI Recruiter Lens Engine (${roleConfig.title})`;
        subtitle = "Simulates HR & Hiring Manager resume screening for your target role";
        content = buildRecruiterLensContent();
    } else if (aiKey === 'resume-scanner') {
        title = `Resume ATS & Skill Gap Optimizer (${roleConfig.title})`;
        subtitle = "Runs NLP parsing against target role skills to calculate ATS score";
        content = `
            <div class="recruiter-lens-box">
                <div style="margin-bottom: 1rem;">
                    <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.5rem;">Resume Text (Auto-synced from Upload):</label>
                    <textarea id="resume-text-input" class="form-control" style="height: 110px; resize: vertical; font-family: monospace; font-size: 0.85rem;" placeholder="Paste resume text or upload a file above..."></textarea>
                </div>
                <div style="display: flex; gap: 0.8rem; margin-bottom: 1.2rem;">
                    <button class="btn-primary-sm" id="btn-analyze-resume"><i data-lucide="sparkles"></i> Run ATS Analysis for ${roleConfig.title}</button>
                    <button class="chip-btn" id="btn-load-sample-resume">Load Sample ${roleConfig.title} Resume</button>
                </div>
                <div id="resume-analysis-results" class="ai-output-card" style="display: none;"></div>
            </div>
        `;
    } else if (aiKey === 'interview-sim') {
        title = `AI Mock Interviewer (${roleConfig.title})`;
        subtitle = `Simulate technical & strategic questions specific to ${roleConfig.title}`;
        content = `
            <div class="recruiter-lens-box">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <span class="feedback-badge badge-purple" id="interview-question-badge">Question</span>
                    <button class="chip-btn" id="btn-next-question"><i data-lucide="refresh-cw"></i> Next Question</button>
                </div>
                <div class="ai-output-card" style="margin-bottom: 1rem; border-left: 3px solid var(--accent-cyan);">
                    <p style="font-size: 0.95rem; color: var(--text-primary);" id="interview-question-text"></p>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.5rem;">Your Response:</label>
                    <textarea id="interview-answer-input" class="form-control" style="height: 100px; resize: vertical; font-size: 0.85rem;" placeholder="Type your response..."></textarea>
                </div>
                <button class="btn-primary-sm" id="btn-evaluate-answer" style="margin-bottom: 1rem;"><i data-lucide="send"></i> Submit for AI Feedback</button>
                <div id="interview-feedback-result" class="ai-output-card" style="display: none; background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2);"></div>
            </div>
        `;
    } else if (aiKey === 'skill-roi') {
        title = `Skill ROI Engine (${roleConfig.title})`;
        subtitle = "Calculates career value & salary uplift for skills in this role";
        content = buildSkillROIContent();
    } else if (aiKey === 'impact-engine') {
        title = `Career Impact Engine (${roleConfig.title})`;
        subtitle = "Projects 1-year career impact metrics based on portfolio quality";
        content = buildImpactEngineContent();
    } else if (aiKey === 'readiness-score') {
        title = `Career Readiness Formula (${roleConfig.title})`;
        subtitle = "Proprietary weighted scoring formula aggregating skills & experience";
        content = buildReadinessScoreContent();
    } else if (aiKey === 'role-score') {
        title = "Role Matching Matrix Across Tech Tracks";
        subtitle = "Benchmarking across all 5 career tracks";
        content = buildRoleScoreContent();
    } else if (aiKey === 'roadmap-gen') {
        title = `Personalized Roadmap Generator (${roleConfig.title})`;
        subtitle = "AI timeline synthesis connecting skill gaps to weekly milestones";
        content = buildRoadmapGenContent();
    }

    displayEl.innerHTML = `
        <div class="engine-demo-header">
            <h3>${title}</h3>
            <p>${subtitle}</p>
        </div>
        ${content}
    `;

    if (window.lucide) lucide.createIcons();

    const sideBtn = document.querySelector(`.ai-side-btn[data-ai="${aiKey}"]`);
    if (sideBtn) {
        document.querySelectorAll('.ai-side-btn').forEach(b => b.classList.remove('active'));
        sideBtn.classList.add('active');
    }

    if (aiKey === 'resume-scanner') {
        initResumeScannerHandlers();
    } else if (aiKey === 'interview-sim') {
        initInterviewSimHandlers();
    }
}

function initResumeScannerHandlers() {
    const btnLoad = document.getElementById('btn-load-sample-resume');
    const btnAnalyze = document.getElementById('btn-analyze-resume');
    const txtInput = document.getElementById('resume-text-input');
    const resultsBox = document.getElementById('resume-analysis-results');

    const roleKey = document.getElementById('user-role')?.value || 'apm';
    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;

    if (txtInput && ResumeStore.hasResume()) {
        txtInput.value = ResumeStore.getText();
    }

    if (btnLoad && txtInput) {
        btnLoad.addEventListener('click', () => {
            const sampleSkills = roleConfig.skills.map(s => s.label).join(', ');
            txtInput.value = `Candidate Resume for ${roleConfig.title}:\n- Demonstrated hands-on experience in ${sampleSkills}.\n- Built portfolio case studies, analyzed user retention telemetry, and conducted user research.`;
        });
    }

    if (btnAnalyze && txtInput && resultsBox) {
        btnAnalyze.addEventListener('click', () => {
            const val = txtInput.value.trim();
            if (!val) {
                alert('Please enter or upload a resume to analyze!');
                return;
            }

            const lower = val.toLowerCase();
            const detected = roleConfig.skills.filter(s => s.patterns.some(p => lower.includes(p)));
            const missing = roleConfig.skills.filter(s => !s.patterns.some(p => lower.includes(p)));

            const score = Math.min(50 + detected.length * 8, 98);

            resultsBox.style.display = 'block';
            resultsBox.innerHTML = `
                <div style="margin-bottom: 0.8rem;">
                    <span class="feedback-badge badge-green">ATS Match for ${roleConfig.title}: ${score}%</span>
                    <span class="feedback-badge badge-purple">Detected: ${detected.length}/${roleConfig.skills.length} Core Skills</span>
                </div>
                <p><strong>AI Resume Analysis Report:</strong></p>
                <ul style="margin-top: 0.5rem; margin-left: 1.2rem; color: var(--text-primary); line-height: 1.6;">
                    <li><strong>Found Core Skills:</strong> ${detected.map(s => s.label).join(', ') || 'General tech terms'}.</li>
                    <li><strong>Missing Core Skills:</strong> ${missing.map(s => s.label).join(', ') || 'All core skills detected!'}.</li>
                    <li><strong>Suggested Fix:</strong> Add explicit bullet points proving experience in ${missing.length ? missing[0].label : 'quantified business impact'}.</li>
                </ul>
            `;
        });
    }
}

function generateDynamicInterviewQuestions(roleKey) {
    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;
    const detectedSkills = ResumeStore.getDetectedSkillsForRole(roleKey);
    const missingSkills = roleConfig.skills.filter(s => !detectedSkills.includes(s.id));

    const questionsList = [];

    // 1. Generate Resume Defense Questions for verified resume skills
    if (detectedSkills.length > 0) {
        detectedSkills.forEach(skillId => {
            const skillObj = roleConfig.skills.find(s => s.id === skillId);
            if (!skillObj) return;

            questionsList.push({
                type: 'resume',
                badge: `🎯 Resume Defense: ${skillObj.label}`,
                q: `Your resume lists verified experience in ${skillObj.label}. Walk us through a real project where you applied ${skillObj.label}, how you handled edge cases, and your measured results.`,
                tips: `Since ${skillObj.label} is on your resume, recruiters expect a STAR-format response (Situation, Task, Action, Result) with explicit metrics.`,
                skillLabel: skillObj.label
            });
        });
    }

    // 2. Generate Skill Gap Challenge Questions for missing skills
    missingSkills.forEach(skillObj => {
        let gapQ = `Your resume does not highlight experience in ${skillObj.label}. How would you design and implement a solution incorporating ${skillObj.label} for a ${roleConfig.title} role?`;
        let gapTip = `Focus on explaining the core concepts of ${skillObj.label}, why it is critical for ${roleConfig.title}, and how you would build a hands-on feature to bridge this gap.`;

        if (skillObj.id === 'powerbi-dashboards') {
            gapQ = `Your resume does not mention Power BI or executive dashboards. How do you design an automated Power BI dashboard connecting SQL queries with custom DAX measures?`;
            gapTip = `Discuss DAX calculated columns vs measures, star schema data modeling, and scheduled gateway refresh.`;
        } else if (skillObj.id === 'advanced-excel') {
            gapQ = `How do you use Advanced Excel (XLOOKUP, Index/Match, Pivot Tables, Dynamic Arrays) to model messy transaction datasets?`;
            gapTip = `Discuss data cleaning, handling N/A errors, dynamic arrays, and structured table references.`;
        } else if (skillObj.id === 'analytics' || skillObj.id === 'posthog') {
            gapQ = `Your resume does not detail product telemetry logging. How do you set up PostHog / Amplitude event tracking to measure funnel conversion and D30 cohort retention?`;
            gapTip = `Discuss event name schemas (e.g. user_signed_up), user properties, funnel drop-off points, and retention matrices.`;
        } else if (skillObj.id === 'cost-opt' || skillObj.id === 'latency') {
            gapQ = `How do you reduce LLM API latency under 800ms while optimizing token cost for high-traffic AI features?`;
            gapTip = `Discuss streaming responses (SSE), prompt caching, model fallback (Flash vs Pro), and token truncation.`;
        } else if (skillObj.id === 'unit-testing') {
            gapQ = `Your resume does not mention unit testing. How do you write Jest or PyTest unit tests achieving >85% code coverage for REST APIs?`;
            gapTip = `Discuss AAA pattern (Arrange, Act, Assert), mocking API responses, edge-case testing, and CI/CD test gates.`;
        }

        questionsList.push({
            type: 'gap',
            badge: `⚡ Skill Gap Challenge: ${skillObj.label}`,
            q: gapQ,
            tips: gapTip,
            skillLabel: skillObj.label
        });
    });

    // 3. Fallback to general role interview questions if empty
    if (questionsList.length === 0) {
        roleConfig.interviewQuestions.forEach(item => {
            questionsList.push({
                type: 'role',
                badge: item.badge,
                q: item.q,
                tips: item.tips,
                skillLabel: roleConfig.title
            });
        });
    }

    return questionsList;
}

let currentInterviewQIdx = 0;

function initInterviewSimHandlers() {
    const qBadge = document.getElementById('interview-question-badge');
    const qText = document.getElementById('interview-question-text');
    const btnNext = document.getElementById('btn-next-question');
    const btnEval = document.getElementById('btn-evaluate-answer');
    const txtAns = document.getElementById('interview-answer-input');
    const resultBox = document.getElementById('interview-feedback-result');

    const roleKey = document.getElementById('user-role')?.value || 'apm';
    const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;
    const questions = generateDynamicInterviewQuestions(roleKey);

    const renderQuestion = () => {
        const item = questions[currentInterviewQIdx % questions.length];
        const isResume = (item.type === 'resume');
        const badgeColorClass = isResume ? 'badge-green' : 'badge-amber';

        if (qBadge) {
            qBadge.className = `feedback-badge ${badgeColorClass}`;
            qBadge.textContent = item.badge;
        }
        if (qText) {
            qText.innerHTML = `"${item.q}" ${isResume ? '<br><small style="color: var(--accent-emerald); font-size: 0.8rem; display: block; margin-top: 0.4rem;">🎯 Testing skill verified on your resume</small>' : '<br><small style="color: var(--accent-amber); font-size: 0.8rem; display: block; margin-top: 0.4rem;">⚡ Preparing you for an identified skill gap</small>'}`;
        }
        if (txtAns) txtAns.value = '';
        if (resultBox) resultBox.style.display = 'none';
    };

    renderQuestion();

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            currentInterviewQIdx++;
            renderQuestion();
        });
    }

    if (btnEval && txtAns && resultBox) {
        btnEval.addEventListener('click', () => {
            const ans = txtAns.value.trim();
            if (!ans) {
                alert('Please type a response before submitting for AI feedback!');
                return;
            }

            const item = questions[currentInterviewQIdx % questions.length];
            const isResume = (item.type === 'resume');
            const scoreNum = Math.min(75 + Math.floor(ans.length / 8), 95);

            resultBox.style.display = 'block';
            resultBox.innerHTML = `
                <div style="margin-bottom: 0.5rem;">
                    <span class="feedback-badge badge-green">AI Score: ${scoreNum}/100</span>
                    <span class="feedback-badge ${isResume ? 'badge-purple' : 'badge-amber'}">${isResume ? 'Resume Verified' : 'Skill Gap Question'}</span>
                </div>
                <p><strong>AI Examiner Evaluation (${roleConfig.title}):</strong></p>
                <p style="margin-top: 0.4rem; color: var(--text-primary);">• <strong>Strengths:</strong> ${ans.length > 50 ? 'Demonstrates structured response using role terminology.' : 'Good baseline answer. Add specific project examples and metrics.'}</p>
                <p style="margin-top: 0.3rem; color: var(--text-primary);">• <strong>Examiner Tip for "${item.skillLabel}":</strong> ${item.tips}</p>
            `;
        });
    }
}

/* --------------------------------------------------------------------------
   7. INTERACTIVE PRD VIEWER
   -------------------------------------------------------------------------- */
const PRD_SECTIONS = {
    'sec-vision': `
        <h3>1. Product Vision & Scope</h3>
        <p><strong>Product Name:</strong> Career Ready</p>
        <p><strong>Vision Statement:</strong> Empower fresh graduates and entry-level aspirants to seamlessly bridge the gap between academic education and industry-ready job skills through AI-driven assessment, skill ROI discovery, and guided career execution roadmaps.</p>
        <h4>Target Scope & Boundaries</h4>
        <ul>
            <li><strong>Core Problem:</strong> Fresh graduates lack clarity on their role readiness, apply blindly to 100+ jobs, and suffer low callback rates (under 3%).</li>
            <li><strong>Solution:</strong> An intelligent career decision engine providing transparent readiness scores, AI recruiter feedback, and step-by-step 90-day execution plans.</li>
        </ul>
    `,
    'sec-personas': `
        <h3>2. Target Users & Personas</h3>
        <h4>Persona 1: Alex - The Aspiring APM (Fresh Graduate)</h4>
        <ul>
            <li><strong>Background:</strong> Final-year B.Tech / Business student looking for Associate Product Manager roles.</li>
            <li><strong>Pain Point:</strong> Doesn't know if his PRDs and Figma wireframes meet actual industry standards.</li>
            <li><strong>Goal:</strong> Wants concrete feedback and a clear checklist to get interview callbacks.</li>
        </ul>
        <h4>Persona 2: Priyanshu - The Career Switcher</h4>
        <ul>
            <li><strong>Background:</strong> Software Developer with 1 year experience transitioning into Product Management.</li>
            <li><strong>Pain Point:</strong> Unsure how to translate coding skills into PM business impact metrics.</li>
        </ul>
    `,
    'sec-jtbd': `
        <h3>3. Jobs-to-be-Done (JTBD)</h3>
        <p><strong>Primary Job Statement:</strong> "When I am preparing to apply for entry-level tech roles, I want to accurately assess my skill gaps and get personalized recommendations, so that I can maximize my interview callbacks and land my dream job with confidence."</p>
        <h4>Functional Jobs</h4>
        <ul>
            <li>Calculate my overall and role-specific readiness score in under 2 minutes.</li>
            <li>Receive instant AI recruiter resume feedback highlighting strengths and critical fixes.</li>
        </ul>
    `,
    'sec-features': `
        <h3>4. MVP Features & Core AI Modules</h3>
        <h4>1. Dynamic Role Readiness Score Engine</h4>
        <p>Calculates a weighted 0-100% readiness score evaluating role-specific core capabilities across 5 tech tracks.</p>
        <h4>2. Synchronized Resume Parser & Hub</h4>
        <p>Reads PDF, DOCX, and TXT resumes and syncs detected skills across all AI engines.</p>
        <h4>3. AI Recruiter Lens</h4>
        <p>Simulates HR recruiter evaluation to highlight high-value skills and suggest resume fixes.</p>
        <h4>4. Skill ROI Engine</h4>
        <p>Provides salary uplift projections and time-to-learn estimates per missing skill.</p>
    `,
    'sec-business': `
        <h3>5. Business Model & Growth Strategy</h3>
        <h4>Freemium Model</h4>
        <ul>
            <li><strong>Free Tier:</strong> Career Readiness Assessment, 1 AI Recruiter Lens scan, basic roadmap.</li>
            <li><strong>Pro Tier ($9/mo):</strong> Unlimited AI Recruiter resume reviews, deep-dive project templates, and direct hiring partner referrals.</li>
        </ul>
    `,
    'sec-metrics': `
        <h3>6. Key Metrics & Telemetry (PostHog / Amplitude)</h3>
        <ul>
            <li><strong>North Star Metric:</strong> Weekly Active Candidates Executing Roadmaps (WAER).</li>
            <li><strong>User Activation Rate:</strong> % of signups completing the readiness assessment (Target > 65%).</li>
            <li><strong>D30 Retention Rate:</strong> Target > 35%.</li>
        </ul>
    `,
    'sec-risks': `
        <h3>7. Risk Analysis & Mitigations</h3>
        <ul>
            <li><strong>Risk 1: AI Hallucination in Skill Evaluation.</strong> Mitigation: Use grounded scoring algorithms and deterministic JD matching vectors.</li>
            <li><strong>Risk 2: User Drop-off during Assessment.</strong> Mitigation: Keep onboarding under 6 questions with dynamic interactive chip selections.</li>
        </ul>
    `
};

function initPRDViewer() {
    const tocItems = document.querySelectorAll('.toc-item');
    const contentBody = document.getElementById('prd-content-body');

    tocItems.forEach(item => {
        item.addEventListener('click', () => {
            tocItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const secKey = item.getAttribute('data-prd-sec');
            if (contentBody && PRD_SECTIONS[secKey]) {
                contentBody.innerHTML = PRD_SECTIONS[secKey];
            }
        });
    });

    if (contentBody) contentBody.innerHTML = PRD_SECTIONS['sec-vision'];
}

/* --------------------------------------------------------------------------
   8. FIGMA WIREFRAME VIEWER
   -------------------------------------------------------------------------- */
const WIREFRAME_SCREENS = {
    onboarding: `
        <div class="wireframe-mockup text-center">
            <div style="border-bottom: 1px stroke #334155; padding-bottom: 0.8rem; margin-bottom: 1rem; color: var(--text-muted); font-size: 0.8rem;">FIGMA WIREFRAME • SCREEN 01</div>
            <h3 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">Select Target Role & Career Track</h3>
            <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 1.5rem;">[ Interactive Dynamic Role Selector Wireframe ]</p>
            <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1.5rem;">
                <span style="background: rgba(6,182,212,0.2); color: var(--accent-cyan); padding: 0.5rem 1rem; border-radius: 8px; font-weight: bold;">Associate PM</span>
                <span style="background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: 8px;">AI Product Manager</span>
                <span style="background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: 8px;">Software Engineer</span>
            </div>
            <div style="background: var(--accent-cyan); color: #000; padding: 0.7rem; border-radius: 8px; font-weight: bold; width: 220px; margin: 0 auto;">CTA: Continue to Role Skill Check</div>
        </div>
    `,
    assessment: `
        <div class="wireframe-mockup text-center">
            <div style="border-bottom: 1px stroke #334155; padding-bottom: 0.8rem; margin-bottom: 1rem; color: var(--text-muted); font-size: 0.8rem;">FIGMA WIREFRAME • SCREEN 02</div>
            <h3 style="color: var(--accent-indigo); margin-bottom: 0.5rem;">Role-Specific Core Skills Self-Assessment</h3>
            <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 1rem;">Dynamic skill chips auto-detected from uploaded resume:</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; max-width: 400px; margin: 0 auto 1.5rem auto; text-align: left;">
                <div style="background: rgba(16,185,129,0.15); padding: 0.6rem; border-radius: 6px; border: 1px solid var(--accent-emerald);">[x] PRD Writing (Detected)</div>
                <div style="background: rgba(16,185,129,0.15); padding: 0.6rem; border-radius: 6px; border: 1px solid var(--accent-emerald);">[x] Wireframing (Figma)</div>
                <div style="background: rgba(255,255,255,0.04); padding: 0.6rem; border-radius: 6px;">[ ] Telemetry & Analytics</div>
                <div style="background: rgba(16,185,129,0.15); padding: 0.6rem; border-radius: 6px; border: 1px solid var(--accent-emerald);">[x] AI Prompting</div>
            </div>
            <div style="background: var(--accent-indigo); color: #fff; padding: 0.7rem; border-radius: 8px; font-weight: bold; width: 220px; margin: 0 auto;">CTA: Calculate Score</div>
        </div>
    `,
    dashboard: `
        <div class="wireframe-mockup text-center">
            <div style="border-bottom: 1px stroke #334155; padding-bottom: 0.8rem; margin-bottom: 1rem; color: var(--text-muted); font-size: 0.8rem;">FIGMA WIREFRAME • SCREEN 03</div>
            <h3 style="color: var(--accent-emerald); margin-bottom: 0.5rem;">Candidate Dashboard & Score Ring</h3>
            <div style="width: 100px; height: 100px; border-radius: 50%; border: 8px solid var(--accent-cyan); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; font-weight: bold; margin: 1rem auto; color: var(--accent-cyan);">78%</div>
            <p style="color: var(--text-secondary); font-size: 0.85rem;">Status: Strong Candidate • Resume Synced: resume.pdf</p>
        </div>
    `,
    roadmap: `
        <div class="wireframe-mockup text-center">
            <div style="border-bottom: 1px stroke #334155; padding-bottom: 0.8rem; margin-bottom: 1rem; color: var(--text-muted); font-size: 0.8rem;">FIGMA WIREFRAME • SCREEN 04</div>
            <h3 style="color: var(--accent-purple); margin-bottom: 0.5rem;">30-60-90 Day Role Execution Timeline</h3>
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
                <div style="background: rgba(255,255,255,0.04); padding: 1rem; border-radius: 8px; width: 30%;">Month 1: Bridge Role Gaps</div>
                <div style="background: rgba(255,255,255,0.04); padding: 1rem; border-radius: 8px; width: 30%;">Month 2: Case Study Portfolio</div>
                <div style="background: rgba(255,255,255,0.04); padding: 1rem; border-radius: 8px; width: 30%;">Month 3: Placement Campaign</div>
            </div>
        </div>
    `
};

function initWireframeViewer() {
    const screenBtns = document.querySelectorAll('.screen-btn');
    const stage = document.getElementById('wireframe-stage');

    screenBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            screenBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const screenKey = btn.getAttribute('data-screen');
            if (stage && WIREFRAME_SCREENS[screenKey]) {
                stage.innerHTML = WIREFRAME_SCREENS[screenKey];
            }
        });
    });

    if (stage) stage.innerHTML = WIREFRAME_SCREENS['onboarding'];
}

/* --------------------------------------------------------------------------
   9. POSTHOG TELEMETRY STREAM
   -------------------------------------------------------------------------- */
function initTelemetryStream() {
    const logContainer = document.getElementById('telemetry-log');
    if (!logContainer) return;

    const events = [
        "target_role_switched",
        "role_skills_rendered",
        "resume_parsed_and_synced",
        "assessment_completed",
        "recruiter_lens_executed",
        "skill_roi_viewed",
        "prd_document_opened",
        "roadmap_task_checked"
    ];

    setInterval(() => {
        const time = new Date().toLocaleTimeString();
        const randEvent = events[Math.floor(Math.random() * events.length)];
        const session = `sess_${Math.random().toString(36).substring(2, 8)}`;
        const role = document.getElementById('user-role')?.value || 'apm';

        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerHTML = `<span class="log-ts">[${time}]</span> <span class="log-event">posthog.capture("${randEvent}")</span> properties={ session_id: "${session}", role: "${role}" }`;

        logContainer.appendChild(entry);
        if (logContainer.children.length > 20) {
            logContainer.removeChild(logContainer.firstChild);
        }
        logContainer.scrollTop = logContainer.scrollHeight;
    }, 3500);
}

/* --------------------------------------------------------------------------
   10. EXPORT MODAL
   -------------------------------------------------------------------------- */
function initExportModal() {
    const exportBtn = document.getElementById('btn-export-summary');
    const modal = document.getElementById('export-modal');
    const closeBtn = document.getElementById('close-modal');
    const downloadPdfBtn = document.getElementById('modal-download-pdf-btn');

    if (exportBtn && modal) {
        exportBtn.addEventListener('click', () => {
            updateExportModalResumeFields();
            modal.classList.add('active');
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Direct PDF Document Downloader (.pdf)
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', () => {
            const roleKey = document.getElementById('user-role')?.value || 'apm';
            const roleConfig = ROLE_DATA[roleKey] || ROLE_DATA.apm;
            const scoreStr = document.getElementById('modal-score')?.textContent || "72%";
            const gapStr = document.getElementById('modal-gap')?.textContent || roleConfig.gapSkill;
            const detectedSkills = ResumeStore.getDetectedSkillsForRole(roleKey);
            const detectedLabels = detectedSkills.map(id => roleConfig.skills.find(s => s.id === id)?.label || id);
            const missingSkills = roleConfig.skills.filter(s => !detectedSkills.includes(s.id)).map(s => s.label);
            const fileName = ResumeStore.hasResume() ? ResumeStore.getFileName() : 'Not uploaded';

            const pdfWrapper = document.createElement('div');
            pdfWrapper.style.padding = '25px';
            pdfWrapper.style.fontFamily = "'Inter', Arial, sans-serif";
            pdfWrapper.style.color = '#0f172a';
            pdfWrapper.style.background = '#ffffff';

            const gapsListHTML = missingSkills.length
                ? missingSkills.map(s => `<li style="margin-bottom: 4px;">✗ <strong>${s}</strong> — Action: Build hands-on feature & add project proof link.</li>`).join('')
                : '<li>✓ All core skills verified in resume!</li>';

            pdfWrapper.innerHTML = `
                <div style="border-bottom: 3px solid #06b6d4; padding-bottom: 12px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h1 style="font-size: 20px; color: #0f172a; margin: 0; font-weight: 800;">CAREER READY AI PLATFORM</h1>
                        <p style="font-size: 12px; color: #64748b; margin: 3px 0 0 0;">Candidate Readiness & Personalized Execution Report</p>
                    </div>
                    <div style="text-align: right;">
                        <span style="background: #06b6d4; color: #ffffff; padding: 5px 12px; border-radius: 16px; font-weight: bold; font-size: 15px;">${scoreStr}</span>
                    </div>
                </div>

                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 15px; margin-bottom: 18px;">
                    <h3 style="font-size: 14px; color: #06b6d4; margin: 0 0 8px 0;">1. ASSESSMENT SUMMARY</h3>
                    <p style="margin: 3px 0; font-size: 12px;"><strong>Target Role:</strong> ${roleConfig.title}</p>
                    <p style="margin: 3px 0; font-size: 12px;"><strong>Readiness Score:</strong> ${scoreStr}</p>
                    <p style="margin: 3px 0; font-size: 12px;"><strong>Primary Skill Gap:</strong> <span style="color: #b45309; font-weight: bold;">${gapStr}</span></p>
                    <p style="margin: 3px 0; font-size: 12px;"><strong>Resume File on Record:</strong> ${fileName}</p>
                </div>

                <div style="margin-bottom: 18px;">
                    <h3 style="font-size: 14px; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 8px;">2. CORE COMPETENCIES BREAKDOWN (${roleConfig.title})</h3>
                    <p style="font-size: 12px; margin: 6px 0 4px 0;"><strong>Verified Skills in Resume (${detectedSkills.length}/${roleConfig.skills.length}):</strong></p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: #15803d;">
                        ${detectedLabels.length ? detectedLabels.map(s => `<li>✓ ${s}</li>`).join('') : '<li style="color: #64748b;">No core skills auto-detected</li>'}
                    </ul>
                    <p style="font-size: 12px; margin: 10px 0 4px 0;"><strong>Detailed Skill Gaps to Solve (${missingSkills.length} Gaps):</strong></p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: #b45309;">
                        ${gapsListHTML}
                    </ul>
                </div>

                <div style="background: #f1f5f9; border-left: 4px solid #6366f1; padding: 12px 15px; border-radius: 4px; margin-bottom: 18px;">
                    <h3 style="font-size: 13px; color: #4338ca; margin: 0 0 4px 0;">3. FRESHER PREPARATION & EXECUTION TIPS</h3>
                    <p style="font-size: 11px; margin: 0 0 4px 0; color: #334155; line-height: 1.5;">
                        • <strong>Month 1 (Skill Gaps):</strong> Build concrete features for every gap listed above and add project proof links to your resume header.
                    </p>
                    <p style="font-size: 11px; margin: 0 0 4px 0; color: #334155; line-height: 1.5;">
                        • <strong>Month 2 (Portfolio Showcase):</strong> Deploy your interactive app sandbox and record a 2-minute Loom video demo for hiring managers.
                    </p>
                    <p style="font-size: 11px; margin: 0; color: #334155; line-height: 1.5;">
                        • <strong>Month 3 (Recruiter Outreach):</strong> Cold reach-out directly to Engineering Leads & Senior Managers on LinkedIn with a 3-bullet project pitch.
                    </p>
                </div>

                <div style="border-top: 1px solid #e2e8f0; padding-top: 8px; font-size: 10px; color: #94a3b8; text-align: center;">
                    Career Ready AI Decision Platform • Generated ${new Date().toLocaleDateString()}
                </div>
            `;

            const opt = {
                margin:       8,
                filename:     `CareerReady_Report_${roleConfig.title.replace(/\s+/g, '_')}.pdf`,
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            if (window.html2pdf) {
                html2pdf().set(opt).from(pdfWrapper).save().then(() => {
                    modal.classList.remove('active');
                });
            } else {
                alert('Downloading PDF Report...');
                modal.classList.remove('active');
            }
        });
    }
}
