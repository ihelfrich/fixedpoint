// ===========================
// ACCT 410x Study Platform
// Main Application Logic
// ===========================

// State Management
const AppState = {
    currentSection: 'home',
    userProgress: {
        problemsCompleted: 0,
        quizzesCompleted: 0,
        topicMastery: {
            'balance-sheet': 0,
            'income-statement': 0,
            'double-entry': 0,
            'accrual': 0,
            'adjusting-entries': 0,
            'accounts-receivable': 0,
            'financial-ratios': 0
        },
        topicStats: {
            'balance-sheet': { attempted: 0, correct: 0 },
            'income-statement': { attempted: 0, correct: 0 },
            'double-entry': { attempted: 0, correct: 0 },
            'accrual': { attempted: 0, correct: 0 },
            'adjusting-entries': { attempted: 0, correct: 0 },
            'accounts-receivable': { attempted: 0, correct: 0 },
            'financial-ratios': { attempted: 0, correct: 0 }
        },
        lastActivity: null
    },
    settings: {
        darkMode: false,
        showHints: true,
        difficulty: 'all'
    },
    sessionStats: {
        attempted: 0,
        correct: 0,
        streak: 0
    }
};

let focusTimerInterval = null;
let focusTimerTotalSeconds = 0;
let focusTimerRemainingSeconds = 0;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadUserProgress();
    setupNavigation();
    setupEventListeners();
    setupDarkMode();
});

// ===========================
// INITIALIZATION
// ===========================

function initializeApp() {
    console.log('ACCT 410x Study Platform Initialized');
    updateProgressDisplay();
    updateHomeStats();
    updateSessionStats();
    setupDarkMode();
}

function loadUserProgress() {
    // Load from localStorage if available
    const saved = localStorage.getItem('acct410x-progress');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            AppState.userProgress = {
                ...AppState.userProgress,
                ...parsed,
                topicMastery: {
                    ...AppState.userProgress.topicMastery,
                    ...(parsed.topicMastery || {})
                },
                topicStats: {
                    ...AppState.userProgress.topicStats,
                    ...(parsed.topicStats || {})
                }
            };
            updateProgressDisplay();
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
}

function saveUserProgress() {
    localStorage.setItem('acct410x-progress', JSON.stringify(AppState.userProgress));
    updateProgressDisplay();
}

function updateProgressDisplay() {
    const total = Object.values(AppState.userProgress.topicMastery).reduce((a, b) => a + b, 0);
    const average = Math.round(total / 7);
    const progressElement = document.getElementById('user-progress');
    if (progressElement) {
        progressElement.textContent = average + '%';
    }
}

function updateSessionStats() {
    const attemptedEl = document.getElementById('session-attempted');
    const correctEl = document.getElementById('session-correct');
    const accuracyEl = document.getElementById('session-accuracy');
    const streakEl = document.getElementById('session-streak');

    if (attemptedEl) attemptedEl.textContent = AppState.sessionStats.attempted;
    if (correctEl) correctEl.textContent = AppState.sessionStats.correct;
    if (streakEl) streakEl.textContent = AppState.sessionStats.streak;

    if (accuracyEl) {
        const accuracy = AppState.sessionStats.attempted > 0
            ? Math.round((AppState.sessionStats.correct / AppState.sessionStats.attempted) * 100)
            : 0;
        accuracyEl.textContent = `${accuracy}%`;
    }
}

function resetSessionStats() {
    AppState.sessionStats = { attempted: 0, correct: 0, streak: 0 };
    updateSessionStats();
    const container = document.getElementById('practice-container');
    if (container) {
        container.innerHTML = '<p class="placeholder">Session reset. Generate a new set to continue.</p>';
    }
}

function updateHomeStats() {
    const problemsEl = document.getElementById('stat-problems');
    const examsEl = document.getElementById('stat-exams');
    const toolsEl = document.getElementById('stat-tools');

    if (problemsEl && typeof ProblemBank !== 'undefined') {
        const total = Object.values(ProblemBank).reduce((sum, list) => sum + list.length, 0);
        problemsEl.textContent = total.toLocaleString();
    }

    if (examsEl) {
        const examCount = (typeof PracticeMidterm !== 'undefined') ? 1 : 0;
        examsEl.textContent = examCount;
    }

    if (toolsEl) {
        const sections = document.querySelectorAll('.nav-btn').length;
        toolsEl.textContent = sections || '--';
    }
}

function recordTopicAttempt(topic, isCorrect) {
    if (!topic || !AppState.userProgress.topicStats[topic]) return;

    const stats = AppState.userProgress.topicStats[topic];
    stats.attempted += 1;
    if (isCorrect) stats.correct += 1;

    const mastery = stats.attempted > 0
        ? Math.round((stats.correct / stats.attempted) * 100)
        : 0;
    AppState.userProgress.topicMastery[topic] = mastery;

    AppState.userProgress.lastActivity = new Date().toLocaleString();
    saveUserProgress();
}

// ===========================
// NAVIGATION
// ===========================

function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            navigateToSection(section);
        });
    });
}

function navigateToSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Highlight active nav button
    const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    AppState.currentSection = sectionName;

    // Load section-specific content
    loadSectionContent(sectionName);
}

function loadSectionContent(sectionName) {
    switch(sectionName) {
        case 'practice':
            initializePracticeSection();
            break;
        case 'simulator':
            initializeSimulator();
            break;
        case 'quiz':
            initializeQuiz();
            break;
        case 'study':
            initializeStudyGuide();
            break;
        case 'progress':
            initializeProgressSection();
            break;
    }
}

// ===========================
// EVENT LISTENERS
// ===========================

