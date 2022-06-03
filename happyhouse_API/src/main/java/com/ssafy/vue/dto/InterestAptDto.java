package com.ssafy.vue.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "InterestAptDto : 관심매물정보", description = "회원의 관심 매물 정보를 나타낸다.")
public class InterestAptDto {

	@ApiModelProperty(value = "관심매물 번호")
	private int no;
	@ApiModelProperty(value = "회원 아이디")
	private String userid;
	@ApiModelProperty(value = "관심매물의 행정동")
	private String dongName;
	@ApiModelProperty(value = "관심매물의 아파트명")
	private String aptName;
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getDongName() {
		return dongName;
	}
	public void setDongName(String dongName) {
		this.dongName = dongName;
	}
	public String getAptName() {
		return aptName;
	}
	public void setAptName(String aptName) {
		this.aptName = aptName;
	}
	public InterestAptDto(int no, String userid, String dongName, String aptName) {
		super();
		this.no = no;
		this.userid = userid;
		this.dongName = dongName;
		this.aptName = aptName;
	}

	
}
