package com.app.demo.ad.accountRepositories;

import com.app.demo.entities.accountEntities.SecuredAccountData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SecuredDataRepository extends JpaRepository<SecuredAccountData, Long> {

    public Optional<SecuredAccountData> findByGmail(String gmail);

}
