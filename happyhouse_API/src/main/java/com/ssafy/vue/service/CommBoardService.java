package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.CommBoard;

public interface CommBoardService {
	public List<CommBoard> retrieveCommBoard();
	public CommBoard detailCommBoard(int articleno);
	public boolean writeCommBoard(CommBoard commboard);
	public boolean updateCommBoard(CommBoard commboard);
	public boolean deleteCommBoard(int articleno);
	public int selectCommCount(int articleno);
	public CommBoard selectCommAnswer(int articleno);
}
