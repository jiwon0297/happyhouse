package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.QnABoard;

public interface QnABoardService {
	public List<QnABoard> retrieveQnABoard();
	public QnABoard detailQnABoard(int articleno);
	public boolean writeQnABoard(QnABoard qnaboard);
	public boolean updateQnABoard(QnABoard qnaboard);
	public boolean deleteQnABoard(int articleno);
	public int selectQnACount(int articleno);
	public QnABoard selectQnAAnswer(int articleno);


}
