// ===========================
// EXAM-ALIGNED ALPHA PHI PROBLEMS
// Midterm 1 Format: Classes 1-7 Only
// Created: February 4, 2026
// Context: Alpha Phi VP Marketing + Jewelry Entrepreneur + HulaPost CEO's Daughter
// ===========================

// ===========================
// PART I: MULTIPLE CHOICE FORMAT (Exam Format)
// 15 questions, 6 points each = 90 points
// ===========================

const examAlignedMultipleChoice = [
    {
        id: 'exam-mc-001',
        topic: 'accrual',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Alpha Phi VP of Marketing, Hanna, signs a contract with a DJ for the Spring Formal on January 15. The DJ performs on February 20, and Alpha Phi pays the $1,500 invoice on March 5. Using accrual accounting, when should Alpha Phi record the DJ expense?',
        options: [
            'January 15 (when contract signed)',
            'February 20 (when service performed)',
            'March 5 (when payment made)',
            'Equally over all three months'
        ],
        answer: 'February 20 (when service performed)',
        explanation: 'Under accrual accounting, expenses are recorded when incurred (when the service is performed or goods are consumed), NOT when cash is paid. The DJ expense should be recorded on February 20 when the service was performed. This follows the matching principle - matching the expense to the period when the related revenue (formal ticket sales) is recognized.',
        points: 6
    },
    {
        id: 'exam-mc-002',
        topic: 'accrual',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Hanna\'s jewelry line, "Nia Designs," receives $4,800 on December 1 from a corporate client for custom pieces to be delivered in January. Under accrual accounting, how should this be recorded in December?',
        options: [
            'Debit Cash $4,800; Credit Revenue $4,800',
            'Debit Cash $4,800; Credit Unearned Revenue $4,800',
            'Debit Accounts Receivable $4,800; Credit Revenue $4,800',
            'No entry needed until jewelry is delivered'
        ],
        answer: 'Debit Cash $4,800; Credit Unearned Revenue $4,800',
        explanation: 'When cash is received before services are performed or goods are delivered, it creates a LIABILITY called Unearned Revenue (or Deferred Revenue). The company has an obligation to deliver the jewelry. Revenue cannot be recognized until earned (when jewelry is delivered in January). The entry records the cash increase and the obligation: Dr. Cash $4,800, Cr. Unearned Revenue $4,800.',
        points: 6
    },
    {
        id: 'exam-mc-003',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'On November 1, Alpha Phi paid $6,000 for a 6-month insurance policy on the chapter house. What adjusting entry is needed on December 31 (year-end)?',
        options: [
            'Dr. Insurance Expense $2,000; Cr. Prepaid Insurance $2,000',
            'Dr. Insurance Expense $4,000; Cr. Prepaid Insurance $4,000',
            'Dr. Insurance Expense $6,000; Cr. Cash $6,000',
            'Dr. Prepaid Insurance $4,000; Cr. Insurance Expense $4,000'
        ],
        answer: 'Dr. Insurance Expense $2,000; Cr. Prepaid Insurance $2,000',
        explanation: 'The $6,000 payment on Nov 1 was initially recorded as Dr. Prepaid Insurance $6,000 (asset). By Dec 31, 2 months have expired (Nov and Dec). Expired insurance = $6,000 ÷ 6 months × 2 months = $2,000. The adjusting entry moves the expired portion from the asset account to expense: Dr. Insurance Expense $2,000, Cr. Prepaid Insurance $2,000. This leaves $4,000 in Prepaid Insurance (for Jan-Apr of next year).',
        points: 6
    },
    {
        id: 'exam-mc-004',
        topic: 'accounts-receivable',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Alpha Phi has $15,000 in Accounts Receivable from member dues. The chapter estimates 3% will be uncollectible. What is the Net Realizable Value of Accounts Receivable?',
        options: [
            '$15,000',
            '$14,550',
            '$15,450',
            '$450'
        ],
        answer: '$14,550',
        explanation: 'Net Realizable Value (NRV) is the amount the company expects to actually collect. NRV = Gross A/R - Allowance for Doubtful Accounts. Allowance = $15,000 × 3% = $450. NRV = $15,000 - $450 = $14,550. This is the amount that should appear on the Balance Sheet under current assets.',
        points: 6
    },
    {
        id: 'exam-mc-005',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Hanna purchases $2,400 of gemstones for her jewelry inventory on account from a supplier. What is the journal entry?',
        options: [
            'Dr. Inventory $2,400; Cr. Cash $2,400',
            'Dr. Inventory $2,400; Cr. Accounts Payable $2,400',
            'Dr. Cost of Goods Sold $2,400; Cr. Accounts Payable $2,400',
            'Dr. Supplies $2,400; Cr. Accounts Payable $2,400'
        ],
        answer: 'Dr. Inventory $2,400; Cr. Accounts Payable $2,400',
        explanation: 'Purchasing inventory "on account" means buying on credit (not paying cash immediately). This increases an asset (Inventory) and increases a liability (Accounts Payable). Entry: Dr. Inventory $2,400 (increase asset), Cr. Accounts Payable $2,400 (increase liability). Note: COGS is not recorded until the inventory is sold.',
        points: 6
    },
    {
        id: 'exam-mc-006',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Which of the following would NOT appear on an Income Statement?',
        options: [
            'Event revenue from Alpha Phi formal',
            'Salary expense for house manager',
            'Utilities expense for chapter house',
            'Accounts Receivable from member dues'
        ],
        answer: 'Accounts Receivable from member dues',
        explanation: 'The Income Statement reports REVENUES and EXPENSES for a period of time. Accounts Receivable is an ASSET and appears on the Balance Sheet (statement of financial position), not the Income Statement. The other three items (event revenue, salary expense, utilities expense) are all income statement accounts that affect net income.',
        points: 6
    },
    {
        id: 'exam-mc-007',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'When Alpha Phi collects $8,000 cash from members for dues that were previously recorded as Accounts Receivable, what is the effect on the accounting equation?',
        options: [
            'Assets increase $8,000',
            'Assets decrease $8,000',
            'No change in total assets',
            'Equity increases $8,000'
        ],
        answer: 'No change in total assets',
        explanation: 'Collecting cash on account affects only asset accounts. Cash increases $8,000 and Accounts Receivable decreases $8,000. The total assets remain unchanged - just a reallocation within assets. Entry: Dr. Cash $8,000, Cr. Accounts Receivable $8,000. No effect on liabilities or equity.',
        points: 6
    },
    {
        id: 'exam-mc-008',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Alpha Phi borrowed $50,000 from USC Credit Union on October 1 at 6% annual interest. What adjusting entry is needed on December 31 (3 months later)?',
        options: [
            'Dr. Interest Expense $3,000; Cr. Cash $3,000',
            'Dr. Interest Expense $750; Cr. Interest Payable $750',
            'Dr. Interest Payable $750; Cr. Interest Expense $750',
            'Dr. Interest Expense $750; Cr. Cash $750'
        ],
        answer: 'Dr. Interest Expense $750; Cr. Interest Payable $750',
        explanation: 'Interest expense accrues over time and must be recorded even if not yet paid. 3 months of interest = $50,000 × 6% × 3/12 = $750. The adjusting entry recognizes the expense and the obligation to pay: Dr. Interest Expense $750 (increases expenses, decreases net income), Cr. Interest Payable $750 (increases liabilities). Cash is not involved in this adjusting entry.',
        points: 6
    },
    {
        id: 'exam-mc-009',
        topic: 'accrual',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Hanna\'s jewelry line ships $3,200 worth of custom necklaces to a client on December 28, with payment terms "Net 30." The client pays on January 15. Under accrual accounting, when should revenue be recognized?',
        options: [
            'December 28 (when shipped)',
            'January 15 (when cash received)',
            'December 31 (end of accounting period)',
            'Split equally between December and January'
        ],
        answer: 'December 28 (when shipped)',
        explanation: 'Under accrual accounting, revenue is recognized when EARNED, not when cash is received. For product sales, revenue is typically earned when goods are delivered/shipped to the customer. The jewelry was shipped Dec 28, so revenue should be recognized in December. Entry on Dec 28: Dr. Accounts Receivable $3,200, Cr. Sales Revenue $3,200. The Jan 15 cash receipt is just collecting the receivable.',
        points: 6
    },
    {
        id: 'exam-mc-010',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'On December 1, Alpha Phi collected $12,000 from members for Spring semester housing (Jan-May). The amount was initially recorded as Unearned Revenue. What adjusting entry is needed on December 31?',
        options: [
            'Dr. Unearned Revenue $12,000; Cr. Revenue $12,000',
            'Dr. Unearned Revenue $2,400; Cr. Revenue $2,400',
            'No adjusting entry needed',
            'Dr. Cash $12,000; Cr. Revenue $12,000'
        ],
        answer: 'No adjusting entry needed',
        explanation: 'The housing is for Spring semester (Jan-May), which means the service period has not yet begun as of Dec 31. The revenue is still UNEARNED on Dec 31 because Alpha Phi has not yet provided the housing. The liability (Unearned Revenue) remains $12,000 on Dec 31. Adjusting entries will be needed each month from Jan-May to recognize the earned portion ($12,000 ÷ 5 months = $2,400/month).',
        points: 6
    },
    {
        id: 'exam-mc-011',
        topic: 'accounts-receivable',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Alpha Phi uses the allowance method for bad debts. On March 15, the chapter determines that a $600 receivable from a former member is uncollectible. What is the journal entry to write off this account?',
        options: [
            'Dr. Bad Debt Expense $600; Cr. Accounts Receivable $600',
            'Dr. Allowance for Doubtful Accounts $600; Cr. Accounts Receivable $600',
            'Dr. Accounts Receivable $600; Cr. Allowance for Doubtful Accounts $600',
            'Dr. Bad Debt Expense $600; Cr. Allowance for Doubtful Accounts $600'
        ],
        answer: 'Dr. Allowance for Doubtful Accounts $600; Cr. Accounts Receivable $600',
        explanation: 'Under the allowance method, Bad Debt Expense was already recognized when the allowance was established (in a prior period adjusting entry). When a specific account is written off, we remove it from A/R and reduce the allowance: Dr. Allowance for Doubtful Accounts $600, Cr. Accounts Receivable $600. This write-off does NOT affect the income statement because the expense was already recorded. Net realizable value stays the same.',
        points: 6
    },
    {
        id: 'exam-mc-012',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Alpha Phi sells event tickets for the Spring Formal for $15,000 cash. The catering and venue costs for the event total $9,000 (paid on account). What is the combined effect of these transactions on Alpha Phi\'s accounting equation?',
        options: [
            'Assets increase $6,000; Liabilities increase $9,000; Equity decrease $3,000',
            'Assets increase $15,000; Liabilities increase $9,000; Equity increase $6,000',
            'Assets increase $6,000; Equity increase $6,000',
            'Assets increase $15,000; Equity increase $15,000'
        ],
        answer: 'Assets increase $15,000; Liabilities increase $9,000; Equity increase $6,000',
        explanation: 'Transaction 1 (ticket sales): Dr. Cash $15,000, Cr. Revenue $15,000. Effect: Assets +$15,000, Equity +$15,000 (revenue increases equity). Transaction 2 (event costs on account): Dr. Expense $9,000, Cr. Accounts Payable $9,000. Effect: Liabilities +$9,000, Equity -$9,000 (expense decreases equity). Combined: Assets +$15,000, Liabilities +$9,000, Equity +$6,000 (net income of $6,000).',
        points: 6
    },
    {
        id: 'exam-mc-013',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Hanna\'s mother, the CEO of HulaPost, explains that HulaPost\'s income statement shows Revenue $5M, Cost of Goods Sold $3M, Operating Expenses $1.2M, and Interest Expense $150K. What is HulaPost\'s Net Income?',
        options: [
            '$2,000,000',
            '$1,800,000',
            '$650,000',
            '$800,000'
        ],
        answer: '$650,000',
        explanation: 'Net Income = Revenue - All Expenses. Revenue $5,000,000 - COGS $3,000,000 = Gross Profit $2,000,000. Gross Profit $2,000,000 - Operating Expenses $1,200,000 = Operating Income $800,000. Operating Income $800,000 - Interest Expense $150,000 = Net Income $650,000. All expenses must be subtracted from revenue to get to net income.',
        points: 6
    },
    {
        id: 'exam-mc-014',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Alpha Phi purchases new sound equipment for chapter events, paying $8,000 cash. How does this transaction affect the accounting equation?',
        options: [
            'Assets increase $8,000',
            'Assets decrease $8,000',
            'No change in total assets',
            'Equity decreases $8,000'
        ],
        answer: 'No change in total assets',
        explanation: 'Purchasing equipment for cash affects only asset accounts. Equipment (asset) increases $8,000, and Cash (asset) decreases $8,000. Total assets remain unchanged. Entry: Dr. Equipment $8,000, Cr. Cash $8,000. This is an exchange of one asset for another. No effect on liabilities or equity. Note: This is NOT an expense - it\'s a capital expenditure creating a long-term asset.',
        points: 6
    },
    {
        id: 'exam-mc-015',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'On September 1, Alpha Phi hired a new house manager at a salary of $4,000/month, paid on the 15th of the following month. What adjusting entry is needed on September 30?',
        options: [
            'Dr. Salary Expense $4,000; Cr. Cash $4,000',
            'Dr. Salary Expense $4,000; Cr. Salaries Payable $4,000',
            'Dr. Salaries Payable $4,000; Cr. Cash $4,000',
            'No entry needed until October 15 when payment is made'
        ],
        answer: 'Dr. Salary Expense $4,000; Cr. Salaries Payable $4,000',
        explanation: 'Under accrual accounting, expenses are recorded when incurred, not when paid. The manager worked all of September, so September\'s expense is $4,000 even though payment hasn\'t been made yet. Adjusting entry on Sept 30: Dr. Salary Expense $4,000 (recognizes expense for Sept), Cr. Salaries Payable $4,000 (recognizes liability/obligation to pay). On Oct 15 when paid: Dr. Salaries Payable $4,000, Cr. Cash $4,000.',
        points: 6
    },
    {
        id: 'exam-mc-016',
        topic: 'accrual',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Hanna\'s jewelry line had the following: Cash collected from customers $45,000, Accounts Receivable increased by $8,000, Unearned Revenue decreased by $3,000. What is the revenue under accrual accounting?',
        options: [
            '$45,000',
            '$53,000',
            '$50,000',
            '$56,000'
        ],
        answer: '$56,000',
        explanation: 'Under accrual accounting, revenue = cash collected + increase in A/R + decrease in Unearned Revenue (because decrease means previously collected cash is now earned). Revenue = $45,000 + $8,000 + $3,000 = $56,000. The $8,000 A/R increase represents sales made on credit (earned but not collected). The $3,000 Unearned Revenue decrease represents cash collected previously that is now earned.',
        points: 6
    },
    {
        id: 'exam-mc-017',
        topic: 'accounts-receivable',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Alpha Phi estimates bad debts at 2% of credit sales. Credit sales for the year were $80,000. The Allowance for Doubtful Accounts currently has a $300 credit balance (before adjustment). What adjusting entry is needed?',
        options: [
            'Dr. Bad Debt Expense $1,600; Cr. Allowance for Doubtful Accounts $1,600',
            'Dr. Bad Debt Expense $1,300; Cr. Allowance for Doubtful Accounts $1,300',
            'Dr. Bad Debt Expense $1,900; Cr. Allowance for Doubtful Accounts $1,900',
            'Dr. Allowance for Doubtful Accounts $1,600; Cr. Bad Debt Expense $1,600'
        ],
        answer: 'Dr. Bad Debt Expense $1,600; Cr. Allowance for Doubtful Accounts $1,600',
        explanation: 'Using the percentage-of-sales method, bad debt expense = 2% × $80,000 = $1,600. This method focuses on the income statement (matching expense to sales). The existing balance in the allowance account does NOT matter - we record the full $1,600 expense. Entry: Dr. Bad Debt Expense $1,600, Cr. Allowance for Doubtful Accounts $1,600. After adjustment, Allowance will have $1,900 credit balance ($300 + $1,600).',
        points: 6
    },
    {
        id: 'exam-mc-018',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Hanna invests $20,000 of her personal savings to start "Nia Designs" jewelry business. What is the journal entry for the business?',
        options: [
            'Dr. Cash $20,000; Cr. Revenue $20,000',
            'Dr. Cash $20,000; Cr. Common Stock $20,000',
            'Dr. Investment $20,000; Cr. Cash $20,000',
            'Dr. Owner\'s Equity $20,000; Cr. Cash $20,000'
        ],
        answer: 'Dr. Cash $20,000; Cr. Common Stock $20,000',
        explanation: 'When an owner invests cash in a corporation, the company receives cash (asset increases) and issues stock (equity increases). Entry: Dr. Cash $20,000, Cr. Common Stock $20,000. This is NOT revenue (revenue comes from selling goods/services to customers, not from owner investments). This transaction increases both assets and equity by $20,000.',
        points: 6
    },
    {
        id: 'exam-mc-019',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Alpha Phi provides tutoring services to members. On December 20, the chapter completed $900 of tutoring but has not yet billed the members or collected payment. What adjusting entry is needed on December 31?',
        options: [
            'Dr. Accounts Receivable $900; Cr. Tutoring Revenue $900',
            'Dr. Cash $900; Cr. Tutoring Revenue $900',
            'Dr. Unearned Revenue $900; Cr. Tutoring Revenue $900',
            'No entry needed until members pay'
        ],
        answer: 'Dr. Accounts Receivable $900; Cr. Tutoring Revenue $900',
        explanation: 'Services have been performed, so revenue has been earned (even though not billed or collected yet). This is an accrued revenue situation. Adjusting entry: Dr. Accounts Receivable $900 (asset increases), Cr. Tutoring Revenue $900 (equity increases through revenue). This follows the revenue recognition principle - recognize revenue when earned. In January, when billed/collected: Dr. Cash, Cr. Accounts Receivable.',
        points: 6
    },
    {
        id: 'exam-mc-020',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Which principle requires that expenses be recorded in the same period as the revenues they help generate?',
        options: [
            'Revenue Recognition Principle',
            'Matching Principle',
            'Cost Principle',
            'Full Disclosure Principle'
        ],
        answer: 'Matching Principle',
        explanation: 'The Matching Principle requires expenses to be recorded in the same accounting period as the related revenues. For example, if Alpha Phi hosts a formal in March, the DJ expense, venue costs, and catering should all be recorded in March (when the ticket revenue is recognized), even if payments are made in different months. This provides a more accurate picture of profitability.',
        points: 6
    }
];

