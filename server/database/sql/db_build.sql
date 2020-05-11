BEGIN;

    DROP TABLE IF EXISTS users, account, personal_info, expereince, education, mentors, stories
    CASCADE;

DROP TYPE IF EXISTS gender
, age, westbank,gaza,code_exp,  interset , marketing, english_speak,english_understand, employment, gazaunis,westbankunis
CASCADE;


CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL

);

CREATE TABLE account
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    github_link TEXT NOT NULL,
    freecodecamp_link TEXT NOT NULL,
    codewars_link TEXT NOT NULL,
    freecodecamp_scores TEXT NOT NULL,
    project1_link TEXT NOT NULL,
    project2_link TEXT NOT NULL,
    codewars_level TEXT NOT NULL
);

CREATE TYPE gender AS ENUM
('Female', 'Male');


CREATE TYPE age AS ENUM
('<18 ', '18-20', '21-25', '26-30' , '31-35', '36-40', '40+');

CREATE TYPE westbank AS ENUM
('Khalil',
'Villages South of Khalil',
'Villages North of Khalil',
'Bethlehem',
'Villages near Bethlehem',
'Another big city in the West Bank',
'East Jerusalem',
'Other');

CREATE TYPE gaza AS ENUM
('North of Gaza Strip',
'Gaza City',
'Middle Area of Gaza',
'Khan Younis',
'Rafah',
'Other');

CREATE TABLE personal_info
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone NUMERIC NOT NULL,
    email_info TEXT NOT NULL,
    motivation TEXT NOT NULL,
    age_info age,
    gender_info gender,
    westbank_cities westbank,
    gaza_cities gaza

);

CREATE TYPE code_exp AS ENUM
( 'No Experience',
' Some experience as hobby',
 'A lot of experience as a hobby',
'I have degree in Computer Science or another related field',
 'I have had a paid job as a developer');

CREATE TYPE interset AS ENUM
( 'I want to gain employment/earn income as a developer',
'I want to learn something new',
'I want to be part of the GSG and Code Academy community');

CREATE TYPE marketing AS ENUM
( 'Gaza Sky Geeks Social Media',
'Friend or family member who is a Code Academy graduate',
'I came to a GSG workshop or event',
'Online / browsing the web',
'Other');

CREATE TABLE expereince
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    cv TEXT NOT NULL,
    coding_expereince code_exp,
    interset_gsg interset,
    marketing_question marketing

);

CREATE TYPE english_speak AS ENUM
( 'Totally Confident',
'I am an intermediate speaker',
'I am a beginner speaker',
'I cant speak English at all');

CREATE TYPE english_understand AS ENUM
( 
'Totally Confident',
'I am understand at an intermediate level',
'I am understand at a beginner level',
'I cant understand English at all');

CREATE TYPE employment AS ENUM
( 

'I am a student',
'I am unemployed',
'I am employed full-time',
'I am employed part-time');

CREATE TYPE gazaunis AS ENUM
( 
'I didnt go to university',
'Islamic University of Gaza',
'Al Azhar University',
'Palestine University',
'UCAS',
'Al Quds Open University',
'University College of Science and Technology',
'Al Aqsa University',
'Gaza University',
'I went to university outside of Gaza'
);

CREATE TYPE westbankunis AS ENUM
(
'I didnt go to university',
'Palestine Polytechnic University (PPU)',
'Hebron University',
'Bethlehem University',
'Birzeit University',
'Al Najah University',
'Arab American University',
'Al Quds Open University',
'Al Quds University',
'Palestine Technical University - Kadoori',
'IT College - Vocational Center',
'University outside of Palestine',
'Other');

CREATE TABLE education
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    english_speaking english_speak,
    english_understanding english_understand,
    emplyoment_status employment,
    job_title TEXT NOT NULL,
    gaza_unis gazaunis,
    westbank_unis westbankunis,
    major VARCHAR(100) NOT NULL

);

CREATE TABLE stories
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    job_title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    picture TEXT NOT NULL

);

CREATE TABLE mentors
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    picture TEXT NOT NULL

);


COMMIT;