function setupEventListeners() {
    // Topic selector
    const topicSelect = document.getElementById('topic-select');
    if (topicSelect) {
        topicSelect.addEventListener('change', () => {
            console.log('Topic changed:', topicSelect.value);
        });
    }

    // Difficulty selector
    const difficultySelect = document.getElementById('difficulty-select');
    if (difficultySelect) {
        difficultySelect.addEventListener('change', () => {
            console.log('Difficulty changed:', difficultySelect.value);
        });
    }

    // Home CTA buttons
    const diagnosticBtn = document.getElementById('ctaDiagnostic');
    if (diagnosticBtn) diagnosticBtn.addEventListener('click', startDiagnostic);

    const studyBtn = document.getElementById('ctaStudyGuide');
    if (studyBtn) studyBtn.addEventListener('click', viewStudyGuide);

    const practiceBtn = document.getElementById('ctaPractice');
    if (practiceBtn) practiceBtn.addEventListener('click', startPractice);

    const loadProblemsBtn = document.getElementById('loadProblemsBtn');
    if (loadProblemsBtn) loadProblemsBtn.addEventListener('click', loadProblems);

    const practiceGenerateBtn = document.getElementById('practiceGenerateBtn');
    if (practiceGenerateBtn) practiceGenerateBtn.addEventListener('click', loadProblems);

    const practiceResetBtn = document.getElementById('practiceResetBtn');
    if (practiceResetBtn) practiceResetBtn.addEventListener('click', resetSessionStats);

    // Delegate dynamic UI interactions
    document.addEventListener('click', (event) => {
        const actionBtn = event.target.closest('[data-action]');
        if (actionBtn) {
            switch (actionBtn.dataset.action) {
                case 'focus-start':
                    startFocusTimer(actionBtn.dataset.minutes);
                    break;
                case 'focus-stop':
                    stopFocusTimer();
                    break;
                case 'quick-practice':
                    loadQuickPractice();
                    break;
                case 'goto-practice':
                    navigateToSection('practice');
                    break;
                case 'goto-quiz':
                    navigateToSection('quiz');
                    startQuizType('practice-exam');
                    break;
                case 'goto-study':
                    navigateToSection('study');
                    break;
                case 'quiz-back':
                    initializeQuiz();
                    break;
                case 'exam-submit':
                    gradePracticeExam();
                    break;
                case 'exam-cancel':
                    initializeQuiz();
                    break;
                case 'exam-retake':
                    startQuizType('practice-exam');
                    break;
                default:
                    break;
            }
            return;
        }

        const quizCard = event.target.closest('.quiz-card');
        if (quizCard && quizCard.dataset.quizType) {
            startQuizType(quizCard.dataset.quizType);
            return;
        }

        const checkBtn = event.target.closest('.check-answer-btn');
        if (checkBtn && checkBtn.dataset.problemId) {
            checkAnswer(checkBtn.dataset.problemId, checkBtn.dataset.instanceId);
            return;
        }

        const studyLink = event.target.closest('.study-link');
        if (studyLink && studyLink.dataset.studyTarget) {
            event.preventDefault();
            scrollToStudySection(studyLink.dataset.studyTarget);
        }
    });
}

// ===========================
// HOME SECTION ACTIONS
// ===========================

function startDiagnostic() {
    navigateToSection('quiz');
    // Will load diagnostic quiz
}

function viewStudyGuide() {
    navigateToSection('study');
}

function startPractice() {
    navigateToSection('practice');
}

function startFocusTimer(minutes) {
    const duration = parseInt(minutes, 10);
    if (!Number.isFinite(duration) || duration <= 0) {
        return;
    }

    stopFocusTimer(false);

    focusTimerTotalSeconds = duration * 60;
    focusTimerRemainingSeconds = focusTimerTotalSeconds;
    updateFocusTimerUI();
    setFocusStatus(`Sprint running: ${duration} minutes. Stay locked in.`);

    focusTimerInterval = setInterval(() => {
        focusTimerRemainingSeconds -= 1;
        if (focusTimerRemainingSeconds <= 0) {
            focusTimerRemainingSeconds = 0;
            updateFocusTimerUI();
            stopFocusTimer(false);
            setFocusStatus('Sprint complete. Review your misses now.');
            showNotification('Focus sprint complete. Review your misses now.', 'success');
            return;
        }
        updateFocusTimerUI();
    }, 1000);
}

function stopFocusTimer(resetStatus = true) {
    if (focusTimerInterval) {
        clearInterval(focusTimerInterval);
        focusTimerInterval = null;
    }

    if (resetStatus) {
        focusTimerTotalSeconds = 0;
        focusTimerRemainingSeconds = 0;
        updateFocusTimerUI();
        setFocusStatus('Ready when you are.');
    }
}

