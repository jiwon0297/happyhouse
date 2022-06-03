package com.ssafy.vue.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vue.dto.NoticeBoard;
import com.ssafy.vue.service.NoticeBoardService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/noticeboard")
public class NoticeBoardController {

	private static final Logger logger = LoggerFactory.getLogger(NoticeBoardController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private NoticeBoardService noticeBoardService;

    @ApiOperation(value = "모든 게시글의 정보를 반환한다.", response = List.class)
	@GetMapping
	public ResponseEntity<List<NoticeBoard>> retrieveNoticeBoard() throws Exception {
		logger.debug("retrieveNoticeBoard - 호출");
		return new ResponseEntity<List<NoticeBoard>>(noticeBoardService.retrieveNoticeBoard(), HttpStatus.OK);
	}

    @ApiOperation(value = "글번호에 해당하는 게시글의 정보를 반환한다.", response = NoticeBoard.class)    
	@GetMapping("{articleno}")
	public ResponseEntity<NoticeBoard> detailNoticeBoard(@PathVariable int articleno) {
		logger.debug("detailBoard - 호출");
		return new ResponseEntity<NoticeBoard>(noticeBoardService.detailNoticeBoard(articleno), HttpStatus.OK);
	}

    @ApiOperation(value = "새로운 게시글 정보를 입력한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping
	public ResponseEntity<String> writeNoticeBoard(@RequestBody NoticeBoard noticeboard) {
		logger.debug("writeNoticeBoard - 호출");
		if (noticeBoardService.writeNoticeBoard(noticeboard)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "글번호에 해당하는 게시글의 정보를 수정한다. 그리고 DB수정 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping("{articleno}")
	public ResponseEntity<String> updateNoticeBoard(@RequestBody NoticeBoard noticeboard) {
		logger.debug("updateNoticeBoard - 호출");
		logger.debug("" + noticeboard);
		
		if (noticeBoardService.updateNoticeBoard(noticeboard)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "글번호에 해당하는 게시글의 정보를 삭제한다. 그리고 DB삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("{articleno}")
	public ResponseEntity<String> deleteNoticeBoard(@PathVariable int articleno) {
		logger.debug("deleteNoticeBoard - 호출");
		if (noticeBoardService.deleteNoticeBoard(articleno)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
    
    @ApiOperation(value = "답변 게시글의 개수를 반환한다.", response = List.class)
	@GetMapping("/count/{articleno}")
	public ResponseEntity<Integer> countNoticeBoard(@PathVariable int articleno) throws Exception {
		logger.debug("retrieveNoticeBoard - 호출");
		return new ResponseEntity<Integer>(noticeBoardService.selectNoticeCount(articleno), HttpStatus.OK);
	}
    
    @ApiOperation(value = "글번호에 해당하는 답변의 정보를 반환한다.", response = NoticeBoard.class)    
   	@GetMapping("/answer/{articleno}")
   	public ResponseEntity<NoticeBoard> answerNoticeBoard(@PathVariable int articleno) {
   		logger.debug("answer - 호출");
   		return new ResponseEntity<NoticeBoard>(noticeBoardService.selectNoticeAnswer(articleno), HttpStatus.OK);
   	}

}