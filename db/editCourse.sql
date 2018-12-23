UPDATE COURSES
SET title = $2,
    description = $3,
    thumbnail = $4,
    price = $5,
    link = $5
WHERE id = $1;