\echo 'Delete and Recreate users Table?'

\prompt 'Return for yes and CMD+C cancel > ' answer


DROP DATABASE vaccine_hub;


CREATE DATABASE vaccine_hub;

\connect vaccine_hub;

\i vaccine-hub-schema.sql;