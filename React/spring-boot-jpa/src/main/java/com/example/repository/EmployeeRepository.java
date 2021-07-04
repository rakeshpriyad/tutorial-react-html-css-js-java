package com.example.repository;

import java.util.List;

import com.example.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	List<Employee> findByLastName(String lastName);
	List<Employee> findByFirstName(String lastName);

	Employee findById(long id);
}
