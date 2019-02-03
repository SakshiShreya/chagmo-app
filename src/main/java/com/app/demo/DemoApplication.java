package com.app.demo;

import com.app.demo.components.services.AccountService;
import com.app.demo.components.services.FollowerService;
import com.app.demo.components.services.PostService;
import com.app.demo.entities.Follower;
import com.app.demo.entities.Post;
import com.app.demo.entities.Account;
import com.app.demo.entities.FullName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.*;

@SpringBootApplication
public class DemoApplication {

	@Autowired
	private AccountService accountService;

	@Autowired
	private PostService postService;

	@Autowired
	private FollowerService followerService;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public void onStart(){

		FullName john = new FullName();
		john.setFirstName("John");
		john.setLastName("Smith");

		Account acc = new Account();
		acc.setUsername("john7");
		acc.setGmail("john.smith@gmail.com");

		acc.setFullName(john);
		acc.setPassword("1");

		FullName tom = new FullName();
		tom.setFirstName("Tom");
		tom.setLastName("Jones");

		Account tomAcc = new Account();
		tomAcc.setUsername("tom7");
		tomAcc.setGmail("tom.jones@gmail.com");

		tomAcc.setFullName(tom);
		tomAcc.setPassword("1");

		accountService.addAccount(acc);
		accountService.addAccount(tomAcc);

		Follower follower = new Follower();
		follower.setUsername(tomAcc.getUsername());
		follower.setAccount(acc);

		followerService.add(follower);

		Follower follower1 = new Follower();
		follower1.setUsername(acc.getUsername());
		follower1.setAccount(tomAcc);

//		System.out.println(follower);

		followerService.add(follower1);

		System.out.println(follower);

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

		Post post1 = new Post();
		post1.setAccount(acc);
		post1.setFullName(new FullName("John", "Smith"));
		post1.setUserImageUrl("assets/images/Profile-Placeholder.png");
		post1.setPostType("Post");
		post1.setScript("This is my second post about ...");
		post1.setImageUrl(null);
		post1.setRatings(47);
		post1.setComments(6);
		post1.setShares(9);

		postService.addPost(post);
		postService.addPost(post1);

	}

}
