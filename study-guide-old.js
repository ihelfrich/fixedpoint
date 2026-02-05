// ===========================
// ACCT 410x Study Guide Content
// Comprehensive Midterm 1 Preparation
// ===========================

function getStudyGuideHTML() {
    return `
        <div class="study-guide">
            <div class="study-intro card">
                <h2>📚 Complete Study Guide for Midterm 1</h2>
                <p>This comprehensive guide covers all concepts from Classes 1-7. Use it alongside practice problems for maximum preparation.</p>
            </div>

            <!-- Balance Sheet -->
            <div class="study-section card" id="sg-balance-sheet">
                <h3>1. Balance Sheet (Class 2)</h3>

                <div class="concept-block">
                    <h4>The Accounting Equation</h4>
                    <div class="formula">Assets = Liabilities + Stockholders' Equity</div>
                    <p><strong>Always true:</strong> This equation must balance after every transaction.</p>
                </div>

                <div class="concept-block">
                    <h4>Assets</h4>
                    <p><strong>Definition:</strong> Resources owned by the company that provide future economic benefits.</p>
                    <p><strong>Examples:</strong></p>
                    <ul>
                        <li><strong>Current Assets</strong> (< 1 year): Cash, Accounts Receivable, Inventory, Prepaid Expenses, Supplies</li>
                        <li><strong>Non-Current Assets</strong> (> 1 year): Property, Plant & Equipment (PP&E), Land, Buildings, Equipment</li>
                    </ul>
                    <p><strong>Key Point:</strong> Listed in order of liquidity (how quickly converted to cash)</p>
                </div>

                <div class="concept-block">
                    <h4>Liabilities</h4>
                    <p><strong>Definition:</strong> Obligations owed to others (future sacrifices of economic benefits).</p>
                    <p><strong>Examples:</strong></p>
                    <ul>
                        <li><strong>Current Liabilities</strong> (< 1 year): Accounts Payable, Salaries Payable, Unearned Revenue, Notes Payable (short-term)</li>
                        <li><strong>Non-Current Liabilities</strong> (> 1 year): Long-term Debt, Bonds Payable, Notes Payable (long-term)</li>
                    </ul>
                </div>

                <div class="concept-block">
                    <h4>Stockholders' Equity</h4>
                    <p><strong>Definition:</strong> Owners' residual interest in the company (Assets - Liabilities).</p>
                    <p><strong>Components:</strong></p>
                    <ul>
                        <li><strong>Common Stock:</strong> Amount invested by shareholders</li>
                        <li><strong>Retained Earnings:</strong> Cumulative net income - cumulative dividends</li>
                    </ul>
                    <p><strong>Formula:</strong> Beginning RE + Net Income - Dividends = Ending RE</p>
                </div>
            </div>

            <!-- Income Statement -->
            <div class="study-section card" id="sg-income-statement">
                <h3>2. Income Statement (Class 3)</h3>

                <div class="concept-block">
                    <h4>Purpose</h4>
                    <p>Reports financial performance over a <strong>period of time</strong> (e.g., month, quarter, year).</p>
                    <div class="formula">Revenue - Expenses = Net Income</div>
                </div>

                <div class="concept-block">
                    <h4>Revenue</h4>
                    <p><strong>Definition:</strong> Increases in equity from providing goods/services to customers.</p>
                    <p><strong>Examples:</strong> Sales Revenue, Service Revenue, Interest Revenue, Rent Revenue</p>
                    <p><strong>When recognized:</strong> When <em>earned</em> (goods delivered or services performed), NOT when cash received</p>
                </div>

                <div class="concept-block">
                    <h4>Expenses</h4>
                    <p><strong>Definition:</strong> Decreases in equity from consuming resources to generate revenue.</p>
                    <p><strong>Common Expenses:</strong></p>
                    <ul>
                        <li><strong>Cost of Goods Sold (COGS):</strong> Cost of inventory sold</li>
                        <li><strong>Salaries Expense:</strong> Employee compensation</li>
                        <li><strong>Rent Expense:</strong> Facility costs</li>
                        <li><strong>Utilities Expense:</strong> Electric, water, gas</li>
                        <li><strong>Depreciation Expense:</strong> Allocation of asset cost over time</li>
                        <li><strong>Interest Expense:</strong> Cost of borrowing</li>
                    </ul>
                    <p><strong>When recognized:</strong> When <em>incurred</em> (resources consumed), NOT when cash paid</p>
                </div>

                <div class="concept-block">
                    <h4>Multi-Step Income Statement Format</h4>
                    <div class="formula-block">
                        <p>Sales Revenue</p>
                        <p style="padding-left: 20px;">- Cost of Goods Sold</p>
                        <p>= <strong>Gross Profit</strong></p>
                        <p style="padding-left: 20px;">- Operating Expenses</p>
                        <p>= <strong>Operating Income</strong></p>
                        <p style="padding-left: 20px;">+ Other Revenue</p>
                        <p style="padding-left: 20px;">- Other Expenses</p>
                        <p>= <strong>Net Income</strong></p>
                    </div>
                </div>
            </div>

            <!-- Double-Entry Accounting -->
            <div class="study-section card" id="sg-double-entry">
                <h3>3. Double-Entry Accounting (Class 4)</h3>

                <div class="concept-block">
                    <h4>Fundamental Principle</h4>
                    <p><strong>Every transaction affects at least TWO accounts.</strong></p>
                    <p>Total debits must equal total credits.</p>
                </div>

                <div class="concept-block">
                    <h4>The Rules: Debit & Credit</h4>
                    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                        <tr style="background: var(--bg-secondary);">
                            <th style="padding: 12px; text-align: left; border: 1px solid var(--border);">Account Type</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid var(--border);">Increase</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid var(--border);">Decrease</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid var(--border);">Normal Balance</th>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Assets</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Debit</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Credit</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Debit</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Liabilities</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Credit</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Debit</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Credit</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Equity</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Credit</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Debit</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Credit</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Revenue</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Credit</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Debit</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Credit</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Expenses</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Debit</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Credit</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Debit</td>
                        </tr>
                    </table>
                </div>

                <div class="concept-block">
                    <h4>Common Transaction Examples</h4>
                    <div style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); margin: 10px 0;">
                        <p><strong>1. Owner invests cash:</strong></p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Cash | Cr. Common Stock</p>
                    </div>

                    <div style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); margin: 10px 0;">
                        <p><strong>2. Purchase inventory on credit:</strong></p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Inventory | Cr. Accounts Payable</p>
                    </div>

                    <div style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); margin: 10px 0;">
                        <p><strong>3. Provide services for cash:</strong></p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Cash | Cr. Service Revenue</p>
                    </div>

                    <div style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); margin: 10px 0;">
                        <p><strong>4. Pay employee salaries:</strong></p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Salary Expense | Cr. Cash</p>
                    </div>

                    <div style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); margin: 10px 0;">
                        <p><strong>5. Borrow money from bank:</strong></p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Cash | Cr. Notes Payable</p>
                    </div>
                </div>
            </div>

            <!-- Accrual Accounting -->
            <div class="study-section card" id="sg-accrual">
                <h3>4. Accrual Accounting (Class 5)</h3>

                <div class="concept-block">
                    <h4>Accrual vs. Cash Basis</h4>
                    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                        <tr style="background: var(--bg-secondary);">
                            <th style="padding: 12px; text-align: left; border: 1px solid var(--border);"></th>
                            <th style="padding: 12px; text-align: center; border: 1px solid var(--border);">Accrual Basis (GAAP)</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid var(--border);">Cash Basis</th>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Revenue recognized:</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">When EARNED</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">When cash received</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Expenses recognized:</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">When INCURRED</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">When cash paid</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border);"><strong>Used by:</strong></td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Most businesses (GAAP)</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid var(--border);">Small businesses</td>
                        </tr>
                    </table>
                </div>

                <div class="concept-block">
                    <h4>Revenue Recognition Principle</h4>
                    <p><strong>Recognize revenue when:</strong></p>
                    <ol>
                        <li>Goods delivered OR services performed</li>
                        <li>Collection is reasonably assured</li>
                    </ol>
                    <p><strong>NOT when cash is received!</strong></p>
                    <p><strong>Example:</strong> Alpha Phi hosts an event on March 15. Members pay on April 10. Revenue recognized: March 15 (when event occurred).</p>
                </div>

                <div class="concept-block">
                    <h4>Matching Principle</h4>
                    <p><strong>Match expenses with the related revenues in the same period.</strong></p>
                    <p><strong>Example:</strong> If Alpha Phi recognizes ticket revenue in March, the DJ expense, venue cost, and catering should also be recognized in March (even if paid later).</p>
                    <p><strong>Purpose:</strong> Provides accurate picture of profitability for each period.</p>
                </div>
            </div>

            <!-- Adjusting Entries -->
            <div class="study-section card" id="sg-adjusting">
                <h3>5. Adjusting Entries (Class 6)</h3>

                <div class="concept-block">
                    <h4>Purpose</h4>
                    <p>Made at <strong>end of accounting period</strong> to ensure revenues and expenses are recognized in correct period (accrual accounting).</p>
                    <p><strong>Key:</strong> Adjusting entries NEVER involve cash!</p>
                </div>

                <div class="concept-block">
                    <h4>Five Types of Adjusting Entries</h4>

                    <div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-md); margin: 15px 0;">
                        <p><strong>1. Prepaid Expenses (Deferrals)</strong></p>
                        <p>Cash paid before expense incurred. Asset → Expense over time.</p>
                        <p><strong>Example:</strong> Prepaid Insurance</p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Insurance Expense | Cr. Prepaid Insurance</p>
                    </div>

                    <div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-md); margin: 15px 0;">
                        <p><strong>2. Unearned Revenue (Deferrals)</strong></p>
                        <p>Cash received before revenue earned. Liability → Revenue over time.</p>
                        <p><strong>Example:</strong> Unearned Dues</p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Unearned Revenue | Cr. Dues Revenue</p>
                    </div>

                    <div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-md); margin: 15px 0;">
                        <p><strong>3. Accrued Expenses</strong></p>
                        <p>Expense incurred but not yet paid or recorded.</p>
                        <p><strong>Example:</strong> Salaries owed but not paid</p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Salary Expense | Cr. Salaries Payable</p>
                    </div>

                    <div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-md); margin: 15px 0;">
                        <p><strong>4. Accrued Revenue</strong></p>
                        <p>Revenue earned but not yet received or recorded.</p>
                        <p><strong>Example:</strong> Services performed but not billed</p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Accounts Receivable | Cr. Service Revenue</p>
                    </div>

                    <div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-md); margin: 15px 0;">
                        <p><strong>5. Depreciation</strong></p>
                        <p>Allocate cost of long-term assets over useful life.</p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Depreciation Expense | Cr. Accumulated Depreciation</p>
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Remember:</h4>
                    <ul>
                        <li>Adjusting entries ensure <strong>matching principle</strong></li>
                        <li>Made at <strong>period-end</strong> (e.g., Dec 31)</li>
                        <li><strong>Never involve Cash</strong> account</li>
                        <li>Always involve at least one <strong>Balance Sheet</strong> and one <strong>Income Statement</strong> account</li>
                    </ul>
                </div>
            </div>

            <!-- Accounts Receivable -->
            <div class="study-section card" id="sg-receivables">
                <h3>6. Accounts Receivable (Class 7)</h3>

                <div class="concept-block">
                    <h4>Definition</h4>
                    <p><strong>Accounts Receivable:</strong> Amounts owed to the company by customers for goods/services provided on credit.</p>
                    <p>It's an <strong>asset</strong> on the Balance Sheet.</p>
                </div>

                <div class="concept-block">
                    <h4>Recording Credit Sales</h4>
                    <div style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); margin: 10px 0;">
                        <p><strong>At time of sale:</strong></p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Accounts Receivable | Cr. Sales Revenue</p>
                    </div>
                    <div style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); margin: 10px 0;">
                        <p><strong>When collected:</strong></p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Cash | Cr. Accounts Receivable</p>
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Bad Debts (Uncollectible Accounts)</h4>
                    <p>Some customers won't pay. We must estimate and record this expense.</p>

                    <p><strong>Allowance Method (GAAP required):</strong></p>
                    <p>Create a contra-asset account "Allowance for Doubtful Accounts"</p>

                    <div style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); margin: 10px 0;">
                        <p><strong>Recording estimated bad debts:</strong></p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Bad Debt Expense | Cr. Allowance for Doubtful Accounts</p>
                    </div>

                    <div style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); margin: 10px 0;">
                        <p><strong>Writing off specific account:</strong></p>
                        <p style="font-family: var(--font-mono); margin-left: 20px;">Dr. Allowance for Doubtful Accounts | Cr. Accounts Receivable</p>
                        <p><em>Note: This does NOT affect income statement (expense already recorded)</em></p>
                    </div>
                </div>

                <div class="concept-block">
                    <h4>Net Realizable Value (NRV)</h4>
                    <div class="formula">NRV = Accounts Receivable - Allowance for Doubtful Accounts</div>
                    <p>This is the amount expected to be collected (shown on Balance Sheet).</p>
                    <p><strong>Example:</strong> A/R = $10,000, Allowance = $400 → NRV = $9,600</p>
                </div>

                <div class="concept-block">
                    <h4>Estimating Bad Debts</h4>
                    <div style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); margin: 10px 0;">
                        <p><strong>1. Percentage-of-Sales Method</strong></p>
                        <p>Estimate = Credit Sales × %</p>
                        <p><em>Focus on Income Statement (matching principle)</em></p>
                    </div>

                    <div style="background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); margin: 10px 0;">
                        <p><strong>2. Aging of Accounts Receivable Method</strong></p>
                        <p>Analyze how old receivables are; older = less likely to collect</p>
                        <p><em>Focus on Balance Sheet (accurate NRV)</em></p>
                    </div>
                </div>
            </div>

            <!-- Key Formulas Summary -->
            <div class="study-section card">
                <h3>📋 Key Formulas Summary</h3>
                <div style="background: var(--bg-secondary); padding: 24px; border-radius: var(--radius-md);">
                    <p style="margin: 8px 0;"><strong>Balance Sheet:</strong> Assets = Liabilities + Equity</p>
                    <p style="margin: 8px 0;"><strong>Income Statement:</strong> Revenue - Expenses = Net Income</p>
                    <p style="margin: 8px 0;"><strong>Retained Earnings:</strong> Beginning RE + Net Income - Dividends = Ending RE</p>
                    <p style="margin: 8px 0;"><strong>Gross Profit:</strong> Sales Revenue - Cost of Goods Sold</p>
                    <p style="margin: 8px 0;"><strong>Operating Income:</strong> Gross Profit - Operating Expenses</p>
                    <p style="margin: 8px 0;"><strong>NRV:</strong> Accounts Receivable - Allowance for Doubtful Accounts</p>
                </div>
            </div>

            <!-- Study Tips -->
            <div class="study-section card">
                <h3>💡 Exam Preparation Tips</h3>
                <ul style="line-height: 1.8;">
                    <li><strong>Master the fundamentals:</strong> Accounting equation, debit/credit rules</li>
                    <li><strong>Practice journal entries:</strong> Write out common transactions repeatedly</li>
                    <li><strong>Understand timing:</strong> Accrual vs. cash – when to recognize revenue/expenses</li>
                    <li><strong>Know adjusting entries:</strong> All 5 types cold – these are heavily tested</li>
                    <li><strong>Memorize formulas:</strong> Especially NRV, gross profit, operating income</li>
                    <li><strong>Use practice problems:</strong> Work through all difficulty levels in Practice section</li>
                    <li><strong>Take practice exam:</strong> Simulate exam conditions with the 35-question midterm</li>
                    <li><strong>Alpha Phi scenarios:</strong> Practice with themed problems for better retention</li>
                </ul>
            </div>
        </div>
    `;
}
