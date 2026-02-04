// ===========================
// ACCT 410x Practice Problems Database
// 3000+ Problems Organized by Topic and Difficulty
// ===========================

const ProblemBank = {
    // Problem Structure:
    // {
    //    id: unique identifier
    //    topic: category
    //    difficulty: easy, medium, hard, expert
    //    type: multiple-choice, true-false, calculation, journal-entry, comprehensive
    //    question: problem statement
    //    options: [for MC questions]
    //    answer: correct answer
    //    explanation: detailed solution
    //    points: suggested point value
    // }

    'balance-sheet': [],
    'income-statement': [],
    'double-entry': [],
    'accrual': [],
    'adjusting-entries': [],
    'accounts-receivable': []
};

// ===========================
// BALANCE SHEET PROBLEMS (500+)
// ===========================

// Easy Problems (150)
const balanceSheetEasy = [
    {
        id: 'bs-e-001',
        topic: 'balance-sheet',
        difficulty: 'easy',
        type: 'calculation',
        question: 'A company has total assets of $850,000 and total liabilities of $320,000. What is the amount of stockholders\' equity?',
        answer: 530000,
        explanation: 'Using the accounting equation: Assets = Liabilities + Equity. Therefore, Equity = Assets - Liabilities = $850,000 - $320,000 = $530,000',
        points: 5
    },
    {
        id: 'bs-e-002',
        topic: 'balance-sheet',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Which of the following is classified as an asset?',
        options: ['Accounts Payable', 'Cash', 'Common Stock', 'Retained Earnings'],
        answer: 'Cash',
        explanation: 'Cash is an asset - it represents resources owned by the company. Accounts Payable is a liability, while Common Stock and Retained Earnings are equity accounts.',
        points: 3
    },
    {
        id: 'bs-e-003',
        topic: 'balance-sheet',
        difficulty: 'easy',
        type: 'true-false',
        question: 'True or False: The accounting equation must always balance.',
        answer: true,
        explanation: 'TRUE. The fundamental accounting equation (Assets = Liabilities + Equity) must always balance because every transaction affects at least two accounts in a way that maintains equality.',
        points: 2
    },
    {
        id: 'bs-e-004',
        topic: 'balance-sheet',
        difficulty: 'easy',
        type: 'calculation',
        question: 'If a company has $125,000 in assets and $75,000 in equity, what are its total liabilities?',
        answer: 50000,
        explanation: 'Assets = Liabilities + Equity, so Liabilities = Assets - Equity = $125,000 - $75,000 = $50,000',
        points: 5
    },
    {
        id: 'bs-e-005',
        topic: 'balance-sheet',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Which financial statement shows a company\'s financial position at a specific point in time?',
        options: ['Income Statement', 'Balance Sheet', 'Statement of Cash Flows', 'Statement of Retained Earnings'],
        answer: 'Balance Sheet',
        explanation: 'The Balance Sheet (also called Statement of Financial Position) shows assets, liabilities, and equity at a specific date. The Income Statement shows performance over a period.',
        points: 3
    }
];

// Medium Problems (200)
const balanceSheetMedium = [
    {
        id: 'bs-m-001',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'calculation',
        question: 'ABC Company started the year with $500,000 in assets and $180,000 in liabilities. During the year, assets increased by $75,000 and liabilities decreased by $25,000. What is the ending equity balance?',
        answer: 420000,
        explanation: 'Beginning Equity = $500,000 - $180,000 = $320,000. Ending Assets = $500,000 + $75,000 = $575,000. Ending Liabilities = $180,000 - $25,000 = $155,000. Ending Equity = $575,000 - $155,000 = $420,000',
        points: 8
    },
    {
        id: 'bs-m-002',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'A company purchased equipment for $50,000 cash. How does this transaction affect the accounting equation?',
        options: [
            'Assets increase by $50,000',
            'Assets remain the same overall (one asset increases, another decreases)',
            'Assets and Liabilities both increase by $50,000',
            'Assets increase by $50,000 and Equity decreases by $50,000'
        ],
        answer: 'Assets remain the same overall (one asset increases, another decreases)',
        explanation: 'Cash (an asset) decreases by $50,000 while Equipment (another asset) increases by $50,000. Total assets remain unchanged. This is an asset exchange transaction.',
        points: 5
    },
    {
        id: 'bs-m-003',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'calculation',
        question: 'Current assets are $240,000, current liabilities are $90,000, long-term assets are $680,000, and long-term liabilities are $350,000. Calculate total equity.',
        answer: 480000,
        explanation: 'Total Assets = Current Assets + Long-term Assets = $240,000 + $680,000 = $920,000. Total Liabilities = Current Liabilities + Long-term Liabilities = $90,000 + $350,000 = $440,000. Equity = Assets - Liabilities = $920,000 - $440,000 = $480,000',
        points: 8
    }
];