// ===========================
// PART II: ACCOUNT CLASSIFICATION FORMAT (Exam Format)
// 10 questions, 5 points each = 50 points
// Students classify as: Asset, Liability, Revenue, Expense, or Not recognized/Gain or Loss
// ===========================

const examAlignedClassification = [
    {
        id: 'exam-class-001',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'classification',
        question: 'Alpha Phi\'s chapter house (building)',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Asset',
        explanation: 'The chapter house is a long-term asset (Property, Plant & Equipment). It provides future economic benefits, is owned by the organization, and appears on the Balance Sheet under non-current assets. It will be depreciated over its useful life.',
        points: 5
    },
    {
        id: 'exam-class-002',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'classification',
        question: 'Prepaid insurance on jewelry inventory for Nia Designs',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Asset',
        explanation: 'Prepaid Insurance is a current asset. When insurance is paid in advance, it represents a future economic benefit (coverage that will be received). As time passes, the prepaid asset is reduced and Insurance Expense is increased through adjusting entries.',
        points: 5
    },
    {
        id: 'exam-class-003',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'classification',
        question: 'Unearned membership dues collected in December for Spring semester (Jan-May)',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Liability',
        explanation: 'Unearned Revenue (or Deferred Revenue) is a LIABILITY. When Alpha Phi collects dues before the service period, it has an obligation to provide future services (housing, events, etc.). This liability decreases as services are provided and revenue is earned.',
        points: 5
    },
    {
        id: 'exam-class-004',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'classification',
        question: 'Cost of gemstones used to create sold jewelry for Nia Designs',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Expense',
        explanation: 'This is Cost of Goods Sold (COGS), an expense on the Income Statement. When inventory is sold, its cost is moved from the asset account (Inventory) to an expense account (COGS) to match with the sales revenue. This follows the matching principle.',
        points: 5
    },
    {
        id: 'exam-class-005',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'classification',
        question: 'Accounts Payable to suppliers for Alpha Phi event decorations purchased on credit',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Liability',
        explanation: 'Accounts Payable is a current LIABILITY. It represents amounts owed to suppliers for goods/services purchased on credit. This will be paid in the future, creating an obligation. Appears on Balance Sheet under current liabilities.',
        points: 5
    },
    {
        id: 'exam-class-006',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'classification',
        question: 'Interest earned on Alpha Phi\'s savings account at USC Credit Union',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Revenue',
        explanation: 'Interest revenue is a REVENUE account (sometimes called "Other Revenue" or "Non-operating Revenue"). It appears on the Income Statement and increases equity. Even though it\'s not from primary operations, it\'s still classified as revenue, not a gain.',
        points: 5
    },
    {
        id: 'exam-class-007',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'classification',
        question: 'Utilities expense for the Alpha Phi chapter house',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Expense',
        explanation: 'Utilities Expense is an operating EXPENSE on the Income Statement. It represents costs incurred to operate the chapter house during the period. Reduces net income and equity.',
        points: 5
    },
    {
        id: 'exam-class-008',
        topic: 'balance-sheet',
        difficulty: 'hard',
        type: 'classification',
        question: 'HulaPost is currently negotiating to purchase a new delivery fleet but has not yet signed a contract or made payment',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Not recognized / Gain or Loss',
        explanation: 'NOT RECOGNIZED. Under the recognition principle, assets and liabilities are only recorded when there is a completed transaction or a binding obligation. Negotiations and intentions do not create accounting entries. Once HulaPost signs the contract or takes delivery, then recognition occurs.',
        points: 5
    },
    {
        id: 'exam-class-009',
        topic: 'balance-sheet',
        difficulty: 'hard',
        type: 'classification',
        question: 'The value of Alpha Phi\'s reputation and brand recognition at USC',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Not recognized / Gain or Loss',
        explanation: 'NOT RECOGNIZED. Internally generated goodwill, reputation, and brand value are NOT recorded as assets under GAAP. Only purchased goodwill (when acquiring another entity) is recognized. While reputation has value, it doesn\'t meet the recognition criteria (measurable, reliable, verifiable).',
        points: 5
    },
    {
        id: 'exam-class-010',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'classification',
        question: 'Salaries owed to Alpha Phi\'s house manager for work performed but not yet paid',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Liability',
        explanation: 'Salaries Payable (or Wages Payable) is a current LIABILITY. When services have been received but not yet paid, there is an obligation to pay. This is recorded through an adjusting entry: Dr. Salary Expense, Cr. Salaries Payable. The liability appears on the Balance Sheet.',
        points: 5
    },
    {
        id: 'exam-class-011',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'classification',
        question: 'Sales revenue from Nia Designs selling custom jewelry to USC students',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Revenue',
        explanation: 'Sales Revenue (or Service Revenue) is a REVENUE account on the Income Statement. It represents the primary operating income from the jewelry business. Increases equity through net income.',
        points: 5
    },
    {
        id: 'exam-class-012',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'classification',
        question: 'Allowance for Doubtful Accounts for Alpha Phi member receivables',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Asset',
        explanation: 'Allowance for Doubtful Accounts is a CONTRA-ASSET (reduces assets). It appears on the Balance Sheet as a subtraction from Accounts Receivable to show Net Realizable Value. Even though it has a credit balance, it\'s classified under assets because it directly relates to A/R.',
        points: 5
    },
    {
        id: 'exam-class-013',
        topic: 'balance-sheet',
        difficulty: 'hard',
        type: 'classification',
        question: 'Alpha Phi is sued by a vendor for $10,000 for breach of contract. Legal counsel says the lawsuit is frivolous and will likely be dismissed',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Not recognized / Gain or Loss',
        explanation: 'NOT RECOGNIZED (currently). Contingent liabilities are only recorded when (1) the loss is probable AND (2) the amount can be reasonably estimated. If legal counsel says dismissal is likely, the loss is not probable. However, disclosure in footnotes may be required. If circumstances change and loss becomes probable, then recognize as liability.',
        points: 5
    },
    {
        id: 'exam-class-014',
        topic: 'income-statement',
        difficulty: 'hard',
        type: 'classification',
        question: 'Gain from selling old sound equipment for more than its book value',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Not recognized / Gain or Loss',
        explanation: 'This is classified as a GAIN (not revenue). Gains result from peripheral transactions (not primary operations). Appears on Income Statement but in a separate section from operating revenues. If sold for LESS than book value, it would be a Loss. Gains and Losses are distinguished from Revenues and Expenses.',
        points: 5
    },
    {
        id: 'exam-class-015',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'classification',
        question: 'Jewelry inventory (finished necklaces and bracelets) for Nia Designs',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Asset',
        explanation: 'Inventory is a current ASSET on the Balance Sheet. It represents goods held for sale in the ordinary course of business. When sold, inventory moves from asset to COGS expense. Appears under current assets because it will be sold within one year.',
        points: 5
    },
    {
        id: 'exam-class-016',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'classification',
        question: 'Advertising expense for promoting Alpha Phi recruitment events',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Expense',
        explanation: 'Advertising Expense is an operating EXPENSE on the Income Statement. Marketing and promotion costs are generally expensed as incurred (not capitalized as assets) because their future benefits are uncertain. Reduces net income.',
        points: 5
    },
    {
        id: 'exam-class-017',
        topic: 'balance-sheet',
        difficulty: 'hard',
        type: 'classification',
        question: 'Research and development costs for HulaPost developing a new app feature',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Expense',
        explanation: 'Under US GAAP, Research & Development costs are generally EXPENSED as incurred (not capitalized as assets). Even though R&D may provide future benefits, the uncertainty is too high. R&D Expense appears on Income Statement, reducing net income. (Note: IFRS has different rules that allow some development costs to be capitalized.)',
        points: 5
    },
    {
        id: 'exam-class-018',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'classification',
        question: 'Interest Payable on a bank loan Alpha Phi took out for chapter house renovations',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Liability',
        explanation: 'Interest Payable is a current LIABILITY. It represents accrued interest that has been incurred but not yet paid. Created through adjusting entry: Dr. Interest Expense, Cr. Interest Payable. Appears on Balance Sheet under current liabilities.',
        points: 5
    },
    {
        id: 'exam-class-019',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'classification',
        question: 'Depreciation expense on jewelry-making equipment for Nia Designs',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Expense',
        explanation: 'Depreciation Expense is an operating EXPENSE on the Income Statement. It allocates the cost of long-term assets over their useful lives (matching principle). Non-cash expense that reduces net income. The offsetting credit goes to Accumulated Depreciation (contra-asset).',
        points: 5
    },
    {
        id: 'exam-class-020',
        topic: 'balance-sheet',
        difficulty: 'medium',
        type: 'classification',
        question: 'Retained Earnings for HulaPost Corporation',
        options: ['Asset', 'Liability', 'Revenue', 'Expense', 'Not recognized / Gain or Loss'],
        answer: 'Not recognized / Gain or Loss',
        explanation: 'Retained Earnings is EQUITY (stockholders\' equity), not an asset, liability, revenue, or expense. It represents cumulative net income minus cumulative dividends since inception. Appears on Balance Sheet in the equity section. "Not recognized/Gain or Loss" is the closest answer since it doesn\'t fit the other four categories.',
        points: 5
    }
];

