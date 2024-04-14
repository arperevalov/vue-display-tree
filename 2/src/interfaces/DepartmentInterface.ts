import DepartmentBodyInterface from "./DepartmentBodyInterface.ts";

interface DepartmentInterface {
    [name: string]: DepartmentBodyInterface;
}

export default DepartmentInterface;