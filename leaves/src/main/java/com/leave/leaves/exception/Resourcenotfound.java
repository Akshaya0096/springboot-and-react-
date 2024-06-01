package com.leave.leaves.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value =HttpStatus.NOT_FOUND)
public class Resourcenotfound extends RuntimeException {
    
    public Resourcenotfound(String message){
        super(message);
  
  
      }
}