function updateFocusTimerUI() {
    const timerEl = document.getElementById('focusTimer');
    const progressEl = document.getElementById('focusProgress');

    if (!timerEl) return;

    const mins = Math.floor(focusTimerRemainingSeconds / 60);
    const secs = focusTimerRemainingSeconds % 60;
    timerEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

    if (progressEl) {
        const progress = focusTimerTotalSeconds > 0
            ? ((focusTimerTotalSeconds - focusTimerRemainingSeconds) / focusTimerTotalSeconds) * 100
            : 0;
        progressEl.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
}

function setFocusStatus(message) {
    const statusEl = document.getElementById('focusStatus');
    if (statusEl) {
        statusEl.textContent = message;
    }
}

// ===========================
// PRACTICE SECTION
// ===========================

function initializePracticeSection() {
    console.log('Practice section initialized');
}

function loadProblems() {
    const topicSelect = document.getElementById('practice-topic') || document.getElementById('topic-select');
    const difficultySelect = document.getElementById('practice-difficulty') || document.getElementById('difficulty-select');
    const countSelect = document.getElementById('practice-count');
    const modeSelect = document.getElementById('practice-mode');

    const topic = topicSelect ? topicSelect.value : 'all';
    const difficulty = difficultySelect ? difficultySelect.value : 'all';
    const count = countSelect ? parseInt(countSelect.value, 10) : null;
    const mode = modeSelect ? modeSelect.value : 'mixed';

    const container = document.getElementById('practice-container');
    container.innerHTML = '<div class="loading">Loading problems...</div>';

    // Get actual problems
    setTimeout(() => {
        container.innerHTML = generatePracticeProblems(topic, difficulty, count, mode);
    }, 300);
}

function loadQuickPractice() {
    const container = document.getElementById('quick-practice-container');
    if (!container) return;

    const topicSelect = document.getElementById('quick-topic');
    const difficultySelect = document.getElementById('quick-difficulty');
    const countSelect = document.getElementById('quick-count');

    const topic = topicSelect ? topicSelect.value : 'all';
    const difficulty = difficultySelect ? difficultySelect.value : 'all';
    const count = countSelect ? parseInt(countSelect.value, 10) : 5;

    container.innerHTML = '<div class="loading">Building your quick set...</div>';

    const problems = getRandomProblems(topic, difficulty, count || 5);

    if (problems.length === 0) {
        container.innerHTML = '<p class="info-message">No problems found for this combination. Try a different topic or difficulty.</p>';
        return;
    }

    let html = '<div class="quick-set">';
    html += `<div class="quick-results-header">`;
    html += `<h4>${formatTopicName(topic)} · ${formatDifficulty(difficulty)}</h4>`;
    html += `<span class="quick-count">${problems.length} problems</span>`;
    html += `</div>`;

    problems.forEach((problem, index) => {
        html += renderProblem(problem, index);
    });

    html += '</div>';
    container.innerHTML = html;
}

function generatePracticeProblems(topic, difficulty, count = null, mode = 'mixed') {
    // Get problems from the problem bank
    let problems = [];

    if (typeof ProblemBank !== 'undefined') {
        if (topic === 'all') {
            problems = Object.values(ProblemBank).flat();
        } else {
            problems = ProblemBank[topic] || [];
        }

        if (difficulty !== 'all') {
            problems = problems.filter(p => p.difficulty === difficulty);
        }
    }

    if (mode === 'mixed') {
        problems = shuffleArray(problems.slice());
    } else {
        problems = problems.slice();
    }

    if (count && Number.isFinite(count)) {
        problems = problems.slice(0, count);
    }

    let html = '<div class="problems-container">';
    html += `<h3>Practice Set: ${formatTopicName(topic)} · ${formatDifficulty(difficulty)}</h3>`;
    html += `<p class="problem-subtitle">Mode: ${mode === 'focused' ? 'Focused' : 'Mixed'} · ${problems.length} problems</p>`;
    html += `<p class="problem-count">Found ${problems.length} problems</p>`;

    if (problems.length === 0) {
        html += '<p class="info-message">No problems found for this combination. Try selecting "All Topics" or "All Levels".</p>';
    } else {
        problems.forEach((problem, index) => {
            html += renderProblem(problem, index);
        });
    }

    html += '</div>';
    return html;
}

function renderProblem(problem, index) {
    const instanceId = generateUniqueId();
    let html = `<div class="problem-card" id="problem-${problem.id}-${instanceId}" data-instance-id="${instanceId}">`;
    html += `<div class="problem-header">`;
    html += `<span class="problem-number">Problem ${index + 1}</span>`;
    html += `<span class="problem-difficulty badge-${problem.difficulty}">${problem.difficulty}</span>`;
    html += `<span class="problem-points">${problem.points} points</span>`;
    html += `</div>`;

    html += `<div class="problem-question">${problem.question}</div>`;

    if (problem.type === 'multiple-choice') {
        html += `<div class="problem-options">`;
        problem.options.forEach((option, i) => {
            html += `<div class="option">`;
            html += `<input type="radio" name="problem-${problem.id}-${instanceId}" id="${problem.id}-${instanceId}-${i}" value="${option}">`;
            html += `<label for="${problem.id}-${instanceId}-${i}">${option}</label>`;
            html += `</div>`;
        });
        html += `</div>`;
    } else if (problem.type === 'calculation') {
        html += `<div class="calculation-input">`;
        html += `<label>Your Answer: $</label>`;
        html += `<input type="number" id="answer-${problem.id}-${instanceId}" placeholder="Enter amount">`;
        html += `</div>`;
    } else if (problem.type === 'true-false') {
        html += `<div class="problem-options">`;
        html += `<div class="option">`;
        html += `<input type="radio" name="problem-${problem.id}-${instanceId}" id="${problem.id}-${instanceId}-true" value="true">`;
        html += `<label for="${problem.id}-${instanceId}-true">True</label>`;
        html += `</div>`;
        html += `<div class="option">`;
        html += `<input type="radio" name="problem-${problem.id}-${instanceId}" id="${problem.id}-${instanceId}-false" value="false">`;
        html += `<label for="${problem.id}-${instanceId}-false">False</label>`;
        html += `</div>`;
        html += `</div>`;
    } else if (problem.type === 'transaction-analysis') {
        html += renderTransactionAnalysis(problem, instanceId);
    } else if (problem.type === 'journal-entry') {
        html += renderJournalEntry(problem, instanceId);
    } else if (problem.type === 'comprehensive') {
        html += renderComprehensive(problem, instanceId);
    } else {
        html += renderShortAnswer(problem, instanceId);
    }

    const revealOnly = problem.type === 'journal-entry'
        || (problem.type === 'comprehensive' && typeof problem.answer !== 'number');
    const buttonLabel = revealOnly ? 'Reveal Solution' : 'Check Answer';
    html += `<button class="btn btn-secondary check-answer-btn" data-problem-id="${problem.id}" data-instance-id="${instanceId}">${buttonLabel}</button>`;
    html += `<div class="answer-feedback" id="feedback-${problem.id}-${instanceId}" style="display:none;"></div>`;
    html += `</div>`;

    return html;
}

function renderTransactionAnalysis(problem, instanceId) {
    const categories = ['assets', 'liabilities', 'equity', 'revenue', 'expenses'];
    const labels = ['Assets', 'Liabilities', 'Stockholders\' Equity', 'Revenue', 'Expenses'];

    let html = '<div class="transaction-grid">';
    categories.forEach((cat, i) => {
        html += '<div class="transaction-row">';
        html += `<div class="transaction-label">${labels[i]}</div>`;
        html += '<div class="transaction-options">';
        ['I', 'D', 'N'].forEach(choice => {
            html += `<label class="transaction-choice">`;
            html += `<input type="radio" name="problem-${problem.id}-${instanceId}-${cat}" value="${choice}">`;
            html += `<span>${choice}</span>`;
            html += `</label>`;
        });
        html += '</div></div>';
    });
    html += '</div>';
    return html;
}

function renderJournalEntry(problem, instanceId) {
    const entries = normalizeJournalEntries(problem.answer);
    const entryList = entries.length > 0 ? entries : [{ label: 'Entry' }];

    let html = '<div class="journal-entry">';
    html += '<p class="journal-hint">Enter debits and credits for each required entry. Debits must equal credits.</p>';

    entryList.forEach((entry, entryIndex) => {
        html += `<div class="journal-entry-group">`;
        html += `<div class="journal-group-label">${entry.label || `Entry ${entryIndex + 1}`}</div>`;
        html += '<div class="journal-entry-grid">';

        html += '<div class="journal-column">';
        html += '<div class="journal-header">Debits</div>';
        for (let i = 0; i < 3; i += 1) {
            html += '<div class="journal-row">';
            html += `<input type="text" placeholder="Account" data-entry="debit-account" data-index="${entryIndex}-${i}" data-instance="${instanceId}">`;
            html += `<input type="number" placeholder="Amount" data-entry="debit-amount" data-index="${entryIndex}-${i}" data-instance="${instanceId}">`;
            html += '</div>';
        }
        html += '</div>';

        html += '<div class="journal-column">';
        html += '<div class="journal-header">Credits</div>';
        for (let i = 0; i < 3; i += 1) {
            html += '<div class="journal-row">';
            html += `<input type="text" placeholder="Account" data-entry="credit-account" data-index="${entryIndex}-${i}" data-instance="${instanceId}">`;
            html += `<input type="number" placeholder="Amount" data-entry="credit-amount" data-index="${entryIndex}-${i}" data-instance="${instanceId}">`;
            html += '</div>';
        }
        html += '</div>';

        html += '</div></div>';
    });

    html += '</div>';
    return html;
}

function renderComprehensive(problem, instanceId) {
    if (typeof problem.answer === 'number') {
        return `
            <div class="comprehensive-input">
                <label>Your Answer: $</label>
                <input type="number" data-comprehensive-answer data-instance="${instanceId}" placeholder="Enter amount">
            </div>
        `;
    }

    if (problem.answer && typeof problem.answer === 'object') {
        const fields = flattenAnswerObject(problem.answer);
        const rows = fields.map(field => `
            <label>
                ${field.label}
                <input type="number" data-comprehensive-field="${field.path}" data-instance="${instanceId}" placeholder="Enter amount">
            </label>
        `).join('');

        return `
            <div class="comprehensive-inputs">
                <p class="journal-hint">Enter each requested amount. Use commas only if needed.</p>
                <div class="comprehensive-grid">${rows}</div>
            </div>
        `;
    }

    return `
        <div class="comprehensive-workspace">
            <label>Work Space (show your steps or final statement)</label>
            <textarea rows="5" data-comprehensive-work data-instance="${instanceId}" placeholder="Write your solution here..."></textarea>
        </div>
    `;
}

function renderShortAnswer(problem, instanceId) {
    return `
        <div class="comprehensive-workspace">
            <label>Your Response</label>
            <textarea rows="4" data-short-answer data-instance="${instanceId}" placeholder="Write your response here..."></textarea>
        </div>
    `;
}

function checkAnswer(problemId, instanceId) {
    // Find the problem
    let problem = null;
    if (typeof ProblemBank !== 'undefined') {
        for (const topic in ProblemBank) {
            const found = ProblemBank[topic].find(p => p.id === problemId);
            if (found) {
                problem = found;
                break;
            }
        }
    }

    if (!problem) return;

    const card = instanceId
        ? document.querySelector(`[data-instance-id="${instanceId}"]`)
        : null;

    const feedbackId = instanceId ? `feedback-${problemId}-${instanceId}` : `feedback-${problemId}`;
    const feedbackDiv = card ? card.querySelector(`#${feedbackId}`) : document.getElementById(feedbackId);
    if (!feedbackDiv) return;

    // Get user's answer based on type
    let userAnswer = null;
    let isCorrect = null;

    if (problem.type === 'multiple-choice' || problem.type === 'true-false') {
        const selector = instanceId
            ? `input[name="problem-${problemId}-${instanceId}"]:checked`
            : `input[name="problem-${problemId}"]:checked`;
        const selected = card ? card.querySelector(selector) : document.querySelector(selector);
        userAnswer = selected ? selected.value : null;

        if (userAnswer === null) {
            feedbackDiv.innerHTML = '<p class="feedback-warning">Please select an answer.</p>';
            feedbackDiv.style.display = 'block';
            return;
        }

        if (problem.type === 'true-false') {
            isCorrect = (userAnswer === 'true') === problem.answer;
        } else {
            isCorrect = userAnswer === problem.answer;
        }
    } else if (problem.type === 'calculation') {
        const inputId = instanceId ? `answer-${problemId}-${instanceId}` : `answer-${problemId}`;
        const input = card ? card.querySelector(`#${inputId}`) : document.getElementById(inputId);
        userAnswer = input ? parseFloat(input.value) : null;

        if (userAnswer === null || Number.isNaN(userAnswer)) {
            feedbackDiv.innerHTML = '<p class="feedback-warning">Please enter an answer.</p>';
            feedbackDiv.style.display = 'block';
            return;
        }

        isCorrect = Math.abs(userAnswer - problem.answer) < 0.01;
    } else if (problem.type === 'transaction-analysis') {
        const categories = ['assets', 'liabilities', 'equity', 'revenue', 'expenses'];
        const selections = {};
        const missing = [];

        categories.forEach(cat => {
            const selector = `input[name="problem-${problemId}-${instanceId}-${cat}"]:checked`;
            const selected = card ? card.querySelector(selector) : document.querySelector(selector);
            if (!selected) {
                missing.push(cat);
            } else {
                selections[cat] = selected.value;
            }
        });

        if (missing.length > 0) {
            feedbackDiv.innerHTML = '<p class="feedback-warning">Please answer each category (Assets, Liabilities, Equity, Revenue, Expenses).</p>';
            feedbackDiv.style.display = 'block';
            return;
        }

        userAnswer = selections;
        const correctMap = parseTransactionAnswer(problem.answer);
        if (correctMap) {
            isCorrect = categories.every(cat => selections[cat] === correctMap[cat]);
        } else {
            isCorrect = null;
        }
    } else if (problem.type === 'comprehensive') {
        if (typeof problem.answer === 'number') {
            const input = card ? card.querySelector('[data-comprehensive-answer]') : document.querySelector('[data-comprehensive-answer]');
            userAnswer = input ? parseFloat(input.value) : null;
            if (userAnswer === null || Number.isNaN(userAnswer)) {
                feedbackDiv.innerHTML = '<p class="feedback-warning">Please enter an answer.</p>';
                feedbackDiv.style.display = 'block';
                return;
            }
            isCorrect = Math.abs(userAnswer - problem.answer) < 0.01;
        } else if (problem.answer && typeof problem.answer === 'object') {
            const inputs = card
                ? card.querySelectorAll('[data-comprehensive-field]')
                : document.querySelectorAll('[data-comprehensive-field]');
            const missing = [];
            let allCorrect = true;

            inputs.forEach(input => {
                const value = parseFloat(input.value);
                const path = input.dataset.comprehensiveField;
                if (!path) return;
                if (Number.isNaN(value)) {
                    missing.push(path);
                    allCorrect = false;
                } else {
                    const expected = getAnswerByPath(problem.answer, path);
                    if (typeof expected === 'number') {
                        if (Math.abs(value - expected) >= 0.01) {
                            allCorrect = false;
                        }
                    } else {
                        allCorrect = false;
                    }
                }
            });

            if (missing.length > 0) {
                feedbackDiv.innerHTML = '<p class="feedback-warning">Please complete all fields.</p>';
                feedbackDiv.style.display = 'block';
                return;
            }

            isCorrect = allCorrect;
        } else {
            isCorrect = null;
        }
    } else if (problem.type === 'journal-entry') {
        isCorrect = null;
    } else {
        isCorrect = null;
    }

    if (typeof isCorrect === 'boolean') {
        recordTopicAttempt(problem.topic, isCorrect);
        AppState.sessionStats.attempted += 1;
        if (isCorrect) {
            AppState.sessionStats.correct += 1;
            AppState.sessionStats.streak += 1;
        } else {
            AppState.sessionStats.streak = 0;
        }
        updateSessionStats();
    }

    // Show feedback
    if (isCorrect === true) {
        feedbackDiv.innerHTML = `
            <div class="feedback-correct">
                <strong>✓ Correct!</strong>
                <p>${problem.explanation}</p>
            </div>
        `;
        AppState.userProgress.problemsCompleted++;
    } else if (isCorrect === false) {
        feedbackDiv.innerHTML = `
            <div class="feedback-incorrect">
                <strong>✗ Incorrect</strong>
                <div class="answer-block"><strong>Correct Answer:</strong> ${formatAnswerDisplay(problem)}</div>
                <p>${problem.explanation}</p>
            </div>
        `;
    } else {
        feedbackDiv.innerHTML = `
            <div class="feedback-neutral">
                <strong>Solution Review</strong>
                <div class="answer-block">${formatAnswerDisplay(problem)}</div>
                <p>${problem.explanation}</p>
            </div>
        `;
    }

    feedbackDiv.style.display = 'block';
    saveUserProgress();
}

function formatTopicName(topic) {
    if (topic === 'all') return 'All Topics';
    return topic.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function formatDifficulty(diff) {
    if (diff === 'all') return 'All Levels';
    return diff.charAt(0).toUpperCase() + diff.slice(1);
}

// ===========================
// SIMULATOR SECTION
// ===========================

function initializeSimulator() {
    const container = document.getElementById('simulator-container');
    container.innerHTML = `
        <div class="simulator-main">
            <div class="simulator-tabs">
                <button class="sim-tab active" data-sim="journal">Journal Entries</button>
                <button class="sim-tab" data-sim="taccount">T-Accounts</button>
                <button class="sim-tab" data-sim="trial">Trial Balance</button>
                <button class="sim-tab" data-sim="adjusting">Adjusting Entries</button>
                <button class="sim-tab" data-sim="statements">Financial Statements</button>
            </div>
            <div class="simulator-content">
                <div id="sim-journal" class="sim-panel active">
                    <h3>Journal Entry Simulator</h3>
                    <p>Create journal entries for transactions</p>
                    <div class="journal-builder">
                        <p class="coming-soon">Full journal entry simulator coming soon!</p>
                    </div>
                </div>
                <div id="sim-taccount" class="sim-panel">
                    <h3>T-Account Simulator</h3>
                    <p>Visualize debits and credits</p>
                </div>
                <div id="sim-trial" class="sim-panel">
                    <h3>Trial Balance Builder</h3>
                    <p>Create and verify trial balances</p>
                </div>
                <div id="sim-adjusting" class="sim-panel">
                    <h3>Adjusting Entries Practice</h3>
                    <p>Master all five types of adjusting entries</p>
                </div>
                <div id="sim-statements" class="sim-panel">
                    <h3>Financial Statement Builder</h3>
                    <p>Build Income Statement and Balance Sheet</p>
                </div>
            </div>
        </div>
    `;

    // Setup simulator tabs
    document.querySelectorAll('.sim-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const simType = tab.dataset.sim;
            switchSimulator(simType);
        });
    });
}

