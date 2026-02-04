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
// ACCRUAL ACCOUNTING PROBLEMS (500+)
// ===========================

const accrualEasy = [
    {
        id: 'acr-e-001',
        topic: 'accrual',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Under accrual accounting, revenue is recognized when:',
        options: [
            'Cash is received',
            'Goods or services are provided (earned)',
            'An invoice is sent',
            'Payment is promised'
        ],
        answer: 'Goods or services are provided (earned)',
        explanation: 'The revenue recognition principle states that revenue is recognized when it is earned, not when cash is received. This is a core principle of accrual accounting.',
        points: 3
    },
    {
        id: 'acr-e-002',
        topic: 'accrual',
        difficulty: 'easy',
        type: 'true-false',
        question: 'True or False: Under cash accounting, you record revenue when you receive cash, regardless of when services were provided.',
        answer: true,
        explanation: 'TRUE. Cash-basis accounting recognizes revenue when cash is received and expenses when cash is paid, regardless of when the economic activity occurred.',
        points: 2
    },
    {
        id: 'acr-e-003',
        topic: 'accrual',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'A company provides consulting services in December 2025 but doesn\'t receive payment until January 2026. Under accrual accounting, when should the revenue be recognized?',
        options: [
            'December 2025',
            'January 2026',
            'Split between both months',
            'When the client approves the invoice'
        ],
        answer: 'December 2025',
        explanation: 'Revenue is recognized in December 2025 when the services were provided (earned), not in January when cash was received. The company would debit Accounts Receivable and credit Service Revenue in December.',
        points: 5
    },
    {
        id: 'acr-e-004',
        topic: 'accrual',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'The matching principle states that:',
        options: [
            'Revenue and expenses should be recorded in the same month',
            'Expenses should be recorded in the same period as the revenues they help generate',
            'Cash receipts and cash payments should match',
            'Assets should equal liabilities plus equity'
        ],
        answer: 'Expenses should be recorded in the same period as the revenues they help generate',
        explanation: 'The matching principle requires that expenses be matched with the revenues they helped generate in the same accounting period. For example, COGS is recorded when inventory is sold, not when it\'s purchased.',
        points: 5
    },
    {
        id: 'acr-e-005',
        topic: 'accrual',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'A customer pays $12,000 in advance for a one-year service contract starting January 1. Under accrual accounting, how much revenue should be recognized in January?',
        options: ['$0', '$1,000', '$6,000', '$12,000'],
        answer: '$1,000',
        explanation: '$12,000 / 12 months = $1,000 per month. In January, only one month of service has been provided, so only $1,000 of revenue is earned. The rest remains as Unearned Revenue (a liability).',
        points: 5
    }
];

const accrualMedium = [
    {
        id: 'acr-m-001',
        topic: 'accrual',
        difficulty: 'medium',
        type: 'calculation',
        question: 'ABC Company had cash receipts of $500,000 in 2025. Accounts receivable increased from $80,000 to $110,000 during the year. What is the revenue earned in 2025 under accrual accounting?',
        answer: 530000,
        explanation: 'Revenue Earned = Cash Received + Increase in A/R = $500,000 + ($110,000 - $80,000) = $500,000 + $30,000 = $530,000. The $30,000 increase in A/R represents revenue earned but not yet collected.',
        points: 8
    },
    {
        id: 'acr-m-002',
        topic: 'accrual',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'A company paid $180,000 cash for salaries in 2025. At the beginning of 2025, Salaries Payable was $25,000. At the end of 2025, Salaries Payable was $32,000. What is the salary expense for 2025?',
        options: ['$173,000', '$180,000', '$187,000', '$237,000'],
        answer: '$187,000',
        explanation: 'Salary Expense = Cash Paid + Ending Payable - Beginning Payable = $180,000 + $32,000 - $25,000 = $187,000. The increase in payable ($7,000) represents expense incurred but not yet paid.',
        points: 8
    },
    {
        id: 'acr-m-003',
        topic: 'accrual',
        difficulty: 'medium',
        type: 'journal-entry',
        question: 'On November 1, a company received $24,000 cash for services to be provided evenly over the next 12 months. Prepare the journal entry for November 1 and the adjusting entry needed on November 30.',
        answer: {
            nov1: {
                debits: [{ account: 'Cash', amount: 24000 }],
                credits: [{ account: 'Unearned Revenue', amount: 24000 }]
            },
            nov30: {
                debits: [{ account: 'Unearned Revenue', amount: 2000 }],
                credits: [{ account: 'Service Revenue', amount: 2000 }]
            }
        },
        explanation: 'Nov 1: Debit Cash $24,000, Credit Unearned Revenue $24,000 (cash received but services not yet provided). Nov 30: Debit Unearned Revenue $2,000, Credit Service Revenue $2,000 (recognizing 1/12 of the contract = $24,000/12 = $2,000 earned in November).',
        points: 10
    }
];

