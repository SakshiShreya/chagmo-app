package com.app.demo.components.services.accountServices;

import com.app.demo.ad.accountRepositories.SecuredDataRepository;
import com.app.demo.entities.accountEntities.SecuredAccountData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class SecuredDataService {

    @Autowired
    private SecuredDataRepository securedDataRepo;

    public Collection<SecuredAccountData> getAll(){
        return securedDataRepo.findAll();
    }

    public Optional<SecuredAccountData> getById(int id){
        return securedDataRepo.findById(Long.valueOf(id));
    }

    public Optional<SecuredAccountData> getByGmail(String gmail){
        return securedDataRepo.findByGmail(gmail);
    }

    public SecuredAccountData add(SecuredAccountData securedAccountData){
        return securedDataRepo.save(securedAccountData);
    }

    public boolean remove(int id){
        SecuredAccountData sad = securedDataRepo.findById(Long.valueOf(id)).orElse(null);
        if(sad != null){
            securedDataRepo.delete(sad);
            return true;
        }
        return false;
    }

}
