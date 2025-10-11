SELECT animal_in.ANIMAL_ID, animal_out.NAME
FROM ANIMAL_INS AS animal_in
INNER JOIN ANIMAL_OUTS AS animal_out
ON animal_in.ANIMAL_ID = animal_out.ANIMAL_ID 
WHERE animal_out.DATETIME < animal_in.DATETIME
ORDER BY animal_in.DATETIME;