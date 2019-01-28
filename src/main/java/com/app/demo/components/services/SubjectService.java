package com.app.demo.components.services;

import com.app.demo.ad.SubjectRepository;
import com.app.demo.models.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class SubjectService {

    @Autowired
    private SubjectRepository subjectRepo;

    public Collection<Subject> getAll(){
        return subjectRepo.findAll();
    }

    public Optional<Subject> getById(int id){
        return subjectRepo.findById(Long.valueOf(id));
    }

    public Optional<Subject> getByName(String name){
        return subjectRepo.findByName(name);
    }

    public Subject addSubject(Subject subject){
        return subjectRepo.save(subject);
    }

    public boolean remove(int id){
        Subject sub = subjectRepo.findById(Long.valueOf(id)).orElse(null);
        if(sub != null){
            subjectRepo.delete(sub);
            return true;
        }
        return false;
    }

}
