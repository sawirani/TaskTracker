package com.tasktracker.application.links;

import org.springframework.stereotype.Component;

@Component
public class UserLinks {
    public static final String LIST_USERS = "/users";
    public static final String ADD_USER = "/user";
    public static final String UPDATE_USER = "/user_update";
    public static final String DELETE_USER = "/user_delete";
}
