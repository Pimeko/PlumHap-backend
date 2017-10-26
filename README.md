BackEnd API for PlumHap
===================

This is the backend API developed in NodeJS with Express + Sequelizer, for the **PlumHap** app. See below for the requests documentation.

----------

Activities
-------------
Each activity contains a name, the number of times it needs to be done and a bool precising if it is a default activity.

|                  | Type | Request                        | Body      |                   
| --- | ---   | ---| --- |
| Get all 		   | GET | `/api/activities`          |                    |
| New activity| POST | `/api/activities`         | name, nb_times, default |
| Get one 		   | GET |`/api/activities/id`       |                    |
| Update activity| PUT | `/api/activities/id`         | name, nb_times, default |


Statements
-------------
Each statement contains a data field.

|                  | Type | Request                        | Body    |           
| --- | ---   | ---| --- |
| Get all 		   | GET | `/api/statements`          |                    |
| New statement| POST | `/api/statements`         | data |
| Get one 		   | GET |`/api/statements/id`       |                    |
| Update statement| PUT | `/api/statements/id`         | data |

User
-------------
Each user contains a login and a password.

|                  | Type | Request                        | Body    |           
| --- | ---   | ---| --- |
| Login 		   | POST | `/api/login`          | login, password                   |
| New password | PUT | `/api/login`         | login, password, new_password |
