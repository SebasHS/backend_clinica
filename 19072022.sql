--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

-- Started on 2022-07-19 02:51:15

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 3362 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 17651)
-- Name: citas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.citas (
    id integer NOT NULL,
    cod_doctor character varying(255) NOT NULL,
    cod_paciente character varying(255) NOT NULL,
    id_horario_doctor integer,
    motivo character varying(255) NOT NULL,
    calificacion integer,
    precio double precision NOT NULL,
    lugar character varying(255) NOT NULL,
    nota_extra character varying(255),
    comentario character varying(255),
    diagnostico character varying(255),
    receta character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.citas OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 17650)
-- Name: citas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.citas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.citas_id_seq OWNER TO postgres;

--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 217
-- Name: citas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.citas_id_seq OWNED BY public.citas.id;


--
-- TOC entry 214 (class 1259 OID 17623)
-- Name: doctores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctores (
    cod_doctor character varying(255) NOT NULL,
    especialidad_id integer NOT NULL,
    precio_virtual double precision,
    precio_presencial double precision
);


ALTER TABLE public.doctores OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 17617)
-- Name: especialidades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.especialidades (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.especialidades OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 17616)
-- Name: especialidades_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.especialidades_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.especialidades_id_seq OWNER TO postgres;

--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 212
-- Name: especialidades_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.especialidades_id_seq OWNED BY public.especialidades.id;


--
-- TOC entry 216 (class 1259 OID 17639)
-- Name: horarios_doctor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.horarios_doctor (
    id integer NOT NULL,
    cod_doctor character varying(255) NOT NULL,
    fecha_inicio timestamp with time zone NOT NULL,
    fecha_fin timestamp with time zone NOT NULL,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone,
    created_at timestamp with time zone NOT NULL
);


ALTER TABLE public.horarios_doctor OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 17638)
-- Name: horarios_doctor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.horarios_doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.horarios_doctor_id_seq OWNER TO postgres;

--
-- TOC entry 3365 (class 0 OID 0)
-- Dependencies: 215
-- Name: horarios_doctor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.horarios_doctor_id_seq OWNED BY public.horarios_doctor.id;


--
-- TOC entry 211 (class 1259 OID 17606)
-- Name: pacientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pacientes (
    cod_paciente character varying(255) NOT NULL
);


ALTER TABLE public.pacientes OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 17599)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    document character varying(255) NOT NULL,
    nombre character varying(255) NOT NULL,
    apellido_p character varying(255) NOT NULL,
    apellido_m character varying(255) NOT NULL,
    num_contacto character varying(255),
    fecha_nacimiento character varying(255),
    imagen character varying(255),
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 3189 (class 2604 OID 17654)
-- Name: citas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citas ALTER COLUMN id SET DEFAULT nextval('public.citas_id_seq'::regclass);


--
-- TOC entry 3187 (class 2604 OID 17620)
-- Name: especialidades id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.especialidades ALTER COLUMN id SET DEFAULT nextval('public.especialidades_id_seq'::regclass);


--
-- TOC entry 3188 (class 2604 OID 17642)
-- Name: horarios_doctor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.horarios_doctor ALTER COLUMN id SET DEFAULT nextval('public.horarios_doctor_id_seq'::regclass);


--
-- TOC entry 3356 (class 0 OID 17651)
-- Dependencies: 218
-- Data for Name: citas; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.citas VALUES (1, '11111111', '11111115', 1, 'cancer', 3, 50, 'Lima', 'F', 'Saludos', 'tomar cada 8 horas', 'paracetamol', '2022-07-20 22:51:15.982-05', NULL, NULL);


--
-- TOC entry 3352 (class 0 OID 17623)
-- Dependencies: 214
-- Data for Name: doctores; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.doctores VALUES ('11111111', 1, 10, 50);
INSERT INTO public.doctores VALUES ('13431626', 1, NULL, NULL);
INSERT INTO public.doctores VALUES ('15824747', 2, NULL, NULL);
INSERT INTO public.doctores VALUES ('47823691', 3, NULL, NULL);
INSERT INTO public.doctores VALUES ('14973568', 7, NULL, NULL);
INSERT INTO public.doctores VALUES ('14832915', 18, NULL, NULL);


