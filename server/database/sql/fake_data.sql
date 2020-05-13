INSERT INTO users
  (name, email, password)
VALUES
  ('karmel', 'karmel@gmail.com', '$2b$10$CjZpDGgIdCTEzy53vmu4W.VSxRv6065ptxz3zDdp4SUWWH6S4lJVm');



INSERT INTO account
  (user_id,github_link, freecodecamp_link, codewars_link, freecodecamp_scores, project1_link, project2_link,codewars_level)
VALUES
  (1, 'www.github.com/karmel', 'www.freecodecamp.com/karmel', 'www.codewars.come/karmel', '200 points', 'www.github.com/repo1', 'www.github.com/repo2', '5 kyu');



INSERT INTO stories
  (name, job_title, description,picture)
VALUES
  ('Haneen E.Shahwan', 'Full-Stack web developer', 'TEAfter reading about what had to be done, I decided to make a plan for how I should study in order to achieve my goal and finish the courses, because I didnt have time for studying at a leisurely pace. My objective was to learn quickly, but not so quickly as to destroy the desire, giving my brain some time to relax. Because the load that I wanted to tackle would be an obstacle for me.XT', 'https://avatars1.githubusercontent.com/u/32449667?s=460&u=2da5ec6b8ef77b676c81ba4be774738cbca1a43b&v=4' ),
  ('Ishak Kassab', 'Full-Stack web developer', 'TEAfter reading about what had to be done, I decided to make a plan for how I should study in order to achieve my goal and finish the courses, because I didnt have time for studying at a leisurely pace. My objective was to learn quickly, but not so quickly as to destroy the desire, giving my brain some time to relax. Because the load that I wanted to tackle would be an obstacle for me.XT', 'https://avatars0.githubusercontent.com/u/34238574?s=460&u=7289e9e939a6e787ec22144ece95f8505c0b5f85&v=4' ),
  ('Farah Zaqout', 'Full-Stack web developer', 'TEAfter reading about what had to be done, I decided to make a plan for how I should study in order to achieve my goal and finish the courses, because I didnt have time for studying at a leisurely pace. My objective was to learn quickly, but not so quickly as to destroy the desire, giving my brain some time to relax. Because the load that I wanted to tackle would be an obstacle for me.XT', '../../assets/Haneen.jpeg' );

INSERT INTO mentors
  (name,description,picture)
VALUES
  ('Haneen E.Shahwan', 'TEAfter reading about what had to be done, I decided to make a plan for how I should study in order to achieve my goal and finish the courses, because I didnt have time for studying at a leisurely pace. My objective was to learn quickly, but not so quickly as to destroy the desire, giving my brain some time to relax. Because the load that I wanted to tackle would be an obstacle for me.XT', '../../assets/Haneen.jpeg' ),
  ('Ishak Kassab', 'TEAfter reading about what had to be done, I decided to make a plan for how I should study in order to achieve my goal and finish the courses, because I didnt have time for studying at a leisurely pace. My objective was to learn quickly, but not so quickly as to destroy the desire, giving my brain some time to relax. Because the load that I wanted to tackle would be an obstacle for me.XT', 'https://avatars0.githubusercontent.com/u/34238574?s=460&u=7289e9e939a6e787ec22144ece95f8505c0b5f85&v=4' ),
  ('Farah Zaqout', 'TEAfter reading about what had to be done, I decided to make a plan for how I should study in order to achieve my goal and finish the courses, because I didnt have time for studying at a leisurely pace. My objective was to learn quickly, but not so quickly as to destroy the desire, giving my brain some time to relax. Because the load that I wanted to tackle would be an obstacle for me.XT', 'https://avatars2.githubusercontent.com/u/25854070?s=460&u=4c1ad584013fc4f8b451bb51697e4a70674620e2&v=4' );
