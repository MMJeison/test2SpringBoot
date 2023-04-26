import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './estudiante.reducer';

export const EstudianteDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const estudianteEntity = useAppSelector(state => state.estudiante.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="estudianteDetailsHeading">
          <Translate contentKey="test2SpringBootApp.estudiante.detail.title">Estudiante</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{estudianteEntity.id}</dd>
          <dt>
            <span id="cedula">
              <Translate contentKey="test2SpringBootApp.estudiante.cedula">Cedula</Translate>
            </span>
          </dt>
          <dd>{estudianteEntity.cedula}</dd>
          <dt>
            <span id="nombre">
              <Translate contentKey="test2SpringBootApp.estudiante.nombre">Nombre</Translate>
            </span>
          </dt>
          <dd>{estudianteEntity.nombre}</dd>
          <dt>
            <span id="apellido">
              <Translate contentKey="test2SpringBootApp.estudiante.apellido">Apellido</Translate>
            </span>
          </dt>
          <dd>{estudianteEntity.apellido}</dd>
          <dt>
            <span id="correoInstitucional">
              <Translate contentKey="test2SpringBootApp.estudiante.correoInstitucional">Correo Institucional</Translate>
            </span>
          </dt>
          <dd>{estudianteEntity.correoInstitucional}</dd>
          <dt>
            <span id="correoPersonal">
              <Translate contentKey="test2SpringBootApp.estudiante.correoPersonal">Correo Personal</Translate>
            </span>
          </dt>
          <dd>{estudianteEntity.correoPersonal}</dd>
          <dt>
            <span id="celular">
              <Translate contentKey="test2SpringBootApp.estudiante.celular">Celular</Translate>
            </span>
          </dt>
          <dd>{estudianteEntity.celular}</dd>
          <dt>
            <span id="estrato">
              <Translate contentKey="test2SpringBootApp.estudiante.estrato">Estrato</Translate>
            </span>
          </dt>
          <dd>{estudianteEntity.estrato}</dd>
          <dt>
            <span id="fechaIngreso">
              <Translate contentKey="test2SpringBootApp.estudiante.fechaIngreso">Fecha Ingreso</Translate>
            </span>
          </dt>
          <dd>
            {estudianteEntity.fechaIngreso ? (
              <TextFormat value={estudianteEntity.fechaIngreso} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="version">
              <Translate contentKey="test2SpringBootApp.estudiante.version">Version</Translate>
            </span>
          </dt>
          <dd>{estudianteEntity.version}</dd>
          <dt>
            <span id="codigoPrograma">
              <Translate contentKey="test2SpringBootApp.estudiante.codigoPrograma">Codigo Programa</Translate>
            </span>
          </dt>
          <dd>{estudianteEntity.codigoPrograma}</dd>
          <dt>
            <Translate contentKey="test2SpringBootApp.estudiante.programaAcademico">Programa Academico</Translate>
          </dt>
          <dd>{estudianteEntity.programaAcademico ? estudianteEntity.programaAcademico.id : ''}</dd>
          <dt>
            <Translate contentKey="test2SpringBootApp.estudiante.planEstudios">Plan Estudios</Translate>
          </dt>
          <dd>{estudianteEntity.planEstudios ? estudianteEntity.planEstudios.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/estudiante" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/estudiante/${estudianteEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default EstudianteDetail;
