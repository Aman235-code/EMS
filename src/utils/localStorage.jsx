const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix Login Bug",
        description: "Resolve the login issue causing failed attempts.",
        date: "2024-10-18",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update Documentation",
        description: "Revise the API documentation for new endpoints.",
        date: "2024-10-10",
        category: "Documentation",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Ravi",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build User Dashboard",
        description: "Implement UI for the user dashboard.",
        date: "2024-10-20",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy Application",
        description: "Deploy the latest build to the production server.",
        date: "2024-09-30",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix Payment Gateway Issue",
        description:
          "Investigate the failed transactions in the payment gateway.",
        date: "2024-10-15",
        category: "Backend",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Meera",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Landing Page",
        description: "Create a responsive design for the landing page.",
        date: "2024-10-25",
        category: "Design",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Database Backup",
        description: "Generate a complete backup of the database.",
        date: "2024-10-05",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write Test Cases",
        description: "Add unit tests for new features.",
        date: "2024-09-29",
        category: "Testing",
      },
    ],
    taskNumber: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize Performance",
        description: "Enhance the speed of the main application.",
        date: "2024-11-01",
        category: "Performance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Migrate Database",
        description: "Move the database from MySQL to PostgreSQL.",
        date: "2024-09-15",
        category: "Database",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalstorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
