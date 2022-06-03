package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.Comments;

public interface CommentsService {
	public List<Comments> retrieveComments(int articleno);
	public boolean writeComment(Comments commboard);
	public boolean updateComment(Comments commboard);
	public boolean deleteComment(int commentno);
	public int selectCommentCount(int commentno);

}
