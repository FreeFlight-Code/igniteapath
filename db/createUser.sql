INSERT INTO users
(username, email, img, courses, currentcourse)
VALUES
( $1, $2, $3, $4, $5)
RETURNING *;