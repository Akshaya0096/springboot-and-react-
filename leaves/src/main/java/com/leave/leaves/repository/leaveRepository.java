package com.leave.leaves.repository;

import java.sql.Date;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.leave.leaves.model.leave;

public interface leaveRepository extends JpaRepository<leave, Long> {
    List<leave> findByDate(Date date);
}






