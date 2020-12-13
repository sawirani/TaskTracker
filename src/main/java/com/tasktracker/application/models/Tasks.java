package com.tasktracker.application.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


import lombok.Data;

@Entity
@Data
public class Tasks {
	
	@Id
	@Column
    private long task_id;

    @Column
    @NotNull(message="{NotNull.Task.taskName}")
    private String taskName;
    
    @Column
    @NotNull(message="{NotNull.Task.taskDescription}")
    private String taskDescription;

    @Column
    @NotNull(message="{NotNull.Task.eta}")
    private String eta;
    
    @Column
    @NotNull(message="{NotNull.Task.assigned}")
    private String assigned;

    @Column
    @NotNull(message="{NotNull.Task.points}")
    private String points;

}
