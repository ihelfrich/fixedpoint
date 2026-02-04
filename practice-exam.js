// ===========================
// ACCT 410x Practice Midterm 1
// Based on Official Spring 2026 Practice Exam
// ===========================

// EXAM STRUCTURE:
// Part I: Multiple Choice - 15 questions × 6 points = 90 points
// Part II: Identify Financial Statement Accounts - 10 questions × 5 points = 50 points
// Part III: Transaction Analysis - 10 questions × 6 points = 60 points
// TOTAL: 200 points

const PracticeMidterm = {
    metadata: {
        totalPoints: 200,
        timeLimit: 110, // minutes
        sections: 3,
        format: 'Official USC ACCT 410x Spring 2026'
    },

    partI_MultipleChoice: [
        {
            id: 'mc-001',
            question: 'All of the following are likely to rely on accounting information to make economic decisions EXCEPT:',
            options: [
                'Creditors',
                'External auditors',
                'Potential investors',
                'Employees'
            ],
            correctAnswer: 'External auditors',
            explanation: 'External auditors use accounting information to verify accuracy, not to make economic decisions about the company. Creditors, investors, and employees all make economic decisions (lending, investing, employment) based on accounting information.',
            points: 6,
            topic: 'accounting-fundamentals'
        },
        {
            id: 'mc-002',
            question: 'Which of the following would be recognized as revenue under accrual-based accounting:',
            options: [
                'The company issues common stock of $50,000 in exchange for cash',
                'The company pays $45 for a lawn chair in cash',
                'The company provides $6,000 worth of lawn mowing services that it will be paid for in the next month',
                'The company purchases a Zamboni for $45,000 and subsequently discovers that the market price of the Zamboni has increased to $50,000',
                'All of the above',
                'None of the above'
            ],
            correctAnswer: 'The company provides $6,000 worth of lawn mowing services that it will be paid for in the next month',
            explanation: 'Under accrual accounting, revenue is recognized when earned, regardless of when cash is received. Providing services earns revenue. Issuing stock is equity financing, purchasing items are asset transactions, and unrealized gains are not recognized.',
            points: 6,
            topic: 'accrual-accounting'
        },
        {
            id: 'mc-003',
            question: 'An auditor\'s responsibility is to',
            options: [
                'Correct earnings management, if it occurs',
                'Make sure that management is reporting the numbers that the auditor believes are most accurate',
                'Verify that management\'s reporting is (materially) in accordance with GAAP',
                'Prepare financial statements on behalf of investors'
            ],
            correctAnswer: 'Verify that management\'s reporting is (materially) in accordance with GAAP',
            explanation: 'Auditors provide independent verification that financial statements comply with GAAP. They don\'t prepare statements, correct management, or determine "most accurate" numbers—they verify compliance with standards.',
            points: 6,
            topic: 'auditing-fundamentals'
        },
        {
            id: 'mc-004',
            question: 'M&M sold inventory costing $600 to customers for $1,100. The customers paid $200 in cash, and the remaining $900 was put on the customers\' accounts. Which ONE of the following would be included in the journal entries necessary to record this sale of inventory for $1,100?',
            options: [
                'Decrease in Inventory by $500',
                'Increase in Inventory by $600',
                'Decrease in Cost of Goods Sold $1,100',
                'Increase in Cost of Goods Sold $500',
                'Increase in Cost of Goods Sold $600',
                'Increase in Cost of Goods Sold $1,100'
            ],
            correctAnswer: 'Increase in Cost of Goods Sold $600',
            explanation: 'When inventory costing $600 is sold, COGS increases by $600 (the cost to the company, not the selling price). The entry is: Debit COGS $600, Credit Inventory $600. The $1,100 selling price affects Revenue and Cash/A/R, not COGS.',
            points: 6,
            topic: 'inventory-cogs'
        },
        {
            id: 'mc-005',
            question: 'I am a private equity firm thinking of buying a large ownership stake in a company. I want to invest in a company that will be highly profitable in the future. If I have access to three years of past financial statements, which of the following is a way I could use them to decide whether to invest?',
            options: [
                'I could look at the Balance Sheet to see if the company has higher revenue',
                'I could look at the Income Statement to see if revenue appears to be high',
                'I could look at the Statement of Cash Flows to see if the company has a high amount of Accounts Receivable',
                'I could look at the company\'s Income Statement to assess trends in net income and profit margins over time'
            ],
            correctAnswer: 'I could look at the company\'s Income Statement to assess trends in net income and profit margins over time',
            explanation: 'For assessing future profitability, analyzing TRENDS in net income and profit margins over multiple years on the Income Statement is most valuable. Revenue alone doesn\'t show profitability. Balance Sheet shows position, not performance. A/R is on Balance Sheet, not Cash Flows.',
            points: 6,
            topic: 'financial-analysis'
        },
        {
            id: 'mc-006',
            question: 'Which one of the following statements about the INCOME STATEMENT is true?',
            options: [
                'Cash is listed in the "Current Assets" section of the Income Statement',
                'Capital Contributions is a revenue reported on the Income Statement',
                'Total Revenues are always listed in the last row of the Income Statement',
                'Cost of Goods Sold is an expense reported on the Income Statement'
            ],
            correctAnswer: 'Cost of Goods Sold is an expense reported on the Income Statement',
            explanation: 'COGS is an expense on the Income Statement. Cash is on the Balance Sheet (not Income Statement). Capital Contributions are equity transactions, not revenue. Net Income (not Total Revenues) is typically the last line.',
            points: 6,
            topic: 'income-statement'
        },
        {
            id: 'mc-007',
            question: 'When payment collection is made on Accounts Receivable,',
            options: [
                'Total assets will remain the same',
                'Stockholders\' equity will increase',
                'Total assets will increase',
                'Total assets will decrease',
                'None of the above'
            ],
            correctAnswer: 'Total assets will remain the same',
            explanation: 'Collecting A/R: Cash (asset) increases, A/R (asset) decreases by the same amount. Total assets stay the same—it\'s an asset exchange. No effect on equity because revenue was already recognized when A/R was created.',
            points: 6,
            topic: 'accounts-receivable'
        },
        {
            id: 'mc-008',
            question: 'Which of the following would be an example of the Matching Principle?',
            options: [
                'The dollar value of assets received from customers as payment is the same as the dollar amount of revenue recorded',
                'The company recognizes Cost of Goods Sold at the same time that it recognizes Revenue from the sale of Inventory',
                'Assets equals Liabilities Plus Owners\' Equity',
                'The fiscal period covered in the Income Statement matches the fiscal period covered in the Statement of Cash Flows and the Statement of Stockholders\' Equity',
                'None of the above'
            ],
            correctAnswer: 'The company recognizes Cost of Goods Sold at the same time that it recognizes Revenue from the sale of Inventory',
            explanation: 'The Matching Principle requires expenses to be matched with related revenues in the same period. Recognizing COGS when revenue is recognized exemplifies this—matching the cost with the benefit (revenue) it generates.',
            points: 6,
            topic: 'matching-principle'
        },
        {
            id: 'mc-009',
            question: 'The employees of MishMish perform work during the current month and MishMish pays them $24,000 in cash. What is the effect on the income statement?',
            options: [
                'Cash decreased',
                'Revenues increased',
                'Salaries Payable decreased',
                'Expenses increased',
                'None of the above'
            ],
            correctAnswer: 'Expenses increased',
            explanation: 'Paying employees for work performed increases Salaries Expense on the Income Statement. "Cash decreased" affects the Balance Sheet, not the Income Statement. No liability is involved since payment is immediate.',
            points: 6,
            topic: 'expenses'
        },
        {
            id: 'mc-010',
            question: 'Maxine Company received $14,000 for consulting services it has not yet performed. What is the effect on the balance sheet?',
            options: [
                'Liabilities increased',
                'Liabilities decreased',
                'Retained Earnings increased',
                'Retained Earnings decreased',
                'None of the above'
            ],
            correctAnswer: 'Liabilities increased',
            explanation: 'Receiving cash for services not yet performed creates a liability (Unearned Revenue). The company owes services. Cash (asset) increases and Unearned Revenue (liability) increases. No effect on Retained Earnings until services are performed.',
            points: 6,
            topic: 'unearned-revenue'
        },
        {
            id: 'mc-011',
            question: 'When a company sells its own stock:',
            options: [
                'Its Stockholders\' Equity decreases',
                'Its Assets decrease',
                'Its Stockholders\' Equity increases',
                'Its Liabilities increase',
                'None of the above'
            ],
            correctAnswer: 'Its Stockholders\' Equity increases',
            explanation: 'Selling stock: Cash (asset) increases and Common Stock (equity) increases. This is a financing activity that increases both assets and equity by the same amount.',
            points: 6,
            topic: 'stockholders-equity'
        },
        {
            id: 'mc-012',
            question: 'Quick Quack Car Wash received $15,000 in cash for car wash services that it will provide in the future. The full amount was credited to Unearned Service Revenue. If the services have been rendered by year-end and no adjusting entry is made, this would cause:',
            options: [
                'Expenses to be overstated',
                'Net income to be overstated',
                'Liabilities to be overstated',
                'Assets to be understated',
                'None of the above'
            ],
            correctAnswer: 'Liabilities to be overstated',
            explanation: 'If services are rendered but the adjusting entry is not made, Unearned Revenue (liability) remains too high—it should be reduced to zero. Revenue would be understated, causing net income to be UNDERstated (not overstated). Retained Earnings would be understated.',
            points: 6,
            topic: 'adjusting-entries'
        },
        {
            id: 'mc-013',
            question: 'On January 6th, a customer purchases a $50 gift card to Home Depot. The customer gives the gift card to their mother on July 15th. On November 1st, the mother uses the full balance to buy geraniums. On November 6th, the mother plants the geraniums. Home Depot\'s fiscal year ends December 31st. On what date should Home Depot recognize the $50 in revenue under ACCRUAL-basis accounting?',
            options: [
                'January 6th',
                'July 15th',
                'November 1st',
                'November 6th',
                'December 31st',
                'The revenue will be spread out evenly over the period',
                'None of the above'
            ],
            correctAnswer: 'November 1st',
            explanation: 'Under accrual accounting, revenue is recognized when earned (goods/services provided). Home Depot earns revenue when the geraniums are SOLD (November 1st), not when the gift card is purchased or given, and not when planted.',
            points: 6,
            topic: 'revenue-recognition'
        },
        {
            id: 'mc-014',
            question: 'When you collect cash payment on Accounts Receivable (i.e., when someone pays you money that they owe you):',
            options: [
                'Total liabilities decrease',
                'Stockholders\' equity will increase',
                'Total assets will increase',
                'Total assets will decrease',
                'None of the above'
            ],
            correctAnswer: 'None of the above',
            explanation: 'Collecting A/R: Cash increases, A/R decreases—both are assets. Total assets remain unchanged (asset exchange). No effect on liabilities or equity because revenue was recognized when A/R was created.',
            points: 6,
            topic: 'accounts-receivable'
        },
        {
            id: 'mc-015',
            question: 'On July 23, Judie Co. received $16,000 for solar panels to be delivered in one month. The panels cost $10,000 and are in the warehouse. Which ONE of the following would be included in the journal entry on July 23?',
            options: [
                'Increase in Prepaid Solar Expense by $16,000',
                'Increase in Revenue by $16,000',
                'Decrease in Cash by $16,000',
                'Increase in Unearned Revenue by $16,000',
                'Increase in Cost of Goods Sold by $10,000',
                'Decrease in Inventory by $10,000'
            ],
            correctAnswer: 'Increase in Unearned Revenue by $16,000',
            explanation: 'Receiving cash for goods not yet delivered creates a liability (Unearned Revenue). Entry on July 23: Debit Cash $16,000, Credit Unearned Revenue $16,000. No revenue or COGS recognized until delivery. Inventory stays unchanged until delivery.',
            points: 6,
            topic: 'unearned-revenue'
        },
        {
            id: 'mc-016',
            question: 'Which of the following transactions would affect a balance sheet account in the current period but would NOT affect any income statement account in the current period?',
            options: [
                'Paying rent for the current month',
                'Recognizing revenue earned during the period',
                'Purchasing equipment by signing a note with the bank',
                'Recording wage expense incurred during the period'
            ],
            correctAnswer: 'Purchasing equipment by signing a note with the bank',
            explanation: 'Purchasing equipment: Equipment (asset) increases, Notes Payable (liability) increases. Both are Balance Sheet accounts. No expense is recorded (equipment is capitalized, not expensed). The other options all affect Income Statement accounts (Rent Expense, Revenue, Wage Expense).',
            points: 6,
            topic: 'balance-sheet-vs-income-statement'
        }
    ],

    partII_AccountClassification: [
        {
            id: 'ac-001',
            scenario: 'Strong Co. owns a **machine** (the purchase price was $600,000) that has been very beneficial in generating revenues. A natural disaster has destroyed the machine, and there is no other reasonable use for it.',
            options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized (Gain or Loss)'],
            correctAnswer: 'Not recognized (Gain or Loss)',
            explanation: 'The destroyed machine with no salvage value represents a Loss, not an asset (it has no future economic benefit). The loss would be recognized on the Income Statement, but the machine itself is not an asset, liability, revenue, or operating expense—it\'s a loss.',
            points: 5,
            topic: 'account-classification'
        },
        {
            id: 'ac-002',
            scenario: 'Strong Co. is currently negotiating with Wolfpack Co. over the purchase of a **research laboratory**; the price will be $5 million.',
            options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized (Gain or Loss)'],
            correctAnswer: 'Not recognized (Gain or Loss)',
            explanation: 'Assets under negotiation but not yet acquired are NOT recognized. Only executed transactions are recorded. Until the purchase is completed, nothing is recognized on the financial statements.',
            points: 5,
            topic: 'account-classification'
        },
        {
            id: 'ac-003',
            scenario: '**Research and development costs** incurred this year to design a new electric van model.',
            options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized (Gain or Loss)'],
            correctAnswer: 'Expense',
            explanation: 'Under US GAAP, R&D costs are expensed as incurred (not capitalized as assets), even though they may generate future benefits. They appear as R&D Expense on the Income Statement.',
            points: 5,
            topic: 'account-classification'
        },
        {
            id: 'ac-004',
            scenario: 'The prestigious **CEO** of Strong Co., who has helped the firm generate revenues.',
            options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized (Gain or Loss)'],
            correctAnswer: 'Not recognized (Gain or Loss)',
            explanation: 'Human capital (employees) is NOT recognized as an asset on financial statements, even if highly valuable. CEO salary would be an expense when paid, but the CEO as a person is not recorded.',
            points: 5,
            topic: 'account-classification'
        },
        {
            id: 'ac-005',
            scenario: 'Strong Co. holds legal title to a **gold mine** in a remote location. Historically, the mine yielded over $10 million in gold. Engineering reports indicate no further minerals can be economically extracted.',
            options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized (Gain or Loss)'],
            correctAnswer: 'Not recognized (Gain or Loss)',
            explanation: 'A depleted mine with no future economic benefit is NOT an asset (even if previously valuable). It would be written off, resulting in a Loss. An asset must provide future economic benefit.',
            points: 5,
            topic: 'account-classification'
        },
        {
            id: 'ac-006',
            scenario: '**Interest incurred** during the current year on Strong Co.\'s long-term debt.',
            options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized (Gain or Loss)'],
            correctAnswer: 'Expense',
            explanation: 'Interest incurred is Interest Expense, reported on the Income Statement. It represents the cost of borrowing money during the period.',
            points: 5,
            topic: 'account-classification'
        },
        {
            id: 'ac-007',
            scenario: 'Strong Co. sold an **old delivery truck** that was used in its operations for an amount greater than what the company originally paid for it.',
            options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized (Gain or Loss)'],
            correctAnswer: 'Not recognized (Gain or Loss)',
            explanation: 'Selling equipment for more than book value (cost minus accumulated depreciation) results in a Gain on Sale. This is not operating revenue—it\'s a gain from an incidental transaction.',
            points: 5,
            topic: 'account-classification'
        },
        {
            id: 'ac-008',
            scenario: 'Strong Co received cash in advance from a customer for **vans** to be delivered next year.',
            options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized (Gain or Loss)'],
            correctAnswer: 'Liability',
            explanation: 'Cash received for goods not yet delivered creates Unearned Revenue, a liability. The company owes vans to the customer. Revenue is not recognized until the vans are delivered.',
            points: 5,
            topic: 'account-classification'
        },
        {
            id: 'ac-009',
            scenario: 'Strong Co incurred **costs to repair storm damage** to one of its manufacturing facilities so that production could resume.',
            options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized (Gain or Loss)'],
            correctAnswer: 'Expense',
            explanation: 'Repairs that restore property to operating condition (but don\'t extend useful life or improve it) are expensed as Repair and Maintenance Expense, not capitalized as assets.',
            points: 5,
            topic: 'account-classification'
        },
        {
            id: 'ac-010',
            scenario: 'A lawsuit was filed against Strong Co. this year. Based on legal counsel\'s assessment, it is probable the company will lose the case and **pay damages**, but the exact amount is still uncertain.',
            options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized (Gain or Loss)'],
            correctAnswer: 'Liability',
            explanation: 'A probable loss from a lawsuit should be recognized as a liability (Contingent Liability or Loss Contingency) when probable and reasonably estimable. This creates a liability on the Balance Sheet.',
            points: 5,
            topic: 'account-classification'
        }
    ],

    partIII_TransactionAnalysis: [
        // Format: Assets, Liabilities, Stockholders' Equity, Revenue, Expenses
        // I = Increase, D = Decrease, N = No change
        {
            id: 'ta-001',
            transaction: 'On Jan 1, 2025, Gloria Boba Bar purchases boba ingredients for cash totaling $2,000.',
            correctAnswer: { assets: 'N', liabilities: 'N', equity: 'N', revenue: 'N', expenses: 'N' },
            explanation: 'Purchasing inventory for cash: Cash (asset) decreases $2,000, Inventory (asset) increases $2,000. Total assets unchanged (asset exchange). No effect on liabilities, equity, revenue, or expenses until inventory is sold.',
            points: 6,
            topic: 'transaction-analysis'
        },
        {
            id: 'ta-002',
            transaction: 'On Feb 1, 2025, Gloria Boba Bar purchased boba ingredients on account totaling $3,000.',
            correctAnswer: { assets: 'I', liabilities: 'I', equity: 'N', revenue: 'N', expenses: 'N' },
            explanation: 'Purchasing inventory on account: Inventory (asset) increases $3,000, Accounts Payable (liability) increases $3,000. No effect on equity, revenue, or expenses until sold.',
            points: 6,
            topic: 'transaction-analysis'
        },
        {
            id: 'ta-003',
            transaction: 'On Mar 1, Gloria invested $3,000 cash in exchange for the company\'s common stock.',
            correctAnswer: { assets: 'I', liabilities: 'N', equity: 'I', revenue: 'N', expenses: 'N' },
            explanation: 'Issuing stock for cash: Cash (asset) increases $3,000, Common Stock (equity) increases $3,000. This is a financing transaction, not revenue.',
            points: 6,
            topic: 'transaction-analysis'
        },
        {
            id: 'ta-004',
            transaction: 'During March, Gloria Boba Bar sold $12,000 of Boba for cash.',
            correctAnswer: { assets: 'I', liabilities: 'N', equity: 'I', revenue: 'I', expenses: 'N' },
            explanation: 'Cash sale: Cash (asset) increases $12,000, Revenue increases $12,000, which increases Retained Earnings (equity). Note: COGS would also be recorded but the question focuses on the sale transaction.',
            points: 6,
            topic: 'transaction-analysis'
        },
        {
            id: 'ta-005',
            transaction: 'On Apr 1, 2025, Gloria collects $3,000 cash from a customer that owed a balance due.',
            correctAnswer: { assets: 'N', liabilities: 'N', equity: 'N', revenue: 'N', expenses: 'N' },
            explanation: 'Collecting A/R: Cash (asset) increases $3,000, Accounts Receivable (asset) decreases $3,000. Total assets unchanged. Revenue was already recognized when the receivable was created.',
            points: 6,
            topic: 'transaction-analysis'
        },
        {
            id: 'ta-006',
            transaction: 'On May 1, 2025, Gloria Boba Bar obtained a 3-year bank loan of $20,000. Annual interest is 7% and is due each Apr 30.',
            correctAnswer: { assets: 'I', liabilities: 'I', equity: 'N', revenue: 'N', expenses: 'N' },
            explanation: 'Borrowing cash: Cash (asset) increases $20,000, Notes Payable (liability) increases $20,000. Interest expense is not recorded until time passes.',
            points: 6,
            topic: 'transaction-analysis'
        },
        {
            id: 'ta-007',
            transaction: 'On Jun 2, 2025, Gloria Boba Bar purchased a delivery van for $5,000 using cash from the bank loan.',
            correctAnswer: { assets: 'N', liabilities: 'N', equity: 'N', revenue: 'N', expenses: 'N' },
            explanation: 'Purchasing equipment for cash: Van (asset) increases $5,000, Cash (asset) decreases $5,000. Total assets unchanged (asset exchange). Depreciation expense recorded later.',
            points: 6,
            topic: 'transaction-analysis'
        },
        {
            id: 'ta-008',
            transaction: 'On Sep 1, 2025, Gloria paid $10,000 in advance for an insurance policy for 2026.',
            correctAnswer: { assets: 'N', liabilities: 'N', equity: 'N', revenue: 'N', expenses: 'N' },
            explanation: 'Prepaying for future insurance: Prepaid Insurance (asset) increases $10,000, Cash (asset) decreases $10,000. Total assets unchanged. At year-end 2025, no expense because coverage is for 2026.',
            points: 6,
            topic: 'transaction-analysis'
        },
        {
            id: 'ta-009',
            transaction: 'During November, Gloria Boba Bar sells and delivers Boba costing $2,000 for $4,000 to Ralphs. They expect to collect the cash in Jan 2026.',
            correctAnswer: { assets: 'I', liabilities: 'N', equity: 'I', revenue: 'I', expenses: 'I' },
            explanation: 'Credit sale: A/R (asset) increases $4,000, Inventory (asset) decreases $2,000 (net: assets +$2,000). Revenue increases $4,000, COGS (expense) increases $2,000, net income increases $2,000, increasing Retained Earnings (equity) by $2,000.',
            points: 6,
            topic: 'transaction-analysis'
        },
        {
            id: 'ta-010',
            transaction: 'On Dec 25, 2025, Gloria Boba Bar hired an excellent employee, who will start working in 2026 and will be paid $3,000 per month.',
            correctAnswer: { assets: 'N', liabilities: 'N', equity: 'N', revenue: 'N', expenses: 'N' },
            explanation: 'Future employment contract: No financial statement effect until work is performed in 2026. Executory contracts (future commitments) are generally not recorded until executed.',
            points: 6,
            topic: 'transaction-analysis'
        }
    ]
};

