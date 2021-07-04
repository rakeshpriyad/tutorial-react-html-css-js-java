package com.example.controller;

import com.example.model.Employee;
import com.example.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/rest")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }


    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/employees")
    public List<Employee> findAll() {
        return service.getEmployees();
    }
    // end::get-aggregate-root[]

    @GetMapping("/employees/search/first/{firstName}")
    public List<Employee> findByFirstName(@PathVariable String firstName) {
        return service.findByFirstName(firstName);
    }


    @GetMapping("/employees/search/last/{lastName}")
    public List<Employee> findByLastName(@PathVariable String lastName) {
        return service.findByFirstName(lastName);
    }


    @PostMapping("/employees")
    Employee newEmployee(@RequestBody Employee newEmployee) {
        return service.save(newEmployee);
    }

    // Single item

    @GetMapping("/employees/{id}")
    Employee one(@PathVariable Long id) {

        return service.one(id);
    }

    @PutMapping("/employees/{id}")
    Employee replaceEmployee(@RequestBody Employee newEmployee, @PathVariable Long id) {

        return service.replaceEmployee(newEmployee, id);
    }

    @DeleteMapping("/employees/{id}")
    void deleteEmployee(@PathVariable Long id) {
        service.deleteEmployee(id);
    }
}

