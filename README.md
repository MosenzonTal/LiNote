
<p align="center">
      <img src="https://i.ibb.co/q1cz9nV/home.png" width="800" title="hover text">      
</p>

##   **Project Description**


<p align="left">
  <img src="https://i.ibb.co/Df3MzfG/1327bbd369c34c77953c6142d3eb619b.png" width="150" title="hover text">
</p>

*LiNote is a Single Page application used as a Note Management System for Creating and Saving Notes with built in Alerts.   <br>
Built by MVC architectural pattern based on Java Spring Boot in the Server Side, and React js on the Client Side.   <br>
I used PostgreSQL as a database managed on the server, to store the data. <br>
In addition, I implemented a feature of an Email alert with the use of Java Mail and Quartz Cron Scheduler. <br>
An Automatic Email would be sent to the registered user, on the chosen Target Date at 8:00 AM, with a reminder of the note title  .* <br>
**and it seems like this:**

<p align="center">
      <img src="https://i.ibb.co/SPB965L/email.png" width="800" title="hover text">  
</p>
<p align="center">
       <img src="https://i.ibb.co/c8Z1M9F/email.png" width="300" title="hover text">    
</p>

---

###  Promotional Video Of the application: (Recommended) 

Watch LiNote in Action:
【•－>】 https://www.youtube.com/watch?v=DtDnP4K7avA

---

### Technology Stack:
**Front End:** React Js, Axios, Javascript <br>
**Styled with:** Material-UI, Bootstrap, Formik, HTML and css.  <br>
**Back End:** java 11, Java Spring Boot, JPA, Hibernate, Java MAIL, Quartz  <br>
**Database and Tools:**  PostgreSQL and Postman  <br>
**Dependencies:**  
```
    spring-boot-starter-data-jpa
    spring-boot-starter-web
    Lombok
    spring-boot-starter-mail
    spring-boot-starter-quartz
    postgresql
```

---

### Functionality:
- **Registration –** validates whether username/Email Address is already exists, if Email Address is inserted correctly and whether password is strong enough.  User Authentication Token stored for the user in success. <br>
- **Login –** validates whether username is exists in the application DB. <br>
- **Add new Note** <br>
- **Set an alert** (by email) to the Target date <br>
- **Delete Note** <br>
- **Setting Priority** of each Note <br>
- **Changing Color** of each Note <br>
- **Setting is Done/UnDone** Flag. <br>

---
### Entities:
**Each Note includes:**
```
    Title
    Body
    Priority (1-5)
    Done/UnDone flag
    Color
    Target Date

```

**Each User includes:**
```
    Username
    Password
    Email Address
   ``` 
---

### RESTful APIs Services:
-	Retrieve all Notes of the user **(GET METHOD)** <br>
-	Delete a Note of a user **(DELETE METHOD)** <br>
-	Edit a Note of a user **(PUT METHOD)** <br>
-	Create a new Note **(POST METHOD)** <br>

---

### Expose to URLs :
***The application exposes the following endpoints:***

```

    "/" Homepage" 
    "/login" 
    "/register" 
    "/welcome/:name" 
    "/logout" 
    "/notes" 
    "/notes/addNote" 
    "404-ERROR-PAGE"
```

---

### Security:

*Secured App by Authenticated Router and Session Storage for blocking access to users whom are not logged in so they will be auto route to Login Page whether they try go to hard coded URL.* 

---
### Demo:
https://youtu.be/DtDnP4K7avA
---


<p align="center">
  <b>© 2021 Tal Mosenzon.  All rights reserved.</b>
</p>

<p align="center">
      <img src="https://www.endivesoftware.com/blog/wp-content/uploads/2020/01/Spring-Boot-Application-Development.png" width="200" title="hover text">
        <img src="https://www.webrexstudio.com/wp-content/uploads/2019/05/react-js-image.png" width="175" title="hover text">
</p>