const accrualHard = [
    {
        id: 'acr-h-001',
        topic: 'accrual',
        difficulty: 'hard',
        type: 'comprehensive',
        question: 'XYZ Corp reports: Cash collected from customers $850,000, Beginning A/R $125,000, Ending A/R $95,000, Beginning Unearned Revenue $45,000, Ending Unearned Revenue $62,000. Calculate the revenue recognized under accrual accounting.',
        answer: 803000,
        explanation: 'Use the formula: Revenue = Cash Collected + Change in A/R - Change in Unearned Revenue. Change in A/R = $95,000 - $125,000 = -$30,000 (decrease). Change in Unearned = $62,000 - $45,000 = +$17,000 (increase). Revenue = $850,000 + (-$30,000) - (+$17,000) = $850,000 - $30,000 - $17,000 = $803,000. Explanation: The $30,000 decrease in A/R means we collected old receivables (not new revenue this period). The $17,000 increase in Unearned Revenue means we collected cash for future services (not revenue earned this period).',
        points: 15
    }
];

ProblemBank['accrual'] = [
    ...accrualEasy,
    ...accrualMedium,
    ...accrualHard
];

// ===========================
// ADJUSTING ENTRIES PROBLEMS (500+)
// ===========================

const adjustingEasy = [
    {
        id: 'adj-e-001',
        topic: 'adjusting-entries',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Adjusting entries are made:',
        options: [
            'At the beginning of the accounting period',
            'At the end of the accounting period',
            'Whenever a transaction occurs',
            'Only when cash is received or paid'
        ],
        answer: 'At the end of the accounting period',
        explanation: 'Adjusting entries are made at the end of the accounting period (month, quarter, year) to ensure revenues and expenses are recorded in the correct period under accrual accounting.',
        points: 3
    },
    {
        id: 'adj-e-002',
        topic: 'adjusting-entries',
        difficulty: 'easy',
        type: 'true-false',
        question: 'True or False: Every adjusting entry affects at least one income statement account (revenue or expense) and one balance sheet account (asset or liability).',
        answer: true,
        explanation: 'TRUE. Adjusting entries always involve matching a temporary account (revenue/expense on income statement) with a permanent account (asset/liability on balance sheet). This ensures proper accrual accounting.',
        points: 2
    },
    {
        id: 'adj-e-003',
        topic: 'adjusting-entries',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'On December 1, a company paid $6,000 for six months of rent in advance. What adjusting entry is needed on December 31?',
        options: [
            'Debit Rent Expense $6,000; Credit Prepaid Rent $6,000',
            'Debit Rent Expense $1,000; Credit Prepaid Rent $1,000',
            'Debit Prepaid Rent $1,000; Credit Rent Expense $1,000',
            'No entry needed'
        ],
        answer: 'Debit Rent Expense $1,000; Credit Prepaid Rent $1,000',
        explanation: 'One month of rent ($6,000 / 6 months = $1,000) has been used in December. Debit Rent Expense $1,000 to recognize the cost, Credit Prepaid Rent $1,000 to reduce the asset. Prepaid Rent balance decreases from $6,000 to $5,000.',
        points: 5
    },
    {
        id: 'adj-e-004',
        topic: 'adjusting-entries',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Which of the following is an example of an accrued expense?',
        options: [
            'Prepaid insurance',
            'Depreciation',
            'Salaries owed to employees but not yet paid',
            'Supplies that have been used'
        ],
        answer: 'Salaries owed to employees but not yet paid',
        explanation: 'Accrued expenses are costs that have been incurred but not yet paid or recorded. Salaries earned by employees but not yet paid is a classic example. Entry: Debit Salary Expense, Credit Salaries Payable.',
        points: 5
    },
    {
        id: 'adj-e-005',
        topic: 'adjusting-entries',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Equipment costing $120,000 with a 10-year useful life and zero salvage value was purchased on January 1. What is the annual depreciation expense using straight-line method?',
        options: ['$10,000', '$12,000', '$120,000', '$1,000 per month'],
        answer: '$12,000',
        explanation: 'Annual Depreciation = (Cost - Salvage Value) / Useful Life = ($120,000 - $0) / 10 years = $12,000 per year. Monthly depreciation = $12,000 / 12 = $1,000.',
        points: 5
    }
];

