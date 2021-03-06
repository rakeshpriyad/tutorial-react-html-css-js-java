package com.example.service;

import com.example.exception.EmployeeNotFoundException;
import com.example.model.Employee;
import com.example.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public List<Employee> getEmployees() {
        return repository.findAll();
    }

    public List<Employee> findByFirstName(String firstName) {
        return repository.findByFirstName(firstName);
    }

    public List<Employee> findByLastName(String lastName) {
        return repository.findByFirstName(lastName);
    }

    public Employee save(Employee employee) {
        return repository.save(employee);
    }

    public Employee one(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new
                        EmployeeNotFoundException(id));
    }


    public Employee replaceEmployee(Employee newEmployee, @PathVariable Long id) {

        return repository.findById(id)
                .map(employee -> {
                    employee.setFirstName(newEmployee.getFirstName());
                    employee.setLastName(newEmployee.getLastName());
                    return repository.save(employee);
                })
                .orElseGet(() -> {
                    newEmployee.setId(id);
                    return repository.save(newEmployee);
                });
    }

    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }

}
