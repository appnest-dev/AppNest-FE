const demo = true;

const mockProjectsList = [
  {
    projects: "a",
    modals: "b",
    user_types: "c",
    last_updates: "d",
    Details: "e",
  },
  {
    projects: "1",
    modals: "2",
    user_types: "3",
    last_updates: "4",
    Details: "5",
  },
];

const getAllProjects = () => {
  switch (demo) {
    case true:
      return mockProjectsList;
    default:
      return mockProjectsList;
  }
};
