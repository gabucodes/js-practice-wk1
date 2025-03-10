function calculateNetSalary() {
    // Input: Basic Salary and Benefits
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));

    // Validate inputs
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        return "Invalid input! Please enter positive numbers for salary and benefits.";
    }

    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;

    // Calculate Payee (Tax)
    const payee = calculatePayee(grossSalary);

    // Calculate NHIF Deductions
    const nhif = calculateNHIF(grossSalary);

    // Calculate NSSF Deductions
    const nssf = calculateNSSF(grossSalary);

    // Calculate Net Salary
    const netSalary = grossSalary - (payee + nhif + nssf);

    // Display Results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhif}`);
    console.log(`NSSF Deductions: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Function to calculate Payee (Tax) based on KRA rates
function calculatePayee(grossSalary) {
    let tax = 0;

    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25;
    } else {
        tax = 4483.25 + (grossSalary - 32333) * 0.3;
    }

    return tax;
}

// Function to calculate NHIF Deductions
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700; // For grossSalary > 100,000
}

// Function to calculate NSSF Deductions (Tier 1 and Tier 2)
function calculateNSSF(grossSalary) {
    const tier1Limit = 6000; // Tier 1 upper limit
    const tier2Limit = 18000; // Tier 2 upper limit
    const employeeContributionRate = 0.06; // 6% of pensionable pay

    // Calculate pensionable pay (capped at tier2Limit)
    const pensionablePay = Math.min(grossSalary, tier2Limit);

    // Calculate NSSF contribution
    const nssf = pensionablePay * employeeContributionRate;
    return nssf;
}

// Run the program
calculateNetSalary();