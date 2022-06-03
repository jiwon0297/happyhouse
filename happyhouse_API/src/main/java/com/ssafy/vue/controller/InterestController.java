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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vue.dto.MemberDto;
import com.ssafy.vue.dto.InterestAptDto;
import com.ssafy.vue.dto.InterestAreaDto;
import com.ssafy.vue.service.InterestService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/interest")
public class InterestController {

	private static final Logger logger = LoggerFactory.getLogger(InterestController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private InterestService interestService;

    @ApiOperation(value = "모든 관심 매물의 정보를 반환한다.", response = List.class)
	@GetMapping("/apt")
	public ResponseEntity<List<InterestAptDto>> getInterestApt(@RequestParam("userid") String userid) throws Exception {
		logger.debug("getInterestApt - 호출");
		logger.debug(userid);
		return new ResponseEntity<List<InterestAptDto>>(interestService.getInterestApt(userid), HttpStatus.OK);
	}
    
    @ApiOperation(value = "모든 관심 지역의 정보를 반환한다.", response = List.class)
	@GetMapping("/area")
	public ResponseEntity<List<InterestAreaDto>> getInterestArea(@RequestParam("userid") String userid) throws Exception {
		logger.debug("getInterestArea - 호출");
		return new ResponseEntity<List<InterestAreaDto>>(interestService.getInterestArea(userid), HttpStatus.OK);
	}

    @ApiOperation(value = "새로운 관심 매물을 추가한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/apt")
	public ResponseEntity<String> addInterestApt(@RequestBody InterestAptDto interestAptDto) throws Exception {
		logger.debug("addInterestApt - 호출");
		if (interestService.addInterestApt(interestAptDto)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "새로운 관심 지역을 추가한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/area")
	public ResponseEntity<String> addInterestArea(@RequestBody InterestAreaDto interestAreaDto) throws Exception {
		logger.debug("addInterestArea - 호출");
		logger.debug(interestAreaDto.toString());
		if (interestService.addInterestArea(interestAreaDto)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "번호에 해당하는 관심매물의 정보를 삭제한다. 그리고 DB삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("/apt")
	public ResponseEntity<String> removeInterestApt(@RequestParam("userid") String userid, @RequestParam("dongName") String dongName, @RequestParam("aptName") String aptName) throws Exception {
		logger.debug("removeInterestApt - 호출");
		if (interestService.removeInterestApt(userid, dongName, aptName)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "번호에 해당하는 관심지역의 정보를 삭제한다. 그리고 DB삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("/area/{no}")
	public ResponseEntity<String> removeInterestArea(@PathVariable("no") int no) throws Exception {
		logger.debug("removeInterestApt - 호출");
		if (interestService.removeInterestArea(no)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
    
    @ApiOperation(value = "모든 관심 매물의 정보를 반환한다.", response = List.class)
	@GetMapping("/apt/count")
	public ResponseEntity<String> getCount(@RequestParam("userid") String userid, @RequestParam("dongName") String dongName, @RequestParam("aptName") String aptName) throws Exception {
		logger.debug("getInterestApt - 호출");
		if (interestService.getCount(userid, dongName, aptName)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
    
}