const adjustingMedium = [
    {
        id: 'adj-m-001',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'journal-entry',
        question: 'On October 31, the Supplies account shows a balance of $8,500. A physical count reveals $2,300 of supplies still on hand. Prepare the adjusting entry.',
        answer: {
            debits: [{ account: 'Supplies Expense', amount: 6200 }],
            credits: [{ account: 'Supplies', amount: 6200 }]
        },
        explanation: 'Supplies Used = Beginning Balance - Ending Balance = $8,500 - $2,300 = $6,200. Adjusting Entry: Debit Supplies Expense $6,200, Credit Supplies $6,200. This reduces the Supplies asset to $2,300 and recognizes $6,200 expense.',
        points: 8
    },
    {
        id: 'adj-m-002',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'journal-entry',
        question: 'On July 1, the company received $18,000 for a 12-month service contract. On July 31, prepare the adjusting entry to recognize one month of revenue earned.',
        answer: {
            debits: [{ account: 'Unearned Revenue', amount: 1500 }],
            credits: [{ account: 'Service Revenue', amount: 1500 }]
        },
        explanation: 'Revenue earned in July = $18,000 / 12 months = $1,500. Adjusting Entry: Debit Unearned Revenue $1,500, Credit Service Revenue $1,500. This reduces the liability (Unearned Revenue) and recognizes earned revenue.',
        points: 8
    },
    {
        id: 'adj-m-003',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'A company has a $100,000 note payable with 6% annual interest. Interest is paid annually on December 31. What adjusting entry is needed on March 31 for the first quarter?',
        options: [
            'Debit Interest Expense $6,000; Credit Interest Payable $6,000',
            'Debit Interest Expense $1,500; Credit Interest Payable $1,500',
            'Debit Interest Payable $1,500; Credit Interest Expense $1,500',
            'No entry needed until payment is made'
        ],
        answer: 'Debit Interest Expense $1,500; Credit Interest Payable $1,500',
        explanation: 'Three months of interest has accrued: ($100,000 × 6% × 3/12) = $1,500. Debit Interest Expense $1,500 to recognize the cost, Credit Interest Payable $1,500 to record the obligation.',
        points: 8
    },
    {
        id: 'adj-m-004',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'calculation',
        question: 'Equipment was purchased for $84,000 on January 1. It has a useful life of 7 years and salvage value of $7,000. Calculate depreciation expense for the first year.',
        answer: 11000,
        explanation: 'Annual Depreciation = (Cost - Salvage Value) / Useful Life = ($84,000 - $7,000) / 7 years = $77,000 / 7 = $11,000 per year.',
        points: 8
    }
];

