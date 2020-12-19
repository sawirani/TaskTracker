package com.tasktracker.application.security.services;

import com.tasktracker.application.models.Comment;
import com.tasktracker.application.repository.CommentRepository;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class CommentService {

  private CommentRepository commentRepository;

  public CommentService(CommentRepository commentRepository) {
    this.commentRepository = commentRepository;
  }

  public List<Comment> getCommetsByTaskId(Long task_id) {
    return commentRepository.findByTaskId(task_id);
  }

  public Comment saveComment(Comment comment) {
    return commentRepository.save(comment);
  }

}
