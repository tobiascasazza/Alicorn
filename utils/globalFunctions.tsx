import { Company } from "../src/models/objects/Company";
import { ResumeProject } from "../src/models/objects/ResumeProject";
import { CompanySearch, UserSearch } from "../src/models/objects/SearchEngine";
import { User } from "../src/models/objects/User";
import { WorkProject } from "../src/models/objects/WorkProject";

export function getFeaturesValuesByUser(users: User[], currentFeature: string) {
  const featureSet = new Set<string>();

  users.forEach((user) => {
    user.features.forEach((feature) => {
      if (feature.title.toLowerCase() === currentFeature) {
        featureSet.add(feature.description);
      }
    });
  });

  const featureDescriptions = Array.from(featureSet);
  return featureDescriptions.sort((a, b) => a.localeCompare(b));
}

export function getFeaturesValuesByCompany(
  companies: Company[],
  currentFeature: string
) {
  const featureSet = new Set<string>();

  companies.forEach((company) => {
    company.features.forEach((feature) => {
      if (feature.title.toLowerCase() === currentFeature) {
        featureSet.add(feature.description);
      }
    });
  });

  const featureDescriptions = Array.from(featureSet);
  return featureDescriptions.sort((a, b) => a.localeCompare(b));
}

export function filterCompaniesByUserId(
  studentId: number,
  companies: Company[]
) {
  return companies.filter(
    (company) =>
      company.owners.some((owner) => owner.id === studentId) ||
      company.employees.some((employee) => employee.id === studentId)
  );
}
export function filterWorkProjectsByUserId(
  studentId: number,
  workProjects: WorkProject[]
) {
  return workProjects.filter((workProject) =>
    workProject.students.some((student) => student.id === studentId)
  );
}

export function filterResumeProjectsByUserId(
  studentId: number,
  projects: ResumeProject[]
) {
  return projects.filter((project) =>
    project.participants.some((participant) => participant.id === studentId)
  );
}

export function filterUsersByUserSearch(users: User[], userSearch: UserSearch) {
  let result: User[] = [];
  if (
    userSearch.name !== "" ||
    (userSearch.punctuation[0] !== 0 && userSearch.punctuation[1] !== 0) ||
    userSearch.features.length > 0
  ) {
    const firstFilterByName: User[] = users.filter(
      (user) =>
        user.name.includes(userSearch.name) ||
        user.lastName.includes(userSearch.name) ||
        userSearch.name.includes(user.name) ||
        userSearch.name.includes(user.lastName)
    );
    const secondFilterByFeatures =
      userSearch.features.length > 0
        ? firstFilterByName.filter((user) => {
            return userSearch.features.every((searchFeature) => {
              return user.features.some((userFeature) => {
                return searchFeature.description === userFeature.description;
              });
            });
          })
        : firstFilterByName;

    const thirdFilterByPunctuation =
      userSearch.punctuation[0] !== 0 || userSearch.punctuation[1] !== 0
        ? secondFilterByFeatures.filter(
            (user) =>
              user.punctuation !== undefined &&
              user.punctuation >= userSearch.punctuation[0] &&
              user.punctuation <= userSearch.punctuation[1]
          )
        : secondFilterByFeatures;

    result = thirdFilterByPunctuation;
  }
  return result;
}

export function filterCompaniesByCompanySearch(
  companies: Company[],
  companySearch: CompanySearch
) {
  let result: Company[] = [];
  if (
    companySearch.title !== "" ||
    (companySearch.punctuation[0] !== 0 &&
      companySearch.punctuation[1] !== 0) ||
    companySearch.features.length > 0
  ) {
    const firstFilterByTitle: Company[] = companies.filter(
      (company) =>
        company.title.includes(companySearch.title) ||
        companySearch.title.includes(company.title)
    );
    const secondFilterByFeatures =
      companySearch.features.length > 0
        ? firstFilterByTitle.filter((user) => {
            return companySearch.features.every((searchFeature) => {
              return user.features.some((userFeature) => {
                return searchFeature.description === userFeature.description;
              });
            });
          })
        : firstFilterByTitle;

    const thirdFilterByPunctuation =
      companySearch.punctuation[0] !== 0 || companySearch.punctuation[1] !== 0
        ? secondFilterByFeatures.filter(
            (company) =>
              company.punctuation !== undefined &&
              company.punctuation >= companySearch.punctuation[0] &&
              company.punctuation <= companySearch.punctuation[1]
          )
        : secondFilterByFeatures;

    result = thirdFilterByPunctuation;
  }
  return result;
}
