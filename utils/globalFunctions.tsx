import { Company } from "../src/models/objects/Company";
import { WorkProject } from "../src/models/objects/WorkProject";

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
    workProject.students.some((owner) => owner.id === studentId)
  );
}
