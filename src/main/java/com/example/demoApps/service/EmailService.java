package com.example.demoApps.service;

import com.example.demoApps.component.Emailcomponent;
import com.example.demoApps.model.ApplyFormModel;
import com.example.demoApps.model.ResponseModel;
import jakarta.activation.DataHandler;
import jakarta.activation.DataSource;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeBodyPart;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.internet.MimeMultipart;
import jakarta.mail.util.ByteArrayDataSource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Properties;

@Service
@Slf4j
public class EmailService {

	@Autowired
	private JavaMailSender javaMailSender;
	@Autowired
	private Emailcomponent emailcomponent;
	public EmailService() {
	}




	public ResponseModel<Void> sendEmailFile(ApplyFormModel applyFormModel) {
		ResponseModel<Void>responseModel = new ResponseModel<>();
		log.info("apply {}",applyFormModel);

		List<String> getError =this.emailcomponent.ValidateApplyForm(applyFormModel);
		log.info("aaaaaaaa {}",getError);
		if(!getError.isEmpty())
		{
			responseModel.setStatus(400);
			responseModel.setDescription("Error list: "+getError+"");
			return responseModel;
		}
		String from ="nouxiong0@gmail.com";
		String To ="pobtsuas333@gmail.com";
		String Subjectname="new apply : ";
		SimpleMailMessage message = new SimpleMailMessage();

		MimeMessage minemessage = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = null;
		try {
			helper = new MimeMessageHelper(minemessage, true);

			helper.setSubject(Subjectname);
			helper.setFrom(from);
//			helper.setTo("lizm.beary@gmail.com");
//			helper.setTo("chat.ps.2013@gmail.com");
			helper.setTo(To);

			String company2 ="",time2="",company3="", time3="";
			if(applyFormModel.getCompany2()==null || applyFormModel.getTime2()==null || applyFormModel.getCompany3()==null
					|| applyFormModel.getTime3()==null)
			{
				company2="";
				company3="";
				time2="";
				time3="";
			}
			else {
				company2="<br>company2 : "+applyFormModel.getCompany2()+",</br>";
				time2 =" <br>time2 : "+applyFormModel.getTime2()+",</br,>";
				company3="<br>company3 : "+applyFormModel.getCompany3()+",</br>";
				time3="<br> time3 : "+applyFormModel.getTime3()+",</br>";
			}

			helper.setText("<br><i>Submit information.</i></br>"
					+"<br>firstName: " +applyFormModel.getFirstName()+",</br>"
					+"<br>lastName: "+applyFormModel.getLastName()+",</br>"
					+"<br>email: "+applyFormModel.getEmail()+",</br>"
					+"<br>phone: "+applyFormModel.getPhone()+",</br,>"
					+"<br>position: "+applyFormModel.getPosition()+",</br>"
					+"<br>studyLevel: "+ applyFormModel.getStudyLevel()+",</br>"
					+"<br>school: "+applyFormModel.getSchool()+",</br>"
					+"<br>course: "+applyFormModel.getCourse()+",</br>"
					+"<br>congratulationEducation : "+applyFormModel.getCongratulationEducation()+",</br>"
					+"<br>company1 : "+applyFormModel.getCompany1()+",</br>"
					+" <br>time1 : "+applyFormModel.getTime1()+",</br,>"
					+company2
					+time2
					+company3
					+time3, true);

			log.info("appmodel{}",applyFormModel.getFile1());

			//Attachment file


			String fileName1= applyFormModel.getFile1().getOriginalFilename();
			String fileName2 = applyFormModel.getFile2().getOriginalFilename();

			// write to device local
//			File file = new File("C://Users//prior//Pictures//"+applyFormModel.getFile().getOriginalFilename());
			File file1 = new File("."+applyFormModel.getFile1());
			File file2 = new File("."+applyFormModel.getFile2());

			if(file1!=null && file2 !=null)
			{
				OutputStream os = new FileOutputStream(file1);
				os.write(applyFormModel.getFile1().getBytes());
				os.flush();
				os.close();

				OutputStream os1 = new FileOutputStream(file2);
				os1.write(applyFormModel.getFile2().getBytes());
				os1.flush();
				os1.close();

				FileSystemResource fileSystemResource = new FileSystemResource(file1);
				FileSystemResource fileSystemResource1 = new FileSystemResource(file2);

				helper.addAttachment(fileName1, fileSystemResource);
				helper.addAttachment(fileName2,fileSystemResource1);

				javaMailSender.send(minemessage);
				responseModel.setStatus(200);
				responseModel.setDescription("submit success");
			}
			else {
				responseModel.setStatus(400);
				responseModel.setDescription("invalid file1 or file2");

			}
		} catch (MessagingException e) {
			responseModel.setStatus(500);
			responseModel.setDescription(e.getMessage());
			throw new RuntimeException(e);
		}
		catch (IOException e) {
			responseModel.setStatus(500);
			responseModel.setDescription(" get error"+e.getMessage());
			throw new RuntimeException(e);
		}

		return responseModel;

	}
}
