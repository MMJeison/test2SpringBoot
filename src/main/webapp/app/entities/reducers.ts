import region from 'app/entities/region/region.reducer';
import country from 'app/entities/country/country.reducer';
import location from 'app/entities/location/location.reducer';
import department from 'app/entities/department/department.reducer';
import task from 'app/entities/task/task.reducer';
import employee from 'app/entities/employee/employee.reducer';
import job from 'app/entities/job/job.reducer';
import jobHistory from 'app/entities/job-history/job-history.reducer';
import materiaSolicitud from 'app/entities/materia-solicitud/materia-solicitud.reducer';
import solicitudHomologacion from 'app/entities/solicitud-homologacion/solicitud-homologacion.reducer';
import materia from 'app/entities/materia/materia.reducer';
import relacion from 'app/entities/relacion/relacion.reducer';
import historiaAcademica from 'app/entities/historia-academica/historia-academica.reducer';
import estudiante from 'app/entities/estudiante/estudiante.reducer';
import programaAcademico from 'app/entities/programa-academico/programa-academico.reducer';
import planEstudios from 'app/entities/plan-estudios/plan-estudios.reducer';
import materiaSemestre from 'app/entities/materia-semestre/materia-semestre.reducer';
import semestre from 'app/entities/semestre/semestre.reducer';
import estadoSolicitud from 'app/entities/estado-solicitud/estado-solicitud.reducer';
import estadoSemestre from 'app/entities/estado-semestre/estado-semestre.reducer';
import tercio from 'app/entities/tercio/tercio.reducer';
import situacionAcademica from 'app/entities/situacion-academica/situacion-academica.reducer';
import tipoSemestre from 'app/entities/tipo-semestre/tipo-semestre.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  region,
  country,
  location,
  department,
  task,
  employee,
  job,
  jobHistory,
  materiaSolicitud,
  solicitudHomologacion,
  materia,
  relacion,
  historiaAcademica,
  estudiante,
  programaAcademico,
  planEstudios,
  materiaSemestre,
  semestre,
  estadoSolicitud,
  estadoSemestre,
  tercio,
  situacionAcademica,
  tipoSemestre,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
