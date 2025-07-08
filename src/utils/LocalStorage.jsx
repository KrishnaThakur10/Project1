const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile the monthly sales report from CRM.",
        date: "2025-05-10",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Follow up with client ABC Ltd. regarding the proposal.",
        date: "2025-05-12",
        category: "Communication",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Data Backup",
        description: "Backup the financial data to cloud storage.",
        date: "2025-05-05",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Website Banner",
        description: "Create a promotional banner for the homepage.",
        date: "2025-05-18",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve login issue reported by QA.",
        date: "2025-05-15",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Weekly sync with the development team.",
        date: "2025-05-14",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Update Readme",
        description: "Update the project documentation.",
        date: "2025-05-16",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Research Market Trends",
        description: "Analyze market trends for Q2.",
        date: "2025-05-11",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Draft Newsletter",
        description: "Create the content draft for the monthly newsletter.",
        date: "2025-05-13",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Edit Video",
        description: "Trim and edit the promo video for the campaign.",
        date: "2025-05-09",
        category: "Media",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory Check",
        description: "Conduct stock audit for Q2.",
        date: "2025-05-08",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Vendor Negotiation",
        description: "Negotiate better rates with suppliers.",
        date: "2025-05-17",
        category: "Procurement",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Feedback",
        description: "Collect feedback from team on new software tools.",
        date: "2025-05-15",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Submit Expenses",
        description: "Submit all travel and work expenses for approval.",
        date: "2025-05-14",
        category: "Finance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Server Maintenance",
        description: "Routine maintenance of production servers.",
        date: "2025-05-10",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review pull requests from junior developers.",
        date: "2025-05-11",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Customer Support",
        description: "Resolve open tickets assigned this week.",
        date: "2025-05-12",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security Audit",
        description: "Review security compliance and policies.",
        date: "2025-05-13",
        category: "Compliance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];


export const setlocalstorage = () =>{
     localStorage.setItem('employees', JSON.stringify( employees))
     localStorage.setItem('admin', JSON.stringify( admin))
}

export const getlocalstorage = () =>{
     const employees = JSON.parse(localStorage.getItem('employees'))
     const admin = JSON.parse(localStorage.getItem('admin'))
     console.log((admin));
     
}