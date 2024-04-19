const demo = true;

const mockProjectsList = [
  {
    projects: "a",
    modals: "b",
    userTypes: "c",
    lastUpdated: "d",
    details: "e",
  },
  {
    projects: "1",
    modals: "2",
    userTypes: "3",
    lastUpdated: "4",
    details: "5",
  },
  {
    projects: "e",
    modals: "f",
    userTypes: "g",
    lastUpdated: "h",
    details: "i",
  },
  {
    projects: "6",
    modals: "7",
    userTypes: "8",
    lastUpdated: "9",
    details: "10",
  },
  {
    projects: "j",
    modals: "k",
    userTypes: "l",
    lastUpdated: "m",
    details: "n",
  },
];

export const getAllProjects = async () => {
  switch (demo) {
    case true:
      return mockProjectsList;
    default:
      return mockProjectsList;
  }
};

const mockUserTypesList = [
  {
    uniqueKey: "user1",
    name: "user1",
    description: "Desc 1",
  },
  {
    uniqueKey: "user2",
    name: "user2",
    description: "Desc 2",
  },
  {
    uniqueKey: "user3",
    name: "user3",
    description: "Desc 3",
  },
];

export const getAllUserTypes = async () => {
  switch (demo) {
    case true:
      return mockUserTypesList;
    default:
      return mockUserTypesList;
  }
};

const mockAccessRulesList = [
  {
    modals: "Modal 1",
    endpoints: "Endpoint X",
    userTypes: "User 1",
    haveAccess: true,
    fixed: false,
  },
  {
    modals: "Modal 2",
    endpoints: "Endpoint Y",
    userTypes: "User 2",
    haveAccess: false,
    fixed: true,
  },
  {
    modals: "Modal 3",
    endpoints: "Endpoint Z",
    userTypes: "User 3",
    haveAccess: true,
    fixed: true,
  },
  {
    modals: "Modal 4",
    endpoints: "Endpoint A",
    userTypes: "User 4",
    haveAccess: false,
    fixed: true,
  },
];

export const getAllAccessRules = async () => {
  switch (demo) {
    case true:
      return mockAccessRulesList;
    default:
      return mockAccessRulesList;
  }
};

const mockModelsList = [
  {
    title: "Model 1",
    properties: [
      {
        uniqueKey: "prop1",
        name: "prop1",
        type: "prop1",
        required: true,
        defaultValue: "",
        regex: "a-z",
        unique: true,
      },
      {
        uniqueKey: "prop2",
        name: "prop2",
        type: "prop2",
        required: false,
        defaultValue: "",
        regex: "a-z",
        unique: true,
      },
      {
        uniqueKey: "prop3",
        name: "prop3",
        type: "prop3",
        required: true,
        defaultValue: "Nice Job",
        regex: "",
        unique: false,
      },
    ],
    relations: [
      {
        modal1: "Modal 1",
        modal2: "Modal 2",
        relation: "1 -> 1",
      },
      {
        modal1: "Modal 1",
        modal2: "Modal 2",
        relation: "... -> 1",
      },
      {
        modal1: "Modal 1",
        modal2: "Modal 2",
        relation: "1 -> ...",
      },
    ],
    endpoints: [
      {
        name: "Endpoint 1",
        coverage: "All",
        type: "Get",
      },
      {
        name: "Endpoint 2",
        coverage: "Own",
        type: "Create",
      },
      {
        name: "Endpoint 3",
        coverage: "Own",
        type: "Post",
      },
    ],
  },
  {
    title: "Model 2",
    properties: [
      {
        uniqueKey: "prop1",
        name: "prop1",
        type: "prop1",
        required: true,
        defaultValue: "",
        regex: "a-z",
        unique: true,
      },
      {
        uniqueKey: "prop2",
        name: "prop2",
        type: "prop2",
        required: false,
        defaultValue: "",
        regex: "a-z",
        unique: true,
      },
      {
        uniqueKey: "prop3",
        name: "prop3",
        type: "prop3",
        required: true,
        defaultValue: "Nice Job",
        regex: "",
        unique: false,
      },
    ],
    relations: [
      {
        modal1: "Modal 1",
        modal2: "Modal 2",
        relation: "1 -> 1",
      },
      {
        modal1: "Modal 1",
        modal2: "Modal 2",
        relation: "... -> 1",
      },
      {
        modal1: "Modal 1",
        modal2: "Modal 2",
        relation: "1 -> ...",
      },
    ],
    endpoints: [
      {
        name: "Endpoint 1",
        coverage: "All",
        type: "Get",
      },
      {
        name: "Endpoint 2",
        coverage: "Own",
        type: "Create",
      },
      {
        name: "Endpoint 3",
        coverage: "Own",
        type: "Post",
      },
    ],
  },
];

export const getAllModels = async () => {
  switch (demo) {
    case true:
      return mockModelsList;
    default:
      return mockModelsList;
  }
};

const mockProjectDashboardList = [
  {
    title: "Modals",
    examples: ["Modal 1", "Modal 2", "Modal 3", "modal 4"],
  },
  {
    title: "User Types",
    examples: ["User 1", "User 2", "User 3", "User 4"],
  },
  {
    title: "Access Rules",
    examples: ["Rule 1", "Rule 2", "Rule 3", "Rule 4"],
  },
];

export const getProjectDashboard = async () => {
  switch (demo) {
    case true:
      return mockProjectDashboardList;
    default:
      return mockProjectDashboardList;
  }
};
