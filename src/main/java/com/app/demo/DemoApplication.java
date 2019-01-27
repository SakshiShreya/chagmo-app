package com.app.demo;

import com.app.demo.components.services.AccountService;
import com.app.demo.models.Account;
import com.app.demo.models.FullName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	@Autowired
	private AccountService accountService;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public void onStart(){

		FullName fullName = new FullName();
		fullName.setFirstName("Tigran");
		fullName.setLastName("Fahradyan");

		Account acc = new Account();
		acc.setGmail("tigran.fahradyan");
		acc.setFullName(fullName);
		acc.setPassword("1111");

		accountService.addAccount(acc);

	}

}