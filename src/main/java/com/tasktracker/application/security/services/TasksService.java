package com.tasktracker.application.security.services;

import java.util.List;

import org.springframework.stereotype.Component;

import com.tasktracker.application.models.Tasks;
import com.tasktracker.application.repository.TasksRepository;

@Component
public class TasksService {
	
	private TasksRepository tasksRepository;

    public TasksService(TasksRepository tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    public List<Tasks> getTasks() {
        return tasksRepository.findAll();
    }
    
    public Tasks saveTask(Tasks tasks) {
    	return tasksRepository.save(tasks);
    }
    public Tasks updateTask(Tasks tasks) {
    	return tasksRepository.save(tasks);
    }

}
