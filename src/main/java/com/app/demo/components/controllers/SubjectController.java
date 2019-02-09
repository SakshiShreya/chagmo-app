package com.app.demo.components.controllers;

import com.app.demo.components.services.SubjectService;
import com.app.demo.models.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class SubjectController {

//    @Autowired
//    private SubjectService subjectService;
//
//    @GetMapping("/subjects")
//    public Collection<Subject> findAll(){
//        return subjectService.getAll();
//    }
//
//    @GetMapping("/subject/{id}")
//    public Optional<Subject> findById(@PathVariable int id){
//        return subjectService.getById(id);
//    }
//
//    @GetMapping("/subjectName/{name}")
//    public Optional<Subject> findByName(@PathVariable String name){
//        return subjectService.getByName(name);
//    }
//
//    @GetMapping("/subjectsByNames/{subjectString}")
//    public Collection<Subject> findByNames(@PathVariable String subjectString){
//        return subjectService.getByNames(subjectString);
//    }
//
//    @PostMapping("/addSubject")
//    public Subject save(@RequestBody Subject subject){
//        return subjectService.addSubject(subject);
//    }
//
//    @DeleteMapping("/deleteSubject/{id}")
//    public boolean delete(@PathVariable int id){
//        return subjectService.remove(id);
//    }

}
