package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.CommBoard;

@Mapper
public interface CommBoardMapper {
	public List<CommBoard> selectCommBoard();
	public CommBoard selectCommBoardByNo(int articleno);
	public int insertCommBoard(CommBoard commboard);
	public int updateCommBoard(CommBoard commboard);
	public int deleteCommBoard(int articleno);
	public int selectCommCount(int articleno);
	public CommBoard selectCommAnswer(int articleno);
}