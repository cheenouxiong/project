package com.example.demoApps.component;


import com.example.demoApps.model.ApplyFormModel;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;


@Controller
@Component
public class Emailcomponent {

	public List<String> ValidateApplyForm(ApplyFormModel applyFormModel)
	{
		ApplyFormModel a= new ApplyFormModel();
		List<String> error = new ArrayList<>();
		if(StringUtils.isEmpty(applyFormModel.getFirstName()))
		{
			error.add("invalid first name");
		}
		if(StringUtils.isEmpty(applyFormModel.getLastName()))
		{
			error.add("invalid last name");
		}
		if(StringUtils.isEmpty(applyFormModel.getEmail()))
		{
			error.add("invalid email");
		}
		if(StringUtils.isEmpty(applyFormModel.getPhone()))
		{
			error.add("invalid phone");
		}
		if(StringUtils.isEmpty(applyFormModel.getPosition()))
		{
			error.add("invalid position");
		}
		if(StringUtils.isEmpty(applyFormModel.getStudyLevel()))
		{
			error.add("invalid study level");
		}
		if(StringUtils.isEmpty(applyFormModel.getSchool()))
		{
			error.add("invalid school");
		}
		if(StringUtils.isEmpty(applyFormModel.getCourse()))
		{
			error.add("invalid course");
		}
		if(StringUtils.isEmpty(applyFormModel.getCongratulationEducation()))
		{
			error.add("invalid congratulation education");
		}
		if(StringUtils.isEmpty(applyFormModel.getCompany1()))
		{
			error.add("invalid company1");
		}
		if(StringUtils.isEmpty(applyFormModel.getTime1()))
		{
			error.add("invalid time1");
		}
		if(StringUtils.isEmpty(applyFormModel.getCompany2()))
		{
			a.setCompany2("");
			a.setTime2("");
		}
		if(StringUtils.isEmpty(applyFormModel.getCompany3()))
		{
			a.setCompany3("");
			a.setTime3("");
		}

		return error;
	}
}
