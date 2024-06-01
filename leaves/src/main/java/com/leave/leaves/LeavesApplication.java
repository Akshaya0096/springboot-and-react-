package com.leave.leaves;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.leave.leaves.repository.leaveRepository;

@SpringBootApplication
public class LeavesApplication implements CommandLineRunner{
	public LeavesApplication(leaveRepository leaveRepository){

	}


	public static void main(String[] args) {
		SpringApplication.run(LeavesApplication.class, args);
	};

	@Override
    public void run(String... args) throws Exception{
		
	} 

}


