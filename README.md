BackEnd API for PlumHap
===================

This is the backend API developed in NodeJS with Express + Sequelizer, for the **PlumHap** app. See below for the requests documentation.

----------

Activities
-------------
Each activity contains a name, the number of times it needs to be done and a bool precising if it is a default activity.

|                  | Type | Request                        | Data              |
 ----------------- | ----------------------------   | ------------------
| Get all 		   | GET | `/api/activities`          |                   |
| Get one 		   | GET |`/api/activities/id`       |                   |
| New activity| POST | `/api/activities`         | name, nb_times, default |
| Update activity| PUT | `/api/activities`         | name, nb_times, default |


Statements
-------------
Each statement contains a data field.

|                  | Type | Request                        | Data              |
 ----------------- | ----------------------------   | ------------------
| Get all 		   | GET | `/api/statements`          |                   |
| Get one 		   | GET |`/api/statements/id`       |                   |
| New statement| POST | `/api/statements`         | data |
| Update statement| PUT | `/api/statements`         | data |
