package com.tasktracker.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tasktracker.application.models.Tasks;
import com.tasktracker.application.links.TaskLinks;
import com.tasktracker.application.security.services.TasksService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/")
public class TasksController {
	
	@Autowired
	TasksService tasksService;
	
	@GetMapping(path = TaskLinks.LIST_TASKS)
    public ResponseEntity<?> listTasks() {
        log.info("UsersController:  list tasks");
        List<Tasks> resource = tasksService.getTasks();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = TaskLinks.ADD_TASK)
	public ResponseEntity<?> saveTask(@RequestBody Tasks task) {
        log.info("UsersController:  add task");
        Tasks resource = tasksService.saveTask(task);
        return ResponseEntity.ok(resource);
    }

    // @PutMapping(path = TaskLinks.UPDATE_TASK)
    @RequestMapping(value = TaskLinks.UPDATE_TASK, method = RequestMethod.PUT)
	public ResponseEntity<?> updateTask(@RequestBody Tasks task) {
        log.info("UsersController:  update task");
        Tasks resource = tasksService.updateTask(task);
        return ResponseEntity.ok(resource);
    }

    @RequestMapping(value = TaskLinks.UPDATE_TASK, method = RequestMethod.PATCH)
	public ResponseEntity<?> updateAnotherTask(@RequestBody Tasks task) {
        log.info("UsersController:  update task");
        Tasks resource = tasksService.updateTask(task);
        return ResponseEntity.ok(resource);
    }
}
