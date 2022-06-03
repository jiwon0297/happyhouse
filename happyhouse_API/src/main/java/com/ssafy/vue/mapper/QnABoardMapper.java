package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.QnABoard;
@Mapper
public interface QnABoardMapper {
	public List<QnABoard> selectQnABoard();
	public QnABoard selectQnABoardByNo(int articleno);
	public int insertQnABoard(QnABoard qnaboard);
	public int updateQnABoard(QnABoard qnaboard);
	public int deleteQnABoard(int articleno);
	public int selectQnACount(int articleno);
	public QnABoard selectQnAAnswer(int articleno);

}