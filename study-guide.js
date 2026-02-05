// ===========================
// ACCT 410x Enhanced Study Guide Content
// Comprehensive Midterm 1 Preparation - EXPANDED VERSION
// ===========================

function getStudyGuideHTML() {
    return `
        <div class="study-guide">
            <div class="study-intro card">
                <h2>📚 Complete Study Guide for Midterm 1</h2>
                <p><strong>Coverage:</strong> Classes 1-7 (Balance Sheet through Accounts Receivable)</p>
                <p><strong>Exam Date:</strong> February 9, 2026</p>
                <p><strong>Exam Format:</strong></p>
                <ul>
                    <li>Part I: Multiple Choice (15 questions × 6 points = 90 points)</li>
                    <li>Part II: Account Classification (10 questions × 5 points = 50 points)</li>
                    <li>Part III: Transaction Analysis (10 questions × 6 points = 60 points)</li>
                    <li><strong>Total: 200 points</strong></li>
                </ul>
            </div>

            <!-- TABLE OF CONTENTS -->
            <div class="study-section card">
                <h3>📋 Table of Contents</h3>
                <ol style="line-height: 2;">
                    <li><a href="#sg-balance-sheet" style="color: var(--primary);">Balance Sheet (Class 2)</a></li>
                    <li><a href="#sg-income-statement" style="color: var(--primary);">Income Statement (Class 3)</a></li>
                    <li><a href="#sg-double-entry" style="color: var(--primary);">Double-Entry Accounting (Class 4)</a></li>
                    <li><a href="#sg-accrual" style="color: var(--primary);">Accrual Accounting (Class 5)</a></li>
                    <li><a href="#sg-adjusting" style="color: var(--primary);">Adjusting Entries & Accounting Cycle (Class 6)</a></li>
                    <li><a href="#sg-receivables" style="color: var(--primary);">Accounts Receivable (Class 7)</a></li>
                    <li><a href="#sg-formulas" style="color: var(--primary);">Key Formulas Summary</a></li>
                    <li><a href="#sg-exam-tips" style="color: var(--primary);">Exam Strategy & Tips</a></li>
                </ol>
            </div>

            <!-- 1. BALANCE SHEET -->
            <div class="study-section card" id="sg-balance-sheet">
                <h3>1. Balance Sheet (Class 2)</h3>
                <p class="key-point"><strong>📍 KEY CONCEPT:</strong> The Balance Sheet is a SNAPSHOT of financial position at a specific point in time.</p>

                <div class="concept-block">
                    <h4>The Accounting Equation</h4>
                    <div class="formula">Assets = Liabilities + Stockholders' Equity</div>
                    <p><strong>Always true:</strong> This equation MUST balance after every transaction.</p>
                    <p><strong>Why it works:</strong> Assets show what you OWN. Liabilities + Equity show how those assets were FINANCED (borrowed money + owners' money).</p>
                </div>

                <div class="concept-block">
                    <h4>Assets</h4>
                    <p><strong>Definition:</strong> Resources controlled by the company that provide FUTURE economic benefits.</p>

                    <p><strong>Key Criteria for Recognition:</strong></p>
                    <ul>
                        <li>Company controls the resource (not necessarily owns it)</li>
                        <li>Results from a past event</li>
                        <li>Probable future economic benefit</li>
                        <li>Measurable with reliability</li>
                    </ul>

                    <p><strong>Current Assets</strong> (converted to cash within 1 year or operating cycle):</p>
                    <ul>
                        <li><strong>Cash & Cash Equivalents</strong> - Most liquid</li>
                        <li><strong>Accounts Receivable</strong> - Amounts owed by customers</li>
                        <li><strong>Inventory</strong> - Goods held for sale</li>
                        <li><strong>Prepaid Expenses</strong> - Paid in advance (insurance, rent)</li>
                        <li><strong>Supplies</strong> - Office supplies, materials</li>
                    </ul>

                    <p><strong>Non-Current Assets</strong> (used over multiple years):</p>
                    <ul>
                        <li><strong>Property, Plant & Equipment (PP&E)</strong> - Buildings, equipment, machinery</li>
                        <li><strong>Land</strong> - NOT depreciated</li>
                        <li><strong>Accumulated Depreciation</strong> - CONTRA asset (reduces PP&E value)</li>
                        <li><strong>Intangible Assets</strong> - Patents, trademarks, goodwill</li>
                    </ul>

                    <div class="exam-tip">
                        <strong>🎯 EXAM TIP:</strong> Assets are listed in order of LIQUIDITY (how quickly converted to cash). Cash first, land last.
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Liabilities</h4>
                    <p><strong>Definition:</strong> Obligations owed to others (creditors) requiring future sacrifices of economic benefits.</p>

                    <p><strong>Key Criteria for Recognition:</strong></p>
                    <ul>
                        <li>Present obligation</li>
                        <li>Results from past event</li>
                        <li>Probable future outflow of resources</li>
                        <li>Measurable with reliability</li>
                    </ul>

                    <p><strong>Current Liabilities</strong> (due within 1 year):</p>
                    <ul>
                        <li><strong>Accounts Payable</strong> - Amounts owed to suppliers</li>
                        <li><strong>Salaries Payable</strong> - Wages owed to employees</li>
                        <li><strong>Unearned Revenue</strong> - Cash received before service performed</li>
                        <li><strong>Interest Payable</strong> - Interest owed but not yet paid</li>
                        <li><strong>Notes Payable (short-term)</strong> - Loans due within 1 year</li>
                        <li><strong>Current Portion of Long-Term Debt</strong> - Due within next year</li>
                    </ul>

                    <p><strong>Non-Current Liabilities</strong> (due after 1 year):</p>
                    <ul>
                        <li><strong>Bonds Payable</strong> - Long-term debt securities</li>
                        <li><strong>Notes Payable (long-term)</strong> - Loans due after 1 year</li>
                        <li><strong>Mortgage Payable</strong> - Property-secured debt</li>
                    </ul>

                    <div class="exam-tip">
                        <strong>🎯 EXAM TIP:</strong> Unearned Revenue is a LIABILITY (not revenue!) because you owe the customer a service/product.
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Stockholders' Equity</h4>
                    <p><strong>Definition:</strong> Owners' RESIDUAL interest in the company = Assets - Liabilities</p>
                    <p><strong>Also called:</strong> Net Assets, Shareholders' Equity, Owners' Equity</p>

                    <p><strong>Components:</strong></p>
                    <ul>
                        <li><strong>Common Stock</strong> - Par value of shares issued to shareholders</li>
                        <li><strong>Additional Paid-In Capital</strong> - Amount paid above par value</li>
                        <li><strong>Retained Earnings</strong> - Cumulative net income - cumulative dividends</li>
                        <li><strong>Treasury Stock</strong> - Company's own stock repurchased (CONTRA equity)</li>
                    </ul>

                    <div class="formula">Retained Earnings = Beginning RE + Net Income - Dividends</div>

                    <p><strong>Key Points:</strong></p>
                    <ul>
                        <li>RE increases with Net Income (revenues > expenses)</li>
                        <li>RE decreases with Net Loss (revenues < expenses)</li>
                        <li>RE decreases when dividends paid to shareholders</li>
                        <li>Dividends are NOT an expense on the Income Statement</li>
                    </ul>
                </div>

                <div class="example">
                    <strong>📝 Example: Alpha Phi Balance Sheet (Simplified)</strong>
                    <div class="journal-entry">
ALPHA PHI - UNIVERSITY OF SOUTHERN CALIFORNIA
Balance Sheet
As of December 31, 2025

ASSETS:
Current Assets:
  Cash                           $ 15,000
  Accounts Receivable              8,000
  Prepaid Insurance                2,000
Total Current Assets                        $ 25,000

Non-Current Assets:
  Furniture & Equipment           $50,000
  Less: Accumulated Depreciation  (10,000)   40,000
                                            ________
Total Assets                                $ 65,000

LIABILITIES & EQUITY:
Current Liabilities:
  Accounts Payable               $ 5,000
  Unearned Membership Dues        3,000
Total Current Liabilities                   $  8,000

Long-Term Liabilities:
  Notes Payable                   20,000
Total Liabilities                             28,000

Stockholders' Equity:
  Common Stock                    10,000
  Retained Earnings               27,000
Total Equity                                  37,000
                                            ________
Total Liabilities & Equity                  $ 65,000
                                            ========
                    </div>
                </div>
            </div>

            <!-- 2. INCOME STATEMENT -->
            <div class="study-section card" id="sg-income-statement">
                <h3>2. Income Statement (Class 3)</h3>
                <p class="key-point"><strong>📍 KEY CONCEPT:</strong> The Income Statement reports financial PERFORMANCE over a PERIOD OF TIME.</p>

                <div class="concept-block">
                    <h4>Purpose & Structure</h4>
                    <p><strong>Reports:</strong> Revenue earned and expenses incurred during a specific period (month, quarter, year)</p>
                    <div class="formula">Net Income = Revenues - Expenses</div>
                    <p><strong>Other names:</strong> Statement of Operations, Profit & Loss Statement (P&L), Statement of Earnings</p>
                </div>

                <div class="concept-block">
                    <h4>Revenue</h4>
                    <p><strong>Definition:</strong> INCREASES in equity from delivering goods or providing services to customers.</p>

                    <p><strong>Recognition Criteria (Revenue Recognition Principle):</strong></p>
                    <ul>
                        <li>Revenue is EARNED (goods delivered or services performed)</li>
                        <li>Amount is measurable with reasonable certainty</li>
                        <li>Collection is reasonably assured</li>
                    </ul>

                    <p><strong>When to Recognize Revenue:</strong></p>
                    <ul>
                        <li>✅ When goods are delivered to customer</li>
                        <li>✅ When services are performed</li>
                        <li>❌ NOT when contract is signed</li>
                        <li>❌ NOT when cash is received (unless that's when service is performed)</li>
                    </ul>

                    <p><strong>Common Revenue Accounts:</strong></p>
                    <ul>
                        <li><strong>Sales Revenue / Service Revenue</strong> - Primary business operations</li>
                        <li><strong>Interest Revenue</strong> - Income from lending money</li>
                        <li><strong>Rent Revenue</strong> - Income from leasing property</li>
                        <li><strong>Dividend Revenue</strong> - Income from owning stock</li>
                    </ul>

                    <div class="exam-tip">
                        <strong>🎯 EXAM TIP:</strong> Revenue ≠ Cash Received! Revenue is recognized when EARNED, regardless of when cash changes hands.
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Expenses</h4>
                    <p><strong>Definition:</strong> DECREASES in equity from consuming resources to generate revenue.</p>

                    <p><strong>Matching Principle:</strong> Expenses are recorded in the SAME PERIOD as the revenues they help generate.</p>

                    <p><strong>Common Expense Accounts:</strong></p>
                    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                        <tr>
                            <th style="padding: 12px; text-align: left; border: 1px solid var(--border); background: var(--primary); color: white;">Expense Type</th>
                            <th style="padding: 12px; text-align: left; border: 1px solid var(--border); background: var(--primary); color: white;">Description</th>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Cost of Goods Sold (COGS)</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Direct cost of inventory sold</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Salaries/Wages Expense</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Employee compensation</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Rent Expense</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Cost of leasing facilities</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Utilities Expense</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Electric, water, gas, phone</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Depreciation Expense</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Allocation of PP&E cost over useful life</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Interest Expense</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Cost of borrowing money</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Insurance Expense</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Cost of insurance coverage used</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Supplies Expense</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Cost of supplies consumed</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Bad Debt Expense</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Estimated uncollectible receivables</td>
                        </tr>
                    </table>

                    <div class="key-point">
                        <strong>⚠️ IMPORTANT:</strong> Expenses ≠ Cash Paid! Expenses are recognized when INCURRED (resources consumed), regardless of when cash is paid.
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Multi-Step Income Statement Format</h4>
                    <div class="journal-entry">
Sales Revenue                                      $XXX,XXX
  Less: Cost of Goods Sold                          (XX,XXX)
                                                    ________
GROSS PROFIT                                         XX,XXX

Operating Expenses:
  Salaries Expense                    $X,XXX
  Rent Expense                         X,XXX
  Utilities Expense                      XXX
  Depreciation Expense                 X,XXX
  Insurance Expense                      XXX
  Total Operating Expenses                          (XX,XXX)
                                                    ________
OPERATING INCOME                                     XX,XXX

Other Revenue and Expenses:
  Interest Revenue                       XXX
  Interest Expense                      (XXX)
  Gain on Sale of Equipment              XXX
                                                    ________
NET INCOME                                          $XX,XXX
                                                    ========
                    </div>

                    <div class="formula">Gross Profit = Sales Revenue - Cost of Goods Sold</div>
                    <div class="formula">Operating Income = Gross Profit - Operating Expenses</div>
                    <div class="formula">Net Income = Operating Income + Other Rev - Other Exp</div>
                </div>

                <div class="example">
                    <strong>📝 Example: Nia Designs Income Statement</strong>
                    <div class="journal-entry">
NIA DESIGNS (Hanna's Jewelry Line)
Income Statement
For the Month Ended January 31, 2026

Sales Revenue                                       $12,000
  Less: Cost of Goods Sold                           (7,200)
                                                    ________
Gross Profit                                          4,800

Operating Expenses:
  Salaries Expense                    $1,500
  Rent Expense                           800
  Marketing Expense                      600
  Supplies Expense                       200
  Total Operating Expenses                           (3,100)
                                                    ________
Operating Income                                      1,700

Other Revenue:
  Interest Revenue                        50
                                                    ________
Net Income                                          $ 1,750
                                                    ========
                    </div>
                </div>

                <div class="key-point">
                    <strong>🎯 CRITICAL DISTINCTION:</strong>
                    <ul>
                        <li><strong>Balance Sheet:</strong> Assets, Liabilities, Equity (POINT IN TIME)</li>
                        <li><strong>Income Statement:</strong> Revenues, Expenses, Net Income (PERIOD OF TIME)</li>
                    </ul>
                </div>
            </div>

            <!-- 3. DOUBLE-ENTRY ACCOUNTING -->
            <div class="study-section card" id="sg-double-entry">
                <h3>3. Double-Entry Accounting (Class 4)</h3>
                <p class="key-point"><strong>📍 KEY CONCEPT:</strong> Every transaction affects AT LEAST TWO accounts. Debits MUST equal Credits.</p>

                <div class="concept-block">
                    <h4>Fundamental Principles</h4>
                    <ul>
                        <li><strong>Every transaction has TWO sides</strong> (minimum)</li>
                        <li><strong>Total debits ALWAYS equal total credits</strong></li>
                        <li><strong>Accounting equation ALWAYS balances</strong></li>
                    </ul>
                </div>

                <div class="concept-block">
                    <h4>Debit & Credit Rules</h4>
                    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                        <tr>
                            <th style="padding: 12px; text-align: left; border: 1px solid var(--border); background: var(--primary); color: white;">Account Type</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid var(--border); background: var(--primary); color: white;">Increase</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid var(--border); background: var(--primary); color: white;">Decrease</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid var(--border); background: var(--primary); color: white;">Normal Balance</th>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>ASSETS</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border); background: #D1FAE5;">DEBIT (+)</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border); background: #FEE2E2;">Credit (-)</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);"><strong>DEBIT</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>LIABILITIES</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border); background: #D1FAE5;">CREDIT (+)</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border); background: #FEE2E2;">Debit (-)</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);"><strong>CREDIT</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>EQUITY</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border); background: #D1FAE5;">CREDIT (+)</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border); background: #FEE2E2;">Debit (-)</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);"><strong>CREDIT</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>REVENUE</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border); background: #D1FAE5;">CREDIT (+)</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border); background: #FEE2E2;">Debit (-)</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);"><strong>CREDIT</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>EXPENSES</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border); background: #D1FAE5;">DEBIT (+)</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border); background: #FEE2E2;">Credit (-)</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);"><strong>DEBIT</strong></td>
                        </tr>
                    </table>

                    <div class="exam-tip">
                        <strong>🎯 MEMORY TRICK:</strong> "Assets & Expenses go up with DEbits. Liabilities, Equity & Revenue go up with CREdits."
                    </div>
                </div>

                <div class="concept-block">
                    <h4>T-Accounts</h4>
                    <p><strong>Visual representation of accounts showing debits (left) and credits (right):</strong></p>
                    <div class="journal-entry">
        ASSET ACCOUNT              LIABILITY ACCOUNT         REVENUE ACCOUNT
     ___________________        ___________________        ___________________
     Debit  |  Credit           Debit  |  Credit           Debit  |  Credit
     (+)    |  (-)               (-)    |  (+)               (-)    |  (+)
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Complete Transaction Examples with Journal Entries</h4>

                    <div class="example">
                        <strong>Transaction 1: Owner invests $50,000 cash</strong>
                        <div class="journal-entry">
Dr. Cash                              $50,000
    Cr. Common Stock                           $50,000
(To record issuance of stock for cash)

Impact on Equation:
Assets (+$50,000) = Liabilities (no change) + Equity (+$50,000) ✓
                        </div>
                    </div>

                    <div class="example">
                        <strong>Transaction 2: Borrow $20,000 from bank</strong>
                        <div class="journal-entry">
Dr. Cash                              $20,000
    Cr. Notes Payable                          $20,000
(To record bank loan)

Impact on Equation:
Assets (+$20,000) = Liabilities (+$20,000) + Equity (no change) ✓
                        </div>
                    </div>

                    <div class="example">
                        <strong>Transaction 3: Purchase equipment for $15,000 cash</strong>
                        <div class="journal-entry">
Dr. Equipment                         $15,000
    Cr. Cash                                   $15,000
(To record equipment purchase)

Impact on Equation:
Assets (+$15,000 - $15,000 = 0) = Liabilities (0) + Equity (0) ✓
(Asset increased, asset decreased - no net change to total)
                        </div>
                    </div>

                    <div class="example">
                        <strong>Transaction 4: Provide services on account for $8,000</strong>
                        <div class="journal-entry">
Dr. Accounts Receivable               $8,000
    Cr. Service Revenue                        $8,000
(To record revenue earned on credit)

Impact on Equation:
Assets (+$8,000) = Liabilities (0) + Equity (+$8,000 via NI) ✓
                        </div>
                    </div>

                    <div class="example">
                        <strong>Transaction 5: Pay employee salaries $3,000 cash</strong>
                        <div class="journal-entry">
Dr. Salaries Expense                  $3,000
    Cr. Cash                                   $3,000
(To record salaries paid)

Impact on Equation:
Assets (-$3,000) = Liabilities (0) + Equity (-$3,000 via NI) ✓
                        </div>
                    </div>

                    <div class="example">
                        <strong>Transaction 6: Collect $5,000 cash from customers</strong>
                        <div class="journal-entry">
Dr. Cash                              $5,000
    Cr. Accounts Receivable                    $5,000
(To record collection of receivables)

Impact on Equation:
Assets (+$5,000 - $5,000 = 0) = Liabilities (0) + Equity (0) ✓
(Asset increased, asset decreased - no revenue recognized!)
                        </div>
                    </div>

                    <div class="example">
                        <strong>Transaction 7: Purchase supplies on account for $1,200</strong>
                        <div class="journal-entry">
Dr. Supplies                          $1,200
    Cr. Accounts Payable                       $1,200
(To record supplies purchased on credit)

Impact on Equation:
Assets (+$1,200) = Liabilities (+$1,200) + Equity (0) ✓
                        </div>
                    </div>

                    <div class="example">
                        <strong>Transaction 8: Sell inventory costing $4,000 for $7,000 cash</strong>
                        <div class="journal-entry">
Dr. Cash                              $7,000
    Cr. Sales Revenue                          $7,000
(To record sale)

Dr. Cost of Goods Sold                $4,000
    Cr. Inventory                              $4,000
(To record cost of inventory sold)

Impact on Equation:
Assets (+$7,000 - $4,000 = +$3,000) = Liabilities (0) + Equity (+$3,000 via NI) ✓
Net Income impact: $7,000 revenue - $4,000 expense = $3,000 ✓
                        </div>
                    </div>
                </div>

                <div class="key-point">
                    <strong>🎯 EXAM STRATEGY:</strong> For transaction analysis questions:
                    <ol>
                        <li>Identify which accounts are affected</li>
                        <li>Determine if each account increases or decreases</li>
                        <li>Apply debit/credit rules</li>
                        <li>Verify: Debits = Credits</li>
                        <li>Verify: Accounting equation still balances</li>
                    </ol>
                </div>
            </div>

            <!-- 4. ACCRUAL ACCOUNTING -->
            <div class="study-section card" id="sg-accrual">
                <h3>4. Accrual Accounting (Class 5)</h3>
                <p class="key-point"><strong>📍 KEY CONCEPT:</strong> Record revenues when EARNED and expenses when INCURRED - regardless of cash timing.</p>

                <div class="concept-block">
                    <h4>Accrual vs. Cash Basis</h4>
                    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                        <tr>
                            <th style="padding: 12px; text-align: left; border: 1px solid var(--border); background: var(--primary); color: white;"></th>
                            <th style="padding: 12px; text-align: center; border: 1px solid var(--border); background: var(--primary); color: white;">Accrual Basis (GAAP)</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid var(--border); background: var(--primary); color: white;">Cash Basis</th>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Revenue recognized when:</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border); background: #D1FAE5;">When EARNED<br>(goods delivered / services performed)</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">When CASH RECEIVED</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Expenses recognized when:</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border); background: #D1FAE5;">When INCURRED<br>(resources consumed / benefits received)</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">When CASH PAID</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Required by:</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border); background: #D1FAE5;">GAAP (all public companies)</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Small businesses, individuals, tax reporting</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Matches revenues & expenses:</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border); background: #D1FAE5;">✅ YES (Matching Principle)</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">❌ NO</td>
                        </tr>
                    </table>
                </div>

                <div class="concept-block">
                    <h4>Revenue Recognition Principle</h4>
                    <p><strong>Recognize revenue when it is EARNED:</strong></p>
                    <ul>
                        <li>Performance obligation has been satisfied</li>
                        <li>Goods have been delivered OR</li>
                        <li>Services have been performed</li>
                        <li>Amount is measurable</li>
                        <li>Collection is reasonably assured</li>
                    </ul>

                    <div class="example">
                        <strong>📝 Alpha Phi Event Example</strong>
                        <p><strong>Timeline:</strong></p>
                        <ul>
                            <li>Jan 15: Sign DJ contract for Spring Formal ($1,500)</li>
                            <li>Feb 20: DJ performs at Spring Formal</li>
                            <li>Mar 5: Alpha Phi pays DJ $1,500</li>
                        </ul>
                        <p><strong>Under Accrual Accounting:</strong></p>
                        <div class="journal-entry">
Feb 20 (when service performed):
Dr. DJ Expense                        $1,500
    Cr. Accounts Payable                       $1,500

Mar 5 (when paid):
Dr. Accounts Payable                  $1,500
    Cr. Cash                                   $1,500

Revenue recognized: Feb 20 ✓
Expense recognized: Feb 20 ✓
Cash paid: Mar 5 ✓
                        </div>
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Matching Principle</h4>
                    <p><strong>Definition:</strong> Match expenses with the revenues they help generate in the SAME PERIOD.</p>

                    <p><strong>Purpose:</strong> Accurately measure profitability each period</p>

                    <p><strong>Examples:</strong></p>
                    <ul>
                        <li><strong>Cost of Goods Sold</strong> - Recorded when inventory is sold (matches with Sales Revenue)</li>
                        <li><strong>Depreciation Expense</strong> - Spread equipment cost over years it generates revenue</li>
                        <li><strong>Sales Commission</strong> - Recorded when sale occurs (not when commission is paid)</li>
                    </ul>

                    <div class="example">
                        <strong>📝 Nia Designs Matching Example</strong>
                        <p>Nia Designs sells a $2,000 necklace made with $1,200 of gemstones.</p>
                        <div class="journal-entry">
When sold:
Dr. Cash (or A/R)                     $2,000
    Cr. Sales Revenue                          $2,000

Dr. Cost of Goods Sold                $1,200
    Cr. Inventory                              $1,200

Both entries recorded simultaneously!
Revenue $2,000 MATCHED with Expense $1,200 ✓
Gross Profit = $800
                        </div>
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Four Types of Accrual Scenarios</h4>

                    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                        <tr>
                            <th style="padding: 12px; border: 1px solid var(--border); background: var(--primary); color: white;">Scenario</th>
                            <th style="padding: 12px; border: 1px solid var(--border); background: var(--primary); color: white;">Timing</th>
                            <th style="padding: 12px; border: 1px solid var(--border); background: var(--primary); color: white;">Account Created</th>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>1. Accrued Revenue</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Revenue earned BEFORE cash received</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Accounts Receivable (Asset)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>2. Deferred Revenue</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Cash received BEFORE revenue earned</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Unearned Revenue (Liability)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>3. Accrued Expense</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Expense incurred BEFORE cash paid</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Accounts Payable or ____ Payable (Liability)</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>4. Prepaid Expense</strong></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Cash paid BEFORE expense incurred</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">Prepaid ____ (Asset)</td>
                        </tr>
                    </table>

                    <div class="exam-tip">
                        <strong>🎯 EXAM STRATEGY:</strong> For accrual questions, ask yourself:
                        <ol>
                            <li>Has the service been performed / goods delivered? → Revenue</li>
                            <li>Have resources been consumed / benefits received? → Expense</li>
                            <li>Don't worry about when cash changes hands!</li>
                        </ol>
                    </div>
                </div>

                <div class="example">
                    <strong>📝 Comprehensive Accrual Example: HulaPost Contract</strong>
                    <p><strong>Scenario:</strong> Hanna's mother's company, HulaPost, sponsors Nia Designs.</p>
                    <p><strong>Timeline:</strong></p>
                    <ul>
                        <li>Dec 1, 2025: HulaPost pays Nia Designs $12,000 for 6 months of social media promotion (Dec 2025 - May 2026)</li>
                        <li>Dec 31, 2025: End of accounting period</li>
                    </ul>

                    <p><strong>Nia Designs Entries:</strong></p>
                    <div class="journal-entry">
Dec 1, 2025 (cash received):
Dr. Cash                              $12,000
    Cr. Unearned Revenue                       $12,000
(Liability - owe 6 months of promotion)

Dec 31, 2025 (end of month adjusting entry):
Dr. Unearned Revenue                  $2,000
    Cr. Service Revenue                        $2,000
(Recognize 1 month: $12,000 ÷ 6 = $2,000)

Result on Dec 31, 2025 Balance Sheet:
  Unearned Revenue = $10,000 (liability)
Result on Dec 31, 2025 Income Statement:
  Service Revenue = $2,000 (earned in Dec)
                    </div>
                </div>
            </div>

            <!-- 5. ADJUSTING ENTRIES -->
            <div class="study-section card" id="sg-adjusting">
                <h3>5. Adjusting Entries & Accounting Cycle (Class 6)</h3>
                <p class="key-point"><strong>📍 KEY CONCEPT:</strong> Adjusting entries ensure revenues and expenses are recorded in the CORRECT PERIOD (accrual basis).</p>

                <div class="concept-block">
                    <h4>The Accounting Cycle</h4>
                    <ol style="line-height: 2;">
                        <li><strong>Analyze transactions</strong> - Identify accounts affected</li>
                        <li><strong>Journalize</strong> - Record in general journal</li>
                        <li><strong>Post to ledger</strong> - Transfer to T-accounts</li>
                        <li><strong>Prepare unadjusted trial balance</strong> - List all account balances</li>
                        <li><strong>Journalize adjusting entries</strong> - Apply accrual accounting ✨</li>
                        <li><strong>Post adjusting entries</strong></li>
                        <li><strong>Prepare adjusted trial balance</strong> - Verify debits = credits</li>
                        <li><strong>Prepare financial statements</strong> - Income Statement, Balance Sheet</li>
                        <li><strong>Journalize closing entries</strong> - Close temporary accounts</li>
                        <li><strong>Post closing entries</strong></li>
                        <li><strong>Prepare post-closing trial balance</strong> - Ready for next period</li>
                    </ol>

                    <div class="exam-tip">
                        <strong>🎯 EXAM TIP:</strong> Adjusting entries are made at the END of the accounting period BEFORE preparing financial statements.
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Types of Adjusting Entries (5 Main Types)</h4>

                    <div class="example">
                        <strong>Type 1: Accrued Revenues (Unbilled Revenue)</strong>
                        <p><strong>When:</strong> Revenue earned but not yet recorded or billed</p>
                        <p><strong>Example:</strong> Interest earned on investment but not yet received</p>
                        <div class="journal-entry">
Adjusting Entry:
Dr. Accounts Receivable (or Accrued Revenue)    $XXX
    Cr. Revenue                                        $XXX

Real Example:
Nia Designs provided $3,000 of custom jewelry design services
in December but won't bill the client until January.

Dec 31 Adjusting Entry:
Dr. Accounts Receivable               $3,000
    Cr. Service Revenue                        $3,000
                        </div>
                    </div>

                    <div class="example">
                        <strong>Type 2: Accrued Expenses (Incurred but Unpaid)</strong>
                        <p><strong>When:</strong> Expense incurred but not yet recorded or paid</p>
                        <p><strong>Examples:</strong> Salaries earned by employees but not paid, interest owed on loan</p>
                        <div class="journal-entry">
Adjusting Entry:
Dr. Expense                            $XXX
    Cr. Liability Payable                      $XXX

Real Example:
Alpha Phi employees worked last 3 days of December earning $900,
but payday isn't until January 5.

Dec 31 Adjusting Entry:
Dr. Salaries Expense                   $900
    Cr. Salaries Payable                       $900
                        </div>
                    </div>

                    <div class="example">
                        <strong>Type 3: Deferred Revenues (Unearned Revenue Recognition)</strong>
                        <p><strong>When:</strong> Cash received in advance, now earned</p>
                        <p><strong>Example:</strong> Gift cards redeemed, subscriptions provided</p>
                        <div class="journal-entry">
Adjusting Entry:
Dr. Unearned Revenue (Liability)       $XXX
    Cr. Revenue                                $XXX

Real Example:
Alpha Phi collected $6,000 in December for Spring semester
membership dues (Jan-May). By January 31, 1 month has passed.

Jan 31 Adjusting Entry:
Dr. Unearned Revenue                   $1,200
    Cr. Membership Revenue                     $1,200
($6,000 ÷ 5 months = $1,200 per month earned)
                        </div>
                    </div>

                    <div class="example">
                        <strong>Type 4: Prepaid Expenses (Using Up Prepayments)</strong>
                        <p><strong>When:</strong> Paid in advance, now consumed</p>
                        <p><strong>Examples:</strong> Insurance, rent, supplies used</p>
                        <div class="journal-entry">
Adjusting Entry:
Dr. Expense                            $XXX
    Cr. Prepaid Asset                          $XXX

Real Example:
On October 1, Nia Designs paid $2,400 for a 12-month
insurance policy. By December 31, 3 months have passed.

Dec 31 Adjusting Entry:
Dr. Insurance Expense                  $600
    Cr. Prepaid Insurance                      $600
($2,400 ÷ 12 months × 3 months = $600 used)
                        </div>
                    </div>

                    <div class="example">
                        <strong>Type 5: Depreciation (Allocating Asset Cost)</strong>
                        <p><strong>When:</strong> Using long-lived assets over time</p>
                        <p><strong>Formula:</strong> (Cost - Salvage Value) ÷ Useful Life</p>
                        <div class="journal-entry">
Adjusting Entry:
Dr. Depreciation Expense               $XXX
    Cr. Accumulated Depreciation               $XXX

Real Example:
Nia Designs bought equipment for $24,000 with $0 salvage value
and 5-year useful life. Annual depreciation = $24,000 ÷ 5 = $4,800.
Monthly depreciation = $4,800 ÷ 12 = $400.

Each Month-End Adjusting Entry:
Dr. Depreciation Expense               $400
    Cr. Accumulated Depreciation               $400

After 1 year:
  Equipment (on Balance Sheet)         $24,000
  Accumulated Depreciation             (4,800)
  Net Book Value                       $19,200
                        </div>
                    </div>
                </div>

                <div class="key-point">
                    <strong>🎯 CRITICAL POINTS ABOUT ADJUSTING ENTRIES:</strong>
                    <ul>
                        <li>Always involve ONE Balance Sheet account and ONE Income Statement account</li>
                        <li>NEVER involve Cash (cash transactions are recorded when they happen)</li>
                        <li>Made at END of accounting period</li>
                        <li>Ensure accrual basis accounting</li>
                        <li>Required BEFORE preparing financial statements</li>
                    </ul>
                </div>

                <div class="exam-tip">
                    <strong>🎯 EXAM STRATEGY for Adjusting Entries:</strong>
                    <ol>
                        <li>Identify which type of adjusting entry (accrued revenue, accrued expense, deferred revenue, prepaid expense, or depreciation)</li>
                        <li>Determine what has been earned/incurred during the period</li>
                        <li>Calculate the amount</li>
                        <li>Record the entry (one B/S account, one I/S account)</li>
                    </ol>
                </div>
            </div>

            <!-- 6. ACCOUNTS RECEIVABLE -->
            <div class="study-section card" id="sg-receivables">
                <h3>6. Accounts Receivable (Class 7)</h3>
                <p class="key-point"><strong>📍 KEY CONCEPT:</strong> A/R represents amounts OWED by customers. Companies must estimate uncollectible amounts.</p>

                <div class="concept-block">
                    <h4>Accounts Receivable Basics</h4>
                    <p><strong>Definition:</strong> Amounts owed by customers for goods sold or services rendered on credit</p>
                    <p><strong>Classification:</strong> Current Asset (expect collection within 1 year)</p>

                    <p><strong>Journal Entry When Sale Made on Credit:</strong></p>
                    <div class="journal-entry">
Dr. Accounts Receivable                $X,XXX
    Cr. Sales Revenue                           $X,XXX
                    </div>

                    <p><strong>Journal Entry When Cash Collected:</strong></p>
                    <div class="journal-entry">
Dr. Cash                               $X,XXX
    Cr. Accounts Receivable                     $X,XXX
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Net Realizable Value (NRV)</h4>
                    <p><strong>Definition:</strong> The amount of A/R the company EXPECTS TO COLLECT (after subtracting estimated uncollectibles)</p>

                    <div class="formula">Net Realizable Value = Accounts Receivable - Allowance for Doubtful Accounts</div>

                    <p><strong>Why Important:</strong> Not all customers will pay! Companies must estimate bad debts.</p>
                </div>

                <div class="concept-block">
                    <h4>Allowance Method (Required by GAAP)</h4>
                    <p><strong>Two-Step Process:</strong></p>

                    <p><strong>Step 1: Estimate Bad Debts (End of Period)</strong></p>
                    <div class="journal-entry">
Dr. Bad Debt Expense                   $XXX
    Cr. Allowance for Doubtful Accounts        $XXX
                    </div>

                    <p><strong>Step 2: Write Off Specific Uncollectible Account (When Determined Uncollectible)</strong></p>
                    <div class="journal-entry">
Dr. Allowance for Doubtful Accounts    $XXX
    Cr. Accounts Receivable                    $XXX
                    </div>

                    <div class="key-point">
                        <strong>⚠️ IMPORTANT:</strong> Allowance for Doubtful Accounts is a CONTRA ASSET (reduces A/R on Balance Sheet)
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Two Methods to Estimate Bad Debts</h4>

                    <p><strong>Method 1: Percentage of Sales Method</strong></p>
                    <p>Estimates bad debt as a % of credit sales for the period</p>
                    <div class="formula">Bad Debt Expense = Credit Sales × Estimated %</div>

                    <div class="example">
                        <strong>Example:</strong> Nia Designs had $100,000 in credit sales. Historically, 2% are uncollectible.
                        <div class="journal-entry">
Bad Debt Expense = $100,000 × 2% = $2,000

Adjusting Entry:
Dr. Bad Debt Expense                   $2,000
    Cr. Allowance for Doubtful Accounts        $2,000
                        </div>
                    </div>

                    <p><strong>Method 2: Aging of Accounts Receivable</strong></p>
                    <p>Estimates bad debt based on how long receivables have been outstanding</p>

                    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                        <tr>
                            <th style="padding: 12px; border: 1px solid var(--border); background: var(--primary); color: white;">Age Category</th>
                            <th style="padding: 12px; border: 1px solid var(--border); background: var(--primary); color: white;">Amount</th>
                            <th style="padding: 12px; border: 1px solid var(--border); background: var(--primary); color: white;">Estimated % Uncollectible</th>
                            <th style="padding: 12px; border: 1px solid var(--border); background: var(--primary); color: white;">Estimated Uncollectible</th>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);">Not yet due</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">$50,000</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">1%</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">$500</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);">1-30 days past due</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">$20,000</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">5%</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">$1,000</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);">31-60 days past due</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">$8,000</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">10%</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">$800</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);">Over 60 days past due</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">$4,000</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">25%</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">$1,000</td>
                        </tr>
                        <tr style="background: var(--bg-secondary); font-weight: bold;">
                            <td style="padding: 12px; border: 1px solid var(--border);">Total</td>
                            <td style="padding: 12px; border: 1px solid var(--border);">$82,000</td>
                            <td style="padding: 12px; border: 1px solid var(--border);"></td>
                            <td style="padding: 12px; border: 1px solid var(--border);">$3,300</td>
                        </tr>
                    </table>

                    <p><strong>Required Allowance Balance:</strong> $3,300</p>
                    <p>If current allowance balance is $500, need to adjust by $2,800:</p>
                    <div class="journal-entry">
Dr. Bad Debt Expense                   $2,800
    Cr. Allowance for Doubtful Accounts        $2,800
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Balance Sheet Presentation</h4>
                    <div class="journal-entry">
ASSETS:
Current Assets:
  Accounts Receivable                 $82,000
  Less: Allowance for Doubtful Accts  (3,300)
  Net Realizable Value                $78,700
                    </div>

                    <p><strong>NRV = $78,700</strong> (this is what we expect to collect)</p>
                </div>

                <div class="concept-block">
                    <h4>Net Revenue Calculation</h4>
                    <p><strong>When companies offer discounts or have returns:</strong></p>
                    <div class="formula">Net Revenue = Gross Sales - Sales Returns - Sales Allowances - Sales Discounts</div>

                    <div class="example">
                        <strong>Example:</strong>
                        <div class="journal-entry">
Gross Sales                            $100,000
Less: Sales Returns                      (2,000)
Less: Sales Discounts                    (1,500)
Net Sales                              $ 96,500
                        </div>
                    </div>
                </div>

                <div class="exam-tip">
                    <strong>🎯 EXAM STRATEGY for A/R Questions:</strong>
                    <ul>
                        <li><strong>When estimating bad debts:</strong> Record Bad Debt Expense</li>
                        <li><strong>When writing off a specific account:</strong> NO expense! Just reduce Allowance and A/R</li>
                        <li><strong>To find NRV:</strong> Gross A/R - Allowance = NRV</li>
                        <li><strong>Allowance is a CONTRA asset:</strong> Has a credit balance, reduces assets</li>
                    </ul>
                </div>
            </div>

            <!-- 7. KEY FORMULAS -->
            <div class="study-section card" id="sg-formulas">
                <h3>7. Key Formulas Summary</h3>

                <div class="concept-block">
                    <h4>Balance Sheet Formulas</h4>
                    <div class="formula">Assets = Liabilities + Stockholders' Equity</div>
                    <div class="formula">Stockholders' Equity = Assets - Liabilities</div>
                    <div class="formula">Retained Earnings = Beginning RE + Net Income - Dividends</div>
                    <div class="formula">Current Ratio = Current Assets ÷ Current Liabilities</div>
                    <div class="formula">Working Capital = Current Assets - Current Liabilities</div>
                </div>

                <div class="concept-block">
                    <h4>Income Statement Formulas</h4>
                    <div class="formula">Net Income = Revenues - Expenses</div>
                    <div class="formula">Gross Profit = Sales Revenue - Cost of Goods Sold</div>
                    <div class="formula">Operating Income = Gross Profit - Operating Expenses</div>
                    <div class="formula">Gross Profit Margin = (Gross Profit ÷ Sales Revenue) × 100%</div>
                    <div class="formula">Net Profit Margin = (Net Income ÷ Sales Revenue) × 100%</div>
                </div>

                <div class="concept-block">
                    <h4>Accounts Receivable Formulas</h4>
                    <div class="formula">Net Realizable Value = Accounts Receivable - Allowance for Doubtful Accounts</div>
                    <div class="formula">Bad Debt Expense (% of Sales) = Credit Sales × Estimated %</div>
                    <div class="formula">Net Sales = Gross Sales - Returns - Allowances - Discounts</div>
                </div>

                <div class="concept-block">
                    <h4>Depreciation Formula</h4>
                    <div class="formula">Annual Depreciation (Straight-Line) = (Cost - Salvage Value) ÷ Useful Life</div>
                    <div class="formula">Book Value = Cost - Accumulated Depreciation</div>
                </div>
            </div>

            <!-- 8. EXAM TIPS -->
            <div class="study-section card" id="sg-exam-tips">
                <h3>8. Exam Strategy & Tips</h3>

                <div class="exam-tip">
                    <strong>📋 Part I: Multiple Choice Strategy (90 points)</strong>
                    <ul>
                        <li><strong>Read carefully:</strong> Watch for keywords like "accrual basis," "cash basis," "when recognized"</li>
                        <li><strong>Eliminate wrong answers:</strong> Rule out obviously incorrect choices first</li>
                        <li><strong>Watch for tricky scenarios:</strong> Gift cards, prepayments, collections on A/R (no revenue!)</li>
                        <li><strong>Time management:</strong> 15 questions, aim for 30-40 seconds each</li>
                        <li><strong>Common traps:</strong>
                            <ul>
                                <li>Unearned Revenue is a LIABILITY, not revenue</li>
                                <li>Collecting A/R increases one asset, decreases another (no revenue)</li>
                                <li>Dividends are NOT expenses</li>
                                <li>CEO/employees are NOT assets</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="exam-tip">
                    <strong>📋 Part II: Account Classification Strategy (50 points)</strong>
                    <p><strong>Classification Options:</strong></p>
                    <ul>
                        <li><strong>A.</strong> Asset</li>
                        <li><strong>B.</strong> Liability</li>
                        <li><strong>C.</strong> Revenue</li>
                        <li><strong>D.</strong> Expense</li>
                        <li><strong>E.</strong> Not recognized / Gain or Loss</li>
                    </ul>

                    <p><strong>Key Decision Tree:</strong></p>
                    <ol>
                        <li><strong>Does it provide FUTURE benefit?</strong> → Asset</li>
                        <li><strong>Does it represent an OBLIGATION?</strong> → Liability</li>
                        <li><strong>Did we EARN money by providing goods/services?</strong> → Revenue</li>
                        <li><strong>Did we CONSUME resources to generate revenue?</strong> → Expense</li>
                        <li><strong>Is it an unusual/one-time event?</strong> → Gain or Loss</li>
                        <li><strong>Can't measure reliably or doesn't meet criteria?</strong> → Not recognized</li>
                    </ol>

                    <p><strong>Common Tricky Items:</strong></p>
                    <ul>
                        <li><strong>CEO / Employees:</strong> NOT assets (can't be controlled/owned)</li>
                        <li><strong>Unearned Revenue:</strong> LIABILITY</li>
                        <li><strong>Prepaid Insurance:</strong> ASSET</li>
                        <li><strong>R&D Costs:</strong> EXPENSE (not asset)</li>
                        <li><strong>Interest Incurred:</strong> EXPENSE</li>
                        <li><strong>Probable lawsuit damages:</strong> LIABILITY</li>
                    </ul>
                </div>

                <div class="exam-tip">
                    <strong>📋 Part III: Transaction Analysis Strategy (60 points)</strong>
                    <p><strong>Format:</strong> Circle I (increase), D (decrease), or N (no change) for:</p>
                    <ul>
                        <li>Assets</li>
                        <li>Liabilities</li>
                        <li>Stockholders' Equity</li>
                        <li>Revenue</li>
                        <li>Expenses</li>
                    </ul>

                    <p><strong>Step-by-Step Process:</strong></p>
                    <ol>
                        <li><strong>Read the transaction carefully</strong></li>
                        <li><strong>Identify accounts affected</strong></li>
                        <li><strong>Determine debit/credit for each account</strong></li>
                        <li><strong>Map to the 5 categories:</strong>
                            <ul>
                                <li>Assets = Cash, A/R, Inventory, Prepaid, Equipment, etc.</li>
                                <li>Liabilities = A/P, Unearned Revenue, Notes Payable, Salaries Payable</li>
                                <li>Equity = Common Stock, Retained Earnings (affected by NI)</li>
                                <li>Revenue = Sales, Service, Interest Revenue</li>
                                <li>Expenses = COGS, Salaries, Rent, Depreciation, etc.</li>
                            </ul>
                        </li>
                        <li><strong>Verify accounting equation still balances</strong></li>
                    </ol>

                    <p><strong>Critical Reminders:</strong></p>
                    <ul>
                        <li><strong>Collecting A/R:</strong> Assets N (one up, one down), Liabilities N, Equity N, Revenue N, Expenses N</li>
                        <li><strong>Paying A/P:</strong> Assets D, Liabilities D, Equity N, Revenue N, Expenses N</li>
                        <li><strong>Prepaid expenses:</strong> Assets N (one up, one down), NO expense yet!</li>
                        <li><strong>Unearned revenue:</strong> Assets I, Liabilities I, NO revenue yet!</li>
                        <li><strong>Borrowing money:</strong> Assets I, Liabilities I, Equity N, Revenue N, Expenses N</li>
                        <li><strong>Issuing stock:</strong> Assets I, Liabilities N, Equity I, Revenue N, Expenses N</li>
                        <li><strong>Revenue & Expense affect Equity through Net Income!</strong></li>
                    </ul>
                </div>

                <div class="key-point">
                    <strong>⏰ TIME MANAGEMENT:</strong>
                    <ul>
                        <li>Exam: 1 hour 50 minutes (110 minutes)</li>
                        <li>Part I (MC): ~40 minutes (15 questions)</li>
                        <li>Part II (Classification): ~20 minutes (10 questions)</li>
                        <li>Part III (Transaction Analysis): ~35 minutes (10 questions)</li>
                        <li>Review: ~15 minutes</li>
                    </ul>
                </div>

                <div class="key-point">
                    <strong>🎯 FINAL EXAM DAY TIPS:</strong>
                    <ul>
                        <li>Bring a calculator (provided by instructor)</li>
                        <li>Closed book, closed note</li>
                        <li>No electronic devices</li>
                        <li>Read questions carefully - watch for "EXCEPT," "NOT," "FALSE"</li>
                        <li>Show work for partial credit where applicable</li>
                        <li>If stuck, move on and come back</li>
                        <li>Budget time for each section</li>
                        <li>Review all answers if time permits</li>
                    </ul>
                </div>
            </div>

            <!-- BACK TO TOP -->
            <div style="text-align: center; margin-top: 40px;">
                <a href="#sg-balance-sheet" class="back-to-top">↑ Back to Top</a>
            </div>

            <!-- FOOTER -->
            <div style="text-align: center; padding: 40px 0; color: var(--text-secondary);">
                <p><strong>Good luck on your Midterm 1!</strong></p>
                <p>Use this guide alongside the Practice Problems for maximum preparation.</p>
                <p style="margin-top: 20px;">📚 ACCT 410x | Spring 2026 | Midterm 1: February 9, 2026</p>
            </div>
        </div>
    `;
}
