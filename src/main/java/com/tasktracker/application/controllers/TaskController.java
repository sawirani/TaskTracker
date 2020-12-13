package com.tasktracker.application.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



import com.tasktracker.application.models.Task;
import com.tasktracker.application.links.TaskLinks;
import com.tasktracker.application.security.services.TaskService;
import com.tasktracker.application.repository.TaskRepository;


import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class TaskController {

	@Autowired
	TaskRepository taskRepository;

	@GetMapping("/tasks")
	public ResponseEntity<List<Task>> getAllTasks(@RequestParam(required = false) String taskTitle) {
		try {
			List<Task> tasks = new ArrayList<Task>();

			if (taskTitle == null)
				taskRepository.findAll().forEach(tasks::add);
			else
				taskRepository.findByTaskTitleContaining(taskTitle).forEach(tasks::add);

			if (tasks.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(tasks, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/tasks/{id}")
	public ResponseEntity<Task> getTaskById(@PathVariable("id") long id) {
		Optional<Task> taskData = taskRepository.findById(id);

		if (taskData.isPresent()) {
			return new ResponseEntity<>(taskData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/tasks")
	public ResponseEntity<Task> createTask(@RequestBody Task task) {
		try {
			Task _task = taskRepository
					.save(new Task(task.getTaskTitle(), task.getTaskDescription(), task.getEta(), task.getAssigned(), task.getPoints(), false));
			return new ResponseEntity<>(_task, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/tasks/{task_id}")
	public ResponseEntity<Task> updateTask(@PathVariable("task_id") long task_id, @RequestBody Task task) {
		Optional<Task> taskData = taskRepository.findById(task_id);

		if (taskData.isPresent()) {
			Task _task = taskData.get();
			_task.setTaskTitle(task.getTaskTitle());
			_task.setTaskDescription(task.getTaskDescription());
			_task.setEta(task.getEta());
			_task.setAssigned(task.getAssigned());
			_task.setPoints(task.getPoints());
			_task.setResolved(task.isResolved());
			return new ResponseEntity<>(taskRepository.save(_task), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/tasks/{task_id}")
	public ResponseEntity<HttpStatus> deleteTask(@PathVariable("task_id") long task_id) {
		try {
			taskRepository.deleteById(task_id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/tasks")
	public ResponseEntity<HttpStatus> deleteAllTasks() {
		try {
			taskRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/tasks/resolved")
	public ResponseEntity<List<Task>> findByResolved() {
		try {
			List<Task> tasks = taskRepository.findByResolved(true);

			if (tasks.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(tasks, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
