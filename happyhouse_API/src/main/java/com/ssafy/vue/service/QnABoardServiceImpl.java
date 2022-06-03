package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.vue.dto.QnABoard;
import com.ssafy.vue.mapper.QnABoardMapper;

@Service
public class QnABoardServiceImpl implements QnABoardService {
	
    @Autowired
	private QnABoardMapper qnaBoardMapper;

    @Override
	public List<QnABoard> retrieveQnABoard() {
		return qnaBoardMapper.selectQnABoard();
	}
    
  	@Override
	public boolean writeQnABoard(QnABoard qnaboard) {
		return qnaBoardMapper.insertQnABoard(qnaboard) == 1;
	}

	@Override
	public QnABoard detailQnABoard(int articleno) {
		return qnaBoardMapper.selectQnABoardByNo(articleno);
	}

	@Override
	@Transactional
	public boolean updateQnABoard(QnABoard qnaboard) {
		return qnaBoardMapper.updateQnABoard(qnaboard) == 1;
	}

	@Override
	@Transactional
	public boolean deleteQnABoard(int articleno) {
		return qnaBoardMapper.deleteQnABoard(articleno) == 1;
	}

	@Override
	public int selectQnACount(int articleno) {
		return qnaBoardMapper.selectQnACount(articleno);
	}

	@Override
	public QnABoard selectQnAAnswer(int articleno) {
		return qnaBoardMapper.selectQnAAnswer(articleno);
	}

}