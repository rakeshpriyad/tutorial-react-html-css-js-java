package com.example.service;

import com.example.exception.CustomerNotFoundException;
import com.example.model.Customer;
import com.example.model.Employee;
import com.example.repository.CustomerRepository;
import com.example.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository repository;

    public List<Customer> getCustomers() {
        return repository.findAll();
    }

    public Customer save(Customer customer) {
        return repository.save(customer);
    }

    public Customer one(Long id) {
        return repository.findById(id)
                . orElseThrow(() -> new
                        CustomerNotFoundException(id));
    }



    public Customer replaceEmployee(Customer newCustomer, @PathVariable Long id) {

        return repository.findById(id)
                .map(customer -> {
                    customer.setFirstName(newCustomer.getFirstName());
                    customer.setLastName(newCustomer.getLastName());
                    customer.setAddress(newCustomer.getAddress());
                    return repository.save(customer);
                })
                .orElseGet(() -> {
                    newCustomer.setId(id);
                    return repository.save(newCustomer);
                });
    }

    public void deleteCustomer(Long id) {
        repository.deleteById(id);
    }

}
