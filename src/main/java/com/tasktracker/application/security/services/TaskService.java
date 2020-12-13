package com.tasktracker.application.security.services;

import java.util.List;

import org.springframework.stereotype.Component;

import com.tasktracker.application.models.Task;
import com.tasktracker.application.repository.TaskRepository;

@Component
public class TaskService {
	
	private TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getTasks() {
        return taskRepository.findAll();
    }
    
    public Task saveTask(Task task) {
    	return taskRepository.save(task);
    }
    public Task updateTask(Task task) {
    	return taskRepository.save(task);
    }

}
