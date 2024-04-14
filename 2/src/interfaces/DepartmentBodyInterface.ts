interface DepartmentBodyInterface {
    data: {[year: string]: number;},
    children: {[name: string]: DepartmentBodyInterface;}
}

export default DepartmentBodyInterface;