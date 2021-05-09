package Trello.TrelloBackEnd.Beans;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name="notes")
@AllArgsConstructor
@NoArgsConstructor
public class Note {

    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "body")
    private String body;
    @Column(name = "priority")
    private Integer priority; // 1 -5
    @Column(name = "isRead")
    private Boolean isRead;
    @Column(name = "color")
    private String color;
    @Column(name = "date")
    private Date date;
    @Column(name = "user_id")
    private Long userId;
}
