package com.ssafy.vue.mapper;

import java.sql.SQLException;

import com.ssafy.vue.dto.MemberDto;


public interface MemberMapper {

	public MemberDto login(MemberDto memberDto) throws SQLException;
	public MemberDto userInfo(String userid) throws SQLException;
	public int regist(MemberDto memberDto) throws SQLException;
	public int idCheck(String userid) throws SQLException;
	public int update(MemberDto memberDto) throws SQLException;
	public int delete(String userid) throws SQLException;
	public String findpwd(String userid, String email, String username);

}