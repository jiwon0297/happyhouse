package com.ssafy.vue.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/file")
public class FileController {

	@CrossOrigin("*")
	@PostMapping(value = "/upload")
	public @ResponseBody String requestUploadFile(@RequestParam("fileList") List<MultipartFile> filelist) {
		String path = "";
		try {
			MultipartFile file = filelist.get(0);
			String today = new SimpleDateFormat("yyMMdd").format(new Date());
			String saveFolder = "./src/main/resources/static/images/" + today + "/";
			File folder = new File(saveFolder);
			if (!folder.exists())
				folder.mkdirs();

			FileOutputStream writer = new FileOutputStream(saveFolder + file.getOriginalFilename());
			writer.write(file.getBytes());
			writer.close();
			path = "/images/" + today + "/" + file.getOriginalFilename();
		} catch (Exception e) {
			e.printStackTrace();
			return "upload fail";
		}
		return path;
	}
}
