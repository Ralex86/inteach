SELECT id_group, name
FROM Groups
LEFT JOIN GroupsUsers ON Groups.id_group = GroupsUsers.group_id
WHERE GroupsUsers.user_id IS NULL

#### result
# id_group                                name
# c5b618a5-617f-430d-b2b1-91b508b5c28f    Flexidy


SELECT U1.firstname, U2.list
FROM Users U1 INNER JOIN (SELECT *, GROUP_CONCAT( Groups.name ) AS list
FROM Groups
INNER JOIN GroupsUsers ON Groups.id_group = GroupsUsers.group_id
GROUP BY GroupsUsers.user_id) U2 ON U2.user_id = U1.id_user

#### result
# firstname   Liste des noms de groupe dans une colonne
# Danni       Prodder,Ronstring,Keylex,Ronstring
# Adolphe     Keylex,Ronstring
# Marlane     Ronstring
# Roxine      Ronstring
# Alta        Ronstring
# Celesta     Keylex
# Tally       Ronstring,Keylex
# Callean     Ronstring
# Jackson     Ronstring
# Sibley      Prodder,Keylex
# Rossie      Ronstring
# Victoir     Ronstring

# bonus 2 ne contient pas de match pour 6 caractères
SELECT * FROM Users WHERE email REGEXP '^[a-zA-Z]{6}[0-9]+'
# mais contient des matchs pour 8
SELECT * FROM Users WHERE email REGEXP '^[a-zA-Z]{8}[0-9]+'