--
-- TOC entry 3351 (class 0 OID 17617)
-- Dependencies: 213
-- Data for Name: especialidades; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.especialidades VALUES (1, 'urologia', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (2, 'traumatologia', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (3, 'Medicina Familiar ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (4, 'Medicina Interna ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (5, 'Pediatria ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (6, 'Gineco obstetricia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (7, 'Cirujia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (8, 'Psiquiatria ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (9, 'Psiquiatria ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (10, 'Cardiologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (11, 'Dermatologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (12, 'Endocrinologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (13, 'Gastroenterologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (14, 'Infectologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (15, 'Nefrologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (16, 'Oftalmologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (17, 'Otorrinolaringologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (18, 'Neumologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (19, 'Neurologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (20, 'Radiologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (21, 'Anestesiologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (22, 'Oncologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (23, 'Patologia ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (24, 'Medicina fisica y rehabilitacion ', NULL, NULL, NULL);
INSERT INTO public.especialidades VALUES (25, 'Medicina Intensiva ', NULL, NULL, NULL);


--
-- TOC entry 3354 (class 0 OID 17639)
-- Dependencies: 216
-- Data for Name: horarios_doctor; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.horarios_doctor VALUES (1, '11111111', '2022-07-20 12:51:15.982-05', '2022-07-20 13:51:15.982-05', NULL, NULL, '2022-07-18 22:51:15.982-05');


--
-- TOC entry 3349 (class 0 OID 17606)
-- Dependencies: 211
-- Data for Name: pacientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.pacientes VALUES ('11111112');
INSERT INTO public.pacientes VALUES ('11111115');
INSERT INTO public.pacientes VALUES ('70082304');
INSERT INTO public.pacientes VALUES ('01047323');
INSERT INTO public.pacientes VALUES ('73234333');
INSERT INTO public.pacientes VALUES ('18113497');
INSERT INTO public.pacientes VALUES ('75632156');


--
-- TOC entry 3348 (class 0 OID 17599)
-- Dependencies: 210
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuarios VALUES ('11111111', 'sebastian ', 'Herrera', 'Solis', '9450212321', NULL, '', 'sherrera@gmail.com', '$2b$10$R/IeMngC4kTk1VNJlVfjWuxpzkBHhs0i6HHOz5cc8zHS9SWPrNg0e', '2022-07-18 21:26:00.689-05', '2022-07-18 21:37:52.242-05');
INSERT INTO public.usuarios VALUES ('11111115', 'Fernando Martin', 'Castro', 'Vargas', '945284732', NULL, NULL, 'angeloterna@gmail.com', '$2b$10$dysRvDssf9AJh08skVRK2eYkel6U7oeFF6lE/E5g/zXdhwsbRiwDq', '2022-07-18 22:21:13.595-05', '2022-07-18 22:21:13.595-05');
INSERT INTO public.usuarios VALUES ('13431626', 'Juan Rodrigo', 'Quispe', 'Quispe', '874259416', NULL, NULL, 'JuanR@gmail.com', '$2b$10$mo47FYWPzWRXpfs285vIC.UW1SWKircQPbWSKp0bUaoEMwCcwMzBa', '2022-07-18 22:47:04.602-05', '2022-07-18 22:47:04.602-05');
INSERT INTO public.usuarios VALUES ('15824747', 'Sebas Martin', 'Helela', 'SOS', '945745123', NULL, NULL, 'pspvita12@gmail.com', '$2b$10$XCOL.cIZ0ArSfSK0t3czFe2KNb52ke/RuvjwvifAWMANqjLnshjqm', '2022-07-18 22:47:14.351-05', '2022-07-18 22:47:14.351-05');
INSERT INTO public.usuarios VALUES ('47823691', 'Leonardo José', 'Perez', 'Gallardo', '468279135', NULL, NULL, 'aLJperezGallinasoR@gmail.com', '$2b$10$GpvRTVSGimHF7GKMU6yVneNec8v.IikRB4zHJVS9XzokwXc/mDTaq', '2022-07-18 22:47:23.876-05', '2022-07-18 22:47:23.876-05');
INSERT INTO public.usuarios VALUES ('14973568', 'Pabhel Bertram', 'Solis', 'Meyer', '999573148', NULL, NULL, 'phSolisMeyeR@gmail.com', '$2b$10$jf6EFR8sODVb7y1agimtFu2QVo4DfybVm407L/eJInwFMDZaGxVi2', '2022-07-18 22:47:42.821-05', '2022-07-18 22:47:42.821-05');
INSERT INTO public.usuarios VALUES ('14832915', 'Fernando Moises', 'Paredes', 'Medición', '945678912', NULL, NULL, 'fexdlol12@gmail.com', '$2b$10$jimXF7m3z2fKNxQZ7qxja.2pmF9bvBIE2Kqb/AlqUkSWczl1xhlAi', '2022-07-18 22:47:51.413-05', '2022-07-18 22:47:51.413-05');
INSERT INTO public.usuarios VALUES ('70082304', 'Daphne Solange', 'Velasquez', 'Chavez', '947789322', NULL, NULL, 'solange.velasquez.chavez@gmail.com', '$2b$10$bboNfAgFbMtAcuQJ9eqNFeqYG6wlxkytbxck93PN8cUWa7ae56SIe', '2022-07-18 22:50:35.357-05', '2022-07-18 22:50:35.357-05');
INSERT INTO public.usuarios VALUES ('01047323', 'Diomar', 'Chavez', 'Vela', '989545981', NULL, NULL, 'diomar05@gmail.com', '$2b$10$pOyUskN3CfcvoMEV.wj/pu3FQawkDwbcTtt7dazdDhV.cnCxdtUd2', '2022-07-18 22:51:15.982-05', '2022-07-18 22:51:15.982-05');
INSERT INTO public.usuarios VALUES ('73234333', 'Renato Martin', 'Uribe', 'Portillo', '999009803', NULL, NULL, 'pauloup@gmail.com', '$2b$10$vGRN9OrDmZVZG6KIty7JCefH4V4G/k1Hd23XsAMx64VdZMpgE683u', '2022-07-18 22:51:58.15-05', '2022-07-18 22:51:58.15-05');
INSERT INTO public.usuarios VALUES ('18113497', 'Mauricio Cesar', 'Aguirre', 'Izaguirre', '945632158', NULL, NULL, 'mauroagui@gmail.com', '$2b$10$d500aN0gC9BINEdXEBC.t.ceJC0ryDRwbWEYZKkg0WBzK0X6RrS3.', '2022-07-18 22:52:49.098-05', '2022-07-18 22:52:49.098-05');
INSERT INTO public.usuarios VALUES ('75632156', 'Israel Alejandro', 'Castillo', 'Acosta', '945284732', NULL, NULL, 'isracasti@gmail.com', '$2b$10$yjCo6MrTG4M/mG2B39HOkOd6UyXa6HcQQuGcKJbjOREAk8rZo9g6i', '2022-07-18 22:53:19.512-05', '2022-07-18 22:53:19.512-05');
INSERT INTO public.usuarios VALUES ('11111112', 'angelo', 'taco', 'jimenez', '', NULL, '', 'ataco@gmail.com', '$2b$10$MXvcH46bK2KiDF0tVfRu4ehxhOxhH17v1.scMDJqut55FQxqwD6OG', '2022-07-18 21:53:40.809-05', '2022-07-19 02:30:13.975-05');


--
-- TOC entry 3366 (class 0 OID 0)
-- Dependencies: 217
-- Name: citas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.citas_id_seq', 1, false);


--
-- TOC entry 3367 (class 0 OID 0)
-- Dependencies: 212
-- Name: especialidades_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.especialidades_id_seq', 1, false);


--
-- TOC entry 3368 (class 0 OID 0)
-- Dependencies: 215
-- Name: horarios_doctor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.horarios_doctor_id_seq', 1, false);


--
-- TOC entry 3201 (class 2606 OID 17658)
-- Name: citas citas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_pkey PRIMARY KEY (id);


--
-- TOC entry 3197 (class 2606 OID 17627)
-- Name: doctores doctores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctores
    ADD CONSTRAINT doctores_pkey PRIMARY KEY (cod_doctor);


--
-- TOC entry 3195 (class 2606 OID 17622)
-- Name: especialidades especialidades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.especialidades
    ADD CONSTRAINT especialidades_pkey PRIMARY KEY (id);


--
-- TOC entry 3199 (class 2606 OID 17644)
-- Name: horarios_doctor horarios_doctor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.horarios_doctor
    ADD CONSTRAINT horarios_doctor_pkey PRIMARY KEY (id);


--
-- TOC entry 3193 (class 2606 OID 17610)
-- Name: pacientes pacientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_pkey PRIMARY KEY (cod_paciente);


--
-- TOC entry 3191 (class 2606 OID 17605)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (document);


--
-- TOC entry 3206 (class 2606 OID 17659)
-- Name: citas citas_cod_doctor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_cod_doctor_fkey FOREIGN KEY (cod_doctor) REFERENCES public.doctores(cod_doctor);


--
-- TOC entry 3207 (class 2606 OID 17664)
-- Name: citas citas_cod_paciente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_cod_paciente_fkey FOREIGN KEY (cod_paciente) REFERENCES public.pacientes(cod_paciente) ON UPDATE CASCADE;


--
-- TOC entry 3208 (class 2606 OID 17669)
-- Name: citas citas_id_horario_doctor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_id_horario_doctor_fkey FOREIGN KEY (id_horario_doctor) REFERENCES public.horarios_doctor(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3203 (class 2606 OID 17628)
-- Name: doctores doctores_cod_doctor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctores
    ADD CONSTRAINT doctores_cod_doctor_fkey FOREIGN KEY (cod_doctor) REFERENCES public.usuarios(document) ON UPDATE CASCADE;


--
-- TOC entry 3204 (class 2606 OID 17633)
-- Name: doctores doctores_especialidad_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctores
    ADD CONSTRAINT doctores_especialidad_id_fkey FOREIGN KEY (especialidad_id) REFERENCES public.especialidades(id) ON UPDATE CASCADE;


--
-- TOC entry 3205 (class 2606 OID 17645)
-- Name: horarios_doctor horarios_doctor_cod_doctor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.horarios_doctor
    ADD CONSTRAINT horarios_doctor_cod_doctor_fkey FOREIGN KEY (cod_doctor) REFERENCES public.doctores(cod_doctor) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3202 (class 2606 OID 17611)
-- Name: pacientes pacientes_cod_paciente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_cod_paciente_fkey FOREIGN KEY (cod_paciente) REFERENCES public.usuarios(document);


-- Completed on 2022-07-19 02:51:15

--
-- PostgreSQL database dump complete
--

