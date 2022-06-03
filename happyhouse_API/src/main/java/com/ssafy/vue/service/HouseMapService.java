package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.DongCodeDto;
import com.ssafy.vue.dto.HouseInfoDto;
import com.ssafy.vue.dto.SidoGugunCodeDto;

public interface HouseMapService {

	List<SidoGugunCodeDto> getSido() throws Exception;
	List<SidoGugunCodeDto> getGugunInSido(String sido) throws Exception;
	List<HouseInfoDto> getDongInGugun(String gugun) throws Exception;
	List<HouseInfoDto> getAptInDong(String dong) throws Exception;
	DongCodeDto getDongCode(String sidoName, String gugunName, String dongName) throws Exception;
	DongCodeDto getDongCode2(String dongName) throws Exception;

	
}
