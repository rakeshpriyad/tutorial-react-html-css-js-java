package com.example.controller;

import com.example.model.Customer;
import com.example.model.Employee;
import com.example.service.CustomerService;
import com.example.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/rest")
public class CustomerController {

    private final CustomerService service;

    public CustomerController(CustomerService service) {
        this.service = service;
    }


    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/customers")
    List<Customer> all() {
        return service.getCustomers();
    }
    // end::get-aggregate-root[]

    @PostMapping("/customers")
    Customer newEmployee(@RequestBody Customer newCustomer) {
        return service.save(newCustomer);
    }

    // Single item

    @GetMapping("/customers/{id}")
    Customer one(@PathVariable Long id) {

        return service.one(id);
    }

    @PutMapping("/customers/{id}")
    Customer replaceEmployee(@RequestBody Customer newCustomer, @PathVariable Long id) {

        return service.replaceEmployee(newCustomer, id);
    }

    @DeleteMapping("/customers/{id}")
    void deleteEmployee(@PathVariable Long id) {
        service.deleteCustomer(id);
    }

    @GetMapping("/token")
    String token() {
        return "asdflkjsadlfkjlkjsdaflkjdfs";
    }

}

