package com.app.demo.components.controllers.accountControllers;

import com.app.demo.components.services.accountServices.SecuredDataService;
import com.app.demo.entities.accountEntities.SecuredAccountData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/accounts/securedData")
public class SecuredDataController {

//    @Autowired
//    private SecuredDataService securedDataService;
//
//    @GetMapping("")
//    public Collection<SecuredAccountData> findAll(){
//        return securedDataService.getAll();
//    }
//
//    @GetMapping("/{id}")
//    public Optional<SecuredAccountData> findById(@PathVariable int id){
//        return securedDataService.getById(id);
//    }
//
//    @PostMapping("/add")
//    public SecuredAccountData save(@RequestBody SecuredAccountData securedAccountData){
//        return securedDataService.add(securedAccountData);
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public boolean delete(@PathVariable int id){
//        return securedDataService.remove(id);
//    }

}
