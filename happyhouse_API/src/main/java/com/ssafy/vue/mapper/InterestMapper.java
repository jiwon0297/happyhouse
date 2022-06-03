package com.ssafy.vue.mapper;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.vue.dto.InterestAptDto;
import com.ssafy.vue.dto.InterestAreaDto;


public interface InterestMapper {

	public List<InterestAptDto> getInterestApt(String userid) throws SQLException;
	public List<InterestAreaDto> getInterestArea(String userid) throws SQLException;
	public int addInterestApt(InterestAptDto interestAptDto) throws SQLException;
	public int addInterestArea(InterestAreaDto interestAreaDto) throws SQLException;
	public int removeInterestApt(String userid, String dongName, String aptName) throws SQLException;
	public int removeInterestArea(int no) throws SQLException;
	public int getCount(String userid, String dongName, String aptName) throws SQLException;
}