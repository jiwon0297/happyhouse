package com.ssafy.vue.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "InterestAreaDto : 관심매물정보", description = "회원의 관심 지역 정보를 나타낸다.")
public class InterestAreaDto {

	@ApiModelProperty(value = "관심매물 번호")
	private int no;
	@ApiModelProperty(value = "회원 아이디")
	private String userid;
	@ApiModelProperty(value = "관심매물의 행정동 코드")
	private String dongCode;
	@ApiModelProperty(value = "관심매물의 시도명")
	private String sidoName;
	@ApiModelProperty(value = "관심매물의 구군명")
	private String gugunName;
	@ApiModelProperty(value = "관심매물의 행정동명")
	private String dongName;
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
	public String getDongCode() {
		return dongCode;
	}
	public void setDongCode(String dongCode) {
		this.dongCode = dongCode;
	}
	public String getSidoName() {
		return sidoName;
	}
	public void setSidoName(String sidoName) {
		this.sidoName = sidoName;
	}
	public String getGugunName() {
		return gugunName;
	}
	public void setGugunName(String gugunName) {
		this.gugunName = gugunName;
	}
	public String getDongName() {
		return dongName;
	}
	public void setDongName(String dongName) {
		this.dongName = dongName;
	}
	public InterestAreaDto(int no, String userid, String dongCode, String sidoName, String gugunName, String dongName) {
		super();
		this.no = no;
		this.userid = userid;
		this.dongCode = dongCode;
		this.sidoName = sidoName;
		this.gugunName = gugunName;
		this.dongName = dongName;
	}
	@Override
	public String toString() {
		return "InterestAreaDto [no=" + no + ", userid=" + userid + ", dongCode=" + dongCode + ", sidoName=" + sidoName
				+ ", gugunName=" + gugunName + ", dongName=" + dongName + "]";
	}
	
	
	
}
