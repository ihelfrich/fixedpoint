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
    const average = Math.round(total / 7);
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

    // Get actual problems
    setTimeout(() => {
        container.innerHTML = generatePracticeProblems(topic, difficulty);
    }, 300);
}

function generatePracticeProblems(topic, difficulty) {
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

    let html = '<div class="problems-container">';
    html += `<h3>Practice Problems: ${formatTopicName(topic)} - ${formatDifficulty(difficulty)}</h3>`;
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
    let html = `<div class="problem-card" id="problem-${problem.id}">`;
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
            html += `<input type="radio" name="problem-${problem.id}" id="${problem.id}-${i}" value="${option}">`;
            html += `<label for="${problem.id}-${i}">${option}</label>`;
            html += `</div>`;
        });
        html += `</div>`;
    } else if (problem.type === 'calculation') {
        html += `<div class="calculation-input">`;
        html += `<label>Your Answer: $</label>`;
        html += `<input type="number" id="answer-${problem.id}" placeholder="Enter amount">`;
        html += `</div>`;
    } else if (problem.type === 'true-false') {
        html += `<div class="problem-options">`;
        html += `<div class="option">`;
        html += `<input type="radio" name="problem-${problem.id}" id="${problem.id}-true" value="true">`;
        html += `<label for="${problem.id}-true">True</label>`;
        html += `</div>`;
        html += `<div class="option">`;
        html += `<input type="radio" name="problem-${problem.id}" id="${problem.id}-false" value="false">`;
        html += `<label for="${problem.id}-false">False</label>`;
        html += `</div>`;
        html += `</div>`;
    }

    html += `<button class="btn btn-secondary check-answer-btn" onclick="checkAnswer('${problem.id}')">Check Answer</button>`;
    html += `<div class="answer-feedback" id="feedback-${problem.id}" style="display:none;"></div>`;
    html += `</div>`;

    return html;
}

function checkAnswer(problemId) {
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

    // Get user's answer
    let userAnswer = null;
    if (problem.type === 'multiple-choice' || problem.type === 'true-false') {
        const selected = document.querySelector(`input[name="problem-${problemId}"]:checked`);
        userAnswer = selected ? selected.value : null;
    } else if (problem.type === 'calculation') {
        const input = document.getElementById(`answer-${problemId}`);
        userAnswer = input ? parseFloat(input.value) : null;
    }

    const feedbackDiv = document.getElementById(`feedback-${problemId}`);

    if (userAnswer === null) {
        feedbackDiv.innerHTML = '<p class="feedback-warning">Please select or enter an answer.</p>';
        feedbackDiv.style.display = 'block';
        return;
    }

    // Check if correct
    let isCorrect = false;
    if (problem.type === 'calculation') {
        isCorrect = Math.abs(userAnswer - problem.answer) < 0.01;
    } else if (problem.type === 'true-false') {
        isCorrect = (userAnswer === 'true') === problem.answer;
    } else {
        isCorrect = userAnswer === problem.answer;
    }

    // Show feedback
    if (isCorrect) {
        feedbackDiv.innerHTML = `
            <div class="feedback-correct">
                <strong>✓ Correct!</strong>
                <p>${problem.explanation}</p>
            </div>
        `;
        AppState.userProgress.problemsCompleted++;
    } else {
        feedbackDiv.innerHTML = `
            <div class="feedback-incorrect">
                <strong>✗ Incorrect</strong>
                <p><strong>Correct Answer:</strong> ${problem.answer}</p>
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
                <button class="btn btn-primary" onclick="initializeQuiz()">Back to Quiz Selection</button>
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
    html += '<button class="btn btn-primary btn-large" onclick="gradePracticeExam()">Submit Exam for Grading</button>';
    html += '<button class="btn btn-secondary" onclick="initializeQuiz()">Cancel and Return</button>';
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
    html += '<button class="btn btn-primary" onclick="startQuizType(\'practice-exam\')">Retake Exam</button>';
    html += '<button class="btn btn-secondary" onclick="initializeQuiz()">Back to Quizzes</button>';
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
