# LiNote

LiNote is a Single Page application Used as a Note Management System for Creating and Saving Notes with built in Alerts.   <br>
Built by MVC architectural pattern based on Java Spring Boot in the Server Side, and React js on the Client Side.   <br>
I used PostgreSQL as a database managed on the server, to store the data. <br>
In addition, I implemented a feature of an Email alert with the use of Java Mail and Quartz Cron Scheduler. <br>
An Automatic Email would be sent to the registered user, on the chosen Target Date at 8:00 AM .

---

### Technology Stack:
**Front End:** React Js, Axios, Javascript <br>
**Styled with:** Material-UI, Bootstrap, Formik, HTML and css.  <br>
**Back End:** java 11, Java Spring Boot, JPA, Hibernate, Java MAIL, Quartz  <br>
**Database and Tools:**  PostgreSQL and Postman  <br>
**Dependencies:**  
- spring-boot-starter-data-jpa
- spring-boot-starter-web
- Lombok
- spring-boot-starter-mail
- spring-boot-starter-quartz
- postgresql

---

### Functionality:
**• Registration –** validates whether username/Email Address is already exists, if Email Address is inserted correctly and whether password is strong enough.  User Authentication Token stored for the user in success. <br>
**• Login –** validates whether username is exists in the application DB. <br>
•** Add new Note** <br>
• **Set an alert **(by email) to the Target date <br>
• **Delete Note ** <br>
• **Setting Priority** of each Note <br>
•** Changing Color** of each Note <br>
• **Setting is Done/UnDone** Flag. <br>

---

### RESTful APIs Services:
•	Retrieve all Notes of the user **(GET METHOD)** <br>
•	Delete a Note of a user **(DELETE METHOD)** <br>
•	Edit a Note of a user **(PUT METHOD)** <br>
•	Create a new Note **(POST METHOD)** <br>

---

### Expose to URLs :
•	 - "/" Homepage <br>
•	"/login" <br>
•	"/register" <br>
•	"/welcome/:name" <br>
•	"/logout  <br>
•	"/notes" <br>
•	"/notes/addNote" <br>
•	ERROR PAGE <br>

---

### Security:
Secured App by Authenticated Router and Session Storage for blocking access to users whom are not logged in so they will be auto route to Login Page whether they try go to hard coded URL. 


