package com.tasktracker.application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tasktracker.application.models.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
  List<Task> findByResolved(boolean resolved);

  List<Task> findByTaskTitleContaining(String taskTitle);
}


// package com.tasktracker.application.repository;

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
// import org.springframework.data.querydsl.QuerydslPredicateExecutor;
// import org.springframework.data.rest.core.annotation.RepositoryRestResource;

// import com.tasktracker.application.models.Tasks;

// @RepositoryRestResource()
// public interface TasksRepository extends JpaRepository<Tasks, Integer>, JpaSpecificationExecutor<Tasks>, QuerydslPredicateExecutor<Tasks> {}

