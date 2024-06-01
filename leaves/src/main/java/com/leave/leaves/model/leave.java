package com.leave.leaves.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Getter;

import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="leav")
public class leave {
    

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)

   private long id;
   @Column(name="name")
   private String name;
   @Column(name = "jobposition")
   private String jobposition;
   @Column(name="branch")
   private String branch;
   @Column(name="date")
   private Date date;
   @Column(name="status")
   private String status;
}
