const fs = require('fs');
const content = fs.readFileSync('problems.js', 'utf8');
eval(content);

let missingAnswerMechanisms = [];
for (const [topic, problems] of Object.entries(ProblemBank)) {
    problems.forEach((p, i) => {
        if (p.type === 'calculation' && typeof p.answer !== 'number') {
            missingAnswerMechanisms.push({topic, id: p.id, type: p.type, issue: 'calculation without numeric answer'});
        }
        if (p.type === 'multiple-choice' && (!p.options || !p.answer)) {
            missingAnswerMechanisms.push({topic, id: p.id, type: p.type, issue: 'missing options or answer'});
        }
        if (p.type === 'true-false') {
            const ans = String(p.answer).toLowerCase();
            if (ans !== 'true' && ans !== 'false') {
                missingAnswerMechanisms.push({topic, id: p.id, type: p.type, issue: 'invalid true/false answer'});
            }
        }
    });
}

console.log(JSON.stringify(missingAnswerMechanisms, null, 2));
