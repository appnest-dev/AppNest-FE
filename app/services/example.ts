const demo = true;

const mockProjectsList = [
  {
    projects: "a",
    modals: "b",
    userTypes: "c",
    lastUpdates: "d",
    Details: "e",
  },
  {
    projects: "1",
    modals: "2",
    userTypes: "3",
    lastUpdates: "4",
    Details: "5",
  },
  {
    projects: "e",
    modals: "f",
    userTypes: "g",
    lastUpdates: "h",
    Details: "i",
  },
  {
    projects: "6",
    modals: "7",
    userTypes: "8",
    lastUpdates: "9",
    Details: "10",
  },
  {
    projects: "j",
    modals: "k",
    userTypes: "l",
    lastUpdates: "m",
    Details: "n",
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
    modal: "Modal 1",
    endpoint: "Endpoint X",
    user_type: "User 1",
    have_access: "Yes",
    fixed: "Yes",
  },
  {
    modal: "Modal 2",
    endpoint: "Endpoint Y",
    user_type: "User 2",
    have_access: "No",
    fixed: "Yes",
  },
  {
    modal: "Modal 3",
    endpoint: "Endpoint Z",
    user_type: "User 3",
    have_access: "Yes",
    fixed: "Yes",
  },
  {
    modal: "Modal 4",
    endpoint: "Endpoint A",
    user_type: "User 4",
    have_access: "No",
    fixed: "Yes",
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
        required: "Yes",
        defaultValue: "",
        regex: "a-z",
        unique: "Yes",
      },
      {
        uniqueKey: "prop2",
        name: "prop2",
        type: "prop2",
        required: "No",
        defaultValue: "",
        regex: "a-z",
        unique: "Yes",
      },
      {
        uniqueKey: "prop3",
        name: "prop3",
        type: "prop3",
        required: "Yes",
        defaultValue: "Nice Job",
        regex: "",
        unique: "No",
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
        required: "Yes",
        defaultValue: "",
        regex: "a-z",
        unique: "Yes",
      },
      {
        uniqueKey: "prop2",
        name: "prop2",
        type: "prop2",
        required: "No",
        defaultValue: "",
        regex: "a-z",
        unique: "Yes",
      },
      {
        uniqueKey: "prop3",
        name: "prop3",
        type: "prop3",
        required: "Yes",
        defaultValue: "Nice Job",
        regex: "",
        unique: "No",
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
