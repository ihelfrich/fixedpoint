import re

with open('problems.js', 'r') as f:
    content = f.read()

# Define problem IDs and their corrected explanations
fixes = {
    # Line 1084 - acct-receivable-6
    r'(id: .acct-receivable-6.,[\s\S]*?explanation: .)(Start with cash collected.*?fix the answer\.)': 
        r'\1Revenue = Cash Collected + Change in A/R - Change in Unearned. Change in A/R = $11,500 - $8,000 = +$3,500 increase. Change in Unearned = $6,000 - $0 = +$6,000 increase. Revenue = $95,000 + $3,500 - $6,000 = $92,500. This represents the actual amount earned during the period.',
    
    # Line 1129 - income-statement-3
    r'(id: .income-statement-3.,[\s\S]*?explanation: .)\(a\) Total Revenue.*?43500 not 43500\.\)':
        r'\1(a) Total Revenue = $65,000 + $22,000 + $12,000 = $99,000. (b) Operating Expenses = $8,500 + $18,000 + $15,000 + $4,200 + $6,000 = $51,700. Operating Income = $99,000 - $51,700 = $47,300. (c) Net Income = Operating Income - Interest = $47,300 - $2,800 = $44,500.',
    
    # Line 1478 - accrual-4
    r'(id: .accrual-4.,[\s\S]*?explanation: .)Expense = Cash Paid.*?assuming error in my logic\.)':
        r'\1Use the formula: Expense = Cash Paid - Increase in Prepaid + Increase in Accrued. Prepaid increased by $4,800 - $3,500 = $1,300 (paid but not yet expensed). Accrued increased by $3,100 - $2,200 = $900 (expensed but not yet paid). Therefore: Expense = $52,000 - $1,300 + $900 = $51,600.',
    
    # Line 1732 - accrual-7
    r'(id: .accrual-7.,[\s\S]*?explanation: .)\(a\) Revenue = Cash Receipts.*?\$247\.2k = \$24\.3k\.)':
        r'\1(a) Revenue = Cash Collected - Increase in Unearned + Increase in A/R = $285,000 - $22,000 + $8,500 = $271,500. (b) Expenses = Cash Paid + Depreciation + Decrease in Prepaid + Decrease in Supplies - Increase in A/P - Increase in Salaries Payable = $241,000 + $11,000 + $3,200 + $2,100 - $6,700 - $2,400 = $248,200. (c) Net Income = Revenue - Expenses = $271,500 - $248,200 = $23,300.',
    
    # Line 1776 - comprehensive-1
    r'(id: .comprehensive-1.,[\s\S]*?explanation: .)Revenue \(accrual\) = Amount billed.*?as the answer field\.)':
        r'\1Revenue = Amount billed $95,000. Other Income = Gain $2,500 + Interest $1,200 = $3,700. Total Income = $98,700. Expenses = Cash paid $72,000 - Prepaid $6,000 + Accrued $4,500 + Depreciation $8,000 = $78,500. Net Income = $98,700 - $78,500 = $20,200.',
    
    # Line 1804 - comprehensive-2
    r'(id: .comprehensive-2.,[\s\S]*?explanation: .)\(a\) Cash: \$20k \+ \$180k.*?matches the answer!)':
        r'\1(a) Cash = Beginning $20,000 + Dues collected $180,000 + Event revenue collected (75% of $35,000 = $26,250) - Operating expenses paid $142,000 - Supplies purchased $12,000 = $72,250. (b) Net Income = Dues Revenue $180,000 + Event Revenue $35,000 - Operating Expenses $142,000 - Supplies Expense $18,000 - Depreciation $9,000 = $46,000. (c) Ending Equity = Beginning Equity $64,000 + Net Income $46,000 = $110,000.',
}

for pattern, replacement in fixes.items():
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('problems.js', 'w') as f:
    f.write(content)

print("Fixed all AI-hallucination explanations")