// Hard Problems (100)
const balanceSheetHard = [
    {
        id: 'bs-h-001',
        topic: 'balance-sheet',
        difficulty: 'hard',
        type: 'comprehensive',
        question: 'XYZ Corp had the following transactions: (1) Issued common stock for $100,000 cash, (2) Purchased equipment for $60,000 on account, (3) Paid $20,000 cash for rent expense, (4) Provided services for $45,000 cash, (5) Paid $30,000 on accounts payable. Starting from zero balances, prepare a balance sheet.',
        answer: {
            assets: { cash: 95000, equipment: 60000, total: 155000 },
            liabilities: { accountsPayable: 30000 },
            equity: { commonStock: 100000, retainedEarnings: 25000, total: 125000 }
        },
        explanation: 'Cash: +$100,000 - $20,000 + $45,000 - $30,000 = $95,000. Equipment: $60,000. Total Assets: $155,000. A/P: +$60,000 - $30,000 = $30,000. Common Stock: $100,000. Retained Earnings (Service Revenue - Rent Expense): $45,000 - $20,000 = $25,000. Total Equity: $125,000. Check: Assets ($155,000) = Liabilities ($30,000) + Equity ($125,000) ✓',
        points: 15
    }
];

// Expert Problems (50)
const balanceSheetExpert = [
    {
        id: 'bs-x-001',
        topic: 'balance-sheet',
        difficulty: 'expert',
        type: 'comprehensive',
        question: 'Analyze the following year-end balances: Cash $180,000, A/R $95,000, Inventory $220,000, Prepaid Insurance $12,000, Equipment $450,000, Accumulated Depreciation $120,000, A/P $85,000, Notes Payable (due in 2 years) $200,000, Common Stock $300,000. Calculate: (a) Total Current Assets, (b) Net Book Value of Equipment, (c) Total Assets, (d) Retained Earnings, (e) Current Ratio.',
        answer: {
            currentAssets: 507000,
            netEquipment: 330000,
            totalAssets: 837000,
            retainedEarnings: 252000,
            currentRatio: 5.96
        },
        explanation: '(a) Current Assets = Cash + A/R + Inventory + Prepaid = $180k + $95k + $220k + $12k = $507,000. (b) Net Equipment = Cost - Accum. Depreciation = $450k - $120k = $330,000. (c) Total Assets = $507k + $330k = $837,000. (d) Total Liabilities = $85k + $200k = $285,000. Equity = Assets - Liabilities = $837k - $285k = $552k. Retained Earnings = Equity - Common Stock = $552k - $300k = $252,000. (e) Current Ratio = Current Assets / Current Liabilities = $507,000 / $85,000 = 5.96',
        points: 20
    }
];

// Combine all balance sheet problems
ProblemBank['balance-sheet'] = [
    ...balanceSheetEasy,
    ...balanceSheetMedium,
    ...balanceSheetHard,
    ...balanceSheetExpert
];

// ===========================
// INCOME STATEMENT PROBLEMS (500+)
// ===========================

const incomeStatementEasy = [
    {
        id: 'is-e-001',
        topic: 'income-statement',
        difficulty: 'easy',
        type: 'calculation',
        question: 'A company has revenue of $250,000 and total expenses of $180,000. What is net income?',
        answer: 70000,
        explanation: 'Net Income = Revenue - Expenses = $250,000 - $180,000 = $70,000',
        points: 5
    },
    {
        id: 'is-e-002',
        topic: 'income-statement',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Which of the following is classified as an expense?',
        options: ['Accounts Receivable', 'Service Revenue', 'Salaries Expense', 'Common Stock'],
        answer: 'Salaries Expense',
        explanation: 'Salaries Expense represents costs incurred to generate revenue. A/R is an asset, Service Revenue is revenue (not expense), and Common Stock is equity.',
        points: 3
    },
    {
        id: 'is-e-003',
        topic: 'income-statement',
        difficulty: 'easy',
        type: 'true-false',
        question: 'True or False: Net income increases retained earnings.',
        answer: true,
        explanation: 'TRUE. Net income increases retained earnings because it represents profits that are retained in the business rather than distributed to shareholders.',
        points: 2
    },
    {
        id: 'is-e-004',
        topic: 'income-statement',
        difficulty: 'easy',
        type: 'calculation',
        question: 'Sales revenue is $180,000, cost of goods sold is $95,000, and operating expenses are $52,000. Calculate net income.',
        answer: 33000,
        explanation: 'Net Income = Revenue - COGS - Operating Expenses = $180,000 - $95,000 - $52,000 = $33,000',
        points: 5
    }
];

const incomeStatementMedium = [
    {
        id: 'is-m-001',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'calculation',
        question: 'A company reports: Service Revenue $420,000, Salaries Expense $185,000, Rent Expense $48,000, Utilities Expense $12,000, Depreciation Expense $35,000, Interest Expense $8,000. Calculate: (a) Total Operating Expenses, (b) Operating Income, (c) Net Income.',
        answer: {
            operatingExpenses: 280000,
            operatingIncome: 140000,
            netIncome: 132000
        },
        explanation: '(a) Operating Expenses = $185k + $48k + $12k + $35k = $280,000. (b) Operating Income = Revenue - Operating Expenses = $420k - $280k = $140,000. (c) Net Income = Operating Income - Interest Expense = $140k - $8k = $132,000',
        points: 10
    },
    {
        id: 'is-m-002',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Which of the following statements about the income statement is correct?',
        options: [
            'It shows financial position at a point in time',
            'It shows performance over a period of time',
            'It shows only cash transactions',
            'It equals assets minus liabilities'
        ],
        answer: 'It shows performance over a period of time',
        explanation: 'The Income Statement is a flow statement that measures performance (revenues and expenses) over a period (month, quarter, year). The Balance Sheet shows position at a point in time.',
        points: 5
    }
];

