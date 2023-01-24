package com.example.demoApps.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)

public class ResponseModel <T>{
	private Integer status;
	private String description;
	private T data;
}