function switchSimulator(simType) {
    document.querySelectorAll('.sim-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.sim-panel').forEach(p => p.classList.remove('active'));

    document.querySelector(`[data-sim="${simType}"]`).classList.add('active');
    document.getElementById(`sim-${simType}`).classList.add('active');
}

// ===========================
// QUIZ SECTION
// ===========================

function initializeQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="quiz-main">
            <h3>Select Quiz Type</h3>
            <div class="quiz-options">
                <div class="quiz-card" data-quiz-type="diagnostic">
                    <h4>🎯 Diagnostic Quiz</h4>
                    <p>Identify your strengths and weaknesses across all topics</p>
                    <span class="quiz-meta">Coming soon</span>
                </div>
                <div class="quiz-card" data-quiz-type="topic">
                    <h4>📚 Topic Quiz</h4>
                    <p>Focus on specific topics you want to practice</p>
                    <span class="quiz-meta">Coming soon</span>
                </div>
                <div class="quiz-card" data-quiz-type="practice-exam">
                    <h4>📝 Practice Exam</h4>
                    <p>Full-length practice midterm under timed conditions</p>
                    <span class="quiz-meta">35 questions | 110 minutes</span>
                </div>
                <div class="quiz-card" data-quiz-type="quick">
                    <h4>⚡ Quick Quiz</h4>
                    <p>5-minute rapid-fire review</p>
                    <span class="quiz-meta">Coming soon</span>
                </div>
            </div>
        </div>
    `;
}

function startQuizType(type) {
    const container = document.getElementById('quiz-container');

    if (type === 'practice-exam' && typeof PracticeMidterm !== 'undefined') {
        // Load the official practice midterm
        const exam = generateFullPracticeExam();
        renderPracticeExam(exam);
    } else {
        container.innerHTML = `
            <div class="info-message">
                <h3>${type.charAt(0).toUpperCase() + type.slice(1)} Quiz</h3>
                <p>This quiz type is coming soon! For now, try the Practice Exam.</p>
                <button class="btn btn-primary" data-action="quiz-back">Back to Quiz Selection</button>
            </div>
        `;
    }
}

function renderPracticeExam(exam) {
    const container = document.getElementById('quiz-container');

    let html = '<div class="practice-exam-container">';
    html += '<div class="exam-header">';
    html += '<h2>🎯 Official Practice Midterm 1</h2>';
    html += '<p class="exam-meta">200 points total | Based on Spring 2026 USC ACCT 410x</p>';
    html += '<div class="exam-timer" id="exam-timer">Time: 110:00</div>';
    html += '</div>';

    // Part I - Multiple Choice
    html += '<div class="exam-section">';
    html += '<h3>Part I: Multiple Choice (90 points)</h3>';
    html += '<p class="section-instructions">Select the best answer for each question. 6 points each.</p>';

    exam.partI.forEach((q, index) => {
        html += `<div class="exam-question" id="q-${q.id}">`;
        html += `<div class="question-number">Question ${index + 1} of 15</div>`;
        html += `<div class="question-text">${q.question}</div>`;
        html += '<div class="question-options">';

        q.options.forEach((option, i) => {
            html += `<div class="exam-option">`;
            html += `<input type="radio" name="${q.id}" id="${q.id}-${i}" value="${option}">`;
            html += `<label for="${q.id}-${i}">${option}</label>`;
            html += `</div>`;
        });

        html += '</div></div>';
    });

    html += '</div>'; // End Part I

    // Part II - Account Classification
    html += '<div class="exam-section">';
    html += '<h3>Part II: Account Classification (50 points)</h3>';
    html += '<p class="section-instructions">Select the correct classification for each scenario. 5 points each.</p>';

    exam.partII.forEach((q, index) => {
        html += `<div class="exam-question" id="q-${q.id}">`;
        html += `<div class="question-number">Question ${index + 1} of 10</div>`;
        html += `<div class="question-text">${q.scenario}</div>`;
        html += '<div class="question-options">';

        q.options.forEach((option, i) => {
            html += `<div class="exam-option">`;
            html += `<input type="radio" name="${q.id}" id="${q.id}-${i}" value="${option}">`;
            html += `<label for="${q.id}-${i}">${option}</label>`;
            html += `</div>`;
        });

        html += '</div></div>';
    });

    html += '</div>'; // End Part II

    // Part III - Transaction Analysis
    html += '<div class="exam-section">';
    html += '<h3>Part III: Transaction Analysis (60 points)</h3>';
    html += '<p class="section-instructions">Select I (Increase), D (Decrease), or N (No Change) for each category. 6 points each.</p>';

    exam.partIII.forEach((q, index) => {
        html += `<div class="exam-question transaction-analysis" id="q-${q.id}">`;
        html += `<div class="question-number">Question ${index + 1} of 10</div>`;
        html += `<div class="question-text">${q.transaction}</div>`;

        html += '<div class="transaction-grid">';
        const categories = ['assets', 'liabilities', 'equity', 'revenue', 'expenses'];
        const labels = ['Assets', 'Liabilities', 'Stockholders\' Equity', 'Revenue', 'Expenses'];

        categories.forEach((cat, i) => {
            html += '<div class="transaction-row">';
            html += `<div class="transaction-label">${labels[i]}</div>`;
            html += '<div class="transaction-options">';
            ['I', 'D', 'N'].forEach(choice => {
                html += `<label class="transaction-choice">`;
                html += `<input type="radio" name="${q.id}-${cat}" value="${choice}">`;
                html += `<span>${choice}</span>`;
                html += `</label>`;
            });
            html += '</div></div>';
        });

        html += '</div></div>';
    });

    html += '</div>'; // End Part III

    // Submit button
    html += '<div class="exam-actions">';
    html += '<button class="btn btn-primary btn-large" data-action="exam-submit">Submit Exam for Grading</button>';
    html += '<button class="btn btn-secondary" data-action="exam-cancel">Cancel and Return</button>';
    html += '</div>';

    html += '</div>'; // End container

    container.innerHTML = html;

    // Store exam for grading
    window.currentExam = exam;

    // Start timer (optional)
    startExamTimer(110);
}

function startExamTimer(minutes) {
    let totalSeconds = minutes * 60;
    const timerDiv = document.getElementById('exam-timer');

    if (!timerDiv) return;

    const interval = setInterval(() => {
        totalSeconds--;

        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;

        timerDiv.textContent = `Time: ${mins}:${secs.toString().padStart(2, '0')}`;

        if (totalSeconds <= 0) {
            clearInterval(interval);
            timerDiv.textContent = 'Time\'s Up!';
            timerDiv.style.color = 'red';
        }
    }, 1000);

    // Store interval ID to clear later if needed
    window.examTimerInterval = interval;
}

function gradePracticeExam() {
    if (!window.currentExam) {
        alert('No exam loaded');
        return;
    }

    const exam = window.currentExam;
    let userAnswers = { partI: {}, partII: {}, partIII: {} };

    // Collect Part I answers
    exam.partI.forEach(q => {
        const selected = document.querySelector(`input[name="${q.id}"]:checked`);
        if (selected) {
            userAnswers.partI[q.id] = selected.value;
        }
    });

    // Collect Part II answers
    exam.partII.forEach(q => {
        const selected = document.querySelector(`input[name="${q.id}"]:checked`);
        if (selected) {
            userAnswers.partII[q.id] = selected.value;
        }
    });

    // Collect Part III answers
    exam.partIII.forEach(q => {
        const categories = ['assets', 'liabilities', 'equity', 'revenue', 'expenses'];
        userAnswers.partIII[q.id] = {};

        categories.forEach(cat => {
            const selected = document.querySelector(`input[name="${q.id}-${cat}"]:checked`);
            if (selected) {
                userAnswers.partIII[q.id][cat] = selected.value;
            }
        });
    });

    // Calculate score
    const results = calculateScore(userAnswers, exam);

    // Display results
    displayExamResults(results, exam, userAnswers);
}

function displayExamResults(results, exam, userAnswers) {
    const container = document.getElementById('quiz-container');

    let html = '<div class="exam-results">';
    html += '<h2>📊 Exam Results</h2>';

    html += '<div class="results-summary">';
    html += `<div class="score-card">`;
    html += `<div class="score-large">${results.score} / ${results.maxScore}</div>`;
    html += `<div class="score-percentage">${results.percentage}%</div>`;
    html += `<div class="score-grade">Grade: ${results.grade}</div>`;
    html += `</div>`;

    html += '<div class="score-breakdown">';
    html += `<div class="breakdown-item">`;
    html += `<strong>Part I (Multiple Choice):</strong> ${results.breakdown.partI} / 90 points`;
    html += `</div>`;
    html += `<div class="breakdown-item">`;
    html += `<strong>Part II (Classification):</strong> ${results.breakdown.partII} / 50 points`;
    html += `</div>`;
    html += `<div class="breakdown-item">`;
    html += `<strong>Part III (Transaction Analysis):</strong> ${results.breakdown.partIII} / 60 points`;
    html += `</div>`;
    html += '</div></div>';

    // Detailed review
    html += '<div class="detailed-review">';
    html += '<h3>Detailed Review</h3>';

    // Part I Review
    html += '<h4>Part I: Multiple Choice</h4>';
    exam.partI.forEach((q, index) => {
        const userAns = userAnswers.partI[q.id];
        const isCorrect = userAns === q.correctAnswer;

        html += `<div class="review-question ${isCorrect ? 'correct' : 'incorrect'}">`;
        html += `<div class="review-header">`;
        html += `<span class="review-number">Q${index + 1}</span>`;
        html += `<span class="review-result">${isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>`;
        html += `</div>`;
        html += `<div class="review-question-text">${q.question}</div>`;
        html += `<div class="review-answer"><strong>Your Answer:</strong> ${userAns || 'No answer'}</div>`;
        if (!isCorrect) {
            html += `<div class="review-correct-answer"><strong>Correct Answer:</strong> ${q.correctAnswer}</div>`;
        }
        html += `<div class="review-explanation">${q.explanation}</div>`;
        html += `</div>`;
    });

    html += '</div>'; // End detailed review

    html += '<div class="results-actions">';
    html += '<button class="btn btn-primary" data-action="exam-retake">Retake Exam</button>';
    html += '<button class="btn btn-secondary" data-action="quiz-back">Back to Quizzes</button>';
    html += '</div>';

    html += '</div>'; // End results

    container.innerHTML = html;

    // Clear timer
    if (window.examTimerInterval) {
        clearInterval(window.examTimerInterval);
    }

    // Save score
    AppState.userProgress.quizzesCompleted++;
    saveUserProgress();
}

// ===========================
// STUDY GUIDE SECTION
// ===========================

function initializeStudyGuide() {
    const container = document.getElementById('study-container');
    container.innerHTML = getStudyGuideHTML();
}

function scrollToStudySection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===========================
// DARK MODE
// ===========================

function setupDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    if (!toggle || !icon) return;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    AppState.settings.darkMode = (savedTheme === 'dark');
    updateThemeIcon();

    // Toggle handler
    toggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        AppState.settings.darkMode = (newTheme === 'dark');
        updateThemeIcon();
    });
}

function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    const isDark = AppState.settings.darkMode;

    if (isDark) {
        // Moon icon
        icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
    } else {
        // Sun icon
        icon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>';
    }
}

// ===========================
// PROGRESS SECTION
// ===========================

function initializeProgressSection() {
    const container = document.getElementById('progress-container');

    const topicData = Object.entries(AppState.userProgress.topicMastery);

    let html = '<div class="progress-main">';
    html += '<h3>Topic Mastery</h3>';
    html += '<div class="topic-progress-list">';

    topicData.forEach(([topic, mastery]) => {
        html += `
            <div class="topic-progress-item">
                <div class="topic-name">${formatTopicName(topic)}</div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${mastery}%"></div>
                </div>
                <div class="progress-percent">${mastery}%</div>
            </div>
        `;
    });

    html += '</div>';
    html += '<div class="progress-stats">';
    html += `<p><strong>Total Problems Completed:</strong> ${AppState.userProgress.problemsCompleted}</p>`;
    html += `<p><strong>Quizzes Completed:</strong> ${AppState.userProgress.quizzesCompleted}</p>`;
    html += `<p><strong>Last Activity:</strong> ${AppState.userProgress.lastActivity || 'Never'}</p>`;
    html += '</div>';
    html += '</div>';

    container.innerHTML = html;
}

// ===========================
// HELPER FUNCTIONS
// ===========================

function getRandomProblems(topic, difficulty, count) {
    let pool = [];

    if (typeof ProblemBank !== 'undefined') {
        if (topic === 'all') {
            pool = Object.values(ProblemBank).flat();
        } else {
            pool = ProblemBank[topic] || [];
        }

        if (difficulty !== 'all') {
            pool = pool.filter(problem => problem.difficulty === difficulty);
        }
    }

    if (pool.length <= count) {
        return pool;
    }

    const shuffled = shuffleArray(pool.slice());
    return shuffled.slice(0, count);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function formatCurrency(amount) {
    if (typeof amount !== 'number' || Number.isNaN(amount)) return amount;
    return amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function formatKeyLabel(label) {
    if (!label) return '';
    return label
        .toString()
        .replace(/([A-Z])/g, ' $1')
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/^./, (str) => str.toUpperCase());
}

function flattenAnswerObject(obj, prefix = '') {
    const fields = [];
    Object.entries(obj).forEach(([key, value]) => {
        const path = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            fields.push(...flattenAnswerObject(value, path));
        } else {
            fields.push({
                path,
                label: path.split('.').map(formatKeyLabel).join(' · '),
                value
            });
        }
    });
    return fields;
}

function getAnswerByPath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function parseTransactionAnswer(answer) {
    if (!answer) return null;
    if (typeof answer === 'object') {
        return {
            assets: answer.assets,
            liabilities: answer.liabilities,
            equity: answer.equity,
            revenue: answer.revenue,
            expenses: answer.expenses
        };
    }

    if (typeof answer !== 'string') return null;

    const map = {};
    answer.split(',').forEach(part => {
        const [label, value] = part.split(':').map(item => item.trim());
        if (!label || !value) return;
        const key = label.toLowerCase();
        const normalized = value.trim().charAt(0).toUpperCase();
        if (key.includes('asset')) map.assets = normalized;
        if (key.includes('liab')) map.liabilities = normalized;
        if (key.includes('equity')) map.equity = normalized;
        if (key.includes('revenue')) map.revenue = normalized;
        if (key.includes('expense')) map.expenses = normalized;
    });

    return map;
}

function formatTransactionAnswer(answer) {
    const map = parseTransactionAnswer(answer);
    if (!map) return '<span>Solution unavailable.</span>';
    const labels = {
        assets: 'Assets',
        liabilities: 'Liabilities',
        equity: 'Stockholders\' Equity',
        revenue: 'Revenue',
        expenses: 'Expenses'
    };
    return `
        <div class="transaction-answer">
            ${Object.keys(labels).map(key => `
                <div class="transaction-answer-row">
                    <span>${labels[key]}</span>
                    <strong>${map[key] || '?'}</strong>
                </div>
            `).join('')}
        </div>
    `;
}

function normalizeJournalEntries(answer) {
    if (!answer) return [];

    if (answer.debits && answer.credits) {
        return [{
            label: 'Entry',
            debits: answer.debits,
            credits: answer.credits
        }];
    }

    if (Array.isArray(answer.entries)) {
        return answer.entries.map((entry, index) => ({
            label: `Entry ${index + 1}`,
            debits: [{ account: entry.debit, amount: entry.amount }],
            credits: [{ account: entry.credit, amount: entry.amount }]
        }));
    }

    const entries = [];
    Object.entries(answer).forEach(([key, value]) => {
        if (value && value.debits && value.credits) {
            entries.push({
                label: formatKeyLabel(key),
                debits: value.debits,
                credits: value.credits
            });
            return;
        }

        if (value && typeof value === 'object') {
            Object.entries(value).forEach(([subKey, subVal]) => {
                if (subVal && subVal.debits && subVal.credits) {
                    entries.push({
                        label: `${formatKeyLabel(key)} · ${formatKeyLabel(subKey)}`,
                        debits: subVal.debits,
                        credits: subVal.credits
                    });
                }
            });
        }
    });

    return entries;
}

function formatJournalEntryAnswer(answer) {
    const entries = normalizeJournalEntries(answer);
    if (!entries.length) {
        return `<pre>${JSON.stringify(answer, null, 2)}</pre>`;
    }

    const renderLines = (lines) => lines.map(line => `
        <div class="journal-line">
            <span>${line.account}</span>
            <strong>$${formatCurrency(Math.abs(line.amount))}</strong>
        </div>
    `).join('');

    return entries.map(entry => `
        <div class="journal-solution">
            <div class="journal-group-label">${entry.label}</div>
            <div class="journal-solution-grid">
                <div>
                    <div class="journal-header">Debits</div>
                    ${renderLines(entry.debits)}
                </div>
                <div>
                    <div class="journal-header">Credits</div>
                    ${renderLines(entry.credits)}
                </div>
            </div>
        </div>
    `).join('');
}

function formatComprehensiveAnswer(answer) {
    if (typeof answer === 'number') {
        return `<strong>$${formatCurrency(answer)}</strong>`;
    }
    if (typeof answer !== 'object' || answer === null) {
        return `<pre>${JSON.stringify(answer, null, 2)}</pre>`;
    }

    const sections = Object.entries(answer).map(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            const lines = Object.entries(value).map(([subKey, subVal]) => `
                <div class="solution-line">
                    <span>${formatKeyLabel(subKey)}</span>
                    <strong>$${formatCurrency(subVal)}</strong>
                </div>
            `).join('');
            return `
                <div class="solution-group">
                    <h5>${formatKeyLabel(key)}</h5>
                    ${lines}
                </div>
            `;
        }
        return `
            <div class="solution-line">
                <span>${formatKeyLabel(key)}</span>
                <strong>$${formatCurrency(value)}</strong>
            </div>
        `;
    }).join('');

    return `<div class="comprehensive-solution">${sections}</div>`;
}

function formatAnswerDisplay(problem) {
    if (problem.type === 'journal-entry') {
        return formatJournalEntryAnswer(problem.answer);
    }
    if (problem.type === 'transaction-analysis') {
        return formatTransactionAnswer(problem.answer);
    }
    if (problem.type === 'comprehensive') {
        return formatComprehensiveAnswer(problem.answer);
    }
    if (problem.type === 'calculation') {
        return `<strong>$${formatCurrency(problem.answer)}</strong>`;
    }
    if (problem.type === 'true-false') {
        return problem.answer ? 'True' : 'False';
    }
    return problem.answer;
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function generateUniqueId() {
    return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// ===========================
// EXPORT FOR GLOBAL ACCESS
// ===========================

window.startDiagnostic = startDiagnostic;
window.viewStudyGuide = viewStudyGuide;
window.startPractice = startPractice;
window.loadProblems = loadProblems;
window.startQuizType = startQuizType;
window.scrollToStudySection = scrollToStudySection;
