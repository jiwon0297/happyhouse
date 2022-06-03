package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.NoticeBoard;
@Mapper
public interface NoticeBoardMapper {
	public List<NoticeBoard> selectNoticeBoard();
	public NoticeBoard selectNoticeBoardByNo(int articleno);
	public int insertNoticeBoard(NoticeBoard noticeboard);
	public int updateNoticeBoard(NoticeBoard noticeboard);
	public int deleteNoticeBoard(int articleno);
	public int selectNoticeCount(int articleno);
	public NoticeBoard selectNoticeAnswer(int articleno);

}