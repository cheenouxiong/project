package com.example.demoApps.model;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@Data
public class ApplyFormModel {

	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private String position;
	private String studyLevel;
	private String school;
	private String course;
	private String congratulationEducation;
	private String company1;
	private String time1;
	private String company2;
	private String time2;
	private String company3;
	private String time3;
	private MultipartFile file1;
	private MultipartFile file2;
}