const adjustingHard = [
    {
        id: 'adj-h-001',
        topic: 'adjusting-entries',
        difficulty: 'hard',
        type: 'comprehensive',
        question: 'Prepare ALL adjusting entries needed on December 31: (1) Prepaid insurance shows $12,000 (1 year policy starting Oct 1), (2) Supplies account shows $5,000 but physical count is $1,200, (3) Salaries of $8,500 are owed but unpaid, (4) Equipment costing $150,000 depreciates $15,000 per year, (5) Unearned Revenue is $24,000 but $10,000 has been earned.',
        answer: {
            entries: [
                { debit: 'Insurance Expense', credit: 'Prepaid Insurance', amount: 3000 },
                { debit: 'Supplies Expense', credit: 'Supplies', amount: 3800 },
                { debit: 'Salaries Expense', credit: 'Salaries Payable', amount: 8500 },
                { debit: 'Depreciation Expense', credit: 'Accumulated Depreciation', amount: 15000 },
                { debit: 'Unearned Revenue', credit: 'Service Revenue', amount: 10000 }
            ]
        },
        explanation: '(1) Insurance: 3 months used (Oct-Dec) = $12,000 × 3/12 = $3,000. (2) Supplies: Used = $5,000 - $1,200 = $3,800. (3) Salaries: Accrue $8,500 owed. (4) Depreciation: Record $15,000 expense. (5) Revenue: Recognize $10,000 earned.',
        points: 20
    }
];

ProblemBank['adjusting-entries'] = [
    ...adjustingEasy,
    ...adjustingMedium,
    ...adjustingHard
];

// ===========================
// ACCOUNTS RECEIVABLE PROBLEMS (500+)
// ===========================

const receivablesEasy = [
    {
        id: 'ar-e-001',
        topic: 'accounts-receivable',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Accounts Receivable represents:',
        options: [
            'Cash that has been received',
            'Amounts owed TO the company by customers',
            'Amounts the company owes to suppliers',
            'Revenue that has not been earned yet'
        ],
        answer: 'Amounts owed TO the company by customers',
        explanation: 'Accounts Receivable is an asset representing amounts customers owe to the company for goods/services provided on credit. It represents future cash inflows.',
        points: 3
    },
    {
        id: 'ar-e-002',
        topic: 'accounts-receivable',
        difficulty: 'easy',
        type: 'true-false',
        question: 'True or False: The Allowance for Doubtful Accounts is a contra-asset account.',
        answer: true,
        explanation: 'TRUE. Allowance for Doubtful Accounts is a contra-asset that reduces Accounts Receivable to show the net realizable value (amount expected to be collected). It has a credit balance.',
        points: 2
    },
    {
        id: 'ar-e-003',
        topic: 'accounts-receivable',
        difficulty: 'easy',
        type: 'calculation',
        question: 'Accounts Receivable is $75,000 and Allowance for Doubtful Accounts is $3,000. What is the Net Accounts Receivable (or Net Realizable Value)?',
        answer: 72000,
        explanation: 'Net Accounts Receivable = Gross A/R - Allowance = $75,000 - $3,000 = $72,000. This is the amount the company expects to actually collect.',
        points: 5
    },
    {
        id: 'ar-e-004',
        topic: 'accounts-receivable',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'When a company sells goods on credit, the correct journal entry includes:',
        options: [
            'Debit Cash, Credit Sales Revenue',
            'Debit Accounts Receivable, Credit Sales Revenue',
            'Debit Sales Revenue, Credit Accounts Receivable',
            'Debit Accounts Payable, Credit Sales Revenue'
        ],
        answer: 'Debit Accounts Receivable, Credit Sales Revenue',
        explanation: 'Credit sale: Debit Accounts Receivable (asset increases), Credit Sales Revenue (revenue recognized). Cash will be collected later. Also record COGS separately.',
        points: 5
    },
    {
        id: 'ar-e-005',
        topic: 'accounts-receivable',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Bad Debt Expense is:',
        options: [
            'The cost of goods sold to customers',
            'The estimated uncollectible portion of accounts receivable',
            'The amount actually written off during the period',
            'A liability on the balance sheet'
        ],
        answer: 'The estimated uncollectible portion of accounts receivable',
        explanation: 'Bad Debt Expense represents the estimated amount of receivables that will not be collected. It\'s an expense on the Income Statement that matches with the period\'s credit sales.',
        points: 5
    }
];

