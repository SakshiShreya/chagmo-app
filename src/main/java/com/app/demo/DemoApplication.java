package com.app.demo;

import com.app.demo.components.services.accountServices.AccountService;
import com.app.demo.components.services.accountServices.FollowerService;
import com.app.demo.components.services.PostService;
import com.app.demo.components.services.accountServices.SecuredDataService;
import com.app.demo.entities.postEntities.Post;
import com.app.demo.entities.accountEntities.Account;
import com.app.demo.entities.accountEntities.Follower;
import com.app.demo.entities.accountEntities.FullName;
import com.app.demo.entities.accountEntities.SecuredAccountData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@SpringBootApplication
public class DemoApplication {

	@Autowired
	private AccountService accountService;

	@Autowired
	private PostService postService;

	@Autowired
	private FollowerService followerService;

	@Autowired
	private SecuredDataService securedDataService;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public void onStart(){

		FullName john = new FullName();
		john.setFirstName("John");
		john.setLastName("Smith");

		SecuredAccountData sad = new SecuredAccountData();
		sad.setGmail("john.smith@gmail.com");
		sad.setPassword("1");

		Account acc = new Account();
		acc.setUsername("john7");
		acc.setFullName(john);
		acc.setSecuredAccountData(sad);

		securedDataService.add(sad);
		accountService.add(acc);

		FullName tom = new FullName();
		tom.setFirstName("Tom");
		tom.setLastName("Jones");

		SecuredAccountData sad1 = new SecuredAccountData();
		sad1.setGmail("tom.jones@gmail.com");
		sad1.setPassword("1");

		Account tomAcc = new Account();
		tomAcc.setUsername("tom7");
		tomAcc.setFullName(tom);
		tomAcc.setSecuredAccountData(sad1);

		securedDataService.add(sad1);
		accountService.add(tomAcc);

		Follower follower = new Follower();
		follower.setFollowerUsername(tomAcc.getUsername());
		follower.setAccount(acc);

		followerService.add(follower);

		Follower follower1 = new Follower();
		follower1.setFollowerUsername(acc.getUsername());
		follower1.setAccount(tomAcc);

		followerService.add(follower1);

		Post post = new Post();
		post.setAccount(acc);
		post.setFullName(new FullName("John", "Smith"));
		post.setUserImageUrl("assets/images/Profile-Placeholder.png");
		post.setPostType("Image");
		post.setScript("Hello world, this is my very first post.");
		post.setImageUrl("assets/images/placeholder.png");
		post.setRatings(24);
		post.setComments(17);
		post.setShares(1);

		post.setDate(LocalDateTime.now());

//		Post post1 = new Post();
//		post1.setAccount(acc);
//		post1.setFullName(new FullName("John", "Smith"));
//		post1.setUserImageUrl("assets/images/Profile-Placeholder.png");
//		post1.setPostType("Post");
//		post1.setScript("This is my second post about ...");
//		post1.setImageUrl(null);
//		post1.setRatings(47);
//		post1.setComments(6);
//		post1.setShares(9);

		postService.addPost(post);
//		postService.addPost(post1);

	}

}
