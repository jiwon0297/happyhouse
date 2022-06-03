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

import com.ssafy.vue.dto.CommBoard;
import com.ssafy.vue.service.CommBoardService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/commboard")
public class CommBoardController {

	private static final Logger logger = LoggerFactory.getLogger(CommBoardController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private CommBoardService commBoardService;

    @ApiOperation(value = "모든 게시글의 정보를 반환한다.", response = List.class)
	@GetMapping
	public ResponseEntity<List<CommBoard>> retrieveCommBoard() throws Exception {
		logger.debug("retrieveCommBoard - 호출");
		return new ResponseEntity<List<CommBoard>>(commBoardService.retrieveCommBoard(), HttpStatus.OK);
	}

    @ApiOperation(value = "글번호에 해당하는 게시글의 정보를 반환한다.", response = CommBoard.class)    
	@GetMapping("{articleno}")
	public ResponseEntity<CommBoard> detailCommBoard(@PathVariable int articleno) {
		logger.debug("detailBoard - 호출");
		return new ResponseEntity<CommBoard>(commBoardService.detailCommBoard(articleno), HttpStatus.OK);
	}
    
    @ApiOperation(value = "새로운 게시글 정보를 입력한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping
	public ResponseEntity<String> writeCommBoard(@RequestBody CommBoard commboard) {
		logger.debug("writeCommBoard - 호출");
		logger.debug("savefile?"+commboard.getSavefile());
		if (commBoardService.writeCommBoard(commboard)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "글번호에 해당하는 게시글의 정보를 수정한다. 그리고 DB수정 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping("{articleno}")
	public ResponseEntity<String> updateCommBoard(@RequestBody CommBoard commboard) {
		logger.debug("updateCommBoard - 호출");
		logger.debug("" + commboard);
		
		if (commBoardService.updateCommBoard(commboard)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "글번호에 해당하는 게시글의 정보를 삭제한다. 그리고 DB삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("{articleno}")
	public ResponseEntity<String> deleteCommBoard(@PathVariable int articleno) {
		logger.debug("deleteCommBoard - 호출");
		if (commBoardService.deleteCommBoard(articleno)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
    
    @ApiOperation(value = "답변 게시글의 개수를 반환한다.", response = List.class)
	@GetMapping("/count/{articleno}")
	public ResponseEntity<Integer> countCommBoard(@PathVariable int articleno) throws Exception {
		logger.debug("retrieveCommBoard - 호출");
		return new ResponseEntity<Integer>(commBoardService.selectCommCount(articleno), HttpStatus.OK);
	}
    
    @ApiOperation(value = "글번호에 해당하는 답변의 정보를 반환한다.", response = CommBoard.class)    
   	@GetMapping("/answer/{articleno}")
   	public ResponseEntity<CommBoard> answerCommBoard(@PathVariable int articleno) {
   		logger.debug("answer - 호출");
   		return new ResponseEntity<CommBoard>(commBoardService.selectCommAnswer(articleno), HttpStatus.OK);
   	}

}