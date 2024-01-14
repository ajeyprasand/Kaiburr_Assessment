package Rest_api.task_1;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface TaskRepository extends MongoRepository<Task, String>{
    @Query("{name: { $regex : ?0 , $options: 'i'} }")
    List<Task> getTaskByName(String name);

    @Aggregation(pipeline = {
            "{ '$match': { 'assignee' : ?0 } }",
            "{ '$sort' : { 'startTime' : 1 } }",
            "{ '$limit' : 10 }"
    })
    List<Task> getTaskByAssignee(String assignee);

}
