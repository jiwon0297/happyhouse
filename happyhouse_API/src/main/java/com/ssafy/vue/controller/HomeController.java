package com.ssafy.vue.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/home")
@CrossOrigin(origins = { "*" }, maxAge = 6000)
public class HomeController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

    @ApiOperation(value = "뉴스기사를 크롤링한다.", response = List.class)
	@GetMapping
	public ResponseEntity<List<String>> getNews() throws Exception {
		logger.debug("getNews - 호출");
		String URL_news = "https://land.naver.com/news/headline.naver";
		Document doc_news;
		List<String> list = new ArrayList<>();
		
		try {
			doc_news = Jsoup.connect(URL_news).get();
			Elements titlelist =doc_news.select(".news_list dt");
			Elements newslist =doc_news.select(".news_list dd");
			String title1 = titlelist.get(0).text();
			String article1 = newslist.get(0).text();
			String url1 = "https://land.naver.com/"+String.valueOf(titlelist.get(0)).replace("amp;", "").split("\"")[1];
			String title2 = titlelist.get(1).text();
			String article2 = newslist.get(1).text();
			String url2 = "https://land.naver.com/"+String.valueOf(titlelist.get(1)).replace("amp;", "").split("\"")[1];
			list.add(title1);
			list.add(article1);
			list.add(url1);
			list.add(title2);
			list.add(article2);
			list.add(url2);
		
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		ResponseEntity<List<String>> rpe = new ResponseEntity<List<String>>(list, HttpStatus.OK);
		return rpe;
	}
}