// ===========================
// PART III: TRANSACTION ANALYSIS FORMAT (Exam Format)
// 10 questions, 6 points each = 60 points
// For each transaction, circle I (Increase), D (Decrease), or N (No effect) for:
// Assets, Liabilities, Stockholders' Equity, Revenue, Expenses
// ===========================

const examAlignedTransactionAnalysis = [
    {
        id: 'exam-trans-001',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Alpha Phi purchases $3,500 of event supplies (decorations, tablecloths, etc.) for cash.',
        answer: {
            assets: 'N',
            liabilities: 'N',
            equity: 'N',
            revenue: 'N',
            expenses: 'N'
        },
        explanation: 'Entry: Dr. Supplies (asset) $3,500, Cr. Cash (asset) $3,500. This is an exchange of one asset for another. Supplies increase $3,500, Cash decreases $3,500, so total Assets = NO CHANGE. No effect on liabilities, equity, revenue, or expenses. The supplies are not an expense yet - they become expense when used/consumed (through adjusting entry).',
        points: 6
    },
    {
        id: 'exam-trans-002',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Hanna invests $15,000 of personal cash into Nia Designs jewelry business in exchange for common stock.',
        answer: {
            assets: 'I',
            liabilities: 'N',
            equity: 'I',
            revenue: 'N',
            expenses: 'N'
        },
        explanation: 'Entry: Dr. Cash $15,000, Cr. Common Stock $15,000. Assets INCREASE (cash increases). Equity INCREASES (stock issued). No effect on liabilities, revenue, or expenses. This is an owner investment (financing activity), not revenue from operations.',
        points: 6
    },
    {
        id: 'exam-trans-003',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Alpha Phi collects $12,000 cash from members for dues that were previously recorded as Accounts Receivable.',
        answer: {
            assets: 'N',
            liabilities: 'N',
            equity: 'N',
            revenue: 'N',
            expenses: 'N'
        },
        explanation: 'Entry: Dr. Cash $12,000, Cr. Accounts Receivable $12,000. Cash (asset) increases $12,000, A/R (asset) decreases $12,000, so total Assets = NO CHANGE. Revenue was already recorded when the receivable was created, so no revenue now. No effect on any account category - just reallocation within assets.',
        points: 6
    },
    {
        id: 'exam-trans-004',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Nia Designs sells $8,000 of custom jewelry for cash. The cost of the jewelry (gemstones + materials) was $4,800.',
        answer: {
            assets: 'I',
            liabilities: 'N',
            equity: 'I',
            revenue: 'I',
            expenses: 'I'
        },
        explanation: 'TWO entries required: (1) Dr. Cash $8,000, Cr. Sales Revenue $8,000. (2) Dr. Cost of Goods Sold $4,800, Cr. Inventory $4,800. Net effect: Assets increase $3,200 (Cash +$8k, Inventory -$4.8k). Equity increases $3,200 (through net income). Revenue increases $8,000. Expenses increase $4,800. No effect on liabilities.',
        points: 6
    },
    {
        id: 'exam-trans-005',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Alpha Phi borrows $40,000 from USC Credit Union by signing a note payable.',
        answer: {
            assets: 'I',
            liabilities: 'I',
            equity: 'N',
            revenue: 'N',
            expenses: 'N'
        },
        explanation: 'Entry: Dr. Cash $40,000, Cr. Notes Payable $40,000. Assets INCREASE (cash increases). Liabilities INCREASE (note payable increases). No effect on equity - borrowing money is not revenue. No effect on revenue or expenses. This is a financing transaction.',
        points: 6
    },
    {
        id: 'exam-trans-006',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Alpha Phi purchases a new sound system for $9,000 on account (on credit) from a vendor.',
        answer: {
            assets: 'I',
            liabilities: 'I',
            equity: 'N',
            revenue: 'N',
            expenses: 'N'
        },
        explanation: 'Entry: Dr. Equipment $9,000, Cr. Accounts Payable $9,000. Assets INCREASE (equipment increases). Liabilities INCREASE (accounts payable increases). No effect on equity - purchasing equipment is not an expense yet (it will be expensed over time through depreciation). No effect on revenue or expenses.',
        points: 6
    },
    {
        id: 'exam-trans-007',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Alpha Phi records an adjusting entry for $1,200 of supplies that were consumed during the month.',
        answer: {
            assets: 'D',
            liabilities: 'N',
            equity: 'D',
            revenue: 'N',
            expenses: 'I'
        },
        explanation: 'Entry: Dr. Supplies Expense $1,200, Cr. Supplies $1,200. Assets DECREASE (supplies decrease). Expenses INCREASE (supplies expense increases). Equity DECREASES (expenses reduce equity through net income). No effect on liabilities or revenue. This adjusting entry recognizes that supplies have been used up.',
        points: 6
    },
    {
        id: 'exam-trans-008',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Nia Designs pays $2,400 to a supplier for inventory that was purchased last month on account.',
        answer: {
            assets: 'D',
            liabilities: 'D',
            equity: 'N',
            revenue: 'N',
            expenses: 'N'
        },
        explanation: 'Entry: Dr. Accounts Payable $2,400, Cr. Cash $2,400. Assets DECREASE (cash decreases). Liabilities DECREASE (accounts payable decreases). No effect on equity - paying a liability is not an expense (the expense or asset increase was recorded when inventory was purchased). No effect on revenue or expenses.',
        points: 6
    },
    {
        id: 'exam-trans-009',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Alpha Phi records an adjusting entry for $800 of interest expense that has accrued on a bank loan but has not been paid.',
        answer: {
            assets: 'N',
            liabilities: 'I',
            equity: 'D',
            revenue: 'N',
            expenses: 'I'
        },
        explanation: 'Entry: Dr. Interest Expense $800, Cr. Interest Payable $800. Liabilities INCREASE (interest payable increases). Expenses INCREASE (interest expense increases). Equity DECREASES (expenses reduce equity). No effect on assets (no cash paid yet) or revenue. This accrues an expense that has been incurred but not yet paid.',
        points: 6
    },
    {
        id: 'exam-trans-010',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Alpha Phi hosts the Spring Formal and sells 200 tickets for $50 each, all on account (to be billed to members).',
        answer: {
            assets: 'I',
            liabilities: 'N',
            equity: 'I',
            revenue: 'I',
            expenses: 'N'
        },
        explanation: 'Entry: Dr. Accounts Receivable $10,000, Cr. Event Revenue $10,000 (200 × $50 = $10,000). Assets INCREASE (A/R increases). Revenue INCREASES (event revenue increases). Equity INCREASES (revenue increases equity through net income). No effect on liabilities or expenses. Revenue is recognized when earned (event occurs), not when cash collected.',
        points: 6
    },
    {
        id: 'exam-trans-011',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Alpha Phi records an adjusting entry to recognize that $3,000 of previously unearned membership dues have now been earned (services provided).',
        answer: {
            assets: 'N',
            liabilities: 'D',
            equity: 'I',
            revenue: 'I',
            expenses: 'N'
        },
        explanation: 'Entry: Dr. Unearned Revenue $3,000, Cr. Membership Revenue $3,000. Liabilities DECREASE (unearned revenue decreases). Revenue INCREASES (membership revenue increases). Equity INCREASES (revenue increases equity). No effect on assets (cash was collected in a prior period) or expenses.',
        points: 6
    },
    {
        id: 'exam-trans-012',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'HulaPost pays $24,000 cash for a 12-month insurance policy covering February 1 through January 31 of next year.',
        answer: {
            assets: 'N',
            liabilities: 'N',
            equity: 'N',
            revenue: 'N',
            expenses: 'N'
        },
        explanation: 'Entry: Dr. Prepaid Insurance $24,000, Cr. Cash $24,000. Prepaid Insurance (asset) increases $24,000, Cash (asset) decreases $24,000, so total Assets = NO CHANGE. This is an exchange of one asset for another. No effect on liabilities, equity, revenue, or expenses. Expense will be recognized monthly through adjusting entries ($24,000 ÷ 12 = $2,000/month).',
        points: 6
    },
    {
        id: 'exam-trans-013',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Alpha Phi hires a new event coordinator at a salary of $3,500/month, to start work next month. No cash has been paid.',
        answer: {
            assets: 'N',
            liabilities: 'N',
            equity: 'N',
            revenue: 'N',
            expenses: 'N'
        },
        explanation: 'NO ENTRY. Hiring an employee creates an employment agreement but does NOT create an accounting entry. No transaction has occurred yet. Entries will be made when: (1) services are performed (accrue salary expense and payable), and (2) salary is paid (reduce payable and cash). Signing contracts does not create accounting entries.',
        points: 6
    },
    {
        id: 'exam-trans-014',
        topic: 'adjusting-entries',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Nia Designs records depreciation expense of $600 on jewelry-making equipment.',
        answer: {
            assets: 'D',
            liabilities: 'N',
            equity: 'D',
            revenue: 'N',
            expenses: 'I'
        },
        explanation: 'Entry: Dr. Depreciation Expense $600, Cr. Accumulated Depreciation $600. Assets DECREASE (accumulated depreciation is a contra-asset that reduces the book value of equipment). Expenses INCREASE (depreciation expense increases). Equity DECREASES (expenses reduce equity). No effect on liabilities or revenue. This is a non-cash expense.',
        points: 6
    },
    {
        id: 'exam-trans-015',
        topic: 'double-entry',
        difficulty: 'medium',
        type: 'transaction-analysis',
        question: 'Alpha Phi receives $6,000 cash from a corporate sponsor for an event that will be held next month.',
        answer: {
            assets: 'I',
            liabilities: 'I',
            equity: 'N',
            revenue: 'N',
            expenses: 'N'
        },
        explanation: 'Entry: Dr. Cash $6,000, Cr. Unearned Revenue $6,000. Assets INCREASE (cash increases). Liabilities INCREASE (unearned revenue increases because Alpha Phi has an obligation to host the event). No effect on equity, revenue, or expenses. Revenue cannot be recognized until earned (when event occurs next month). This creates a liability, not revenue.',
        points: 6
    }
];

