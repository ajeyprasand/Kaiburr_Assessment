package Rest_api.task_1;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.Random;
@Setter
@Getter
@Document(collection = "Tasks")
public class Task {
    private String name;
    @Id
    private String id;
    private String assignee;
    private String project;
    private Date startTime;
    private String ajeyPrasandProperty;

    public Task(String name, String id, String assignee, String project, Date startTime) {
        this.name = name;
        this.id = id;
        this.assignee = assignee;
        this.project = project;
        this.startTime = startTime;
        setSpecialProperty();
    }

    public void setSpecialProperty() {
        String canidate_name = "Ajey Prasand";
        String name1= canidate_name.replaceAll(" ","");
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < 5; i++) {
            int index = random.nextInt(name1.length());
            sb.append(name1.charAt(index));
        }
        this.ajeyPrasandProperty = sb.toString();
    }
}
