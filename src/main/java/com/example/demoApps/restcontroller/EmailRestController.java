package com.example.demoApps.restcontroller;

import com.example.demoApps.model.ApplyFormModel;
import com.example.demoApps.model.ResponseModel;
import com.example.demoApps.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class EmailRestController {
	@Autowired
	private EmailService emailService;


	@PostMapping("/employee/submit-form")
	public ResponseModel<Void> sendToEmailFile(@ModelAttribute ApplyFormModel applyFormModel) {
		return this.emailService.sendEmailFile(applyFormModel);
	}


}
