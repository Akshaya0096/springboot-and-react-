

package com.leave.leaves.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.leave.leaves.exception.Resourcenotfound;
import com.leave.leaves.model.leave;
import com.leave.leaves.repository.leaveRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/leav")
public class leaveController {
    
    @Autowired
    private leaveRepository leaveRepository;

    @GetMapping
    public List<leave> getAllLeaves(){
        return leaveRepository.findAll();
        
    }

    @PostMapping
    public leave createleave(@RequestBody leave leave){
        return leaveRepository.save(leave);
    }

    @GetMapping("/{id}")
    public ResponseEntity<leave> getleaveById(@PathVariable long id){
        leave leave=leaveRepository.findById(id).orElseThrow(()->new Resourcenotfound("leave not Exists with id :"+id));
        return ResponseEntity.ok(leave);
    }

    @PutMapping("/{id}")
    public ResponseEntity<leave> updateleave(@PathVariable long id,@RequestBody leave leaveDetails){
     leave updateleave =leaveRepository.findById(id).orElseThrow(()-> new Resourcenotfound("leave not exist with id: " + id));
      
    updateleave.setName(leaveDetails.getName());
    updateleave.setJobposition(leaveDetails.getJobposition());
    updateleave.setBranch(leaveDetails.getBranch());
    updateleave.setDate(leaveDetails.getDate());

     leaveRepository.save(updateleave);
     return ResponseEntity.ok(updateleave);
}


@DeleteMapping("{id}")
public ResponseEntity<HttpStatus> deleteleave(@PathVariable long id){

   leave leave = leaveRepository.findById(id)
            .orElseThrow(() -> new Resourcenotfound("leave not exist with id: " + id));

            leaveRepository.delete(leave);

    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
}
@GetMapping("/api/leaves/filter")
    public List<leave> filterLeavesByDate(@RequestParam Date filterDate) {
        return leaveRepository.findByDate(filterDate);
}
}