// ===========================
// ADDITIONAL "LIT" SCENARIOS - MORE ENGAGEMENT
// ===========================

const additionalLitProblems = [
    {
        id: 'lit-001',
        topic: 'accrual',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Hanna partners with her mom\'s company, HulaPost, for a marketing collaboration. HulaPost agrees to sponsor Alpha Phi\'s philanthropy event for $8,000. HulaPost pays in November, but the event is in February. When should Alpha Phi recognize the revenue?',
        options: [
            'November (when cash received)',
            'December (end of calendar year)',
            'February (when event occurs)',
            'Recognize $2,000 each month from November to February'
        ],
        answer: 'February (when event occurs)',
        explanation: 'Revenue is recognized when EARNED (when services are performed), not when cash is received. The sponsorship is earned when Alpha Phi hosts the event and provides the agreed-upon visibility/benefits to HulaPost. In November: Dr. Cash $8,000, Cr. Unearned Revenue $8,000 (liability). In February: Dr. Unearned Revenue $8,000, Cr. Sponsorship Revenue $8,000.',
        points: 6
    },
    {
        id: 'lit-002',
        topic: 'income-statement',
        difficulty: 'medium',
        type: 'multiple-choice',
        question: 'Nia Designs had jewelry sales revenue of $65,000, cost of gemstones sold $28,000, marketing expense $8,500, and rent expense $6,000 for the year. Hanna wants to know: What is gross profit?',
        options: [
            '$37,000',
            '$22,500',
            '$28,500',
            '$65,000'
        ],
        answer: '$37,000',
        explanation: 'Gross Profit = Sales Revenue - Cost of Goods Sold = $65,000 - $28,000 = $37,000. Gross profit represents profit after deducting direct costs of producing goods, but BEFORE operating expenses. Operating expenses (marketing and rent) are subtracted from gross profit to get operating income ($37,000 - $8,500 - $6,000 = $22,500).',
        points: 6
    },
    {
        id: 'lit-003',
        topic: 'double-entry',
        difficulty: 'hard',
        type: 'comprehensive',
        question: 'Alpha Phi VP of Marketing Budget Analysis: Hanna has a $15,000 budget for Spring events. She spends $4,000 cash on decorations, commits to paying a DJ $3,500 (on account), and pre-pays $2,400 for venue deposit. How much budget remains AVAILABLE (considering all commitments)?',
        answer: {
            spent_cash: 6400,
            committed: 3500,
            total_committed: 9900,
            remaining_budget: 5100
        },
        explanation: 'CASH SPENT: Decorations $4,000 + Venue deposit $2,400 = $6,400. COMMITTED (but not paid): DJ $3,500. TOTAL COMMITTED: $6,400 + $3,500 = $9,900. REMAINING BUDGET: $15,000 - $9,900 = $5,100. Note: Even though the venue deposit is a prepaid asset (not expense yet), it still uses up budget dollars. The DJ commitment (accounts payable) must also be considered in budget availability.',
        points: 10
    },
    {
        id: 'lit-004',
        topic: 'accounts-receivable',
        difficulty: 'hard',
        type: 'comprehensive',
        question: 'Nia Designs Jewelry A/R Analysis: Total accounts receivable $18,500. Age analysis: Current (0-30 days) $12,000 (1% uncollectible), 31-60 days $4,500 (5% uncollectible), Over 60 days $2,000 (25% uncollectible). Calculate: (a) Total estimated uncollectible, (b) Net Realizable Value, (c) If a $500 account from the "Over 60 days" category pays, what happens to NRV?',
        answer: {
            estimated_uncollectible: 845,
            net_realizable_value: 17655,
            effect_of_collection: 'NRV unchanged - both A/R and cash are assets'
        },
        explanation: '(a) Estimated uncollectible: Current: $12,000 × 1% = $120, 31-60: $4,500 × 5% = $225, Over 60: $2,000 × 25% = $500. Total = $120 + $225 + $500 = $845. (b) NRV = $18,500 - $845 = $17,655. (c) When the $500 is collected: Dr. Cash $500, Cr. A/R $500. Both are assets, so NRV is UNCHANGED. However, because this account was already estimated as uncollectible, the aging analysis would be updated, potentially reducing the allowance needed.',
        points: 15
    },
    {
        id: 'lit-005',
        topic: 'adjusting-entries',
        difficulty: 'hard',
        type: 'comprehensive',
        question: 'Alpha Phi Year-End Adjustments (December 31): (1) Supplies on hand $800, Supplies account balance $3,200, (2) Prepaid insurance balance $6,000 (for Jan-Jun of next year), (3) Unearned dues $9,000, of which $2,000 has been earned, (4) Accrued salaries $2,500, (5) Equipment cost $48,000, accumulated depreciation $18,000, annual depreciation $4,800. Provide all adjusting entries.',
        answer: {
            supplies: {debit: 'Supplies Expense $2,400', credit: 'Supplies $2,400'},
            insurance: {note: 'No adjustment needed - coverage is for future periods'},
            unearned: {debit: 'Unearned Revenue $2,000', credit: 'Dues Revenue $2,000'},
            salaries: {debit: 'Salary Expense $2,500', credit: 'Salaries Payable $2,500'},
            depreciation: {debit: 'Depreciation Expense $4,800', credit: 'Accumulated Depreciation $4,800'}
        },
        explanation: '(1) Supplies used = $3,200 - $800 = $2,400. Entry: Dr. Supplies Expense $2,400, Cr. Supplies $2,400. (2) NO ADJUSTMENT - the $6,000 prepaid insurance is for future periods (Jan-Jun next year), so no adjustment on Dec 31. (3) Entry: Dr. Unearned Revenue $2,000, Cr. Dues Revenue $2,000 (to recognize earned portion). (4) Entry: Dr. Salary Expense $2,500, Cr. Salaries Payable $2,500 (accrue unpaid wages). (5) Entry: Dr. Depreciation Expense $4,800, Cr. Accumulated Depreciation $4,800 (book value after = $48,000 - $22,800 = $25,200).',
        points: 20
    }
];

// ===========================
// CONSOLIDATED EXPORT
// Push all exam-aligned problems to appropriate topic arrays
// ===========================

// Export arrays for integration into main problems.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        examAlignedMultipleChoice,
        examAlignedClassification,
        examAlignedTransactionAnalysis,
        additionalLitProblems
    };
}
