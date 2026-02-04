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
            'accounts-receivable': 0
        },
        lastActivity: null
    },
    settings: {
        darkMode: false,
        showHints: true,
        difficulty: 'all'
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadUserProgress();
    setupNavigation();
    setupEventListeners();
});

// ===========================
// INITIALIZATION
// ===========================

function initializeApp() {
    console.log('ACCT 410x Study Platform Initialized');
    updateProgressDisplay();
}

function loadUserProgress() {
    // Load from localStorage if available
    const saved = localStorage.getItem('acct410x-progress');
    if (saved) {
        try {
            AppState.userProgress = JSON.parse(saved);
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
    const average = Math.round(total / 6);
    const progressElement = document.getElementById('user-progress');
    if (progressElement) {
        progressElement.textContent = average + '%';
    }
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

// ===========================
// PRACTICE SECTION
// ===========================

function initializePracticeSection() {
    console.log('Practice section initialized');
}

function loadProblems() {
    const topic = document.getElementById('topic-select').value;
    const difficulty = document.getElementById('difficulty-select').value;

    const container = document.getElementById('practice-container');
    container.innerHTML = '<div class="loading">Loading problems...</div>';

    // Simulate loading
    setTimeout(() => {
        container.innerHTML = generatePracticeProblems(topic, difficulty);
    }, 500);
}

function generatePracticeProblems(topic, difficulty) {
    let html = '<div class="problems-container">';
    html += `<h3>Practice Problems: ${formatTopicName(topic)} - ${formatDifficulty(difficulty)}</h3>`;

    // This will be populated with actual problems
    html += '<p class="info-message">Problems are being loaded. This section will contain 3000+ practice problems organized by topic and difficulty.</p>';
    html += '<div class="problem-placeholder">Problem generation in progress...</div>';
    html += '</div>';

    return html;
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
                <div class="quiz-card" onclick="startQuizType('diagnostic')">
                    <h4>🎯 Diagnostic Quiz</h4>
                    <p>Identify your strengths and weaknesses across all topics</p>
                    <span class="quiz-meta">30 questions | 45 minutes</span>
                </div>
                <div class="quiz-card" onclick="startQuizType('topic')">
                    <h4>📚 Topic Quiz</h4>
                    <p>Focus on specific topics you want to practice</p>
                    <span class="quiz-meta">Variable length</span>
                </div>
                <div class="quiz-card" onclick="startQuizType('practice-exam')">
                    <h4>📝 Practice Exam</h4>
                    <p>Full-length practice midterm under timed conditions</p>
                    <span class="quiz-meta">50 questions | 110 minutes</span>
                </div>
                <div class="quiz-card" onclick="startQuizType('quick')">
                    <h4>⚡ Quick Quiz</h4>
                    <p>5-minute rapid-fire review</p>
                    <span class="quiz-meta">10 questions | 5 minutes</span>
                </div>
            </div>
        </div>
    `;
}

function startQuizType(type) {
    console.log('Starting quiz type:', type);
    alert(`${type} quiz will start here!`);
}

// ===========================
// STUDY GUIDE SECTION
// ===========================

function initializeStudyGuide() {
    const container = document.getElementById('study-container');
    container.innerHTML = `
        <div class="study-guide-main">
            <div class="study-toc">
                <h3>Table of Contents</h3>
                <ul class="toc-list">
                    <li><a href="#sg-balance-sheet" onclick="scrollToStudySection('sg-balance-sheet')">1. Balance Sheet</a></li>
                    <li><a href="#sg-income-statement" onclick="scrollToStudySection('sg-income-statement')">2. Income Statement</a></li>
                    <li><a href="#sg-double-entry" onclick="scrollToStudySection('sg-double-entry')">3. Double-Entry Accounting</a></li>
                    <li><a href="#sg-accrual" onclick="scrollToStudySection('sg-accrual')">4. Accrual Accounting</a></li>
                    <li><a href="#sg-adjusting" onclick="scrollToStudySection('sg-adjusting')">5. Adjusting Entries</a></li>
                    <li><a href="#sg-receivables" onclick="scrollToStudySection('sg-receivables')">6. Accounts Receivable</a></li>
                </ul>
            </div>
            <div class="study-content">
                <p class="info-message">Comprehensive study guide content will be loaded here, covering all topics for Midterm 1.</p>
            </div>
        </div>
    `;
}

function scrollToStudySection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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
