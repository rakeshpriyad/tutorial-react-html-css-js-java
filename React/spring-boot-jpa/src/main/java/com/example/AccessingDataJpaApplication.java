package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AccessingDataJpaApplication {


	private static final Logger log = LoggerFactory.getLogger(AccessingDataJpaApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(AccessingDataJpaApplication.class, args);
	}

/*


	//@Bean
	public CommandLineRunner demo(EmpRepository repository) {
		return (args) -> {
			// save a few customers
			repository.save(new Emp("Jack", "Bauer"));
			repository.save(new Emp("Chloe", "O'Brian"));
			repository.save(new Emp("Kim", "Bauer"));
			repository.save(new Emp("David", "Palmer"));
			repository.save(new Emp("Michelle", "Dessler"));

			// fetch all customers
			log.info("Customers found with findAll():");
			log.info("-------------------------------");
			for (Emp emp : repository.findAll()) {
				log.info(emp.toString());
			}
			log.info("");

			// fetch an individual customer by ID
			Emp emp = repository.findById(1L);
			log.info("Customer found with findById(1L):");
			log.info("--------------------------------");
			log.info(emp.toString());
			log.info("");

			// fetch customers by last name
			log.info("Customer found with findByLastName('Bauer'):");
			log.info("--------------------------------------------");
			repository.findByLastName("Bauer").forEach(bauer -> {
				log.info(bauer.toString());
			});
			// for (Customer bauer : repository.findByLastName("Bauer")) {
			// 	log.info(bauer.toString());
			// }
			log.info("");
		};
	}
*/

}