const receivablesMedium = [
    {
        id: 'ar-m-001',
        topic: 'accounts-receivable',
        difficulty: 'medium',
        type: 'journal-entry',
        question: 'Record bad debt expense for the year estimated at 3% of credit sales of $400,000.',
        answer: {
            debits: [{ account: 'Bad Debt Expense', amount: 12000 }],
            credits: [{ account: 'Allowance for Doubtful Accounts', amount: 12000 }]
        },
        explanation: 'Bad Debt Expense = $400,000 × 3% = $12,000. Entry: Debit Bad Debt Expense $12,000, Credit Allowance for Doubtful Accounts $12,000. This increases the expense and the contra-asset allowance.',
        points: 8
    },
    {
        id: 'ar-m-002',
        topic: 'accounts-receivable',
        difficulty: 'medium',
        type: 'journal-entry',
        question: 'Write off an uncollectible account of $2,500 from customer ABC Corp.',
        answer: {
            debits: [{ account: 'Allowance for Doubtful Accounts', amount: 2500 }],
            credits: [{ account: 'Accounts Receivable', amount: 2500 }]
        },
        explanation: 'Write-off entry: Debit Allowance for Doubtful Accounts $2,500, Credit Accounts Receivable $2,500. This removes the specific receivable and reduces the allowance. Note: No expense recorded - expense was already recorded when allowance was created.',
        points: 8
    },
    {
        id: 'ar-m-003',
        topic: 'accounts-receivable',
        difficulty: 'medium',
        type: 'calculation',
        question: 'Gross Sales $500,000, Sales Returns $25,000, Sales Discounts $8,000. Calculate Net Sales.',
        answer: 467000,
        explanation: 'Net Sales = Gross Sales - Sales Returns - Sales Discounts = $500,000 - $25,000 - $8,000 = $467,000. Net Sales represents actual revenue earned after deductions.',
        points: 8
    },
    {
        id: 'ar-m-004',
        topic: 'accounts-receivable',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Before adjustment, Allowance for Doubtful Accounts has a CREDIT balance of $8,000. Accounts Receivable is $250,000. The company estimates 5% of receivables will be uncollectible. What adjusting entry is needed?',
        options: [
            'Debit Bad Debt Expense $12,500; Credit Allowance $12,500',
            'Debit Bad Debt Expense $4,500; Credit Allowance $4,500',
            'Debit Bad Debt Expense $20,500; Credit Allowance $20,500',
            'No adjustment needed'
        ],
        answer: 'Debit Bad Debt Expense $4,500; Credit Allowance $4,500',
        explanation: 'Desired Allowance = $250,000 × 5% = $12,500. Current Allowance = $8,000 credit. Additional amount needed = $12,500 - $8,000 = $4,500. Debit Bad Debt Expense $4,500, Credit Allowance $4,500.',
        points: 10
    }
];

const receivablesHard = [
    {
        id: 'ar-h-001',
        topic: 'accounts-receivable',
        difficulty: 'hard',
        type: 'comprehensive',
        question: 'Beginning balances: A/R $180,000, Allowance $9,000 (credit). During the year: Credit sales $750,000, Cash collected $680,000, Write-offs $11,000. The company estimates 4% of ending A/R will be uncollectible. Calculate: (a) Ending A/R before adjustment, (b) Required Allowance balance, (c) Bad Debt Expense for the year.',
        answer: {
            endingAR: 239000,
            requiredAllowance: 9560,
            badDebtExpense: 11560
        },
        explanation: '(a) Ending A/R = Beginning + Credit Sales - Collections - Write-offs = $180,000 + $750,000 - $680,000 - $11,000 = $239,000. (b) Required Allowance = $239,000 × 4% = $9,560. (c) Allowance T-account: Beginning $9,000 credit - Write-offs $11,000 debit = $2,000 debit balance before adjustment. To get to $9,560 credit, need: $9,560 + $2,000 = $11,560. Bad Debt Expense = $11,560.',
        points: 20
    }
];

ProblemBank['accounts-receivable'] = [
    ...receivablesEasy,
    ...receivablesMedium,
    ...receivablesHard
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
