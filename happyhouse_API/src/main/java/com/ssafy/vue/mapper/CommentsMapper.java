package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.Comments;
@Mapper
public interface CommentsMapper {
	public List<Comments> selectComments(int articleno);
	public Comments selectCommentsByNo(int commentno);
	public int insertComment(Comments comments);
	public int updateComment(Comments Comment);
	public int deleteComment(int commentno);
	public int selectCommentCount(int commentno);

}