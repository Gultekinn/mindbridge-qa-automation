-- Curated from the submitted SELECT * to avoid exporting password hashes.
SELECT id, email, name, role, is_instructor, created_at
FROM users
WHERE id = '101';
