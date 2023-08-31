package farmix.com.crud.service;

import farmix.com.crud.modle.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    Employee addEmployee(Employee employee);

    List<Employee> getAllEmployees();

    Optional<Employee> getEmployeeById(Integer id);

    void deleteEmployee(int id);

    Employee updateEmployee(int id, Employee updatedEmployee);
}
