package com.ssafy.vue.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "Comments (게시글정보)", description = "댓글번호, 작성자아이디, 댓글내용, 원본글번호, 작성일을 가진   Domain Class")
public class Comments {
	@ApiModelProperty(value = "댓글번호")
	private int commentno;
	@ApiModelProperty(value = "작성자아이디")
	private String userid;
	@ApiModelProperty(value = "댓글내용")
	private String comment;
	@ApiModelProperty(value = "작성일")
	private String regtime;
	@ApiModelProperty(value = "원본글번호")
	private int articleno;
	public int getCommentno() {
		return commentno;
	}
	public void setCommentno(int commentno) {
		this.commentno = commentno;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getRegtime() {
		return regtime;
	}
	public void setRegtime(String regtime) {
		this.regtime = regtime;
	}
	public int getArticleno() {
		return articleno;
	}
	public void setArticleno(int articleno) {
		this.articleno = articleno;
	}
	public Comments(int commentno, String userid, String comment, String regtime, int articleno) {
		super();
		this.commentno = commentno;
		this.userid = userid;
		this.comment = comment;
		this.regtime = regtime;
		this.articleno = articleno;
	}

}