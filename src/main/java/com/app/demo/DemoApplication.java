package com.app.demo;

import com.app.demo.components.services.AccountService;
import com.app.demo.models.Account;
import com.app.demo.models.AccountForm;
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

		AccountForm accForm = new AccountForm();
		accForm.setFirst_name("Tigran");
		accForm.setLast_name("Fahradyan");
		accForm.setGmail("tigran.fahradyan01@gmail.com");
		accForm.setPassword("1111");

		accountService.addAccount(accForm);

	}

}