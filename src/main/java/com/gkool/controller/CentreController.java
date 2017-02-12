package com.gkool.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.gkool.data.Centre;
import com.gkool.service.CentreServiceImpl;

@Controller
@RequestMapping("/centre")
public class CentreController {

	@Autowired
	CentreServiceImpl centreService;

	@RequestMapping(value = "", method = RequestMethod.POST)
	public ModelAndView create(@RequestParam Centre centre) {
		ModelAndView model = new ModelAndView();
		Centre newCentre = centreService.create(new Centre("WEST", "New Delhi"));
		model.addObject("centre", newCentre);
		model.setViewName("viewCentres");

		return model;

	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ModelAndView get(@PathVariable Integer id) {
		ModelAndView model = new ModelAndView();
		model.addObject("centre", centreService.create(new Centre("WEST", "New Delhi")));

		model.setViewName("viewCentres");

		return model;
	}

}