// ===========================
// EXAM GENERATOR FUNCTIONS
// ===========================

function generateFullPracticeExam() {
    return {
        partI: shuffleArray(PracticeMidterm.partI_MultipleChoice).slice(0, 15),
        partII: shuffleArray(PracticeMidterm.partII_AccountClassification).slice(0, 10),
        partIII: shuffleArray(PracticeMidterm.partIII_TransactionAnalysis).slice(0, 10),
        metadata: PracticeMidterm.metadata
    };
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function calculateScore(userAnswers, exam) {
    let score = 0;
    let maxScore = 0;
    const breakdown = { partI: 0, partII: 0, partIII: 0 };

    // Part I
    exam.partI.forEach(q => {
        maxScore += q.points;
        if (userAnswers.partI && userAnswers.partI[q.id] === q.correctAnswer) {
            score += q.points;
            breakdown.partI += q.points;
        }
    });

    // Part II
    exam.partII.forEach(q => {
        maxScore += q.points;
        if (userAnswers.partII && userAnswers.partII[q.id] === q.correctAnswer) {
            score += q.points;
            breakdown.partII += q.points;
        }
    });

    // Part III
    exam.partIII.forEach(q => {
        maxScore += q.points;
        const userAns = userAnswers.partIII && userAnswers.partIII[q.id];
        if (userAns &&
            userAns.assets === q.correctAnswer.assets &&
            userAns.liabilities === q.correctAnswer.liabilities &&
            userAns.equity === q.correctAnswer.equity &&
            userAns.revenue === q.correctAnswer.revenue &&
            userAns.expenses === q.correctAnswer.expenses) {
            score += q.points;
            breakdown.partIII += q.points;
        }
    });

    return {
        score,
        maxScore,
        percentage: Math.round((score / maxScore) * 100),
        breakdown,
        grade: getLetterGrade(score / maxScore)
    };
}

function getLetterGrade(percentage) {
    if (percentage >= 0.93) return 'A';
    if (percentage >= 0.90) return 'A-';
    if (percentage >= 0.87) return 'B+';
    if (percentage >= 0.83) return 'B';
    if (percentage >= 0.80) return 'B-';
    if (percentage >= 0.77) return 'C+';
    if (percentage >= 0.73) return 'C';
    if (percentage >= 0.70) return 'C-';
    if (percentage >= 0.67) return 'D+';
    if (percentage >= 0.63) return 'D';
    if (percentage >= 0.60) return 'D-';
    return 'F';
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PracticeMidterm,
        generateFullPracticeExam,
        calculateScore
    };
}
