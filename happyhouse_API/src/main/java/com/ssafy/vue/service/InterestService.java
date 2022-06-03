package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.InterestAptDto;
import com.ssafy.vue.dto.InterestAreaDto;

public interface InterestService {
	
	public List<InterestAptDto> getInterestApt(String userid) throws Exception;
	public List<InterestAreaDto> getInterestArea(String userid) throws Exception;
	public boolean addInterestApt(InterestAptDto interestAptDto) throws Exception;
	public boolean addInterestArea(InterestAreaDto interestAreaDto) throws Exception;
	public boolean removeInterestApt(String userid, String dongName, String aptName) throws Exception;
	public boolean removeInterestArea(int no) throws Exception;
	public boolean getCount(String userid, String dongName, String aptName) throws Exception;
}
