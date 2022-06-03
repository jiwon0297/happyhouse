package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vue.dto.InterestAptDto;
import com.ssafy.vue.dto.InterestAreaDto;
import com.ssafy.vue.mapper.InterestMapper;

@Service
public class InterestServiceImpl implements InterestService {

	@Autowired
	private InterestMapper interestMapper;
	
	@Override
	public List<InterestAptDto> getInterestApt(String userid) throws Exception {
		return interestMapper.getInterestApt(userid);
	}

	@Override
	public List<InterestAreaDto> getInterestArea(String userid) throws Exception {
		return interestMapper.getInterestArea(userid);
	}

	@Override
	public boolean addInterestApt(InterestAptDto interestAptDto) throws Exception {
		return interestMapper.addInterestApt(interestAptDto) == 1;
	}

	@Override
	public boolean addInterestArea(InterestAreaDto interestAreaDto) throws Exception {
		return interestMapper.addInterestArea(interestAreaDto) == 1;
	}

	@Override
	public boolean removeInterestApt(String userid, String dongName, String aptName) throws Exception {
		return interestMapper.removeInterestApt(userid, dongName, aptName) == 1;
	}

	@Override
	public boolean removeInterestArea(int no) throws Exception {
		return interestMapper.removeInterestArea(no) == 1;
	}

	@Override
	public boolean getCount(String userid, String dongName, String aptName) throws Exception {
		return interestMapper.getCount(userid, dongName, aptName) >= 1;
	}

}
