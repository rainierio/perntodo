-- Table: public.todo

-- DROP TABLE IF EXISTS public.todo;

CREATE TABLE IF NOT EXISTS public.todo
(
    todo_id integer NOT NULL DEFAULT nextval('todo_todo_id_seq'::regclass),
    description character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT todo_pkey PRIMARY KEY (todo_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.todo
    OWNER to postgres;