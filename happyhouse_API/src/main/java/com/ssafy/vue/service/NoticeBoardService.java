package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.NoticeBoard;

public interface NoticeBoardService {
	public List<NoticeBoard> retrieveNoticeBoard();
	public NoticeBoard detailNoticeBoard(int articleno);
	public boolean writeNoticeBoard(NoticeBoard noticeboard);
	public boolean updateNoticeBoard(NoticeBoard noticeboard);
	public boolean deleteNoticeBoard(int articleno);
	public int selectNoticeCount(int articleno);
	public NoticeBoard selectNoticeAnswer(int articleno);


}
