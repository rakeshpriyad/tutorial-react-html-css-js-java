package com.example.config;

import com.example.model.Customer;
import com.example.model.Employee;
import com.example.repository.CustomerRepository;
import com.example.repository.EmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

  @Bean
  CommandLineRunner initDatabase(EmployeeRepository repository, CustomerRepository customerRepository) {

    return args -> {
      log.info("Preloading " + repository.save(new Employee("Rakesh", "Kumar")));
      log.info("Preloading " + repository.save(new Employee("Rajesh", "Kumar")));
      log.info("Preloading " + repository.save(new Employee("Mukesh", "Kumar")));
      log.info("Preloading " + repository.save(new Employee("Ketan", "Patel")));
      log.info("Preloading " + repository.save(new Employee("Sanjay", "Kumar")));
      log.info("Preloading " + repository.save(new Employee("Rakesh", "Kumar")));
      log.info("Preloading " + repository.save(new Employee("Sivraj", "Patil")));
      initCustomerDB(customerRepository);
    };
  }

  public void initCustomerDB(CustomerRepository repository){
    repository.save(new Customer("Rakesh", "Kumar", "India"));
    repository.save(new Customer("Ketan", "Patel", "India"));
  }
}