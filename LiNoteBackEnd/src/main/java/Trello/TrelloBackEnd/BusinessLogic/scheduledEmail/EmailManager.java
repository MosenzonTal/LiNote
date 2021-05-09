package Trello.TrelloBackEnd.BusinessLogic.scheduledEmail;
import Trello.TrelloBackEnd.Beans.User;
import Trello.TrelloBackEnd.BusinessLogic.scheduledEmail.Scheduling.ScheduledMail;
import Trello.TrelloBackEnd.Repositories.UserRepository;
import Trello.TrelloBackEnd.dtos.EmailDto;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Data
@Service
public class EmailManager {
    String recipientMail;

    @Autowired
    private UserRepository userRepo;

    public ResponseEntity<Void> findUserMail(String username, EmailDto emailInfo) throws Exception {
        User user = this.userRepo.findByUsername(username);
        this.recipientMail = user.getEmail();
        ScheduledMail scheduledMail = new ScheduledMail();
        return scheduledMail.scheduleEmail(username, this.recipientMail, emailInfo);
    }

    public ResponseEntity<Void> sendMail(String username, String recipientMail, EmailDto emailInfo) throws Exception {

        System.out.println("preparing for sending message");

        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");

        String emailAccount = "linotealert@gmail.com";
        String emailPassword = "Aa123456a12";

        Session session = Session.getDefaultInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(emailAccount, emailPassword);
            }
        });

        Message message = prepareMessage(session, emailAccount, recipientMail, emailInfo.getTitle());
        Transport.send(message);
        System.out.println("message sent successfully");

        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    private Message prepareMessage(Session session, String emailAccount, String recipient, String title) {
        Message message = new MimeMessage(session);
        try {
            message.setFrom(new InternetAddress(emailAccount));
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
            message.setSubject("Reminder: Today is the day for " + title);
            message.setText("Hey there ☺ \n" +
                    "We hope you are getting ready! \n" +
                    "It's your time to make it. \n" +
                    "It's the day for " + title + ".\n" +
                    "We wish you the most luck, and have a Great day. \n" +
                    "LiNote™ \uD83D\uDE4C");
            return message;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}