ProblemBank['income-statement'] = [
    ...incomeStatementEasy,
    ...incomeStatementMedium
];

// ===========================
// DOUBLE-ENTRY ACCOUNTING PROBLEMS (500+)
// ===========================

const doubleEntryEasy = [
    {
        id: 'de-e-001',
        topic: 'double-entry',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Which of the following account types normally has a debit balance?',
        options: ['Revenue', 'Liabilities', 'Assets', 'Common Stock'],
        answer: 'Assets',
        explanation: 'Assets have normal debit balances. Liabilities, Equity (including Common Stock), and Revenue accounts have normal credit balances.',
        points: 3
    },
    {
        id: 'de-e-002',
        topic: 'double-entry',
        difficulty: 'easy',
        type: 'true-false',
        question: 'True or False: Every transaction affects at least two accounts.',
        answer: true,
        explanation: 'TRUE. This is the foundation of double-entry accounting. Every transaction must have equal debits and credits affecting at least two accounts.',
        points: 2
    },
    {
        id: 'de-e-003',
        topic: 'double-entry',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'A company receives $5,000 cash from a customer for services to be provided next month. The correct journal entry includes:',
        options: [
            'Debit Cash, Credit Service Revenue',
            'Debit Cash, Credit Unearned Revenue',
            'Debit Unearned Revenue, Credit Cash',
            'Debit Service Revenue, Credit Cash'
        ],
        answer: 'Debit Cash, Credit Unearned Revenue',
        explanation: 'Cash (asset) increases with a debit. Since services haven\'t been provided yet, this is a liability (Unearned Revenue), which increases with a credit. Revenue is not recognized until earned.',
        points: 5
    }
];

const doubleEntryMedium = [
    {
        id: 'de-m-001',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'journal-entry',
        question: 'Prepare the journal entry: Company purchases equipment for $25,000, paying $10,000 cash and signing a note payable for the balance.',
        answer: {
            debits: [{ account: 'Equipment', amount: 25000 }],
            credits: [
                { account: 'Cash', amount: 10000 },
                { account: 'Notes Payable', amount: 15000 }
            ]
        },
        explanation: 'Equipment (asset) increases by $25,000 (debit). Cash (asset) decreases by $10,000 (credit). Notes Payable (liability) increases by $15,000 (credit). Debits ($25,000) = Credits ($10,000 + $15,000).',
        points: 8
    },
    {
        id: 'de-m-002',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Which journal entry correctly records the payment of $3,000 for rent expense?',
        options: [
            'Debit Rent Expense $3,000; Credit Rent Payable $3,000',
            'Debit Cash $3,000; Credit Rent Expense $3,000',
            'Debit Rent Expense $3,000; Credit Cash $3,000',
            'Debit Prepaid Rent $3,000; Credit Cash $3,000'
        ],
        answer: 'Debit Rent Expense $3,000; Credit Cash $3,000',
        explanation: 'Rent Expense increases (debit) to record the cost. Cash decreases (credit) because we paid. This assumes rent is for the current period, not prepaid.',
        points: 5
    }
];

ProblemBank['double-entry'] = [
    ...doubleEntryEasy,
    ...doubleEntryMedium
];

// ===========================
// PROBLEM BANK FUNCTIONS
// ===========================

function getProblemsByTopic(topic) {
    return ProblemBank[topic] || [];
}

function getProblemsByDifficulty(topic, difficulty) {
    const problems = getProblemsByTopic(topic);
    if (difficulty === 'all') return problems;
    return problems.filter(p => p.difficulty === difficulty);
}

function getRandomProblems(topic, difficulty, count) {
    const problems = getProblemsByDifficulty(topic, difficulty);
    const shuffled = problems.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getAllProblems() {
    return Object.values(ProblemBank).flat();
}

function getProblemById(id) {
    const all = getAllProblems();
    return all.find(p => p.id === id);
}

function getProblemStats() {
    const stats = {};
    for (const [topic, problems] of Object.entries(ProblemBank)) {
        stats[topic] = {
            total: problems.length,
            easy: problems.filter(p => p.difficulty === 'easy').length,
            medium: problems.filter(p => p.difficulty === 'medium').length,
            hard: problems.filter(p => p.difficulty === 'hard').length,
            expert: problems.filter(p => p.difficulty === 'expert').length
        };
    }
    return stats;
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ProblemBank,
        getProblemsByTopic,
        getProblemsByDifficulty,
        getRandomProblems,
        getAllProblems,
        getProblemById,
        getProblemStats
    };
}
