export interface ProfileData {
  name: string;
  role: string;
  email: string;
  phone: string;
  displayPhone: string;
  location: string;
  experienceYears: number;
  experienceSummary: string;
  avatarUrl: string;
  headline: string;
  heroDescription: string;
  heroTags: string[];
  objective: string;
  synopsisPoints: string[];
  personalDetails: {
    address: string;
    languages: string[];
    nationality: string;
    gender: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ToolItem {
  id: string;
  name: string;
  fullName: string;
  category: 'Core Banking' | 'Lending' | 'Defect Tracking' | 'Digital & Portal' | 'Productivity';
  description: string;
  keyResponsibilities: string[];
}

export interface ExperienceRole {
  title: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string; // Editable date field
  isCurrent: boolean;
  statusNote?: string;
  responsibilities: string[];
}

export interface BankingProject {
  id: string;
  name: string;
  shortName: string;
  domain: string;
  client: string;
  testingMethodology: string;
  period: string;
  application: string;
  category: 'Core Banking' | 'Lending' | 'Cheque Clearing' | 'Compliance & Regulatory';
  summary: string;
  responsibilities: string[];
  t24ValidationPoints?: string[];
  technicalHighlights?: string[];
}

export interface EducationCertificationItem {
  type: 'education' | 'certification';
  title: string;
  institution: string;
  periodOrYear: string;
  scoreOrGrade: string;
  description: string;
}

export const portfolioData: {
  profile: ProfileData;
  coreExpertise: string[];
  toolsAndApplications: ToolItem[];
  experienceTimeline: ExperienceRole[];
  featuredProjects: BankingProject[];
  educationAndCertifications: EducationCertificationItem[];
} = {
  profile: {
    name: 'Zakaria Qureshi',
    role: 'Software Test Engineer | Banking QA | Temenos T24',
    email: 'zakariaqureshi46@gmail.com',
    phone: '8286731739',
    displayPhone: '+91 8286731739',
    location: 'Mumbai, Maharashtra, India',
    experienceYears: 5,
    experienceSummary: '5 years of functional testing experience in the banking domain with deep expertise in manual testing methodologies, core banking workflows, and loan management systems.',
    avatarUrl: '/images/profile-portrait.svg',
    headline: 'Quality Assured. Banking Systems Trusted.',
    heroDescription: 'Software Test Engineer with 5 years of specialized experience in banking-domain manual software testing. Proven track record in functional and regression testing, SIT/UAT facilitation, defect lifecycle management, and core banking validation across Temenos T24 and FinnOne CAS.',
    heroTags: ['Manual Testing', 'Banking Domain', 'Temenos T24', 'SIT/UAT', 'JIRA'],
    objective: 'Forward-looking Software Test Engineer dedicated to delivering exceptional testing standards in complex banking software environments, leveraging proven expertise in functional, regression, and sanity testing combined with a strong work ethic.',
    synopsisPoints: [
      '5 years of dedicated functional testing experience within the banking domain.',
      'Led QA team test executions and allocated test assignments across sprint milestones.',
      'Actively involved in System Integration Testing (SIT) and User Acceptance Testing (UAT).',
      'Extensive execution of functional, retesting, regression, smoke, and sanity testing cycles.',
      'Deep knowledge of SDLC and STLC frameworks with rigorous adherence to QA/QC governance.',
      'Hands-on expertise in authoring, reviewing, and executing detailed test scenarios and test cases.',
      'End-to-end defect tracking and defect lifecycle management utilizing JIRA.',
      'Hands-on experience with Loan Origination Systems (LOS) and Loan Management Systems (LMS).',
      'Strong cross-functional collaboration with developers, business analysts, and banking stakeholders.'
    ],
    personalDetails: {
      address: 'Mumbai, Maharashtra, India',
      languages: ['English', 'Hindi'],
      nationality: 'Indian',
      gender: 'Male'
    }
  },

  coreExpertise: [
    'Functional Testing',
    'Regression Testing',
    'Smoke Testing',
    'Sanity Testing',
    'Retesting',
    'System Integration Testing (SIT)',
    'User Acceptance Testing (UAT)',
    'Test Scenario & Case Design',
    'Defect Lifecycle Management',
    'Requirement Analysis',
    'Test Data Creation',
    'Defect Triage',
    'Test Closure Reporting'
  ],

  toolsAndApplications: [
    {
      id: 't24',
      name: 'Temenos T24',
      fullName: 'Temenos T24 Core Banking System',
      category: 'Core Banking',
      description: 'End-to-end core banking test validation including customer onboarding, account creation, balance checks, transaction posting, statement generation, and funds transfer.',
      keyResponsibilities: [
        'Account validation: Verifies whether customer accounts exist, are active, and have valid parameters',
        'Balance verification: Assesses fund availability prior to posting transactions and debit executions',
        'Posting transactions: Verifies debit and credit postings following clearing operations',
        'Retail & Islamic events: Validates interest rate revisions, schedule date updates, and maturity shifts'
      ]
    },
    {
      id: 'jira',
      name: 'JIRA',
      fullName: 'Atlassian JIRA Defect Management',
      category: 'Defect Tracking',
      description: 'Centralized defect tracking, logging, severity prioritization, sprint test updates, and bug lifecycle resolution coordination with development teams.',
      keyResponsibilities: [
        'Authoring clear, reproducible defect tickets with expected vs. actual outcomes and artifacts',
        'Facilitating defect triage meetings to prioritize critical banking workflow blockers',
        'Retesting fixes on candidate builds and certifying defect resolution prior to sign-off'
      ]
    },
    {
      id: 'finnone-cas',
      name: 'FinnOne CAS',
      fullName: 'FinnOne Customer Acquisition System (CAS)',
      category: 'Lending',
      description: 'Comprehensive testing for credit applications, borrower onboarding, loan parameter configuration, and multi-tranche disbursals.',
      keyResponsibilities: [
        'Creation and validation of loan applications tailored to client underwriting criteria',
        'Partitioned transaction testing across split disbursal screens synchronized with core banking',
        'Preparation of comprehensive test data sets for retail and commercial borrowing schemes'
      ]
    },
    {
      id: 'los',
      name: 'LOS',
      fullName: 'Loan Origination System',
      category: 'Lending',
      description: 'Validation of customer acquisition pipelines, credit evaluations, underwriting rules, and application routing from submission to loan booking.',
      keyResponsibilities: [
        'End-to-end requirement walkthroughs and test scenario authoring for credit applications',
        'Verification of credit score inputs, eligibility criteria, and borrower document indexing',
        'Integration validation between front-end loan intake and back-office clearing engines'
      ]
    },
    {
      id: 'lms',
      name: 'LMS',
      fullName: 'Loan Management System',
      category: 'Lending',
      description: 'Testing post-disbursement loan lifecycles, amortization schedules, payment processing, rate changes, and restructuring.',
      keyResponsibilities: [
        'Validation of interest rate modifications, tenure updates, and principal increases',
        'Verification of partial payment accounting and repayment schedule adjustments',
        'Execution of sanity and regression testing across core loan lifecycle services'
      ]
    },
    {
      id: 'crm',
      name: 'CRM',
      fullName: 'Customer Relationship Management',
      category: 'Core Banking',
      description: 'Testing customer service requests (SR), grievance workflows, settlement service requests, and customer 360 profile management.',
      keyResponsibilities: [
        'Agile sprint testing for service request ticketing and settlement workflows',
        'Authoring reusable test cases for high-frequency banking service complaints',
        'Daily status reporting and defect lifecycle updates with business analysts'
      ]
    },
    {
      id: 'sitecore',
      name: 'Sitecore',
      fullName: 'Sitecore Experience Platform',
      category: 'Digital & Portal',
      description: 'Functional verification of customer-facing portals and institutional web properties including Bankfab, Mismak, and Dubai First.',
      keyResponsibilities: [
        'Testing multi-brand institutional portals for navigation, forms, and service intake',
        'Authoring Test Closure Reports (TCR) certifying release readiness and stability',
        'Validating content accuracy and portal integration with downstream service endpoints'
      ]
    },
    {
      id: 'msoffice',
      name: 'MS Office',
      fullName: 'Microsoft Office Suite (Excel, Word, PowerPoint)',
      category: 'Productivity',
      description: 'Advanced test scenario documentation, requirements traceability matrices, test data generation spreadsheets, and executive test reporting.',
      keyResponsibilities: [
        'Building structured test data repositories and complex parameter matrices in Excel',
        'Drafting formal Test Closure Reports, defect summaries, and stakeholder decks',
        'Cross-referencing functional specification documents against executed test cases'
      ]
    }
  ],

  experienceTimeline: [
    {
      title: 'Test Engineer',
      company: 'Tristha Global Pvt Ltd',
      location: 'Mumbai, Maharashtra, India',
      period: '1 November 2022 – Till Date',
      startDate: '1 November 2022',
      endDate: 'Till Date', // Fully editable in data file
      isCurrent: true,
      statusNote: 'Current employment status as supplied in source resume',
      responsibilities: [
        'Lead testing engagements for flagship banking systems, managing test execution schedules and allocating daily tasks across QA team members.',
        'Author and execute detailed test scenarios, test cases, and test data for core banking and clearing solutions for First Abu Dhabi Bank (FAB).',
        'Spearhead System Integration Testing (SIT) and coordinate closely with end users during User Acceptance Testing (UAT) phases.',
        'Conduct rigorous defect triage meetings, log bugs in JIRA with comprehensive execution traces, and retest release fixes.',
        'Validate intricate core banking events in Temenos T24 including interest rate shifts, maturity alterations, and schedule updates for Retail & Islamic banking.',
        'Author comprehensive Test Closure Reports and daily progress dashboards for stakeholders.'
      ]
    },
    {
      title: 'Associate Test Engineer',
      company: 'Tristha Global Pvt Ltd',
      location: 'Mumbai, Maharashtra, India',
      period: '8 November 2021 – 31 October 2022',
      startDate: '8 November 2021',
      endDate: '31 October 2022',
      isCurrent: false,
      responsibilities: [
        'Executed manual functional, smoke, sanity, and regression testing suites on enterprise banking systems.',
        'Analyzed functional requirement specifications and participated in walkthrough sessions with business analysts.',
        'Created and maintained reusable test cases for loan origination, consumer protection, and customer servicing modules.',
        'Logged software discrepancies in JIRA, followed defect life cycle protocols, and verified candidate builds with developers.',
        'Assisted in data creation for complex lending and account management scenarios.'
      ]
    }
  ],

  featuredProjects: [
    {
      id: 'iccs',
      name: 'Image Cheque Clearing System (ICCS)',
      shortName: 'ICCS Clearing & T24',
      domain: 'Banking Domain',
      client: 'First Abu Dhabi Bank',
      testingMethodology: 'Manual Testing',
      period: '1 October 2025 to till date',
      application: 'ICCS and Temenos T24',
      category: 'Cheque Clearing',
      summary: 'Comprehensive manual validation of high-volume cheque image clearing and electronic settlement across Outward, Inward, and On-Us processing channels integrated with Temenos T24.',
      responsibilities: [
        'Tested end-to-end clearing workflows: Outward, Inward, and On-Us cheque settlement cycles.',
        'Analyzed business requirements and functional specifications governing automated cheque image clearing.',
        'Prepared and executed manual test cases and scenarios based on regulatory clearing standards.',
        'Validated cheque image capture, image quality assessment (IQA), and data accuracy.',
        'Tested processing workflows spanning image upload, validation, clearing, and financial settlement.',
        'Verified MICR band data, customer account details, cheque numbers, amounts, and bank routing info.',
        'Validated exception scenarios: duplicate cheques, rejected images, invalid data, returned instruments, and stop payment orders.',
        'Identified, logged, tracked, and retested defects using JIRA in coordination with developers and business analysts.'
      ],
      t24ValidationPoints: [
        'Account Validation: Verified whether the customer account exists, is active, and is eligible for cheque clearing transactions.',
        'Balance Verification: Verified that sufficient funds are available prior to executing cheque payment authorizations.',
        'Posting Transactions: Verified immediate debit and credit adjustments across accounts upon clearing settlement.',
        'Cheque Status Updates: Validated state transitions across Paid, Returned, Rejected, and Pending statuses.',
        'Exception Handling: Tested returned cheque handling triggered by insufficient funds, closed accounts, stop-payment notices, or signature mismatches.',
        'Customer Account Update: Verified accurate reflection of cleared transactions in customer account statements.'
      ],
      technicalHighlights: [
        'MICR Data Encoding Validation',
        'Image Quality Assessment (IQA)',
        'Exception & Return Clearing Rules',
        'T24 General Ledger & Customer Ledger Synchronization'
      ]
    },
    {
      id: 'fab-cbg',
      name: 'FAB CBG (Corporate & Commercial Banking Group)',
      shortName: 'FAB CBG Multi-App Ecosystem',
      domain: 'Banking Domain',
      client: 'First Abu Dhabi Bank',
      testingMethodology: 'Manual Testing',
      period: '16 July 2024 to 30 September 2025',
      application: 'CAS, Sitecore, CRM, and Temenos T24',
      category: 'Core Banking',
      summary: 'Multi-application ecosystem testing integrating Customer Acquisition System (CAS), institutional web portals (Sitecore), CRM customer servicing, and Temenos T24 core banking.',
      responsibilities: [
        'FinnOne CAS: Created loan applications in accordance with client lending specifications, prepared test data sets, executed test cases, and updated JIRA records.',
        'Participated in detailed requirement walkthrough sessions with project stakeholders and domain leads.',
        'Sitecore: Tested institutional sites including Bankfab, Mismak, and Dubai First; authored end-to-end Test Closure Reports (TCR).',
        'CRM Testing: Validated service requests (SR) and customer complaint lifecycles; conducted Agile sprint testing for settlement service requests.',
        'Conducted thorough functional and regression testing cycles across CRM and digital onboarding portals.',
        'Formulated reusable test cases for recurring banking business processes.',
        'Coordinated with developers to verify fixes, conducted thorough retesting, and participated actively in daily Defect Triage meetings.',
        'Maintained and presented daily test execution status dashboards.'
      ],
      t24ValidationPoints: [
        'Business functionality verification for customer onboarding, loan processing, and account management.',
        'Regression testing ensuring new system updates and release patches do not disrupt existing operational services.',
        'Verified core banking events for Retail and Islamic Banking: Interest rate change, Maturity date change, and Schedule date change.',
        'Executed new customer onboarding and profile maintenance in T24.',
        'Created new accounts and verified statements, available balances, and inter-account funds transfers.'
      ],
      technicalHighlights: [
        'Cross-Application Integration (CAS ➔ CRM ➔ T24)',
        'Retail & Islamic Banking Schedule Adjustments',
        'Sitecore Portal Multi-Brand Validation',
        'Agile Sprint Testing for Settlement Service Requests'
      ]
    },
    {
      id: 'multiple-disbursement',
      name: 'Multiple Disbursement System',
      shortName: 'Split Disbursement & Power BI',
      domain: 'Banking Domain',
      client: 'First Abu Dhabi Bank',
      testingMethodology: 'Manual Testing',
      period: '1 February 2024 to 15 July 2024',
      application: 'FinnOne CAS, Temenos T24, Power BI',
      category: 'Lending',
      summary: 'Validation of multi-tranche split loan disbursements where approved loan facilities are disbursed in partitions across FinnOne CAS and validated in Temenos T24 with Power BI reporting.',
      responsibilities: [
        'Developed and executed comprehensive test cases validating multiple disbursement business logic.',
        'Validated split disbursement operations partitioned under the FinnOne CAS split disbursal screen and synchronized into Temenos T24.',
        'Verified automated email notifications triggered prior to executing tranche payment transfers.',
        'Verified Power BI report metrics tracking loans with scheduled disbursements falling within 7-day and 60-day windows.',
        'Verified 31 products and financing schemes for the Islamic banking instance.',
        'Raised and monitored defects using JIRA, partnering closely with development teams through resolution.',
        'Ensured zero calculation discrepancies between partitioned loan tranches and ledger postings.'
      ],
      t24ValidationPoints: [
        'Verified installment calculations and tranche debit postings in T24.',
        'Checked ledger integrity across multiple concurrent disbursements.',
        'Validated loan account balances, accrued interest rules, and release authorizations.'
      ],
      technicalHighlights: [
        'Multi-Tranche Disbursement Rules',
        'Power BI Disbursal Window Reconciliation (7 & 60 Days)',
        '31 Islamic Banking Financial Schemes Verification',
        'Automated Tranche Notification Validation'
      ]
    },
    {
      id: 'arrangement-architecture',
      name: 'Arrangement Architecture & Implementation',
      shortName: 'Arrangement Architecture (T24)',
      domain: 'Banking Domain',
      client: 'First Abu Dhabi Bank',
      testingMethodology: 'Manual Testing',
      period: '1 August 2022 to 31 January 2024',
      application: 'Temenos T24 Core Banking',
      category: 'Core Banking',
      summary: 'Test planning, architecture validation, and execution for Temenos T24 Arrangement Architecture covering retail and Islamic banking products, event handling, and account lifecycles.',
      responsibilities: [
        'Test Planning: Formulated structured testing strategies, defined scope, quality objectives, and test execution timelines for core banking software.',
        'Test Case Design: Authored robust test cases and complex business process scenarios based on technical specifications and functional blueprints.',
        'Test Execution Planning: Defined test execution sequences, prioritization matrices, and exit criteria spanning regression, integration, and user acceptance phases.',
        'Collaboration & Communication: Established testing communication frameworks connecting testers, developers, and business stakeholders.',
        'Verified critical banking events for Retail and Islamic Banking: Partial Payment, Principal Increase, Interest Rate changes, Maturity Date adjustments, and Schedule changes.',
        'Executed new customer onboarding, account creation, statement balancing, and inter-account funds transfers.'
      ],
      t24ValidationPoints: [
        'Arrangement product property definitions and conditions.',
        'Validation of financial event triggers (repayments, rate resets, term adjustments).',
        'Verification of account balance calculation engines and statement entries.'
      ],
      technicalHighlights: [
        'Temenos T24 Arrangement Architecture Rules',
        'Retail & Islamic Product Property Condition Validation',
        'Comprehensive Test Planning & Sequence Prioritization',
        'End-to-End Account Lifecycle Simulation'
      ]
    },
    {
      id: 'cpr',
      name: 'CPR — Consumer Protection & Regulation',
      shortName: 'CPR Regulatory Compliance',
      domain: 'Banking Domain',
      client: 'First Abu Dhabi Bank',
      testingMethodology: 'Manual Testing',
      period: '24 November 2021 to 31 July 2022',
      application: 'Core Banking & JIRA',
      category: 'Compliance & Regulatory',
      summary: 'Regulatory compliance testing ensuring banking systems comply with statutory consumer protection guidelines, transparent disclosure standards, and complaint management.',
      responsibilities: [
        'Designed, created, and reviewed comprehensive test cases aligned with consumer protection guidelines.',
        'Executed functional testing, retesting, and thorough regression testing across successive release builds.',
        'Retested verified defect fixes on every candidate build to guarantee regression-free releases.',
        'Created formal Defect Reports and tracked resolution lifecycles using JIRA.',
        'Collaborated with business analysts to verify regulatory requirement interpretations.'
      ],
      technicalHighlights: [
        'Consumer Protection Statutory Validation',
        'Defect Report Authoring & Traceability in JIRA',
        'Multi-Build Retesting & Regression Sign-off'
      ]
    }
  ],

  educationAndCertifications: [
    {
      type: 'education',
      title: 'Bachelor of Engineering (B.E.)',
      institution: 'Mumbai University',
      periodOrYear: 'Graduated 2020',
      scoreOrGrade: '9.76 CGPA (First Class with Distinction)',
      description: 'Completed Bachelor of Engineering with exceptional academic distinction, cultivating analytical problem-solving and software verification methodologies.'
    },
    {
      type: 'certification',
      title: 'ISTQB Certified Tester',
      institution: 'International Software Testing Qualifications Board',
      periodOrYear: 'Certified',
      scoreOrGrade: 'Certified Professional',
      description: 'Globally recognized certification validating industry-standard software testing principles, test design techniques, STLC processes, and defect governance.'
    },
    {
      type: 'certification',
      title: 'Software Testing Training & Certification',
      institution: 'SQUAD Infotech, Mumbai',
      periodOrYear: 'Certified',
      scoreOrGrade: 'Professional Certification',
      description: 'Rigorous professional training in manual software testing, functional verification, test scenario generation, test case reviews, and JIRA defect life cycles.'
    },
    {
      type: 'certification',
      title: 'MS-CIT Training & Certification',
      institution: 'Maharashtra State Board of Technical Education, Mumbai',
      periodOrYear: 'Certified',
      scoreOrGrade: '84% Score',
      description: 'Information technology certification covering workplace computing, data management, and Microsoft Office productivity applications.'
    }
  ]
};
