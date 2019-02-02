package com.app.demo;

import com.app.demo.ad.SubjectRepository;
import com.app.demo.components.services.AccountService;
import com.app.demo.components.services.PostService;
import com.app.demo.entities.Post;
import com.app.demo.models.Subject;
import com.app.demo.entities.Account;
import com.app.demo.entities.FullName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	@Autowired
	private AccountService accountService;

	@Autowired
	private PostService postService;

	@Autowired
	private SubjectRepository subjectRepo;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public void onStart(){

		FullName fullName = new FullName();
		fullName.setFirstName("John");
		fullName.setLastName("Smith");

		Account acc = new Account();
		acc.setUsername("john7");
		acc.setGmail("john.smith@gmail.com");

		acc.setFullName(fullName);
		acc.setPassword("1");

		accountService.addAccount(acc);

		Post post = new Post();
		post.setAccount(acc);
		post.setFullName(new FullName("John", "Smith"));
		post.setUserImageUrl("account.png");
		post.setPostType("Image");
		post.setScript(null);
		post.setImageUrl("cat.png");
		post.setRatings(24);
		post.setComments(17);
		post.setShares(1);

		postService.addPost(post);
		System.out.println(post.toString());

//		Subject book = new Subject();
//		book.setName("Books");
//
//		Subject music = new Subject();
//		music.setName("Music");
//
//		Subject art = new Subject();
//		art.setName("Art");
//
//		subjectRepo.save(book);
//		subjectRepo.save(music);
//		subjectRepo.save(art);

	}

}
