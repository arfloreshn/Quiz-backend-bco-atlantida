this.firmantesRepo = SpringAppContextFactory.getInstance(CountryEnum.SV).getBean(TConFirmantesRepository.class);
this.tgcardRepository = SpringAppContextFactory.getInstance(CountryEnum.SV).getBean(TGcardConsultaRepository.class);
this.municipiosRepository = SpringAppContextFactory.getInstance(CountryEnum.SV).getBean(TMunicipiosRepository.class);


this.sucursalesRepo = SpringAppContextFactory.getInstanceOrion().getBean(TCbranchofficesRepository.class);
this.tipoClientesRepositorio = SpringAppContextFactory.getInstanceOrion().getBean(TCclienttypeRepository.class);
this.evaluacionRepositorio = SpringAppContextFactory.getInstanceOrion().getBean(EvaluacionRepository.class);
this.personaRepo = SpringAppContextFactory.getInstanceOrion().getBean(PersonasYJuridicosRepository.class);
this.nacionalidadRepository = SpringAppContextFactory.getInstanceOrion().getBean(TCnationalitiesRepository.class);
this.estadoCivilRepository = SpringAppContextFactory.getInstanceOrion().getBean(TCmaritalstatusRepository.class);
this.profesionesRepo = SpringAppContextFactory.getInstanceOrion().getBean(TCProfessionsRepository.class);
this.parametrosTipoIdentificacion = SpringAppContextFactory.getInstanceOrion().getBean(TCidentificationtypeRepository.class);
this.parametrosProducto = SpringAppContextFactory.getInstanceOrion().getBean(TCtproductRepository.class);
this.interesrateRepositorio = SpringAppContextFactory.getInstanceOrion().getBean(TCtpro_client_interesrateRepository.class);
this.fiadorRepo = SpringAppContextFactory.getInstanceOrion().getBean(PersonasYJuridicosRepository.class);