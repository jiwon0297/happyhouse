package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.vue.dto.NoticeBoard;
import com.ssafy.vue.mapper.NoticeBoardMapper;

@Service
public class NoticeBoardServiceImpl implements NoticeBoardService {
	
    @Autowired
	private NoticeBoardMapper noticeBoardMapper;

    @Override
	public List<NoticeBoard> retrieveNoticeBoard() {
		return noticeBoardMapper.selectNoticeBoard();
	}
    
  	@Override
	public boolean writeNoticeBoard(NoticeBoard noticeboard) {
		return noticeBoardMapper.insertNoticeBoard(noticeboard) == 1;
	}

	@Override
	public NoticeBoard detailNoticeBoard(int articleno) {
		return noticeBoardMapper.selectNoticeBoardByNo(articleno);
	}

	@Override
	@Transactional
	public boolean updateNoticeBoard(NoticeBoard noticeboard) {
		return noticeBoardMapper.updateNoticeBoard(noticeboard) == 1;
	}

	@Override
	@Transactional
	public boolean deleteNoticeBoard(int articleno) {
		return noticeBoardMapper.deleteNoticeBoard(articleno) == 1;
	}

	@Override
	public int selectNoticeCount(int articleno) {
		return noticeBoardMapper.selectNoticeCount(articleno);
	}

	@Override
	public NoticeBoard selectNoticeAnswer(int articleno) {
		return noticeBoardMapper.selectNoticeAnswer(articleno);
	}

}