import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('1c044a16-9ecf-47df-8c65-e6781a2166b4', '1Shanny.Erdman@gmail.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d4e41ad0-2db2-4e5d-b13e-54e5c38f6043', '7Icie.Pagac@gmail.com', 'Charlie', 'https://i.imgur.com/YfJQV5z.png?id=9', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('b573b415-7f3b-4e0a-b861-cde2e8bff396', '13Tavares.Watsica@yahoo.com', 'Charlie', 'https://i.imgur.com/YfJQV5z.png?id=15', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('170a5225-7af8-4592-aef3-5d4654a9e6f5', '19Cathryn.Bailey62@hotmail.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=21', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('9e70a5d6-42d7-4396-a7f9-0d4f3ca67cf7', '31Ansley.Rice@gmail.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=33', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('1ba4608f-cbf1-4d86-9524-b6f7e607bde1', '37Camylle.Mayer@yahoo.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=39', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cbb3da9f-4eff-470b-8323-80a2e30c0986', '43Shaun_Little@yahoo.com', 'Bob', 'https://i.imgur.com/YfJQV5z.png?id=45', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('4be4528b-66d5-4e74-a263-733776cd11f5', '49Arch8@gmail.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('beab48fa-28ea-439d-b4b9-10f4354b54c6', '55Onie.Rogahn@yahoo.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=57', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a5980b07-82f0-4bba-bfc9-d3464b781fb7', 'Personalized Mental Health Tip', 'Remember to take a moment for mindfulness today.', 'FeatureAnnouncer', '64Mylene_Price@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '9e70a5d6-42d7-4396-a7f9-0d4f3ca67cf7');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('94401cb5-4b43-4b89-a825-a6a2fb62de06', 'Mindfulness Reminder', 'How are you progressing towards your mental health goals', 'MindfulBot', '71Glen_Wintheiser21@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '9e70a5d6-42d7-4396-a7f9-0d4f3ca67cf7');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('770d896f-0015-4c10-a5b2-f0e515120c7e', 'Personalized Mental Health Tip', 'How are you progressing towards your mental health goals', 'ReflectiveGuide', '78Marcia_Will69@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', 'd4e41ad0-2db2-4e5d-b13e-54e5c38f6043');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('bde13c84-8aaa-4f4f-9006-ef7bcebc51d1', 'New Feature Alert', 'Heres a tip tailored for you Incorporate deep breathing into your daily routine.', 'MindfulBot', '85Orlando28@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', 'b573b415-7f3b-4e0a-b861-cde2e8bff396');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('85bd627f-c053-44df-b180-6ae07abeef3b', 'Goal Progress Checkin', 'Remember to take a moment for mindfulness today.', 'MindfulBot', '92Hollie.Bartoletti@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '9e70a5d6-42d7-4396-a7f9-0d4f3ca67cf7');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7e2c25bf-6df0-4fc4-a996-c961f2360bb4', 'Weekly Reflection Prompt', 'Heres a tip tailored for you Incorporate deep breathing into your daily routine.', 'FeatureAnnouncer', '99Cornell.Grant@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '4be4528b-66d5-4e74-a263-733776cd11f5');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1c44fcca-b118-4a04-aed0-ae38d0cb42c1', 'New Feature Alert', 'Remember to take a moment for mindfulness today.', 'FeatureAnnouncer', '106Millie_Ernser@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '1c044a16-9ecf-47df-8c65-e6781a2166b4');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('30567590-624c-4bdc-b90b-d6a6d07ce30f', 'Personalized Mental Health Tip', 'Heres a tip tailored for you Incorporate deep breathing into your daily routine.', 'GoalTracker', '113Godfrey.Gorczany20@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b89d2961-0eb9-4a00-a056-6c944df4f782', 'Mindfulness Reminder', 'Remember to take a moment for mindfulness today.', 'MindfulBot', '120Maggie62@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '1ba4608f-cbf1-4d86-9524-b6f7e607bde1');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8b33f978-ce87-4031-90fb-7ab7af83dd8b', 'Personalized Mental Health Tip', 'Reflect on your mental health journey this week.', 'HealthAdvisor', '127Kamille75@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '170a5225-7af8-4592-aef3-5d4654a9e6f5');

INSERT INTO "conversational_agent" ("id", "name", "version", "type", "costModel") VALUES ('0ae11b9c-153c-4ba7-b4b9-da20b6ce4c31', 'Pathfinder', '1.8', 'Hybrid', 'Subscription');
INSERT INTO "conversational_agent" ("id", "name", "version", "type", "costModel") VALUES ('8f8af721-2981-4975-a91c-9966f8652c93', 'WellnessCompanion', '1.0', 'Stressreliever', 'Free');
INSERT INTO "conversational_agent" ("id", "name", "version", "type", "costModel") VALUES ('029e59a1-fc57-4e1d-bb1e-c2c5a4af52b6', 'ZenBot', '1.8', 'CBTfocused', 'Freemium');
INSERT INTO "conversational_agent" ("id", "name", "version", "type", "costModel") VALUES ('4db88ad4-3eef-4010-9de4-e52e27ea9ab1', 'ZenBot', '2.5', 'Mindfulnessbased', 'Donationbased');
INSERT INTO "conversational_agent" ("id", "name", "version", "type", "costModel") VALUES ('31088fb5-ab21-4ca5-a9b1-2209b10b2d62', 'Pathfinder', '1.0', 'CBTfocused', 'Freemium');
INSERT INTO "conversational_agent" ("id", "name", "version", "type", "costModel") VALUES ('d31c19d8-4d0f-406d-9c8b-dda49cc0fbf6', 'Pathfinder', '1.8', 'Mindfulnessbased', 'Payperuse');
INSERT INTO "conversational_agent" ("id", "name", "version", "type", "costModel") VALUES ('a1ac40da-fa07-48c4-b880-6606f625e58f', 'SerenityAI', '4.0', 'CBTfocused', 'Free');
INSERT INTO "conversational_agent" ("id", "name", "version", "type", "costModel") VALUES ('2ae4e8d8-0edd-45a5-888a-b238e17fc704', 'MindGuide', '4.0', 'CBTfocused', 'Subscription');
INSERT INTO "conversational_agent" ("id", "name", "version", "type", "costModel") VALUES ('afe60435-9e0c-4d8c-91ff-cf87cb7fc302', 'MindGuide', '4.0', 'Mindfulnessbased', 'Freemium');
INSERT INTO "conversational_agent" ("id", "name", "version", "type", "costModel") VALUES ('0253e36b-39d7-4e78-91fc-c7b53f71ed84', 'WellnessCompanion', '3.2', 'Hybrid', 'Donationbased');

INSERT INTO "mental_health_strategy" ("id", "name", "type", "description") VALUES ('8578e717-e0b6-401a-b8ef-c4aa29acb348', 'Gratitude Journaling', 'Relaxation Technique', 'A method that involves tensing and then slowly releasing each muscle group in the body to reduce stress.');
INSERT INTO "mental_health_strategy" ("id", "name", "type", "description") VALUES ('741eb022-01ab-43ed-9d4d-5652789e6816', 'Guided Imagery', 'Visualization', 'A process of identifying and challenging negative and irrational thoughts to alter unwanted behavior patterns.');
INSERT INTO "mental_health_strategy" ("id", "name", "type", "description") VALUES ('dd770e0f-c1df-4df5-b9e2-547e8c02dac2', 'Gratitude Journaling', 'Relaxation Technique', 'A process of identifying and challenging negative and irrational thoughts to alter unwanted behavior patterns.');
INSERT INTO "mental_health_strategy" ("id", "name", "type", "description") VALUES ('997ad1c6-a820-4910-a901-10a1f12b87b5', 'Gratitude Journaling', 'Mindfulness', 'A relaxation technique that involves visualizing a peaceful scene or series of experiences to calm the mind.');
INSERT INTO "mental_health_strategy" ("id", "name", "type", "description") VALUES ('cf5933c6-56c9-42f0-99e4-6c00baa2c888', 'Progressive Muscle Relaxation', 'Mindfulness', 'A process of identifying and challenging negative and irrational thoughts to alter unwanted behavior patterns.');
INSERT INTO "mental_health_strategy" ("id", "name", "type", "description") VALUES ('38365b07-41f9-4616-8a0f-a858983deb81', 'Cognitive Restructuring', 'Visualization', 'A practice of writing down the things for which one is grateful leading to increased positivity and life satisfaction.');
INSERT INTO "mental_health_strategy" ("id", "name", "type", "description") VALUES ('8083bfe2-b5d6-4985-bcad-fb87810ef928', 'Guided Imagery', 'Reflection', 'A method that involves tensing and then slowly releasing each muscle group in the body to reduce stress.');
INSERT INTO "mental_health_strategy" ("id", "name", "type", "description") VALUES ('d338acad-2510-444b-bfed-6d097689ca68', 'Guided Imagery', 'Relaxation Technique', 'A method that involves tensing and then slowly releasing each muscle group in the body to reduce stress.');
INSERT INTO "mental_health_strategy" ("id", "name", "type", "description") VALUES ('7e9e1b71-6743-499f-8997-87d3b009bbcd', 'Cognitive Restructuring', 'Visualization', 'A technique that focuses on being intensely aware of what youre sensing and feeling in the moment without interpretation or judgment.');
INSERT INTO "mental_health_strategy" ("id", "name", "type", "description") VALUES ('343c10d1-1abc-46b5-aa56-54d3dab925b9', 'Progressive Muscle Relaxation', 'CognitiveBehavioral', 'A relaxation technique that involves visualizing a peaceful scene or series of experiences to calm the mind.');

INSERT INTO "user_agent_interaction" ("id", "interactionTimestamp", "interactionContent", "userId", "agentId") VALUES ('72298394-f758-4901-a28d-f00864b32080', '2024-12-14T19:52:01.361Z', 'I set a goal to meditate for 10 minutes daily to improve my focus.', '1ba4608f-cbf1-4d86-9524-b6f7e607bde1', '0253e36b-39d7-4e78-91fc-c7b53f71ed84');
INSERT INTO "user_agent_interaction" ("id", "interactionTimestamp", "interactionContent", "userId", "agentId") VALUES ('85e3a3e1-f6c2-4c50-b38b-74809ec72897', '2023-05-04T13:19:56.997Z', 'I achieved my goal of completing a task Ive been procrastinating on by breaking it down into smaller steps.', '9e70a5d6-42d7-4396-a7f9-0d4f3ca67cf7', '31088fb5-ab21-4ca5-a9b1-2209b10b2d62');
INSERT INTO "user_agent_interaction" ("id", "interactionTimestamp", "interactionContent", "userId", "agentId") VALUES ('dcd4e280-cdce-4ae2-9bf1-0914438c9d03', '2025-01-21T21:49:08.559Z', 'I achieved my goal of completing a task Ive been procrastinating on by breaking it down into smaller steps.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '0ae11b9c-153c-4ba7-b4b9-da20b6ce4c31');
INSERT INTO "user_agent_interaction" ("id", "interactionTimestamp", "interactionContent", "userId", "agentId") VALUES ('7d810551-f8a6-41d8-bb7d-3bb6341b4bfc', '2023-12-25T14:01:07.159Z', 'Today I felt anxious about an upcoming meeting and used deep breathing techniques to calm down.', '170a5225-7af8-4592-aef3-5d4654a9e6f5', '2ae4e8d8-0edd-45a5-888a-b238e17fc704');
INSERT INTO "user_agent_interaction" ("id", "interactionTimestamp", "interactionContent", "userId", "agentId") VALUES ('e7e5a8ef-35c0-4ced-9abd-416aacf1b044', '2023-07-16T05:26:22.330Z', 'Today I felt anxious about an upcoming meeting and used deep breathing techniques to calm down.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4db88ad4-3eef-4010-9de4-e52e27ea9ab1');
INSERT INTO "user_agent_interaction" ("id", "interactionTimestamp", "interactionContent", "userId", "agentId") VALUES ('7e6094b5-4bd7-4ca8-a226-395e5845d409', '2024-05-23T15:29:01.801Z', 'I set a goal to meditate for 10 minutes daily to improve my focus.', '1ba4608f-cbf1-4d86-9524-b6f7e607bde1', 'afe60435-9e0c-4d8c-91ff-cf87cb7fc302');
INSERT INTO "user_agent_interaction" ("id", "interactionTimestamp", "interactionContent", "userId", "agentId") VALUES ('965fcac1-35e9-4e74-9f59-5872c75e22d2', '2023-08-05T00:40:46.839Z', 'I struggled with negative thoughts today and used the cognitive restructuring technique to challenge them.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '31088fb5-ab21-4ca5-a9b1-2209b10b2d62');
INSERT INTO "user_agent_interaction" ("id", "interactionTimestamp", "interactionContent", "userId", "agentId") VALUES ('e21cd270-291c-4644-8f75-6ed9cc7e53d4', '2023-12-03T12:48:59.103Z', 'Today I felt anxious about an upcoming meeting and used deep breathing techniques to calm down.', 'beab48fa-28ea-439d-b4b9-10f4354b54c6', '8f8af721-2981-4975-a91c-9966f8652c93');
INSERT INTO "user_agent_interaction" ("id", "interactionTimestamp", "interactionContent", "userId", "agentId") VALUES ('1322f95d-a4e2-45d7-a81c-ca76cca97475', '2025-03-11T06:22:13.107Z', 'Today I felt anxious about an upcoming meeting and used deep breathing techniques to calm down.', 'beab48fa-28ea-439d-b4b9-10f4354b54c6', '0ae11b9c-153c-4ba7-b4b9-da20b6ce4c31');
INSERT INTO "user_agent_interaction" ("id", "interactionTimestamp", "interactionContent", "userId", "agentId") VALUES ('720d0ed5-8642-431a-ac3a-437c049bb5b6', '2024-12-17T16:45:52.209Z', 'This week Ive noticed a significant improvement in my sleep quality by following a consistent bedtime routine.', 'beab48fa-28ea-439d-b4b9-10f4354b54c6', '0253e36b-39d7-4e78-91fc-c7b53f71ed84');

INSERT INTO "goal" ("id", "description", "status", "targetDate", "userId") VALUES ('1606e51b-ae75-48de-b2b0-5e403b4c62cc', 'Reduce anxiety triggers by 50', 'On Hold', '2025-02-24T23:16:33.391Z', 'cbb3da9f-4eff-470b-8323-80a2e30c0986');
INSERT INTO "goal" ("id", "description", "status", "targetDate", "userId") VALUES ('57ddc7e8-2a8c-4ad0-b2ff-dd578580cb51', 'Develop healthier eating habits', 'Abandoned', '2024-05-21T01:02:18.002Z', '170a5225-7af8-4592-aef3-5d4654a9e6f5');
INSERT INTO "goal" ("id", "description", "status", "targetDate", "userId") VALUES ('69ac1232-e682-4f75-b303-6a2a3d6b03c0', 'Improve daily mindfulness practice', 'Abandoned', '2024-05-28T18:03:30.678Z', '4be4528b-66d5-4e74-a263-733776cd11f5');
INSERT INTO "goal" ("id", "description", "status", "targetDate", "userId") VALUES ('54c96cd0-22da-4b83-a92e-3aecfdb540f3', 'Increase weekly physical activity', 'Not Started', '2024-03-01T19:34:37.546Z', 'b573b415-7f3b-4e0a-b861-cde2e8bff396');
INSERT INTO "goal" ("id", "description", "status", "targetDate", "userId") VALUES ('c989e838-adeb-4d81-bc43-03e9f380238d', 'Improve daily mindfulness practice', 'In Progress', '2023-12-08T00:14:09.036Z', '1c044a16-9ecf-47df-8c65-e6781a2166b4');
INSERT INTO "goal" ("id", "description", "status", "targetDate", "userId") VALUES ('4b73f85e-fc90-4271-bfae-24a3e64ef189', 'Develop healthier eating habits', 'In Progress', '2024-09-27T08:31:52.407Z', '4be4528b-66d5-4e74-a263-733776cd11f5');
INSERT INTO "goal" ("id", "description", "status", "targetDate", "userId") VALUES ('55eca305-88ce-485d-b17f-cbabed30ee63', 'Enhance sleep quality by practicing good sleep hygiene', 'Completed', '2024-05-23T06:24:24.559Z', '1c044a16-9ecf-47df-8c65-e6781a2166b4');
INSERT INTO "goal" ("id", "description", "status", "targetDate", "userId") VALUES ('18421967-ecb5-430d-9793-1302efcf756e', 'Reduce anxiety triggers by 50', 'Abandoned', '2024-12-01T09:20:37.446Z', '170a5225-7af8-4592-aef3-5d4654a9e6f5');
INSERT INTO "goal" ("id", "description", "status", "targetDate", "userId") VALUES ('9489ec37-ea12-46ab-ad97-87cc4bae1314', 'Increase weekly physical activity', 'Not Started', '2024-02-03T02:21:45.064Z', '9e70a5d6-42d7-4396-a7f9-0d4f3ca67cf7');
INSERT INTO "goal" ("id", "description", "status", "targetDate", "userId") VALUES ('a013bc0d-65f8-44c7-81db-0c36c85c80b2', 'Enhance sleep quality by practicing good sleep hygiene', 'Completed', '2025-03-30T16:24:02.859Z', '9e70a5d6-42d7-4396-a7f9-0d4f3ca67cf7');

INSERT INTO "feedback" ("id", "content", "feedbackDate", "userId") VALUES ('7765b54d-7952-42d6-b5c6-cb3cd10b72e2', 'Setting personal goals with the platform has given me a clear direction and motivation to improve my mental wellbeing.', '2024-09-27T21:23:34.334Z', '1ba4608f-cbf1-4d86-9524-b6f7e607bde1');
INSERT INTO "feedback" ("id", "content", "feedbackDate", "userId") VALUES ('50efc617-2d09-4137-9c08-7652986287a1', 'The mindfulness exercises recommended by the platform have significantly improved my daily routine and overall mental health.', '2024-10-01T06:30:30.167Z', '1ba4608f-cbf1-4d86-9524-b6f7e607bde1');
INSERT INTO "feedback" ("id", "content", "feedbackDate", "userId") VALUES ('c5a377ab-1019-47dd-b85b-6dd45ced7cf8', 'I appreciate the personalized approach to mental health strategies but I wish there were more diverse options available.', '2025-02-12T16:38:08.761Z', '1c044a16-9ecf-47df-8c65-e6781a2166b4');
INSERT INTO "feedback" ("id", "content", "feedbackDate", "userId") VALUES ('ee4f7c8f-a89c-47c0-a9c9-53d2dba03492', 'I appreciate the personalized approach to mental health strategies but I wish there were more diverse options available.', '2024-05-21T18:13:00.033Z', '4be4528b-66d5-4e74-a263-733776cd11f5');
INSERT INTO "feedback" ("id", "content", "feedbackDate", "userId") VALUES ('9abbec2a-caa1-47f5-8c76-cbe01ad45822', 'Setting personal goals with the platform has given me a clear direction and motivation to improve my mental wellbeing.', '2023-06-07T07:32:43.392Z', 'd4e41ad0-2db2-4e5d-b13e-54e5c38f6043');
INSERT INTO "feedback" ("id", "content", "feedbackDate", "userId") VALUES ('9555a984-35a6-453f-b164-2a825e6d9b53', 'The feedback mechanism is straightforward and userfriendly making it easy to track progress and adjust goals accordingly.', '2023-11-14T20:43:11.328Z', '170a5225-7af8-4592-aef3-5d4654a9e6f5');
INSERT INTO "feedback" ("id", "content", "feedbackDate", "userId") VALUES ('a90e21e1-c4ac-49a5-8070-c53215f9cd69', 'The feedback mechanism is straightforward and userfriendly making it easy to track progress and adjust goals accordingly.', '2024-06-19T13:09:37.559Z', 'beab48fa-28ea-439d-b4b9-10f4354b54c6');
INSERT INTO "feedback" ("id", "content", "feedbackDate", "userId") VALUES ('d7e21369-b609-4c52-bf0b-4ac49753a3d9', 'Ive found the conversational agent to be incredibly supportive and insightful helping me navigate through tough days with ease.', '2023-04-21T00:30:36.020Z', '1ba4608f-cbf1-4d86-9524-b6f7e607bde1');
INSERT INTO "feedback" ("id", "content", "feedbackDate", "userId") VALUES ('c026fea6-b4f0-435f-b513-2ffe8fc1115a', 'The mindfulness exercises recommended by the platform have significantly improved my daily routine and overall mental health.', '2024-05-08T13:29:24.267Z', '1c044a16-9ecf-47df-8c65-e6781a2166b4');
INSERT INTO "feedback" ("id", "content", "feedbackDate", "userId") VALUES ('50f64703-7b7c-497e-8170-e7a300587551', 'Ive found the conversational agent to be incredibly supportive and insightful helping me navigate through tough days with ease.', '2024-01-15T15:19:53.239Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "user_strategy" ("id", "startDate", "endDate", "status", "userId", "strategyId") VALUES ('2f14b024-8302-432d-ae5d-a247968ec8a5', '2023-10-28T15:25:41.344Z', '2025-01-29T13:29:39.783Z', 'Paused', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'cf5933c6-56c9-42f0-99e4-6c00baa2c888');
INSERT INTO "user_strategy" ("id", "startDate", "endDate", "status", "userId", "strategyId") VALUES ('1e052647-4892-4563-8e74-026025c7ec65', '2023-06-09T22:42:09.978Z', '2024-06-16T22:07:49.472Z', 'Paused', '170a5225-7af8-4592-aef3-5d4654a9e6f5', '38365b07-41f9-4616-8a0f-a858983deb81');
INSERT INTO "user_strategy" ("id", "startDate", "endDate", "status", "userId", "strategyId") VALUES ('8ad01b95-2570-4d8c-b6ba-2375e1c9644f', '2023-10-06T16:55:04.966Z', '2023-08-12T04:33:46.758Z', 'In Progress', '4be4528b-66d5-4e74-a263-733776cd11f5', '7e9e1b71-6743-499f-8997-87d3b009bbcd');
INSERT INTO "user_strategy" ("id", "startDate", "endDate", "status", "userId", "strategyId") VALUES ('f07c3ff8-6d70-46f4-8dc9-1e18c2c29358', '2025-03-24T22:53:53.926Z', '2024-02-13T20:25:15.503Z', 'In Progress', 'beab48fa-28ea-439d-b4b9-10f4354b54c6', '38365b07-41f9-4616-8a0f-a858983deb81');
INSERT INTO "user_strategy" ("id", "startDate", "endDate", "status", "userId", "strategyId") VALUES ('d99c7adb-8c1f-40e9-bdf0-e6e3596ada5e', '2023-06-10T23:57:27.850Z', '2024-04-18T21:43:13.941Z', 'Active', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'cf5933c6-56c9-42f0-99e4-6c00baa2c888');
INSERT INTO "user_strategy" ("id", "startDate", "endDate", "status", "userId", "strategyId") VALUES ('07266bc4-6c0e-4152-a16d-94c5ef293e81', '2024-01-20T23:07:37.304Z', '2023-09-21T16:51:09.237Z', 'Completed', '9e70a5d6-42d7-4396-a7f9-0d4f3ca67cf7', '8083bfe2-b5d6-4985-bcad-fb87810ef928');
INSERT INTO "user_strategy" ("id", "startDate", "endDate", "status", "userId", "strategyId") VALUES ('f31d283b-137a-4df3-910d-28ab67b8382b', '2024-10-28T12:08:48.056Z', '2023-11-23T19:16:14.456Z', 'Paused', 'b573b415-7f3b-4e0a-b861-cde2e8bff396', '997ad1c6-a820-4910-a901-10a1f12b87b5');
INSERT INTO "user_strategy" ("id", "startDate", "endDate", "status", "userId", "strategyId") VALUES ('f48b9c66-b71f-4c57-bd65-d8d8fb684f3c', '2024-07-18T17:39:18.119Z', '2024-10-02T04:33:55.632Z', 'Paused', '9e70a5d6-42d7-4396-a7f9-0d4f3ca67cf7', 'dd770e0f-c1df-4df5-b9e2-547e8c02dac2');
INSERT INTO "user_strategy" ("id", "startDate", "endDate", "status", "userId", "strategyId") VALUES ('10449f80-c5f7-466a-b9e1-01a2274ccbc5', '2024-09-10T00:52:38.817Z', '2024-03-29T23:47:35.921Z', 'In Progress', 'b573b415-7f3b-4e0a-b861-cde2e8bff396', '997ad1c6-a820-4910-a901-10a1f12b87b5');
INSERT INTO "user_strategy" ("id", "startDate", "endDate", "status", "userId", "strategyId") VALUES ('2b1cfbae-d240-499a-bd09-3dcb1d71b60a', '2024-01-18T07:08:36.152Z', '2025-03-10T18:34:18.179Z', 'Paused', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '38365b07-41f9-4616-8a0f-a858983deb81');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
