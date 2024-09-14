//package com.laioffer.twitch.db;
//
//public interface ItemRepository {
//}

package com.laioffer.twitch.db;


import com.laioffer.twitch.db.entity.ItemEntity;
import org.springframework.data.repository.ListCrudRepository;


public interface ItemRepository extends ListCrudRepository<ItemEntity, Long> {


    ItemEntity findByTwitchId(String twitchId);
}
