package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vue.dto.Comments;
import com.ssafy.vue.mapper.CommentsMapper;

@Service
public class CommentsServiceImpl implements CommentsService {
	
    @Autowired
	private CommentsMapper commentsMapper;

	@Override
	public List<Comments> retrieveComments(int articleno) {
		return commentsMapper.selectComments(articleno);
	}

	@Override
	public boolean writeComment(Comments comments) {
		return commentsMapper.insertComment(comments) == 1;
	}

	@Override
	public boolean updateComment(Comments comments) {
		return commentsMapper.updateComment(comments) == 1;
	}

	@Override
	public boolean deleteComment(int commentno) {
		return commentsMapper.deleteComment(commentno) == 1;
	}

	@Override
	public int selectCommentCount(int commentno) {
		return commentsMapper.selectCommentCount(commentno);
	}

}