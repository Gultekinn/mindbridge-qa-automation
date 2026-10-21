-- Added during portfolio verification to check the changed profile field.
SELECT users.id, users.email, users.name, profiles.region, profiles.updated_at FROM users JOIN profiles ON profiles.user_id = users.id WHERE users.id = '101';
