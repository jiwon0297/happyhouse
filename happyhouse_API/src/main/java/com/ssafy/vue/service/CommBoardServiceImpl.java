package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.vue.dto.CommBoard;
import com.ssafy.vue.mapper.CommBoardMapper;

@Service
public class CommBoardServiceImpl implements CommBoardService {
	
    @Autowired
	private CommBoardMapper commBoardMapper;

    @Override
	public List<CommBoard> retrieveCommBoard() {
		return commBoardMapper.selectCommBoard();
	}
    
  	@Override
	public boolean writeCommBoard(CommBoard commboard) {
		return commBoardMapper.insertCommBoard(commboard) == 1;
	}

	@Override
	public CommBoard detailCommBoard(int articleno) {
		return commBoardMapper.selectCommBoardByNo(articleno);
	}

	@Override
	@Transactional
	public boolean updateCommBoard(CommBoard commboard) {
		return commBoardMapper.updateCommBoard(commboard) == 1;
	}

	@Override
	@Transactional
	public boolean deleteCommBoard(int articleno) {
		return commBoardMapper.deleteCommBoard(articleno) == 1;
	}

	@Override
	public int selectCommCount(int articleno) {
		return commBoardMapper.selectCommCount(articleno);
	}

	@Override
	public CommBoard selectCommAnswer(int articleno) {
		return commBoardMapper.selectCommAnswer(articleno);
	}

}